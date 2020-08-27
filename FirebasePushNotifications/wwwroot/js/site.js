

var firebaseConfig = {
    apiKey: "AIzaSyDfxjnc_OaeBZC30SldW-hRZxq_waWmLFs",
    authDomain: "pushnotifications-55a84.firebaseapp.com",
    databaseURL: "https://pushnotifications-55a84.firebaseio.com",
    projectId: "pushnotifications-55a84",
    storageBucket: "pushnotifications-55a84.appspot.com",
    messagingSenderId: "1080865604556",
    appId: "1:1080865604556:web:64f2324160d5b325289369",
    measurementId: "G-E9DZHLJDE3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
messaging.usePublicVapidKey("BPs-TZW1k_6QSd29aSuDnE5zPBXYEUP3YIU13pXnYz5e-0W85ko3wjC79DjIy8QGHr3z-JmcJ6x_fLyNPzt-c0I");


messaging.onTokenRefresh(() => {
    messaging.getToken().then((refreshedToken) => {
        console.log('Token refreshed.');
        // Indicate that the new Instance ID token has not yet been sent to the
        // app server.
        //setTokenSentToServer(false);
        // Send Instance ID token to app server.
       // sendTokenToServer(refreshedToken);
        // ...
    }).catch((err) => {
        console.log('Unable to retrieve refreshed token ', err);
        //showToken('Unable to retrieve refreshed token ', err);
    });
});
messaging.onMessage((payload) => {
    console.log('Message received. ', payload);
    // ...
});

messaging.getToken().then((currentToken) => {
    if (currentToken) {
        //sendTokenToServer(currentToken);
        //updateUIForPushEnabled(currentToken);
    } else {
        // Show permission request.
        console.log('No Instance ID token available. Request permission to generate one.');
        messaging.requestPermission()
            .then(function () {
                console.log('Notification permission granted.');
                // TODO(developer): Retrieve a Instance ID token for use with FCM.
                // ...
            })
            .catch(function (err) {
                console.log('Unable to get permission to notify. ', err);
            });
        // Show permission UI.
        //updateUIForPushPermissionRequired();
        //setTokenSentToServer(false);
    }
}).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    showToken('Error retrieving Instance ID token. ', err);
    //setTokenSentToServer(false);
});

