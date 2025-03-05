import jwt from "jsonwebtoken";

export default async function Auth(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];

    //retrive the user details for the logged in user
    const decodedToken = await jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET
    );

    req.user = { user_id: decodedToken.user_id };

    next();
  } catch (error) {
    res.status(401).json({ error: "Authentication Faild" });
  }
}
