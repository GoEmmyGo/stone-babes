//Here I am setting some variables up for reference later

//these variable will search for an element with the invoked id or tag in my html document
const projectsContainer = document.querySelector('#projects-container')
const form = document.querySelector('#form')
const toggleFormButton = document.querySelector('#add-project')
//here I have my baseURL that will serve as my transport pathway for all of my requests below
const baseURL = `http://localhost:4400/api/projects`
//I'm creating a callback function for when I need to have my requests callback the projects objects as well as an error function I can use below to catch any cases that aren't met
const projectsCallback = ({ data: projects }) => displayProjects(projects)
const errCallback = (err) => console.log(err.res.data)
//here are my endpoints for my backend
const getAllProjects = () => axios.get(baseURL).then(projectsCallback).catch(errCallback)
const addProject = body => axios.post(baseURL, body).then(projectsCallback).catch(errCallback)
const deleteProject = id => axios.delete(`${baseURL}/${id}`).then(projectsCallback).catch(errCallback)


// const editProject = id => axios.put(`${baseURL}/${id}`, {type}).then(projectsCallback).catch(errCallback)

//toggles the form for adding a project
const toggleForm = () => {
     if (form.style.display === "block") {
        form.style.display = "none"
    } else {
        form.style.display = "block"
    }
}
//trying to get the initial add button to toggle
// const toggleAdd = () => {
//     if (toggleFormButton.style.display === "block") {
//        toggleFormButton.style.display = "none"
//    } else {
//        toggleFormButton.style.display = "block"
//    }
// }


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
    const projectBox = document.createElement('div')
    projectBox.classList.add('project-box')

    projectBox.innerHTML = 
    `<iframe width="1046" height="588" src='${project.videoURL}' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="projectBox">
        <p class="title">${project.title}</p>
        <p class="grade">${project.grade}</p>   
        <p class="location">${project.location}</p>
        <p class="area">${project.area}</p> 
        <p class="notes">${project.notes}</p>
    <button id="edit-project" onclick="editProject(${project.id})">EDIT</button>
    </div>
    <button id="delete-project" onclick="deleteProject(${project.id})">REMOVE</button>`

    projectsContainer.appendChild(projectBox)
}

const displayProjects = (arr) => {
    projectsContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        addProjectBox(arr[i])
    }
}

toggleFormButton.addEventListener('click', toggleForm)
// toggleFormButton.addEventListener('submit', toggleAdd)
form.addEventListener('submit', submitHandler)
form.addEventListener('submit', toggleForm)
// form.addEventListener('click', toggleAdd)



const displayProjectBox = (arr) => {
    console.log(arr)
}

getAllProjects()