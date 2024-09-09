const quotes = [
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },

  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },

  {
    text: "Your time is limited don't waste it living someone else's life.",
    author: "Steve Jobs"
  },

  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },

  {
    text: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt"
  },

  {
    text: "Success is not final, failure is not fatal: it's the courage to continue that counts",
    author: "Winston churchill"
  },

  {
    text: "Don,t watch the clock; do what it does. keep going.",
    author: "Sam Levenson"
  },

  {
    text: "You miss 100% of the shots you don't take",
    author: "Wayne Gretzky"
  },

  {
    text: "I think, therefore i am.",
    author: "Rene Descartes"
  },

  {
    text: "Be the change you wish to see in the world.",
    author: "Mahatma Gandhi"
  },

  {
    text: "Do something today that your future self will thank you for",
    author: "Jerry Jr"
  },

  {
    text: "The best way to predict your future is to create it",
    author: "Abraham Lincoin"
  },

  {
    text: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S Lewis"
  },

  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },

  {
    text: "Happiness can be found even in the darkest of times if one only remembers to turn on the light.",
    author: "Albus Dumbledore(J.K Rowling)"
  },

  {
    text: "You are stronger than you seem, braver than you think, and smarter than you think.",
    author: "Christopher"
  },

  {
    text: "The biggest risk is not taking any risk",
    author: "Mark Zuckerberg"
  },

  {
    text: "You don't have to be great to start, but you have to start to be great",
    author: "Zig Ziglar"
  },

  {
    text: "Do what you can with all you have, wherever you are.",
    author: "Theodore Roosevelt"
  },

  {
    text: "Keep your eyes on the stars, and your feet on the ground.",
    author: "Theodore Roosevelt"
  },

  {
    text: "You are never too young to lead and never too old to learn.",
    author: "Jerry Jr"
  },
];

const quoteText = document.getElementById('quote-text');

const authorText = document.getElementById('author-text');

const button = document.getElementById('quote-btn');



button.addEventListener('click', () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  showQuote(randomQuote);
});



function showQuote(quote) {
  //Reset animation by re-adding the animation property
    quoteText.style.animation = 'none';
    authorText.style.animation = 'none';

  //Trigger reflow so animaation restarts
    quoteText.offsetHeight;
    authorText.offsetHeight;

  //Set new quote and author
    quoteText.innerText = `"${quote.text}"`;
    authorText.textContent = `${quote.author}`;

  //Reapply animation
    quoteText.style.animation = '';
    authorText.style.animation = '';

}
