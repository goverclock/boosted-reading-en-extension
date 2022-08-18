const paras = document.getElementsByTagName("p");

for (let i = 0; i < paras.length; i++) {
  let arr = paras[i].textContent.split(" ");

  let tmparr = [];
  for (let word of arr) {
    if (word.length <= 3) {
      word = "<strong>" + word + "</strong>";
    } else {
      word = "<strong>" + word.slice(0, 3) + "</strong>" + word.slice(3);
    }

    tmparr.push(word);
  }
  paras[i].innerHTML = tmparr.join(" ");

}
