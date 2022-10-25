const {response}= require('express')
const addProduct=require('../Model/adminProduct')

const adminProductPage=(req,res)=>{
    addProduct.showProduct().then((product)=>{
        res.render('admin/adminProductPage',{admin:true,title:'PRODUCT CONTROL PAGE',product})
    })
    
}


// const adminCategoryPage=(req,res)=>{
//     adminCategory.showCategory().then((category)=>{
//         res.render('admin/adminCategoryPage',{admin:true,title:'CATEGORY CONTROL PAGE',category})

//     })

const adminAddProductPage=(req,res)=>{
    res.render('admin/adminAddProductPage',{admin:true,title:'ADD PRODUCT PAGE'})
}
const addNewProduct=(req,res)=>{
    addProduct.insertProduct(req.body).then((response)=>{
        res.redirect('/admin/adminProductPage')
    })
}
const adminDeleteProduct=(req,res)=>{
    let productId = req.query.id
    addProduct.deleteProduct(productId).then((response)=>{
        res.redirect('/admin/adminProductPage')
    })
}


module.exports={
    adminProductPage,
    adminAddProductPage,
    addNewProduct,
    adminDeleteProduct

}