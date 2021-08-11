import { useEffect, useState } from "react";
import CollectionCard from "./CollectionCard";

function CollectionContainer({ user_id }) {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9393/collection/${user_id}`)
      .then((r) => r.json())
      .then(setCollection);
  }, []);

  console.log(collection);

  const CarsItem = collection.map((car) => (
    <CollectionCard
      key={car.id}
      name={car.name}
      car_id={car.id}
      img_url={car.img_url}
    />
  ));

  return (
    <div>
      Hello Collection Container!
      {CarsItem}
    </div>
  );
}

export default CollectionContainer;
