import Product from './data/products.json'

const appService = {
  getProduct () {
    return Product
  },
  getObject () {
    console.log(Product)
  }
}

export default appService
