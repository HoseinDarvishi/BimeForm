$(document).ready(function () {
  let now = new Date().toLocaleDateString("fa-IR");
  let year = fixNumbers(now).slice(0, 4);
  for (let i = year; i >= year - 10; i--) {
    let newOpt = document.createElement('option');
    newOpt.value = i;
    newOpt.innerHTML = i;
    $('#yearBuild').append(newOpt);
  }
  
  // Validation ... Submit
  $('#form').submit(function (e) {
    e.preventDefault();
    const S1 = document.getElementById('carName'), S2 = document.getElementById('yearBuild'), S3 = document.querySelector("input[name='typeBime']:checked");
    let counter = 0;
    if (!S1.value || !S2.value) {
      let isElem = document.getElementsByClassName("boxError")[0];
      if (!isElem) {
        let boxError = document.createElement('div');
        boxError.innerHTML = "لطفا همه مقادیر الزامی را وارد کنید";
        $(boxError).addClass("boxError");
        $('.head-text').after(boxError);
      }
    }
    else {
      $('.boxError').remove();
      $('.model').html(S1.value);
      let type = (S3.id === "sales") ? "بیمه ثالث" : "بیمه بدنه";
      $('.type').html(type);
      document.getElementsByClassName("factor")[0].style.display = "none";
      document.getElementsByClassName("spinner")[0].style.display = "block";
      setTimeout(() => {
        document.getElementsByClassName("spinner")[0].style.display = "none";
        document.getElementsByClassName("factor")[0].style.display = "block";
      }, 3000)
    }
  });
});

//* Persian2English 

let persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
  arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];
function fixNumbers(str) {
  if (typeof str === 'string') {
    for (var i = 0; i < 10; i++) {
      str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
    }
  }
  return str;
};