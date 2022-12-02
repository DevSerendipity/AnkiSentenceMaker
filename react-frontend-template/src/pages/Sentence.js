import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddAnkiDeck() {
    let navigate = useNavigate();

    const [decks, setDecks] = useState([]);

    const [formData, setFormData] = useState({
        favColor: ""
    })

    const onInputChange = (e) => {
        setFormData(currentFormData => ({ ...currentFormData, [e.target.name]: e.target.value }));
    };

        const deckList = decks.map((deck,index) =>
            <div key={deck.id}>
                <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter English"
                    value={"I am " + formData.favColor}
                    onChange={(e) => onInputChange(e)}
                />
                <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter Arabic"
                    value={"أَنَا " + formData.favColor} // deck.arabic
                    onChange={(e) => onInputChange(e)}
                />
            </div>
        )

    useEffect(() => {
        loadDecks();
    }, []);

    const loadDecks = async () => {
        const result = await axios.get("http://localhost:8080/ankiDecks");
        setDecks(result.data);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/ankiDeck", decks);
        navigate("/");
    };

    return(
        <div>sentence</div>
    );
}