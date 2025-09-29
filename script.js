// script.js
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.items');
    const cubes = document.querySelectorAll('.item');
    
    let activeCube = null;
    let offsetX, offsetY;

    // Add mouse event listeners to each cube
    cubes.forEach(cube => {
        cube.addEventListener('mousedown', dragStart);
    });

    function dragStart(e) {
        // Prevent default browser drag behavior
        e.preventDefault();

        // Check if the mousedown event was on a cube
        if (e.target.classList.contains('item')) {
            activeCube = e.target;
            activeCube.classList.add('dragging');

            // Calculate the initial offset from the mouse pointer to the cube's top-left corner
            offsetX = e.clientX - activeCube.offsetLeft;
            offsetY = e.clientY - activeCube.offsetTop;

            // Add global listeners for dragging and dropping
            document.addEventListener('mousemove', drag);
            document.addEventListener('mouseup', dragEnd);
        }
    }

    function drag(e) {
        if (!activeCube) return; // Exit if no cube is being dragged

        // Get container boundaries
        const containerRect = container.getBoundingClientRect();
        const cubeWidth = activeCube.offsetWidth;
        const cubeHeight = activeCube.offsetHeight;

        // Calculate new position of the cube based on mouse movement
        let newX = e.clientX - offsetX;
        let newY = e.clientY - offsetY;

        // Constrain the new position within the container boundaries
        newX = Math.max(0, Math.min(newX, containerRect.width - cubeWidth));
        newY = Math.max(0, Math.min(newY, containerRect.height - cubeHeight));

        // Update the cube's position
        activeCube.style.left = `${newX}px`;
        activeCube.style.top = `${newY}px`;
    }

    function dragEnd(e) {
        if (activeCube) {
            activeCube.classList.remove('dragging');
            activeCube = null;

            // Remove global listeners
            document.removeEventListener('mousemove', drag);
            document.removeEventListener('mouseup', dragEnd);
        }
    }
});
