import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false

Vue.filter('date', function (value) {
  if (!value) return '';
  value = new Date(value);
  return value.toLocaleDateString('de-DE');
})

new Vue({
  render: h => h(App),
}).$mount('#app')
