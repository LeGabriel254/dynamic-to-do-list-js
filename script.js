//  Event Listener for Page Load
document.addEventListener('DOMContentLoaded', (Event) => {
  // My code
  const form = document.getElementById('To-Do List Appplication');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
  })
})