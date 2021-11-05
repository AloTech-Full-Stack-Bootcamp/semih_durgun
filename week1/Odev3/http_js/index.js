const http = require("http");
const port = 5000;
const server = http.createServer((req, res) => {
  if ("/" == req.url) {
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    res.write("<h1>Semih Durgun</h1><br><h2>Index Sayfasına Hoşgeldiniz!</h2>");
  } else if ("/about" == req.url) {
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    res.write(
      "<h1>Semih Durgun</h1><br><h2>Hakkımda Sayfasına Hoşgeldiniz!</h2>"
    );
  } else if ("/contact" == req.url) {
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    res.write("<h1>Semih Durgun</h1><br><h2>İletişim Sayfasına Hoşgeldiniz!");
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
    res.write("<h2>404 Not Found</h2>");
  }
  res.end();
});

server.listen(port, () => {
  console.log(`Sunucu çalışıyor.. http://localhost:${port}`);
});
