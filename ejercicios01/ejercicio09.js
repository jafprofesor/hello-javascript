function mostrarLikes(usuarios) {
  if (usuarios.length === 0) return "Nadie ha dado like";
  if (usuarios.length === 1) return `${usuarios[0]} dio like`;
  if (usuarios.length === 2)
    return `${usuarios[0]} y ${usuarios[1]} dieron like`;
  return `${usuarios[0]}, ${usuarios[1]} y ${
    usuarios.length - 2
  } personas más dieron like`;
}

console.log(mostrarLikes(["Juan"])); // "Juan dio like"
console.log(mostrarLikes(["Juan", "Ana"])); // "Juan y Ana dieron like"
console.log(mostrarLikes(["Juan", "Ana", "Carlos"])); // "Juan, Ana y 1 persona más dieron like"
console.log(mostrarLikes([])); // "Nadie ha dado like"
