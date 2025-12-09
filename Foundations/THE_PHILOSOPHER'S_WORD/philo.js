const say_id = document.getElementById("say");
const word_id = document.getElementById("word");

let philo_word = Array.of("Plato: Wise men speak because they have something to say; fools because they have to say something.",
"Socrates: The unexamined life is not worth living.",
"Aristotle: Happiness is the activity of the soul in accordance with virtue.",
"Descartes: I think, therefore I am.",
"Nietzsche: What does not kill me makes me stronger.",
"Spinoza: Freedom is the recognition of necessity.",
"Kant: Dare to know! (Sapere aude!)",
"Epictetus: It’s not what happens to you, but how you react to it that matters.",
"Marcus Aurelius: Your life is what your thoughts make it.",
"Confucius: The future of a nation depends on the education of its youth.",
"Schopenhauer: A man is what he is, not what he has.",
"Lao Tzu: A journey of a thousand miles begins with a single step.",
"Heraclitus: No man ever steps in the same river twice.",
"Pascal: The heart has its reasons which reason knows nothing of.",
"Wittgenstein: The limits of my language mean the limits of my world.");

say_id.addEventListener("click", function(){
    let num = Math.floor(Math.random() * 15); //math random choose a random number, * 15 means 0 to 14, floor means 3,5 -> 4 | 2.3 -> 2
    word_id.textContent = philo_word[num];
});