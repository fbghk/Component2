// const basicData = {
//   name : "",
//   age: 0,
//   job : ""
// }

// const component = () => {
//   const basicData = {
//     name : "하밀",
//     age : 900,
//     job : "화화"
//   }

class BasicData {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
};

  const component = () => {
    let obj = new BasicData("공은", 26, "야구공");

    console.log(obj)
    // const decision = () => {};
    
    return `<html></html>`
  };

  console.log(component())

  const test = {
    set name(){

    }
  }
  
  
