function handleNotify (m) {
  if (m == "search") alert("You're trying to search, Website is under construction");
  document.querySelector('input').value = '';
}

const handleNewsPaper =() => {
  alert("You've subscribed to our newspaper");
  document.querySelector('input').value = '';

}
const handleSendMessage =() => {
  alert("Thank you for sending us you message.");
  document.querySelector('input').value = '';

}