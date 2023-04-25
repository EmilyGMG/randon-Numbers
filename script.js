function randomNumbers(number) {
  var resp = document.getElementById('resp');

  const numbers = [];

  while (numbers.length < number) {
    const randomNumber = Math.floor(Math.random() * number) + 1;
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }

  return resp.innerHTML = numbers.join(', ');
}


