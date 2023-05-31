const regexUrl =
  /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
export default function addRecipeValidation(recipe) {
  const errors = {};

  if (!recipe.name.trim()) errors.name = "This field is empty";
  if (!recipe.food_summary.trim()) errors.food_summary = "This field is empty";
  if (!recipe.image.trim()) errors.image = "This field is empty";
  if (!regexUrl.test(recipe.image)) errors.image = 'You can only enter the url of image'
  return errors;
}
