import './style.css';
import { RenderProjects } from './render';
import { Project } from './projects';
import { ProjectLibrary } from './projectLibrary';

const LOCAL_STORAGE_PROJECT_KEY = 'project.projects';
let projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];

function save() {
    localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(projects));
}


// Initialize components
const projectList = new RenderProjects('[data-projects]');
const myProjects = new ProjectLibrary(projects);
const getProjects = myProjects.getProjects();



const newListForm = document.querySelector('[data-new-project-form]');
const newListInput = document.querySelector('[data-new-project-input]')


newListForm.addEventListener('submit', e => {
    e.preventDefault();
    const project = {name: newListInput.value.charAt(0).toUpperCase().trim() + newListInput.value.slice(1), tasks: null};

    if (project.name === null || project.name === '') {
        return;
    }

    newListInput.value = null;
    myProjects.addNewProject(project);

    save();

    projectList.renderList(getProjects);

    console.table(projects);
})

projectList.renderList(getProjects);