// import {
//   createContext,
//   useContext,
//   useReducer,
//   useEffect,
//   useState,
// } from "react";
// import axios from "axios";

// const DataContext = createContext();

// const initialState = {
//   products: [],
//   purchased: [],
//   best: [],
//   loading: false,
// };

// const dataReducer = (state, action) => {
//   switch (action.type) {
//     case "SET_LOADING":
//       return { ...state, loading: action.payload };
//     case "SET_DATA":
//       return { ...state, [action.key]: action.payload, loading: false };
//     default:
//       return state;
//   }
// };