
// 1. Withdraw money
// 2. Print the passbook
// 3. Apply for a loan

// Promise states
// 1. Pending
// 2. Resolved
// 3. Rejected

cb = (resolve, reject) => {
  console.log('Withdraw money - begin');
  setTimeout(() => {
    console.log('Withdraw money - end');
    resolve(1000);
    // reject()
  }, 5000);
}

p = new Promise(cb);
//console.log('promise object:', p);

p.then((amount) => {
  console.log('You withdrew Rs.', amount);
  console.log('Print passbook');
  //console.log('promise object:', p);
});
p.catch(() => {
  console.log('Withdraw failed')
  //console.log('promise object:', p);
});

console.log('Apply for a loan');
