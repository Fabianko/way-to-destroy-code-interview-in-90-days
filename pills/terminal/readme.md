# comandos Terminal tips

[linux file hierarchy](https://www.geeksforgeeks.org/linux-file-hierarchy-structure/)
[comandos resumen platzi](https://static.platzi.com/media/public/uploads/command-line-cheat-sheet_f2552bde-3bb0-4b1c-a1a7-dbd40095fa4f.pdf)

### Eviatar eliminar archivos sin confirmar
```bash
$ alias rm = 'rm -i'
```

### mv no solo sirve para mover, tambien para cambiar nombre
```bash
$ mv nombre_antiguo nombre_nuevo
```
### navegador de archivos estaticos
con la teecla enter se llega al final, con la letra q se, cierra, con el / permite buscar un texto dentro del archivo. 
```bash
$ less nombre_archivo.txt
```
### abrir archivos con programa predeterminado
```bash
$ xdg-open nombre_archivo.mp3
```
### la salida de un comando la escribe en un archivo
```bash
$ comando >> output.txt 2>&1
```
### cosas que no son utiles

```bash
$ sudo apt install cowsay lolcat
$ cowsay -f dragon-and-cow "hola" | lolcat
```

### PERMISOS de archivos
| Permiso | Archivo                                                                                                                                                                                                                                | Directorio                                                                                                                                |
|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| r       | Permite abrir y leer un archivo.                                                                                                                                                                                                       | Permite listar el contenido de un directorio solo si el permiso de ejecución (x) también está activo.                                     |
| w       | Permite escribir en un archivo; sin embargo, este atributo no permite cambiar el nombre de los archivos o eliminarlos. La capacidad de eliminar o cambiar el nombre de los archivos está determinado por los atributos del directorio. | Permite que los archivos dentro de un directorio sean creados, eliminados y renombrados si también se establece el atributo de ejecución. |
| x       | Permite que un archivo sea tratado como un  programa y pueda ser ejecutado.                                                                                                                                                            | Permite entrar al directorio.                                                                                                             |

![img](https://static.platzi.com/media/user_upload/1-0e5c063a-3fba-42a8-84cc-a2bf6687206b.jpg)
![img](https://xunilinux.files.wordpress.com/2016/02/3.jpg)

### Crear variables de entorno
link sinbolicos
```bash
$ ln -s Documents/Dev develops
```

listar variables de entorno
```bash
$ printenv
```
modificar variables de entorno
```bash
$ code .bashrc
```
se agrega la linea *path=$PATH:/HOME/asdasdasd*
al terminar de modificar se debe ejecutar el comando

```bash
$ bash
```

### buscar en terminal
buscaro archivos por nombre

```bash
$ find ./ -type d -name Documents
```
##### Banderas del comando find
Banderas básicas:

- **name:** Realiza una búsqueda por nombre de archivo.
- **iname:** Realiza una búsqueda por nombre de archivo sin tomar en cuenta las mayúsculas o minúsculas.
- **type:** Realiza una búsqueda por tipo de archivo, f(files) y d(directories) que son los más comunes.
- **size:** Realiza una búsqueda por el tamaño de archivo y/o directorio.

Banderas de tiempo⏰

- **mmin:** Búsqueda por tiempo en minutos.
- **mtime:** Búsqueda por tiempo en días.
  
Más banderas👀

- **maxdepth:** Después de está bandera se pone el número de niveles de profundidad en los que queremos realizar la búsqueda
- **empty:** Realiza una búsqueda de archivos y/o directorios vacíos.
- **perm:** Búsqueda de archivos por permisos.
- **not:** Retorna los resultados que no coinciden con la búsqueda.
- **delete:** Está bandera se coloca al final del comando, eliminara los resultados de la busqueda(⚠️Hay que tener mucho cuidado al usarla).


### Buscar dentro de un archivo con grep

[15 practical unix grep command examples](https://www.thegeekstuff.com/2009/03/15-practical-unix-grep-command-examples/)

Buscar una línea en específico en diferentes archivos por medio de un patrón:
```bash
$ grep "string" archivo_*
```
Buscar algún contenido en específico dentro de algún archivo:
```bash
$ cat unArchivoLargo.txt | grep "La línea que busco"
```
#### utilidades de red

```bash
$ ping www.google.com
```
```bash
$ traceroute www.google.com
```
```bash
$ netstat -i 
```


