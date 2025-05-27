import CounterButton from "./CounterButton.tsx";
//import {userCounter} from "../hooks/userCounter.tsx";
import {useCounterWithReducer} from "../hooks/useCounterWithReducer.tsx";

const CounterWithReducer = () => {

    //Custom hook function

    //const {count, increase, decrease, reset} = userCounter()

    const {count,lastAction,time,increase,decrease,reset} = useCounterWithReducer();

    return (
        <>
            <div className="space-y-4 pt-12">
                <h1 className="text-center">Count is {count}</h1>
                <div className="text-center space-x-4">
                    <CounterButton onClick={increase} label="Increase" addClass="bg-cf-blue" />
                    <CounterButton onClick={decrease} disabled={count === 0} label="Decrease" addClass="bg-cf-dark-gray" />
                    <CounterButton onClick={reset} disabled={count === 0} label="Reset" addClass="bg-cf-dark-red" />
                </div>
            </div>
            <p className="text-center pt-8">Last change: <strong>{lastAction || "-"} at {time || "-"} </strong></p>
        </>
    )
}

export default CounterWithReducer