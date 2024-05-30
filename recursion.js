function fibSeq(n) {
  let sequence = [];
  for (let i = 0; i < n; i++) {
    let fibNum = fib(i);
    sequence.push(fibNum);
  }
  return sequence;
}

function fib(n) {
  if (n <= 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
}
