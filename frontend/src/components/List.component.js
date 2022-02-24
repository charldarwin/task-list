import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@mui/material'
import Task from './Task'

const ListComponent = ({
    tasks,
    handleTask
}) => {
    return (
        <Grid data-testid="list-component" container spacing={3}>
            {
                tasks?.length > 0 && tasks.map((task, index) => (
                    <Grid item xs={12} sm={6} md={4} key={task.id}>
                        <Task task={{index: index + 1, ...task}} handleTask={handleTask} />
                    </Grid>
                ))
            }
        </Grid>
    )
}

ListComponent.propTypes = {
    tasks: PropTypes.array.isRequired,
    handleTask: PropTypes.func.isRequired
}

export default ListComponent