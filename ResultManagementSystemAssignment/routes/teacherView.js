const router = require("express").Router();
const Student = require("../models/Student");

router.get("/teacher-view", async(req, res) => {
    const studentsList = await Student.find();
    res.render("teacherView", { students : studentsList});
})

.get("/teacher-view/add-record", async(req, res) => {
    res.render("addRecord");
})

.post("/teacher-view/addRecord", (req, res) => {
    const rollNumber = req.body.rollNumber;
    const name = req.body.name;
    const dob = req.body.dob;
    const score = req.body.score;

    const newStudent = new Student({rollNumber, name, dob, score})

    newStudent.save()
    .then(() => {
        console.log("New record added");
        res.redirect("/teacher-view")
    })
    
    .catch(err => console.log(err));
})
   

.get("/teacher-view/edit-record/:id", async(req, res) =>  {
    const {id} = req.params;
    
    const getStudent = await Student.findOne({_id : id});
    res.render("editRecord", {student : getStudent});
})

.post("/teacher-view/edit-record/:id", async(req, res) =>  {
    const {id} = req.params;
    const rollNumber = req.body.rollNumber;
    const name = req.body.name;
    const dob = req.body.dob;
    const score = req.body.score;

    Student.updateOne({'_id' : id}, {rollNumber, name, dob, score})
    .then(() => {
        console.log("Record updated")
        res.redirect("/teacher-view")
    })
    
    .catch(err => console.log(err))
    
})

.get("/teacher-view/delete-record/:id", (req, res) =>  {
    const {id} = req.params;
    Student.deleteOne({_id : id})
    .then(() => {
        console.log("Record deleted");
        res.redirect("/teacher-view");
    })
    .catch(err => console.log(err));
})

module.exports = router;