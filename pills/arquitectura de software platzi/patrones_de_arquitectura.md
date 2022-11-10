# Modulo 2: **Patrones de arquitectura**

*¿Qué es un patrón de Arquitectura?*

[<span style="color:green">**fuente**](https://docs.google.com/presentation/d/1fP3vMpxz36MqI7MBGnmB90_FvtOQx6eXda1RzTu7jkU/edit#slide=id.p)

<details>
  <summary>Indice</summary>

![img](https://static.platzi.com/media/user_upload/ResumenModulo2-8fe409f1-0ac7-43a7-8314-87a3a3ea8221.jpg)
</details>




Decisiones de diseño ya tomadas para generar un esquema, estructura o tipo de comunicación entre componentes.

- **Monolíticos**. Artefacto resultante se despliega como una sola unidad
- **Distribuidos**. Arquitecturas distribuidas, Cada componente se puede desplegar independientemente.
<span style="color:red">Cada componente del patrón distribuido es un componente monolítico</span> o lo que es igual a Los patrones distribuidos son el conjunto de patrones monolíticos
- **Patrón Gran Bola de Lodo / Big Ball of Mud**
Surge cuando un equipo no considera la arquitectura como algo relevante. No hay criterio. El sistema es un caos

## 1 - Modelo Vista Controlador MVC

El Modelo Vista Controlador, separa los datos de una aplicación, la interfaz de usuario, y la lógica de control en tres componentes distintos.

Es un modelo maduro y que ha demostrado su validez en todo tipo de aplicaciones y multitud de lenguajes y plataformas de desarrollo.

- **El Modelo** que contiene una representación de los datos que maneja el sistema, su lógica de negocio, y sus mecanismos de persistencia.
- **La Vista**, o interfaz de usuario, que compone la información que se envía al cliente y los mecanismos interacción con éste.
- **El Controlador**, que actúa como intermediario entre el Modelo y la Vista, gestionando el flujo de información entre ellos y las transformaciones para adaptar los datos a las necesidades de cada uno.
  
Alternativas 

- **Modelo Vista VistaModelo (MVVM)** Donde el ViewModel contiene toda la lógica de presentación. Permite abstracción de lógica de la vista. <span style="color:red">Ejemplo: C# y ASP.NET.
- **Modelo Vista Presentador (MVP)**: Donde el Presenter lleva toda la lógica de presentación. Es un coordinador o intermediario, es quien va a mediar entre la vista y el modelo, sin que estos interactúen entre sí.
- **Flux**: Maneja el flujo de datos (Cómo fluyen los datos). Aquí se maneja la comunicación en una sola vía. Se elimina la comunicación bidireccional que había entre modelo y controlador. Se deja de lado esa comunicación triangular del MVC.
<details>
  <summary>Ejemplo</summary>

![img](https://static.platzi.com/media/user_upload/pattern-architecture-mvc-ae7d1f7a-91f0-49cd-b7dc-78553df52468.jpg)
</details>

## 2 - Capas / Layered

Separación en capas, donde cada una es responsable de cierto concepto global de la aplicación.
- La cantidad de capas depende de cada aplicación.
- Es común ver 3 o 4 capas
- La comunicación siempre debe ser de arriba hacia abajo

<details>
  <summary>Ejemplo</summary>

![img](https://static.platzi.com/media/user_upload/pattern-architecture-layered-6dfd3713-19ed-4898-86e4-3980a9009c5a.jpg)
</details>

## 3 - Orientado a eventos / Provisión de eventos

- **Orientado a eventos/Event-driven**. Trata sobre cómo conectar componentes a través de eventos. Cada componente publica eventos a un bus de eventos común y los componentes interesados a estos eventos pueden estar suscritos y luego responder al respecto. No hay otra forma de comunicación, el bus de eventos pasa ser el método principal de comunicación entre componentes. Algo complejo es saber si una acción que hicimos tuvo el resultado que esperábamos, en general suelen ser eventualmente consistentes, lo que significa que cuando hacemos una escritura el sistema no nos garantiza que va a estar disponible hasta que ese evento no se distribuya en todas las partes que lo necesita.
- **Provisión de eventos/EventSourcing**. En vez de que nuestra aplicación tenga el estado actual del sitio, podríamos tener solamente guardados los eventos que nos importan y no todos.
- 
A considerar
- **Pro**: permite desligar un sistema distribuido mediante el bus, logrando asi mayor capacidad a la hora de escalar mi sistema distribuido.
- **Contra**: Mayor dificultad a la hora de hacer pruebas end to end.
- **Contra**: El mismo bus de eventos podria ser un punto de falla. Se debe contar con buenas capacidades para soportar el nivel de transaccionalidad del bus de eventos.

<span style="color:red">Ejemplo: Transacciones monetarias secuenciales.

## 4 - Microkernel - Plug-ins
Como hacer para tener un corazón (Kernel / Core) y diferentes puntos de conexión a la aplicación que puedan ser incorporados o quitados dinamicamente.
Puede verse como un patrón monolítico si va con sus plug ins ya desplegados también. O como distribuida si sus componentes fueron cambiados en tiempo de ejecución

<span style="color:red">Ejemplo: Visual studio code o Eclipse IDE

## 5 - Comparte-nada / Shared-Nothing
Procura que no exista un punto de unión entre componentes. Es muy potente a la hora de procesar información. Ya que como cada componente tiene su estado, BD privado y todo lo que necesite para el y solo para el. se puede optimizar ese proceso de forma que no tenemos que considerar casos de contingencia.

<span style="color:red">Ejemplo: procesos de map reduce en donde divide el dominio de recursos

## 6 - Microservicios / Microservices
Son Componentes distribuidos donde cada componentes va a exponer una funcionalidad al resto del sistema. de esta forma modularizamos el sistema a traes de estos servicios independientes.
Los clientes o los mismos servicios consumen estas funcionalidades entre ellos.
Se debe tener comunicación entre ellos, de forma directa o indirecta (bus de eventos).
a medida que una empresa crece es favorable apuntar a este patron, pero este requiere un costo muy grande de mantenibilidad.

<span style="color:red">Ejemplo: crear microservicios para gestionar independientemente, usuarios, productos, pagos, logistica, etc.

## 7 - Separación de Responsabilidades entre Consultas y Comandos / CQRS
Diferencia el momento del que estamos escribiendo del de que estamos leyendo. Nos permite modelar el dominio de a escritura y a su vez tener preparados ya sus datos para poder leerlos de la mejor forma posible.

Nos dice que cuándo es muy difícil hacer óptima la lectura y escritura con un modelo compartido podemos aprovechar eso para separar ese modelo e incluso separar las bases de datos de esos modelos, de esta manera cuando queremos escribir tenemos un modelo optimizado para la escritura y luego cuando queremos leer tenemos un modelo optimizado para la lectura. Nos sirve para poder modelar el dominio de escritura y a su vez tener preparados los datos para poder leerlos de la mejor forma posible.
<span style="color:red">Ejemplo: Reportes, modelos de datos especificos para reportes.

## 8 - Hexagonal - Puertos y adaptadores
- **La Arquitectura Hexagonal** propone que nuestro dominio sea el núcleo de las capas y que este no se acople a nada externo. En lugar de hacer uso explícito y mediante el principio de inversión de dependencias nos acoplamos a contratos (interfaces o puertos) y no a implementaciones concretas.
- A grandes rasgos, y si mucho detalle, lo que propone es que nuestro **núcleo sea visto como una API con unos contratos bien especificados**. Definiendo puertos o puntos de entrada e interfaces (adaptadores) para que otros módulos (UI, BBDD, Test) puedan implementarlas y comunicarse con la capa de negocio sin que ésta deba saber el origen de la conexión.
<span style="color:red">Ejemplo: aplicación web

## 9 - Diseño orientado al dominio - Domain-driven design
Lo que hacemos es guiar nuestra aplicación y el diseño a través del uso del lenguaje común entre el negocio y el desarrollo. El obtener ese lenguaje del negocio y el poder hacer aplicaciones que estén concentradas en eso mucho más que lo que están concentradas en detalles técnicos. Va más allá de una sola aplicación, nos dice que busquemos modularizar nuestro sistema a través de los bounded context, que tratan de encontrar dónde el lenguaje cambia de sentido.


## Combinando patrones de arquitectura
Ejemplo 1: un MVC que se conecta aun balanceador de carga a distintas apis que para mantener comunicación entre apis (microservicios) mediante un bus con el patron orientado eventos, publicando y suscribiendo.

<details>
  <summary>Ejemplo 2</summary>

![img](https://static.platzi.com/media/user_upload/combinando%20patrones-017721b5-f3d7-43c8-8f44-551296d682e2.jpg)
</details>

---

[Arquitecturas escalables](https://medium.com/@Talend/from-lambda-to-kappa-a-guide-on-real-time-big-data-architectures-fe63f3079d3e)

[material compelemtnario clase platzi](https://docs.google.com/presentation/d/1maSgvM4mXn7bldGlYEBHnOC_Lm9PY9B7CnfKXvg_lmg/edit#slide=id.g3417d7aa7a_0_152)