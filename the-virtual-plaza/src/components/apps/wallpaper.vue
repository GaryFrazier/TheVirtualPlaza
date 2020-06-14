<template>
    <div id="wallpaperContainer">
        <h3>Choose a wallpaper!</h3><br/>
        <p>
            Unfortunately liscencing for wallpapers is expensive, consider donating to help fund the servers and purchase more wallpapers!
            Contact us at <a href="mailto:garyfrazier@the-grep.com">garyfrazier@the-grep.com</a> If you wish to personally fund a specific wallpaper.
        </p>
        <br />
        <div class="wallpaperButton">
            <label for="default"><input type="radio" v-model="selectedWallpaper" id="default" value="default.jpg">The Virtual Plaza</label>
        </div>
        <div class="wallpaperButton">
            <label for="islander"><input type="radio" v-model="selectedWallpaper" id="islander" value="islander.png">Islander</label>
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
                this.selectedWallpaper = "default.jpg";
            }
            
        }
    }
</script>