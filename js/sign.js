document.getElementById('signinBtn').addEventListener('click', function() {
    document.getElementById('signinModal').style.display = 'block';
  });
  
  document.getElementsByClassName('closee')[0].addEventListener('click', function() {
    document.getElementById('signinModal').style.display = 'none';
  });
  
  window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('signinModal')) {
      document.getElementById('signinModal').style.display = 'none';
    }
  });
  