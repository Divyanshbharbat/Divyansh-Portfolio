document.getElementById('resumeForm').addEventListener('submit', function (e) {
  e.preventDefault();

  document.getElementById('rName').innerText = document.getElementById('fullName').value;
  document.getElementById('rEmail').innerText = document.getElementById('email').value;
  document.getElementById('rPhone').innerText = document.getElementById('phone').value;
  document.getElementById('rSkills').innerText = document.getElementById('skills').value;
  document.getElementById('rExperience').innerText = document.getElementById('experience').value;
  document.getElementById('rEducation').innerText = document.getElementById('education').value;
});

function downloadPDF() {
  const element = document.getElementById('resumePreview');
  html2pdf().from(element).save('resume.pdf');
}
