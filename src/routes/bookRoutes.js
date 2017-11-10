var express = require('express');

var bookRouter = express.Router();

var books = [
  {
        title: 'Eloquent JavaScript, Second Edition',
        author: 'Marijn Haverbeke',
        description: 'JavaScript lies at the heart.'
    },
    {
        title: 'Learning JavaScript Design Patterns',
        author: 'Addy Osmani',
        description: 'With Learning JavaScript Design Patterns.'
    },
    {
        title: 'Speaking JavaScript',
        author: 'Axel Rauschmayer',
        description: 'Like it or not, JavaScript is everywhere these. '
    },
    {
        title: 'Programming JavaScript Applications',
        author: 'Eric Elliott',
        description: 'Take advantage of JavaScript power to build robust.'
    },
    {
        title: 'Understanding ECMAScript 6',
        author: 'Nicholas C. Zakas',
        description: 'ECMAScript 6 represents the biggest update to the core.'
    }
];

bookRouter.route('/')
    .get(function(req, res) {
        res.render('books', {
            title: 'Books',
            nav: [{Link:'/Books', Text:'Books'},
            {Link:'/Authors', Text:'Authors'}],
            books: books
        });
    });

bookRouter.route('/single')
        .get(function(req, res) {
            res.send('Hello Single Book');
        });

module.exports = bookRouter;
