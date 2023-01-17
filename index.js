import { createConnection } from "mysql2"; // import library of mysql tools
import { dbConnection } from "./secrets.js";

try {
  const db = createConnection(dbConnection);

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

