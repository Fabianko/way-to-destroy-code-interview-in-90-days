# Modelado y documentación de arquictectura

[ppt clase](https://docs.google.com/presentation/d/1tJsbh1b4w-JPzvCAJm-FB3ZXUg2DIMHtU2lWgDErCLw/edit#slide=id.p)

# *¿Cómo comunicar la arquitectura?*

“Esencialmente, todo modelo es incorrecto. Pero algunos son útiles.”
*Empirical Model-Building and Response Surfaces (George Box, 1987)*

- **Arquitectura restrictiva** Restringe las decisiones que quedan por tomar (por ejemplo cuándo se le da a un equipo de desarrollo) <span style="color:red">Politicas a futuro
- **Arquitectura descriptiva** Documenta las decisiones tomadas y describe el estado actual del sistema, restricciones del pasado más las actuales <span style="color:red">Imagen actual

El arquitecto va a trabajar con diferentes personas para garantizar que la arquitectura se ejecute correctamente:

- **Analista**: Negociación de requerimientos
- **Operaciones**: Cálculo de recursos (costos) $$
- **Desarrolladores**: Restricciones y libertades para desarrollar
- **Diseñadores de productos dependientes (Product Managers)**: Definición de interoperabilidad. Comunicación entre productos. Requerimientos de comunicación como una API. Sincronizar equipos
- **Gestores de proyecto (Project Manager)**: Gestión de equipos y recursos
- **Equipo de calidad (QA)**: Métricas y conformidad


## Documentación vs implementación

- **Modelo de Arquitectura**: Se compone de elementos tales como módulos, componentes, conetores, restricciones, estilo, patrones, atributos de calidad.
- **Código fuente**: Hace referencia a paquetes, clases, interfaces, métodos, funciones, parámetros, tipos.

La “fuente de la verdad” va a ser el código y no el documento de arquitectura. Se deben buscar estrategias para sincronizar el estado actual del código con el documento de arquitectura.

Las posibles estrategias son las siguientes:
- **Ignorar la divergencia**:
Aplica cuando el equipo de trabajo es pequeño y mientras todos conozcan la difernecia entre el modelo de la arquitecura y la implementación consiste en mantener el documento de arquitectura tal y como se encuentra concebido, sabiendo que es lo que hace falta completar y que está en el código fuente.
- **Modelado Ad-hoc**:
Se tiene una idea de la diferencia entre el modelado y el código fuente, de tal forma que se puede enunciar el modelo de arquitectura a pesar de que no se encuentra en el documento.
- **Modelos de alto nivel**:
Se puede seguir modelando la arquitectura con modelos de alto nivel que tienden a cambiar menos y por ende, son más baratos.
- **Sincronización en hitos del ciclo de vida**:
Consiste en actualizar el modelo de arquitectura en algún punto del ciclo de vida de la aplicación. Permite versionar el modelo de arquitectura y saber en cada momento del proyecto cual era el estado del modelo de arquitectura.
- **Sincronizar en una crisis**:
Actualizar el modelo de arquitectura cuando dentro del desarrollo, el codigo fuente riñe contra alguna definición plasmada en el modelo arquitectónico.
- **Sincronización constante**:
Es la estrategia mas obvia, pero la menos eficiente de todas porque es la mas costosa y mas complicada de ejecutar porque es bastante complicado tener el modelo actualizado contra el código fuente.

![img](https://static.platzi.com/media/user_upload/image%20%284%29-06f6a83d-b7f2-482d-82cd-42dfa5e5e03f.jpg)

**apuntes de alumnos:**:

[apunte 1](https://docs.google.com/document/d/1ayrbE-f2nP2EplBe2zJu7o2F1fIxb6-N8LKSCjvJ9U0/edit)

[apunte 2](https://drive.google.com/file/d/1lxI9oj_TCVRye8Ak82Lbq7MBNYO3hwX-/view)