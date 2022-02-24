# Task List - Backend

Visualización Backend para Listado de Tareas.

## Instalación y ejecución

Para inicializar el proyecto, se deben instalar todas las dependencias que el proyecto necesite. \
Para ello ejecutamos el siguiente comando:

```bash
yarn install
```

Finalizada la instalación de dependencias.

Ejecutar el siguiente comando para correr el proyecto en el puerto local 3030

```bash
yarn start
```

Clic aquí [http://localhost:3030](http://localhost:3030) para visualizar el proyecto en el navegador una vez ya este corriendo correctamente.

## Detalles adicionales

El proyecto habilitará 2 endpoints:

### `GET:` http://localhost:3030/tasks/?quantity=3

Este endpoint puede recibir mediante query params `quantity` que define la cantidad de tareas a devolver \
De no enviarse ningún query params devolverá 3 tareas por defecto.\
El listado de tareas se obtiene de [Vercel Lorem faker](https://lorem-faker.vercel.app/api?quantity=3).

### `PUT:` http://localhost:3030/tasks/{:id}

Este endpoint debe recibir el `id` y el `body` de la tarea a editar como un objeto. \
Una vez reciba correctamente los datos, este generará un registro log tipo `info` dentro del archivo `logs/events.log` \
De existir algún error devolverá un mensaje de error y añadirá un registro log tipo `error` dentro del archivo `logs/events.log`

