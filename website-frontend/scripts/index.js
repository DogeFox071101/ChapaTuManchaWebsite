const button = document.getElementById("button_logout")

button.addEventListener("click", async (event) => {
    const id_user = localStorage.getItem("id_user")
    const message = {id_user : id_user}
    let response = await fetch('http://localhost:3001/api/usuario/logout', {
        method : 'POST',
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(message)
    })
    const data = await response.json()
    console.log(data)
    if (data.result === 0) {
        localStorage.removeItem("id_user")
        localStorage.removeItem("token_session")
        location.href = "./login.html"
    }
})