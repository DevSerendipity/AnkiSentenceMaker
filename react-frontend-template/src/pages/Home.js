import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import JsPDF from 'jspdf';
import '../assets/fonts/NotoNaskhArabic-Regular-normal.js'
import autoTable from 'jspdf-autotable'


export default function Home() {
    const [decks, setDecks] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        loadDecks();
    }, []);


    const generatePDF = () => {
        const report = new JsPDF('portrait', 'pt', 'a4');
        const font = report.callAddFont()
        this.addFileToVFS('NotoNaskhArabic-Regular-normal.ttf', font);
        this.addFont('NotoNaskhArabic-Regular-normal.ttf', 'NotoNaskhArabic-Regular', 'normal');
        report.setFont('NotoNaskhArabic-Regular');
        report.html(document.querySelector('#report')).then(() => {
            report.save('report.pdf');
        });
    }

    const generatePDFM = () => {

        const report = new JsPDF('portrait', 'pt', 'a4');
        report.setFont("NotoNaskhArabic-Regular.ttf");
        report.html(document.querySelector('#report')).then(() => {
            report.save('report.pdf');
        });
    }
    const generatePDFN = () => {

        const report = new JsPDF('portrait', 'pt', 'a4');
        report.setFont("NotoNaskhArabic-Regular-normal.js");        
        report.html(document.querySelector('#report')).then(() => {
            report.save('report.pdf');
        });
    }
    const generatePDFB = () => {

        const report = new JsPDF('portrait', 'pt', 'a4');
        report.setFont("NotoNaskhArabic-Regular-normal.js")
        report.html(document.querySelector('#report')).then(() => {
            report.save('report.pdf');
        });
    }
        const loadDecks = async () => {
            const result = await axios.get("http://localhost:8080/ankiDecks");
            setDecks(result.data);
        };

        const deleteUser = async (id) => {
            await axios.delete(`http://localhost:8080/ankiDeck/${id}`);
            loadDecks();
        };

        return (
            <div id="report" className="container">
                <div className="py-4">
                    <table className="table border shadow">
                        <thead>
                            <tr>
                                <th scope="col">S.N</th>
                                <th scope="col">Arabic</th>
                                <th scope="col">English</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {decks.map((deck, index) => (
                                <tr>
                                    <th scope="row" key={index}>
                                        {index + 1}
                                    </th>
                                    <td>أَنَا {deck.arabic}</td>
                                    <td>I am {deck.english}</td>
                                    <td>
                                        <Link
                                            className="btn btn-primary mx-2"
                                            to={`/viewDeck/${deck.id}`}
                                        >
                                            View
                                        </Link>
                                        <Link
                                            className="btn btn-outline-primary mx-2"
                                            to={`/editDeck/${deck.id}`}
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            className="btn btn-danger mx-2"
                                            onClick={() => deleteUser(deck.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button onClick={generatePDF} type="button">Export PDF</button>
                    <button onClick={generatePDFM} type="button">Export PDFM</button>
                    <button onClick={generatePDFN} type="button">Export PDFN</button>
                    <button onClick={generatePDFB} type="button">Export PDFB</button>
                </div>
            </div>
        );
}