console.log(jQuery ? "jQuery is loaded!" : "jQuery is not loaded.");

$(document).ready(function() {
    $('.nevada').lettering(); // This should split "Hello" into individual spans x chatgpt
    $('.nevada').textillate({
      in: { effect: 'fadeIn' },
      in: { effect: 'flash' },
      out: { effect: 'fadeOut' },
      out: { effect: 'shake'},
      loop: true
    }); // This should animate the text x chatgpt, modifications to flash & bounce by me
  });

