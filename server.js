var http = require("http"),
express = require("express"),
app = express(),
port = process.env.PORT||3000,
bodyParser = require("body-parser"),
toDos = [
    {
        "description" : "Купить продукты",
        "tags" : ["шопинг", "рутина"]
    },
    {
        "description" : "Заплатить за интернет",
        "tags" : ["рутина"]
    },
    {
        "description" : "Подготовиться к совещанию в понедельник",
        "tags" : ["работа", "программирование"]
    },
    {
        "description" : "Ответить на электронные письма",
        "tags" : ["работа"]
    },
    {
        "description" : "Вывести Артека на прогулку в парк",
        "tags" : ["рутина", "питомцы"]
    },
    {
        "description" : "Закончить последний проект",
        "tags" : ["программирование", "работа"]
    }
];

app.use(express.static(__dirname + "/client"));
app.use(bodyParser.urlencoded({extended: true}));

http.createServer(app).listen(port);
app.get("/todos.json", function(req, res) {
    res.json(toDos);
});
app.post("/todos", function(req, res) {
    var newToDo = req.body;
    console.log(newToDo);
    toDos.push(newToDo);
    res.json({"message" : "We've posted object at the server"})
})