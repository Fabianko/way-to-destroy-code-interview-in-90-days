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

```bash

```
### 

```bash

```
### 

```bash

```
### 

```bash

```
### 

```bash

```