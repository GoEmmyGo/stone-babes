const baseURL = `http://localhost:4400/api/sends`

//Here I am setting some variables up for reference later

//these variables will search for an element with the invoked id or tag in my html document
const sendsContainer = document.querySelector('#sends-container')
const form = document.querySelector('#form')
const addButton = document.querySelector('#add-send')
const formAddButton = document.querySelector('#submit')
//here I have my baseURL that will serve as my transport pathway for all of my requests below

//I'm creating a callback function for when I need to have my requests callback the sends objects as well as an error function I can use below to catch any cases that aren't met
const sendsCallback = ({ data: sends }) => displaySends(sends)
const errCallback = (err) => console.log(err.res.data)
//here are my endpoints for my backend
const getAllSends = () => axios.get(baseURL).then(sendsCallback).catch(errCallback)
const addSend = body => axios.post(baseURL, body).then(sendsCallback).catch(errCallback)
const deleteSend = id => axios.delete(`${baseURL}/${id}`).then(sendsCallback).catch(errCallback)


// const editSend = id => axios.put(`${baseURL}/${id}`, {type}).then(sendsCallback).catch(errCallback)

//toggles the form for adding a send
const toggleForm = () => {
     if (form.style.display === "block") {
        form.style.display = "none"
    } else {
        form.style.display = "block"
    }
    console.log('toggle form working')
}
//trying to get the initial add button to toggle, it worked!!!!
const hideAdd = () => {
    if (addButton.style.display === "none") {
       addButton.style.display = "block"
   } else {
    addButton.style.display = "none"
}
   console.log('hideAdd working')
}

const displayAdd = () => {
    if (addButton.style.display === "block") {
        addButton.style.display = "none"
   } else {
       addButton.style.display = "block"
   }
   console.log('displayAdd working')
}


const submitHandler = (e) => {
    e.preventDefault()
    
    console.log('mic check, 1, 2')

    let videoURL = document.querySelector('#videoURL')
    let title = document.querySelector('#title')
    let grade = document.querySelector('#grade')
    let location = document.querySelector('#location')
    let area = document.querySelector('#area')
    let notes = document.querySelector('#notes')
    
    let bodyObject = {
        videoURL: videoURL.value.replace('youtu.be', 'www.youtube.com/embed'),
        title: title.value,
        grade: grade.value,
        location: location.value,
        area: area.value,
        notes: notes.value,
    }

    addSend(bodyObject)

    videoURL.value = ''
    title.value = ''
    grade.value = ''
    location.value = ''
    area.value = ''
    notes.value = ''
}

const addSendBox = (send) => {
    const sendBox = document.createElement('div')
    sendBox.classList.add('send-box')

    sendBox.innerHTML = 
    `<iframe width="1046" height="588" src='${send.videoURL}' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="sendBox">
        <p class="title">${send.title}</p>
        <br>
        <p class="grade">${send.grade}</p>   
        <p class="location">${send.location}</p>
        <br>
        <p class="area">${send.area}</p> 
        <br>
        <p class="notes">${send.notes}</p>
        <br>
    <button id="edit-send" onclick="editSend(${send.id})">EDIT</button>
    </div>
    <button id="delete-send" onclick="deleteSend(${send.id})">REMOVE</button>`

    sendsContainer.appendChild(sendBox)

    console.log('send box added')
}

const displaySends = (arr) => {
    sendsContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        addSendBox(arr[i])
    }
    console.log('sends displayed')
}

const displaySendBox = (arr) => {
    console.log(arr)
    console.log('send array displayed')
}

addButton.addEventListener('click', toggleForm)
addButton.addEventListener('click', hideAdd)
formAddButton.addEventListener('click', toggleForm)
formAddButton.addEventListener('click', submitHandler)
formAddButton.addEventListener('click', displayAdd)
formAddButton.addEventListener('submit', addSendBox)

getAllSends()