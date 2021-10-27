

function userInput(){
    let texts = document.getElementById("left");
    // console.log(texts.value)
    return texts.value;
}

function selectedLang(){
    let val = document.getElementById(`Lang`).value;
    // console.log(val);
    localStorage.setItem('lang',JSON.stringify(val));
    return val;
}

async function translate() {
    // console.log("hi************")
    const res = await fetch("https://libretranslate.de/translate", {
      method: "POST",
      body: JSON.stringify({
        q: userInput(),
        source: "en",
        target: selectedLang(),
      }),
      headers: { "Content-Type": "application/json" },
    });
  
    let data = await res.json();
    let { translatedText } = data;
    appendData(translatedText);
    // console.log(data);
    // console.log("hi")
  }

function getthevalu() {
    let log = document.getElementById("left");
    translate();
  }

function appendData(data){
    let target = document.getElementById("right");
    target.value = data
}

async function getlang(){
    let res = await fetch(`https://libretranslate.de/languages`);
    let data = await res.json();
    
    appendLang(data);
}
getlang();

function appendLang(d){
    let select_div = document.getElementById('Lang');
    d.forEach(element => {
        let opt = document.createElement('option');
        opt.innerText = element.name;
        // console.log(opt.innerText)
        opt.value = element.code;
        select_div.append(opt);
        
    });
}