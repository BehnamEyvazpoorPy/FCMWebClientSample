importScripts("https://www.gstatic.com/firebasejs/5.4.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.4.2/firebase-messaging.js");

self.addEventListener("notificationclick", function(event) {
  event.notification.close();
  event.waitUntil(self.clients.openWindow("http://localhost:8080/"));
});
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
messaging.setBackgroundMessageHandler(function(payload) {
  var notificationTitle = payload.notification.title;
  var notificationOptions = {
    body: payload.notification.body,
    icon: "/firebase-logo.png"
  };
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
