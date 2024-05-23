import request from 'superagent'

export async function getGreeting(): Promise<string> {
  const res = await request.get('/api/v1/greeting')
  return res.body.greeting
}


//grab both apis as separate functions, sotre / use data with models, then combine them in GenerateQuote ?
import { Quote } from './models/got.ts'
export async function getGameOfThronesQuote() {
  
  const res = await request.get('https://api.gameofthronesquotes.xyz/v1/random')
  return res.body as Quote
}

export async function getStarWarsQuotes(): Promise<string> {
  // url link below
  const res = await request.get('')
  return res.body
}
//test api random quote

// import { Quote } from './models/test.ts'

// export async function fetchQuoteGenerator() {
//   const res = await request.get(
//     `https://quote-garden.onrender.com/api/v3/quotes/random`,
//   )
//   return res.body as Quote
// }
