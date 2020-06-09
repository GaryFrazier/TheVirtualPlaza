<template>
  <div>
    <div class="d-flex">
      <v-btn small icon @click="toggleExpandedPlayer"> 
        <v-icon v-if="playerExpanded">mdi-chevron-up</v-icon>
        <v-icon v-else>mdi-chevron-down</v-icon>
      </v-btn>
    </div>

    <div id="expandedPlaylistContainer" :class="[isPlayerExpanded ? 'isVisible' : '', 'primary']">
      <iframe type="text/html" width="350" height="200" src="https://www.youtube.com/embed/videoseries?list=PLEe9fYs-_7nkA5xLFnrUEUbkCU_41Qkod&controls=0&modestbranding=1&disablekb=1&autoplay=1&autohide=1&loop=1&enablejsapi=1&fs=0" frameborder="0" allow="autoplay" ></iframe>
    </div>
  </div>
</template>

<script>
  //import PlaylistPlayer from './playlistPlayer/PlaylistPlayer'
  
  export default {
    name: 'PlaylistPlayer',
    data: function() {
      return {
        playerExpanded: false
      }
    },
    methods: {
      toggleExpandedPlayer: function() {
        this.playerExpanded = !this.playerExpanded;
      }
    },
    computed: {
      isPlayerExpanded: function() {
        return this.playerExpanded
      }
    }
  }
</script>

<style scoped>
  #expandedPlaylistContainer {
    transition: height .5s;
    height: 0;
    width: 350px;
    position: absolute;
    right: 10px;
    bottom: 0;
    transform: translateY(100%);
    box-shadow:0px 7px 4px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow:0px 7px 4px rgba(0, 0, 0, 0.2);
    -moz-box-shadow:0px 7px 4px rgba(0, 0, 0, 0.2);
  }

  #expandedPlaylistContainer.isVisible {
    height: 200px;
  }

  #expandedPlaylistContainer iframe {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    z-index: 10;
  }
</style>
