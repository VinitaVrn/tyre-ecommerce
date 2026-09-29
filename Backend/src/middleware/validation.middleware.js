
export const feildsValidation =  (schema) => {
    return (req, res, next) => {
        const result = schema.safeParse(req.body)
        if (result.success) {
            req.body=result.data
            next();
        } else {
            console.error(result.error)
            res.status(400).json({
                success: false,
                message: "Data Validation Failed",
                errors:result.error.issues
            })
        }
    }

}