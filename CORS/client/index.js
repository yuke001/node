fetch("http://localhost:5000/").then((res) => {
    return res.json();
    console.log(res);
    
  }).then((data) => {
    console.log(data);
  }).catch((err) => {
    console.log(err);
  });
