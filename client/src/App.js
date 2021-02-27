import logo from './logo.svg';
// import './App.css';
import {Router} from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import Create from './views/Create';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* <h1>Favorite Authors</h1> */}
      <Router>
        <Main path="/" />
        <Create path="/new" />
        <Update path="/:id/edit" />
        <Detail path="/:id" />
      </Router>
    </div>
  );
}

export default App;
