import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CollectionCard from "./CollectionCard";

function CollectionContainer({ user }) {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9393/collection/${user.id}`)
      .then((r) => r.json())
      .then(setCollection);
  }, []);

  // console.log(collection);

  function handleLogOutClick() {
    window.location.reload();
    console.log("Logged out!");
  }

  const CarsItem = collection.map((car) => (
    <CollectionCard
      key={car.id}
      manufacturer={car.manufacturer}
      price={car.price}
      name={car.name}
      car_id={car.id}
      img_url={car.img_url}
    />
  ));

  return (
    <div>
      <p>
        <Link
          to={{
            pathname: "/manage",
            state: {
              user: user,
            },
          }}
        >
          Car Database
        </Link>
      </p>
      {user.name}'s Collection:
      {CarsItem}
      <p>
        <button onClick={handleLogOutClick}>Log Out</button>
      </p>
    </div>
  );
}

export default CollectionContainer;
