module.exports = (req, res) => {
  console.info("API TEST");
  res.status(200).send("Hello From The API!");
};
