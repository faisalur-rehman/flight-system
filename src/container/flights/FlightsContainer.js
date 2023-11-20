import React from 'react';
import {FlightScreen} from '../../screens';
import {useSelector} from 'react-redux';

const FlightsContainer = ({navigation, route: {params}}) => {
  const travelers = useSelector(state => state?.travelers);

  return (
    <FlightScreen
      flights={params?.flights}
      navigation={navigation}
      travelers={travelers?.fieldValue}
      flightDetails={travelers?.flightDetails}
    />
  );
};

export default FlightsContainer;
