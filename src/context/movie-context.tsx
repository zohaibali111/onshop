import React, { createContext, ReactNode, useReducer } from "react";
import { moviesData, MovieDataType } from "../assets/data";


interface MovieContextProps {
   children: ReactNode;
 }
 
 interface MovieState {
   Movies: MovieDataType[];
 }
 
 interface MovieAction {
   type: string;
   id: string;
 }



 const MovieReducer = (state: MovieState, action: MovieAction): MovieState => {
   switch (action.type) {
     case "TOOGLE BOOKMARK":
       return {
         ...state,
         Movies: state.Movies.map((movie) => {
           if (movie.id === action.id) {
             return { ...movie, isBookmarked: !movie.isBookmarked };
           }
           return movie;
         }),
       };
     default:
       return state;
   }
 };
 

 const MoviesList: MovieDataType[] = moviesData;


 const initialMovieState: MovieState = { 
    Movies: MoviesList,
     
 }
 
// Use reduser hook
export const MovieContext =  createContext<{
   state: MovieState,
   dispatch: React.Dispatch<MovieAction> 
}>({
   state: initialMovieState,
   dispatch: () => {},
});


export const MovieProvider = ({ children }: MovieContextProps) => {
   const[state, dispatch] = useReducer(MovieReducer, initialMovieState);
   return (
     <MovieContext.Provider value={{state, dispatch}}>
      {children}
      </MovieContext.Provider>
   );
}