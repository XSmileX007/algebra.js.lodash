// Load the full build.
var _ = require("lodash");

// 1.
var dobro = "123456789011111";
var lose = "1123456";
var jedinstveniZnakovi = function (password) {
  // vas kod
  var mojNiz = [];
  console.log("password.length=" + password.length);
  for (let i = 0; i < password.length; i++) {
    var numToCheck = password.charAt(i);
    //console.log(numToCheck + " is integer = " + isBroj(numToCheck));
    if (isBroj(numToCheck) == false) {
      console.log(numToCheck + " nije broj");
      //break;
      return false;
    }

    if (mojNiz.includes(numToCheck)) {
      console.log(numToCheck + " vec postoji u nasem nizu");
      //break;
      return false;
    } else {
      console.log(numToCheck + " NE postoji u nasem nizu");
      mojNiz.push(numToCheck);
    }
  }
  return true;
};

function isBroj(broj) {
  return !isNaN(broj);
}

function isMoreThan10(password) {
  if (password.length > 10) {
    return true;
  }
  return false;
}

function skratiNa10(password) {
  if (password.length <= 10) return password;
  /*var tmpPassword = "";
  for (let i = 0; i < 10; i++) {
    var charAtIndex = password.charAt(i);
    tmpPassword += charAtIndex;
  }
  return tmpPassword;*/
  return password.substring(0, 10);
}

console.log("Password je ispravan: " + jedinstveniZnakovi(dobro));
//jedinstveniZnakovi(dobro);
console.log("----------------");
//jedinstveniZnakovi(lose);
console.log("Password je ispravan: " + jedinstveniZnakovi(lose));

console.log("Password ime vise od 10 znakova: " + isMoreThan10(dobro));
console.log("Password ime vise od 10 znakova: " + isMoreThan10(lose));

console.log("Password nakon skracivanja: " + skratiNa10(dobro));
console.log("Password nakon skracivanja: " + skratiNa10(lose));
