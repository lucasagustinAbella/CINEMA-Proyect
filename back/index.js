const app = require("./src/server");
const dbCon = require("./src/config/dbcon");
const PORT = 3000;

dbCon()
  .then((res) => {
    app.listen(PORT, () => {
      console.log("Servidor escuchando");
    });
  })
  .catch((err) => {
    console.log("Error al conectar a la BDD", err.message);
  });
