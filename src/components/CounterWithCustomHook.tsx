import CounterButton from "./CounterButton.tsx";
import {userCounter} from "../hooks/userCounter.tsx";


const CounterWithCustomHook = () => {

    //Custom hook function

    const {count, increase, decrease, reset} = userCounter()

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
            {/*<p className="text-center pt-8">Last change: <strong>{state.lastAction || "-"} at {state.time || "-"} </strong></p>*/}
        </>
    )
}

export default CounterWithCustomHook