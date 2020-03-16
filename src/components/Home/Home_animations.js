import {keyframes} from 'styled-components'
//import Ilex from '../../App/variables'
const entrada_top_Y = keyframes`
0%{ 
    opacity:0;
    transform:translateY(200px);
}
40%{
    opacity:1;
}
100%{
    transform:translateY(0)
}
`
const salida_top_Y = keyframes`
0%{ opacity: 1}
100%{  display:none; opacity: 0 }

    .entrada-top-Y{
        animation: entrada_top_Y 0.6s cubic-bezier(1,0,.09,1);
    }

    .entrada-top-Y-2{
        animation: entrada_top_Y 0.7s cubic-bezier(1,0,.09,1);
    }

    .saldida-top-Y{
        animation-name: salida_top_Y 0.6s cubic-bezier(1,0,.09,1);
    }




`

export default {entrada_top_Y, salida_top_Y}