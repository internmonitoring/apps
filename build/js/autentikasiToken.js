import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

document.addEventListener("DOMContentLoaded", function () {
  // Mendapatkan nilai cookie dengan nama "token" menggunakan fungsi getCookie
  const token = getCookie("token");

  // Jika tidak ada token, kembalikan ke halaman signIn.html
  if (!token) {
    Swal.fire({
      icon: "info",
      title: "Informasi",
      text: "Anda belum login. Silahkan login terlebih dahulu.",
      confirmButtonText: "OK",
    }).then(() => {
      // Redirect ke halaman sign in
      window.location.href = "../signIn.html";
    });
  }
});
