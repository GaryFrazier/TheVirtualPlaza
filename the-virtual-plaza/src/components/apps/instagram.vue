<template>
    <div class="instagramContainer">
        <iframe src="//lightwidget.com/widgets/ab6d5046b80b5d9a9dfbe37af01291d2.html" scrolling="no" allowtransparency="true" class="lightwidget-widget instagramIframe" style="width:100%;border:0;overflow:hidden;"></iframe>
    </div>
</template>

<style>
    .instagramContainer {
        width: 100%;
        height: 100%;
        overflow-y: scroll;
    }

    .instagramIframe {
        width: 100%;
        height: 100%;
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
        
            }
        },

        methods: {

        },
        ready: function () {
        }
    }
</script>