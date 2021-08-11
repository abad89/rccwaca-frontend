import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ManageCarCard from "./ManageCarCard";

function ManagePage() {
  const location = useLocation()
  const user = location.state.user
  const [formData, setFormData] = useState({
    name: "",
    manufacturer: "",
    price: "",
    img_url: "",
  });
  const [carsList, setCarsList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9393/cars")
      .then((r) => r.json())
      .then(setCarsList);
  }, []);
  console.log(carsList);

  function handleChange(e){
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e){
      e.preventDefault();
      const newCar = {
          name: formData.name,
          manufacturer: formData.manufacturer,
          price: parseInt(formData.price),
          img_url: formData.img_url
      };
      fetch("http://localhost:9393/cars", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(newCar),
      })
      .then((r) => r.json())
      console.log("You submitted!")
  }

  function handleDeleteCar(carToDelete) {
      const updatedCarsList = carsList.filter((car) => car.id !== carToDelete)
      setCarsList(updatedCarsList);
  }

  const CarsItem = carsList.map((car) => (
    <ManageCarCard
      key={car.id}
      manufacturer={car.manufacturer}
      name={car.name}
      car_id={car.id}
      img_url={car.img_url}
      price={car.price}
      onDeleteCar={handleDeleteCar}
      user_id={user.id}
    />
  ));

  return (
    <div>
      <h3>Add, edit, and remove cars from the database.</h3>
      <h4>Logged in as {user.name}</h4>
      <form onSubmit={handleSubmit}>
          <input placeholder="Manufactuer" name="manufacturer" value={formData.manufacturer} onChange={handleChange}></input>
          <input placeholder="Name" name="name" value={formData.name} onChange={handleChange}></input>
          <input placeholder="Price" name="price" value={formData.price} onChange={handleChange}></input>
          <input placeholder="Image Link" name="img_url" value={formData.img_url} onChange={handleChange}></input>
          <input type="submit" value="Add Car"></input>
      </form>
          <div>
              {CarsItem}
          </div>
      
      <NavLink to="/">Home</NavLink>
    </div>
  );
}

export default ManagePage;
