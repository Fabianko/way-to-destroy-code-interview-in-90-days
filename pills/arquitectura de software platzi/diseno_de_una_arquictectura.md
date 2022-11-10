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
  
## Escenarios y tácticas
- **Framework de diseño orientado a atributos** plantea una estructura de Escenarios y tácticas en donde cada escenario ayudará a conectar atributos con diferentes tácticas de implementación.

- **La estructura básica** de todo escenario del framework en donde un escenario que va a estar asociado a un atributo de calidad especifico va a plantear <span style="color:red">**un estímulo**</span>, el cual va a tener que ver con algo que afecta directamente a este atributo de calidad y luego va a plantear diferentes tácticas <span style="color:red">**para controlar la respuesta**</span> a este estímulo, por último <span style="color:red">**la respuesta**</span> es lo que esperamos o nuestro caso de éxito como pudimos resolver este estimulo con la implementación de algunas de estas tácticas.

## 1 - Escenarios: Disponibilidad

- **Disponibilidad**. Nuestro estímulo es la falla. <span style="color:red">**tacticas:**</span>
  - **Detección**. Detectar si perdimos disponibilidad o si hay alguna actividad que está sucediendo en nuestro sistema que está comprometiendo la disponibilidad. <span style="color:red">**are you alive?**</span>
    - **Ping / Eco**. Se trata de cómo un componente va a mandar un mensaje genérico a otro componente para que el componente le responda. Esa respuesta simplemente es una forma de saber si el componente al que nos comunicamos está disponible o no.
    - **Latido**. Un componente emite un mensaje periódicamente para notificar disponibilidad, de esta forma podemos tener alertas de que cuándo un componente no notifica en x tiempo sabemos que perdió disponibilidad.
    - **Excepciones**. Nos ayuda a darnos cuenta cuándo se pudo haber comprometido la disponibilidad y exactamente por qué.
  - **Reparación**. Cómo estar listo para que si algo falla lo podamos reparar de la forma más rápida posible, ya sea a través de interacción con un operador o incluso que el sistema pueda repararse solo. <span style="color:red">**Clusters**</span>
    - **Votación**. Significa que tenemos múltiples componentes que tienen la misma funcionalidad pero sin embargo no podemos confiar que todos respondan lo mismo, a través de un componente central que pueda evaluar esa respuesta podemos decidir si un componente está en falta o no.
    - **Redundancia activa**. Trata de garantizar que todos los mensajes de entrada le lleguen a todos los componentes redundantes al cluster.
    - **Redundancia pasiva**. En vez que la comunicación se haga a todos los componentes, la comunicación se hace a un componente y ese es responsable de sincronizar con otros componentes que están escuchando de manera pasiva estos cambios.
    - **Repuesto**. Nos dice que cuándo algo falle podemos remplazar todo el sistema o una gran parte del sistema por un sistema de tipo Backup que tengamos preparado para seguir respondiendo.
  - **Recuperación: Reintroducción**. Cómo podemos hacer dado una falla de disponibilidad para reintroducir el sistema y que vuelva a estar disponible. <span style="color:red">**REBOOT por cluster**</span>
    - **Modo Sombra**. Un componente comienza a fallar entonces lo quitamos de nuestro cluster productivo, pero seguimos evaluando por detrás si se comporta correctamente o no. Ya sea con un operador o el mismo sistema. 
    - **Sincronización de estado**. El estado del componente pasa a ser inválido, entonces lo quitamos del cluster productivo y sincronizamos el estado de los que sí se comportan correctamente con el componente que no se estaba comportando correctamente.
    - **Punto de control / Retroceso**. Nos permite marcar estados de nuestra aplicación que sabemos que son consistentes. Entonces cuándo detectamos una falla, podemos quitar de servicio ese componente y volverlo atrás al estado consistente y luego reproducir con un log o registro las acciones que fueron sucediendo después de ese estado, de esa forma podemos recuperar el estado consistente de la aplicación y poder introducirlo al sistema. <span style="color:red">**Rollback**</span>
  - **Prevención**. Qué podemos hacer para prevenir el estado de falta de disponibilidad.
    - **Quitar de servicio**. Quitamos el componente y no vamos a estar continuamente reparándolo.
    - **Transacciones**. Controlar el bloque de cambios que vamos a hacer como para poder deshacerlos todos juntos o impactarlos todos juntos de esa forma prevenimos que cambios pequeños dejen nuestra aplicación en estado inconsistente. <span style="color:red">**NewRelic u otro**</span>
    - **Monitoreo de procesos**. Se refiere a revisar los procesos de ejecución de una máquina virtual o de un servidor y poder eliminar o terminar uno de esos procesos y volver a iniciarlos cuándo detectamos que hay una falla, pueden ser automáticos y nos ayudan a que nuestro sistema siga estando disponible por más que un proceso se esté comportando de forma anormal. <span style="color:red">**Bajo nivel**</span>

