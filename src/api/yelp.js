import axios from 'axios'

export default axios.create({
    //root url we want to use
    baseURL:'https://api.yelp.com/v3/businesses',
    //pass in a request header
    headers: {
        //api key
        Authorization: 'Bearer bcpT48-Jhd7YG8MFwmhWqQ2zLImfcM9QCdPKrPnph4fO_kt6_VXfJMpDACgIVgLMBDUqCxSJXkMr2OF1I1_tZK_9vlyj2suQ3xP4q8A_d2LYeDGuXVh7PPJ0p12rXnYx'

    }
})

