import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating} ){
  return<div>
    <h2>I like {name}**.</h2>
    <img src = {picture} alt = {name} width = "300px" height = "300px"/>
    <h4>{rating}/5.0</h4>
    </div> ;  
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number,
};

const Foodlike = [
  {id : 1, name : 'kimchi', rating : 5, image : 'https://www.englishspectrum.com/wp-content/uploads/2014/09/DSC_0734.jpg'},
  {id : 2, name : 'ramen', rating : 4.9, image : 'https://1.bp.blogspot.com/-R5uQo-tGPJA/VGUmdQ46L0I/AAAAAAAANTg/3GoTSQ8SLWE/s1600/515.jpg'},
  {id : 3, name : 'bibimbap', rating : 4.8, image : 'https://recipetineats.com/wp-content/uploads/2019/05/Bibimbap_5.jpg'},
  {id : 4, name : 'gopchang', rating : 4.7, image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Korean.food-Gobchang.bokkem-01.jpg/1200px-Korean.food-Gobchang.bokkem-01.jpg'},
];

function renderFood(dish){
  return <Food key = {dish.id} name = {dish.name} picture = {dish.image}/>;
}

function App() {
  return (
  <div>
    {Foodlike.map(dish=>(<Food key = {dish.id} name = {dish.name} picture= {dish.image} rating = {dish.rating}/>))}
    </div>);
}

export default App;