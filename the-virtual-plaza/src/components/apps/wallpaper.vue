<template>
    <div id="wallpaperContainer">
        <h2>Choose a wallpaper!</h2>
        <br />
        <h3>static</h3>
        <div class="indented">
            <div class="wallpaperButton">
                <label for="default"><input type="radio" v-model="selectedWallpaper" id="default" value="default.jpg">The Virtual Plaza</label>
            </div>
            <div class="wallpaperButton">
                <label for="islander"><input type="radio" v-model="selectedWallpaper" id="islander" value="islander.png">Islander</label>
            </div>
        </div>
        <br />
        <h3>Animated</h3>
        <div class="indented">
            <div class="wallpaperButton">
                <label for="lofi"><input type="radio" v-model="selectedWallpaper" id="lofi" value="https://media.giphy.com/media/j5zqQSABpeHCU8EpO3/giphy.gif">Warm Night</label>
            </div>
        </div>
    </div>
</template>

<style>
    #wallpaperContainer {
        width: 100%;
        height: 100%;
        padding: 12px;
        overflow-y: scroll;
    }
    
    .indented {
        margin-left: 20px;
    }

    .indented input {
        margin-right: 12px;
    }

    .wallpaperButton {
        margin: 10px 0;
    }
</style>

<script>
    var storage = require('service/storage');

    module.exports = {
        props:{
            app:true
        },
        components: {

        },
         watch: {
            selectedWallpaper: function (val) {
                storage.set('wallpaper', val);
            }

        },
        name: 'WallpaperApp',
        data: function() {
            return {
                selectedWallpaper: null
            }
        },

        methods: {

        },
        ready: function () {
            var wallpaper = storage.get('wallpaper');

            if (wallpaper) {
                this.selectedWallpaper = wallpaper;
            } else {
                this.selectedWallpaper = "https://media.giphy.com/media/j5zqQSABpeHCU8EpO3/giphy.gif";
            }
            
        }
    }
</script>