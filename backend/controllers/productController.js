import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc FETCH all products
// @route GET /api/products
// @access PUBLIC

const getProducts = asyncHandler(async(req,res) => {
    const products = await Product.find({})
    res.json(products);
})

// @desc FETCH products by id
// @route GET /api/products/:id
// @access PUBLIC

const getProductById = asyncHandler(async(req,res) => {
    const pdt = await Product.findById(req.params.id);
    if(pdt){
        res.json(pdt)
    } else {
        res.status(404).json({message: 'Product not found'});
    }
})

export { getProducts, getProductById}