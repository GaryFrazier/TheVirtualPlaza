<template>
    <div id="shareAppContainer">
        <h3>Spread the word! Every bit helps!</h3><br/>
        <div style="display:flex">
            <iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fwww.thevirtualplaza.com&layout=button_count&size=large&width=88&height=28&appId" width="88" height="28" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
        </div>
    </div>
</template>

<style>
    #shareAppContainer {
        width: 100%;
        height: 100%;
        padding: 12px;
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
        name: 'ShareApp',
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