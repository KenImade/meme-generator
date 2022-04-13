import React from "react";


function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemes, setAllMemes] = React.useState({})

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(data => setAllMemes(data))
    }, [])

    function generateRandomMeme() {
        let randomMeme = allMemes.data.memes[Math.floor(Math.random() * allMemes.data.memes.length)]
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