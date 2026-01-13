function limiter() {
  let count = 0;
  return function () {
    count++;
    document.getElementById("status").innerText =
      count > 3 ? "Account Locked" : "Attempt " + count;
  };
}
const login = limiter();

