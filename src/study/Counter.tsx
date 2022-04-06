import * as React from 'react';
import {useState, useEffect, useRef} from 'react';

// state type 선언
interface Istate {
    counter: number
}

export function Counter() {
    // useState로 관리해 줄 state 의 type 설정
    const [state, setState] = useState<Istate>({
        counter: 0,
    })

    const onIncrement = () => {
        setState({
            counter: state.counter+1
        })
    }

    const onDecrement = () => {
        setState({
            counter: state.counter-1
        })
    }

    useEffect(() => {
        console.log("now im mount");
        return () => console.log("now im unmount");
    }, []);
    useEffect(() => {
        console.log("now im update");
    });

    return(
        <>
            <div>
                <h2>카운터</h2>
                <div>
                    {state.counter}
                </div>
                <div>
                    <button onClick={onIncrement}>+</button>
                    <button onClick={onDecrement}>-</button>
                </div>
            </div>
        </>
    )
}
