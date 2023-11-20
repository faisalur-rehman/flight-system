import React, {useState} from 'react';
import {Text} from '@rneui/themed';
import {Platform, StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  ArrowIcon,
  CalendarIcon,
  CarIcon,
  HotelIcon,
  PassengersIcon,
  PlaneFromIcon,
  PlaneIcon,
  PlaneToIcon,
} from '../assets';
import {colors, fonts} from '../utils/theme';
import Button from './Button';
import TravelersBottomSheet from './bottomsheet/TravelersBottomSheet';
import FlightSearchField from './textfields/FlightSearchField';
import {useDispatch, useSelector} from 'react-redux';
import {NAVIGATION_ROUTES} from '../navigation/navigationRoutes';
import {useNavigation} from '@react-navigation/native';
import {api} from '../api';
import {url} from '../api/urls';
import {showMessage} from '../utils/helpers';
import DatePicker from 'react-native-date-picker';
import Spinner from 'react-native-loading-spinner-overlay';
import dayjs from 'dayjs';
import {setFlightDetail} from '../redux/reducers/TravelersSlice';
import {validateFlightSearch} from '../utils/validations/SearchFlightSchema';

const TABS = [
  {
    title: 'Flights',
    icon: <PlaneIcon />,
  },
  {
    title: 'Hotels',
    icon: <HotelIcon />,
  },
  {
    title: 'Car Rental',
    icon: <CarIcon />,
  },
];

