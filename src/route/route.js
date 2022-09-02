const express = require('express');
const _ = require('underscore')
const router = express.Router();
const chanchal = require('lodash')


router.get('/test', function (req, res) {
    // chunk function
    let month = ['january', 'february', 'march', 'appril', 'may', 'jun', 'july', 'aug', 'september', 'october', 'november', 'december'];
    let b = chanchal.chunk(month, 4);
    console.log(b);

    // tail function
    let odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    let c = chanchal.tail(odd);
    console.log(c);

    // union function
    let arr1 = [1, 2, 2]
    let arr2 = [3, 3, 4, 5]
    let arr3 = [5, 5, 6]
    let arr4 = [6, 6, 8]
    let arr5 = [7, 7, 8, 9];
    let d = chanchal.union(arr1, arr2, arr3, arr4, arr5);
    console.log(d);

    //    fromPairs
    let pair = [["horror", "The Shining"], ["drama", "Titanic"], ["thriller", "Shutte Island"], ["fantasy", "Pans Labyrinth"]]
    let e = chanchal.fromPairs(pair);
    console.log(e);




})

router.get('/getMovies', function (req, res) {
    const a = ['kgf', 'rrr', 'msDhoni']
    res.send(a)
})

router.get('/movies/:indexNumber', function (req, res) {
    const a = ['kgf', 'rrr', 'msDhoni']
    let movieIndex = req.params.indexNumber;
    if (movieIndex < 0 || movieIndex > a.length) {
        return res.send('The index value is not correct, Please check the it')
    }

    let requiredMovies = a[movieIndex]
    res.send(requiredMovies)
})

router.get('/films', function (req, res) {
    const films = [{
        "id": 1,
        "name": "The Shining"
    }, {
        "id": 2,
        "name": "Incendies"
    }, {
        "id": 3,
        "name": "Rang de Basanti"
    }, {
        "id": 4,
        "name": "Finding Nemo"
    }]

    res.send(films)
})

router.get("/films/:filmId", function (req, res) {
    const films = [{
        "id": 1,
        "name": "The Shining"
    }, {
        "id": 2,
        "name": "Incendies"
    }, {
        "id": 3,
        "name": "Rang de Basanti"
    }, {
        "id": 4,
        "name": "Finding Nemo"
    }]

    let filmId = req.params.filmId

    //iterate all the films
    //search for a film whose id matches with the id recevied in request
    for (let i = 0; i < films.length; i++) {
        let film = films[i]
        if (film.id == filmId) {
            //if there is a match return the response from here
            return res.send(film)
        }
    }

    //if there is no match give an error response
    res.send("The film id doesn't match any movie")
})





module.exports = router;
