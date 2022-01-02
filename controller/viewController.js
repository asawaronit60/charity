const {pool} = require('../database')
const axios = require('axios')
exports.getHome = async(req,res)=>{

    try {
    //   let causes = await axios({
    //       method:'get',
    //       url:'http://localhost:3000/cause/'
    //   })  
      
        res.status(200).render('index')

    } catch (err) {
        res.status(200).json({
            status:'success',
            message:err.message
        })
    }
}

exports.getAbout = async(req,res)=>{
   
    try {
        res.status(200).render('About')

    } catch (err) {
        res.status(200).json({
            status:'success',
            message:err.message
        })
    } 
}

exports.getAdmin = async(req,res)=>{
   
    try {
       
        res.status(200).render('admin')

    } catch (err) {
        res.status(200).json({
            status:'success',
            message:err.message
        })
    } 
}
exports.getContact = async(req,res)=>{
   
    try {
        res.status(200).render('contact')

    } catch (err) {
        res.status(200).json({
            status:'success',
            message:err.message
        })
    } 
}

exports.getLogin = async(req,res)=>{

    try { 
        res.status(200).render('login')
        
    } catch (err) {
        res.status(200).json({
            status:'success',
            message:err.message
        })
    }

}

exports.getBlogs = async(req,res)=>{
    try {

            let blogs = await pool.query(`select * from blogs`)

        res.status(200).render('blog', {blogs:blogs.rows})

    } catch (err) {
        res.status(200).json({
            status:'success',
            message:err.message
        })
    }
}

exports.getCause = async(req,res)=>{
    try {
        
        let causes = await axios({
            method:'get',
            url:'http://localhost:3000/api/v1/cause'
        }) 
      
        res.status(200).render('cause',{causes:causes.data.data})

    } catch (err) {
        res.status(200).json({
            status:'success',
            message:err.message
        })
    }
}

exports.createCause = async(req,res)=>{
    try {
        res.status(200).render('create_cause')
    } catch (err) {
        res.status(200).json({
            status:'success',
            message:err.message
        })
    }
}

exports.createBlog = async(req,res)=>{
    try {
        res.status(200).render('create_blog')
    } catch (err) {
        res.status(200).json({
            status:'success',
            message:err.message
        })
    }
}