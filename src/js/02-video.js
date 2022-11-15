import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem('videoplayerCurrentTime', seconds);
}

if (localStorage.videoplayerCurrentTime) {
  player.setCurrentTime(localStorage.getItem('videoplayerCurrentTime'));
}
