export interface QuoteGenerator {
  statusCode: number
  message: string
  pagination: Pagination
  totalQuotes: number
  data: Quote[]
}

export interface Quote {
  _id: string
  quoteText: string
  quoteAuthor: string
  quoteGenre: QuoteGenre
  __v: number
}

export enum QuoteGenre {
  Age = 'age',
}

export interface Pagination {
  currentPage: number
  nextPage: number
  totalPages: number
}
