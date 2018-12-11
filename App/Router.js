// @flow
import { createStackNavigator, createAppContainer } from "react-navigation";
import Screens from "Romulus/App/Screens";

const RootNavigator = createStackNavigator(
  {
    Main: {
      screen: Screens.Main,
      path: "main",
    },
    Styleguide: {
      screen: Screens.Styleguide,
      path: "styleguide",
    },
  },
  {
    initialRouteName: "Main",
  }
);

export default createAppContainer(RootNavigator);
