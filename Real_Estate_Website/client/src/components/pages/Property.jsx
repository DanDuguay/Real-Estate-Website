import React from 'react'
import Layout from '../Layout/Layout'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import {getProperty} from '../../utils/api'
import { PuffLoader } from 'react-spinners'
import axios from 'axios'
import {deleteProperty} from '../../utils/api'
import { Link } from 'react-router-dom';
import Request from '../RequestToVisit/Request'
import { useState } from 'react'

import "./Property.css";




const Property = () => {
    
    const {pathname} = useLocation()
    const id = pathname.split("/").slice(-1)[0]
    
    const {data, isLoading, isError} = useQuery(["resd", id], ()=>
    getProperty(id))

    const [modalOpened, setModalOpened] = useState(false);

    if(isLoading){
        return(
            <div className='wrapper'>
                <div className="flexCenter paddings">
                    <PuffLoader/>
                </div>
            </div>
        )
    }

    if(isError){
        return(
            <div className='flexCenter paddings'>
                <span>Error while fetching the property details</span>
            </div>
        )
    }

    

   
  return (
    <div className="wrapper flexCenter property-details">
        <Layout/>

        <div className="flexColStart paddings innerWidth property-container">
            <button onClick={()=> deleteProperty(id)}>Delete property</button>

            
        </div>

        <div>
    
        <Link to={`/property/update/${id}`}>
          <button>Update Property</button>
        </Link>

       

       
          
 
        </div>
<div >
<button
                className="button"
                onClick={() => {
                   setModalOpened(true);
                }}
              >
                Request to visit
        </button>
            
                <Request
                opened={modalOpened}
                setOpened={setModalOpened}
                propertyId={id}
                email={data.brokerEmail}
                />
</div>
        

      
    </div>
  )
}

export default Property