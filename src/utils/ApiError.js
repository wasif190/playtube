class ApiError extends Error {
    constructor(
        stattusCode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ) {
        super(message)
        this.stattusCode = stattusCode
        this.data =  null
        this.message = message
        this.success = false
        this.errors = errors

        if (stack) {cloudinary
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}