document.querySelectorAll('.form-example form').forEach(function (form) {
  const result = form.querySelector('output');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    result.textContent = 'Форма заполнена. Данные остались в браузере.';
  });
  form.addEventListener('reset', function () {
    result.textContent = '';
  });
});
