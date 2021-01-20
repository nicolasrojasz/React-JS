import React from 'react'
import Card from './Card'

const Lista1 =(props)=>{

    return(
        <div>
            {props.data.map((datos)=>{

                return(
                    <Card
                    key={datos.key}
                    id={datos.id}
                    link={datos.link}
                    img={datos.img}
                    
                    />
                )

               })         
           }


        </div>

    )
}
export default Lista1

