<template>
  <v-app>
    <HeaderBar />

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import HeaderBar from './components/HeaderBar'; 

export default {
  name: 'App',

  components: {
    HelloWorld,
    HeaderBar
  },

  data: () => ({
    //
  }),
};
</script>
