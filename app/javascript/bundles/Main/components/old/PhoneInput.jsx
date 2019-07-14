/**
 * Created by isattrash on 8/24/16.
 */
import React from 'react';
import InputValidator from 'react-input-validator';

export default class PhoneInput extends InputValidator {

    render() {
        return (
            <div className={'relative-pos form-group' + super.getValidationClass()}>
                <label htmlFor="phone-input">Phone Number:</label>
                <input type="text"
                       ref={node => this.phoneRef = node}
                       onChange={() => { super.onInputChange(this.phoneRef, this.validatePhone) }}
                       className="form-control" id="phone-input" />
                <i className="hidden fa fa-spin fa-spinner"></i>
            </div>
        )
    }

    validatePhone() {
        //Pattern: xxx-xxxxxxx || xxxxxxxxxx
        let phoneRegex = /^[0-9][0-9][0-9](-?)[0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;
        if(phoneRegex.test(this.phoneRef.value)) {
            return true;
        } else if (!phoneRegex.test(this.phoneRef.value)) {
            return false;
        }
    }

}


// export default PhoneInput;