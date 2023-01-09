import { response } from "express";
import User from "../schema/user-schema.js";

export const addUser = async (req, res) => {
  const user = req.body;

  const newUser = new User(user);
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ messeage: error.messeage });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({}); //taking all data froom user in user-schema
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const editUser = async (req, res) => {
  let user = req.body;
  const editUser = new User(user);

  try {
    const user = await User.updateOne({ _id: req.params.id }, editUser);
    res.status(201).json(editUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "User deleted Succesfully" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
