import React from 'react';
import HeaderScreen from '../layout/HeaderScreen';
import FooterScreen from '../layout/FooterScreen';

// const Light =  React.memo(({ room, on, toggle }) => {
//     console.log({ room, on });
//     return (
//         <div>
//             <button onClick={toggle}>
//                 {room}
//                 {on ? "💡" : "⬛"}
//             </button>
//         </div>
//     );
// });

const Light = ({ room, on, toggle }) => {
    console.log({ room, on });
    return (
        <div>
            <button onClick={toggle}>
                {room}
                {on ? "💡" : "⬛"}
            </button>
        </div>
    );
}

const SmartHome = () => {
    const [masterOn, setMasterOn] = React.useState(false);
    const [kitchenOn, setKitchenOn] = React.useState(false);
    const [bathOn, setBathOn] = React.useState(false);

    const toggleMaster = () => {
        setMasterOn(!masterOn);
    };
    const toggleKitchen = () => {
        setKitchenOn(!kitchenOn);
    };
    const toggleBath = () => {
        setBathOn(!bathOn);
    };
    // const toggleMaster = React.useCallback(() => {
    //     setMasterOn(!masterOn);
    // }, [masterOn]);
    // const toggleKitchen = React.useCallback(() => {
    //     setKitchenOn(!kitchenOn);
    // }, [kitchenOn]);
    // const toggleBath = React.useCallback(() => {
    //     setBathOn(!bathOn);
    // }, [bathOn]);

    return (
        <div>
            <Light room="침실" on={masterOn} toggle={toggleMaster} />
            <Light room="주방" on={kitchenOn} toggle={toggleKitchen} />
            <Light room="욕실" on={bathOn} toggle={toggleBath} />
        </div>
    );
}

// const Light = React.memo(({ room, on }) => {
//     console.log({ room, on });
//     return <div>{on ? "💡" : "⬛"}</div>;
// });
//
// const SmartHome = () => {
//     const [masterOn, setMasterOn] = React.useState(false);
//     const [kitchenOn, setKitchenOn] = React.useState(false);
//     const [bathOn, setBathOn] = React.useState(false);
//
//     const toggleMaster = () => {
//         setMasterOn(!masterOn);
//     };
//     const toggleKitchen = () => {
//         setKitchenOn(!kitchenOn);
//     };
//     const toggleBath = () => {
//         setBathOn(!bathOn);
//     };
//
//     return (
//         <div>
//             <button onClick={toggleMaster}>
//                 침실
//                 <Light room="침실" on={masterOn} />
//             </button>
//             <button onClick={toggleKitchen}>
//                 주방
//                 <Light room="주방" on={kitchenOn} />
//             </button>
//             <button onClick={toggleBath}>
//                 욕조
//                 <Light room="욕조" on={bathOn} />
//             </button>
//         </div>
//     );
// }

const Search = () => {
    return (
        <div>
            <HeaderScreen className="header" />
            <div style={{ position: "absolute", top: "50%", left: "50%" }}>
                <SmartHome />
            </div>
            <FooterScreen className="footer" />
        </div>
    );
};

export default Search;
