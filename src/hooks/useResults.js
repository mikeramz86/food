import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

export default () => {
    //Extracting Hook Logic: 1. Get everything related from the api
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    //helper function to initiate a request
    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                //parameters we want to grab from the data
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: {
                        city: 'portland',
                        state: 'OR'
                    }
                }
            })
            //when changing state we add that data to it
            setResults(response.data.businesses)
        } catch (err) {
            setErrorMessage('Something went wrong')

        }

    }

    //call searchApi component is firt rendered. BAD CODE! It set you in an infinite loop of calls
    // searchApi('pasta')
    useEffect(() => {
        searchApi('pasta')
    }, [])

    //Extracting Hook Logic: 2. Look at JSX Block that is needed. Return thing that are needed in the component
    //inside the array
    return [searchApi, results, errorMessage]
}