const express = require('express');
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./routes')


app.set('views', __dirname+'/views')
app.set('view engine','ejs')
app.engine('html', require('ejs').renderFile)
app.use('/static', express.static(__dirname + '/public'));
app.use(bodyParser.json())
app.use('cors')



app.listen(3000,()=>{
    console.log("서버가 3000포트에서 실행했습니다. http://localhost:3000")
})