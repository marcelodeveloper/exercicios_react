import React from 'react'
//o metodo React.cloneElement(,) funciona paenas para um unico MediaElementAudioSourceNode, nao para multiplos elementos filhos.

export default props =>(
    <div>
        <h1>Família</h1>
        {React.cloneElement(props.children,{...props})}
    </div>
)