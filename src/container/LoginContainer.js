import React, {useState} from 'react';
import {LoginScreen} from '../screens';
import {api} from '../api';
import {url} from '../api/urls';
import {showMessage} from '../utils/helpers';
import Spinner from 'react-native-loading-spinner-overlay';

const LoginContainer = ({navigation}) => {
  const [fields, setFields] = useState({email: '', password: ''});
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleInput = (key, value) => {
    setFields(prev => ({...prev, [key]: value}));
  };

  const validateFields = () => {
    const {email, password} = fields;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !regex.test(email)) {
      showMessage('Please enter a valid email address.');
      return false;
    }

    if (!password || password.length < 8) {
      showMessage('The password must be at least 8 characters.');
      return false;
    }

    return true;
  };

  const handleLogin = async () => {
    if (!validateFields()) {
      return;
    }
    setLoading(true);
    try {
      const res = await api.post(url.login, fields);
      if (res.status == 200) {
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
      <LoginScreen
        checked={checked}
        handleChecked={setChecked}
        handleLogin={handleLogin}
        handleInput={handleInput}
        navigation={navigation}
      />
      <Spinner visible={loading} />
    </>
  );
};

export default LoginContainer;
