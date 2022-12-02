import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewAnkiDeck() {
    const [deck, setAnkiDeck] = useState({
        arabic: "",
        english: "",
    });

    const { id } = useParams();

    useEffect(() => {
        loadAnkiDeck();
    }, []);

    const loadAnkiDeck = async () => {
        const result = await axios.get(`http://localhost:8080/ankiDeck/${id}`);
        setAnkiDeck(result.data);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Anki Deck Details</h2>

                    <div className="card">
                        <div className="card-header">
                            Details of anki deck id : {deck.id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Arabic:</b>
                                    {deck.arabic}
                                </li>
                                <li className="list-group-item">
                                    <b>English:</b>
                                    {deck.english}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/"}>
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}