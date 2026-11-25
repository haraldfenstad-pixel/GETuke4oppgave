function getAge(birthDate) {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const birthdayPassed =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());

  if (!birthdayPassed) {
    age--;
  }

  return age;
}

const birthdateInput = document.getElementById("birthdate");
const ageOutput = document.getElementById("age");

birthdateInput.addEventListener("change", function () {
  if (!birthdateInput.value) {
    ageOutput.textContent = "";
    return;
  }

  const birthDate = new Date(`${birthdateInput.value}T00:00:00`);
  const myAge = getAge(birthDate);

  ageOutput.textContent = `Du er ${myAge} år gammel.`;

  if (myAge >= 18) {
    ageOutput.textContent += " Du er for gammel til å delta på våre klubbhus.";
  }

  if (myAge >= 0 && myAge <= 6) {
    ageOutput.textContent += " Du er for ung til å delta på våre klubbhus.";
  }

  if (myAge >= 7 && myAge <= 12) {
    ageOutput.textContent += " Du kan delta på vårt klubbhus for barneskolen.";
  }

  if (myAge >= 13 && myAge <= 17) {
    ageOutput.textContent += " Du kan delta på vårt klubbhus for ungdom.";
  }
});