

const { readFile } = require("fs").promises;
class CartManager {
    constructor(patch){
        this.patch=patch;

    }
   asyncgetAllCart(id) {
    try {
const fileContents = await.readFile(this.path, "utf-8");
// Resto del código...
    } catch (error) {
thrownewError("Error al leer el archivo: " + error.message);
    }
}
      
    
    async getAllCart(id){
        try{
            const pr=await fs.promises.readFile(this.patch,"utf-8");
            const prParse =JSON.parse(pr);
            const product = prParse.find((ele) => ele.id === id);
            if(product){
                return product;
            }else{
                return "No se enconro ningun producto con el ID proporcionado"
            }
        } catch (error){
            throw new Error("Error al leer el archivo" + error)
        }
    }
}

module.exports = CartManager;