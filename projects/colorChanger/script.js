const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        if (e.target.id === 'gray') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }
    })
})

function save_data() {
    if (Storage) {
        if (t1.value.trim() == "") {
            alert("plz enter value")
        } else {
            localStorage.setItem("user", t1.value);
            alert("Record saved!!")
        }
    }
    else {
        document.write("Storage class not found!!")
    }
}
function show_data() {
    if (localStorage.user)
        alert("value of user:" + localStorage.getItem("user"))
    else
        alert("no record found!!")
}
function remove_data() {
    if (localStorage.user) {
        localStorage.removeItem("user")
        alert("Record is deleted")
    }
}