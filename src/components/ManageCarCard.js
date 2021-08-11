function ManageCarCard({ name, img_url, car_id, price, manufacturer, onDeleteCar }) {
  function handleDeleteClick() {
    fetch(`http://localhost:9393/cars/${car_id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        onDeleteCar(car_id);
      });
  }

  function handleAddCarToCollectionClick() {
    console.log("Added car to your collection!")
  }

  return (
    <div>
      <p>Manufacturer: {manufacturer}</p>
      <p>Name: {name}</p>
      <p>Price: {price}</p>
      <img src={img_url} width="100" alt={name}/>
      <p>
        Image URL: <a href={img_url}>{img_url}</a>
      </p>
      <button onClick={handleAddCarToCollectionClick}>Add to your Collection</button>
      <button onClick={handleDeleteClick}>Delete from DB!</button>
    </div>
  );
}

export default ManageCarCard;
