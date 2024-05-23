import request from 'superagent'

export async function getGreeting(): Promise<string> {
  const res = await request.get('/api/v1/greeting')
  return res.body.greeting
}


//grab both apis as separate functions, sotre / use data with models, then combine them in GenerateQuote ?

export async function getTrumpQuotes(): promise<string> {
  // url link below
  const res = await request.get('')
  return res.body.quote
}