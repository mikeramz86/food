import axios from 'axios'

export default axios.create({
    //root url we want to use
    baseURL:'https://api.yelp.com/v3/businesses',
    //pass in a request header
    headers: {
        //api key
        Authorization: ''

    }
})

