import mysql from "mysql2"; // import library of mysql tools

try {
  const db = mysql.createConnection({
    // connect and call connection "db"
    host: "127.0.0.1",
    database: "bocacode",
    user: "root",
    // port: 3306,
    // password: 'test1234',
  });

  console.log("We are connected...");
  
  db.query('UPDATE users SET first_name = "Cassandra" WHERE first_name = "Cass"', (err) => {
    if (err) console.log("UPDATE ERROR -> ", err);
    else console.log('UPDATE DONE!');
  });
  
  db.query("SELECT * FROM users", (err, results) => {
    if (err) console.log("ERROR -> ", err);
    console.table(results);    
  });
  
  db.end();
  
}
catch (err) {
  console.error('CONNECTION ERROR: ', err);
}

