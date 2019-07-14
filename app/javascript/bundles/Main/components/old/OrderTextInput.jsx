import PropTypes from 'prop-types';
import React from 'react';

export default class OrderTextInput extends React.Component {
    onTextInputChange = (event) => {
        this.props.product[this.props.name] = event.target.value;
        this
            .props
            .updateState();
    };
    render() {
        return (<input
            value={this.props.attr[this.props.name]}
            onChange={this.onTextInputChange}
            className="form-control"
            required/>)
    }
};
