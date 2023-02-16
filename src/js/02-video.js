import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

const timeValue = function(event) {localStorage.setItem("videoplayer-current-time", JSON.stringify(event.seconds))}

    player.on('timeupdate', throttle(timeValue, 500));
   
let savedTime = Number(localStorage.getItem("videoplayer-current-time"));


player.setCurrentTime(savedTime || 0).then(function(seconds) {

}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            console.log('the time was less than 0 or greater than the video duration');
            break;

        default:
            // some other error occurred
            break;
    }
});

// localStorage.removeItem("videoplayer-current-time")