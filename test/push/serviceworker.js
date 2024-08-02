

self.addEventListener('push', (e) => {
  console.log('push message RECEIVED');
  console.log(e);
})

console.log("sw registered");
