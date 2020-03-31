import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';

import App from './App.vue';
import router from './router';
import store from './store';

// plugins
Vue.use(VueCompositionApi);
Vue.config.productionTip = false;

// enable error logging
if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: 'https://dadece6a2a2c4518b794862a500456b2@sentry.io/5182235',
    integrations: [new Integrations.Vue({ Vue, attachProps: true })],
  });
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
