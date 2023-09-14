function greet() {
  console.log("Hello!");
}

greet(); // Hello!
setTimeout(greet, 1000); // Hello! (after 1 second)

//setTimeout() is a not a JavaScript function, but a browser API. It is a method of the window object.