function CollectionCard({
  name,
  img_url,
  manufacturer,
  car_id,
  user_id,
  onRemoveCar,
}) {
  function handleRemoveClick() {
    fetch(`http://localhost:9393/collectioncar/${user_id}/${car_id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        onRemoveCar(car_id);
      });
  }

  return (
    <div className="box card">
      <img
        className="carimage card-img-top"
        src={img_url}
        width="200"
        alt={name}
      />
      <div className="card-body">
        <p className="card-text">
          {manufacturer} {name}
        </p>
        <button className="removebutton" onClick={handleRemoveClick}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CollectionCard;
