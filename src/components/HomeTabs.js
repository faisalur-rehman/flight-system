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
import {useSelector} from 'react-redux';

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
  const data = useSelector(state => state?.travelers);
  const [index, setIndex] = React.useState(0);
  const [isShowMore, setIsShowMore] = useState(false);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  return (
    <View style={styles.container}>
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
            <View style={styles.button}>
              <Text style={styles.buttonTitle}>Business</Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.buttonTitle}>One Way</Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.buttonTitle}>Round Trip</Text>
            </View>
          </View>
          <View style={[styles.flexRow, {justifyContent: 'space-between'}]}>
            <FlightSearchField
              label={'Flying From'}
              icon={<PlaneFromIcon />}
              placeholder="Dubai (DXB)"
            />
            <FlightSearchField
              label={'Flying To'}
              icon={<PlaneToIcon />}
              placeholder="Sharjah (SHJ)"
            />
          </View>
          <FlightSearchField
            label={'Departure'}
            icon={<CalendarIcon />}
            placeholder="Sharjah (SHJ)"
            width="100%"
          />
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
                disabled={!data?.travelers}
                title={'Search'}
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
});
