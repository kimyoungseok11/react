export default function counterReducer(numberObj, action) {
  switch (action.type) {
    case "plus": {
      return {
        ...numberObj,
        number: numberObj.number + numberObj.changeNum,
      };
    }
    case "minus": {
      return {
        ...numberObj,
        number: numberObj.number - numberObj.changeNum,
      };
    }
    case "change": {
      console.log(numberObj);
      return { ...numberObj, changeNum: numberObj.changeNum + 1 };
    }
    case "default": {
      throw Error(`알 수 없는 action type : ${action.type}`);
    }
  }
}
