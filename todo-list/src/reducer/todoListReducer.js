export default function todoListReducer(prevItem, action) {
  switch (action.type) {
    case "add": {
      const { addItem } = action;
      let newIdx;
      if (prevItem.length === 0) {
        newIdx = 0;
      } else {
        newIdx = prevItem[prevItem.length - 1].index + 1;
      }
      return [...prevItem, { index: newIdx, name: addItem, isChecked: false }];
    }
    case "update": {
      const { isChecked, index } = action;
      const newItems = prevItem.map((item) => {
        if (item.index === index) {
          return { ...item, isChecked: !isChecked };
        } else {
          return { ...item };
        }
      });
      return [...newItems];
    }
    case "delete": {
      const { index } = action;

      const newItems = prevItem.filter((item) => {
        return item.index !== index;
      });
      return [...newItems];
    }
    case "default": {
      throw Error(`알 수 없는 action type ; ${action.type}`);
    }
  }
}
