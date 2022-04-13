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

    function handleInput(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ((
            {
                ...prevMeme,
                [name]: value
            }
        )))
    }

    return (
        <section className="meme--section">
            <div className="meme--form">
                <input 
                    type="text" 
                    placeholder="Top text" 
                    name="topText"
                    onChange={handleInput}
                    value={meme.topText}
                />
                <input 
                    type="text" 
                    placeholder="Bottom text"
                    name="bottomText"
                    onChange={handleInput}
                    value={meme.bottomText}
                />
                <button onClick={generateRandomMeme}>
                    Generate new meme 🖼️
                </button>
            </div>

            <div className="meme">
                <img alt="meme" src={meme.randomImage} className="meme--img"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </section>
    )
}

export default Meme;