//3.25 Exportando mais de um componente
import React from 'react'
import ReactDOM from 'react-dom'
//o export default representa o primeiro objeto padrão declarado.
import Primeiro, {Segundo} from './component'

//elementos complexos em react devem ter uma tag que envolva mais de um componente.
//react aceita apenas um componente sendo carregado.
ReactDOM.render(
<div>
    <Primeiro/>
    <Segundo/>
</div>
, document.getElementById('app'))