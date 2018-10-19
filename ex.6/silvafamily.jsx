import React from 'react'
import Member from './member'

export default () => ( //pode-se usar props no lugar de (), como não estou usando propriedades, coloquei (), mas é comum criar o componente com props.
    <div>
        <Member name='Joao' lastName='Silva'/>
        <Member name='Maria' lastName='Silva'/>
        <Member name='José' lastName='Silva'/>
        <Member name='Pedro' lastName='Silva'/>
    </div>
)