import Snackbar from 'react-native-snackbar';

export const showMessage = (
  message = 'Error!',
  duration = 'long',
  type = 'error',
  options,
) => {
  if (type == 'error') {
  }

  const getDuration = () => {
    // if (!Snackbar){ alert(message); return; }
    switch (duration) {
      case 'short':
        return Snackbar.LENGTH_SHORT;
      case 'long':
        return Snackbar.LENGTH_LONG;
      case 'infinite':
        return Snackbar.LENGTH_INDEFINITE;
    }
  };

  setTimeout(function () {
    Snackbar.show({text: message, duration: getDuration(), ...options});
  }, 50);
};
