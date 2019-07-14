const ChangeAction = (action) => {
    return (obj, value) => {
        // if (value) {
            action(value)
        // }
    }
}

export default ChangeAction