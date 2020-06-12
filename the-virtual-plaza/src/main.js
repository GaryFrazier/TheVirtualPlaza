var Vue = require('vue');
var jQuery = require('jquery');
window.$ = jQuery;
window.jQuery = jQuery;
window.Vue = Vue;
window.$event = require('service/event');

require('./firebase.js');
new Vue(require('views/root.vue'));
