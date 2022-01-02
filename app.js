const express = require('express')
const morgan = require('morgan')
const app = express()
const dotenv = require('dotenv')
const path = require('path')
const {createTables} = require('./database')
const cookieParser = require('cookie-parser')
const user = require('./routes/user')
const blog = require('./routes/blogs')
const cause = require('./routes/cause')
const donation = require('./routes/donation')
const view = require('./routes/view')
dotenv.config({ path: './config.env' })

app.set('view engine','ejs')
app.set('views' , path.join(__dirname+'/public/'))

app.use(express.static(path.join(__dirname,'public')));
app.use(morgan('tiny'))
app.use(express.json( {limit:'10kb'} ))
app.use(express.urlencoded({extended:true , limit:'10kb'}))
app.use(cookieParser())

createTables()


app.use('/',view)
app.use('/api/v1/user',user)
app.use('/api/v1/blog',blog)
app.use('/api/v1/cause',cause)
app.use('/api/v1/donation',donation)

app.listen(3000,()=>{
    console.log('server is running at port 3000')
})