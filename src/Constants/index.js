const colors = {
  primary: '#29FFD8',
  secondary: '#006EF0',
  error: '#FF7294',
};


const serialize = (user) => {
  return `${user.name} ${user.email} ${user.islogged}`;
}

const deserialize = (userString) => {
  const terms = userString.split();
  return {
    name:terms[0],
    email:terms[1],
    islogged:terms[2]
  }
}


export{
    colors,
    serialize,
    deserialize
};