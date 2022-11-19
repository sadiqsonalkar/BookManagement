//allow us to render different files usoing router

const axios = require('axios'); //will allow us to make request


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/books using axios
    axios.get('http://localhost:3000/api/books')
        .then(function(response){
            res.render('index', { books : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.add_book = (req, res) =>{
    res.render('add_book');
}

exports.update_book = (req, res) =>{
    axios.get('http://localhost:3000/api/books', { params : { id : req.query.id }})
        .then(function(bookdata){
            res.render("update_book", { book : bookdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}