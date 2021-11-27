const { writeFile } = require("fs/promises");
const moment = require("moment");
const http = require("http");

const server = http.createServer((req, res) => {
  const { url, method } = req;
  const user = {
    url,
    method,
    time: moment().format(),
  };
  const data = JSON.stringify(user);

  //home page
  if (url === "/" && method === "GET") {
    console.log("user hit the server");
    writeFile("./content/logger.txt", data, {
      flag: "a",
    })
      .then(() => {
        res.writeHead(200, { "content-type": "text/html" });
        res.end("<h1>Home Page</h1>");
      })
      .catch((e) => console.log(e));
  }

  //about page
  else if (url === "/about" && method === "GET") {
    console.log("user hit the server");
    writeFile("./content/logger.txt", data, {
      flag: "a",
    })
      .then(() => {
        res.writeHead(200, { "content-type": "text/html" });
        res.end("<h1>About Page</h1>");
      })
      .catch((e) => console.log(e));
  }

  //login page
  else if (url === "/login" && method === "GET") {
    console.log("user hit the server");
    writeFile("./content/logger.txt", data, {
      flag: "a",
    })
      .then(() => {
        res.writeHead(200, { "content-type": "text/html" });
        res.end("<h1>Login Page</h1>");
      })
      .catch((e) => console.log(e));
  }

  // 404
  else {
    console.log("user hit the server");
    writeFile("./content/logger.txt", data, {
      flag: "a",
    })
      .then(() => {
        res.writeHead(404, { "content-type": "text/html" });
        res.end("<h1>Not Found</h1>");
      })
      .catch((e) => console.log(e));
  }
});

server.listen(8000);
