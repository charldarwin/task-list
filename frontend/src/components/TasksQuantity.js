import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const TasksQuantity = ({
  label,
  value,
  handleChange
}) => {

  const MainQuantity = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    margin: 1rem 0 1.5rem;
  `;

  const Label = styled.span`
    margin-right: 1.5rem;
    font-size: .875rem;
  `;
  
  const Input = styled.input`
    padding: .5rem;
    border-radius: 5px;
    border: none;
    width: 80px;
  `;

  return (
    <MainQuantity data-testid="quantity-component">
      <Label>{label}</Label>
      <Input
        type='number'
        value={value}
        onChange={handleChange}
        size="small"
        data-testid="input-component"
      />
    </MainQuantity>
  )
}

TasksQuantity.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
  handleChange: PropTypes.func
}

export default TasksQuantity