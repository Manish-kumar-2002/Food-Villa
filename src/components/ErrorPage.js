import { useRouteError, Link } from "react-router-dom"


const ErrorPage = () => {
    const err = useRouteError()
    return (
        <div className="h-screen flex justify-center items-center flex-col">
            <h1 className="text-3xl font-bold text-center mb-4">Oops!!</h1>
            <p className="text-lg text-center mb-4">Something went Wrong!!</p>
            <p className="mb-4">{err.status + " : " + err.statusText}</p>
            <Link to="/" className="text-center block text-blue-500">Back to home 😊</Link>
        </div>
    )
}

export default ErrorPage