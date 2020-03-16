import styled, { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`
    .listado{
        padding:2em;
        width:50em;
        margin:auto;
        color:${Ilex.textos};
        text-align:center;
        .contenedorButton{
            padding:2em 0;
            text-align:right;
        }
    }

`
export const Olist = styled.ol`
    list-style:none;
    counter-reset:contador;

`

export const Item = styled.li`
    font-weight:normal;
    counter-increment:contador;
    padding:0;
    margin:0.2em 0;
    &::before{
        content:counter(contador)')';
        font-weight:bold;
        margin-right:0.75em;
    }
`


export default styles
    