import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Erro from './pages/Erro';

import Header from './components/Header';

const Routes = () => {
    return(
        <BrowserRouter>    
           <Header />      
           <Switch>
                <Route exact path="/" component={Home} /> 
                <Route path="/sobre" component={Sobre} />
                <Route exact path="/contato" component={Contato} />
                <Route path="*" component={Erro} />
           </Switch>    
        </BrowserRouter>
    )
}

export default Routes;




