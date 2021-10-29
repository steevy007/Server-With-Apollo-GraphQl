const { users } = require('../../data/fakeData')
const { products } = require('../../data/products')
const resolvers = {
  Query: {
    totalPosts: () => users,
    allProducts: () => products,
    productById: (parent, args) => {
      return products.find(product => product.id == args.id)
    }
  },

  Mutation: {
    createProduct: (parent, { id, name, description }) => {
      let checkID = products.findIndex(product => product.id === id)
      if (checkID==-1) {
        const product = {
          id,
          name,
          description
        }

        products.push(product)

        return product
      }else{
        throw new Error (`ID Already taken ${checkID} `)
      }

    },
    deleteProduct:(parent,{id})=>{
      let checkID = products.findIndex(user => user.id === id)
      if(checkID==-1){
        throw new Error('Product inexistant')
      }else{
        products.splice(checkID,1)
        return true
      }
    }
  }
};


module.exports = { resolvers }