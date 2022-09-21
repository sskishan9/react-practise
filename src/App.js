import logo from './logo.svg';
import './App.css';
import {Name} from './components/Name';
import Welcome from './components/Welcome';
import StateExample from './components/StateExample';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import List from './components/List';
function App() {
  return (
    <div className="App">
      <Name name="Sameer" heroName="virat"/>
      <Name name="Kishan" heroName="Kohli"/>
      <Welcome name="Sameer" heroName="virat"/>
      <StateExample/>
      <Counter/>
      <FunctionClick/>
      <ClassClick/>
      <EventBind/>
      <ParentComponent/>
      <UserGreeting/>
      <List/>
    </div>
  );
}

export default App;
