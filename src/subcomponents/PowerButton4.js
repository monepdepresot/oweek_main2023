import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { PowerBtn2 } from '../AllSvg'

const Power = styled.button`
position: absolute;
top: 3rem;
left: 50%;
transform: translate(-50%, 0);

background-color: black;
padding: 0.3rem;
border-radius: 50%;
border: 0px solid #000;
width: 2.5rem;
height: 2.5rem;

display: flex;
justify-content: center;
align-items:center;
z-index:1;

cursor: pointer;

&:hover{
    background-color: #00B984;
}

&>*:first-child{
    text-decoration: none;
    color: inherit;
}
`

const PowerButton2 = () => {
    return (
        <Power>
        <NavLink to="/">
        <PowerBtn2 width={32} height={32} />
        </NavLink>
        </Power>
    )
}

export default PowerButton2
