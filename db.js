const ISOLATION_LEVEL = require('tedious').ISOLATION_LEVEL;
const Connection = require('tedious').Connection;

  const config = {
    userName: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_HOSTNAME,
    
    // If you're on Azure Data Warehouse, you will need this:
    options: {
      encrypt: true,
      enableArithAbort: true,
      connectionIsolationLevel: ISOLATION_LEVEL.READ_UNCOMMITTED
    }
  };

const connection = new Connection(config);

connection.on('connect', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('connect to sql server');
    }
})