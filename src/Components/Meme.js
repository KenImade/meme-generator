function Meme() {
    return (
        <section>
            <form className="meme--form">
                <input type="text" placeholder="Top text" />
                <input type="text" placeholder="Bottom text"/>
                <button>
                    Generate new meme 🖼️
                </button>
            </form>
        </section>
    )
}

export default Meme;