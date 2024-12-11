console.log(jQuery ? "jQuery is loaded!" : "jQuery is not loaded.");

$(document).ready(function() {
    $('.nevada').lettering(); // This should split "Hello" into individual spans x chatgpt -- when I first wrote the textillate function, I left this out and didn't understand it needed to be included in the function itself to make textillate work, so ChatGPT helped me with this.
    $('.nevada').textillate({
      in: { effect: 'fadeIn' },
      in: { effect: 'flash' },
      out: { effect: 'fadeOut' },
      out: { effect: 'shake'},
      loop: true
    }); // This should animate the text x chatgpt, modifications to flash & bounce by me
  });

// chatgpt talked about a remove function, I tried it and it didn't work so it was deleted. It ended up being that I needed to remove all the spans in the html around machine disco and my issues in the textillate chatgpt thread resolved. I figured this out on my own.