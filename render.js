const ipcRenderer = require("electron").ipcRenderer;
const generatePassword = () => {
  ipcRenderer.send(
    "generatePassword",
    document.querySelector(".keyWord").value
  );
};

ipcRenderer.on("receivePassword", (event, data) => {
  const passwordTag = document.querySelector("#password");
  passwordTag.innerText = data;
});
