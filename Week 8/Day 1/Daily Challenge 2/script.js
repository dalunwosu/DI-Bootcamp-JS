let pattern = "";
for (let i = 1; i <= 6; i++) {
  pattern += "* ".repeat(i);
  pattern += "\n";
}
console.log(pattern);

let design = "";
for (let i = 1; i <= 6; i++) {
    for (let j = 1; j <= i; j++) {
      design += "* ";
    }
    design += "\n";
}
console.log(design);