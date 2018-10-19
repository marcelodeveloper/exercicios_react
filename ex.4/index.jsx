import React from 'react'
import ReactDOM from 'react-dom'
import {Primeiro,Segundo} from './component'

//elementos complexos em react devem ter uma tag que envolva mais de um componente.
//react aceita apenas um componente sendo carregado.
ReactDOM.render(
<div>
    <Primeiro/>
    <Segundo/>
</div>
, document.getElementById('app'))