import Button from "./button/src/button.vue";
import Card from "./card/src/card.vue";

import type { App, Plugin } from "vue";

const components = [Button, Card];

const install: Exclude<Plugin["install"], undefined> = (app: App) => {
  components.forEach((component: any) => {
    app.component(component.name, component);
  });
};

const tinyui: Plugin = {
  install,
};

export default tinyui;
