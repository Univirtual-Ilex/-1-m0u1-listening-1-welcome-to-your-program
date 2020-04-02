
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './ButtonControlUI_styles'
import { Link } from 'react-router-dom'
// Componente base
const ButtonControlUI_base = ({tooltip, icon,...props}) => {
    return (
        <div {...props}>
            <button className='btn-clean'>
                <i className={ icon }/>
            </button>
        </div>

    )
}

const ButtonControlUILink_base = ({tooltip, icon, target, ...props}) => {
    return (
        <div {...props}>
            <Link className='btn-clean' to={target}>
                <i className={ icon }/>
            </Link>
        </div>

    )
}


export const ButtonControlUILink = styled(ButtonControlUILink_base)`${ styles }`
const ButtonControlUI = styled(ButtonControlUI_base)`${ styles }`
export default ButtonControlUI
