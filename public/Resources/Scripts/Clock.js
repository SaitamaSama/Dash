/**
 * @author Gourab Nag <saitama@room11.org>
 */

(() => {
    class Clock {
        constructor() {
            this.weekday = [];
            this.weekday[0] = "Monday";
            this.weekday[1] = "Tuesday";
            this.weekday[2] = "Wednesday";
            this.weekday[3] = "Thursday";
            this.weekday[4] = "Friday";
            this.weekday[5] = "Saturday";
            this.weekday[6] = "Sunday";
        }

        tick() {
            this.today = new Date();
            this.hour = ((this.today.hour < 10) ? "0" : "") + this.today.getHours();
            this.min = ((this.today.min < 10) ? "0" : "") + this.today.getMinutes();

            this.day = this.weekday[this.today.getDay()];
            this.date = this.today.getDate();
        }

        getTime() {
            return this;
        }
    }

    window.Clock = Clock;
})();