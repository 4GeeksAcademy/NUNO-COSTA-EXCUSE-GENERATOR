window.onload = () => {
  var excuseParts = [
    ["The dog ", "My grandma ", "His turtle ", "My bird "],
    ["ate ", "peed ", "crushed ", "broke "],
    ["my homework ", "the keys ", "the car "],
    [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ]
  ];

  function excuseGenerator(anArray) {
    let sentence = "";
    for (let i = 0; i < anArray.length; i++) {
      let index = Math.floor(Math.random() * anArray[i].length);
      sentence += anArray[i][index];
    }
    return sentence;
  }
  document.querySelector("#excuse").innerHTML = excuseGenerator(excuseParts);
};
