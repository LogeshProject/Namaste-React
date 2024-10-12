
import { useRouteError } from "react-router-dom";


// Error


const Error = () =>{

    const error = useRouteError()

    console.log(error)

    return(
        <>

        <h4>{error.status} : {error.statusText}</h4>
        

        <h3>Oops ! Something Went Wrong</h3>
        
        </>
    )
}


export default Error ;