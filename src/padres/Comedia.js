import React from 'react'
import american from '../imgs/american-pie_portada.jpg'
import sextillizos from '../imgs/sextillizos-portada.jpg'
import niños from '../imgs/niños_portada.jpg'
import Lista1 from '../components/Lista1'
import TitutloComedia from '../components/TituloComedia'

class Accion extends React.Component{

    constructor(props){
        super(props)
        
        this.state={
            data:[
                {
                    "key":'1',
                    "id":"1",
                    "link":"https://pelis24.app/ver-sextillizos-online-espanol/",
                    "img":sextillizos
                },

                {
                    "key":'2',
                    "id":"2",
                    "link":"https://www.pelis24.fan/movie/1999/american-pie-tu-primera-vez/",
                    "img":american
                },
                    
                {
                    "key":'3',
                    "id":"3",
                    "link":"https://pelis24tv.me/ver-pelicula-pelis24/ninos-grandes",
                    "img":niños
                }
                
        ]

        }
    }
    render(){
        return(
            <div>
 

                 <TitutloComedia
                 
                        nombre='Comedia'
                 
                 />

                 <Lista1 
                        
                        data={this.state.data}
                 />

            </div>
        )
    }




}
export default Accion