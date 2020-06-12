<template>
    <div id="aboutContainer">
        <h3>About Us</h3>
        <br />
        <p>
            The Virtual Plaza was concieved to provide a hangout for fellow vaporwave enthusiasts. art and music curated by Neon Sunset Style,
            The Virtual Plaza serves to expand your tastes and fully embrace vaporwave culture.
        </p>
        <br />
        <h3>Social Media</h3>
        <br/>
        <a href="https://www.instagram.com/neon_sunset_style/" target="_blank" rel="noopener noreferrer">Instagram</a><br/>
        <a href="https://www.facebook.com/NeonSunsetStyle" target="_blank" rel="noopener noreferrer">Facebook</a><br/>
        <a href="https://www.youtube.com/channel/UCAAd9A1tCGb8_bTWqQXr8oQ" target="_blank" rel="noopener noreferrer">Youtube</a><br/>
        <br />

        <h3>Merch</h3>
        <br/>
        <a href="https://www.redbubble.com/people/garyfrazier95/explore?asc=u&page=1&sortOrder=top%20selling" target="_blank" rel="noopener noreferrer">Vaporwave Gear</a><br/>
        <br />
        <h3>Any Suggestions?</h3><br />
        <p>
            Submit suggestions and bugs to <a href="mailto:garyfrazier@the-grep.com">garyfrazier@the-grep.com</a>
        </p>
    </div>
</template>

<style>
    #aboutContainer {
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
        name: 'AboutApp',
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