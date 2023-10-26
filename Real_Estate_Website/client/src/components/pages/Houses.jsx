import React from 'react'
import Layout from '../Layout/Layout'
import "./properties.css"
import useProperties from '../../hooks/useProperties'
import PropertyCard from '../PropertyCard/PropertyCard'
import {PuffLoader} from 'react-spinners'

const Houses = () => {

    //1
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
    
    <div>
        <div>
        <Layout/>
        </div >

        <div className="flexColCenter paddings innerWidth properties-container">

            <div className="paddings felxCenter properties">{
                    data.map((card, i)=> (<PropertyCard card={card} key={i}/>))
            }
                
            </div>

        </div>

        </div>
  )
}

export default Houses