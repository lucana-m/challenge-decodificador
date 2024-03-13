let keys = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

const entryText = document.querySelector(".text-input");
const encryptResponse = document.querySelector(".return-text");

const toEncrypt = (text) => {
  text = text.toLowerCase();

  keys.forEach((item) => {
    if (text.includes(item[0])) {
      text = text.replaceAll(item[0], item[1]);
    }
  });

  return text;
};

const toDecrypt = (toDecryptText) => {
  toDecryptText = toDecryptText.toLowerCase();

  keys.forEach((item) => {
    if (toDecryptText.includes(item[1])) {
      toDecryptText = toDecryptText.replaceAll(item[1], item[0]);
    }
  });

  return toDecryptText;
};

const toEncryptButton = () => {
  const response = toEncrypt(entryText.value);
  document.querySelector(".empty-response-area").style.display = "none";
  document.querySelector(".encrypt-response-area").removeAttribute("id");
  encryptResponse.value = response;
  encryptResponse.readOnly = true;
  entryText.value = "";
};

const encryptButton = document.querySelector(".encrypt-button");
encryptButton.addEventListener("click", () => {
  toEncryptButton();
});

const toDecryptButton = () => {
  const response = toDecrypt(entryText.value);
  document.querySelector(".empty-response-area").style.display = "none";
  document.querySelector(".encrypt-response-area").removeAttribute("id");
  encryptResponse.value = response;
  encryptResponse.readOnly = true;
  entryText.value = "";
};

const decryptButton = document.querySelector(".decrypt-button");
decryptButton.addEventListener("click", () => {
  toDecryptButton();
});

const copyText = () => {
  encryptResponse.select();
  navigator.clipboard.writeText(encryptResponse.value);
};

const copyButton = document.querySelector(".copy-button");
copyButton.addEventListener("click", () => {
  copyText();
  copyButton.innerHTML = "Copiado";
  setTimeout(() => (copyButton.innerHTML = "Copiar"), 1000);
});
