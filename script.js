function validateForm() {
  var age = document.getElementById('age');
  var height = document.getElementById('height');
  var weight = document.getElementById('weight');
  var female = document.getElementById('female');
  var male = document.getElementById('male');

  if (
    age.value == '' ||
    height.value == '' ||
    weight.value == '' ||
    (male.checked == false && female.checked == false)
  ) {
    alert('All fields are required!');
  } else {
    calculate(age, height, weight, male, female);
  }
}

function calculate(age, height, weight, male, female) {
  var results = document.getElementById('result');
  results.innerHTML = '';
  var p = [age.value, height.value, weight.value];
  if (male.checked) {
    p.push('Male');
  } else if (female.checked) {
    p.push('Female');
  }

  var bmi = (Number(p[2]) / Number(p[1]) / Number(p[1])) * 10000;
  var result = '';
  var highlighter = '';
  if (bmi < 18.5) {
    result = 'Underweight';
    highlighter = '#00008B';
  } else if (18.5 <= bmi && bmi <= 24.99) {
    result = 'Healthy';
    highlighter = '#008000';
  } else if (25 <= bmi && bmi <= 29.99) {
    result = 'Overweight';
    highlighter = '#FDD017';
  } else if (30 <= bmi && bmi <= 34.99) {
    result = 'Obese';
    highlighter = '#FF6700';
  } else if (35 <= bmi) {
    result = 'Extremely obese';
    highlighter = '#FF0000';
  }

  var h1 = document.createElement('h1');
  var h3 = document.createElement('h3');
  var br = document.createElement('BR');
  var br1 = document.createElement('BR');
  var br2 = document.createElement('BR');
  var br3 = document.createElement('BR');

  var r = document.createTextNode(
    ' and Your BMI is ' + parseFloat(bmi).toFixed(1)
  );
  var g = document.createTextNode('Gender: ' + p[3]);
  var a = document.createTextNode('Age: ' + p[0]);
  var h = document.createTextNode('Height: ' + p[1] + ' cm');
  var w = document.createTextNode('Weight: ' + p[2] + ' kg');

  h1.innerHTML =
    "You're <span class='highlighter' style='color:" +
    highlighter +
    "'>" +
    result +
    '</span>';

  h1.appendChild(r);
  h3.appendChild(g);
  h3.appendChild(br);
  h3.appendChild(a);
  h3.appendChild(br1);
  h3.appendChild(h);
  h3.appendChild(br2);
  h3.appendChild(w);
  h3.appendChild(br3);

  results.appendChild(h1);
  results.appendChild(h3);
}
