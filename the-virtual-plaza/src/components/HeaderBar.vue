<template>
  <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../assets/virtualPlazaLogo.png"
          transition="scale-transition"
          width="50"
        />

        <span>Ｔｈｅ Ｖｉｒｔｕａｌ Ｐｌａｚａ</span>
      </div>

      <v-spacer></v-spacer>

      <PlaylistPlayer/>
    </v-app-bar>
</template>

<script>
  import PlaylistPlayer from './playlistPlayer/PlaylistPlayer'

  export default {
    name: 'HeaderBar',
    components: {
        PlaylistPlayer
    }
  }
</script>
