
# Escenarios y tácticas
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

## 3 - Escenarios: Eficiencia de ejecución

En el caso de eficiencia de ejecución vamos a tener eventos ingresando a nuestro sistema como estímulo y luego vamos a trabajar sobre las tácticas para controlar esta eficiencia para que la respuesta sea dentro del tiempo esperado.

- **Demanda de recursos**. Trata sobre cuándo entra un evento, cómo hacemos para que ese evento tenga los recursos disponibles y cuánto de esos recursos necesita.
  - **Mejorar la eficiencia computacional**. Podemos analizar nuestros algoritmos y podemos analizar nuestro procedimiento para encontrar cuáles son los puntos en dónde no estamos siendo eficientes.
  - **Reducir sobrecarga**. Habla sobre cuántos pasos o qué acciones estamos tomando para una misma tarea o responder a un mismo evento.
  - **Manejar tasa de eventos**. Cuántos eventos vamos a emitir a un componente específico y si es necesario ser tan fino en estos eventos. Si podemos reducir esa tasa de eventos podemos optimizar esa comunicación.
  - **Frecuencia de muestreo**. Si yo sí estoy recibiendo todo este stream, cómo puedo hacer para decidir procesar esos eventos en una forma grupal, entonces en lugar de hacer una tarea por evento puedo hacer una tarea cada cierta cantidad de tiempo y agrupar todos los eventos en una tarea única puedo hacer mejor uso de los recursos procesando una sola vez un grupo de eventos.
  
- **Gestión de recursos**. Cómo ponemos disponibles más o menos recursos y cómo hacemos para que estén cuándo se le necesitan.
  - **Concurrencia**. Trabajamos sobre cómo paralelizar nuestro proceso para que se pueda responder en menor tiempo usando recursos de forma paralela o en menor tiempo.
  - **Réplicas**. Cómo podemos duplicar el procesamiento o los datos para hacer más accesibles estos recursos a nuestro proceso.
  - **Aumentar recursos**. El poder medir y decidir cuándo crecer la cantidad de recursos que tenemos disponibles.

- **Arbitraje de recursos**. En caso de conflicto, en caso de haber múltiples eventos necesitando los mismos recursos cómo decidimos cuáles tienen prioridad.
  - **Políticas de planificación de tareas**. Yo puedo decidir que cada recurso tiene que responder en el momento entonces tiene que tener un acceso sincrónico, un acceso prioritario a cada uno de esos recursos o puede postergar tareas y agendarlas para que se hagan en un momento futuro. Incluso puedo priorizar esos pedidos paralelos y decidir si un pedido es más importante que otro o el orden en que se van a resolver.
  
## 4 - Escenarios: Seguridad

- **Detectar ataques**. Tratar de identificar que el estado actual de la aplicación tiene un atacante de por medio.
  - **Detectores de intrusos**. Ayuda a tener diferentes implementaciones puestas en nuestra aplicación para saber cuándo se está utilizando de forma incorrecta.

- **Recuperación de ataques**. Tratar de tener diferentes tácticas para poder volver a un estado consistente y saber cuáles fueron las acciones que el atacante tomó para poder evitarlas.
  - **Restauración**. Cómo hacemos para tener por un lado un estado conocido que sabemos que es consistente o por otro lado diferentes estados que podemos comparr y saber si estamos en un estado consistente o no.
    - **Disponibilidad** (escenarios)
  - **Identificación**. Es importante para poder saber qué es lo que hizo el atacante.
    - **Traza de auditoría**. Sepamos exactamente todos los pasos que dan nuestros usuarios como para que, cuándo detectamos al atacante, podamos volver a un estado conocido y luego ejecutar todas las acciones de nuestros usuarios ignorando lo que hizo el atacante. <span style="color:red">logs de auditoria

- **Resistencia al ataque**. Va a tratar que el atacante no tenga éxito.
  - **Autenticación**. Refiere a cómo sabemos que el usuario es quién dice ser.
  - **Autorización**. Trata no solamente de saber quién es esa persona sino saber qué puede o no hacer esa persona. <span style="color:red">(Roles x usuario)
  - **Confidencialidad de datos**. Refiere a como garantizaxmos que el dato lo puede ver quien deberia verlo. <span style="color:red">(encriptación)
  - **Limitar Exposición**. vamos a buscar que si un atacante entra por algun lugar, no va a poder acceder a la información mas sensible, <span style="color:red"> separar datos de usuarios
  - **Integridad**. trata de como garantizar que el mensaje que nos estan enviando es integro, esta compuesto como el emisor lo configuro. algoritmos de hash para recibir lo que se envió. <span style="color:red">(JWT)
  - **Limitar acceso**. identificar los puertos en donde alguien puede acceder y buscar las restricciones.<span style="color:red"> ocultar puerto ssh
  
