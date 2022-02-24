import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { BFF_CALLS } from '../common/BFF'
import TaskModalComponent from './TaskModal.component'

const TaskModalContainer = ({
    taskSelected,
    setTaskSelected,
    setTasks
}) => {

    const [modalState, setModalState] = useState(false)

    const handleClose = () => setModalState(false)
    const handleConfirm = () => completeTask()

    const completeTask = async () => {
        const data = await BFF_CALLS.Tasks.updateTask({...taskSelected, done: true})
        if(data) {
            setTasks(tasks => tasks.map(task => ({...task, done: task.id === data.id || task.done})))
            handleClose()
        }
    }

    useEffect(() => {
        if(taskSelected) setModalState(true)
    }, [taskSelected])

    useEffect(() => {
      if(!modalState) setTaskSelected(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [modalState])
    
    return (
        <TaskModalComponent task={taskSelected} modalState={modalState} handleConfirm={handleConfirm} handleClose={handleClose} />
    )
}

TaskModalContainer.propTypes = {
    taskSelected: PropTypes.object,
    setTaskSelected: PropTypes.func,
    setTasks: PropTypes.func
}

export default TaskModalContainer