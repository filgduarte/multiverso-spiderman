function includeHTML() {
    const includeContainers = document.getElementsByClassName("include-html");

    for (container of includeContainers) {
        const file = container.getAttribute("data-include");
        
        fetch(file)
            .then(response => {
                return response.text();
            })
            .then(data => {
                container.innerHTML = data;
            });
    }
}

document.addEventListener("DOMContentLoaded", includeHTML, false);