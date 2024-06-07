const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = form.querySelector('input[type="text"]').value;
  const password = form.querySelector('input[type="password"]').value;

  if (username === 'admin' && password === '12345') {
    alert('Login bem sucedido!'); 
  } else {
    alert('Nome de usuário ou senha incorretos. Tente novamente.');
  }
});
