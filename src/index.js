import './style.css';
import { RenderProjects } from './render';
import { Project } from './projects';
import { ProjectLibrary } from './projectLibrary';

const projectList = new RenderProjects('[data-projects]');
const projects = [
    new Project('Work', null),
    new Project('Family', null)
]
const myProjects = new ProjectLibrary(projects);
const getProjects = myProjects.getProjects();

const newListForm = document.querySelector('[data-new-project-form]');
const newListInput = document.querySelector('[data-new-project-input]')


newListForm.addEventListener('submit', e => {
    e.preventDefault();
    const project = {name: newListInput.value.trim(), tasks: null};

    if (project.name === null || project.name === '') {
        return;
    }

    newListInput.value = null;
    myProjects.addNewProject(project);
    projectList.renderList(getProjects);

    console.table(projects);
})

projectList.renderList(getProjects);