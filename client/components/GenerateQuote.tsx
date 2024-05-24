import request from 'superagent'
import { useQuery } from '@tanstack/react-query' 
import { QuoteGenerator, Quote } from '../../client/models/test'
import {useRef} from 'react'

const restartAnimation = (element) => {

if(element){
    element.classList.remove('typewriter');

    void element.offsetWidth


    element.classList.add('typewriter')
  }
  
}

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
    const typingRef = useRef(null)
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
           <div ref={typingRef} className='typewriter-wrapper starwars'>
            <div className= 'typewriter bubble'>
             <p >{randomQuote.quoteText}</p>  
             </div>         
           </div>           
          </>
        )
        }     
        
        {isFetching && <p></p>}
        <button onClick={() => {refetch(); restartAnimation(typingRef.current)}}>Click Me! </button>
        </>
    )
 }