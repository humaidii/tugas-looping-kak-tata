// FOR LOOP TASK 1
for (let i = 1; i <= 100; i++){
    document.write('User ke - ' +i);
    document.write('<br/>');
}

// FOR LOOP TASK 2
let nilai = 0;

for (let i = 1; i <= 10; i++) {
  nilai += 2;
  console.log("Hasil penambahan ke-" + i + ": " + nilai);
}

// FOR LOOP TASK 3
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i + " adalah bilangan genap");
    } else {
      console.log(i + " adalah bilangan ganjil");
    }
  }

// POP - UP LOOP TASK 4
let jumlahKlikOk = 0;
function tampilkanPopUp() {
    let hasilKonfirmasi = confirm("Apakah anda mau mengulang?");
    if (hasilKonfirmasi === true) {
      jumlahKlikOk++;
      tampilkanPopUp();
    } else {
      alert("Perulangan sudah dilakukan sebanyak " + jumlahKlikOk + " kali.");
    }
  }
  tampilkanPopUp();

// QUIZ LOOP TASK 5
let jawabanBenar = false;

while (!jawabanBenar) {
  let jawaban = prompt("Sebutkan kepanjangan dari nama IB?");
  if (jawaban.toUpperCase() === "IMPACT BYTE") {
    alert("Selamat jawaban kamu benar!");
    jawabanBenar = true;
  } else {
    alert("Jawaban kamu salah, coba lagi!");
  }
}