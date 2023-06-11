
    // Get the containers
    const firstContainer = document.getElementById('first-container');
    const secondContainer = document.getElementById('second-container');
    const successMessage = document.querySelector('.success-message');
    const resetButton = document.querySelector('.reset-button');

    let draggedItem = null;

    firstContainer.addEventListener('dragstart', (e) => {
      draggedItem = e.target;
      e.target.classList.add('dragging');
    });

    firstContainer.addEventListener('dragend', (e) => {
      e.target.classList.remove('dragging');
    });
    //Drag over event handler
    secondContainer.addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    secondContainer.addEventListener('drop', (e) => {
      e.preventDefault();
      secondContainer.appendChild(draggedItem);
      successMessage.style.display = 'block';
    });
    //Reset containers and remove success message
    function resetContainers() {
      secondContainer.innerHTML = '';
      successMessage.style.display = 'none';
      resetButton.blur();
    }
