import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './Components/Sidebar/Navbar';
import Start from './Pages/Start';
import Dapp from './Pages/Dapp';
import Dashboard from './Pages/Dashboard';
import Donation from './Pages/Donation';
import Nft from './Pages/Nft';
import Team from './Pages/Team';
import Sidebar from './Components/Sidebar/Sidebar';
import Support from './Pages/Support';

function Main(){
    return(
        <div>
      <Router>
        <Sidebar />
        <Switch>
          <Route path='/' exact component={Start} />
          <Route path='/Dashboard' component={Dashboard} />
          <Route path='/Dapp' component={Dapp} />
          <Route path='/Donation' component={Donation}/>
          <Route path='/Nft' component={Nft}/>
          <Route path='/Team' component={Team}/>
          <Route path='/Support' component={Support}/>
          
        </Switch>
      </Router>
    </div>
    );
}

export default Main;