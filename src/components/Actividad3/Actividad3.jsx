//Import
import React from 'react'
import styled from 'styled-components'
import styles from './Actividad3_styles'
import Container from '../Container'
import Ilex from '../../App/variables'
import ProgressBar from '../ProgressBar'
import MainTitle from '../MainTitle'
import InputWords from '../InputWords'

// styles from styled
import { ProgressbarContainer } from '../Actividad1/Actividad_styles'
import {Olist} from './Actividad3_styles'
import {Item}from './Actividad3_styles'
import ButtonModal from '../ButtonModal'
import Modal from '../Generales/Modal'
import { useState } from 'react'


// Componente base
const Actividad3_base = ({staticContext,...props}) => {

    const [feedbackState, setfeedbacSktate] = useState([])
    const [testStatus, setTestStatus] = useState(false)
    const [modal, setModal] = useState(false)
    const [progressbarState, setprogressbarState] = useState(75)
    const finish = (feedback) => {
        console.log('Thank you for that: ', feedback)
        setfeedbacSktate(feedbackState.concat(feedback))
        if (feedbackState.length === 4) {
            console.log('Congrats, you finished')
            // setModal(true)
            setprogressbarState(100)
            setTestStatus(true)
        }
    }
    const buttonAppear = () => {
        return (
            <ButtonModal onClick={()=>(setModal(true))}>Finish</ButtonModal>
        )
    }

    return (
        <Container {...props} bgImage='./src/bg_actividad1.png'>
            <ProgressbarContainer>
                <ProgressBar progress={progressbarState} />
            </ProgressbarContainer>
            <div className='container-content'>
                <MainTitle color={Ilex.violeta2}> COMPLETE THE SENTENCES WITH THE CORRECT WORDS FROM THE CONVERSATION </MainTitle>
            </div>
            <div className='listado'>
                <Olist>
                    <Item> Marcela has <InputWords answer='Introduction' sendFeedback={finish}/> to Literature class on Tuesdays.</Item>
                    <Item> Johnny and Marcela’s class is in room  <InputWords answer='12-507' sendFeedback={finish}/> </Item>
                    <Item> Johnny’s class at “La Julita” is in room  <InputWords  answer='JULB03' sendFeedback={finish}/></Item>
                    <Item> Antonio has <InputWords answer='Reading' sendFeedback={finish} /> and writing class with Johnny. </Item>
                    <Item> Marcela and Johnny have class at the Fine  <InputWords answer='Arts' sendFeedback={finish} /> building.</Item>
                </Olist>
                <div className='contenedorButton'>
                    {
                    testStatus 
                    ? buttonAppear()
                    : ''
                    }

                </div>
                    <Modal visible={modal} ok w={25} nxtUrl='#/' repeatUrl='#/actividad3'/> 
            </div>
        </Container>

    )
}
const Actividad3 = styled(Actividad3_base)`${ styles }`

export default Actividad3
