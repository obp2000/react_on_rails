const SelectAction = (action, key) => {
    return (obj) => {
        if (obj[key]) {
            action(obj[key])
        }
    }
}

export default SelectAction