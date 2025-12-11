// Simple scroll-to-contact demo + console ready
document.addEventListener('DOMContentLoaded', function(){
  var contactLinks = document.querySelectorAll('a[href="#contact"]');
  contactLinks.forEach(function(a){
    a.addEventListener('click', function(e){
      e.preventDefault();
      var footer = document.getElementById('contact');
      if (footer) footer.scrollIntoView({behavior:'smooth'});
    });
  });
  console.log('Life Safety site ready');
});
