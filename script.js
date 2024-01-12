const submitForm = (event) => {
  event.preventDefault();
  const q1 = document.querySelector('input[name="q1"]:checked').value;
  const q2 = document.querySelector('input[name="q2"]:checked').value;
  const q3 = document.querySelector('input[name="q3"]:checked').value;

  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSeGq1vDNJlefZVCU6D8-QuH3hwoNDv0EKjNRlNUDDpNu3kuTA/formResponse";

  const preFilledUrl =
    formUrl +
    "?entry.633102101=" +
    encodeURIComponent(q1) +
    "&entry.1519447957=" +
    encodeURIComponent(q2) +
    "&entry.588953286=" +
    encodeURIComponent(q3);

  window.location.href = preFilledUrl;
};
