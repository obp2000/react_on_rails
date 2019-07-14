import React from 'react'
import PropTypes from 'prop-types'
import {Table} from 'reactstrap'
import NumberField from '../Shared/NumberField'
import {PacketWeight, SamplesWeight} from './OrderConsts'
import GetPostCostButton from './Containers/GetPostCostButton'
import Gift from './Gift'
import PacketSelect from './PacketSelect'

const OrderPostal = ({
    post_cost_with_packet,
    post_discount,
    needGift,
    post_cost_with_packet_and_post_discount,
    cost_with_postal_and_post_discount,
    tolalWeight
}) => {
    return <Table size="sm" responsive bordered hover>
        <tbody>
            {needGift && <Gift/>}
            <tr className='d-flex'>
                <td className="col-sm-9">
                    Образцы
                </td>
                <td className="col-sm-1 text-right"></td>
                <td className="col-sm-1 text-right">
                    {SamplesWeight}
                </td>
            </tr>
            <tr className='d-flex'>
                <td className="col-sm-9">
                    Почтовый пакет
                </td>
                <td className="col-sm-1 text-right">
                    <PacketSelect/>
                </td>
                <td className="col-sm-1 text-right">
                    {PacketWeight}
                </td>
            </tr>
            <tr className='d-flex'>
                <td className="col-sm-9">
                    Тариф Почты России&nbsp;
                    <GetPostCostButton tolalWeight={tolalWeight}/>
                </td>
                <td className="col-sm-1 text-right">
                    <NumberField name='post_cost' 
                                 label="Тариф Почты" 
                                 parse={(value) => parseInt(value || 0)}
                                 />
                </td>
                <td className="col-sm-1 text-right"></td>
            </tr>
            <tr className='d-flex'>
                <td className="col-sm-9">
                    Тариф Почты России + пакет
                </td>
                <td className="col-sm-1 text-right">
                    {post_cost_with_packet.toFixed(2)}
                </td>
                <td className="col-sm-1 text-right">
                </td>
            </tr>
            {post_discount > 0 && <tr className='d-flex'>
                <td className="col-sm-9">
                    Скидка на почтовые
                </td>
                <td className="col-sm-1 text-right">
                    -{post_discount.toFixed(2)}
                </td>
                <td className="col-sm-1"></td>
            </tr>}
            <tr className='d-flex'>
                <td className="col-sm-9">
                    Почтовые {post_discount > 0 && 'с учетом скидки'}
                </td>
                <td className="col-sm-1 text-right">
                    <strong>{post_cost_with_packet_and_post_discount.toFixed(2)}</strong>
                </td>
                <td className="col-sm-1 text-right">
                </td>
            </tr>
            <tr className='d-flex'>
                <td className="col-sm-9">
                    <strong>Итого</strong>
                </td>
                <td className="col-sm-1 text-right">
                    <strong>{cost_with_postal_and_post_discount.toFixed(2)}</strong>
                </td>
                <td className="col-sm-1 text-right">
                    <strong>{tolalWeight.toFixed(0)}</strong>
                </td>
            </tr>
        </tbody>
    </Table>
}

OrderPostal.propTypes = {
    PacketWeight: PropTypes.number,
    post_cost_with_packet: PropTypes.number,
    post_discount: PropTypes.number,
    needGift: PropTypes.bool,
    post_cost_with_packet_and_post_discount: PropTypes.number,
    cost_with_postal_and_post_discount: PropTypes.number
}

OrderPostal.defaultProps = {
    post_cost_with_packet: 0,
    post_discount: 0,
    needGift: false,
    post_cost_with_packet_and_post_discount: 0,
    cost_with_postal_and_post_discount: 0
}

export default OrderPostal