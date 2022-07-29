const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.set("view engine" , "hbs")
app.use('/',(req,res)=>{
    res.render("index")
})
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))