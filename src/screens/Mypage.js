import React from 'react';
import HeaderScreen from '../layout/HeaderScreen';
import FooterScreen from '../layout/FooterScreen';

const getNumber = (number) => {
    console.log("숫자가 변동되었습니다.");
    return number;
};

const getText = (text) => {
    console.log("글자가 변동되었습니다.");
    return text;
};

const ShowState = ({ number, text }) => {
    const showNumber = getNumber(number);
    const showText = getText(text);
    // const showNumber = React.useMemo(() => getNumber(number), [number]);
    // const showText = React.useMemo(() => getText(text), [text]);

    return (
        <div className="info-wrapper">
            {showNumber} <br />
            {showText}
        </div>
    );
};


const Mypage = () => {
    const [number, setNumber] = React.useState(0);
    const [text, setText] = React.useState("");

    const increaseNumber = () => {
        setNumber((prevState) => prevState + 1);
    };

    const decreaseNumber = () => {
        setNumber((prevState) => prevState - 1);
    };

    const onChangeTextHandler = (e) => {
        setText(e.target.value);
    };
    return (
        <div>
            <HeaderScreen className="header" />
            <div>
                <button onClick={increaseNumber}>+</button>
                <button onClick={decreaseNumber}>-</button>
                <input
                    type="text"
                    placeholder="Text..."
                    onChange={onChangeTextHandler}
                />
            </div>
            <ShowState number={number} text={text} />
            <FooterScreen className="footer" />
        </div>
    );
};

export default Mypage;
