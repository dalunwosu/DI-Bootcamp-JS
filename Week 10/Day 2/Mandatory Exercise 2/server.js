const user = {
    firstname: 'John',
    lastname: 'Doe'
}

const express = require('express')
const app = express()



app.get('/users', (req, res) => {console.log(user); res.json(user)})



app.get('/:id', (req, res) =>{
    let params = req.params
    console.log(params)
    res.json(params)
  })




app.use('/', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  console.log('Server is running on port 3000')
})

app.listen(3000)
