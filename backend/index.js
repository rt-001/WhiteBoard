const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.get("/", (req, res) => {
  res.send("this is main");
});
const PORT = process.env.PORT || 4000;
server.listen(PORT, () =>
  console.log(`server is listening on http://localhost:${PORT}`)
);
