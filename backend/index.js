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

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
app.get('/', (req, res) => {
        res.send(TODOS)
    })
    // read all todos

app.get('/todos', (req, res) => {
    res.send(TODOS)
})

// read explicit todo

app.get('/todos/:id', (req, res) => {
        const { id } = req.params;
        const todo = TODOS.find(todo => todo.id == id);

        if (todo) {
            res.json(todo);
        } else {
            res.status(404).end();
        }
    })
    //update explicit todo

app.put('/todos/:id', (req, res) => {
    const { id } = req.params;
    const todo = TODOS.find(todo => todo.id == id);
    if (todo) {
        // Update the todo item
        const { id, title, due, status } = req.body;
        if (title) {
            todo.title = title;
        }
        if (id) {
            todo.id = id;
        }
        if (status) {
            todo.status = status;
        }
        if (due) {
            todo.due = due;
        }
        res.send(todo);
    } else {
        // Todo item not found
        res.send('Todo item not found');
    }
});
app.post('/', (req, res) => {
    TODOS.push(req.express.json());
    res.send("Todo angelegt")
})
app.put('/', (req, res) => {
    let id = req.bodyParser.json().id
    TODOS.push(req.express.json());
    res.send("Todo angepasst")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})