import request from 'superagent'
import { useQuery } from '@tanstack/react-query'
import { getGameOfThronesQuote } from '../apiClient.ts'
import { Quote } from '../../client/models/got.ts'


// function GenerateRandomQuote() {
//     return useQuery({
//         queryKey: ['quotes'],
//         queryFn: async () => {
//             const res = await request.get('https://quote-garden.onrender.com/api/v3/quotes/random')
//             return res.body as QuoteGenerator
//         }
//     })
// }

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
            <h2>Random Quote For You</h2>
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