import { useRouteError, Link } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err)

  return (
    <div>
        <h1>OOoops something went wrong</h1>
        <h2>Your status code is {err.status}</h2>
        <h2>Your status name is {err.statusText}</h2>


        <Link to="/">
            <button>
                    Take me home
            </button>
        </Link>
    </div>
  )
}
;

export default Error;