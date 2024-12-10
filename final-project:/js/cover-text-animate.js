console.log(jQuery ? "jQuery is loaded!" : "jQuery is not loaded.");

// $(document.querySelector('.nevada span')).textillate({ 
//     autoStart: true,
//     in: { effect: 'flash' },
//     out: { effect: 'bounce', sync: true },
//     loop: true
// });

$(document).ready(function() {
    $('.nevada').lettering(); // This should split "Hello" into individual spans
    $('.nevada').textillate({
      in: { effect: 'fadeIn' },
      in: { effect: 'flash' },
      out: { effect: 'fadeOut' },
      out: { effect: 'bounce'},
      loop: true
    }); // This should animate the text
  });