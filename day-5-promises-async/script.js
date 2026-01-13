function getUser() {
  return new Promise(resolve => {
    setTimeout(()=>resolve("User Loaded"),1500);
  });
}

async function load() {
  document.getElementById("user").innerText = "Loading...";
  const user = await getUser();
  document.getElementById("user").innerText = user;
}




