const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    descripcion: {
      type: String,
      required: false,
      trim: true,
    },
    direccion: {
      type: String,
      required: true,
      trim: true,
    },
    web: {
      type: String,
      required: false,
      trim: true,
    },
    industria: {
      type: String,
      required: true,
      trim: true,
    },
    estado: {
      type: String,
      required: true,
      trim: true,
    },
    telefono: {
      type: String,
      required: false,
      trim: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Client", clientSchema);
