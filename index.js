const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = 5000

app.use(bodyParser.json())

const AuthController = require('./controllers/auth')
const { authenticated } = require('./middleware')
const HotelController = require('./controllers/hotel')

app.group("/api/v2", (router) => {
    //LOGIN
    router.post('/login', AuthController.login)

    //GET DATA ROOM
    router.get('/rooms', authenticated, HotelController.getRoom)

    //ADD ROOM
    router.post('/room', authenticated, HotelController.addRoom)

    //GET ROOM BY ID
    router.get('/room/:id', authenticated, HotelController.getOneRoom)

    //EDIT ROOM
    router.put('/room/:id', authenticated, HotelController.updateRoom)

    //GET ALL DATA CUSTOMERS
    router.get('/customers', authenticated, HotelController.getAllCustomers)

    //ADD CUSTOMER
    router.post('/customer', authenticated, HotelController.addCustomer)

    //GET CUSTOMER BY ID
    router.get('/customer/:id', authenticated, HotelController.getOneCustomer)

    //EDIT CUSTOMER
    router.put('/customer/:id', authenticated, HotelController.updateCustomer)

    //BOOKINGS
    router.get('/bookings', authenticated, HotelController.getBooking)

    //ADD BOOKING
    router.post('/booking', authenticated, HotelController.addBooking)

    router.get('/users', authenticated, HotelController.getUser)

    router.get('/user/:id', authenticated, HotelController.getUserId)

    //CHECKOUT
    router.put('/booking/:roomId', authenticated, HotelController.updateBooking)

}) 

//when this nodejs app executed, it will listen to defined port
app.listen(port, () => console.log(`Listening on port ${port}!`))