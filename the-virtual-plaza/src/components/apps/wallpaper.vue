<template>
    <div id="wallpaperContainer">
        <h2>Choose a wallpaper!</h2>
        <br />
        <h3>static</h3>
        <div class="indented">
            <div class="wallpaperButton">
                <div><label for="default"><input type="radio" v-model="selectedWallpaper" id="default" value="default.jpg">The Virtual Plaza</label></div>
                <div><label for="islander"><input type="radio" v-model="selectedWallpaper" id="islander" value="islander.png">Islander</label></div>
            </div>
        </div>
        <br />
        <h3>Animated</h3>
        <div class="indented">
            <div class="wallpaperButton">
                <div class="wallpaperOption">
                    <label for="rotateWallpaperLabel"><input type="checkbox" v-model="rotateWallpaper" id="rotateWallpaperLabel">Rotate Wallpapers</label>
                </div>
                <br />
                <div class="listSelectorContainer">
                    <button @click="rotateWallpaperBack" class="linkButton">{{ backArrow }}</button>
                    <label>{{ selectedWallpaperName }}</label>
                    <button @click="rotateWallpaperForward" class="linkButton">{{ forwardArrow }}</button>
                </div>
                <br />
                
                <!--<div class="wallpaperOption" :key="anim.id" v-for="anim in animatedWallpapers">
                    <label :for="anim.id"><input type="radio" v-model="selectedWallpaper" :id="anim.id" :value="anim.value">{{ anim.name }}</label>
                </div> -->

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

    .listSelectorContainer {
        display: flex;
        align-items: center;
    }

    .listSelectorContainer label {
        width: 150px;
        text-align: center;
    }

    .listSelectorContainer button {
        flex: 0;
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
            },

            rotateWallpaper: function (val) {
                storage.set('rotateWallpaper', val);
            }

        },
        computed: {
            selectedWallpaperName: function() {
                var current = this.animatedWallpapers.find(x => x.value === this.selectedWallpaper)

                if (!current) {
                    return "None"
                } else {
                    return current.name
                }
            },
            forwardArrow: function() {
                return ">"
            },
            backArrow: function() {
                return "<"
            }
        },
        name: 'WallpaperApp',
        data: function() {
            return {
                selectedWallpaper: "https://media.giphy.com/media/j5zqQSABpeHCU8EpO3/giphy.gif",
                rotateWallpaper: true,
                animatedWallpapers: require('../../data/wallpapers.js')
            }
        },

        methods: {
            rotateWallpaperBack: function() {
                var self = this
                var current = self.animatedWallpapers.find(x => x.value === self.selectedWallpaper)
                if (!current) {
                    storage.set('wallpaper', self.animatedWallpapers[0].value)
                    self.selectedWallpaper = self.animatedWallpapers[0].value
                } else {
                    var i = self.animatedWallpapers.indexOf(current) - 1
                    if (i < 0) {
                        storage.set('wallpaper', self.animatedWallpapers[i].value)
                        self.selectedWallpaper = self.animatedWallpapers[i].value
                    } else {
                        storage.set('wallpaper', self.animatedWallpapers[0].value)
                        self.selectedWallpaper = self.animatedWallpapers[0].value
                    }
                }
            },
            rotateWallpaperForward: function() {
                var self = this
                var current = self.animatedWallpapers.find(x => x.value === self.selectedWallpaper)
                if (!current) {
                    storage.set('wallpaper', self.animatedWallpapers[0].value)
                    self.selectedWallpaper = self.animatedWallpapers[0].value
                } else {
                    var i = self.animatedWallpapers.indexOf(current) + 1
                    if (i < self.animatedWallpapers.length) {
                        storage.set('wallpaper', self.animatedWallpapers[i].value)
                        self.selectedWallpaper = self.animatedWallpapers[i].value
                    } else {
                        storage.set('wallpaper', self.animatedWallpapers[0].value)
                        self.selectedWallpaper = self.animatedWallpapers[0].value
                    }
                }
            },
            refreshWallpaper: function() {
                var self = this
                var wallpaper = storage.get('wallpaper');

                if (wallpaper) {
                    self.selectedWallpaper = wallpaper;
                } else {
                    self.selectedWallpaper = "https://media.giphy.com/media/j5zqQSABpeHCU8EpO3/giphy.gif";
                }
            }
        },
        ready: function () {
            var self = this

            this.refreshWallpaper()
            setInterval(function() {

                self.refreshWallpaper()
            }, 1000)

            
            var rotateWallpaperVar = storage.get('rotateWallpaper')
            if (rotateWallpaperVar === false) {
                self.rotateWallpaper = false
            } else {
                self.rotateWallpaper = true
            }
                

        }
    }
</script>