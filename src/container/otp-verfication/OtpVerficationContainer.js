import React, {useState} from 'react';
import {OtpVerficationScreen} from '../../screens';
import {api} from '../../api';
import {url} from '../../api/urls';
import {showMessage} from '../../utils/helpers';
import {Platform} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';
import {NAVIGATION_ROUTES} from '../../navigation/navigationRoutes';

const OtpVerficationContainer = ({navigation, route: {params}}) => {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleVerfication = async () => {
    if (!code) {
      showMessage('Please enter the OTP code recieved before submitting.');
      return;
    }
    const fields = {
      otp: code,
      user_id: params?.userId,
      app: 'mobile',
      device_type: Platform.OS,
    };
    setLoading(true);
    try {
      const res = await api.post(url.loginOtp, fields);
      if (res.data?.data != null) {
        showMessage('Verification Successful!');
        await AsyncStorage.setItem('userData', JSON.stringify(res.data?.data));
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: NAVIGATION_ROUTES.HOME}],
          }),
        );
      } else {
        showMessage(res.data?.message);
      }
    } catch (error) {
      console.error({error});
    }
    setLoading(false);
  };

  return (
    <>
      <OtpVerficationScreen
        code={code}
        setCode={setCode}
        handleVerfication={handleVerfication}
      />
      <Spinner visible={loading} />
    </>
  );
};

export default OtpVerficationContainer;
