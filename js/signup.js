document.getElementById('signupBtn').addEventListener('click', function() {
    document.getElementById('signupModal').style.display = 'block';
  });
  
  document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('signupModal').style.display = 'none';
  });
  
  window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('signupModal')) {
      document.getElementById('signupModal').style.display = 'none';
    }
  });
  