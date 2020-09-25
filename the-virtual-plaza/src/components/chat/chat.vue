<template>
    <div id="chatContainer" class="chatContainer">
        <!--<div id="rt-e08c1cbc5b3d5c1d26b15d59db6d3860"></div> -->
        <iframe class="chat-embed" src="https://titanembeds.com/embed/750870576469639239?css=128&defaultchannel=750870577052647447&scrollbartheme=light&theme=IceWyvern&userscalable=false" frameborder="0"></iframe>

    </div>
</template>

<style>
    .chatContainer,
    .chatContainer iframe,
    .chat-embed,
    .rumbletalk-embed {
        width: 100% !important;
        height: 100% !important;
    }

</style>

<script>
    module.exports = {
        props:{

        },
        name: 'Chat',
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