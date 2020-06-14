<style lang="less" rel="stylesheet/less">
    .wallpaper-section{
        height:100%;
        width: 100%;
        min-width: 1200px;;
        margin-left: 50%;
        transform: translateX(-50%);
    }
</style>
<template>
    <div class="wallpaper-section">
        <img
                :src="getImgUrl"
                class="wallpaper-section"
                @click="emit('click:wallpaper',$event);"
                @drop="drop($event);"
                @dragover="dragover($event)"
                @mousedown="mousedown($event)"
                @mouseup="emit('mouseup:wallpaper',$event);"
        />
        
      
    </div>
</template>

<script>
    var storage = require('service/storage');

    module.exports = {
        data: function () {
            return {
                wallpaper: storage.get('wallpaper') || "default.jpg"
            }
        },
        methods: {
            emit:function (name,e) {
                if(e.button==0){
                    $event.emit(name,{x:e.clientX,y:e.clientY});
                }
            },
            drop:function (e) {
                $event.emit('drop:wallpaper',{x:e.clientX,y:e.clientY});
                e.preventDefault();
            },
            dragover:function (e) {
                e.preventDefault();
            },
            mousedown:function (e) {
                if(e.button==2){
                    $event.emit('contextmenu:wallpaper',{x:e.clientX,y:e.clientY})
                }else if(e.button==0){
                    $event.emit('mousedown:wallpaper',{x:e.clientX,y:e.clientY})
                }
            }
        },
        computed: {
            getImgUrl() {
                var images = require.context('../images/wallpaper/', false, /\.(png|jpg|ico)$/)
                return images('./' + this.wallpaper)
            }
        },
        components: {},
        ready: function () {
            $(window).on('contextmenu',function (e) {
                e.preventDefault();
            })

            var self = this
            setInterval(function() {
                self.wallpaper = storage.get('wallpaper') || "default.jpg";
            }, 1000)
        }
    }
</script>