const $ = document.querySelector.bind(document)
let counter = 1
let canClick = true

$("button").addEventListener("click", function () {
    if (canClick) {
        const request = new XMLHttpRequest()
        request.open("GET", "users.json", true)

        request.onload = function () {
            if (this.status === 200) {
                let users = JSON.parse(this.responseText)
                users.forEach(user => {
                    $("section").classList.remove("d-none")
                    $(`#id${counter}`).textContent = user["id"]
                    $(`#name${counter}`).textContent = user["name"]
                    $(`#email${counter}`).textContent = user["email"]
                    counter++
                });
            }
        }

        request.send()
        canClick = false
    }
})