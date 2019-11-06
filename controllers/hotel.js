const models = require('../models')
const Room = models.room
const Customer = models.customer
const Booking = models.booking
const User = models.user

//GET DATA ROOMS
exports.getRoom = (req, res) => {
    Room.findAll().then(rooms=>res.send(rooms))
}

//ADD ROOM
exports.addRoom = (req, res) => {
    Room.create(req.body).then(rooms => res.send(rooms))
}

//GET ROOM BY ID
exports.getOneRoom = (req, res) => {
    Room.findOne({where : {
        id: req.params.id
    }}).then(room => res.send(room))
}

//EDIT ROOM
exports.updateRoom = (req, res) => {
    Room.update(req.body,{where:{id:req.params.id}})
    .then(()=>Room.findOne({where : {id: req.params.id}})
    .then(room=> res.send(room)))
}

//GET DATA CUSTOMERS
exports.getAllCustomers = (req, res) => {
    Customer.findAll().then(customers=>res.send(customers))
}

//ADD CUSTOMER
exports.addCustomer = (req, res) => {
    Customer.create(req.body).then(customer => res.send(customer))
}

//GET CUSTOMER BY ID
exports.getOneCustomer = (req, res) => {
    Customer.findOne({where : {
        id: req.params.id
    }}).then(customer => res.send(customer))
}

//EDIT CUSTOMER
exports.updateCustomer = (req, res) => {
    Customer.update(req.body,{where:{id:req.params.id}})
    .then(()=>Customer.findOne({where : {id: req.params.id}})
    .then(customer=> res.send(customer)))
}

//BOOKINGS
const showBookings=(book) => {
    const newData = book.map(item => {
        //Ambil Customer
        const customer = item.customers.map(entry => {
            const { id, name, identity_number, phone_number, image } = entry

            const newCustomer = {
                id,
                name,
                identity_number,
                phone_number,
                image
            }
            return newCustomer
        })

        const booking = item.customers.map(entry => {
            const { id, customrId, roomId, isBooked, isDone, duration, order_end_time } = entry.booking

            const newBooking = {
                id,
                customrId,
                roomId,
                isBooked,
                isDone,
                duration,
                order_end_time
            }
            return newBooking
        })

        const newItem = {
            id: item.id,
            name: item.name,
            customer: customer[0],
            booking: booking[0]
        }

        return newItem
    })
    return newData
}

//GET ALL BOOKING
exports.getBooking=(req,res) => {
    Room.findAll({
      include: [
        {
          model: Customer,
          as: 'customers',
          where: 
            {
                '$customers.booking.isBooked$':true
            },
            required:false
        },
      ]
      // raw: true
    }).then(book => res.send(showBookings(book)
    )).catch(err => {
        console.log(err)
    })
}

exports.getUser=(req,res) => {
    User.findAll().then(users=>res.send(users))
}

//GET USER BY ID
exports.getUserId = (req, res) => {
    User.findOne({where : {
        id: req.params.id
    }}).then(users => res.send(users))
}

//ADD BOOKING
exports.addBooking = (req, res) => {
    Booking.create(req.body).then(booking => res.send(booking))
}

//UPDATE BOOKING
exports.updateBooking = (req, res) => {
    Booking.update({
        isBooked : false,
        isDone : true
    },{where:{roomId:req.params.roomId}})
    .then(room=> res.send(room))
}