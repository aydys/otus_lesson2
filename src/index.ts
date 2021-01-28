const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (): Promise<null> => 
  new Promise((resolve) => {
    // rl.question("> ", (answer: string) => {
    //   console.log(`Result: ${answer}`)
    // })
    
    resolve(null)
  })


async function app(): Promise<null> {
  while (true) {
    await question()
  }
}

app()