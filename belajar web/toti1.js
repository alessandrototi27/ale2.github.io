const nama = "alesandro toti";
let usia = 20;
// console.log(``);

const biodata = document.getElementById("biodata");
console.log(biodata);
function generateBiodata() {
  let generasi;
  if (usia > 10 && usia < 18) {
    generasi = "generasi remaja";
  } else if (usia > 18 && usia < 30) {
    generasi = "generasi dewasa";
  } else if (usia > 30) {
    generasi = "generasi tua";
  } else {
    generasi = "generasi bayi";
  }
  return (biodata.innerHTML = generasi);
}

console.log(nama);
console.log(usia);

generateBiodata();
