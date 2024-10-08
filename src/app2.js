import ReactDOM from 'react-dom/client'

import Heading from './components/Header.jsx'

import Body from './components/Body.jsx'

import About from './components/About.jsx'

import Error from './components/Error.jsx'

import RestaurantDetails from './components/RestaurantDetails.jsx'


import { createBrowserRouter , RouterProvider , Outlet } from 'react-router-dom'

const AppLayout = () => {

    return (
        <>

            <div className='app'>
                <Heading />
                <Outlet />

            </div>

        </>
    )
}


const appRouter = createBrowserRouter([
    {
        path:'/',
        element: <AppLayout/>,
        children : [
            {
                path:'/',
                element: <Body/>,
               
            },
            {
                path:'/about',
                element: <About/>,
               
            },
            {
                path:'/restaurant/:id',
                element: <RestaurantDetails/>,
               
            }
        ],
        errorElement : <Error/>
    },
    
])



let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />)