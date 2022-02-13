let cardUsersElement = document.querySelector('.card__users')
const cardInfoElement = document.querySelector('.card__info')

cardUsersElement.addEventListener('click', showInfo)

function fetchData(url, method, callback) {
    const xhr = new XMLHttpRequest()

    xhr.open(method, url)

    xhr.onload = () => {
        if (xhr.status == '200') {
            callback(xhr.response)
        }
    }

    xhr.onerror = () => {
        console.error(xhr.status + ' ' + xhr.statusText)
    }
    xhr.send()
}

function templateCard({ email, username, id }) {
    return `
    <div class="card bg-warning bg-opacity-50" data-id="${id}" style="width: 18rem">
        <div  class="card-body">
            <h5 class="card-title" >${username}</h5>
            <p class="card-text">${email}</p>
        </div>
     </div>`
}

fetchData('https://jsonplaceholder.typicode.com/users', 'GET', (response) => {
    // console.log(response)
    let data = JSON.parse(response)
    let result = ""
    data.forEach((item) => {
        let template = this.templateCard(item)
        result = result + template
    })
    cardUsersElement.innerHTML = result
})

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


