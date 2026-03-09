/*
========================================
SET TRONG JAVASCRIPT - DEMO ĐẦY ĐỦ
========================================

Set là một collection lưu trữ các giá trị:
- Không cho phép trùng lặp
- Giữ thứ tự thêm vào
*/

console.log("===== 1. TẠO SET =====");

/*
Input:
const set = new Set();
Output:
Set rỗng
*/

const set1 = new Set();
console.log(set1); // Set(0) {}

/*
Input:
const set = new Set([1,1,2,2,3])
Output:
Set(3) {1,2,3}
*/

const set2 = new Set([1, 1, 2, 2, 3]);
console.log(set2);

console.log("\n===== 2. ADD PHẦN TỬ =====");

/*
Input:
set.add(5)
set.add(6)
set.add(6)

Output:
Set(2) {5,6}
*/

const set3 = new Set();

set3.add(5);
set3.add(6);
set3.add(6); // duplicate -> bị bỏ

console.log(set3);

console.log("\n===== 3. SIZE =====");

/*
Input:
set.size

Output:
số lượng phần tử trong set
*/

const set4 = new Set([1, 2, 3, 4]);

console.log(set4.size); // 4

console.log("\n===== 4. HAS (KIỂM TRA TỒN TẠI) =====");

/*
Input:
set.has(2)

Output:
true / false
*/

const set5 = new Set([1, 2, 3]);

console.log(set5.has(2)); // true
console.log(set5.has(5)); // false

console.log("\n===== 5. DELETE =====");

/*
Input:
set.delete(2)

Output:
true nếu xóa thành công
false nếu không tồn tại
*/

const set6 = new Set([1, 2, 3]);

console.log(set6.delete(2)); // true
console.log(set6); // Set {1,3}

console.log(set6.delete(5)); // false

console.log("\n===== 6. CLEAR =====");

/*
Input:
set.clear()

Output:
Set rỗng
*/

const set7 = new Set([1, 2, 3]);

set7.clear();

console.log(set7); // Set(0) {}

console.log("\n===== 7. ITERATE SET =====");

/*
Set có thể duyệt bằng for...of
*/

const set8 = new Set([10, 20, 30]);

for (const value of set8) {
  console.log(value);
}

/*
Output:
10
20
30
*/

console.log("\n===== 8. FOREACH =====");

/*
Input:
set.forEach(callback)

Output:
duyệt từng phần tử
*/

const set9 = new Set([1, 2, 3]);

set9.forEach((value) => {
  console.log(value);
});

/*
Output:
1
2
3
*/

console.log("\n===== 9. SET -> ARRAY =====");

/*
Input:
[...set]

Output:
array
*/

const set10 = new Set([1, 2, 3]);

const arr = [...set10];

console.log(arr); // [1,2,3]

console.log("\n===== 10. ARRAY -> SET =====");

/*
Input:
new Set(array)

Output:
Set
*/

const arr2 = [1, 1, 2, 2, 3];

const set11 = new Set(arr2);

console.log(set11); // Set {1,2,3}

console.log("\n===== 11. XOÁ PHẦN TỬ TRÙNG TRONG ARRAY =====");

/*
Input:
[1,1,2,2,3]

Output:
[1,2,3]
*/

const arr3 = [1, 1, 2, 2, 3];

const unique = [...new Set(arr3)];

console.log(unique);

console.log("\n===== 12. SET VỚI OBJECT =====");

/*
Set so sánh object theo reference
*/

const set12 = new Set();

const obj1 = { a: 1 };
const obj2 = { a: 1 };

set12.add(obj1);
set12.add(obj2);

console.log(set12);

/*
Output:
Set(2) { {a:1}, {a:1} }

vì obj1 và obj2 là 2 object khác nhau trong bộ nhớ
*/

console.log("\n===== 13. VALUES =====");

/*
Input:
set.values()

Output:
iterator của các giá trị
*/

const set13 = new Set([1, 2, 3]);

const iterator = set13.values();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

/*
Output:
{ value:1, done:false }
{ value:2, done:false }
{ value:3, done:false }
*/

console.log("\n===== 14. KEYS =====");

/*
Trong Set:
keys() giống values()
*/

const set14 = new Set([5, 6, 7]);

console.log([...set14.keys()]);

/*
Output:
[5,6,7]
*/

console.log("\n===== 15. ENTRIES =====");

/*
entries() trả về [value,value]
*/

const set15 = new Set([1, 2]);

console.log([...set15.entries()]);

/*
Output:
[ [1,1], [2,2] ]
*/
