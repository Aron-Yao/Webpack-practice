import routes from './routes';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

var router = new VueRouter();
var App = Vue.extend({});

router.map(routes);

router.start(App, '#app');