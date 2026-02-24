 summer-chores,
 This project demonstrates how asynchronous operations works using three different approches, callbacks functions, Promises, and async/await in Javascript.
 The project requires a person to complete a list of summer chores in a specific order. Each chore has a set time allowing for asynchronous operation.
 The project incorportes Math.random() to increase or decrease the likely hold a chore would be completed, if not all remainding chores do not execute,
 while ensuring the first chore is completed beore person can fall asleep.
 The callback version, nests each chore function inside the previous one to ensure order execution, this method results in a callback hell making code hard to read.
 The Promise version, chains all the chores using the .then() and .cath() methods instead of nesting the chore functions, thus improving readability. 
 The async/await version, async returns a promise from the promises and await pauses the function until a promise is resolved or rejected, providing a more readiable and maintainable code.

