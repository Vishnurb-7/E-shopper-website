const express =require ('express')
const router =express.Router()
const admin=require('../Controllers/adminLoginController')
const addCategory=require('../Controllers/adminCategoryController')
const addBrand=require('../Controllers/adminBrandController')
const addProduct=require('../Controllers/adminProductController')
const { Router } = require('express')

router.get('/',admin.adminLoginPage)

router.post('/adminLoginAction',admin.adminLoginAction)

router.get('/adminUserPage',admin.adminUserPage)
router.get('/adminHome',admin.adminHome)

router.get('/adminOrderListPage',admin.adminOrderListPage)
router.get('/adminSignOut',admin.adminSignOut)

//category router.......


router.get('/adminCategoryPage',addCategory.adminCategoryPage)
router.post('/addNewCategory',addCategory.addNewCategory)
router.get("/deleteOneCategory",addCategory.deleteCategory)

// brand router............

router.get('/adminBrandPage',addBrand.adminBrandPage)
router.post('/addBrand',addBrand.adminShowBrand)
router.get("/deleteOneBrand",addBrand.adminDeleteBrand)


//product router

router.get('/adminProductPage',addProduct.adminProductPage)
router.get('/adminAddProduct',addProduct.adminAddProductPage)
router.post('/adminAddNewProduct',addProduct.addNewProduct)
router.get("/adminDeleteOneProduct",addProduct.adminDeleteProduct)



module.exports=router