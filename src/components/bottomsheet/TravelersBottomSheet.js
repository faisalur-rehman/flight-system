import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {BottomSheet} from '@rneui/themed';
import {colors, fonts} from '../../utils/theme';
import Button from '../Button';
import {useDispatch} from 'react-redux';
import {setFlightTravelers} from '../../redux/reducers/TravelersSlice';

const TravelersBottomSheet = ({isVisible, closeBottomSheet}) => {
  const dispatch = useDispatch();
  const [travelers, setTravelers] = useState({
    infants: 0,
    childs: 0,
    adults: 0,
  });

  const handleTravelors = () => {
    dispatch(setFlightTravelers(travelers));
    closeBottomSheet();
  };

  return (
    <BottomSheet
      modalProps={{}}
      isVisible={isVisible}
      onBackdropPress={closeBottomSheet}>
      <View style={{backgroundColor: 'white', minHeight: 200, padding: 20}}>
        <View style={[styles.flexRow, styles.traveler]}>
          <Text style={styles.travelerText}>Adult</Text>
          <View style={styles.flexRow}>
            <TouchableOpacity
              onPress={() =>
                setTravelers(prev => ({...prev, adults: prev.adults - 1}))
              }
              disabled={travelers.adults < 1}
              style={styles.travelerButton}>
              <Text style={styles.travelerText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.travelerText}>{travelers.adults}</Text>
            <TouchableOpacity
              onPress={() =>
                setTravelers(prev => ({...prev, adults: prev.adults + 1}))
              }
              style={styles.travelerButton}>
              <Text style={styles.travelerText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.flexRow, styles.traveler]}>
          <Text style={styles.travelerText}>Children</Text>
          <View style={[styles.flexRow, {justifyContent: 'space-between'}]}>
            <TouchableOpacity
              onPress={() =>
                setTravelers(prev => ({...prev, childs: prev.childs - 1}))
              }
              disabled={travelers.childs < 1}
              style={styles.travelerButton}>
              <Text style={styles.travelerText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.travelerText}>{travelers.childs}</Text>
            <TouchableOpacity
              onPress={() =>
                setTravelers(prev => ({...prev, childs: prev.childs + 1}))
              }
              style={styles.travelerButton}>
              <Text style={styles.travelerText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.flexRow, styles.traveler]}>
          <Text style={styles.travelerText}>Infants</Text>
          <View style={[styles.flexRow, {justifyContent: 'space-between'}]}>
            <TouchableOpacity
              onPress={() =>
                setTravelers(prev => ({...prev, infants: prev.infants - 1}))
              }
              disabled={travelers.infants < 1}
              style={styles.travelerButton}>
              <Text style={styles.travelerText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.travelerText}>{travelers.infants}</Text>
            <View style={styles.travelerButton}>
              <TouchableOpacity
                onPress={() =>
                  setTravelers(prev => ({...prev, infants: prev.infants + 1}))
                }
                style={styles.travelerButton}>
                <Text style={styles.travelerText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Button
          title={'Done'}
          containerStyle={{width: '100%'}}
          onPress={handleTravelors}
        />
      </View>
    </BottomSheet>
  );
};

export default TravelersBottomSheet;

const styles = StyleSheet.create({
  traveler: {justifyContent: 'space-between', marginVertical: 10},
  travelerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 15,
    height: 30,
    width: 30,
    marginHorizontal: 10,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  travelerText: {
    fontFamily: fonts.bold,
    fontSize: 16,
    color: colors.blackText,
  },
});
