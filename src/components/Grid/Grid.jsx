
//Import
import React from 'react'
import styled from 'styled-components'
import styles,{stylesCol, stylesRow} from './Grid_styles'

/**
 * Irow props
 * justify = center flex-start flex-end space-between space-around space-evenly
 * cols (default 12)
 * w ancho en porcentaje
 * align alinea el contenedor (default left) center right
 * gutters ancho de medianil (default 0) se mide en unidades de EM (revisar variables el tamaño del font)
 * p (padding) pr pt pb pl px py 
 * 
 */
export const IRow = styled.div`
    ${stylesRow}
`

export const ICol = styled.div`
    ${stylesCol}
`
// Componente base
const Grid_base = ({...props}) => {
    return (
        <IRow {...props} justify='center' w={80} align='center' gutters={0.4}>
            <ICol w={26}>Creado el componente Grid</ICol>
            <ICol w={70}>Creado el componente Grid</ICol> 
            <ICol w={30}>Creado el componente Grid</ICol>           
        </IRow>
    )
}
const Grid = styled(Grid_base)`${ styles }`
export default Grid
