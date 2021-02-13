var knex = require('knex')({
    client: 'mysql',
    connection: {
        host : 'localhost',  
        user : 'root',       
        password : '123456', 
        database : 'todo'   
     }
});

module.exports = knex