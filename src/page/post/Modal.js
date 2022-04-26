import React from 'react';
import * as _ from "lodash";

export const Modal = (props) => {

    // const [testStatus, setTestStatus] = React.useState({
    //    "key1": 1,
    //    "key2": 2,
    // });

    // setTestStatus({...testStatus, "key2":3});
    // setTestStatus({...testStatus, "key3":3});

    // const arraryMap = [{"idx": 1}, {"idx":2 }];
    // _.map(arraryMap, (arrayValue, arrayIdx)=> {
    //     console.log(arrayValue, arrayIdx);
    //     // return idx;
    // })
    // const objectMap = {"key": "value", "key2": "value2", "key3": "value3"};
    // const convertArray = [];
    // _.map(objectMap, (arrayValue, arrayKey)=> {
    //     convertArray.push({
    //         [arrayKey]: arrayValue,
    //     });
    // })
    // const users = [
    //     { 'user': 'barney', 'age': 36, 'active': true },
    //     { 'user': 'fred',   'age': 40, 'active': false }
    // ];
    //
    // // The `_.matches` iteratee shorthand.
    // _.filter(users, { 'age': 36, 'active': true });
    // // => objects for ['barney']
    //
    // _.toLower()
    // _.toUpper("Hello")
    // const tmp = "Test".toUpperCase()
    // _.upperCase("Hello")

    // useState => this func used to update virtual dom
    const objectArray = [{key: "1", idx: 0}, {key2: "2", idx: 1}];
    // const, let => we dont need to "useState" func for avoiding constraction! just use "let"

    _.map(objectArray, (item, idx) => {
        const tmp =  idx === 0 ? {...item, key: "3"} : item;
        objectArray[idx] = tmp;
        // if (_.get(tmp, "key") ===3){
            // setState(tmp);
        // }
    })

    const { open, close, header, addNumber } = props;
    const popup = () => {
        return (
            <>
                <section>
                    <header>
                        {header}
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                    </header>
                    <main>{props.children}</main>
                    <footer>
                        <button className="close" onClick={addNumber}>
                            plusNumber
                        </button>
                        <button className="close" onClick={close}>
                            close
                        </button>
                    </footer>
                </section>
            </>
        );
    };
    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? popup() : null}
        </div>
    );
};
