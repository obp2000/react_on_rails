const ConfirmAction = (action, text) => {
    return (e) => {
        e.preventDefault()
        if (confirm(text)) {
            action()
        }
    }
}

export default ConfirmAction