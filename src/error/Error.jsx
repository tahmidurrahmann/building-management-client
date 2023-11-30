import { Button } from "@mui/material";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    return (
        <div className="flex justify-center items-center h-[100vh]">
            <div className="text-center my-5">
                <div className="flex justify-center items-center">
                <p className="text-5xl font-semibold">404</p>
                <div className="h-1 w-10 rounded bg-black"></div>
            <h1 className="text-2xl">This page could not be found.</h1>
                </div>
                <p className="text-xl my-5">
                    <i>{error.statusText || error.message}</i>
                </p>
                <Link to='/'><Button variant="contained" color="error">Home</Button></Link>
            </div>
        </div>
    );
};

export default Error;