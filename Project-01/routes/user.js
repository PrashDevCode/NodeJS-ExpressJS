const express = require("express");

const router=express.Router();

router.get("/users", (req, res) => {
  const html = `
        <ul> 
            ${users.map((user) => `<li>${user.first_name}`).join("")}
        </ul>
    `;
  res.send(html);
});

router.get("/api/users", (req, res) => {
  return res.json(users);
});

module.exports=router;
