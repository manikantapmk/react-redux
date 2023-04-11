
import './App.css';
import { Provider} from 'react-redux'
import store from './store/store';
import Counter from './components/Counter';
import Todo from './components/Todo';
import Contries from './components/Contries';
import Score from './components/Score';

function App() {
  return (
    <Provider store={store}>
       <div>
         <h1>welcome to Redux</h1>
         <Counter/>
         <h1>Todo List</h1>
         <Todo/>
         <Score/>
         <h1>Countries List</h1>
        {/* <Contries/> */}
      </div>
    </Provider>
  );
}

export default App;
