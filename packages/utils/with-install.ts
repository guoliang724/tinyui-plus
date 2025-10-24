// export a helper function to install dependencies

import type { App, Plugin } from "vue";

export type SFCWithInstall<T> = T & Plugin; // & { install?: (app: App) => void };

export const withInstall = <T>(component: T): SFCWithInstall<T> => {
  (component as SFCWithInstall<T>).install = (app: App): void => {
    app.component((component as any).name, component as SFCWithInstall<T>);
  };
  return component as SFCWithInstall<T>;
};

// use like this:
// import { withInstall } from 'path/to/with-install';
// import MyComponent from './MyComponent.vue';
// export default withInstall(MyComponent);

// in other components:
// app.use(MyComponent);
