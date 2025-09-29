document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('container');
  const cubes = document.querySelectorAll('.cubes');
  
  let activeCube = null;
  let offsetX = 0;
  let offsetY = 0;
	
  // Listen for mouse down on any cube
  cubes.forEach(cube => {
    cube.addEventListener('mousedown', (e) => {
      // Find the parent cube element, in case a nested element is clicked
      const targetCube = e.target.closest('.cube');
      if (!targetCube) return;

      activeCube = targetCube;
      activeCube.classList.add('dragging');

      // Set the cube's position to 'absolute' for free movement
      // and retain its position from the grid layout
      const rect = activeCube.getBoundingClientRect();
      activeCube.style.position = 'absolute';
      activeCube.style.left = `${rect.left - container.getBoundingClientRect().left}px`;
      activeCube.style.top = `${rect.top - container.getBoundingClientRect().top}px`;

      // Calculate the initial offset of the mouse from the cube's top-left corner
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;

      e.preventDefault(); // Prevents default browser drag behavior
    });
  });

  // Listen for mouse move on the document to track the dragging
  document.addEventListener('mousemove', (e) => {
    if (!activeCube) return;

    // Get the boundaries of the container
    const containerRect = container.getBoundingClientRect();
    const cubeRect = activeCube.getBoundingClientRect();

    // Calculate the new potential position of the cube relative to the container
    let newLeft = e.clientX - containerRect.left - offsetX;
    let newTop = e.clientY - containerRect.top - offsetY;

    // Constrain the cube's movement within the container boundaries
    newLeft = Math.max(0, Math.min(newLeft, containerRect.width - cubeRect.width));
    newTop = Math.max(0, Math.min(newTop, containerRect.height - cubeRect.height));

    // Apply the new position
    activeCube.style.left = `${newLeft}px`;
    activeCube.style.top = `${newTop}px`;
  });

  // Listen for mouse up on the document to stop dragging
  document.addEventListener('mouseup', () => {
    if (activeCube) {
      activeCube.classList.remove('dragging');
      activeCube = null;
    }
  });
});