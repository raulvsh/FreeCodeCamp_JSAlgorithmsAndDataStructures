function telephoneCheck(str) {
    var regEx1 = /^\d{3}-\d{3}-\d{4}$/;
    var regEx2 = /^\(\d{3}\)\d{3}-\d{4}$/;
    var regEx3 = /^\(\d{3}\) \d{3}-\d{4}$/;
    var regEx4 = /^\d{3} \d{3} \d{4}$/;
    var regEx5 = /^\d{10}$/;
    var regEx6 = /^1 \d{3} \d{3} \d{4}$/;
    var regEx7 = /^1 \d{3}-\d{3}-\d{4}$/;
    var regEx8 = /^1 \(\d{3}\) \d{3}-\d{4}$/;
    var regEx9 = /^1\(\d{3}\)\d{3}-\d{4}$/;


    let checkAllRegEx = regEx1.test(str)||regEx2.test(str)||regEx3.test(str)||regEx4.test(str)||regEx5.test(str)||regEx6.test(str)||regEx7.test(str)||regEx8.test(str)||regEx9.test(str)




    return checkAllRegEx


  }
  
  console.log("1 " + telephoneCheck("555-555-5555"));
  console.log("2 " + telephoneCheck("(555)555-5555"));
  console.log("3 " + telephoneCheck("(555) 555-5555"));
  console.log("4 " + telephoneCheck("555 555 5555"));
  console.log("5 " + telephoneCheck("5555555555"));
  console.log("6 " + telephoneCheck("1 555 555 5555"));

  console.log("falso " + telephoneCheck("555-55s5-5555"));