const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("Hello World!");
});

const art = {
	articles: [
		{ id: "1", title: "Doe", des: "hello", date: "1990-90" },
		{ id: "2", title: "yo", des: "namste", date: "1990-90" },
		{ id: "2", title: "bro", des: "ola", date: "1990-90" },
	],
};

app.get("/ar", (req, res) => {
	res.send(art);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
