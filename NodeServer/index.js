const express = require("express");
const cors = require("cors");
const { application } = require("express");

var corsOptions = {
  origin: "http://localhost:4200",
  //domain được phép gọi request mà server chấp nhận (vd: request đến từ http://localhost:4200  được server cho phép),
  //giả sử node server là http://localhost:8000
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
const app = express();
app.use(cors(corsOptions));
app.use(express.json());

app.listen(8000, () => {
  console.log("Server started!");
});
app.route("/api/items").get((req, res) => {
  console.log("items");
  res.send([
    {
      ID: 1,
      Name: "Vy Hoc Gioi",
      Gender: "Male",
      Position: "Developer",
      Email: "vyhocgioi@gmail.com",
      Phonenumber: "0909218358",
      Address: "90 Le Van Sy",
      Status: "True",
    },
    {
      ID: 2,
      Name: "Vy Lo Duoc",
      Gender: "Male",
      Position: "Developer",
      Email: "vyloduoc@gmail.com",
      Phonenumber: "0909218358",
      Address: "90 Le Van Sy",
      Status: "False",
    },
    {
      ID: 3,
      Name: "Vy Hoc Gioi",
      Gender: "Male",
      Position: "Developer",
      Email: "vyhocgioi@gmail.com",
      Phonenumber: "0909218358",
      Address: "90 Le Van Sy",
      Status: "True",
    },
    {
      ID: 4,
      Name: "Vy Hoc Gioi",
      Gender: "Male",
      Position: "Developer",
      Email: "vyhocgioi@gmail.com",
      Phonenumber: "0909218358",
      Address: "90 Le Van Sy",
      Status: "True",
    },
    {
      ID: 5,
      Name: "Vy Hoc Gioi",
      Gender: "Male",
      Position: "Developer",
      Email: "vyhocgioi@gmail.com",
      Phonenumber: "0909218358",
      Address: "90 Le Van Sy",
      Status: "True",
    },
    {
      ID: 6,
      Name: "Vy Hoc Gioi",
      Gender: "Male",
      Position: "Developer",
      Email: "vyhocgioi@gmail.com",
      Phonenumber: "0909218358",
      Address: "90 Le Van Sy",
      Status: "True",
    },
    {
      ID: 7,
      Name: "Vy Hoc Gioi",
      Gender: "Male",
      Position: "Developer",
      Email: "vyhocgioi@gmail.com",
      Phonenumber: "0909218358",
      Address: "90 Le Van Sy",
      Status: "True",
    },
  ]);
});

app.route("/api/insert").post((req, res) => {
  console.log("insert items");
  console.log("item info:" + req.body);
  res.status(201).send(req.body);
});

app.put("/api/update", (req, res) => {
  console.log("Updated staff have ID: " + req.body.ID);
  console.log("Id: " + req.body.ID);
  console.log("Name: " + req.body.Name);
  console.log("Gender: " + req.body.Gender);
  console.log("Position: " + req.body.Position);
  console.log("Email: " + req.body.Email);
  console.log("Phone number: " + req.body.Phonenumber);
  console.log("Address: " + req.body.Address);
  console.log("Status: " + req.body.Status);
  res.status(201).send(req.body);
});

app.delete("/api/delete/:id", (req, res) => {
  const id = req.params.id;
  const item = { ID: Number(id.substring(1)) };
  console.log("Deleted staff have ID: " + id);
  res.send(item);
});
