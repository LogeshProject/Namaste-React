import ReactDOM from 'react-dom/client'

import Heading from './components/Header.jsx'

import Body from './components/Body.jsx'



const AppLayout = () => {

    return (
        <>

            <div className='app'>
                <Heading />
                <Body />

            </div>

        </>
    )
}



let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />)