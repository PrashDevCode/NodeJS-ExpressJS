export const getSystemHealth = (req, res) => {
  console.log("in services");
  res.status(200).json({ ok: true, message: "System is working fine" });
};
