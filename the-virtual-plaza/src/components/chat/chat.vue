<template>
    <div id="chatContainer" class="chatContainer">
        
    </div>
</template>

<style>
    .chatContainer {
        width: 100%;
        height: 100%;
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
            let chatScript = document.createElement('script')
            chatScript.setAttribute('async', 'true')
            chatScript.setAttribute('src', '//st.chatango.com/js/gz/emb.js')
            chatScript.setAttribute('style', 'width: 100%;height: 100%;')
            chatScript.setAttribute('data-cfasync', 'false')
            chatScript.setAttribute('id', 'cid0020000252953638582')
            chatScript.innerText = '{"handle":"thevirtualplaza","arch":"js","styles": {"showx": 0, "a":"f28db3","b":100,"c":"000000","d":"000000","k":"f28db3","l":"f28db3","m":"f28db3","p":"10","q":"f28db3","r":100,"t":0,"surl":0,"allowpm":0}}'
            document.getElementById("chatContainer").appendChild(chatScript)

        }
    }
</script>