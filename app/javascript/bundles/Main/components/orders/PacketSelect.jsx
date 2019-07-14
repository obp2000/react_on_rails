import React from 'react'
import {Field} from 'redux-form'
import {Packets} from './OrderConsts'

const PacketSelect = () => <Field
    name="packet"
    component="select"
    defaultValue={0}
    parse={(value) => parseInt(value || 0)}>
    <option />
    {Packets.map((packet, index) => <option key={index} value={packet}>{packet}</option>)}
</Field>

export default PacketSelect