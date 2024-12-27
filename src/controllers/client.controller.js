import { request } from "express";
import Client from "../models/client.model.js";

// Get all clients filtered by client for user
export const getClients = async (req, res) => {
  try {
    const clients = await Client.find({ user: req.user.id }).populate(
      "user",
      "-password -createdAt -updatedAt"
    );

    if (!clients || clients.length === 0)
      return res.status(404).json({ message: "Clients not found" });

    res.status(200).json({
      message: "All clients",
      clients: clients,
      total: clients.length,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a client by ID
export const getClientById = async (req, res) => {
  try {
    // const client = await Client.findById(req.params.id);
    const client = await Client.findOne({
      _id: req.params.id,
      user: req.user.id,
    });
    if (!client) return res.status(404).json({ message: "Client not found" });

    res.status(200).json({
      message: "Client found",
      client: client,
      user: req.user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new client
export const createClient = async (req, res) => {
  try {
    const { nombre, descripcion, direccion, web, industria, estado, telefono } =
      req.body;

    const newClient = new Client({
      nombre,
      descripcion,
      direccion,
      web,
      industria,
      estado,
      telefono,
      user: req.user.id,
    });
    const savedClient = await newClient.save();
    res.status(201).json({
      message: "Client created successfully",
      client: savedClient,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a client by ID
export const updateClientById = async (req, res) => {
  try {
    const updatedClient = await Client.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedClient)
      return res.status(404).json({ message: "Client not found" });

    res.status(200).json({
      message: "Client updated successfully",
      client: updatedClient,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a client by ID
export const deleteClientById = async (req, res) => {
  try {
    const deletedClient = await Client.findByIdAndDelete(req.params.id);
    if (!deletedClient)
      return res.status(404).json({ message: "Client not found" });

    res.status(200).json({ message: "Client deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
