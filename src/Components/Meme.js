import React from "react";
import memesData from "../memesData"

function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function generateRandomMeme() {
        let randomMeme = allMemeImages.data.memes[Math.floor(Math.random() * allMemeImages.data.memes.length)]
        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImage: randomMeme.url
        }))
    }

    return (
        <section className="meme--section">
            <div className="meme--form">
                <input type="text" placeholder="Top text" />
                <input type="text" placeholder="Bottom text"/>
                <button onClick={generateRandomMeme}>
                    Generate new meme 🖼️
                </button>
            </div>

            <div className="meme">
                <img alt="meme" src={meme.randomImage} className="meme--img"/>
                <h2 className="meme--text top">Nobody Above</h2>
                <h2 className="meme--text bottom">Breakfast</h2>
            </div>
        </section>
    )
}

export default Meme;