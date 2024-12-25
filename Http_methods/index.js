// import http from "http";
// import fs from "fs";
// import { parse } from "querystring";
// let server = http.createServer((req, res) => {
//   if (req.method === "POST") {
//     if (req.headers["content-type"] === "application/x-www-form-urlencoded") {
//       // header is object so we are accessing contrnt-type from object, this way it is accessed because, we camt use slash
//       let body = "";
//       // data Event
//       req.on("data", (chunk) => {
//         body += chunk;
//       });
//       // End event to end req-res cycle
//       req.on("end", () => {
//         let parsedBody = parse(body);
//         res.end(JSON.stringify(parsedBody));
//       });

//     }

//     else {
//       res.end(null);
//     }
//   } else {
//     if (req.url === "/" || req.url === "/home") {
//       res.writeHead("200", "OK", { "content-type": "text/html" });
//       let html = fs.readFileSync("./index.html", "utf-8");
//       res.end(html);
//     } else if (req.url === "/style") {
//       res.writeHead("200", "OK", { "content-type": "text/css" });
//       let css = fs.readFileSync("./style.css", "utf-8");
//       res.end(css);
//     } else if (req.url === "/image") {
//       res.writeHead("200", "OK", { "content-type": "image/jpg" });
//       let img = fs.readFileSync("./F1.jpg");
//       res.end(img);
//     } else if (req.url === "/contact") {
//       res.writeHead("200", "OK", { "content-type": "text/html" });
//       let contact = fs.readFileSync("./contact.html");
//       res.end(contact);
//     } else {
//       res.writeHead("404", "Not Found", { "content-type": "text/html" });
//       let html = fs.readFileSync("./pnf.html", "utf-8");
//       res.end(html);
//     }
//   }
// });
// server.listen(5000, (error) => {
//   // Starts the server and listens for incoming requests on port 5000.
//   if (error) console.log(error);
//   console.log("Server is running in port 5000");
// });

//----------------------------------------------------------------------

import fs from "fs";
import http, { createServer } from "http";
import { parse } from "querystring";
import { MongoClient } from "mongodb";

let server = createServer((req, res) => {
  if (req.method === "POST") {
    if (req.headers["content-type"] === "application/x-www-form-urlencoded") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
      });
      req.on("end", async () => {
        let parsedBody = parse(body);
        let client = new MongoClient("mongodb://127.0.0.1:27017");
        try {
          await client.connect();
          let db = client.db("contactDB");
          let collection = db.collection("contacts");
          await collection.insertOne(parsedBody);
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end("<h1>Thanks For Contacting Us!</h1>");
        } catch (err) {
          res.writeHead(500, { "Content-Type": "text/html" });
          res.end("<h1>Internal Server Error</h1>");
        } finally {
          await client.close();
        }
      });
    } else {
      res.writeHead(400, { "Content-Type": "text/html" });
      res.end("<h1>Unsupported Content Type</h1>");
    }
  } else {
    if (req.url === "/" || req.url === "/home") {
      res.writeHead(200, { "Content-Type": "text/html" });
      let html = fs.readFileSync("./index.html", "utf-8");
      res.end(html);
    } else if (req.url === "/style") {
      res.writeHead(200, { "Content-Type": "text/css" });
      let css = fs.readFileSync("./style.css", "utf-8");
      res.end(css);
    } else if (req.url === "/image") {
      res.writeHead(200, { "Content-Type": "image/jpg" });
      let img = fs.readFileSync("./cat stle.PNG");
      res.end(img);
    } else if (req.url === "/contact") {
      res.writeHead(200, { "Content-Type": "text/html" });
      let contact = fs.readFileSync("./contact.html", "utf-8");
      res.end(contact);
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      let html = fs.readFileSync("./pnf.html", "utf-8");
      res.end(html);
    }
  }
});

server.listen(5000, (err) => {
  if (err) console.log(err);
  console.log("Server is running on port 5000");
});
