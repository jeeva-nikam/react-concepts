import { useRouteError } from "react-router";

const Error = () =>{
console.log("useRouteError", useRouteError());
const err = useRouteError();
    return (
        <div>
            <h1>Error !!</h1>
            <h2>Something went wrong !!</h2>
            <h5>{err.status}</h5>
            <h5>{err.statusText}</h5>
            
        </div>
    )
}

export default Error;