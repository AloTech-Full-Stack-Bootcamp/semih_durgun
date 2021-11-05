const fs = require("fs");

// Dosya oluşturma
fs.writeFile(
  "employees.json",
  JSON.stringify({ name: "Employee 1 Name", salary: 2000 }),
  (err) => {
    if (err) throw "Dosya oluşturma hatası!";
    console.log("Dosya oluşturma işlemi başarılı.");
  }
);

//Dosya Okuma
fs.readFile("employees.json", (err, data) => {
  if (err) throw err;
  console.log(`Dosya Okundu : ${data}`);
});

// Dosya Güncelleme
fs.writeFile(
  "employees.json",
  JSON.stringify({ name: "Employee 2 Name", salary: 2500 }),
  (err) => {
    if (err) throw err;
    console.log("Dosya güncelleme işlemi başarılı.");
  }
);

// Dosya Silme
fs.unlink("employees.json", (err) => {
  if (err) throw err;
  console.log("Dosya silme işlemi başarılı.");
});
