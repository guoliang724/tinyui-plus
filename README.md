# 🎨 tinyui-plus

> A Vue3 + TypeScript component library for front-end developers to learn and explore, managed using a Monorepo structure.

<p align="center">
  <a href="https://www.npmjs.com/package/tinyui-plus">
    <img src="https://img.shields.io/npm/dt/tinyui-plus.svg" alt="Total Downloads">
  </a>
  <a href="https://www.npmjs.com/package/vue">
    <img src="https://img.shields.io/badge/vue-3.x-brightgreen.svg" alt="Vue Version">
  </a>
  <a href="https://codecov.io/gh/guoliang724/tiny-js-util2">
    <img src="https://img.shields.io/codecov/c/github/guoliang724/tiny-js-util2/main.svg" alt="Coverage">
  </a>
  <a href="https://github.com/guoliang724/tiny-js-util2/actions">
    <img src="https://img.shields.io/github/actions/workflow/status/guoliang724/tiny-js-util2/ci.yml?branch=main" alt="Build Status">
  </a>
</p>

---

## 🧩 Features (Current Version)

- Built with **Vue 3** + **TypeScript**  
- Monorepo architecture for scalable and maintainable components  
- Tree-shaking / on-demand import supported  
- Full TypeScript type support for all components  
- Easy to learn and suitable for front-end developers studying component design  

---

## 📥 Installation

```bash
npm install tinyui-plus
# or
yarn add tinyui-plus
# or
pnpm add tinyui-plus
```
## 🎛 Usage
### Global Import
```ts

import { createApp } from 'vue';
import App from './App.vue';
import TinyUIPlus from 'tinyui-plus/components';
import 'tinyui-plus/theme-chalk/index.css';

const app = createApp(App);
app.use(TinyUIPlus);
app.mount('#app');
```
### On-Demand Import
```ts 
import { Button , Select} from 'tinyui-plus/components';
import 'tinyui-plus/theme-chalk/index.css';

Vue.component(Select.name, Select)
Vue.component(Button.name, Button)

```
### Use 
```ts
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <tiny-card
      img-src="xxx"
      summary="xxx"
    >
      <template #footer>
        <div class="footer">
          <div class="level">xxx</div>
          <div class="price">xxx</div>
        </div>
      </template>
    </tiny-card>
  </div>
</template>

```
## 📊 Changelog
All notable changes are documented in the CHANGELOG.md. This project follows the Keep a Changelog format.

## 💡 Contributing
If you encounter any issues while using tinyui-plus, or if you have any suggestions or ideas, feel free to open an issue or submit a pull request on GitHub.

## 🔖 License
tinyui-plus is released under the MIT License. For more details, please refer to the LICENSE file.