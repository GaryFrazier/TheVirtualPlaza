<template>
    <div :id="'instagramContainer' +  powrId" class="instagramContainer">
        <div class="powr-instagram-feed" :id="powrId"></div><script src="https://www.powr.io/powr.js?platform=vuejs"></script>
    </div>
</template>

<style>
    .instagramContainer {
        width: 100%;
        height: 100%;
        overflow-y: scroll;
    }
</style>

<script>
    module.exports = {
        props:{
            app:true
        },
        components: {
        },
        name: 'InstagramApp',
        data: function() {
            return {
                powrId: 'fc9a9512_1591970277'
            }
        },

        methods: {

        },
        ready: function () {
            let instagramScript = document.createElement('script')
            instagramScript.setAttribute('src', 'https://www.powr.io/powr.js?platform=vuejs')
            
            document.getElementById("instagramContainer" +  this.powrId).appendChild(instagramScript)
        }
    }
</script>