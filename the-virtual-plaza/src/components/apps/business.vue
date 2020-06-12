<template>
    <div id="businessAppContainer">
        <h3>Business Inquiries</h3><br/>
        <p>
            Do you want your instagram page or youtube playlist featured on the virtual plaza?
            Contact us at <a href="mailto:garyfrazier@the-grep.com">garyfrazier@the-grep.com</a>
        </p>
    </div>
</template>

<style>
    #businessAppContainer {
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
        name: 'BusinessApp',
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