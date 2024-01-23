import React from 'react';
function Counter(){
    console.log("before render")
    var [c,setC] = React.useState(0)
    var [d,setD] = React.useState(234)
    function inc(){
        setC(c+1)
    }
    function dec(){
        setC(c-1)
    }
    function incd(){
        setD(d+1)
    }
    function decd(){
        setD(d-1)
    }
    React.useEffect(()=>{console.log("useEffect with d dependecy")},[d])
    React.useEffect(()=>{console.log("useEffect with no dep array")})
    React.useEffect(()=>{console.log("useEffect with empty dep array")},[])
    React.useEffect(()=>{console.log("useEffect with c dependecy")},[c])
    return(
        <div className="mybox">
            {console.log("inside UI")}
            <h1>Counter:{c}</h1>
            <button onClick={inc}>Increment</button>
            <button onClick={dec}>Decrement</button>
            <h1>Counter2:{d}</h1>
            <button onClick={incd}>Increment</button>
            <button onClick={decd}>Decrement</button>
        </div>
    )
}
export default Counter;