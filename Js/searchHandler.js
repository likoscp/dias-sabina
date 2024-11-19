document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var searchQuery = document.getElementById('searchQuery').value;
    window.location.href = `/dias-sabina/docs/searchPage.html?search=${encodeURIComponent(searchQuery)}`;
    
  });