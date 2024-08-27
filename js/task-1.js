function slugify(title) {
  const a = title.split(' ');
  const b = a.join('-');
  return b.toLowerCase();
}

console.log(slugify('Arrays for begginers'));
console.log(slugify('English for developer'));
console.log(slugify('Ten secrets of JavaScript'));
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS'));
