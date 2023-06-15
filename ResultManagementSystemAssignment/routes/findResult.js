const router = require("express").Router();
const Student = require("../models/Student");

router.get("/find-result", async(req, res) => {
    res.render("findResult", {showError: false});
})

.post("/find-result", async(req, res) =>  {
    const rollNumber = req.body.rollNumber;
    const dob = req.body.dob;

    const getStudent = await Student.findOne({rollNumber: rollNumber});
    getStudent ? res.render("showResult", {student : getStudent}) : res.render("findResult", {showError: true});
  
})

module.exports = router;