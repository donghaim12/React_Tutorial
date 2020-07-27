import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import AppShell from './Appshell'
import Home from './Home';
import Texts from './Text';
import Words from './Words';
class App extends React.Component {
    render() {
        return (
            <Router>
                <AppShell>
                    <div>
                        <Route exact path = "/" component = {Home}/>
                        <Route exact path = "/texts" component = {Texts}/>
                        <Route exact path = "/words" component = {Words}/>
                    </div>
                </AppShell>
            </Router>
        );
    }
}
export default App;