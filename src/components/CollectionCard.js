function CollectionCard({ name, img_url, manufacturer }) {
    return (
        <div className="box">
           <p>{manufacturer} {name}</p>
           <img className="carimage" src={img_url} width="200" alt={name}/>
           <button className="removebutton">Remove</button>
        </div>
    )
}

export default CollectionCard;