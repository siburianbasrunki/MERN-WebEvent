const express = require("express");
const router = express();
const { create } = require("./controller");
router.get("/categories", (req, res) => {
  const data = [
    {
      _id: 1,
      name: "seminar",
    },
    {
      _id: 2,
      name: Mern,
    },
  ];
  res.status(200).json({
    message: "Halaman Categories",
  });
});

router.post("/categories",create);
module.exports = router;
