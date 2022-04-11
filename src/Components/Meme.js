import React from "react";
import memesData from "../memesData"

function Meme() {

    const [memeImage, setMemeImage] = React.useState("");

    function generateRandomMeme() {
        const memesList = memesData.data.memes;
        let randomMeme = memesList[ Math.floor(Math.random() * memesList.length)].url
        setMemeImage((randomMeme))
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

            <img alt="meme" src={memeImage} className="meme--img"/>
        </section>
    )
}

export default Meme;