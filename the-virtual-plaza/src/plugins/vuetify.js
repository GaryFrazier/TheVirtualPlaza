import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    options: {
        customProperties: true
    },
    theme: {
        themes: {
          light: {
            primary: '#f28db3',
            secondary: '#ffcfea',
            accent: '#8c9eff',
            error: '#b71c1c',
          },
        },
    }
});
