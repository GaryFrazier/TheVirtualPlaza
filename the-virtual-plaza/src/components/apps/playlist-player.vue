<template>
    <div id="radioContainer">
        <div class="iFrameContainer">
            <div id="playlistIFrame"></div>
        </div>
        <div class="controlContainer">
            <button class="flex-button" @click="playPrevious"> 
                <i class="material-icons">skip_previous</i>
            </button>

            <button class="flex-button" @click="togglePlay"> 
                <i class="material-icons" v-if="playerIsPlaying">pause</i>
                <i class="material-icons" v-else>play_arrow</i>
            </button>
            <button class="flex-button" @click="playNext"> 
                <i class="material-icons">skip_next</i>
            </button>
            <button class="flex-button" @click="togglePlaylistMenu"> 
                <i class="material-icons">playlist_play</i>
            </button>
            
            <div class="playlistMenuContainer">
                <div
                    v-if="playlistMenu"
                    class="playlistMenuPopup"
                >

                    <h4 class="mx-1">Playlist:</h4><br /> 

                    <div class="playlistButton">
                        <input type="radio" v-model="selectedPlaylist" id="default" value="default"><label for="default"> The Virtual Plaza</label>
                    </div>
                    <div class="playlistButton">
                        <input type="radio" v-model="selectedPlaylist" value="mallsoft"><label for="mallsoft"> Dead Mall</label>
                    </div>
                    <div class="playlistButton">
                        <input type="radio" v-model="selectedPlaylist" value="futureFunk"><label for="futureFunk"> Future Funky</label>
                    </div>
                    <div class="playlistButton">
                        <input type="radio" v-model="selectedPlaylist" value="void"><label for="void"> T H E ~ V O I D</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
 .controlContainer {
     height: 50px;
     display: flex;
 }

 .iFrameContainer,
 #playlistIFrame {
     width: 100%;
     height: 100%;
 }

 #radioContainer {
     height: 100%;
     display: flex;
     flex-direction: column;
     overflow: visible;
 }

 .playlistMenuContainer {
     position: relative;
     bottom: 0;
 }

 .playlistMenuPopup {
     position: absolute;
     display: flex;
     flex-direction: column;
     height: 200px;
     width: 200px;
     top: 0;
     box-shadow: 0 0 5px;
     left: 0;
     background-color: white;
     padding: 12px;
 }

 .flex-button {
     flex: 1;
 }

 .playlistButton {
     margin-bottom: 4px;
 }

 .playlistButton input {
     margin-right: 4px;
 }
</style>

<script>
    module.exports = {
        props:{
            app:true
        },
        name: 'PlaylistPlayer',
        data: function() {
            return {
                playerExpanded: false,
                playerIsPlaying: true,
                videoTitle: '',
                playlistMenu: false,
                selectedPlaylist: 'default'
            }
        },
        watch: {
            selectedPlaylist: function (val) {
                if ( window.ytPlayer && window.ytPlayer.getVideoData ) {

                switch(val) {
                    case "mallsoft":
                    window.ytPlayer.cuePlaylist({listType:'playlist', list:'PLEe9fYs-_7nl_5CvSyoFpaDji7S0Ao1AJ', index: [Math.floor(Math.random() * 12)]})
                    break;
                    case "futureFunk":
                    window.ytPlayer.cuePlaylist({listType:'playlist', list:'PLEe9fYs-_7nmeE0xzgb9FV187sYr8-SKo', index: [Math.floor(Math.random() * 12)]})
                    break;
                    case "void":
                    window.ytPlayer.cuePlaylist({listType:'playlist', list:'PLEe9fYs-_7nmh2_sqnojj7osnkfszZCBb', index: [Math.floor(Math.random() * 12)]})
                    break;
                    default:
                    window.ytPlayer.cuePlaylist({listType:'playlist', list:'PLEe9fYs-_7nkA5xLFnrUEUbkCU_41Qkod', index: [Math.floor(Math.random() * 20)]})
                }

                
                setTimeout( function() { 
                    window.ytPlayer.setShuffle(true); 
                    window.ytPlayer.playVideo();
                    window.ytPlayer.seekTo(0);
                    window.ytPlayer.setLoop(true);
                }, 1000);
                }
            }
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
            },
            togglePlaylistMenu: function() {
                this.playlistMenu = !this.playlistMenu
            }
            },
            computed: {
            isPlayerExpanded: function() {
                return this.playerExpanded;
            },
            isPlayerPlaying: function() {
                return (!window.ytPlayer ? false : window.ytPlayer.getPlayerState() === 1) || this.playerIsPlaying
            }
        },
        ready: function () {
            var numPl = Math.floor((Math.random() * 12) + 1);
            var ytPlayer = new YT.Player("playlistIFrame", {
                height: '200',
                width: '350',
                playerVars: {
                    listType:'playlist',
                    list:'PLEe9fYs-_7nkA5xLFnrUEUbkCU_41Qkod',
                    index: numPl,
                    autoplay: 1,
                    loop: 1,
                    enablejsapi: 1,
                    start: 0
                },
                events: {
                    'onReady': function (event) {
                        setTimeout(function() {
                            event.target.setShuffle({'shufflePlaylist' : true});
                        }, 1000);
                    }
                }
            });

            window.ytPlayer = ytPlayer;

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
        }
    }
</script>