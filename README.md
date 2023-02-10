# TodoList

React 활용 능력을 키우기 위한 TodoList 연습

----------------------

### File Directory 

```
📦src
 ┣ 📂components
 ┃ ┣ 📂Header
 ┃ ┃ ┗ 📜Header.js
 ┃ ┣ 📂Todo
 ┃ ┃ ┣ 📜TodoCreate.js
 ┃ ┃ ┣ 📜TodoItem.js
 ┃ ┃ ┣ 📜TodoList.js
 ┃ ┃ ┗ 📜TodoTemplate.js
 ┃ ┣ 📂Top
 ┃ ┃ ┣ 📜CurrentData.js
 ┃ ┃ ┗ 📜RemainingTodo.js
 ┃ ┗ 📂UI
 ┃ ┃ ┣ 📜Card.js
 ┃ ┃ ┗ 📜Layout.js
 ┣ 📂store
 ┃ ┗ 📜todoItem-context.js
 ┣ 📜App.js
 ┣ 📜index.css
 ┗ 📜index.js
 ```
 
 #### App > TodoTemplate > Header, TodoList, TodoCreate
 
 --------------------------
 
### Package

common package
```
 npm install react-icons --save
```
styled version
```
 npm install --save styled-components
```
redux-toolkit version
```
```

------------------------------

### Function

##### 오늘 날짜와 요일, 남은 할 일의 개수가 표시 됩니다.

##### Create
+ 하단의 초록색 버튼을 클릭 시 input창이 나와 내용을 입력할 수 있습니다.

##### Check
+ 좌측의 동그라미 버튼 or 목록이름 클릭을 이용해 실천 여부를 체크할 수 있습니다.

##### Remove
+ 목록에 마우스를 올리면 우측에 휴지통 아이콘이 나타나며 아이콘 클릭 시 목록에서 삭제됩니다.

![image](https://user-images.githubusercontent.com/109052469/218026180-7f8b7332-afab-42c5-9c1e-8c71fa8e9a76.png)

![image](https://user-images.githubusercontent.com/109052469/218026218-913815dd-a230-4cb6-926b-afb80e6106cc.png)

![image](https://user-images.githubusercontent.com/109052469/218026278-0a6340bb-9465-4607-9132-8c63ae3d97fb.png)
