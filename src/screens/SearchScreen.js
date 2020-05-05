import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
    console.log('hi there')
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()

    const filterResultsByPrice = (price) => {
        //what sets of results that we want to get back
        //price === '$' || '$$' || '$$$"
        return results.filter(result => {
            return result.price === price
        })
    }
    return (
        // placeholder <> anytime we need to return a group of elements so that it will fit everything on one screen
        <>
            <SearchBar
                term={term}
                // same thing as onTerm={newTerm => setTerm(newTerm)}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {/* look at error message value if its a truthy element then return errorMessage if not then return null */}
            {errorMessage ? <Text> {errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList
                    title="Cost Effective"
                    results={filterResultsByPrice('$')}
                />
                <ResultsList
                    title='Bit Pricier'
                    results={filterResultsByPrice('$$')}
                />
                <ResultsList
                    title='Big Spender'
                    results={filterResultsByPrice('$$$')}
                />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({})

export default SearchScreen