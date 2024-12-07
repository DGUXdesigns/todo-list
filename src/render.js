export class renderProjects {
    constructor(listContainer) {
        this.container = document.querySelector(listContainer);
        this.activeIndex = null
    }

    renderList(project) {
        this.container.innerHTML = '';

        project.forEach((project, index) => {
            const listElement = document.createElement('li');
            listElement.classList.add('list-name');
            listElement.innerHTML = project;

            const icon = this.createIcon('incomplete_circle');
            listElement.prepend(icon);

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

        this.container.querySelectorAll('.list-name').forEach(item => {
            item.classList.remove('active-project');
        });
        element.classList.add('active-project');
    }
}