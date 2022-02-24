import React, { useState, useEffect } from 'react'
import ListComponent from './List.component'
import TaskModalContainer from './TaskModal.container'
import { BFF_CALLS } from '../common/BFF'
import TasksQuantity from './TasksQuantity'

const ListContainer = () => {

    const [tasks, setTasks] = useState([])
    const [taskSelected, setTaskSelected] = useState(null)
    const [quantity, setQuantity] = useState(3)

    const handleTask = (task) => {
        setTaskSelected(task)
    }

    const tasksData = async () => {
        const data = await BFF_CALLS.Tasks.getTasks(quantity)
        if(data.length > 0) setTasks(data)
    }

    useEffect(() => {
        tasksData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quantity])

    const handleQuantityChange = (evt) => setQuantity(Number(evt.target.value))

    return (
        <>
            <TasksQuantity label='Cantidad a mostrar:' value={quantity} handleChange={handleQuantityChange} />
            <ListComponent tasks={tasks} handleTask={handleTask} />
            <TaskModalContainer taskSelected={taskSelected} setTasks={setTasks} setTaskSelected={setTaskSelected} />
        </>
    )
}

export default ListContainer