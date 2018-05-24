window.onload = function refreshWord() {
  setInterval(function randomWord() {
    const words = ['Engineer', 'Developer', 'Illustrator', 'Cyclist', 'Artist'];
    const randomGenerator = Math.floor(Math.random() * words.length);
    document.getElementById('textswap').innerHTML = words[randomGenerator];
  }, 2000);
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
