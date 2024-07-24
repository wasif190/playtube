class ApiResponse {
    constructor(stattusCode, data, message = "Success") {
        this.stattusCode = stattusCode
        this.data = data
        this.message = message
        this.success = stattusCode < 400
    }
}

export {ApiResponse}