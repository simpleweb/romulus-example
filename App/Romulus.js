// @flow
import * as React from "react";
import { Platform } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { ThemeProvider } from "styled-components";
import Theme from "Romulus/App/Styles/Theme";
import Router from "Romulus/App/Router";
import { store, persistor } from "Romulus/App/Store";
import { runSagaMiddleware } from "Romulus/App/Store/Middleware/Saga";
import App from "Romulus/App/Components/App";

const prefix = Platform.OS === "android" ? "Romulus://Romulus/" : "Romulus://";

class Romulus extends React.Component<{}> {
  render(): React.Node {
    return (
      <ThemeProvider theme={Theme}>
        <App>
          <Provider store={store}>
            <PersistGate
              loading={null}
              onBeforeLift={runSagaMiddleware}
              persistor={persistor}
            >
              <Router uriPrefix={prefix} />
            </PersistGate>
          </Provider>
        </App>
      </ThemeProvider>
    );
  }
}

export default Romulus;
