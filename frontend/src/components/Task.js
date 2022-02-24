import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/react'
import { Card, CardActionArea } from '@mui/material'
import TaskContent from './TaskContent'

const Task = ({
    task,
    handleTask
}) => {

    const cardStyle = css`
        width: 100%;
        height: 100%;
        min-height: 120px;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        background-color: ${task.done ? 'green' : ''};
        color: ${task.done ? 'white' : ''};
    `;

    return (
        <Card sx={cardStyle}>
            <CardActionArea sx={cardStyle} onClick={() => handleTask(task)}>
                <TaskContent task={task} />
            </CardActionArea>
        </Card>
    )
}

Task.propTypes = {
    task: PropTypes.object.isRequired,
    handleTask: PropTypes.func.isRequired
}

export default Task