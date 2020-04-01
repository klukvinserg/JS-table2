let arrs = [
  {
    id: 1,
    person: "Tom Cruze",
    phones: ["+3458988898098", "+2355566789009"],
    cars: ["Tesla X", "Tesla S"],
    ocupation: "senior",
    skills: ["HTML", "CSS", "JS"]
  },
  {
    id: 2,
    person: "Fredie Mercury",
    phones: ["+1223345566676", "+2696964787987"],
    cars: ["BMW X3"],
    ocupation: "trainee",
    skills: ["HTML"]
  },
  {
    id: 3,
    person: "Bob Dilan",
    phones: ["+3939094944994"],
    cars: ["Land Rover", "ZAZ"],
    ocupation: "senior",
    skills: ["HTML", "CSS", "JS", "Bootstrap", "git"]
  },
  {
    id: 4,
    person: "Petro Petrenenko",
    phones: ["+7897897987897"],
    cars: ["Skoda A7", "Mersedes GLS", "Ford"],
    ocupation: "no ocupation",
    skills: ["no skills"]
  }
];

let tmp;
let result = "";

document.write("<table>");

document.write("<tr>");
for (key in arrs[0]) {
  document.write(`<th>${key}</th>`);
}
document.write("</tr>");

for (let i = 0; i < arrs.length; i++) {
  document.write("<tr>");
  for (key in arrs[i]) {
    if (typeof arrs[i][key] === "string" || typeof arrs[i][key] === "number") {
      document.write(`<td>${arrs[i][key]}</td>`);
    } else if (typeof arrs[i][key] === "object") {
      tmp = arrs[i][key];
      for (let j = 0; j < tmp.length; j++) {
        result += `${tmp[j]}<br>`;
      }
      document.write(`<td>${result}</td>`);
      result = "";
    }
  }
  document.write("</tr>");
}

document.write("</table>");
