const axios = require('axios');
const uuid = require('uuid');
const uuidv4 = uuid.v4;
const logger = require('../../logger');

const tasksController = {};

tasksController.getAll = async (req, res) => {

    try {

        const quantity = req.query.quantity || 3;
        const loremData = await axios.get(`https://lorem-faker.vercel.app/api?quantity=${quantity}`);

        const resData = loremData?.data?.map(item => ({
            id: uuidv4(),
            title: item,
            done: false
        }));

        res.status(200).json(resData)

    } catch (error) {

        const logError = {
            level: 'error',
            message: 'Error al obtener listado',
            endpoint: 'tasks/',
            method: 'GET',
            details: error
        }
        logger.log(logError)

        res.status(500).json({error: 'No pudimos obtener el listado de tareas'})

    }
    
}

tasksController.update = (req, res) => {

    try {

        const taskItem = req.body
        const loggerTask = { id: req.params.id, ...taskItem}
        
        if(req.params.id && req.params.id !== '' && req.params.id !== 'null' && req.params.id !== 'undefined'){

            logger.log({
                level: 'info',
                message: 'Tarea actualizada',
                task: loggerTask
            })
    
            res.status(200).json(loggerTask)

        } else {

            res.status(500).json({error: 'No se recibio el id'})

        }
        
    } catch (error) {

        const logError = {
            level: 'error',
            message: 'Error al actualizar tarea',
            endpoint: 'tasks/',
            method: 'PUT',
            details: error
        }
        logger.log(logError)

        res.status(500).json({error: 'No se pudo actualizar la tarea'})

    }

}

module.exports = tasksController