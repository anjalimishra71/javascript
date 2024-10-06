function printStudentDetails(student) {
    console.log(student.name);
    console.log(student.course);
    console.log(student.email);
    console.log(student.dashboardAccessGiven);
    }
    // studentDetails object
    let studentDetails = {
    name: "Mithun",
    course: "Full Stack Web Development",
    email: "mithun@pw.live",
    dashboardAccessGiven: true,
    };
    // Calling a function on passing studentDetails object
    printStudentDetails(studentDetails);