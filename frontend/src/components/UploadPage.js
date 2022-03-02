import React from "react";
import Grid from "@material-ui/core/Grid";
import { useState } from "react";
import axios from "axios";

const UploadPage = () => {
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("avatar", file);

    const config = {
      // headers: {
      //   "Content-Type": "multipart/form-data",
      // },
    };

    axios
      .post("http://localhost:3000/upload/avatar", data, config)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        <Grid
          item
          xs={10}
          sm={8}
          style={{
            backgroundColor: "lightblue",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              height: "150px",
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: "column",
            }}
          >
            <label for="imageFile">Select some images:</label>
            <br />
            <input
              type="file"
              name="avatar"
              accept="image/*"
              id="imageFile"
              onChange={(e) => {
                const file = e.target.files[0];
                setFile(file);
                console.log(e.target.files)
              }}
            />
            <br />
            <input type="submit" value="send" />
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default UploadPage;
