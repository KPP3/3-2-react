import Movie from "./Movie";

function Genre ({name, description, title1, title2, year1, year2, image1, image2}){
    return (
        <>
        <h2>{name}</h2>
        <p>{description}</p>
       <div className="div2"><Movie
        image={image1}
        title={title1}
        year={year1}
        />
        <Movie
        image={image2}
        title={title2}
        year={year2}
        /></div>
        </>
    )
}
export default Genre;