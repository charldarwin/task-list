import React from 'react'
import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import PropTypes from 'prop-types'

const MainTitle = ({
    title
}) => {
    
    const Title = styled.div`
        text-align: center;
        margin: 1.5rem auto 2rem;
    `;

    return (
        <Title>
            <Typography variant="h4" component="h2">{title}</Typography>
        </Title>
    )
}

MainTitle.propTypes = {
    title: PropTypes.string
}

export default MainTitle