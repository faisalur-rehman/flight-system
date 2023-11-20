export const validateFlightSearch = flightData => {
  const {
    journeyType,
    OriginDestinationInfo,
    dateType,
    return: returnDate,
    departure,
  } = flightData;
  const {airportDestinationCode, airportOriginCode} = OriginDestinationInfo[0];
  if (!journeyType) {
    return false;
  }
  if (!airportDestinationCode) {
    return false;
  }
  if (!airportOriginCode) {
    return false;
  }
  if (!departure) {
    return false;
  }
  if (dateType == 'Circle' && !returnDate) {
    return false;
  }
  if (!airportDestinationCode) {
    return false;
  }
  return true;
};
