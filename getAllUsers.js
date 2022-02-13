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