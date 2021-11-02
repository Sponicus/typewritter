const sentence = "hello there from lighthouse labs";

const typewritter = (string) => {
  let x = 0;
  for (const word of sentence) {
    for (const letter of word) {
      setTimeout(() => {
        process.stdout.write(letter);
      },x += 50);      
    }
    //here
  }
  setTimeout(()=> {console.log('\n')},x += 50);
}

typewritter(sentence);