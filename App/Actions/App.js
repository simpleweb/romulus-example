// @flow
export const APP_INSTALLED = "Romulus/APP_INSTALLED";

export type AppInstalled = {
  type: "Romulus/APP_INSTALLED",
};

export const appInstalled = (): AppInstalled => ({
  type: APP_INSTALLED,
});
