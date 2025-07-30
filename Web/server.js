const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { db } = require("./Firebase/firebaseConfig");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Ruta para registrar jugador
app.post("/registrar-jugador", async (req, res) => {
  try {
    const datos = req.body;

    // Aquí se crea la colección automáticamente si no existe
    await db.collection("jugadores").add(datos);

    res.status(200).json({ mensaje: "Jugador registrado exitosamente" });
  } catch (error) {
    console.error("Error al registrar jugador:", error);
    res.status(500).json({ mensaje: "Error al registrar jugador" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


// Ruta para obtener todos los jugadores
app.get("/get-jugadores", async (req, res) => {
  try {
    const snapshot = await db.collection("jugadores").get();
    const jugadores = [];

    snapshot.forEach(doc => {
      jugadores.push({
        id: doc.id,        // ID del documento
        ...doc.data()      // Datos del jugador
      });
    });

    res.status(200).json(jugadores);
  } catch (error) {
    console.error("Error al obtener jugadores:", error);
    res.status(500).json({ mensaje: "Error al obtener jugadores" });
  }
});


app.put("/editar-jugador/:id", async (req, res) => {
  const { id } = req.params;
  const { nombre, correo, usuario, imagen, equipo } = req.body;

  try {
    const jugadoresRef = db.collection("jugadores");
    const jugadorDoc = jugadoresRef.doc(id);
    const doc = await jugadorDoc.get();

    if (!doc.exists) {
      return res.status(404).json({ mensaje: "Jugador no encontrado" });
    }

    await jugadorDoc.update({ nombre, correo, usuario, imagen, equipo });
    res.json({ mensaje: "Jugador actualizado correctamente" });
  } catch (error) {
    console.error("Error al editar jugador:", error);
    res.status(500).json({ mensaje: "Error al editar jugador" });
  }
});


app.delete("/eliminar-jugador/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const jugadorDoc = db.collection("jugadores").doc(id);
    await jugadorDoc.delete();
    res.json({ mensaje: "Jugador eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar jugador:", error);
    res.status(500).json({ mensaje: "Error al eliminar jugador" });
  }
});
