const sentence = "hello there from lighthouse labs";
let i = 0
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char + "\n");
  }, i += 50);
}