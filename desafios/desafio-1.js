class ProductManager {
  constructor() {
    this.products = [];
    this.code = 0;
  }

  addProduct(product) {
    const emptyCheck = Object.values(product).some((element) => !element);

    if (emptyCheck) {
      console.log("Todos os campos são obrigatórios");
      return;
    }

    const found = this.products.find((item) => item.code === this.code);

    if (found) {
      console.log("Já existe o código cadastrado");
      return;
    }

    return this.products.push({ ...product, code: this.code++ });
  }

  getProductById(code) {
    const found = this.products.find((item) => item.code === code);

    if (!found) {
      console.log("Produto não encontrado");
      return;
    }

    return found;
  }
}

const newProduct = new ProductManager();

newProduct.addProduct({
  title: "",
  description: "Computador pessoal portátil",
  price: 4500,
  thumbnail: "foto",
  stock: 10,
});

newProduct.addProduct({
  title: "Headset",
  description: "Fone de ouvido com abafador de som",
  price: 270,
  thumbnail: "foto",
  stock: 10,
});


