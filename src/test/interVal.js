

export function setTime(fn,wait) {
  setTimeout(() => {
    fn()
  }, wait);
}