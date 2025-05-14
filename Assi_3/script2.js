function generateResume() {
  // Get values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const summary = document.getElementById('summary').value;
  const skills = document.getElementById('skills').value.split(',');
  const experience = document.getElementById('experience').value;
  const education = document.getElementById('education').value;

  // Populate resume output
  document.getElementById('r-name').innerText = name;
  document.getElementById('r-email-phone').innerText = `${email} | ${phone}`;
  document.getElementById('r-summary').innerText = summary;

  const skillsList = document.getElementById('r-skills');
  skillsList.innerHTML = '';
  skills.forEach(skill => {
    const li = document.createElement('li');
    li.innerText = skill.trim();
    skillsList.appendChild(li);
  });

  document.getElementById('r-experience').innerText = experience;
  document.getElementById('r-education').innerText = education;

  // Show the resume
  document.getElementById('resume-output').style.display = 'block';
}
