
function Movie({image, title, year}){
    return(
        <>
        <div className="div1">
       <img src={image} className="m-img"/>
       <div className="m-body">
        <h4 className="m-title">{title}</h4>
        <h5 className="m-year">{year}</h5>
       </div>
       </div>
        </>
    )
}

export default Movie;