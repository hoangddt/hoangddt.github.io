// ref: https://codepen.io/AllThingsSmitty/pen/JJavZN

const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24,
      week = day * 7;

let countDown = new Date('Mar 15, 2019 00:00:00').getTime(),
    x = setInterval(function() {

        let now = new Date().getTime(),
            distance = countDown - now,
            days = Math.floor(distance / (day));
            weeks = Math.floor(distance / (week));

        day_margin = (days % 7);
        nearest_sunday = days - ((weeks-1) * 7 + day_margin)
        date_in_week_distance = nearest_sunday;

        document.getElementById('days').innerText = days,

        document.getElementById('weeks').innerText = weeks,
        document.getElementById('weekdays').innerText = date_in_week_distance,
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      //if (distance < 0) {
      //  clearInterval(x);
      //  'IT'S MY BIRTHDAY!;
      //}

    }, second)
