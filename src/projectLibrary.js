export class ProjectLibrary {
    constructor(project = []) {
        this.projects = project;
    }

    addNewProject(project) {
        this.projects.push(project);
    }

    getProjects() {
        return this.projects;
    }
}