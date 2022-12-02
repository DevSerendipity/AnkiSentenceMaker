import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddAnkiDeck() {
    let navigate = useNavigate();

    const [deck, setDeck] = useState({
        arabic: "",
        english: "",
    });

    const { arabic, english } = deck;

    const onInputChange = (e) => {
        setDeck({ ...deck, [e.target.arabic]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/ankiDeck", deck);
        navigate("/");
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Add Anki Deck</h2>

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
                                name="english"
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