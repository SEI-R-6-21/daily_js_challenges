// totalTaskTime([], 1) // => 0
// totalTaskTime([4, 2, 5], 1) // => 11
// totalTaskTime([5, 8], 2) // => 8
// totalTaskTime([4, 2, 10], 2) // => 12
// totalTaskTime([2, 2, 3, 3, 4, 4], 2) //=> 9
totalTaskTime([5, 2, 6, 8, 7, 2], 3) // => 12

function totalTaskTime(arr, n) {
  let time = 0,
    shortestTask,
    threads
  while (arr.length > n) {
    threads = arr.splice(0, n)
    shortestTask = Math.min(...threads)
    time += shortestTask
    threads = threads.map((task) => task - shortestTask).filter((task) => task)
    arr = threads.concat(arr)
  }
  // console.log(threads)
  // console.log(time + (arr.length ? Math.max(...arr) : 0))
}
