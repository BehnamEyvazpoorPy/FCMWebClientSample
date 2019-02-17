// Initialize Firebase
var config = {
  apiKey: "AIzaSyC4BJHHyMAk-qlv9-P0qKd0XcOCPBzruBA",
  authDomain: "myfirstfirebaseapplicati-97ad4.firebaseapp.com",
  databaseURL: "https://myfirstfirebaseapplicati-97ad4.firebaseio.com",
  projectId: "myfirstfirebaseapplicati-97ad4",
  storageBucket: "myfirstfirebaseapplicati-97ad4.appspot.com",
  messagingSenderId: "769335441958"
};

firebase.initializeApp(config);
const messaging = firebase.messaging();
// messaging.usePublicVapidKey("project-769335441958");

// Get the a token for this device
messaging
  .requestPermission()
  .then(function() {
    console.log("Notification permission granted.");
    return messaging.getToken();
  })
  .then(function(token) {
    console.log("token : " + token);
  })
  .catch(function(err) {
    console.log("Unable to get permission to notify.", err);
  });
messaging.onMessage(function(payLoad) {
  var img = "/push-notifications/img/icon-128.png";
  var text = payLoad.notification.title;
  var notification = new Notification("To do list", { body: text, icon: img });
});
