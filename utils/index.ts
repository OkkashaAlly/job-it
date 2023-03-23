// function that checks image url is valid or not using regex
export const isValidImageUrl = (url: string | null) => {
  return url!.match(/\.(jpeg|jpg|gif|png)$/) != null;
};
