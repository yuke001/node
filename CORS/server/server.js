import http from "http";
let server = http.createServer((req, res) => {
  let employees = [
    {
      name: "Yuke",
      salary: 30000,
    },
    {
      name: "Bhoomi",
      salary: 230000,
    },
  ];

  res.writeHead(200, "OK", {
    "content-type": "application/json",
    // "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Origin": "*",
  });

  res.end(JSON.stringify(employees));
});

server.listen(5000, (err) => {
  if (err) console.log(err);
  console.log("Server is running on 5000");
});
