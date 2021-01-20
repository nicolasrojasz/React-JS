import React from 'react'
import ironman from '../imgs/iron_man1.png'
import spiderman from '../imgs/Spider-Man_Homecoming.jpg'
import venom from '../imgs/venom.jpg'
import Lista1 from '../components/Lista1'
import CategoriaTitulo from '../components/CategoriaTitulo'
import TituloAccion from '../components/TituloAccion'

class Accion extends React.Component{

    constructor(props){
        super(props)
        
        this.state={
            data:[
                {
                    "key":'1',
                    "id":"1",
                    "link":"https://pelis24.app/ver-iron-man-online-espanol-latino-03/",
                    "img":ironman
                },

                {
                    "key":'2',
                    "id":"2",
                    "link":"https://www.pelis24.to/old/peliculas/ver-online-spider-man-homecoming-15/",
                    "img":spiderman
                },
                    
                {
                    "key":'3',
                    "id":"3",
                    "link":"https://pelis24plus.com/pelicula/venom/",
                    "img":venom
                }
                
        ]

        }
    }
    render(){
        return(
            <div>
                 <CategoriaTitulo
                        
                        nombre='Categorias'
                 />

                 <TituloAccion
                 
                        nombre='Acción'
                 
                 />

                 <Lista1 
                        
                        data={this.state.data}
                 />

            </div>
        )
    }




}
export default Accion