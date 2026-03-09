function countDown(n) {
  console.log("Bắt đầu hàm với n =", n);

  if (n === 0) {
    console.log("Đã đến base case (n = 0), dừng lại");
    return;
  }

  console.log("In số:", n);

  countDown(n - 1);

  console.log("Quay lại hàm với n =", n);
}

countDown(3);
