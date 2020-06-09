<template>
  <div class="d-flex flex-grow-1 align-center justify-end">
    <div class="d-flex">
      <div class="playerTitleContainer align-center justify-end d-flex  mr-2">
        <span class="align-center justify-center d-flex playerTitle">{{ videoTitle }}</span>
      </div>
      
      <v-btn small icon @click="playPrevious"> 
        <v-icon>mdi-rewind</v-icon>
      </v-btn>
      <v-btn small icon @click="togglePlay"> 
        <v-icon v-if="playerIsPlaying">mdi-pause</v-icon>
        <v-icon v-else>mdi-play</v-icon>
      </v-btn>
      <v-btn small icon @click="playNext"> 
        <v-icon>mdi-fast-forward</v-icon>
      </v-btn>
      <v-btn small icon @click="toggleExpandedPlayer"> 
        <v-icon v-if="playerExpanded">mdi-chevron-up</v-icon>
        <v-icon v-else>mdi-chevron-down</v-icon>
      </v-btn>
    </div>

    <div id="expandedPlaylistContainer" :class="[isPlayerExpanded ? 'isVisible' : '']">
      <div>
        <div id="playlistIFrame"></div>
      </div>
    </div>
  </div>
</template>

<script>
  //import PlaylistPlayer from './playlistPlayer/PlaylistPlayer'
  
  export default {
    name: 'PlaylistPlayer',
    data: function() {
      return {
        playerExpanded: false,
        playerIsPlaying: true,
        videoTitle: ''
      }
    },
    mounted: function() {
      var self = this;

      setInterval( function() {
          // Check if player is initialized and the video is loaded
          if ( window.ytPlayer && window.ytPlayer.getVideoData ) {
              // States: 1: playing, 2: paused, 5: stopped
              if ( [ 1, 2, 5 ].indexOf( window.ytPlayer.getPlayerState() ) >= 0 ) {
                  // Set the innerText of div with id="title" to player title
                  self.videoTitle = window.ytPlayer.getVideoData().title;
              }
          }
      }, 100 );
    },
    methods: {
      toggleExpandedPlayer: function() {
        this.playerExpanded = !this.playerExpanded;
      },
      playNext: function() {
        if (!window.ytPlayer || !window.ytPlayer.nextVideo) {
          return
        }

        window.ytPlayer.nextVideo();
      },
      playPrevious: function() {
        if (!window.ytPlayer || !window.ytPlayer.previousVideo) {
          return
        }

        window.ytPlayer.previousVideo();
      },
      togglePlay: function() {
        if (!window.ytPlayer || !window.ytPlayer.pauseVideo) {
          return
        }

        if (this.playerIsPlaying) {
          window.ytPlayer.pauseVideo();
          this.playerIsPlaying = false;
        } else {
          window.ytPlayer.playVideo();
          this.playerIsPlaying = true;
        }
      }
    },
    computed: {
      isPlayerExpanded: function() {
        return this.playerExpanded;
      },
      isPlayerPlaying: function() {
         return (!window.ytPlayer ? false : window.ytPlayer.getPlayerState() === 1) || this.playerIsPlaying
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
  }

  #expandedPlaylistContainer.isVisible {
    height: 200px;
  }

  #expandedPlaylistContainer div {
    position: absolute;
    top: 0; left: 0;
    width: 100%; 
    height: 100%;
    z-index: 10;
    overflow: hidden;
  }

  .playerTitle {
    max-width: calc(50vw);
  }

</style>
