import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditAnkiDeck() {
    let navigate = useNavigate();

    const { id } = useParams();

    const [deck, setDeck] = useState({
        arabic: "",
        english: "",
    });

    const { arabic, english } = deck;

    const onInputChange = (e) => {
        setDeck({ ...deck, [e.target.arabic]: e.target.value });
    };

    useEffect(() => {
        loadAnkiDeck();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/ankiDeck/${id}`, deck);
        navigate("/");
    };

    const loadAnkiDeck = async () => {
        const result = await axios.get(`http://localhost:8080/ankiDeck/${id}`);
        setDeck(result.data);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Edit Anki Deck</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Arabic" className="form-label">
                                Arabic
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter Arabic"
                                arabic="arabic"
                                value={arabic}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="English" className="form-label">
                                English
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter English"
                                english="english"
                                value={english}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-primary">
                            Submit
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}