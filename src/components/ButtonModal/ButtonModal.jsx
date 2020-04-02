
//Import
import React from 'react'
import styled from 'styled-components'
import styles,{stylesa} from './ButtonModal_styles'
import {HashRouter, Link } from 'react-router-dom'
// Componente base
const ButtonModal_base = ({ disabled, inactivo , children, ...props}) => {
    const isActive = () => {
        if (inactivo){
            return 'inactivo'
        }

    }
    return (
        <div { ...props }>
            <button className={ `btn-clean ${ isActive() } ` }>
                { children }
            </button>
        </div>
     

    )
}

const ButtonModalLinkBase = ({ disabled, inactivo , children, target, ...props}) => {
    return (
        <div {...props}>

        <HashRouter basename="/ilex/interactions/1M0U1L1/">
            <Link to={target}>
                { children }
            </Link>
        </HashRouter>
        </div>
    )
}

const ButtonModal = styled(ButtonModal_base)`${ styles }`
export const ButtonmodalTo= styled.a`
    ${stylesa}
`
export const ButtonmodalLink= styled(ButtonModalLinkBase)`
    ${stylesa}
`

export default ButtonModal
