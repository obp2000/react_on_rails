import React from 'react'
import {Alert} from 'reactstrap'
import TextField from '../Shared/TextField'
import {GiftWeight} from './OrderConsts'

const Gift = () => {
    return <tr className='d-flex'>
        <td className="col-sm-2">
            <Alert color="danger">
                Подарок!
            </Alert>
        </td>
        <td className="col-sm-7">
            <TextField name='gift' label="Подарок"/>
        </td>
        <td className="col-sm-1 text-right"></td>
        <td className="col-sm-1 text-right">
            {GiftWeight}
        </td>
    </tr>
}

export default Gift