## 2 - Escenarios: Mantenibilidad

En este caso el estimulo es un pedido de cambio (llega un requerimiento y tenemos que cambiar el sistema).

Familias de tácticas de mantenibilidad:
- **Confinar modificaciones**. Las tácticas van a intentar trabajar sobre nuestros módulos para que cada cambio que nos pidan esté confinado a sólo un módulo. Cuando logramos esto logramos que las dependencias entre módulos sean más ligeras y el cambio que nos proponen no afecte a muchas partes del sistema.
  - **Coherencia semántica**. Habla de la relación entre las responsabilidades de los módulos. Hablamos de acoplamiento y cohesión. Si logramos encontrar la cohesión en un módulo entonces vamos a poder hacer que ese módulo sea más mantenible. De lo contrario es posible que ese módulo cambie por diferentes razones. 
    - **Abstraer servicios** comunes. Cuando encontramos que la aplicación tiene servicios más genéricos de no necesario podemos abstraerlos a un punto común y que las dependencias vayan de los módulos cohesivos a un servicio o modulo externo.
    ![img](https://blog.koalite.com/wp-content/uploads/cohesion-acoplamiento.png)

  - **Generalizar**. Al generalizar un módulo podemos separar lo específico de lo genérico.
  - **Limitar opciones disponibles**. Limitar el rango de modificación nos ayuda a que sea más mantenible.
  - **Anticipar cambios**. Prepararnos para algún cambio que nosotros mismo sepamos que se deberá de dar en el futuro tomando en cuenta una estrategia sobre como incorporar el nuevo cambio. Los patrones de diseño suelen estar orientados a esto (Patrón estrategia).

- **Prevenir efectos domino**. Trabaja estrictamente con las dependencias, es decir cuando podemos detectar que un cambio generaría problemas en otros módulos o dependencias.
  - **Ocultar información**. Cualquier módulo u objeto que diseñemos, tenga la capacidad de ocultar cierta parte de la información para que los agentes externos no dependan de esa información puntual sino de una interfaz clara que no puedan cambiar por más que la información cambie. De esta forma podemos garantizar que, si el cambio de la información es importante, los dependientes no necesiten cambiar porque están pasando por una interfaz que no cambió.
  <span style="color:red">**POO: private/public**</span>
  - **Mantener la interfaz**. Si tengo un servicio que hace algo, la dependencia a ese servicio va a ser a través de una interfaz clara, de lo contrario cualquier acción cuándo cambie puede poner en riesgo el módulo. <span style="color:red">**schemas**</span>
  - **Restringir comunicación**. Para generar sistemas que estén acoplados de forma ligeras, en vez de conocer las dependencias de tus dependencias, siempre te limites a tus dependencias directas, de esta forma cualquier cambio en la forma que tus dependencias trabajan no afecta al módulo en el que estás trabajando. <span style="color:red">**limitar comunicación a dependencias directas**</span>
  - **Intermediarios**. Hablamos de un punto dónde podamos compatibilizar a un módulo con otro y si dejan de ser compatibles, estos intermediarios puedan servir como punto de compatibilidad. <span style="color:red">**Adapters y factories / public subscribe**</span>
- **Diferir enlace**. Habla sobre cómo podemos hacer para que un cambio en nuestro código no requiera desplegar toda la aplicación completa.
  - **Registro en ejecución**. Cuando un módulo o servicio depende de otro, si dependen fuertemente van a requerir estar compilados juntos. Si nosotros podemos diferir esa compilación y que se registre un servicio en momento de ejecución, es decir que se ponga disponible a sus dependencias en el momento de ejecución, podemos hacer que estos servicios se puedan desplegar independientemente. <span style="color:red">**estrategias dinamicas**</span>
  - **Archivos de configuración**. Van a servir para en momento de ejecución saber cómo conectar varias partes. Es imprescindible que nuestros módulos dependan de interfaces y no de implementaciones específicas. <span style="color:red">**plugins**</span>
  - **Polimorfismos**. Un objeto pueda comportarse de forma diferente en base a su estado. A través del polimorfismo podemos postergar la forma en que se resuelve un problema dependiendo de qué instancia del objeto será. <span style="color:red">**POO: PD state**</span>
  - **Reemplazo de componentes**. Tener la capacidad de desplegar un componente y luego desplegar su reemplazo, o quizás otro componente que respete esa interfaz, y que todo el resto de nuestra aplicación no necesite cambiar. <span style="color:red">**Angular**</span>
  - **Adherir a protocolos**. Nos permite tener un protocolo claro entre dos módulos y no necesitar saber la instancia específica o el tipo específico de un módulo. <span style="color:red">**API→schemas**</span>
