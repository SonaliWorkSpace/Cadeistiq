// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom";
// import { ClerkProvider } from "@clerk/clerk-react";
// import App from "./App";

// const clerkPubKey = "pk_test_bWFpbi1zYWlsZmlzaC00NC5jbGVyay5hY2NvdW50cy5kZXYk"; // Replace with your actual key

// ReactDOM.render(
//   <ClerkProvider publishableKey={clerkPubKey}>
//     <App />
//   </ClerkProvider>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom/client";  // Use 'react-dom/client' in React 18
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
