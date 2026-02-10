function generateResume() {
  r_name.innerText = name.value;
  r_address.innerText = address.value;
  r_phone.innerText = phone.value;
  r_email.innerText = email.value;
  r_linkedin.innerText = linkedin.value;

  r_summary.innerText = summary.value;
  r_experience.innerText = experience.value;
  r_education.innerText = education.value;
  r_skills.innerText = skills.value;
}

function loadPhoto(event) {
  r_photo.src = URL.createObjectURL(event.target.files[0]);
}

function downloadPDF() {
  html2pdf().from(document.getElementById("resume")).save("resume.pdf");
}
