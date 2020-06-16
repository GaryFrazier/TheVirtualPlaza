<template>
    <div id="linksContainer">
        <a class="discordButton linkButton" target="_blank" href="https://discord.com/invite/A8BVVHF">Join Our Discord!</a>
    </div>
</template>

<style>
    #linksContainer {
        position: absolute;
        top: 20px;
        right: 20px;
        width: 30%;
        left: unset !important;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    
    .linkButton {
            font-family: "MS Sans Serif";
            font-size: 11px;
            outline: 1px solid #000000;
            background: #C0C0C0;
            border-width: 1px;
            border-style: solid;
            border-color: #FFFFFF #808080 #808080 #FFFFFF;
            padding: 4px 10px;
            display: block;
            position: relative;
    }
</style>

<script>
    module.exports = {
        props:{

        },
        components: {

        },
        name: 'Links',
        data: function() {
            return {

            }
        },

        methods: {

        }
    }
</script>