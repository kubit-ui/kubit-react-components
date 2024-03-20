export const objectFlip = (obj: object): { [option: string]: string | null } => {
  return Object.keys(obj).reduce((ret, key) => {
    ret[obj[key]] = key;
    return ret;
  }, {});
};
