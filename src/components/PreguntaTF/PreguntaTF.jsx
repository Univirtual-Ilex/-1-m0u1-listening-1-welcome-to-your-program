
//Import
import React, {useState} from 'react'
import styled from 'styled-components'
import styles from './PreguntaTF_styles'


// components
import ButtonTF from '../ButtonTF'
import Modal from '../Generales/Modal/Modal'
import PreguntaResultado from '../PreguntaResultado'

// Componente base
const PreguntaTF_base = ({changequestion, totalcounts, counter, answers,...props}) => {
    const [collection, changeCollection] = useState([])
    const [collAnswers, InsertAnswers] = useState([])
    const [visibility, changeVisibility] = useState(false)
    // const [feedback, setfeedback] = useState([])
    const [passed, changePassed] = useState(false)
    const nextQuestion = (answer) => {
        if(collection.length < totalcounts) {
            changequestion(counter+1)
            changeCollection(collection.concat(answer))
            InsertAnswers(collAnswers.concat(answers))
            if (collection.length === 9) {
                changePassed(true)
                console.log('Este fue el resultado', collection, collAnswers)
                if(JSON.stringify(collection)===JSON.stringify(collAnswers)){
                    console.log('bieeeen')
                    changePassed(true)
                } else {
                    changePassed(false)
                    console.log('no se parece')}
                changeVisibility(true)
            }
        }
    }
    return (
        <div {...props}>
            <div className='contador'> Question {counter+1}/{totalcounts}</div>
            <div className='pregunta'> { props.children } </div>
            <ButtonTF t onClick={()=>nextQuestion(true)} />
            <ButtonTF f onClick={()=>nextQuestion(false)} />
            <Modal visible={visibility} w={35} err={!passed} ok={passed} repeatUrl='/actividad2a' nxtUrl='/actividad3'>
                {
                    collection.map((question, index) => {
                            if(question === collAnswers[index]){
                                
                                return (
                                    
                                    <PreguntaResultado key={'ok'+index} ok>{index+1}</PreguntaResultado>
                                )
                            } else {
                                return (
                                    <PreguntaResultado key={'err'+index} err>{index+1}</PreguntaResultado>
                                )
                            }
                    })
                }
            </Modal>
        </div>
    )
}
const PreguntaTF = styled(PreguntaTF_base)`${ styles }`
export default PreguntaTF
