exports.uploadController = (req, res) => {
  console.log(req.file);

  res.send("file uploaded successfully")

}