import { useEffect, useState } from "react";
import CollectionCard from "./CollectionCard";

function CollectionContainer({ user }) {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9393/collection/${user.id}`)
      .then((r) => r.json())
      .then(setCollection);
  }, []);

  console.log(collection);

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
      {user.name}'s Collection:
      {CarsItem}
    </div>
  );
}

export default CollectionContainer;
