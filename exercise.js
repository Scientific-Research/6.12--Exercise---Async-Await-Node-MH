// getCustomer(1, (customer) => {
//   console.log("Customer: ", customer);
//   if (customer.isGold) {
//     getTopMovies((movies) => {
//       console.log("Top movies: ", movies);
//       sendEmail(customer.email, movies, () => {
//         console.log("Email sent...");
//       });
//     });
//   }
// });

// Async and Await approach:
console.log("Before...");

const displayInfo = async () => {
  try {
    const customer = await getCustomer(5);
    console.log("Customers: ", customer);
    if (customer.isGold) {
      const TopMovies = await getTopMovies();
      console.log("Top movies:", TopMovies);
      const Emails = await sendEmail(customer.email, TopMovies);
      // const Emails = await sendEmail(customer.email, TopMovies);
      // console.log(Emails);
      console.log("Email sent...");
    }
  } catch (err) {
    console.log("Something goes wrong...", err.message);
  }
};
console.log("After...");
displayInfo();

// function getCustomer(id, callback) {
function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // callback({
      resolve({
        id: id,
        name: "Mosh Hamedani",
        isGold: true,
        email: "email",
      });
    }, 2000);
  });
}

// function getTopMovies(callback) {
function getTopMovies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // callback(["movie1", "movie2"]);
      resolve(["movie1", "movie2"]);
    }, 2000);
  });
}

// function sendEmail(email, movies, callback) {
function sendEmail(email, movies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // callback();
      resolve();
    }, 2000);
  });
}
