document.querySelector("#user").addEventListener("submit", takesubmit)

function takesubmit(e){
    e.preventDefault()
    let user1 = {
        name:e.target.name.value,
        Email:e.target.Email.value
    }
    renderuser(user1)
    submitData(user1)
}

function renderuser(user1){
    let userprofile = document.createElement("p")
    userprofile.className = "users"
    userprofile.innerHTML = `
    <p>${user1.name}</p>
    <p>${user1.Email}</p>
    `
    document.querySelector("#uselist").appendChild(userprofile)
}

function submitData(user1){
    fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user1)
    })
    .then(res => res.json())
    .then(user => console.log(user1))
}