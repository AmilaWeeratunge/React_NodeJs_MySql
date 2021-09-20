const express = require('express');
const app =express();

const cors = require('cors');

const  db = require('./dbcon/dbconfig')



app.use(cors());
app.use(express.json());



app.post('/create',(req,res)=>{
    fname = req.body.fname;
    lname = req.body.lname;
    age = req.body.age;
    postision = req.body.postision;
    department = req.body.department;
    salary = req.body.salary;

    db.query('INSERT INTO employee(fname,lname,age,postision,department,salary) VALUES(?,?,?,?,?,?)',
    [fname,lname,age,postision,department,salary],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.status(200).send("value Insert Succuss");
        }
    } )
})

app.get('/employees',(req,res)=>{
    db.query("SELECT * FROM employee",(err,result)=>{
        if(err) {
            console.log(err)
        }
        else{
            res.status(200).send(result)
            
        }
    })
})


app.listen(3001,()=>{
    console.log("App the Start in port number 3001")
})

