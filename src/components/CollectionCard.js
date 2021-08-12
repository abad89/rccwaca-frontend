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
  // const trashcan = "🗑"
  return (
    <div className={"p-2 col-3"}>
      <div className="card h-100">
        <img src={img_url} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">
            {manufacturer} {name}
          </h5>
          <button className="btn btn-outline-danger" onClick={handleRemoveClick}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CollectionCard;
