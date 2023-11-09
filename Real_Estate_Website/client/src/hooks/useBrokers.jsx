import React from 'react'
import {useQuery} from 'react-query'
import { getAllProperties } from '../utils/api'

const useBrokers = () => {

    const {data, isError, isLoading, refetch} = useQuery(
        "allBrokers", getAllBrokers, {refetchOnWindowFocus: false}
    )

  return {
    data, isError, isLoading, refetch
  }
}

export default useBrokers;