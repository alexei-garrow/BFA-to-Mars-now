
import request from 'superagent'
import { useQuery } from '@tanstack/react-query' 
import { QuoteGenerator, Quote } from '../../client/models/test'
import {useRef} from 'react'

// import request from 'superagent'
import { getGameOfThronesQuote } from '../apiClient.ts'


const restartAnimation = (element) => {

if(element){
    element.classList.remove('typewriter');

    void element.offsetWidth


    element.classList.add('typewriter')
  }
  
}


//  export default function GenerateQuote() {
//     const typingRef = useRef(null)
//     const { data, isPending, isFetching, isError, error, refetch } =
//     GenerateRandomQuote()
//     const randomQuote: Quote | undefined = data?.data[0]
// function GenerateRandomQuote() {
//     return useQuery({
//         queryKey: ['quotes'],
//         queryFn: async () => {
//             const res = await request.get('https://quote-garden.onrender.com/api/v3/quotes/random')
//             return res.body as QuoteGenerator
//         }
//     })
// }

//fall back idea we do two buttons one for each quote / api. We put them in seperate div's and have them display in a row.a


//Main idea create a randomiser function, which decides which api to call and display.


export default function GenerateQuote() {
    const { data, isPending, isFetching, isError, error, refetch } = useQuery(
        {
            queryKey: ['gameOfThronesQuote'],
            queryFn: getGameOfThronesQuote,
        }
    )
    if (isPending) {
        return <p>Loading...</p>
    }

    if (isError) {
        return <p>{String(error)}</p>
    }

    return (
        <>
            <h2>How to make your first 100k</h2>
            {data.sentence && (
                <>
                    <p>{data.sentence}</p>
                </>
            )
            }

            {isFetching && <p></p>}
            <button onClick={() => refetch()}>Click Me! </button>
        </>

    )
}
 