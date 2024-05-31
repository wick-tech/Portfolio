// JavaScript
document.addEventListener("DOMContentLoaded", function () {
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('.nav-link');
    menuItem.forEach(item => {
      if(item.href === currentLocation) {
        item.classList.add('active');
      }
    });
  });
  