function showInfo(event) {
    const { target } = event
    const { id } = target.dataset
    let newUrl = `https://jsonplaceholder.typicode.com/users/${id}`

    fetchData(newUrl, 'GET', (response) => {
        let data = JSON.parse(response)
        let result = ""
        let template = templateTwoCard(data.name, data.email, data.address.street, data.address.suite, data.address.city, data.phone, data.company.name, data.company.catchPhrase)
        result = template

        cardInfoElement.innerHTML = result
    })
}


function templateTwoCard(name, email, street, suite, city, phone, companyName, catchPhrase) {
    return `
<div class="card bg-danger bg-gradient bg-opacity-50" style="width: 18rem">
    <div class="card-body">
        <h5 class="card-text">${name}</h5>
        <p class="card-text">${email}</p>
        <p class="card-text">${street}</p>
        <p class="card-text">${suite}</p>
        <p class="card-text">${city}</p>
        <p class="card-text">${phone}</p>
        <p class="card-text">${companyName}</p>
        <p class="card-text">${catchPhrase}</p>
    </div>
</div>`
}
