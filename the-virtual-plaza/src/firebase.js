var firebase = require('firebase/app');

const config = {
    apiKey: "AIzaSyDbpoOzKihCo1GOjWItoAlUGVzTJgXqk5U",
    authDomain: "localhost",
    databaseURL: "https://the-virtual-plaza.firebaseio.com/",
    projectId: "the-virtual-plaza",
    storageBucket: "gs://the-virtual-plaza.appspot.com/"
};

firebase.initializeApp(config);