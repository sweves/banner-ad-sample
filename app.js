var path = require("path"),
    express = require("express");

var STATIC_DIR = path.join(__dirname, "static"),
    PORT = 3000,
    app = express();

app.use(express.static(STATIC_DIR));

app.get("*", function (req, res) {
  res.sendFile(path.join(STATIC_DIR, "index.html"));
});

console.log('running on http://localhost:3000/');
app.listen(PORT);
