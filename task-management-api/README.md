# Proyecto Spring Boot

Este proyecto está desarrollado en **Java 17** y expone un servicio RESTful en el puerto **8080**.

## Endpoint

Los 3 endpoint principales de la aplicación es:

http://localhost:8080/tasks [GET]
http://localhost:8080/tasks [POST]
http://localhost:8080/tasks/${taskId} [DELETE]

## Método

### GET

Este endpoint acepta solicitudes GET y NO requiere un request body en formato JSON.

Este endpoint retorna todas las tareas creadas actualmente


### POST

Este endpoint acepta solicitudes POST y requiere un request body en formato JSON con la siguiente estructura:
```json
{
    "title": "Nueva tarea de prueba",
    "description": "Esta es una nueva tarea de prueba"
}
```

### Parámetros

- **title**: Titulo de la tarea
- **description**: Descripcion de la tarea.

### DELETE

Este endpoint acepta solicitudes DELETE y requiere un path param, el cual hace referencia al id de la tarea en la lista de memoria-


## Contacto

Para cualquier duda, no dudes en contactarte:

**Johan Sebastian Miranda Gualdron**
