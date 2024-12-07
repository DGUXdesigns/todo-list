import './style.css';
import { renderProjects } from './render';

const projectList = new renderProjects('[data-projects]');
let tags = ['Work', 'Family'];

projectList.renderList(tags);


