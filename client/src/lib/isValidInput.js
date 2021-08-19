
 export const isValidInput = (expression, value, message) => {
    if (!expression(value)) {
        return (
            <div>{message}</div>
        )
    }
      }