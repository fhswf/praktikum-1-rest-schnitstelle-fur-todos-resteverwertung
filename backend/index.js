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
let TODOS = [
    {
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

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "PUT,PATCH,DELETE");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    
    );
    next();
  });
app.get('/', (req, res) => {
    res.send(TODOS);
})

app.post('/', (req, res) => {
    TODOS.push(req.express.json());
    res.send("Todo angelegt");
})
app.put('/', (req, res) => {
    let id = req.bodyParser.json().id;
    TODOS.push(req.express.json());
    res.send("Todo angepasst");
})

app.delete('/', (req, res) =>{
    console.log(req);
    let idToDel = req.express.json().id
    index = indexOf(TODOS.find(({ id }) => id === idToDel));    
    TODOS.array.splice(index, 1);
    console.log(TODOS);
    res.send("Todo geloescht");
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
