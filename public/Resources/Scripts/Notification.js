/**
 * @author Gourab Nag <saitama@room11.org>
 */

(() => {
    class Notification {
        constructor(notifications) {
            this.notifications = Array.from(notifications);
        }

        init() {
            this.notifications.forEach((notification) => {
                let notificationData;

                try {
                    notificationData = JSON.parse(notification.getAttribute('data-notification'));
                } catch (ex) {
                    console.error('Notification JSON schema error.', ex);
                }

                notification.innerHTML = "<h1 class='title'>" + notificationData.title + "</h1>" +
                    "<span class='description'>" + notificationData['description'] + "</span>";
            });
        }
    }

    window.Notification = Notification;
})();