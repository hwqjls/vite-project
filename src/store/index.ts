import { createPinia } from 'pinia';
import persistedstate from 'pinia-persistedstate';

const pinia = createPinia();

pinia.use(
  persistedstate({
    storage: window.sessionStorage, // 修改存储的状态
  }),
);

export default pinia;