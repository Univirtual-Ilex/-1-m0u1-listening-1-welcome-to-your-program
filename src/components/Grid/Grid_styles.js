import { css } from 'styled-components'

const padding = (tipo) => {
    switch(true){
        case tipo.p && tipo.p>=0:
            return `${ tipo.p }em`
        case tipo.pt && tipo.pt>=0:
        case tipo.pr && tipo.pr>=0:
        case tipo.pb && tipo.pb>=0:
        case tipo.pl && tipo.pl>=0:
           return `${tipo.pt&&tipo.pt>=0 ? tipo.pt+'em': 0 } ${tipo.pr&&tipo.pr>=0 ? tipo.pr+'em': 0 } ${tipo.pb&&tipo.pb>=0 ? tipo.pb+'em': 0 } ${tipo.pl&&tipo.pl>=0 ? tipo.pl+'em': 0 }`
        case tipo.px && tipo.px>=0:
        case tipo.py && tipo.py>=0:
            return `${tipo.py}em ${tipo.px}em ${tipo.py}em ${tipo.px}em`
        default:
            console.log('son',tipo.pt)
            return '0em'
    }

}

const styles = css``

export const stylesRow = css`
    display: flex;
    flex-wrap:wrap;
    justify-content: ${ props => props.justify };
    width:${ (props) => {
        return props.w
    } }%;
    margin: ${
        (props)=>{
            switch (props.align) {
                case 'center':
                    return '0 auto'
                case 'left':
                    return '0'
                case 'right':
                    return '0 0 0 auto'
                default:
                    return 0
            }
        }
    };
    padding:${ (props) => (padding(props)) };
    &>div{
        margin-left:${props => props.gutters}em;
        margin-right:${props => props.gutters}em;
    }
`
export const stylesCol = css`
    padding: ${ (props)=> (padding(props))  };
    width:${props=> props.w? props.w: 100}%;

`

export default styles
