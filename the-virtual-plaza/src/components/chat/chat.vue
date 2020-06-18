<template>
    <div id="chatContainer" class="chatContainer">
        <!--<div id="rt-e08c1cbc5b3d5c1d26b15d59db6d3860"></div> -->
        <iframe class="chat-embed" src="https://titanembeds.com/embed/696015287253729372?defaultchannel=696015287887331380&scrollbartheme=light&theme=IceWyvern&userscalable=false" frameborder="0"></iframe>
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
            /*if (typeof RumbleTalkChat !== 'undefined') {
                RumbleTalkChat.YrR0KjvL = undefined
            }

            let chatScript = document.createElement('script')
            chatScript.setAttribute('async', 'true')
            chatScript.setAttribute('src', 'https://rumbletalk.com/client/?YrR0KjvL')
         
            document.getElementById("chatContainer").appendChild(chatScript)*/

        }
    }
</script>