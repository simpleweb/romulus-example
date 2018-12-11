// @flow
import * as React from "react";
import { ENV } from "Romulus/App/Config";
import Layout from "Romulus/App/Components/Layout";
import Environment from "Romulus/App/Components/Utilities/Environment";

type Props = {
  children: React.Node,
};

const App = ({ children }: Props): React.Node => (
  <Layout.Full>
    {children}
    <Environment env={ENV} />
  </Layout.Full>
);

export default App;
