export class RenderProjects {
    constructor(listContainer) {
        this.container = document.querySelector(listContainer);
        this.activeIndex = this.getActiveIndexFromStorage() || null;
    }

    renderList(project) {
        this.container.innerHTML = '';

        project.forEach((project, index) => {
            const listElement = document.createElement('li');
            listElement.classList.add('list-name');
            listElement.innerHTML = project.name;

            const icon = this.createIcon('incomplete_circle');
            listElement.prepend(icon);

            if (index === this.activeIndex) {
                listElement.classList.add('active-project');
            }

            listElement.addEventListener('click', () => {
                this.handleSelection(index, listElement);
            });

            this.container.appendChild(listElement);
        });
    }

    createIcon(iconName) {
        const icon = document.createElement('i');
        icon.classList.add('material-icons');
        icon.innerText = iconName;

        return icon;
    }

    handleSelection(index, element) {
        this.activeIndex = index;

        localStorage.setItem('activeProjectIndex', this.activeIndex);

        this.container.querySelectorAll('.list-name').forEach(item => {
            item.classList.remove('active-project');
        });
        element.classList.add('active-project');
    }

    getActiveIndexFromStorage() {
        const storedIndex = localStorage.getItem('activeProjectIndex');
        return storedIndex ? parseInt(storedIndex, 10) : null;
    }
}