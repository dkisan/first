const elecList = document.getElementById('elecList')
const foodList = document.getElementById('foodList')
const skinList = document.getElementById('skinList')

const selPrice = document.getElementById('selPrice')
const prodName = document.getElementById('prodName')
const catValue = document.getElementById('catValue')

const crudcrudurl = 'baccd2e449ba4e769c44b9668ec350aa'

function formSubmission(e) {
    e.preventDefault()

    let prod = {
        price: selPrice.value,
        name: prodName.value,
        category: catValue.value
    }

    axios.post(`https://crudcrud.com/api/${crudcrudurl}/seller`, prod)
        .then(res => {
            createElem(res.data)
        })
        .catch(err => {
            console.log(err)
        })
}

function createElem(d) {
    const li = document.createElement('li')
    li.setAttribute('id', d._id)
    li.appendChild(document.createTextNode(`${d.price} - ${d.name} - ${d.category}`))

    const button = document.createElement('button')
    button.setAttribute('onclick', 'deleteFunctionality(event)')
    button.appendChild(document.createTextNode('Delete Order'))

    li.appendChild(button)
    if (d.category == 'electronics') {
        elecList.appendChild(li)
    } else if (d.category == 'Food') {
        foodList.appendChild(li)
    } else {
        skinList.appendChild(li)
    }
}

function deleteFunctionality(e) {
    const elem = e.target.parentElement
    const elemid = elem.getAttribute('id')
    const listtype = elem.parentElement.getAttribute('id')

    axios.delete(`https://crudcrud.com/api/${crudcrudurl}/seller/${elemid}`)
        .then(res => {
            if (listtype == 'elecList') {
                elecList.removeChild(elem)
            } else if (listtype == 'foodList') {
                foodList.removeChild(elem)
            } else {
                skinList.removeChild(elem)
            }
        })
        .catch(err => {
            console.log(err)
        })

}

window.addEventListener('DOMContentLoaded', () => {
    axios.get(`https://crudcrud.com/api/${crudcrudurl}/seller`)
        .then(res => {
            const d = res.data
            for (let i = 0; i < d.length; i++) {

                createElem(d[i])
            }
        })
        .catch(err => {
            console.log(err)
        })
})