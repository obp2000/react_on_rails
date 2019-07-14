import React from 'react'
import loading_spinner from './loading_spinner.gif'

const Loading = () => {
    return (
        <tr>
            <td>
                <img src={loading_spinner} width="20px"/>
            </td>
        </tr>
    )
}

export default Loading
