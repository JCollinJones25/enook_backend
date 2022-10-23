// const db = require("./models");
// const mongoose = require("mongoose");

// const books = [
    //   {
    //     title: "The Eye of the World",
    //     author: "Robert Jordan",
    //     cover:
    //       "https://static.wikia.nocookie.net/wot/images/2/2d/EOTWCover.jpg",
    //     year: 1990,
    //     overview:
    //       "The Eye of the World, the first novel in Robert Jordan's #1 New York Times bestselling epic fantasy series, The Wheel of Time®, follows Moiraine Damodred as she arrives in Emond's Field on a quest to find the one prophesized to stand against The Dark One.",
    //     genre: "Fantasy",
    //     price: 5.99,
    //   },
//   {
//     title: "Shutter Island",
//     author: "Dennis Lehane",
//     cover:
//       "http://prodimage.images-bn.com/pimages/9780061898815_p0_v3_s1200x630.jpg",
//     year: 2003,
//     overview:
//       "In 1954, widower U.S. Marshal Edward 'Teddy' Daniels and his new partner, Chuck Aule, go on a ferry boat to Shutter Island, the home of Ashecliffe Hospital for the criminally insane, to investigate the disappearance of a patient, Rachel Solando (who was incarcerated for drowning her three children).",
//     genre: "Mystery",
//     price: 7.99,
//   },
//   {
//     title: "Hamlet",
//     author: "William Shakespeare",
//     cover:
//       "https://www.memoriapress.com/wp-content/uploads/2018/07/Hamlet-Student-Cover-Saddle.jpg",
//     year: 1603,
//     overview:
//       "The ghost of the King of Denmark tells his son Hamlet to avenge his murder by killing the new king, Hamlet's uncle. Hamlet feigns madness, contemplates life and death, and seeks revenge. His uncle, fearing for his life, also devises plots to kill Hamlet.",
//     genre: "Tragedy",
//     price: 4.99,
//   },
//   {
//     title: "Confessions",
//     author: "Saint Augustine",
//     cover:
//       "http://prodimage.images-bn.com/pimages/9780199537822_p0_v2_s1200x630.jpg",
//     year: 400,
//     overview:
//       "The Confessions is a spiritual autobiography, covering the first 35 years of Augustine's life, with particular emphasis on Augustine's spiritual development and how he accepted Christianity. The Confessions is divided into 13 books. Books 1 through 9 contain Augustine's life story. Book 10 is an exploration of memory.",
//     genre: "Autobiography",
//     price: 6.99,
//   }
// ];

// db.Book.insertMany(books, {
//   ordered: false,
// })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("books inserted into mongo");
//   });

// db.Book.find({ genre: { $exists: false } })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("✅");
//   });
