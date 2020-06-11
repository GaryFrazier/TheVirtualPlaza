<template>
    <div id="radioContainer">
        <div class="iFrameContainer">
            <div id="playlistIFrame"></div>
        </div>
        <div class="controlContainer">
            <button @click="playPrevious"> 
                <i class="material-icons">skip_previous</i>
            </button>

            <button @click="togglePlay"> 
                <i class="material-icons" v-if="playerIsPlaying">pause</i>
                <i class="material-icons" v-else>play_arrow</i>
            </button>
            <button @click="playNext"> 
                <i class="material-icons">skip_next</i>
            </button>
            <button @click="togglePlaylistMenu"> 
                <i class="material-icons">playlist_play</i>
            </button>
        </div>
    </div>
</template>

<style>
 .controlContainer {
     height: 100px;
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
                    window.ytPlayer.cuePlaylist({listType:'playlist', list:'PLEe9fYs-_7nl_5CvSyoFpaDji7S0Ao1AJ', index: [Math.floor(Math.random() * 5)]})
                    break;
                    default:
                    window.ytPlayer.cuePlaylist({listType:'playlist', list:'PLEe9fYs-_7nkA5xLFnrUEUbkCU_41Qkod', index: [Math.floor(Math.random() * 5)]})
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
            var numPl = Math.floor((Math.random() * 2) + 1);
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