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
let id = 0;
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
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.get('/', (req, res) => {
    res.send(TODOS);
})
app.get('/:id', (req, res) => {
    const id = req.params.id;
    const todo = TODOS.find(todo => todo.id == todo);
    res.send(todo);
})
app.post('/', (req, res) => {
    const todo = req.body;
    todo = { id: this.id++ }
    TODOS.push(todo);
    console.log(TODOS)
    res.send("Todo angelegt");
})
app.put('/:id', (req, res) => {
    const id = req.params.id;
    const { title, due, status } = req.body;
    const todo = TODOS.find(todo => todo.id == todo);
    if (todo) {
        todo.title = title;
        todo.due = due;
        todo.status = status;
    }
    res.send("Todo angepasst");
})
app.delete('/:id', (req, res) => {
    const id = req.params.id;
    const index = TODOS.findIndex(todo => todo.id === id);
    TODOS = TODOS.splice(index, 1);
    res.send("Todo geloescht");
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
