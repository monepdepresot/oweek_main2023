import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import home2 from '../img/home2.svg'

const Power = styled.button`
position: absolute;
top: 3rem;
left: 50%;
transform: translate(-50%, 0);

background-color: black;
padding: 0.5rem;
border-radius: 50%;
border: 0px solid #000;
width: 2rem;
height: 2rem;

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
        <img src={home2} className='PowerButton' />
        </NavLink>
        </Power>
    )
}

export default PowerButton2
