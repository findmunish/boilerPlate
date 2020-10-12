let message = (process.env.TITLE === undefined) ? `Environment variable ${process.env.TITLE} is not defined`: `process.env.TITLE = ${process.env.TITLE}`
console.log(message)
message = (process.env.API_KEY === undefined) ? `Environment variable ${process.env.API_KEY} is not defined`: `process.env.API_KEY = ${process.env.API_KEY}`
console.log(message)