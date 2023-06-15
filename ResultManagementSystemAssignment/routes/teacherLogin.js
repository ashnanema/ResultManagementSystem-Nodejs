const router = require("express").Router();
const Teacher = require("../models/Teacher");

router.get("/teacher-login", async(req, res) => {
    res.render("teacherLogin", {showError: false});
})

.post("/teacher-login", async(req, res) =>  {
    const email = req.body.email;
    const password = req.body.password;

    const getTeacher = await Teacher.findOne({email: email, password: password});
    getTeacher ? res.redirect("teacher-view") : res.render("teacherLogin", {showError: true});
})

module.exports = router;