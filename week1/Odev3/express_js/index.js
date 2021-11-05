const express = require("express");

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("<h1>Semih Durgun</h1><br><h2>Index Sayfasına Hoşgeldiniz!</h2>");
});

app.get("/about", (req, res) => {
  res.send("<h1>Semih Durgun</h1><br><h2>Hakkımda Sayfasına Hoşgeldiniz!</h2>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Semih Durgun</h1><br><h2>İletişim Sayfasına Hoşgeldiniz!</h2>");
});

app.listen(port, () => {
  console.log(`Sunucu çalışıyor.. http://localhost:${port}`);
});
