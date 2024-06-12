// const tagComponent = (tagname, textnode) => {
//   return `<${tagname}><${textnode}></${tagname}>`;
// }

// const container = () => {
//   return `
//     ${tagComponent('header', '헤더부분')}
//     ${tagComponent('main', '메인부분')}
//     ${tagComponent('footer', '푸터부분')}
//   `
// }


//! 초 단위 랜덤으로 전 후 구하기
const component = () => {
  //! 날짜를 구하는 방식 확인 
  const currentDate = new Date();
  const formattedDate = 
  `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
  console.log(formattedDate);  

const chchch = currentDate.getSeconds()
  let dateFunc =()=> {
    if(chchch < 30){
      return "30초 전"
    }else{
      return "30초 후"
    }
  }

  return `
  <h1>${formattedDate}</h1>
  <h2>${dateFunc()}</h2>
  `
}


console.log(component())



//! 날짜를 구해서 함수에 적용
//! 
// todo "오늘 날짜가 12일 아니라면 A방식" 
// todo "오늘 날짜가 12일 이라면 B방식"
// todo 혹은 오전 오후