## 5 - Escenarios: Capacidad de prueba

El estímulo es la capacidad de probar que esta funcionalidad es la correcta y luego el resultado esperado será detectar fallas para repararlas y volver a iterar.

- **Entradas y salidas**. Cómo hacer para dado estímulo de pruebas evaluar esa salida.
  - **Captura y reproducción**. Capturar la comunicación, es decir saber qué es lo que le están diciendo a la aplicación y luego usar esa misma comunicación en un test de prueba. <span style="color:red">(vsr, Cypress.io)
  - **Separar interfaz de implementación**. Cuando separamos la interfaz de la implementación podemos hacer pruebas remplazando la implementación con una implementación controlada y evaluar si esa implementación está recibiendo los mensajes que deseamos que reciba. [<span style="color:red">Test double](https://en.wikipedia.org/wiki/Test_double)
  - **Acceso exclusivo para pruebas**. Cómo hacer cuándo tenemos una funcionalidad y hay cierta parte que no podemos controlar desde fuera de la aplicación. Entonces si queremos hacer una prueba desde fuera de la aplicación podemos darnos acceso a cierta parte como contexto de testing. <span style="color:red">STACKS with microservices.

- **Monitoreo Interno**. Va a tener en cuenta la ejecución de nuestra aplicación y cómo probar que se está ejecutando correctamente.
  - **Monitoreo incorporado**. La aplicación sea consciente de los recursos que está consumiendo, los pedidos que recibe e incluso que los pueda guardar y de cualquier información que nos sirva para después entender y hacer debugging de qué es lo que pasó cuándo pasó un error.<span style="color:red">aplicaciones de escritorio

## 6 - Escenarios: Usabilidad

Va a tener como estímulo el pedido de usuario y luego vamos a ver con qué tácticas contamos para a través del control de la usabilidad poder brindar información y asistencia al usuario.

- **Separar la interfaz de usuario**. Que cualquier otro artefacto que haya dentro de nuestra aplicación, cualquier módulo que hagamos, esté separado de la interfaz de usuario. De esta forma podemos iterar y podemos revisar la cantidad de veces que sea necesario la interfaz de usuario para poder trabajar constantemente sobre la usabilidad de lo que estamos proponiendo.
  - **Mantenibilidad- Coherencia Semántica** cualquier otroartefacto este separado de la interfaz de usuario, para poder revisar y manejar la usabilidad en el tiempo. y esto puede trabajarse independientemente de la lógica de negocios o de la estructura de datos.
- **Iniciativas del Usuario** como hacer para que el usuario tenga mayor control sobre las acciones.
  - **Cancelar**. Permite a un usuario dada una acción previa el poder arrepentirse.
  - **Deshacer**. Volver para atrás al estado anterior le permite al usuario re evaluar lo que va a hacer y luego tomar mejores decisiones.
  - **Agregación**. Tiene que ver con entender cuándo las funcionalidades que estamos presentando al usuario en realidad deberían estar agrupadas.
  - **Múltiples vistas**. Refiere a cómo hacemos para que el usuario tenga solamente la información necesaria para poder hacer sus acciones de la forma más eficiente posible.

- **Iniciativas del Sistema**. La idea es poder entender del lado del sistema cuál es el estado actual de la aplicación.
  - **Modelo del usuario**. Esto significa que del lado del sistema entendamos cuál es el estado actual del usuario para poder empezar una iniciativa, es decir, enviar un mensaje del lado del sistema y que tenga sentido con lo que está viendo. por ejemplo seria raro ver una alerta a un input si aun no llena un formulario.
  - **Modelo del sistema**. Implica qué sabemos de nosotros mismos, qué sabemos cómo aplicación de lo que está pasando en este momento. Ejemplo: si el usuario tiene un proceso en ejecución que este en conocimiento si paso algo o fue exitoso.
  - **Modelo de la tarea**. Tiene que ver con cuánto entiende el sistema de la tarea que está queriendo realizando el usuario. Ejemplo: si la tarea es una compra, si algun dato falta o requiere asistencia, puede apoyar al usuario para realizar la tarea.