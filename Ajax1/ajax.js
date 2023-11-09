const $ = document.querySelector.bind(document)
let canClick = true
$("button").addEventListener("click", function () {

    if (canClick) {
        // Creating the request
        const request = new XMLHttpRequest()

        // giving the address to the server
        request.open("GET", "sample.txt", true)

        // 
        request.onprogress = function () {
            $(".loading").classList.remove("d-none")
        }

        // Define a callback function
        request.onreadystatechange = function () {
            if (this.status === 200 && this.readyState === 4) {
                $(".response-txt").classList.remove("d-none")
                $("#response_txt").textContent = request.responseText
                $(".loading").classList.add("d-none")
                canClick = false
            }else if (this.status === 404){
                alert("Not found")
            }
        }
        request.onerror = function(){
            alert("An Error Accured")
        }
        // sending the request to the server
        request.send()
    }
})


/* 
the diffrence between onreadystatechange() and onload() is :
in onload() you can handle code when the state is 4 and ready.
in onreadystatechange() you can track different stages from 1 to 4 and handle the code in each state seperatly.
you can always use onreadystatechange() instead of onload() but remember check the readyState property === 4;
*/