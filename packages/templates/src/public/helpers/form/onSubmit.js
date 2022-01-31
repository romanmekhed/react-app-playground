export const onSubmit = (
  values,
  togglePopup,
) => {
  console.log(values)
  togglePopup(true);
};

export default onSubmit;
