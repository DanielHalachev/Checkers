window.addEventListener('DOMContentLoaded', function() {
  var navLinks = document.getElementsByClassName('nav-link');

  // Function to remove the 'active' class from all navbar links
  function removeAllActiveClasses() {
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.remove('active');
    }
  }

  // Function to add the 'active' class to the current navbar link
  function setActiveLink(linkId) {
    removeAllActiveClasses();
    var link = document.querySelector('.nav-link.'+linkId);
    if (link) {
      link.classList.add('active');
    }
  }

  // Event listener for scroll to detect the current section
  window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('body > div');
    for (var i = 0; i < sections.length; i++) {
      var rect = sections[i].getBoundingClientRect();
      if (rect.top >= 0) {
        setActiveLink(sections[i].id);
        break;
      }
    }
  });
});

