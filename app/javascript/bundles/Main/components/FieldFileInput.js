import PropTypes from 'prop-types'
import React from 'react'

const FieldFileInput = ({input: {
        onChange
    }, className}) => {
    return (
        <div>
            <div>
                <input
                    type='file'
                    accept='.jpg, .png, .jpeg'
                    className={className}
                    onChange={(e) => onChange(e.target.files[0])}/>
            </div>
        </div>
    )
}

const {number, string, func, bool, object} = PropTypes

FieldFileInput.propTypes = {
    onChange: func,
    className: string
}

export default FieldFileInput

// export default class FieldFileInput extends React.Component {
// constructor(props) {         super(props)     }     onChange = (e) => {
//   this.props.input.onChange(e.target.files[0])     }     render() {
// // const {input: {         //         value         //     }} = this.props
//      // const {input, label, required, meta, className} = this.props
// //whatever props you send to the component from redux-form Field
// return (             <div>                 {/* <label>{label}</label> */}
//             <div>                     <input type='file' accept='.jpg, .png,
// .jpeg' className={this.props.className} onChange={this.onChange}/>
//      </div>             </div>         )     } }