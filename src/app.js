
import React from 'react'
import ReactDOM from 'react-dom'

const parent = React.createElement('h1', { id: 'heading1' }, 'Hello React...');   // React obj => html 

// jsx = (transpiled ) => parcel  - Babel 
const jsxParent = <h1 className='Heading'>Hello React from Jsx</h1>                                    // jsx => React obj => html 


let number = 100 ;

const Component = () =>(
    <>
        
        <h1>Hello React from Component </h1>
    </>
)



const Component2 = () => (
    <>
        {Component()}
        <Component/>
        {number}
        <h1>Hello React from Component2 </h1>
    </>
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Component2/>);