export const HomeTabs = () => {
  const nav = useNavigation();
  const data = useSelector(state => state?.travelers);
  const dispatch = useDispatch();
  const [index, setIndex] = React.useState(0);
  const [isShowMore, setIsShowMore] = useState(false);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dates, setDates] = useState({
    return: null,
    departure: null,
  });
  const [dateType, setdateType] = useState(null);
  const [flightData, setFlightData] = useState({
    journeyType: null,
    OriginDestinationInfo: [],
  });

  const handleFlightType = journeyType => {
    setFlightData(prev => ({...prev, journeyType}));
  };

  const handleFlightSearch = async () => {
    if (!validateFlightSearch({...flightData, ...dates, dateType})) {
      return;
    }
    const {OriginDestinationInfo} = flightData;
    const payload = {
      ...flightData,
      OriginDestinationInfo: [
        {
          ...OriginDestinationInfo[0],
          departureDate: dayjs(dates.departure).format('YYYY-MM-DD'),
        },
      ],
      class: 'Economy',
      ...data?.travelers,
    };
    if (flightData.journeyType == 'Circle') {
      payload?.OriginDestinationInfo?.push({
        departureDate: dayjs(dates.departure).format('YYYY-MM-DD'),
        returnDate: dayjs(dates.return).format('YYYY-MM-DD'),
        airportOriginCode: OriginDestinationInfo[0]?.airportDestinationCode,
        airportDestinationCode: OriginDestinationInfo[0]?.airportOriginCode,
      });
    }
    dispatch(
      setFlightDetail({
        origin: OriginDestinationInfo[0]?.airportOriginCode,
        destination: OriginDestinationInfo[0]?.airportDestinationCode,
        departureDate: dayjs(dates.departure).format('YYYY-MM-DD'),
        ...(dates.return && {
          returnDate: dayjs(dates.return).format('YYYY-MM-DD'),
        }),
      }),
    );
    setLoading(true);
    try {
      const res = await api.post(url.flights_search, payload, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      console.log({data: res.data?.message});
      if (res.status == 200) {
        nav.navigate(NAVIGATION_ROUTES.FLIGHTS, {
          flights: res.data?.data?.flights,
        });
      } else {
        showMessage('No Results Found');
      }
    } catch (error) {
      console.error({error});
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Spinner visible={loading} />
      <View style={[styles.tabStyle, styles.flexRow]}>
        {TABS.map((tab, i) => (
          <TouchableOpacity
            onPress={() => setIndex(i)}
            key={tab.title}
            style={[
              styles.flexRow,
              styles.tab,
              index == i && styles.indicator,
            ]}>
            {tab.icon}
            <Text style={styles.title}>{tab.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={{width: '100%'}}>
        <View style={{width: '80%', alignSelf: 'center'}}>
          <View style={[styles.flexRow, styles.itemStyle]}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonTitle}>Business</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleFlightType('OneWay')}
              style={[
                styles.button,
                flightData?.journeyType == 'OneWay' && styles.selectedButton,
              ]}>
              <Text
                style={[
                  styles.buttonTitle,
                  flightData?.journeyType == 'OneWay' && styles.selectedText,
                ]}>
                One Way
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleFlightType('Circle')}
              style={[
                styles.button,
                flightData?.journeyType == 'Circle' && styles.selectedButton,
              ]}>
              <Text
                style={[
                  styles.buttonTitle,
                  flightData?.journeyType == 'Circle' && styles.selectedText,
                ]}>
                Round Trip
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.flexRow, {justifyContent: 'space-between'}]}>
            <FlightSearchField
              label={'Flying From'}
              onChangeText={text =>
                setFlightData(prev => ({
                  ...prev,
                  OriginDestinationInfo: [
                    {...prev.OriginDestinationInfo[0], airportOriginCode: text},
                  ],
                }))
              }
              icon={<PlaneFromIcon />}
              placeholder="Dubai (DXB)"
            />
            <FlightSearchField
              label={'Flying To'}
              icon={<PlaneToIcon />}
              onChangeText={text =>
                setFlightData(prev => ({
                  ...prev,
                  OriginDestinationInfo: [
                    {
                      ...prev.OriginDestinationInfo[0],
                      airportDestinationCode: text,
                    },
                  ],
                }))
              }
              placeholder="Sharjah (SHJ)"
            />
          </View>
          <View style={[styles.flexRow, {justifyContent: 'space-between'}]}>
            <TouchableOpacity
              onPress={() => setdateType('departure')}
              style={{
                width: flightData.journeyType == 'Circle' ? '48%' : '100%',
              }}>
              <FlightSearchField
                label={'Departure'}
                icon={<CalendarIcon />}
                disabled
                value={
                  dates.departure
                    ? dayjs(dates.departure).format('DD MMM YYYY')
                    : ''
                }
                width="100%"
                placeholder="10/11/2023"
              />
            </TouchableOpacity>
            {flightData.journeyType == 'Circle' ? (
              <TouchableOpacity
                onPress={() => setdateType('return')}
                style={{
                  width: '48%',
                }}>
                <FlightSearchField
                  label={'Return'}
                  icon={<CalendarIcon />}
                  value={
                    dates.return
                      ? dayjs(dates.return).format('DD MMMM YYYY')
                      : ''
                  }
                  placeholder="10/11/2023"
                  disabled
                  width="100%"
                />
              </TouchableOpacity>
            ) : null}
          </View>
          {isShowMore ? (
            <>
              <TouchableOpacity onPress={() => setIsBottomSheetVisible(true)}>
                <FlightSearchField
                  label={'Travelers'}
                  icon={<PassengersIcon />}
                  placeholder="2 adults, 3 children"
                  width="100%"
                  value={data?.fieldValue || ''}
                  disabled
                />
              </TouchableOpacity>
              <Button
                disabled={!data?.fieldValue}
                title={'Search'}
                onPress={handleFlightSearch}
                containerStyle={{width: '100%'}}
              />
              <TouchableOpacity
                onPress={() => setIsShowMore(!isShowMore)}
                style={[styles.itemStyle, {alignItems: 'center'}]}>
                <Text style={styles.title}>View Less</Text>
                <View style={styles.rotateArrow}>
                  <ArrowIcon />
                </View>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity
              onPress={() => setIsShowMore(!isShowMore)}
              style={[styles.itemStyle, {alignItems: 'center'}]}>
              <Text style={styles.title}>View More</Text>
              <ArrowIcon />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <TravelersBottomSheet
        isVisible={isBottomSheetVisible}
        closeBottomSheet={() => setIsBottomSheetVisible(false)}
      />
      <DatePicker
        modal
        mode="date"
        open={dateType ? true : false}
        minimumDate={dateType == 'return' ? dates.departure : new Date()}
        date={
          dateType == 'return' && dates?.return
            ? new Date(dates.return)
            : dateType == 'departure' && dates?.departure
            ? new Date(dates.departure)
            : new Date()
        }
        onConfirm={date => {
          if (dateType == 'return') {
            setDates(prev => ({...prev, return: date}));
          } else {
            setDates(prev => ({...prev, departure: date}));
          }
          setdateType(null);
        }}
        onCancel={() => {
          setdateType(null);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.medium,
    fontSize: 14,
    color: colors.blackText,
    marginLeft: 2,
  },
  itemStyle: {
    justifyContent: 'center',
  },
  tab: {height: '100%', width: '33%', justifyContent: 'center'},
  tabStyle: {
    width: '85%',
    height: 60,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  container: {
    flex: 1,
    marginTop: -60,
    borderRadius: 20,
  },
  button: {
    borderColor: '#E1EDF2',
    borderRadius: 30,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    margin: 5,
    marginTop: 20,
  },
  buttonTitle: {
    fontSize: 12,
    fontFamily: fonts.semiBold,
    color: colors.textGray,
  },
  shadow: {
    shadowColor: 'rgba(26, 151, 212, 0.8)',
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(26, 151, 212, 0.5)',
        shadowOffset: {width: 0, height: 15},
        shadowOpacity: 1,
        shadowRadius: 20,
      },
      android: {
        elevation: 40,
      },
    }),
  },
  rotateArrow: {
    transform: [{rotate: '180deg'}],
  },
  indicator: {
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  selectedButton: {
    backgroundColor: colors.primary,
  },
  selectedText: {
    color: colors.white,
  },
});
