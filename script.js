// Example JavaScript to dynamically load projects (basic concept)
document.addEventListener('DOMContentLoaded', function() {
    // Imagine you have an array of projects or fetch them from an API
    const projects = [
        { title: 'Project 1', description: 'Project 1 description...', link: 'project-link.html' },
        { title: 'Project 2', description: 'Project 2 description...', link: 'project-link.html' },
        // Add more projects here
    ];

    const projectsSection = document.getElementById('projects');

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';
        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}">Learn more</a>
        `;
        projectsSection.appendChild(projectDiv);
    });
});
