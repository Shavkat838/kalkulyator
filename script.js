let input = document.getElementById("input");
function a(element) {
  input.value += element;

  // noldan keyin son yozilsa nolni emas sonni chiqaradi  ekranga
  if (
    input.value.at(0) == 0 &&
    input.value.at(1) != "." &&
    1 <= element &&
    element <= 9
  ) {
    hisobla();
    input.value = element;
  }

  // nolni qayta qayta yozilmasligini taminlaydi
  else if (input.value == 0 && element == 0) {
    input.value = 0;
  }

  // noldam keyin nuqtacha yozilishini taminlaydi
  // else if (input.value == 0 && element == ".") {
  //   element;
  // }

  //    ishoradan keyin son yozilishini taminlaydi
  else if (
    s == 1 &&
    (element == "-" ||
      element == "+" ||
      element == "*" ||
      element == "/" ||
      element == ".")
  ) {
    element;
    s = 0;
  }
  //  bir marta hisoblagandan song natijani davomidan emas yangidan son yozilishini taminlaydi
  else if (s == 1 && 1 <= element && element <= 9) {
    input.value = element;
    s = 0;
  }
  let amallar = "+,-,*,/,.";
  if (amallar.includes(input.value.at(0)) && amallar.includes(element)) {
    input.value = element;
  }

}

let s = 0;

function hisobla() {
  s++;
  input.value = eval(input.value);
}

function backspace() {
  input.value = input.value.slice(0, -1);
}

function toza() {
  input.value = "";
}

function plmin() {
  if (input.value > 0) {
    input.value = -parseInt(input.value);
  } else if (input.value == 0) {
    input.value = input.value;
  } else if (input.value < 0) {
    input.value = -parseInt(input.value);
  }
}
function foiz() {
  input.value = input.value / 100 + "%";
}

if (input.value == 0) {
}
