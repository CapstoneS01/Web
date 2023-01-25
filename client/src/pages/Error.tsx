import React from "react";
import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex h-screen">
      <div className="m-auto text-center">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <a href="/" className="underline">
            Go back to the home page
          </a>
        </p>
      </div>
    </div>
  );
}

export default Error;
