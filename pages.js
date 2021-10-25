const express = require('express');
const router = express.Router();
const request = require('request');
const mysql = require("mysql");



router.get('/',(req,res) => {
    res.render('index');
});

router.get('/AdminForm',(req,res) => {
    res.render('AdminForm');
});

router.get('/AdminLogin',(req,res) => {
    res.render('AdminLogin');
});

router.get('/AdminSignUp',(req,res) => {
    res.render('AdminSignUp');
});

router.get('/StudentForm',(req,res) => {
    res.render('StudentForm');
});

router.get('/StudentLogin',(req,res) => {
    res.render('StudentLogin');
});

router.get('/TeacherSignUp',(req,res) => {
    res.render('TeacherSignUp');
});

router.get('/TeacherForm',(req,res) => {
    res.render('TeacherForm');
});

router.get('/TeacherLogin',(req,res) => {
    res.render('TeacherLogin');
});

router.get('/TeacherSignUp',(req,res) => {
    res.render('TeacherSignUp');
});

router.get('/studentdetail',(req,res) => {
    res.render('studentdetail');
});

router.get('/teacherdetail',(req,res) => {
    res.render('teacherdetail');
});

router.get('/StudentInfo',(req,res) => {
    res.render('StudentInfo');
});

router.get('/TeacherInfo',(req,res) => {
    res.render('TeacherInfo');
});

router.get('/teacherview',(req,res) => {
    res.render('teacherview');
});

router.get('/adminview_edit_salary',(req,res) => {
    res.render('adminview_edit_salary');
});

router.get('/adminview_edit_subj',(req,res) => {
    res.render('adminview_edit_subj');
});

router.get('/adminview_dlt_salary',(req,res) => {
    res.render('adminview_dlt_salary');
});

router.get('/adminview_dlt_FinalResult',(req,res) => {
    res.render('adminview_dlt_FinalResult');
});

router.get('/adminview_dlt_MidResult',(req,res) => {
    res.render('adminview_dlt_MidResult');
});

router.get('/adminview_finalmarks_entry',(req,res) => {
    res.render('adminview_finalmarks_entry');
});

router.get('/adminview_midsmarks_entry',(req,res) => {
    res.render('adminview_midsmarks_entry');
});

router.get('/adminview_studentmarks_edit',(req,res) => {
    res.render('adminview_studentmarks_edit');
});

router.get('/adminview_allstudent',(req,res) => {
    res.render('adminview_allstudent');
});

router.get('/adminview_allteacher',(req,res) => {
    res.render('adminview_allteacher');
});

router.get('/Adminview_student_AnnualFee_entry',(req,res) => {
    res.render('Adminview_student_AnnualFee_entry');
});

router.get('/Adminview_student_ExamFee_entry',(req,res) => {
    res.render('Adminview_student_ExamFee_entry');
});

router.get('/Adminview_student_MonthlyFee_entry',(req,res) => {
    res.render('Adminview_student_MonthlyFee_entry');
});

router.get('/Adminview_student_AnnualFee_edit',(req,res) => {
    res.render('Adminview_student_AnnualFee_edit');
});

router.get('/Adminview_student_MonthlyFee_edit',(req,res) => {
    res.render('Adminview_student_MonthlyFee_edit');
});

router.get('/Adminview_student_ExamFee_edit',(req,res) => {
    res.render('Adminview_student_ExamFee_edit');
});

router.get('/Adminview_student_ExamFee_dlt',(req,res) => {
    res.render('Adminview_student_ExamFee_dlt');
});

router.get('/Adminview_student_AnnualFee_dlt',(req,res) => {
    res.render('Adminview_student_AnnualFee_dlt');
});

router.get('/Adminview_student_MonthlyFee_dlt',(req,res) => {
    res.render('Adminview_student_MonthlyFee_dlt');
});

// router.get('/teacherview_result',(req,res) => {
//     res.render('teacherview_result');
// });

router.get('/adminview_studentdetail',(req,res) => {
    res.render('adminview_studentdetail');
});

router.get('/adminview_teacher_salary_entry',(req,res) => {
    res.render('adminview_teacher_salary_entry');
});

router.get('/adminview_subject_entry',(req,res) => {
    res.render('adminview_subject_entry');
});

// router.get('/adminview_student_fee_status',(req,res) => {
//     res.render('adminview_student_fee_status');
// });

router.get('/adminview_student_result',(req,res) => {
    res.render('adminview_student_result');
});

router.get('/teacherview_EditMidsMarks',(req,res) => {
    res.render('teacherview_EditMidsMarks');
});

router.get('/teacherview_DltMidsMarks',(req,res) => {
    res.render('teacherview_DltMidsMarks');
});

router.get('/teacherview_DltFinalMarks',(req,res) => {
    res.render('teacherview_DltFinalMarks');
});

router.get('/teacherview_EditFinalMarks',(req,res) => {
    res.render('teacherview_EditFinalMarks');
});


module.exports = router;