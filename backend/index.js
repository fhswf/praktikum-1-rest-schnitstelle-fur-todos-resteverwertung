import express from 'express';


/** Zentrales Objekt für unsere Express-Applikation */
const app = express();
const port = 3000;
/** bodyParser einbinden um req als json zu lesen */
//var bodyParser = require('body-parser');
/**
 * Liste aller ToDos. 
 * Wird später durch Datenbank ersetzt!
 */
let TODOS = [{
        "id": 1671056616571,
        "title": "Übung 4 machen",
        "due": "2022-11-12T00:00:00.000Z",
        "status": 0
    },
    {
        "id": 1671087245763,
        "title": "Für die Klausur Webentwicklung lernen",
        "due": "2023-01-14T00:00:00.000Z",
        "status": 2
    },
];

// Your code here