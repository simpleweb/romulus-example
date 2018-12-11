// @flow
import * as React from "react";
import { Text, Alert } from "react-native";
import Layout from "Romulus/App/Components/Layout";
import Button from "Romulus/App/Components/Button";

type Props = {
  requestExample: Function,
  installed: boolean,
};

const Styleguide = ({ installed, requestExample }: Props): React.Node => (
  <Layout.Scroll>
    <Layout.Padded>
      <Text>Styleguide</Text>

      <Heading>Button</Heading>
      <Button onPress={() => Alert.alert("Button pressed")}>Button</Button>

      <Heading>Request Example (check console)</Heading>
      <Button onPress={requestExample}>Request Example</Button>

      <Heading>Map props example</Heading>
      <Text>Is app installed? {installed ? "Yes" : "No"}</Text>
    </Layout.Padded>
  </Layout.Scroll>
);

const Heading = ({ children }: { children: React.Node }): React.Node => (
  <Text style={{ fontWeight: "bold", marginTop: 30, marginBottom: 10 }}>
    {children}
  </Text>
);

export default Styleguide;
