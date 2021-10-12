/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet(time){
  const hour = parseInt(time.split(':')[0])
  if (hour < 12) {
    return 'Good Morning'
  } else if (hour > 18){
    return 'Good Evening'
  } else {
    return 'Good Afternoon'
  }
}

/* Write your implementation of greet() */

function displayMessage(message){
  const greetingNode = document.getElementById("greeting")
  greetingNode.innerHTML = message
}

/* Write your implementation of displayMessage() */
