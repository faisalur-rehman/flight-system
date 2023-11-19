import {StyleSheet, Text, View, Platform, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {colors, fonts} from '../../utils/theme';
import {Image} from 'react-native';
import {
  ArrowIcon,
  ClockCalendarIcon,
  ClockIcon,
  DotIcon,
  LuggageIcon,
  MarkerIcon,
  PlaneIcon,
  UserImg,
} from '../../assets';
import {Divider} from '@rneui/themed';
import Button from '../Button';

const FlightCard = () => {
  const [isShowDetail, setIsShowDetail] = useState(false);
  const [routeIndex, setRouteIndex] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.flexRow}>
        <View style={[styles.flexRow, {justifyContent: 'flex-start'}]}>
          <Image source={UserImg} style={styles.img} />
          <Text style={styles.name}>Emirates</Text>
        </View>
        <Text style={styles.amount}>$560.33</Text>
      </View>
      <View style={[styles.flexRow, {marginTop: 15, marginBottom: 5}]}>
        <Text style={styles.location}>DXB</Text>
        <Text style={styles.location}>KHI</Text>
        <Text style={styles.location}>LHE</Text>
      </View>
      <View style={styles.flexRow}>
        <DotIcon />
        <View style={styles.dashedView} />
        <PlaneIcon />
        <View style={styles.dashedView} />
        <DotIcon />
      </View>
      <View style={[styles.flexRow, {marginVertical: 5}]}>
        <Text style={styles.location}>09:35</Text>
        <View style={styles.flexRow}>
          <ClockIcon />
          <Text style={styles.location}>08:45</Text>
        </View>
        <Text style={styles.location}>07:50</Text>
      </View>
      <Divider style={{marginVertical: 10}} color={colors.textGray} />
      {isShowDetail ? (
        <>
          <View style={styles.flexRow}>
            <View
              style={[styles.route, routeIndex == 0 && styles.selectedRoute]}>
              <Text style={styles.detail}>(LHE) - (DXB)</Text>
            </View>
            <View
              style={[styles.route, routeIndex == 1 && styles.selectedRoute]}>
              <Text style={styles.detail}>(DXB) - (LHE)</Text>
            </View>
          </View>
          <View
            style={[
              styles.flexRow,
              {justifyContent: 'flex-start', marginVertical: 15},
            ]}>
            <ClockCalendarIcon />
            <View style={{marginLeft: 10}}>
              <Text style={[styles.location, styles.bold]}>13 APRIL 2023</Text>
              <Text style={styles.location}>Tuesday</Text>
            </View>
          </View>
          <Text style={[styles.location, {marginLeft: 10}]}>
            <Text style={styles.name}>09:35 Lahore </Text>
            Allama Iqbal International (LHE)
          </Text>
          <View
            style={[
              styles.flexRow,
              {justifyContent: 'flex-start', marginVertical: 15},
            ]}>
            <View style={styles.flexRow}>
              <Image source={UserImg} style={styles.img} />
              <View
                style={{
                  alignItems: 'center',
                  marginHorizontal: 10,
                }}>
                <DotIcon />
                <View style={styles.verticalDashedView} />
                <PlaneIcon />
                <View style={styles.verticalDashedView} />
                <DotIcon />
              </View>
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={styles.name}>Emirates</Text>
              <Text style={styles.location}>
                Time Travel <Text style={{color: colors.primary}}>1h 45m</Text>
              </Text>
            </View>
          </View>
          <Text style={[styles.location, {marginLeft: 10}]}>
            <Text style={styles.name}>12:45 Karachi </Text>
            Jinnah International (KHI)
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#E1EDF2',
              backgroundColor: '#F2FBFF',
              borderRadius: 10,
              marginVertical: 10,
              flexDirection: 'row',
              alignItems: 'center',
              padding: 10,
            }}>
            <ClockIcon />
            <Text style={[styles.location, {marginLeft: 5}]}>
              3h 50m layover - Jinnah International (KHI)
            </Text>
          </View>
          <Text style={[styles.location, {marginLeft: 10}]}>
            <Text style={styles.name}>09:35 Lahore </Text>
            Allama Iqbal International (LHE)
          </Text>
          <View
            style={[
              styles.flexRow,
              {justifyContent: 'flex-start', marginVertical: 15},
            ]}>
            <View style={styles.flexRow}>
              <Image source={UserImg} style={styles.img} />
              <View
                style={{
                  alignItems: 'center',
                  marginHorizontal: 10,
                }}>
                <DotIcon />
                <View style={styles.verticalDashedView} />
                <PlaneIcon />
                <View style={styles.verticalDashedView} />
                <DotIcon />
              </View>
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={styles.name}>Emirates</Text>
              <Text style={styles.location}>
                Time Travel <Text style={{color: colors.primary}}>1h 45m</Text>
              </Text>
            </View>
          </View>
          <Text style={[styles.location, {marginLeft: 10}]}>
            <Text style={styles.name}>12:45 Karachi </Text>
            Jinnah International (KHI)
          </Text>
          <View
            style={[
              styles.flexRow,
              {justifyContent: 'flex-start', marginVertical: 15},
            ]}>
            <MarkerIcon />
            <View style={{marginLeft: 10}}>
              <Text style={[styles.location, styles.bold]}>14 APRIL 2023</Text>
              <Text style={styles.location}>Thursday</Text>
              <Text style={[styles.location, {marginTop: 10}]}>
                Arrived at destination
              </Text>
              <Text style={[styles.location, styles.bold]}>Dubai</Text>
            </View>
          </View>
        </>
      ) : null}
      <View
        style={[
          styles.flexRow,
          isShowDetail && {justifyContent: 'flex-start'},
        ]}>
        <View style={styles.button}>
          <Text style={styles.buttonTitle}>Economy Light</Text>
        </View>
        <View style={styles.button}>
          <View style={styles.flexRow}>
            <LuggageIcon />
            <Text style={styles.buttonTitle}> 1 x 25kg</Text>
          </View>
        </View>
        {!isShowDetail ? (
          <TouchableOpacity
            onPress={() => setIsShowDetail(true)}
            style={styles.flexRow}>
            <Text style={styles.detail}>Show Details</Text>
            <ArrowIcon />
          </TouchableOpacity>
        ) : null}
      </View>
      {isShowDetail ? (
        <>
          <Divider style={{marginVertical: 10}} color={colors.textGray} />
          <View style={styles.flexRow}>
            <Button
              title={'Select Flight'}
              titleStyle={{fontSize: 12, fontFamily: fonts.semiBold}}
              containerStyle={{paddingHorizontal: 15}}
            />
            <TouchableOpacity
              onPress={() => setIsShowDetail(false)}
              style={styles.flexRow}>
              <Text style={styles.detail}>Hide Details </Text>
              <View style={styles.rotateArrow}>
                <ArrowIcon />
              </View>
            </TouchableOpacity>
          </View>
        </>
      ) : null}
    </View>
  );
};

