import React, {useState} from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import {SignupScreen} from '../../screens';
import {showMessage} from '../../utils/helpers';
import {api} from '../../api';
import {url} from '../../api/urls';
import {NAVIGATION_ROUTES} from '../../navigation/navigationRoutes';

const SignupContainer = ({navigation}) => {
  const [fields, setFields] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
  });
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleInput = (key, value) => {
    setFields(prev => ({...prev, [key]: value}));
  };

  const validateFields = () => {
    const {email, password, confirmPassword, firstName, lastName, phone} =
      fields;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!firstName) {
      showMessage('Please enter your first name.');
      return false;
    }
    if (!lastName) {
      showMessage('Please enter your last name.');
      return false;
    }
    if (!email || !regex.test(email)) {
      showMessage('Please enter a valid email address.');
      return false;
    }

    if (!password || !passwordRegex.test(password)) {
      showMessage(
        'The password must be at least 8 characters, containing atleast 1 uppercase and 1 lowercase letter.',
      );
      return false;
    }

    if (confirmPassword != password) {
      showMessage('Passwords does not match.');
      return false;
    }
    if (!phone) {
      showMessage('Please enter a your phone number.');
      return false;
    }
    if (!checked) {
      showMessage('Please agree to all terms and conditions.');
      return false;
    }

    return true;
  };

  const handleSignup = async () => {
    if (!validateFields()) {
      return;
    }
    setLoading(true);
    try {
      const res = await api.post(url.register, fields);
      if (res.status == 200) {
        navigation?.navigate(NAVIGATION_ROUTES.OTP_VERFICATION, {
          userId: res.data?.data?.user_id,
        });
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
      <SignupScreen
        checked={checked}
        handleChecked={setChecked}
        handleSignup={handleSignup}
        handleInput={handleInput}
        navigation={navigation}
      />
      <Spinner visible={loading} />
    </>
  );
};

export default SignupContainer;
