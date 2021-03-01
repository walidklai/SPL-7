const express = require("express");
const { check, validationResult } = require("express-validator");
const Player = require("../../models/PlayerModel");

const router = express.Router();

//@route/api/players
//method GET
//public

router.get("/", async (req, res) => {
  try {
    const players = await Player.find();
    if (players.length <= 0) res.status(404).json([{ msg: "No players" }]);
    res.status(200).json(players);
  } catch (err) {
    console.log(err.message);
    res.status(500).json([{ msg: "Server error" }]);
  }
});

//@route/api/players
//method post
//public

router.post(
  "/",
  [
    check("name", "Please enter player name").notEmpty(),
    check("champ", "Please enter player champion").notEmpty(),
    check("role", "Please enter player role").notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) res.status(400).json({ errors: errors.array() });
    const { name, role, champ } = req.body;
    try {
      const player = await Player.findOne({ name });
      console.log(player);
      if (player) 
      {res.status(400).json([{ msg: "Player already exists" }])};
      const newPlayer = new Player({
        name,
        role,
        champ,
      });
      await newPlayer.save();
      res.status(200).json(newPlayer);
    } catch (err) {
      console.log(err.message);
      res.status(500).json([{ msg: "Server error" }]);
    }
  }
);

//@route/api/players
//method get
//public

router.get("/:id", async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);
    if (!player) res.status(404).json([{ msg: "Player not found" }]);
    res.status(200).json(player);
  } catch (err) {
    console.log(err.message);
    res.status(500).json([{ msg: "Server error" }]);
  }
});

//@route/api/players
//method get
//public

router.delete("/:id", async (req, res) => {
  try {
    const playerToDelete = await Player.findByIdAndDelete(req.params.id);
    if (!playerToDelete) res.status(404).json([{ msg: "player not found" }]);
    res
      .status(200)
      .json([
        { deletedPlayer: playerToDelete, msg: "Player deleted successfully" },
      ]);
  } catch (err) {
    console.log(err.message);
    res.status(500).json([{ msg: "Server error" }]);
  }
});

module.exports = router;
