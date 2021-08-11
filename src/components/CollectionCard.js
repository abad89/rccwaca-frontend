function CollectionCard({ name, img_url, car_id }) {
    return (
        <div>
           {name}
           <br/>
           <img src={img_url} width="200"/>
        </div>
    )
}

export default CollectionCard;