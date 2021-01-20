import React from 'react';
import ReactDOM from 'react-dom';
import Accion from './padres/Accion'
import Terror from './padres/Terror'
import Comedia from './padres/Comedia'


const container=document.getElementById('root')

ReactDOM.render(
  <div>
      <Accion/>

      <Terror/>

      <Comedia/>
  
  </div>

       ,container);

