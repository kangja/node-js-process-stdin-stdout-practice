// let questions = ["INITIAL PRICE <ticker> <price>"];

let questions = [
  "What is your name?",
  "What is your fav hobby?",
  "What is your preferred programming language?",
];

let answers = [];

function ask(i) {
  //   process.stdout.write("hello ");
  //   process.stdout.write("World \n\n\n\n");

  process.stdout.write(`\n\n\n\n ${questions[i]}`);
  process.stdout.write(" > ");
}

//when the user types something into the data, fire the event
process.stdin.on("data", function (data) {
  // echoes the data I've entered back to the screen.
  //   process.stdout.write("\n" + data.toString().trim() + "\n");

  // save it to the answers array.
  answers.push(data.toString().trim());

  //   if there are more questions to ask then answers, then keep asking. If not exit the process.
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    //   kill the process and will prompt use to the terminal prompt.
    process.exit();
  }
});

// listen for an exit event. display answers back to the user.
process.on("exit", function () {
  // adding some padding/space
  process.stdout.write("\n\n\n\n");
  process.stdout.write(
    `Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later`
  );
  // adding some padding/space
  process.stdout.write("\n\n\n\n");
});

ask(0);
