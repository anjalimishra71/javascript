let studentDetails = {
    student1: {
    name: "Mithun",
    course: "Full Stack Web Development",
    email: "mithun@pw.live",
    dashboardAccessGiven: true,
    },
    student2: {
    name: "Prabir",
    course: "Full Stack Web Development",
    email: "prabir@pw.live",
    dashboardAccessGiven: true,
    },
    student3: {
    name: "Alka",
    course: "Full Stack Web Development",
    email: "alka@pw.live",
    dashboardAccessGiven: false,
    },
    };
    for (let [key, { name, course }] of Object.entries(studentDetails)) {
    console.log(`${key} : ${name} is enrolled to ${course}`);
    }