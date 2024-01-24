import React from 'react'

function Firstname() {
    var [fn,setFn]= React.useState('');
    
    return (
        <div className='mybox'>
            <input type="text" onKeyUp={(e)=>{setFn(e.target.value)}}/>
            <h1 id='dd'>{fn}</h1>
        </div>
    )
}

export default Firstname