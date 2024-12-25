import http from "http";

let server = http.createServer((request, response) => {
//   console.log(request.method);
  //   response.end(request.url);   //
  response.end(request.method);

  if(request.end(request))


});

server.listen(5000, (error) => {
  if (error) console.log(error);
  console.log("Server is running in port 5000");
});
