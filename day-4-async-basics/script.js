function run() {
  document.getElementById("msg").innerText = "Processing...";
  setTimeout(() => {
    document.getElementById("msg").innerText = "Task Completed";
  }, 2000);
}

