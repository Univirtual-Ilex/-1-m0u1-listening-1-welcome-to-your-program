
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './Actividad2A_styles'
import Container from '../Container'
import Video from '../Video'

// Components
import PreguntaTF from '../PreguntaTF'
// Data
import data from './Actividad2A_data'
import { useState } from 'react'

// Componente base
// 530 517 video player

const Actividad2A_base = ({staticContext,...props}) => {
    const [datos] = useState(data)
    const [actualquestion, changeStateQuestion] = useState(0)
    const changeQuestion = (nextQuestion) => {
        if(actualquestion < datos.length - 1){
            changeStateQuestion(nextQuestion)
        } else {
            console.log('no more questions')
        }
    }
    return (
        <Container  { ...props } bgImage='./src/bg_actividad1.png'>
            <div className='row'>
                <div className='bloque-izquierdo'>
                    <Video w={530} h={318} videoSrc='./media/m0u1l1/actividad2.mp4' controls/>
                </div>
                <div className='bloque-derecho'>
                    <PreguntaTF changequestion={changeQuestion} counter={actualquestion} totalcounts={datos.length} answers={datos[actualquestion].answer}> {datos[actualquestion].question} </PreguntaTF>
                </div>
            </div>
            <div className='row'>
                <div className='bloque-controles'>
                </div>
            </div>



        </Container>

    )
}
const Actividad2A = styled(Actividad2A_base)`${ styles }`
export default Actividad2A
