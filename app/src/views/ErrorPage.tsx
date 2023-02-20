import React from "react";
import { Image } from "react-bootstrap";
import { useRouteError } from "react-router-dom";
import Test from "../assets/images/05825-small.jpg";

/*****      PAGE ERROR     *****/
export default function ErrorPage() {
  const error: any = useRouteError();
  console.log(error);

  return (
    <div className="error-page">
      <h1>Erreur</h1>
      <p>
        <i>
          {error.statusText + " " + error.data ||
            error.message + " " + error.data}
        </i>
      </p>
      <Image src={Test} fluid roundedCircle />
    </div>
  );
}
