export default function Gallery(props){
    return(
        <div>
        {
            props.imageData.map((image)=>(
                <div key={image.id} className="column">
                    <img src={image.img} alt=""></img>
                </div>
            ))
        }
        </div>
    )
}