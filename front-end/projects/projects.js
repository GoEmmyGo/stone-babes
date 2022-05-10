//Here I am setting some variables up for reference later

//these variables will search for an element with the invoked id or tag in my html document
const projectsContainer = document.querySelector('#projects-container')
const form = document.querySelector('#form')
const addButton = document.querySelector('#add-project')
const formAddButton = document.querySelector('#submit')
//here I have my baseURL that will serve as my transport pathway for all of my requests below
const baseURL = `http://localhost:4400/api/projects`
//I'm creating a callback function for when I need to have my requests callback the projects objects as well as an error function I can use below to catch any cases that aren't met
const projectsCallback = ({ data: projects }) => displayProjects(projects)
const errCallback = (err) => console.log(err)
//here are my endpoints for my backend
const getAllProjects = () => axios.get(baseURL).then(projectsCallback).catch(errCallback)
const addProject = body => axios.post(baseURL, body).then(projectsCallback).catch(errCallback)
const deleteProject = id => axios.delete(`${baseURL}/${id}`).then(projectsCallback).catch(errCallback)


// const editProject = id => axios.put(`${baseURL}/${id}`, {type}).then(projectsCallback).catch(errCallback)

//toggles the form for adding a project
const toggleForm = () => {
     if (form.style.display === "flex") {
        form.style.display = "none"
    } else {
        form.style.display = "flex"
    }
    console.log('toggle form working', form)
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

    addProject(bodyObject)

    videoURL.value = ''
    title.value = ''
    grade.value = ''
    location.value = ''
    area.value = ''
    notes.value = ''

    
}

const addProjectBox = (project) => {
    console.log(form, projectsContainer)
    const projectBox = document.createElement('div')
    projectBox.classList.add('project-box')

    projectBox.innerHTML = 
    `<iframe width="400" height="300" src='${project.videoURL}' title="YouTube video player" frameborder="0" allow="accelerometer; allow="autoplay"; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="projectBox">
        <p class="title">${project.title} ${project.grade} <button id="delete-project" onclick="deleteProject(${project.id})">X</button></p>
        <p class="location">${project.location}, ${project.area}</p>
        <p class="notes">${project.notes}</p>
    </div>`

    projectsContainer.appendChild(projectBox)

    console.log('project box added')
}

{/* <button id="edit-project" onclick="editProject(${project.id})">EDIT</button> */}

const displayProjects = (arr) => {
    projectsContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        addProjectBox(arr[i])
    }
    console.log('projects displayed')
}

const displayProjectBox = (arr) => {
    console.log(arr)
    console.log('project array displayed')
}

addButton.addEventListener('click', toggleForm)
addButton.addEventListener('click', hideAdd)
formAddButton.addEventListener('click', toggleForm)
formAddButton.addEventListener('click', submitHandler)
formAddButton.addEventListener('click', displayAdd)
formAddButton.addEventListener('submit', addProjectBox)

getAllProjects()