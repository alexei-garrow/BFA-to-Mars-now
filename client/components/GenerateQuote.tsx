import request from 'superagent'
import { useQuery } from '@tanstack/react-query' 
import { QuoteGenerator } from '../../client/models/test'



function GenerateRandomQuote() {
    return useQuery({
        queryKey: ['quotes'],
        queryFn: async () => {
            const res = await request.get('https://quote-garden.onrender.com/api/v3/quotes/random')
            return res.body as QuoteGenerator
        }
    })
      
}
 export default function GenerateQuote() {
    const { data, isPending, isFetching, isError, error, refetch } =
    GenerateRandomQuote()
    const randomQuote: Quote | undefined = data?.data[0]

    if (isPending) {
        return <p>Loading...</p>
    }

    if (isError) {
        return <p>{String(error)}</p>
    }

    return (
        <>
        <h2>Random Quote For You</h2>
       {randomQuote && ( 
           <> 
            <p>{randomQuote.quoteText}</p>
          </>
        )
        }     
        
        {isFetching && <p></p>}
        <button onClick={() => refetch()}>Click Me! </button>
        </>
    )
 }