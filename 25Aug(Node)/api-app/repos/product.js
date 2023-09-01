const product = require("../models/product")

const addProduct = (data) => {
    return product.create(data);
}
const updateProduct = (id,data) => {
    return product.findOneAndUpdate({productId: id}, data , {upsert: true})
}
const getAllProduct = () => {
    return product.find({});
}
const getProductById = (id) => {
    return product.findOne({productId: id})
}
const removeProduct = (id) => {
    return product.findOneAndRemove({productId: id});
}

module.exports = {
    addProduct,
    updateProduct,
    getAllProduct,
    getProductById,
    removeProduct
}