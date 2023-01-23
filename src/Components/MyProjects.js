export default [
  {
    id: 1,
    title: "Meowy Christmas",
    image:
      "https://cdn.pixabay.com/photo/2021/11/23/15/45/cat-6819048__340.jpg",
    description:
      "This little cutie wishes you a Meowy Christmas and a Happy New Year.",
  },
  {
    id: 2,
    title: "Kitty Kat",
    image:
      "https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg",
    description:
      "What's this little buddy thinking about? Did he just see something amazing? Or something spooky?",
  },
  {
    id: 3,
    title: "Meowzers",
    image:
      "https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg",
    description: "This cat has had a day. Don't mess with him.",
  },
];

//How I originally wrote the code for conditionally rendering the button classes.
// {
//   isAdmin ? (
//     <button className="btn btn-danger" onClick={() => handleChangeView(true)}>
//       ADMIN
//     </button>
//   ) : (
//     <button
//       className="btn btn-warning"
//       onClick={() => handleChangeView(true)}
//     >
//       ADMIN
//     </button>
//   );
// }
// {
//   isAdmin ? (
//     <button
//       className="btn btn-warning"
//       onClick={() => handleChangeView(false)}
//     >
//       USER
//     </button>
//   ) : (
//     <button
//       className="btn btn-danger"
//       onClick={() => handleChangeView(false)}
//     >
//       USER
//     </button>
//   );
// }
