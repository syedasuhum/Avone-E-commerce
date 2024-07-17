const express = require('express')
const connectDb = require('./db.js')
const itemModel = require('./models/item.js')
const cors = require('cors')
const app = express();

app.use(express.json())
app.use(cors())
connectDb()
app.get('/', async (req, res) => {
    const items = await itemModel.find()
    return res.json(items)
})

app.get('/login/:emailId/:passwordId', async (req, res) => {
    const mail = req.params.emailId
    const password = req.params.passwordId
    
    itemModel.findOne({ 'email': mail, 'password': password })
        .then(function (doc) {
            if (doc) {
                return res.status(200).send({message:"success",data:doc});
            }
            else (
                res.status(200).send({message:"failed"})
            )
        });

})
// app.put('/updateUser/:id', async (req, res) => {
//     const id = req.params.id;
//     await itemModel.findByIdAndUpdate(id, { name: req.body.name, email: req.body.email, password: req.body.password })
//         .then(user => res.json(user))
// })

app.post('/post', async (req, res) => {
    const items = await itemModel.create(req.body)
        .then(user => res.json(user))
})


// app.delete('/deleteUser/:id', async (req, res) => {
//     const id = req.params.id;
//      await itemModel.findByIdAndDelete(id)
//         .then(user => res.json(user))
// })
app.listen(3500, () => {
    console.log(`Server is running on port : 3500`)
})
