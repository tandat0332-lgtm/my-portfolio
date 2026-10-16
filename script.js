
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio đã tải thành công!");

  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
