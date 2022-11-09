# Modulo 1: **Atributos de calidad**


:pill: [Atributos de calidad](http://wiki.uqbar.org/wiki/articles/atributos-de-calidad.html)

:pill: [ppt](https://docs.google.com/presentation/d/1q00CqNXxAPn3J0YuZ1rdYAoqxL5EuB1W0Hhj1NZvceI/edit#slide=id.g30f07ce5c8_0_108)

Los **Atributos de Calidad** son las expectativas de usuario, en general implícitas, de cuán bien funciona un producto.
Estas **expectativas que hay que cumplir** que no tienen que ver con lo funcional, sino, con lo **no funcional**. Cuán bien se comporta nuestro sistema en cierto contexto a ciertos estímulos.

### 1 - Eficiencia de ejecución
Entonces la **Eficiencia de ejecución** es el aprovechamiento y uso de recursos que el sistema necesita para ser eficiente. Involucra:

- **Tiempo de comportamiento**, es el lapso esperado entre la petición y respuesta. Es muy importante en los videojuegos. TIEMPO
- **Uso de recursos**, es como se aprovecha el consumo de recursos. Es muy importante en sistemas con estilos de arquitectura Centrados a Datos. RAM o CPU
- **Capacidad**: Son los limites de tolerancia que el sistema tendrá. Es importante en sistemas de alta concurrencia. CANTIDAD

### 2 - Compatibilidad
Agrupa los atributos que tienen que ver con cuánto el sistema coexiste o interopera con otros sistemas, es decir, cuánto puede el sistema vivir en un contexto más grande.

- **Interoperabilidad**. Cuán fácil es comunicarse con este sistema, cuánto este sistema define su forma de comunicación e incluso cuánto puede después comunicarse con otros.  EJEMPLO: implementación de estándares y disponibilidad de esquemas. HATEOAS. JSON Schema, SOAP, OPEN API, ejemplo APIS publicas

- **Coexistencia**. Cuánto el sistema soporta o no estar en un contexto dado con otros sistemas también. se mide: cantidad de fallos por razones externas en un tiempo dado, segmentación u otros. 

### 3 - Usabilidad
- **Reconocimiento de Idoneidad**: Cuanto nos damos cuenta que un sistema es lo que nosotros necesitamos usar para resolver nuestro objetivo. Para medirlo necesitamos saber si el dominio de nuestro problema esta asociado con el sistema.
<span style="color:red">**Ejemplo: Wordpress**.
- **Curva de Aprendizaje**: Es que tan fácil o difícil es aprender a usar el sistema. Se mide por la cantidad de ayuda que necesitemos para poder hacer las tareas.
<span style="color:red">**Ejemplo: Lenguaje de Gestos.**
- **Operabilidad**: Que cantidad de pasos o esfuerzo hay que hacer para cumplir un objetivo.
<span style="color:red">**Ejemplo: Evitar formularios largos**
- **Protección de Errores**: Es como el sistema le comunica al usuario de cuantas veces se equivocó (Una manera de darle feedback al usuario)
<span style="color:red">**Ejemplo: Ser más específico con el feedback.**
- **Estética de Interfaz**: La mejor manera de medirlo es preguntarle a los usuarios a través de encuestas subjetivas.
<span style="color:red">**Ejemplo: En caso tal se primela estetica se deben considerar puestos como los de UI y UX.**
- **Accesibilidad**: Se trata de cuan permisible es el sistema de utilizar para personas con discapacidades. Esto es muy difícil de medir, ya que se necesita experiencia por el usuario.
<span style="color:red">**Ejemplo: Utilizar Propiedades del desarrollo para tener mayor inclusión con las personas con discapacidad. como por ejemplo escuchar descripción de imagenes**

### 4 - Confiabilidad
Se trata de cuanto el sistema nos permite utilizarlo a través del tiempo de forma normal. Para analizarlo utilizamos 4 características:

- **Madurez**: Cuanto falla el sistema. Para medirla, se toma el tiempo entre cada fallo que haya tenido el sistema. Cuanto más tiempo pase, más maduro es el sistema.
<span style="color:red">Ejemplo: sistemas bancarios
- **Disponibilidad**: Cuanto tiempo esta fuera de servicio el sistema con respecto a su ciclo de vida normal. Para medirlo, igualmente tomamos el tiempo que estuvo fuera y lo expresamos en una forma de porcentaje.
<span style="color:red">Ejemplo: SLA 
- **Tolerancia a fallos (Resilencia)**: Como el sistema se mantiene dando el servicio a pesar de que tenga un fallo o haya un fallo con la conexión a un sistema externo. Para medirlo hay que generar los fallos y ver como se comporta.
[chaos testing](http://principlesofchaos.org/es/)
<span style="color:red">Ejemplo: aplicaciones moviles, soportar desconexiones
- **Capacidad de recuperación**: tiempo medio hasta recuperación, cuanto tiempo el sistema puede seguir estando disponible, luego de algún fallo. Para medirlo, guardamos el tiempo que el sistema vuelve a dar el servicio una vez que salio por un fallo.
<span style="color:red">Ejemplo: aplicaciones distribuidas, Platform as Service, dockers

### 5 - Seguridad
El sistema debe: Proteger la información del usuario, identificar a sus usuarios y permitirles el acceso solo a su información.

- **Confidencialidad** -> Como el sistema autoriza a cada usuario a acceder a ciertas partes de información.
- **Integridad** -> Las acciones que toma el sistema para proteger la información de atacantes o de usuarios sin acceso a ella. 
- **Comprobación de Hechos** -> Territorio legal, se basa en como compruebas que un hecho/acción realmente paso.
- T**raza de responsabilidad** -> Como se debe conectar cada acción que se dio en el sistema con el usuario.
- **Autenticidad** -> Como el sistema logra identificar al usuario


### 6 - Mantenibilidad
Se refiere a todas esas cosas que hacen que el sistema pueda cambiar, evolucionar y a su vez, ser reparado.

- **Modularidad** -> Capacidad de ser separado en partes independientes.
- **Reusabilidad** -> Poder reutilizar partes del código utilizándolo en diferentes lados. Utilizar el mismo código para un propósito diferente.
- **Capacidad de análisis** ->Conexión entre el código y sus requerimientos.
- **Capacidad de modificación** -> Que tan fácil es ir al código y cambiar el comportamiento sin afectar su funcionalidad.
- **Capacidad de prueba** -> Crear test para que el sistema garantice funcionalidad cuando se realicen cambios

### 7 - Portabilidad
- **Adaptabilidad** -> Analizamos que tanto depende nuestro sistema de un entorno especifico.
- **Capacidad de instalación** -> ¿Cuantos pasos se tienen que realizar? ¿Que tan difícil son? requerimientos del entorno de despliegue
- **Capacidad de remplazo** -> Entender cuales son los requerimientos que cumplen los sistemas actuales y como se puede aprovechar para remplazarlo objetivamente. (retrocompatibilidad)

<details>
  <summary> Tensiones entre atributos de calidad</summary>

![imagen](https://static.platzi.com/media/user_upload/Matriz%20de%20Tensiones%20de%20Atributos%20de%20Calidad-c7a939b1-c3b9-44bd-b76c-67c75797ed00.jpg)
</details>
<details>
  <summary>Resumen modulo 1</summary>

![imagen](https://static.platzi.com/media/user_upload/Primer%20modulo-8a1902a2-4ffe-4333-b6ae-9c4907f67b89.jpg)
</details>