# comandos docker para principiante


install docker por guia [link1](https://docs.docker.com/engine/install/ubuntu/) [link2](https://docs.docker.com/engine/install/linux-postinstall/)


```bash
$ docker run hello-world
```

```bash
$ docker images
```

para eliminar imagen NOMBRE_IMAGEN
```bash
$ docker rmi NOMBRE_IMAGEN
```

para eliminar todas las imagenes
```bash
$ docker rmi $(docker images -aq) -f
```

Procesos ejecutando de docker
```bash
$ docker ps -a
```
Crear consola de ubuntu para correr pruebas
```bash
$ docker run -it ubuntu bash
```

```bash
$ docker start (id or name)
```
```bash
$ docker stop (id or name)
```
Limpiar todos los contenedores (independiende del estado)
```bash
$ docker rm $(docker ps -aq) -f
```

levantar nginx
```bash
$ docker run -p 80:80 -d --name server nginx
```

para jenkins [link](https://hub.docker.com/_/jenkins)
```bash
$ docker run -p 8080:8080 -p 50000:50000 -v /your/home:/var/jenkins_home jenkins
```