import Genre from "./Genre";
import hangover from "../assets/hangover.jpg"
import grownups from "../assets/grownups.jpg"
import theFaultInOurStar from "../assets/theFaultInOurStar.jpg"
import titanic from "../assets/titanic.jpeg"

function Container(){
    return (
        <>
        <h1> Movie App</h1>
        <section>
        <Genre 
        name= "Comedy"
        description="Comedy is a form of entertainment intended to amuse an audience."
        title1="The Hangover"
        title2="Grown Ups 2"
        year1="2009"
        year2="2013"
        image1={hangover}
        image2={grownups}
        ></Genre>
        </section>

        <section>
        <Genre
        name= "Romance"
        description="The romance genre is defined by two aspects that can be found in every romance book or novel: a central love story between characters. an emotionally satisfying, happy ending."
        title1="The Fault in Our Stars"
        title2="Titanic"
        year1="2014"
        year2="1997"
        image1={theFaultInOurStar}
        image2={titanic}
        ></Genre>
        </section>
        </>
    );
}

export default Container;