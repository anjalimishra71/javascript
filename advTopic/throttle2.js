function throttle(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

function handleLike() {
  console.log("Liked at", new Date().toLocaleTimeString());
}

const throttledLike = throttle(handleLike, 2000);

// You can now call:
// document.addEventListener("click", throttledLike);
