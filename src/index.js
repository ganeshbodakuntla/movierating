import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
// function Test() {
//   const [testRatings,settestRatings]=useState(0)
//   return <>
//     <div>
//       <StarRating maxRating={5} onsettestRatings={settestRatings} />
//       <p>here is rating {testRatings} rating</p>
//     </div>
//   </>
// }



root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} messages={["terrible","bad","okay","good","Amazing"] }  />
    <StarRating maxRating={5} className="text" size={24} color="red" defaultRating={3} /> */}
    {/* <Test /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
