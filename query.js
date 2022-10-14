// const db = require("./models");
// const mongoose = require("mongoose");

// const books = [
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
