const express = require('express');
const route = express.Router() //allow us to create different router in seperate file

const services = require('../services/render');
const controller = require('../controller/controller'); 

route.get('/', services.homeRoutes);

route.get('/add-book', services.add_book)

route.get('/update-book', services.update_book)

// API route
route.post('/api/books', controller.create); //post method to create or add book
route.get('/api/books', controller.find); //get to find the book
route.put('/api/books/:id', controller.update); //put to update a book
route.delete('/api/books/:id', controller.delete); //delete to delete a book

module.exports = route //exports the router. so we can use it in server.js