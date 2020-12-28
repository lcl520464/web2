# 四川文产院 2018 级《WEB 前端实训》试卷答卷

> 答卷说明：
> 1. 本试卷满分 100 分，120 分钟完卷。
> 2. 本次考试为开卷考试。
> 3. 本试卷适用于 2018 级移动专业 1、2 班

## 一、选择题（30 分，共 15 题，每题 2 分，答案包含单选、多选）

1. JavaScript 中声明变量的关键字包括：_______ABC________。
2. 如下属于 JavaScript 原始数据类型的有：_____ABD______。
3. 在什么时候会出现 undefined?__ABCD_____
4. 以下数组方法中，哪一个是用于删除数组中的第一个元素?____C___
5. 定义函数的方式包括：_____ABCD_____
6. 间接调用函数的方法包括：_____ABC_______
7. 下述有关闭包的叙述，正确的有：___ABCD__________。
8. 下面有关纯函数的叙述，正确的有：____ABC_____________。
9. 面向对象编程的基本特征包括：_________BCD__________。
10. 在 JavaScript 中创建对象的方式包括：__________ABCD________。
11. 在 JavaScript 中，执行上下文的创建分为两个阶段，这两个阶段是：____CD________。
12. 变量声明的三种方式中，变量可以提升的方式包括：_____A___。
13. 在 JavaScript 中，有关 this 值的说法，正确的包括：_____AC________。
14. 下面有关 ES6 类的说法，正确的包括：_______ABD_____。
15. 下面有关 ES6 类的静态方法，正确的包括：___AC_________。

------

## 二、代码填空题（20 分，共 5 题，每题 4 分）

1. 控制台的输出为：`______student undefined______________`。
2. 控制台的输出为：`______________1________`。
3. 控制台的输出为：`____________i am outside!__________`。
4. 控制台的输出为：`___________i am outside!___________`。
5. 控制台的输出为：
    `______小明______`
    `_______hi_____`
	
-------

## 三、代码题（50 分，共 5 题，每题 10 分）

1. 斐波那契（Fibonacci）数组的计算是一项很耗时的操作，请使用 Memoization 技术对斐波那契数组的计算进行优化。

```js

```
function memoF(n) {
    memoF.cache = memoF.cache || {};
    if (!memoF.cache[n]) {
      memoF.cache[n] = n < 2 ? n : arguments.callee(n - 1) + arguments.callee(n - 2);
    }  return memoF.cache[n];
  }
  console.time();
  console.log(memoF(40));
  console.timeEnd();
  



-------

2. 代码为：

```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=1200, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <ul id = "books">
            <li>Java</li>
            <li>Python</li>
            <li>Javasript</li>
        </ul>
        <input type="Text"  id="bookName" />
        <button id = "btnAdd">+</button>
        <button id = "btnDel">-</button>
        <script>
            const books = document.querySelector("#books");
            const bookName = document.querySelector("#bookName");
            const btnAdd = document.querySelector("#btnAdd");
            const btnDel = document.querySelector("#btnDel");

            const addBooks = () => {
                const oElement = document.createElement('li');
                const oText = document.createTextNode(bookName.value);
                oElement.appendChild(oText);
                books.appendChild(oElement);
                bookName.value = '';
            }

            const delBooks = () => {
                books.removeChild(books.lastElementChild);
            }
            btnAdd.addEventListener("click",addBooks);
            btnDel.addEventListener("click",delBooks);
        </script>
    </body>
    </html>



```

-------

3. 代码为：

```js
const oArray = [1, 2, 2, 3, null, null, undefined, undefined, 4, 4];

```
const num = [1, 2, 2, 3,null, null, undefined, undefined, 4, 4];
const mySet = new Set(num);    
const num1 = [...mySet];
console.log(num1);



-------

4. 代码：

```js
const oArray = [1, 2, 12, 10, 33, 7, 9, 22];

```
const oArray = [1, 2, 12, 10, 33, 7, 9, 22];
function num(a, b) {
  return a - b;
}
oArray.sort(num);   
console.log( oArray);



-------

5. 代码：

```js
const oArray = [0, 12, 7, 8, 9, 24, 1];

```
const oArray = [0, 12, 7, 8, 9, 24, 1];
const a2 = oArray.filter((a) => a % 2 === 0)
const a3 = a2.reduce(
    (sum, curVa1) => sum + curVa1
)
console.log(a3)









完成答卷后，请将答卷上传到个人远程仓库。否则以零分处理。

​        