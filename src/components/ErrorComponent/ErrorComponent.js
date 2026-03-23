import { useRouteError, isRouteErrorResponse } from "react-router-dom";
const ErrorComponent = () => {
  const error = useRouteError(); // error can be of type unknown

  // Use type narrowing to handle different error types
  if (isRouteErrorResponse(error)) {
    // Handles thrown Responses (e.g., status 404, 401)
    return (
      <div>
        <h1>Oops! {error.status}</h1>
        <p>{error.statusText}</p>
        {error.data?.message && <p>{error.data.message}</p>}
      </div>
    );
  } else if (error instanceof Error) {
    // Handles standard JavaScript Errors (e.g., runtime errors)
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
      </div>
    );
  } else {
    // Fallback for unknown errors
    return <h1>An unknown error occurred</h1>;
  }
};

export default ErrorComponent;
