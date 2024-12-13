import jwt from "jsonwebtoken";
export const verifyToken = (req, res, next) => {
    const token = req.cookies.accessToken

    if (!token) {
        return res.status(401).json({ success: false, message: "you're not authorize" })
    }

    //if token is exist the verify the token 
    jwt.verify(token, process.env.JET_SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(401).json({ success: false, message: "token is invalid" })
        }
        req.user = user
        next() // don't forget to call next
    })
}

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.id === req.params.id || req.user.roke === "admin") {
            next()
        }
        else {
            return res.status(401).json({ success: false, message: "you're not authenticated" })
        }
    })
}

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.roke === "admin") {
            next()
        }
        else {
            return res.status(401).json({ success: false, message: "you're not authenticated" })
        }
    })
}