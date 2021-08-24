const express  = require('express');
const app = express();
app.use(express.json())

const port = 8080;
const todos = {
    items:[
        {
            id: 1,
            "text": "Learn about Polymer",
            "created_at": "Mon Apr 26 06:01:55 +0000 2015",
            "Tags": [
                "Web Development",
                "Web Components"
            ],
            "is_complete" : true
        },
        {
            "id" : 2,
            "text" : "Watch Pluralsight course on Docker",
            "created_at" : "Tue Mar 02 07:01:55 +0000 2015",
            "Tags": [
                "Devops",
                "Docker"
            ],
            "is_complete" : true
        },
        {
            "id" : 3,
            "text" : "Complete presentation prep for Aurelia presentation",
            "created_at" : "Wed Mar 05 10:01:55 +0000 2015",
            "Tags": [
                "Presentation",
                "Aureia"
            ],
            "is_complete" : false
        },
        {
            "id" : 4,
            "text": "Instrument creation of development environment with Puppet",
            "created_at" : "Fri June 30 13:00:00 +0000 2015",
            "Tags": [
                "Devops",
                "Puppet"
            ],
            "is_complete" : false
        },
        {
            "id" : 5,
            "text": "Transition code base to ES6",
            "created_at" : "Mon Aug 01 10:00:00 +0000 2015",
            "Tags": [
                "ES6",
                "Web Development"
            ],
            "is_complete" : false
        }
    ]
}

app.get('/', function (req, res){
    return res.send(todos)
})

app.get('/:id', function (req, res) {
    const { id } = req.params;
    const todo = todos.items.find(function (item) {
        return item.id === parseInt(id)
    })
    return res.send(todo);
})

app.post('/', function (req, res){
    const todo = req.body;
    todos.items.push(todo);
    return res.send(todos);
})

app.get('/another', function (req, res){
    return res.send('another')
})

app.listen(port, function (){console.log("application running on port "+ port)})
