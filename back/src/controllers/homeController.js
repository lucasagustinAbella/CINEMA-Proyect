const getHome = (req, res) => {
 res
   .status(200)
   .send("Estas en la ruta GET '/' DE Movies App")
}

const postHome = (req, res) => {
res 
  .status(200)
  .send("Estas en la ruta POST '/' de Movies App")
}

module.exports = {getHome, postHome};