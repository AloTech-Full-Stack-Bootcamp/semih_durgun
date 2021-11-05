/* fs.readfile tüm dosyayı belirttiğiniz belleğe yüklerken, fs.createReadStream ise tüm dosyayı belirttiğiniz boyutlarda parçalar halinde okur. 
İstemci ayrıca, okunurken parçalar halinde gönderildiğinden fs.createReadStream ile verileri daha hızlı alacaktır. 
Ancak fs.readfile, istemciye gönderilmeden önce tüm dosyayı okur. 
Dosya boyutu küçükse bu önemsiz olabilir, ancak disklerin yavaş olduğu ve dosya içeriğinin büyük olduğu durumlarda çok büyük bir fark yaratır. */

var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    var filename = "big_file";

    var readStream = fs.createReadStream(filename);

    readStream.on("open", function () {
      readStream.pipe(res);
    });
  })
  .listen(8080);
