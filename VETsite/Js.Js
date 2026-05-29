document.addEventListener
("DOMContentLoaded", function(){
const elementos = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) =>
    {
    entries.forEach(entry =>
        {
         if (entry.isIntersecting)
            {entry.target.classList.add('aparecer');
            observer.unobserve(entry.target);} 

        else {entry.target.classList.remove('aparecer');}

        });
    },
    { threshold: 0.1 }); 
      elementos.forEach(el => observer.observe(el));
});
