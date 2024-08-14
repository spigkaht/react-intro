import CloudIcon from './assets/cloud-solid.svg';
import RockyIcon from './assets/gem-regular.svg';
import { v4 as uuid } from 'uuid';

function List({ items, color, buttonText, handleClick }) {
  const listColor = {
    color: color
  };

  return (
    <div>
      <ul>
        {items.map((item) => {
          if (item.type == "planet")
            return <li style={listColor} key={item.id}>{item.name}{item.name.startsWith("S") ? <img src={CloudIcon} alt="Gassy Planet" /> : <img src={RockyIcon} alt="Rocky Planet" />}</li>
          else
            return <li style={listColor} key={item.id}>{item.name}</li>
        })}
      </ul>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  )
};

const PlanetsNearby = () => {
  const planets = [
    { name: "Mars", type: "planet", id: uuid() },
    { name: "Venus", type: "planet", id: uuid() },
    { name: "Jupiter", type: "planet", id: uuid() },
    { name: "Saturn", type: "planet", id: uuid() }
  ];
  const stars = [
    { name: "Solaris", type: "star", id: uuid() },
    { name: "Aurora", type: "star", id: uuid() }
  ];
  const moons = [
    { name: "Moon", type: "moon", id: uuid() },
    { name: "Ganymede", type: "moon", id: uuid() }
  ];

  const handleButtonClick = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <div>
      <h3>Nearby planets to explore: </h3>
      <List items={planets} color="blue" buttonText="github" handleClick={handleButtonClick} />
      <h3>SUM MOENS: </h3>
      <List items={moons} color="blue" buttonText="wikipedia" handleClick={handleButtonClick} />
      <h3>Nearby stars to be aware of: </h3>
      <List items={stars} color="red" buttonText="google" handleClick={handleButtonClick} />
    </div>
  )
};

export { PlanetsNearby };
