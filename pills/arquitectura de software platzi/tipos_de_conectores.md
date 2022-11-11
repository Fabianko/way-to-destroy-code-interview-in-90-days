# Modulo 3: **Diseño de una Arquitectura**

[<span style="color:green">link ppt clase](https://docs.google.com/presentation/d/1SrNVT_j8De1TipH8GgGt-aq8vctd55wyinuEEO--UcE/edit#slide=id.g3106cf4060_0_114)

Primer paso para crear una arquitectura. **Pararse en hombros de gigantes** Aprovechar el conocimiento existente para nuestra solución

- Productos “de la estantería”. Productos ya echos que resuelvan parte de nuestros problemas.
- Frameworks y librerías. Ayuda a empezar/proponer desde una arquitectura más especifica
- Arquitecturas especificas del dominio. Decisiones de diseño ya tomadas para ciertos dominios del problema.
- Patrones de arquitectura. Empezar desde un punto más solido y restringir nuestro diseño a las partes importantes que quedan por resolver

## Herramientas y partes de un diseño: Tipos de conectores

![img](https://static.platzi.com/media/user_upload/AmanosdeGigantes-17032b80-6d43-4426-9b2d-4860c7e44374.jpg)

**La arquitectura está separada en dos partes fundamentales**:
- Componentes: Son partes de nuestro sistema que cumplen una función específica
Estos mismos componentes “modulares” pueden estar formados por más componentes, ya bien objetos o capas, que actuan como subcomponentes en su interior.
La comunicación existente entre ellos se lleva a cabo por medio de conectores.
- Conectores: Estos no están asociados a un dominio específico y son independientes a la hora de su análisis, pudiendo un e-commerce o una red social el mismo tipo de conector.

**Tipos de conectores**:

- **Llamado a procedimiento**: Invocan de un componente a otro componente y esperan una respuesta.
- **Enlace**: Vinculan fuertemente un componente a otro, incluso para la compilación. Visto en lenguajes compilados, y en componentes que forman parte de un monolito
- **Evento**: Permiten a un componente notificar un evento (que algo sucedió), y a otros componentes escuchar y reaccionar ante un evento.
- **Adaptador**: Ayudan a compatibilizar la interfaz de un componente con la de otro componente
- **Acceso a datos**: Nos ayudan a acceder a recursos compartidos de datos, como APIs, sistemas de archivos y bases de datos. Compatibiliza la interfaz del dato con la interfaz que espera el componente que estamos usando.
- **Flujo**: Permite la recolección de datos en un flujo de información continuo por parte de otro componente que tiene intereses en obtener varios o todos los datos del flujo.
- **Arbitraje**: Coordinan los permisos de acceso a un recurso entre componentes y deciden quien se encarga de distribuir dichos comportamientos.
<span style="color:red">Ej: Test A/B, teniendo varios componentes disponibles recibimos un pedido y se decide qué versión enviar para comparar diferentes atributos de calidad.
- **Distribuidor**: Facilita la distribución de un mensaje a varios componentes a través de un solo conector.

## 1 - Conectores: Llamado asincrónico / sincrónico. Modelo Cliente servidor

- **Llamado asincrónico**
Un componente llama a otro. pero no espera a que termine esta ejecución, sigue con su trabajo y en algún momento evaluara cual fue el resultado. Típico en sistemas desconectados.
<span style="color:red">Ejemplo: promesas o futuros en JS
- **Llamado sincrónico**
El emisor envía un mensaje al receptor y no sigue ejecutando hasta que no reciba el resultado. <span style="color:red">Ejemplo:Típico en lenguajes orientado a objetos

- **Cliente servidor**
la comunicación va a ser siempre de cliente a servidor y el cliente va a esperar siempre la respuesta.

## 2 - Conectores: Enrutador, difusión
- **Enrutador**: Lo que va facilita es la conexión en un componente que emite un mensaje y un set específico de componentes que les interesa ese mensaje. Pero en realidad van a haber muchos componentes receptores y el enrutador va a saber cuáles les interesa ese mensaje. Es decir, va a tener la inteligencia suficiente para entender ese mensaje y a quien tiene que llegar. Puede ser a un solo componente de destino o a muchos.
- **Difusión**: El conector de tipo difusión, es un conector que dado un mensaje de un emisor, lo difunde a muchos otros componentes interesados.

Ejemplo: Si tenemos que analizar la diferencia entre el Enrutador y el Difusor, podemos poner un ejemplo: Twitter.
<span style="color:red">Twitter: Tiene los dos casos para diferentes funcionalidades.

- Si un usuario que seguimos, escribe un mensaje, hay un enrutador, que está decidiendo a qué base de datos redis va a llegar ese mensaje, donde cada base de datos es un componente que es la timeline de los usuarios que lo siguen.

-  Cada mensaje que se manda, que es público, se hace difusión de ese mensaje, y luego, varios componentes que están escuchando todos los mensajes públicos, van a tener la inteligencia para ver si ese mensaje le es importante o no a ese componente. 

La diferencia está si el componente es inteligente y recibe todos los mensajes y luego decide (Difusión), o si el conector es inteligente y decide a quien tiene que mandar ese mensaje (Enrutador). 

## 3 - Conectores: Pizarra, repositorio, colas, modelo PUBSUB

- **Cola**. Necesitamos utilizarlo cuando tenemos un productor que tiene más velocidad que un consumidor, para conectarlos, necesitamos encolar el procesamiento de cada uno de esos mensajes, así el consumidor puede leerlos a medida que puede hacerlo.

- **Repositorio / Pizarra**. Es un conector que está orientado a escribir o leer datos de un componente que funciona como base de datos. Estos conectores van a darle importancia a ese dato y a cuánto ese dato afecta a nuestra base de datos.

- **Modelo Publicar / Suscribir**: PUBSUB. Permite mandar mensajes desde un componente que publique eventos a otro que se suscriba a esos eventos sin necesidad que esos componentes se conozcan entre sí. Esto lo logra a través de conectarse con el publicador y que este publicador le de los eventos, y luego conectarse con el suscritor y que el suscritor le comunique qué eventos le interesa. <span style="color:red">en sistemas distribuidos, Angular
  