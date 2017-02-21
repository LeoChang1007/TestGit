/**
 * Created by alone on 2016/9/19.
 */
var pg = require('pg');


var config = {
    user: 'postgres', //env var: PGUSER
    database: 'alpha-mes-bk', //env var: PGDATABASE
    password: '', //env var: PGPASSWORD
    host:'192.168.0.162',
    port: 5440, //env var: PGPORT
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};


//this initializes a connection pool
//it will keep idle connections open for a 30 seconds
//and set a limit of maximum 10 idle clients
var pool = new pg.Pool(config);

// to run a query we can acquire a client from the pool,
// run a query on the client, and then return the client to the pool
pool.connect(function(err, client, done) {
    if(err) {
        return console.error('error fetching client from pool', err);
    }
    client.query('SELECT name FROM public.materials ORDER BY id ASC LIMIT $1',['2'], function(err, result) {
        if(err) {
            return console.error('error running query', err);
        }
        console.log(result.rows[1].name);
        done();
    });
});

pool.on('error', function (err, client) {
    console.error('idle client error', err.message, err.stack)
})