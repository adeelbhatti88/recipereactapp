import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {


  const APP_ID = 'ec7ac174';
  const APP_KEY = '87464bd0b98bc4a58a559a4ed894cde8';

  //below is a query example from the api, after the q= is the thing you are searching for. you can delete everything after the & key.
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`


  useEffect(() =>{
    getRecipes();
    
  }, []);

  const getRecipes = async () => {

    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    console.log(data);

    

  }

  return(

    
    <div className = 'App'>
    <form className='search-form'>
    <input className='search-bar' type='text'/>
    <button  className ='search-Button' type='Submit'>Search</button>
    </form>
    
    </div>

  );
}
//https://www.youtube.com/watch?v=U9T6YkEDkMo&list=WL&index=3&t=0s
export default App;
