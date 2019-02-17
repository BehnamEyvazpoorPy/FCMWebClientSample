function createNotification(title) {

    // Let's check if the browser supports notifications
    if (!"Notification" in window) {
        console.log("This browser does not support notifications.");
    }

    // Let's check if the user is okay to get some notification
    else if (Notification.permission === "granted") {
        // If it's okay let's create a notification

        var img = '/push-notifications/img/icon-128.png';
        var text = title;
        var notification = new Notification('To do list', { body: text, icon: img });

        window.navigator.vibrate(500);
    }
}