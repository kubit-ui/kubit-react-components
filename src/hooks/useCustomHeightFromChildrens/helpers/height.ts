// Set list options height when not use the ActionbottomSheet
export const getHeight = (element: HTMLElement[], limit: number): string => {
  const REM_MEASURE = 16;
  let numItemsPrinted = 0;
  let listIndex = 0;
  let isTitle = true;
  let top: number | null = null;
  let bottom: number | null = null;

  for (let i = 0; i < limit; i++) {
    // check if there are no more items in the current list to loop through the next one
    if (!element[listIndex]?.children[i - numItemsPrinted]) {
      numItemsPrinted += element[listIndex]?.childElementCount as number;
      listIndex++;
      isTitle = true;
    }
    // check if list exists
    if (!element[listIndex]) {
      break;
    }

    // check if it's a title or list item and add its height
    if (element[listIndex].previousSibling && isTitle) {
      isTitle = false;
      numItemsPrinted++;
      if (top === null) {
        top = (element[listIndex].previousSibling as HTMLElement)?.getBoundingClientRect().top;
      }
      bottom = (element[listIndex].previousSibling as HTMLElement)?.getBoundingClientRect().bottom;
    } else {
      if (top === null) {
        top = element[listIndex].children[i - numItemsPrinted]?.getBoundingClientRect().top;
      }
      bottom = element[listIndex].children[i - numItemsPrinted]?.getBoundingClientRect().bottom;
    }
  }

  if (bottom !== null && top !== null) {
    return `${(bottom - top) / REM_MEASURE}rem`;
  }

  return '0rem';
};
