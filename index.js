const express = require("express");
const cors = require("cors");
const rooms = require("./data/rooms.json");
const app = express();
const port = 5000;
app.use(cors());

app.get("/", (req, res) => {
  res.send("Working successfully.");
});
//get all rooms
app.get("/rooms", (req, res) => {
  res.send(rooms);
});
//get room with id
app.get("/room/:id", (req, res) => {
  const id = req.params.id;
  const singleRoom = rooms.find(rr => rr.roomNumber == id);
  singleRoom ? res.send(singleRoom) : res.send({ status: false });
});

app.listen(port, () => {
  console.log(`server started at port : ${port}`);
});
