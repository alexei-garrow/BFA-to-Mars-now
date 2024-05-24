import request from 'superagent'
import { Quote } from './models/got'

export async function getGameOfThronesQuote() {
  
  const res = await request.get('https://api.gameofthronesquotes.xyz/v1/random')
  return res.body as Quote
}

// export async function getStarWarsQuotes() {
 
//   const res = await request.get('')
//   return res.body as 
// }

//test api random quote

// import { Quote } from './models/test.ts'

// export async function fetchQuoteGenerator() {
//   const res = await request.get(
//     `https://quote-garden.onrender.com/api/v3/quotes/random`,
//   )
//   return res.body as Quote
// }
