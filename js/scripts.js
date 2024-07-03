document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('mouseover', function() {
            link.style.transform = 'scale(1.1)';
            link.style.transition = 'transform 0.3s';
        });

        link.addEventListener('mouseout', function() {
            link.style.transform = 'scale(1)';
        });
    });
});
