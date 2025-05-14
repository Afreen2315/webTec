function generateMarksheet() {
  const name = document.getElementById('student-name').value;
  const maths = parseInt(document.getElementById('maths').value) || 0;
  const science = parseInt(document.getElementById('science').value) || 0;
  const english = parseInt(document.getElementById('english').value) || 0;
  const computer = parseInt(document.getElementById('computer').value) || 0;
  const history = parseInt(document.getElementById('history').value) || 0;

  const total = maths + science + english + computer + history;
  const percentage = (total / 500 * 100).toFixed(2);

  let grade = '';
  if (percentage >= 90) grade = 'A+';
  else if (percentage >= 80) grade = 'A';
  else if (percentage >= 70) grade = 'B';
  else if (percentage >= 60) grade = 'C';
  else if (percentage >= 50) grade = 'D';
  else grade = 'F';

  // Display output
  document.getElementById('r-name').innerText = name;
  document.getElementById('r-total').innerText = total + ' / 500';
  document.getElementById('r-percentage').innerText = percentage;
  document.getElementById('r-grade').innerText = grade;
  document.getElementById('output').style.display = 'block';
}
