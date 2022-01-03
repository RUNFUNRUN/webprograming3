export async function fetchImages(breed) {
  const response = await fetch(
    `https://dog.ceo/api/breed/${breed}/images/random/20`
  );
  const data = await response.json();
  return data.message;
}
// export async function fetchImages(breed) {
//   const response = await fetch(
//     `https://http.cat/${breed}`
//   );
//   const data = await response.json();
//   return data.message;
// }
