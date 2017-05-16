var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

var i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

for (var list = 0; list < ingredients.length; list++) {
  console.log(ingredients[list]);
}

for (var i = ingredients.length-1; i >= 0 ; i--) {
  console.log(ingredients[i]);
}
