import http, { createServer } from "http";
import { parse } from "querystring";
import { MongoClient } from "mongodb";
import fs from "fs";

const PORT = 5000;
const MONGO_URI = "mongodb://127.0.0.1:27017";

const server = createServer(async (req, res) => {
  if (req.method === "GET" && req.url === "/") {
    // Serve the HTML form
    res.writeHead(200, { "Content-Type": "text/html" });

    const html = fs.readFileSync("index.html", "utf-8");
    res.end(html);
    
  } else if (req.method === "POST" && req.url === "/") {
    // Handle form submission
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", async () => {
      const parsedBody = parse(body);
      const client = new MongoClient(MONGO_URI);

      try {
        await client.connect();
        const db = client.db("simpleDB");
        const collection = db.collection("submissions");

        // Save data to MongoDB
        await collection.insertOne(parsedBody);

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Thank you for your submission!</h1>");
      } catch (err) {
        console.error(err);
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("<h1>Internal Server Error</h1>");
      } finally {
        await client.close();
      }
    });
  } else {
    // Handle 404 - Not Found
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>Page Not Found</h1>");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
