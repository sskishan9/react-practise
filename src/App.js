import logo from './logo.svg';
import './App.css';
import React from 'react';
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
import RefDemo from './components/RefDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import AxiosGet from './components/AxiosGet';
import AxiosPost from './components/AxiosPost';
import HookCounter from './components/Hooks/HookCounter';
import HookCounter2 from './components/Hooks/HookCounter2';
import HookCounter3 from './components/Hooks/HookCounter3';
import HookCounter4 from './components/Hooks/HookCounter4';
import EffectHook1 from './components/Hooks/EffectHook1';
import HookMouse from './components/Hooks/HookMouse';
import MouseContainer from './components/Hooks/MouseContainer';
import DataFetching from './components/Hooks/DataFetching';
import ComponentC from './components/Hooks/ComponentC';
import CounterOne from './components/Hooks/CounterOne';
import CounterTwo from './components/Hooks/CounterTwo';
import CounterUseReducer from './components/Hooks/UseReducer/Counter';
import UseReducerCounter2 from './components/Hooks/UseReducer/UseReducerCounter2';
export const userContext=React.createContext()
export const channelContext=React.createContext()
function App() {
  return (
    <div className="App">
      {/* <Name name="Sameer" heroName="virat"/>
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
      <RefDemo/>
      <FocusInput/>
      <FRParentInput/>
      <ClickCounter/>
      <HoverCounter/> */}
      {/* <AxiosGet/>
      <AxiosPost/> */}
      {/* <HookCounter/>
      <HookCounter2/>
      <HookCounter3/>
      <HookCounter4/> */}
      {/* <EffectHook1/>
      <MouseContainer/> */}
      {/* <DataFetching/> */}
      {/* <userContext.Provider value={'Sameer'} >
        <channelContext.Provider value={'Codevalution'}>
           <ComponentC/>
        </channelContext.Provider>
      </userContext.Provider>
       */}
       {/* <CounterOne/>
       <CounterTwo/> */}
       <CounterUseReducer/>
       <UseReducerCounter2/>
    </div>
  );
}

export default App;
