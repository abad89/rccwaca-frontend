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
    }).then((r) => r.json())
      .then(() => {
        onRemoveCar(car_id);
      });
  }

  return (
    <div className="box">
      <p>
        {manufacturer} {name}
      </p>
      <img className="carimage" src={img_url} width="200" alt={name} />
      <button className="removebutton" onClick={handleRemoveClick}>
        Remove
      </button>
    </div>
  );
}

export default CollectionCard;
