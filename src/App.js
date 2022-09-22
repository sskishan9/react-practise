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
import StyleSheet from './components/StyleSheet';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import ParentComp from './components/ParentComp';
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
      <StyleSheet/>
      <Form/>
      <LifeCycleA/>
      <FragmentDemo/>
      <Table/>
      <ParentComp/>
    </div>
  );
}

export default App;
