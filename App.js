import React from 'react';
import { AppLoading, Font } from 'expo';
import RobotoFont from 'native-base/Fonts/Roboto.ttf';
import RoboToMediumFont from 'native-base/Fonts/Roboto_medium.ttf';

import Home from 'components/pages/Home';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoadingComplete: false,
    };
  }

  loadResourcesAsync = async () => (
    Promise.all([
      Font.loadAsync({
        Roboto: RobotoFont,
        Roboto_medium: RoboToMediumFont,
      }),
    ])
  );

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    const { isLoadingComplete } = this.state;

    if (!isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onFinish={this.handleFinishLoading}
        />
      );
    }
    return (
      <Home />
    );
  }
}

export default App;
