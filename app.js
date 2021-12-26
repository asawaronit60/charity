const express = require('express')
const morgan = require('morgan')
const app = express()
const dotenv = require('dotenv')
const {createTables} = require('./database')
const cookieParser = require('cookie-parser')
const user = require('./routes/user')
const blog = require('./routes/blogs')
const cause = require('./routes/cause')
const donation = require('./routes/donation')

dotenv.config({ path: './config.env' })
app.use(morgan('tiny'))
app.use(express.json( {limit:'10kb'} ))
app.use(express.urlencoded({extended:true , limit:'10kb'}))
app.use(cookieParser())

createTables()

app.get('/',(req,res)=>{
    res.send('hello world')
})



app.use('/api/v1/user',user)
app.use('/api/v1/blog',blog)
app.use('/api/v1/cause',cause)
app.use('/api/v1/donation',donation)

app.listen(3000,()=>{
    console.log('server is running at port 3000')
})