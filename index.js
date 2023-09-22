const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const app = express()
const port = process.env.PORT || 4000

// middleware 

app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "chathistory"
})

// get data from database
app.get('/getConversation', (req, res) => {
    const sql = "SELECT * FROM conversationhistory"
    db.query(sql, (err, result) => {
        if (err) { res.send(err) }
        else { res.send(result) }
    })
})

// insert new data 
app.post('/insertConversation', (req, res) => {

    const { email, conversation } = req.body;
  
    const sql = 'INSERT INTO conversationHistory (email, conversation) VALUES (?, ?)';

    db.query(sql,[email, JSON.stringify(conversation)], (err, results) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(results)
        }
    })
})

// API endpoint to get conversations by email
app.post('/singleconversation', (req, res) => {
    const email = req.body.email;
    console.log(email)
    
    // Query the database to retrieve conversations for the specified email
    const query = 'SELECT * FROM conversationHistory WHERE email = ?';
    db.query(query, [email], (err, results) => {
      if (err) {
       res.send('Error fetching conversations:', err);
       
      } else {
       res.send(results)
      }
    });
  });
  


app.get('/', (req, res) => {
    res.send('sql server is running')
})
app.listen(port, () => console.log("sql server running on 4000 port"))