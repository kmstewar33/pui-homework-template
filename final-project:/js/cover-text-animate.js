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

// $(document).ready(function() {
//     $('.nevada').lettering(); // This should split "Hello" into individual spans x chatgpt
//     $('.nevada').textillate({
//         autoStart: true,
//         in: { effect: 'flash', shuffle: false }, // Shuffle off to preserve order
//         out: { effect: 'bounce', sync: true },
//         loop: true,
//         minDisplayTime: 2000,
//         initialDelay: 0,
//         autoStart: true,
//         callback: function () {
//             console.log("Animation completed!");
//         },
//         selector: '.color-span' // Apply Textillate to your custom spans
//     });
// };
