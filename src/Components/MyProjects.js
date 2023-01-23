const MyProjects = [
  {
    id: 1,
    title: "Meowy Christmas",
    image:
      "https://cdn.pixabay.com/photo/2021/11/23/15/45/cat-6819048__340.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut tempus dui. Etiam semper nisl vitae lectus malesuada dictum. Donec dictum lacus dui, vel convallis nibh rhoncus ut. Aenean sit amet ultricies eros, a ultrices magna. Pellentesque in facilisis nunc, in condimentum ipsum. Nam suscipit lobortis volutpat. ",
  },
  {
    id: 2,
    title: "Kitty Kat",
    image:
      "https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg",
    description:
      "What's this little buddy thinking about? Did he just see something amazing? Or something spooky? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut tempus dui. Etiam semper nisl vitae lectus malesuada dictum. Donec dictum lacus dui, vel convallis nibh rhoncus ut. Aenean sit amet ultricies eros, a ultrices magna. Pellentesque in facilisis nunc, in condimentum ipsum. Nam suscipit lobortis volutpat. ",
  },
  {
    id: 3,
    title: "Meowzers",
    image:
      "https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg",
    description:
      "This cat has had a day. Don't mess with him. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut tempus dui. Etiam semper nisl vitae lectus malesuada dictum. Donec dictum lacus dui, vel convallis nibh rhoncus ut. Aenean sit amet ultricies eros, a ultrices magna. Pellentesque in facilisis nunc, in condimentum ipsum. Nam suscipit lobortis volutpat. ",
  },
  {
    id: 4,
    title: "Beans",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Roasted_coffee_beans.jpg/1200px-Roasted_coffee_beans.jpg",
    description:
      "Morbi ut tempus dui. Etiam semper nisl vitae lectus malesuada dictum. Donec dictum lacus dui, vel convallis nibh rhoncus ut. Aenean sit amet ultricies eros, a ultrices magna. Pellentesque in facilisis nunc, in condimentum ipsum. Nam suscipit lobortis volutpat. ",
  },
];

export default MyProjects;

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
