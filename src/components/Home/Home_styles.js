import {css} from 'styled-components'
import Ilex from '../../App/variables'
// La utilidad css me permite usar css desde un elemento externo
const estilos_home = css`
    h1 {
        color: ${Ilex.morado};
        font-size: 4em;
        font-weight: bold;
        line-height:0.95;
    }

    .bloque-izquierdo,.bloque-derecho{
        flex-grow:1;
        width:50%;
        position: relative
    }

    .bloque-izquierdo {
        padding:5em 3em 3em 5em;
        box-sizing:border-box;
        .bloque-izquierdo-container{
        width:27.5em;
        margin: auto;
         }
         p{
             margin: 2em 0;
             color: ${Ilex.textos};

         }
         .negrilla{
        font-weight: bold;
        }
    }

    .bloque-derecho>figure{
        position:absolute;
        top: 3.5em;
        img{
            display:block;
            width:28.5em;
            height: auto;

        }

    }


`

export default estilos_home