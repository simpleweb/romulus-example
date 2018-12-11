// @flow
import * as React from "react";
import { type NavigationState } from "react-navigation";
import Layout from "Romulus/App/Components/Layout";
import Button from "Romulus/App/Components/Button";
import Text from "Romulus/App/Components/Text";

type Props = {
  navigation: NavigationState,
};

const Main = ({ navigation }: Props): React.Node => (
  <Layout.Center>
    <Text paragraph>Welcome to the React Native Generator! 👋</Text>
    <Button onPress={() => navigation.navigate("Styleguide")}>
      View the Styleguide
    </Button>
  </Layout.Center>
);

export default Main;
