<template>
    <div id="chatAppContainer">
        <Chat />
    </div>
</template>

<style>

</style>

<script>
    module.exports = {
        props:{
            app:true
        },
        components: {
            Chat: require('../chat/chat.vue')
        },
        name: 'ChatApp',
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