<template>
    <div id="donateContainer">
        <h3>Like the site? Consider helping with server costs!</h3>
        <br/>
        <a href="https://www.paypal.me/thegrep" target="_blank" rel="noopener noreferrer">Donate</a><br/>
        <a href="https://www.patreon.com/NeonSunsetStyle" target="_blank" rel="noopener noreferrer">Patreon</a><br/>
        <br />
    </div>
</template>

<style>
    #donateContainer {
        width: 100%;
        height: 100%;
        padding: 12px;
    }
</style>

<script>
    module.exports = {
        props:{
            app:true
        },
        components: {

        },
        name: 'DonateApp',
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