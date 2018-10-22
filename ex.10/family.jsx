import React from 'react'
import { childrenWithProps } from '../utils/reactUtils'
//a expressão dentro de chaves {} é chamada quando eu  quero acessar uma funçao do meu arquivo reactUtils.

export default props =>(
    <div>
        <h1>Família</h1>
        { childrenWithProps(props.children, props) }
    </div>
)