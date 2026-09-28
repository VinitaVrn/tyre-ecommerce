

export const registorUser = async (req, res) => {
    try {
        const userData = req.body;
        if (!userData) {
            req.status(400).json({
                message: {
                    success: false,
                    message: "Bad Request"
                }
            })
        }
    } catch(err) {
        res.status(500).json({message:{
            success:false,
            message:err.message
        }})
    }
}