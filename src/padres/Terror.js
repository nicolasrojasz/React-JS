import React from 'react'
import annabelle from '../imgs/Annabelle-portada.jpg'
import demonio from '../imgs/Insidous3-portada.jpg'
import conjuro from '../imgs/el-conjuro-portada.jpg'
import Lista1 from '../components/Lista1'
import TituloTerror from '../components/TituloTerror'

class Accion extends React.Component{

    constructor(props){
        super(props)
        
        this.state={
            data:[
                {
                    "key":'1',
                    "id":"1",
                    "link":"https://pelis24.app/ver-annabelle-2-la-creacion-2017-online-espanol-latino/",
                    "img":annabelle
                },

                {
                    "key":'2',
                    "id":"2",
                    "link":"https://pelis24.app/ver-la-noche-del-demonio-capitulo-3-online-espanol-latino-02/",
                    "img":demonio
                },
                    
                {
                    "key":'3',
                    "id":"3",
                    "link":"https://pelis24.gratis/pelicula/el-conjuro/",
                    "img":conjuro
                }
                
        ]

        }
    }
    render(){
        return(
            <div>
 

                 <TituloTerror
                 
                        nombre='Terror'
                 
                 />

                 <Lista1 
                        
                        data={this.state.data}
                 />

            </div>
        )
    }




}
export default Accion