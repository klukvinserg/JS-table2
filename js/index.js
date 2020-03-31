let arrs = [
  {
    fullName: "Tom Cruze",
    phones: ["+3458988898098", "+2355566789009"],
    cars: ["Tesla X", "Tesla S"],
    ocupation: "sineor",
    skills: ["HTML", "CSS", "JS"]
  },
  {
    fullName: "Fredie Mercury",
    phones: ["+1223345566676", "+2696964787987"],
    cars: ["BMW X3"],
    ocupation: "trainee",
    skills: ["HTML"]
  },
  {
    fullName: "Bob Dilan",
    phones: ["+3939094944994"],
    cars: ["Land Rover", "ZAZ"],
    ocupation: "sineor",
    skills: ["HTML", "CSS", "JS", "Bootstrap", "git"]
  },
  {
    fullName: "Petro Petrenenko",
    phones: ["+7897897987897"],
    cars: ["Skoda A7", "Mersedes GLS", "Ford"],
    ocupation: "no ocupation",
    skills: ["no scills"]
  }
];

let tmp;
let result = "";

document.write("<table>");
document.write("<tr>");
document.write("<th>Person</th>");
document.write("<th>Phone</th>");
document.write("<th>Car</th>");
document.write("<th>Position</th>");
document.write("<th>Skills</th>");
document.write("</tr>");

for (let i = 0; i < arrs.length; i++) {
  document.write("<tr>");
  for (key in arrs[i]) {
    if (typeof arrs[i][key] === "string") {
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
