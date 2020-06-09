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
            primary: '#afe9ff',
            secondary: '#ffcfea',
            accent: '#8c9eff',
            error: '#b71c1c',
          },
        },
    }
});
