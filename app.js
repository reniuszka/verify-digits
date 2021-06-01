const codes = document.querySelectorAll('.code');
//add focus
codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9) {
      console.log(e.key);
      //       thanks to that we can enter always max 1 digit :)
      codes[idx].value = '';
      //to go to the next code input
      setTimeout(() => codes[idx + 1].focus(), 10);
    } else if (e.key === 'Backspace') {
      setTimeout(() => codes[idx - 1].focus(), 10);
    }
  });
});
