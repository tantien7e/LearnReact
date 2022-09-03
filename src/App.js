
import './App.css';
import React from 'react';

function getTitle(title){
  return <h1>Hello {title}</h1>;
}
function Title(){
  return getTitle("Linh");
}

const App = () => {
  const handleChange = event => {
    console.log(event.target.value);
  };
  const cars =[
    {
      name: "audi",
      objectID: 1,
      url: 'https://www.audi.vn/sea/web/vnvi.html'
    },
    {
      name: "mercedes",
      objectID: 2,
      url: 'https://mercedesbenzvietnam.com.vn/mercedes-benz-viet-nam-long-bien/?gclid=CjwKCAjwpKyYBhB7EiwAU2Hn2X2a2hu-GEzPsILvnlX9sAGYNYU4sb5FGwqBV6kmUn0WjZx1sY5rJRoCKCkQAvD_BwE'
    }, 
    {
      name: "BMW",
      objectID: 3,
      url: 'https://www.bmw.vn/vi/index.html'
    }
  ];
  const content = "You're pretty!"
  return (
    <div id="wrapper">
      <button 
        onClick={() => console.log(Math.random())}
      >
        Click me!!!!
      </button> 
      {/* <Title />
      <Welcome text={content} />
      <Greeting content="Hello"/>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange}></input>
      <hr />
      */}
      <div id="wrapper">
        {cars.map(car => (
          <List 
            key={car.objectID}
            car={car}
          />
        ))}
      </div> 
      
    </div>
  )
};

const List = ({car}) => (
  <div>
    <button onClick={() => console.log(car.name)}>{car.name}</button>
  </div>
  
) 

const Welcome = props => <div>{props.text}</div>;
const Greeting = ({content}) => <p style={{color: 'red'}}>{content}</p>

 

export default App;
