const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
  //change theme of website
  document.body.classList.toggle('dark');
  document.querySelector('#navbar').classList.toggle('dark');
  document.querySelector('#footer1').classList.toggle('dark');
});
