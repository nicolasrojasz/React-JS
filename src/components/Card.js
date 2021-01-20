import React from 'react'

class Card extends React.Component{

    render(){
        return(

            <div className="contenedor">
                 
                        <div className="col-6">
                            <a href={this.props.link}>
                                 <img src={this.props.img} className="float-right" />
                                 {/*se llama la imagen a traves se las props*/}
                            </a> 
                      
                    </div>
            </div>

        )
    }


}

export default Card