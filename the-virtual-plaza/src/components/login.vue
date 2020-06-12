<template>
    <div id="loginContainer">
        <div id="firebaseui-auth-container">
        </div>
    </div>
</template>

<style>

</style>

<script>

    var firebase = require('firebase/app');
    var firebaseui = require('firebaseui');

    module.exports = {
        props:{

        },
        name: 'Login',
        data: function() {
            return {

            }
        },

        methods: {
            onSubmit (evt) {
                
            }
        },
        ready: function () {
            // FirebaseUI config.
            var uiConfig = {
                signInSuccessUrl: '<url-to-redirect-to-on-success>',
                signInOptions: [
                    // Leave the lines as is for the providers you want to offer your users.
                    firebase.auth.GoogleAuthProvider.PROVIDER_ID
                ],
                // tosUrl and privacyPolicyUrl accept either url string or a callback
                // function.
                // Terms of service url/callback.
                tosUrl: '<your-tos-url>',
                // Privacy policy url/callback.
                privacyPolicyUrl: function() {
                    window.location.assign('<your-privacy-policy-url>');
                }
            };

            // Initialize the FirebaseUI Widget using Firebase.
            var ui = new firebaseui.auth.AuthUI(firebase.auth());
            // The start method will wait until the DOM is loaded.
            ui.start('#firebaseui-auth-container', uiConfig);
        }
    }
</script>