const sentence = "hello there from lighthouse labs";

const type = () => {
  for (const i in sentence) {
    setTimeout(() => {
      process.stdout.write(sentence[i]);
    }, i * 50); // <= 1s delay to make it noticeable. Can dial it down later.
  }
  setTimeout(() => {
    console.log("\n");
  }, sentence.length * 50);
};

type();