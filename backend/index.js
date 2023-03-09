const express = require('express');
/** Zentrales Objekt für unsere Express-Applikation */
const app = express();
const port = 3000;
/** bodyParser einbinden um req als json zu lesen */
//var bodyParser = require('body-parser');
/**
 * Liste aller ToDos. 
 * Wird später durch Datenbank ersetzt!
 */

app.use(express.json());

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


// read all todos


app.get('/todos', (req, res) => {
    res.json(TODOS);
})

// read explicit todo

app.get('/todos/:id', (req, res) => {
        const { id } = req.params;
        const todo = TODOS.find(todo => todo.id == id);

        if (todo) {
            res.status(200).json(todo);
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
        res.status(200).send(todo);
    } else {
        // Todo item not found
        res.send('Todo item not found');
    }
});

app.listen(port, () => {
    console.log(`port listening on port ${port}`)
})