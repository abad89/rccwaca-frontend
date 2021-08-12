function ManageCarCard({ name, img_url, car_id, price, manufacturer, user_id, onDeleteCar, onAddCarToCollection }) {
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
    fetch(`http://localhost:9393/collectioncar/${user_id}/${car_id}`, {
    method: "POST",
  })
    .then((r) => r.json())
    // .then(() => {
    //   onAddCarToCollection(car_id);
    // })
    // console.log("Added car to your collection!")
  }

  return (
    <div className="p-3 col-3">
      <div className="card h-75 w-75">
        <img src={img_url} class={"mh-75 mw-75"} alt={name}/>
        <p class={"fs-6"}>Manufacturer: {manufacturer}</p>
        <p class={"fs-6"}>Name: {name}</p>
        <p class={"fs-6"}>Price: {price}</p>
        <p  class={"fs-6"}>
          Image URL: <a href={img_url}>{img_url}</a>
        </p>
        <button class={"btn btn-primary"} onClick={handleAddCarToCollectionClick}>Add to your Collection</button>
        <button class={"btn btn-danger"} onClick={handleDeleteClick}>Delete from DB!</button>
      </div>
    </div>
  );
}

export default ManageCarCard;
