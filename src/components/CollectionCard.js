function CollectionCard({ name, img_url, manufacturer }) {
    return (
        <div>
           <p>{manufacturer} {name}</p>
           <img src={img_url} width="200" alt={name}/>
        </div>
    )
}

export default CollectionCard;