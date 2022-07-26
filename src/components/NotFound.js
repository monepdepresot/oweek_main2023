import { Link } from "react-router-dom";
import styledComponents from "styled-components";
import bg from '../img/bg/Homebg.svg';

const MainContainer = styledComponents.div`
background-image: url(${bg});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
height: 100vh;
width: 100vw;
overflow:hidden;
position: relative;

h1 {
    font-size: 100px;
}
display: flex;
justify-content: center;
align-items: center;
`

const NotFound = () => {
    return ( 
        <MainContainer>
            <div>
                <h1>404 NOT FOUND</h1>
                <Link to='/'>Back to Home</Link>
            </div>
        </MainContainer>
     );
}
 
export default NotFound;