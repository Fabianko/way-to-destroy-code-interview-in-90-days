# curso de javascript profesional plazti

## proyecto media player

comando permite crear servidor con javascript

> npm i -D live-server

[HTMLMediaElement](https://developer.mozilla.org/es/docs/Web/API/HTMLMediaElement).

```js
const  video = document.querySelector("video");
const  button = document.querySelector("button");

function  MediaPlayer(config) {
 this.media = config.el;
}

MediaPlayer.prototype.play = function() {
 this.media.play();
};

const  player = new  MediaPlayer({ el:  video });
button.onclick = () =>  player.play();
```

Otra opcion

```js
const video = document.querySelector("video");
const button = document.querySelector("button");

class MediaPlayer {
    constructor(config) { 
        this.config = config;
    };
    play() {
        video.play();
    };
    pause() {
        video.pause();
    };
};

const player = new MediaPlayer();

const toggle = () => {
    video.paused === false ? player.pause() : player.play();
};

button.onclick = () => toggle();
```
-----
## como llena un script el navegador

![Image](https://static.platzi.com/media/user_upload/JS%20%E2%80%93%201-1e9e7c09-3c54-43e9-86a5-b76594e48e3f.jpg)

Script fetching es asincrono y se marfca como async