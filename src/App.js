import './reset.css';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import CheckAllRemaining from './components/CheckAllRemaining';
import TodoFilters from './components/TodoFilters';
import ClearCompletedBtn from './components/ClearCompletedBtn';

function App() {
  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>

        {/* TodoForm */}
        <TodoForm/>

        {/* TodoList */}
        <TodoList/>

        {/* CheckAllRemaining */}
        <CheckAllRemaining/>

        <div className="other-buttons-container">
          {/* TodoFilters */}
          <TodoFilters/>

          {/* ClearCompletedBtn */}
          <ClearCompletedBtn/>
         
        </div>
      </div>
    </div>
  );
}

export default App;
