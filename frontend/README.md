# Task List - Frontend

Visualización Frontend para Listado de Tareas.

## Instalación y ejecución

Para inicializar el proyecto, se deben instalar todas las dependencias que el proyecto necesite. \
Para ello ejecutamos el siguiente comando:

```bash
yarn install
```

Finalizada la instalación de dependencias.

Ejecutar el siguiente comando para correr el proyecto en el puerto local 3000

```bash
yarn start
```

Clic aquí [http://localhost:3000](http://localhost:3000) para visualizar el proyecto en el navegador una vez ya este corriendo correctamente.

**El proyecto cuenta con unit test por lo que estos pueden ser ejecutados con los siguientes comandos**

```bash
yarn test
```

Permitirá la ejecución de todos los tests incluidos en el proyecto

```bash
yarn test:coverage
```

Permitirá conocer el alcance de los tests incluidos en el proyecto.

## Detalles adicionales

El proyecto consumirá 2 endpoints. Por ende, se necesita que este corriendo el backend del proyecto a la vez.

### `GET:` http://localhost:3030/tasks/?quantity=3

A este endpoint le enviamos la solicitud con el query param de `quantity`. \
De no enviarse ningún query params devolverá 3 tareas por defecto.\
El listado de tareas se obtiene de [Vercel Lorem faker](https://lorem-faker.vercel.app/api?quantity=3).

### `PUT:` http://localhost:3030/tasks/{:id}

A este endpoint le enviamos el `id` y el `body` de la tarea a editar como un objeto. \
Este envío es solo para el registro de una entrar en `logs/events.log` \
De existir algún error en el proceso, el endpoint devolverá un error.
