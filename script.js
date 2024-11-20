let userName = prompt("Введите ваше имя")
let letter = prompt("Введите любую букву")

userName = userName.toLowerCase();
 let letters = letter.toLowerCase();

if (userName.includes(letters)) {
    alert("в вашем имени присутствует  буква " + letter + " !")
}
