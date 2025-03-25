import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        axios.get("http://127.0.0.1:5000/api/character")
            .then(response => setCharacter(response.data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <h1>RPG Game</h1>
            {character ? (
                <div>
                    <h2>{character.name}</h2>
                    <p>Level: {character.level}</p>
                    <p>HP: {character.hp}</p>
                    <p>XP: {character.xp}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default App;
