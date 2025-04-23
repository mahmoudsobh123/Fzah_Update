// متغير لتخزين القيمة الحالية
let currentValue = 0;

function calculateResult() {
  // الحصول على قيمة الإدخال من العنصر الذي تم تفعيل الحدث عليه
  var inputElement = event.target;
  currentValue = parseFloat(inputElement.value) || 0;

  // مزامنة القيمة مع حقل الإدخال الآخر
  document.querySelectorAll(".A2").forEach((input) => {
    if (input !== inputElement) {
      input.value = currentValue;
    }
  });

  var B2_elements = document.querySelectorAll(".B2");
  var C2_elements = document.querySelectorAll(".C2");
  var D2_elements = document.querySelectorAll(".D2");
  var E2_elements = document.querySelectorAll(".E2");
  var F2_elements = document.querySelectorAll(".F2");
  var G2_elements = document.querySelectorAll(".G2");

  /// value of B2
  var percentageValue_B2;
  if (currentValue <= 4999) {
    percentageValue_B2 = 30;
  } else if (currentValue <= 6999) {
    percentageValue_B2 = 25;
  } else if (currentValue <= 9999) {
    percentageValue_B2 = 22;
  } else if (currentValue <= 14999) {
    percentageValue_B2 = 20;
  } else if (currentValue <= 19999) {
    percentageValue_B2 = 17.5;
  } else {
    percentageValue_B2 = 15;
  }
  // تحديث جميع عناصر B2
  B2_elements.forEach((element) => {
    element.textContent = percentageValue_B2 + "%";
  });

  /// value of C2
  var percentageValue_C2;
  if (currentValue <= 4999) {
    percentageValue_C2 = 30;
  } else if (currentValue <= 6999) {
    percentageValue_C2 = 28;
  } else if (currentValue <= 9999) {
    percentageValue_C2 = 26;
  } else if (currentValue <= 14999) {
    percentageValue_C2 = 24;
  } else if (currentValue <= 19999) {
    percentageValue_C2 = 22;
  } else {
    percentageValue_C2 = 20;
  }
  // تحديث جميع عناصر C2
  C2_elements.forEach((element) => {
    element.textContent = percentageValue_C2 + "%";
  });

  /// value of D2
  var value_D2 = currentValue * (percentageValue_B2 / 100);
  const formattedValue_D2 = value_D2.toLocaleString("en-US", {
    style: "currency",
    currency: "SAR",
    currencyDisplay: "code",
  });
  // تحديث جميع عناصر D2
  D2_elements.forEach((element) => {
    element.textContent = formattedValue_D2.replace("SAR", "ر.س.");
  });

  /// value of E2
  var value_E2 = currentValue * (percentageValue_C2 / 100);
  const formattedValue_E2 = value_E2.toLocaleString("en-US", {
    style: "currency",
    currency: "SAR",
    currencyDisplay: "code",
  });
  // تحديث جميع عناصر E2
  E2_elements.forEach((element) => {
    element.textContent = formattedValue_E2.replace("SAR", "ر.س.");
  });

  /// value of F2
  const value_F2 = currentValue + value_D2;
  const formattedValue_F2 = value_F2.toLocaleString("en-US", {
    style: "currency",
    currency: "SAR",
    currencyDisplay: "code",
  });
  // تحديث جميع عناصر F2
  F2_elements.forEach((element) => {
    element.textContent = formattedValue_F2.replace("SAR", "ر.س.");
  });

  /// value of G2
  const value_G2 = currentValue + value_E2;
  const formattedValue_G2 = value_G2.toLocaleString("en-US", {
    style: "currency",
    currency: "SAR",
    currencyDisplay: "code",
  });
  // تحديث جميع عناصر G2
  G2_elements.forEach((element) => {
    element.textContent = formattedValue_G2.replace("SAR", "ر.س.");
  });
}

// إضافة حدث الإدخال لجميع عناصر A2
document.querySelectorAll(".A2").forEach((input) => {
  input.addEventListener("input", calculateResult);
});

// عند تغيير حجم الشاشة، تأكد من مزامنة القيم
window.addEventListener("resize", function () {
  document.querySelectorAll(".A2").forEach((input) => {
    input.value = currentValue;
  });
});

/// value of numbers
document.querySelectorAll(".number").forEach((element) => {
  const numberValue = parseFloat(element.textContent) || 0;
  const formattedValue = numberValue
    .toLocaleString("en-US", {
      style: "currency",
      currency: "SAR",
      currencyDisplay: "code",
    })
    .replace("SAR", "ر.س.");
  element.textContent = formattedValue;
});
