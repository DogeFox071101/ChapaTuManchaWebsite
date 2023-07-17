compareTokenSession = async (id_user, token_session) => {

}

window.addEventListener('load', async () => {
    id_user = localStorage.getItem("id_user")
    token_session = localStorage.getItem("token_session")
    if (!id_user) {
        location.href = "./login.html"
    }
})