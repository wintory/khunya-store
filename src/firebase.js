import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyAbhl2UBf-JjeifcCi4DBQehUtiCx1WfDA",
    authDomain: "khunya-3c3d2.firebaseapp.com",
    databaseURL: "https://khunya-3c3d2.firebaseio.com",
    projectId: "khunya-3c3d2",
    storageBucket: "khunya-3c3d2.appspot.com",
    messagingSenderId: "251373565577"
};
var fire = firebase.initializeApp(config);
export default fire;