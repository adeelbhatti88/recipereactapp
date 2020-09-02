import React,{useEffect, useState} from 'react';
import Recipe from './Recipe';
import logo from './logo.svg';
import './App.css';

const App = () => {


  const APP_ID = 'ec7ac174';
  const APP_KEY = '87464bd0b98bc4a58a559a4ed894cde8';

  const [recipes, setRecipes] = useState([]); //every request from the API is stored in the const recipes

  //below is a query example from the api, after the q= is the thing you are searching for. you can delete everything after the & key.

  const[search, setSearch] = useState('');

  const[query, setQuery] = useState('chicken');
  


  useEffect(() =>{
    getRecipes();
    
    
  }, [query]);

  const getRecipes = async () => {

    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);

    

  }


  //everytime user clicks in search box, this function will run, it is connected to onchange
  const updateSearch = e => {

    setSearch(e.target.value);
    console.log(search);

  }

  const getSearch = e => {
    e.preventDefault(); //prevents the page from refreshing
    setQuery(search);
    setSearch('');
  }

  return(

    
    <div className = 'App'>
    <form onSubmit = {getSearch} className='search-form'>
    <input className='search-bar' type='text' value={search} onChange={updateSearch}/>
    <button  className ='search-Button' type='Submit'>Search</button>
    </form>
    <div className = 'Recipe'>
    {recipes.map(recipe =>(
      //without the key, it will give you an error that says you need to have a unique key for each recipe.
      //that is why that is there
      <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories}
      image={recipe.recipe.image} ingredients = {recipe.recipe.ingredients} />
    ))}
      </div>
    </div>

  );
}

export default App;
