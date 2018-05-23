window.onload = function refreshWord() {
  setInterval(function randomWord() {
    const words = ['Engineer', 'Developer', 'Illustrator', 'Cyclist', 'Artist'];
    const randomGenerator = Math.floor(Math.random() * words.length);
    document.getElementById('textswap').innerHTML = words[randomGenerator];
  }, 1000);
};
