function genders(a, b) {
  y = parseFloat(document.getElementById("quantity").value);
  var answer = document.getElementById("ladytotalprice");
  answer.value = 150.95 * y;
  x = parseFloat(document.getElementById("quantity2").value);
  var answer1 = document.getElementById("menstotalprice");
  answer1.value = 180.95 * x;
  a = parseFloat(document.getElementById("ladytotalprice").value);
  b = parseFloat(document.getElementById("menstotalprice").value);
  var answer2 = document.getElementById("total");
  answer2.value = a + b;
}
