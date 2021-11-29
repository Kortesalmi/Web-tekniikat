let courses = []

document.querySelector("button").addEventListener("click", addCourse);
document.getElementById("show").addEventListener("click", showAll);

function addCourse() {
    // Haetaan tiedot kentistä
    let cname = document.getElementById('course').value;
    let num = document.getElementById('members').value;
    // Luodaan tiedoista olio
    let course = {
        course_name: cname,
        student_num: num
    }
    // Lisätään olio listaan
    courses.push(course);
}

function showAll() {
    // Käydään läpi kaikki kurssit taulukosta
    for (const c of courses) {
        // Luodaan kurssille list item
        courses.forEach(course => {
            let li = document.createElement("li");
            li.textContent = "Course " + course.course_name + " has " + course.student_num + " students registered."

            document.querySelector("ul").appendChild(li);

        });
    }
}




