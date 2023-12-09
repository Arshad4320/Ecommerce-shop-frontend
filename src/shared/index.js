export const getInfoToLocal = (info) => {
  const data = localStorage.getItem(info);

  const dataInfo = data ? data : null;
  return dataInfo;
};
