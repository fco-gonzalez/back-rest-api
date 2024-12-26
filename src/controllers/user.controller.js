import { createAccessToken } from "../libs/jwt.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists)
      return res.status(400).json({ error: "User already exists" });

    const passwordHash = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      email,
      password: passwordHash,
    });

    const nuevoUsuario = await user.save();
    // creacion de token
    const accessToken = await createAccessToken({ id: nuevoUsuario._id });
    //crear una cookie
    res.cookie("access-token", accessToken, {
      maxAge: 60 * 60 * 24 * 30 * 1000,
      httpOnly: true,
    });

    res.status(201).json({
      message: "User created successfully",
      accessToken,
      user: {
        id: nuevoUsuario._id,
        username: nuevoUsuario.username,
        email: nuevoUsuario.email,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {};

export const logout = async (req, res) => {};
