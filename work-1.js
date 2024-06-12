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
  get name(){
    return this._name;
  }

  set name(name){
    this._name = name;
  }

  get age(){
    return this._age;
  }

  set age(age){
    this._age = age;
  }

  get job(){
    return this._job;
  }

  set job(job){
    this._job = job;
  }
}
  
const dlfma = "비설";
const skdl = 900;
const wlrdjq = "보좌관";

const dlfurtj = new BasicData(dlfma, skdl, wlrdjq)

console.log("이름: ", dlfurtj.name)
console.log("나이: ", dlfurtj.age)
console.log("직업: ", dlfurtj.job)
console.log(dlfurtj instanceof BasicData)


  
  
