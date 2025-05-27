// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
import Layout from "./components/Layout.tsx";
//import CounterAdvanced from "./components/CounterAdvanced.tsx";
//import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
import CounterWithReducer from "./components/CounterWithReducer.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
//import Counter from "./components/Counter.tsx";
//import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
//import NameChanger from "./components/NameChanger.tsx";


function App() {

    return (
        <>
            <Layout>
                {/*<ClassComponent/>*/}
                {/*<FunctionalComponent/>*/}
                {/*<ArrowFunctionalComponent/>*/}
                {/*<ArrowFunctionalComponentWithProps title="Is a Arrow Functional Component with Props!"/>*/}
                {/*<ArrowFunctionalComponentWithPropsType*/}
                {/*  title="Is a Arrow Functional Component with Props!"*/}
                {/*  description="this is a description"*/}
                {/*/>*/}

                {/*<ClassComponentWithState/>*/}
               {/*<Counter/>*/}
               {/* <NameChanger/>*/}
               {/* <CounterWithMoreStates/>*/}
               {/* <CounterAdvanced/>*/}
               {/* <CounterWithCustomHook/>*/}
                <CounterWithReducer/>
            </Layout>
        </>
    )
}

export default App