# curso de javascript profesional plazti

## proyecto media player

basado en curso de platzi y codigo fuente en [github sparragus](https://github.com/Sparragus/javascript-profesional)

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

script defer se ejecuta hasta el final del codigo

-----
## SCOPE

Global scope -> windows.variable (var)
fuction scope -> se crea una funcion que tiene un scope 
block scope -> let opera sobre bloque
module scope -> limita el alcanze al momento de importar need export and inport

![Image](https://static.platzi.com/media/user_upload/JS%20%E2%80%93%208-e026649f-a267-499e-bbe3-fbb6dfcbf0c1.jpg)

![Image](https://static.platzi.com/media/user_upload/JS%20%E2%80%93%202-096087b1-9317-4862-979d-8ca6efe55379.jpg)

------
## Clousers

Restricciones entre una funcion y el codigo que se llama
![Image](https://static.platzi.com/media/user_upload/JS%20%E2%80%93%203-3d4c9393-3cd3-4dc3-858d-cae6e524025d.jpg)

https://static.platzi.com/media/public/uploads/el-primer-plugin_424bdd8b-ea1c-42dd-ba0e-227808aee9c0.zip



encapcular variables let dentro de una funcion y requiere funciones para acceder.

-----
## THIS

![Image](https://static.platzi.com/media/user_upload/JS%20%E2%80%93%205-a7e22a7f-d833-49a4-ae64-82d508b32703.jpg)

-----
## Los Metodos call, apply y bihd

![Image](https://static.platzi.com/media/user_upload/JS%20%E2%80%93%206-86babd14-1542-4e04-aa44-2ada6a2a0fed.jpg)

------
## Prototype

![Image](https://static.platzi.com/media/user_upload/JS%20%E2%80%93%208-5c8d63da-0488-4936-b9ae-c35476e2e55e.jpg)

------
## Herencia Prototipal

![Image](https://static.platzi.com/media/user_upload/JS%20%E2%80%93%2010-7ae67edd-6ac5-497f-9fd2-3a302861265c.jpg) 

------
## Parser y Abstract syntax tree

![Image](https://static.platzi.com/media/user_upload/JS%20%E2%80%93%2011-519320fe-4af8-4c3b-902c-c85fd7a1ada4.jpg)

------
## Como funciona el javaScript Engine

![Image](https://i.imgur.com/cv31vhP.gif)
![Image](https://static.platzi.com/media/user_upload/JS%20%E2%80%93%2013-827db342-25ad-49f7-b2d6-63ab86813f06.jpg)

------
## Event Loop 

multihilos?

![Image](https://static.platzi.com/media/user_upload/JS%20%E2%80%93%2015-408394ea-0f0a-45eb-a925-13f29d040c81.jpg)


------
## Promesas

![image](https://static.platzi.com/media/user_upload/JS%20%E2%80%93%2015-d833beac-203a-42e0-8e33-325b97489ac2.jpg))

----
## Getters y Setters

![Image](https://static.platzi.com/media/user_upload/JS%20%E2%80%93%2016-46bfba9c-31c6-4b39-9104-1e0372fd50ef.jpg)

-----
## Proxy
![Image](https://static.platzi.com/media/user_upload/JS%20%E2%80%93%2017-fb04470d-a18a-4a0a-bf2b-c94464b53410.jpg)

[distancia de levenshtein](https://unpkg.com/fast-levenshtein@2.0.6/levenshtein.js)

----
## Generators
![image](https://static.platzi.com/media/user_upload/JS%20%E2%80%93%2018-15804034-3196-4382-a0b0-c8f1ec6e1209.jpg)

-----
## Fetch - Como cancelar peticiones
![Image](https://static.platzi.com/media/user_upload/JS%20%E2%80%93%2019-451f0b1e-207a-473e-81c3-df604fe790f1.jpg)