import React from 'react'
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { Modal, Card, CardActions, Button } from '@mui/material'
import TaskContent from './TaskContent';

const TaskModalComponent = ({
    task,
    modalState,
    handleConfirm,
    handleClose
}) => {

    const cssModal = css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: none;
        border-radius: 5px;
        background-color: #fff;
        width: 80%;
        min-width: 280px;
        max-width: 400px;
        padding: 1.5rem;
        box-shadow: none;
        box-sizing: border-box;
    `;

    const cssActions = css`
        margin-top: 1rem;
        justify-content: right;
    `;

    return (
        <Modal
            data-testid="task-modal-component"
            open={modalState}
            aria-labelledby="modal-task"
            aria-describedby="modal-to-update-task"
        >
            <Card sx={cssModal}>
                <TaskContent task={task} />
                <CardActions sx={cssActions}>
                    <Button data-testid="confirm-modal-button" disabled={task?.done} onClick={handleConfirm} variant="contained">Completado</Button>
                    <Button data-testid="close-modal-button" onClick={handleClose} variant="outlined">Cerrar</Button>
                </CardActions>
            </Card>
        </Modal>
    )
}

TaskModalComponent.propTypes = {
    task: PropTypes.object,
    modalState: PropTypes.bool.isRequired,
    handleConfirm: PropTypes.func,
    handleClose: PropTypes.func.isRequired
}

export default TaskModalComponent