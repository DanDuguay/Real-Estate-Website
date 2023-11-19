import React, { useState } from 'react'
import Layout from '../Layout/Layout'
//import "./properties.css"
import useProperties from '../../hooks/useProperties'
import PropertyCard from '../PropertyCard/PropertyCard'
import {PuffLoader} from 'react-spinners'
import Searching from '../Searching/Searching'


const Houses = () => {

    const [filter, setFilter] = useState("")

    const {data, isError, isLoading} = useProperties()
    console.log(data)
    
    if(isError){
        return (
            <div>
                Error while fetching data
            </div>
        )
    }

    if(isLoading){
        return(
            <div className="wrapper flexCenter">
                <PuffLoader/>
            </div>
        )
    }

    
  return (
    
    <div className='propertiesBackground'>
        <div>
        <Layout/>
        </div >

        <div className="flexColCenter paddings innerWidth properties-container">
            <Searching filter={filter} setFilter={setFilter}/>
            <div className="paddings felxCenter properties">{

                    data
                    .filter((property) =>
                     property.title.toLowerCase().includes(filter.toLowerCase()) ||
                     property.city.toLowerCase().includes(filter.toLowerCase()) ||
                     property.country.toLowerCase().includes(filter.toLowerCase())
                     )
                    .map((card, i)=> 
                    (<PropertyCard card={card} key={i}/>)
                    )
            }
                
            </div>

        </div>

    </div>
  )
}

export default Houses