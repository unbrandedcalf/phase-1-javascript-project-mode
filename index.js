fetch('http://localhost:3000/food')
  .then(response => response.json())
  .then(data => {
    data.forEach(food => {
      const foodDiv = document.createElement('div')
      foodDiv.classList.add('card')
      
      const foodName = document.createElement('h2')
      foodName.textContent = food.name
      foodDiv.appendChild(foodName)

      const foodImage = document.createElement('img')
      foodImage.src = food.image
      foodImage.alt = food.name
      foodImage.classList.add('food-avatar')
      foodImage.addEventListener('mouseover', () => {
        displayMessage("My Name is Jeff");
      });
      foodImage.addEventListener('mouseout', () => {
        removeMessage();
      });
      foodDiv.appendChild(foodImage)

      const thumbsUpButton = document.createElement('button');
      thumbsUpButton.classList.add('thumbs-up');
      thumbsUpButton.textContent = 'This One';
      thumbsUpButton.addEventListener('click', function() {
        toggleHighlight(thumbsUpButton);
      });
      foodDiv.appendChild(thumbsUpButton)

      document.body.appendChild(foodDiv)
    })
  })
  
  function displayMessage(foodName) {
    const message = document.createElement('div');
    message.textContent = `${foodName}`;
    message.classList.add('hover-message');
    document.body.appendChild(message);
  }
  
  function removeMessage() {
    const message = document.querySelector('.hover-message');
    if (message) {
      document.body.removeChild(message);
    }
  }

  function toggleHighlight(button) {
    button.classList.toggle("highlight")
  }

  let isMessageDisplayed = false

  document.addEventListener("keydown", function(event) {
    if (event.key === "a") {
      document.getElementById("message").textContent = "Author: Maverick"}
    })
  

