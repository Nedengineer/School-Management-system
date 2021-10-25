const express = require("express");
const path = require('path');
const mysql = require("mysql");
const cors = require("cors");

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'school_management_system'
});


const publicDirectory = path.join(__dirname, './views');
app.use(express.static(publicDirectory));

//Parse URL encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }));

//Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.set('view engine','hbs');



app.use(cors())


db.connect((error)=> {
    if(error) {
        console.log(error)
    } else{
        console.log("MySQL Connected...")
    }
});



//Define Routes
app.use('/', require('./routes/pages'));
app.use('/', require('./PostRequest/AdminPostReq'));
app.use('/', require('./PostRequest/TeacherPostReq'));
app.use('/', require('./PostRequest/StudentPostReq'));
app.use('/', require('./GetRequest/TeacherSalaryGetReq'));
app.use('/', require('./GetRequest/SubjectsGetReq'));
app.use('/', require('./GetRequest/OwnTeacherSalaryGetReq'));
app.use('/', require('./GetRequest/OwnFeesGetReq'));
app.use('/', require('./GetRequest/OwnTeacherViewResult'));
app.use('/', require('./GetRequest/AdminPortal'));
app.use('/', require('./GetRequest/TeacherPortal'));
app.use('/', require('./GetRequest/StudentPortal'));
app.use('/', require('./PostRequest/PostReqEnterSalary'));
app.use('/', require('./GetRequest/StudentFeesGetReq'));
app.use('/', require('./GetRequest/StudentResultGetReq'));
app.use('/', require('./GetRequest/StudentOwnSubj'));
app.use('/', require('./GetRequest/StudentOwnResult'));
app.use('/', require('./PostRequest/PostReqStudentMarksEdit'));
app.use('/', require('./PostRequest/PostReqSalaryEdit'));
app.use('/', require('./PostRequest/PostReqSalaryDlt'));
app.use('/', require('./PostRequest/PostReqEnterFee'));
app.use('/', require('./PostRequest/PostReqEditFees'));
app.use('/', require('./PostRequest/PostReqDltFee'));
app.use('/', require('./PostRequest/PostReqSubjEdit'));
app.use('/', require('./PostRequest/PostReqMarksEnter'));
app.use('/', require('./PostRequest/PostReqDltMarks'));
app.use('/', require('./PostRequest/PostReqTeacherEditMarks'));


























app.listen(5007,() =>{
    console.log("Server started on Port 5007");
})