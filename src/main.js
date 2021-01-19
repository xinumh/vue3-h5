import { createApp } from 'vue'
import 'amfe-flexible';
import App from './App.vue'
import router from './router'

import { Button, CellGroup, Cell } from 'vant';

const app = createApp(App);

app.use(Button);
app.use(CellGroup);
app.use(Cell);

app.use(router)

app.mount('#app')