export default FlightCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.70)',
    paddingVertical: 20,
    paddingHorizontal: 25,
    marginHorizontal: 25,
    margin: 15,
    borderRadius: 20,
    shadowColor: 'rgba(0, 0, 0, 0.07)',

    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.07)',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 35,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  img: {
    width: 38,
    height: 38,
    borderRadius: 19,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  amount: {
    fontFamily: fonts.bold,
    fontSize: 20,
    color: colors.primary,
  },
  name: {
    fontFamily: fonts.semiBold,
    fontSize: 16,
    color: colors.blackText,
    marginHorizontal: 5,
  },
  location: {
    fontFamily: fonts.medium,
    fontSize: 14,
    color: colors.blackText,
  },
  dashedView: {
    width: '30%',
    borderWidth: 0.9,
    borderColor: colors.primary,
    borderStyle: 'dashed',
    height: 1,
  },
  verticalDashedView: {
    height: 40,
    borderWidth: 0.9,
    borderColor: colors.primary,
    borderStyle: 'dashed',
    width: 1,
  },
  button: {
    borderColor: '#E1EDF2',
    backgroundColor: '#F2FBFF',
    borderRadius: 30,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginRight: 5,
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonTitle: {
    fontSize: 12,
    fontFamily: fonts.semiBold,
    color: colors.blackText,
  },
  detail: {
    fontSize: 12,
    fontFamily: fonts.medium,
    color: colors.primary,
    textAlign: 'center',
  },
  route: {
    width: '50%',
    borderBottomColor: colors.textGray,
    borderBottomWidth: 1.5,
    paddingVertical: 10,
  },
  selectedRoute: {
    borderBottomColor: colors.primary,
  },
  bold: {fontFamily: fonts.semiBold},
  rotateArrow: {
    transform: [{rotate: '180deg'}],
  },
});
