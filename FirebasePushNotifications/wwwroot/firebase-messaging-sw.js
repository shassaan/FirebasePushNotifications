// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
//importScripts('/__/firebase/7.18.0/firebase-app.js');
//importScripts('/__/firebase/7.18.0/firebase-messaging.js');
//importScripts('/__/firebase/init.js');





 // [START initialize_firebase_in_sw]
 // Give the service worker access to Firebase Messaging.
 // Note that you can only use Firebase Messaging here, other Firebase libraries
 // are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/6.6.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.6.2/firebase-messaging.js');

 // Initialize the Firebase app in the service worker by passing in
 // your app's Firebase config object.
 // https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyDfxjnc_OaeBZC30SldW-hRZxq_waWmLFs",
    authDomain: "pushnotifications-55a84.firebaseapp.com",
    databaseURL: "https://pushnotifications-55a84.firebaseio.com",
    projectId: "pushnotifications-55a84",
    storageBucket: "pushnotifications-55a84.appspot.com",
    messagingSenderId: "1080865604556",
    appId: "1:1080865604556:web:64f2324160d5b325289369",
    measurementId: "G-E9DZHLJDE3"
});
const messaging = firebase.messaging();



 // Retrieve an instance of Firebase Messaging so that it can handle background
 // messages.
 // [END initialize_firebase_in_sw]


// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// [START background_handler]
messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: 'Background Message body.',
        icon: '/firebase-logo.png'
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});
// [END background_handler]