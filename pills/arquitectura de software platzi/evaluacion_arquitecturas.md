# **Evaluación y evolución**



Dependiendo el contexto, la validación de arquitectura, es un proceso que tenemos que hacer antes de entrar en desarrollo o bien como un proceso continuo cada vez que desarrollamos.
En metodologías tradicionales, el diseño de la arquitectura es importante antes de empezar a desarrollar
En metodologías ágiles se revalúa la arquitectura en cada iteración.

**Método ATAM (Método de análisis de Trade-off)** ->
Los objetivos de negocio, atributos de calidad y los escenarios planteados se combinan con la arquitectura que definamos, sus estrategias y decisiones. Se analizan para que las partes interesadas tengan voz y voto y decidir sobre la misma

![IMG](https://static.platzi.com/media/user_upload/image%20%281%29-e995583e-ad02-4493-88f8-f5b19db3eba5.jpg)

- **Trade-offs**. cuando le damos importancia a la mantenibilidad por sobre la eficiencia
- **Puntos sensibles**. tener una traza de auditoria
- **No-Riesgos**. al principio no tenermos riesgo de disponibilidad, por no tener SLA
- **Riesgos**. hay riesgos que si también los vamos a entender qué van hacer un feedback y van a volver a entrar a este método como decisiones nuevas de arquitectura.

![img](https://static.platzi.com/media/user_upload/image%20%282%29-617f1504-5023-47b8-b9d9-1e22d26b72d5.jpg)

- **Metricas**: ejemplo: disponibilidad 95% de up
- **Pruebas Automatizadas**: generación de escenarios para validar las metricas.
- **Umbrales**: disparar alertas si la metrica supera el umbral
  
![img](https://static.platzi.com/media/user_upload/image%20%283%29-b64ea430-ae1b-4152-bca9-6dd671ce7517.jpg)