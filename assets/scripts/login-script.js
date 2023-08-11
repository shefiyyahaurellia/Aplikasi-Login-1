/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

/*Comment : membuat varibel setiap elemen view */
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');


/* Comment : Membuat variabel untuk menyimpan informasi email dan password */
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';


/*Comment : menambahkan aksi klik link pada button */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();
  // TODO 1 : Mendapatkan input email dan password pengguna dari form.
  const email = inputEmailElement.value;
  const password = inputPasswordElement.value;
  
  /* TODO 2 : Buat Logika perbandingan dengan kondisi:
       Jika variabel email identik dengan expectedEmail dan password identik dengan expectedPassword, panggil fungsi goToHome().
       Jika tidak, maka panggil fungsi showPopUp().
     */
  if (email == expectedEmail && password == expectedPassword) {
    /* Comment : jika sesuai masuk ke halaman home */
    goToHome();
  } else {
    /* Comment :namun,  jika tidak sesuai maka akan menampilkan informasi input salah */
    showPopUp();
  }
});
