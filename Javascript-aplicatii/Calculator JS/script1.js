function insert(num) {
  document.form.ecran.value = document.form.ecran.value + num;
}
function equal(exp) {
  var exp = document.form.ecran.value;
  if (exp) {
    document.form.ecran.value = eval(exp);
  }
}
function backspace() {
  var exp = document.form.ecran.value;
  document.form.ecran.value = exp.substring(0, exp.length - 1);
}
