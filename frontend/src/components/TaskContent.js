import React from 'react'
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { CardContent, Typography } from '@mui/material'

const TaskContent = ({
    task
}) => {

    const pretitleStyle = css`
        font-size: .875rem;
    `;

    return (
        <CardContent>
            <Typography sx={pretitleStyle} color="text.secondary" gutterBottom>
                {`Tarea #${task.index}`}
            </Typography>
            <Typography variant="h5" component="div">
                {task.title}
            </Typography>
        </CardContent>
    )
}

TaskContent.propTypes = {
    task: PropTypes.object
}

export default TaskContent