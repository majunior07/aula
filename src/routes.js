import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';

import Header from './components/Header';

const Routes = () => {
    return(
        <BrowserRouter>    
        <Header />      
           <switch>
                <Route exact path="/" component={Home} /> 
                <Route path="/sobre" component={Sobre} />
                <Route path="/contato" component={Contato} />
           </switch>
        </BrowserRouter>
    )
}

export default Routes;




