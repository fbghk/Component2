const component = () => {
  let obj = {
    name: "어휴",
    age: 1500,
    job: "운동"
  };

  let innerFunc =()=> {
    if (obj.age > 20) {
      return "여름엔 맥주"
    }else{
      return "여름엔 역시 요쿠르트"
    }
  }

  let anotherFunc = () => {
    if(obj.job === "미남"){
      return "ㄴㄴ"
    }else{
      return "ㅇㅇ"
    }

  }

  return `
  <h1>${obj.name}</h1>
  <h2>${innerFunc()}</h2>
  <h3>${anotherFunc()}</h3>
  `;
}

console.log(component())