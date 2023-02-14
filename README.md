# TodoList

React 활용 능력을 키우기 위한 TodoList 연습

----------------------

### File Directory 

styled-component 기준

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

##### 상단에 오늘 날짜와 요일, 남은 할 일의 개수가 표시 됩니다.

##### Create
+ 하단의 초록색 버튼을 클릭 시 input창이 나와 내용을 입력할 수 있습니다.

##### Check
+ 좌측의 동그라미 버튼 or 목록이름 클릭을 이용해 실천 여부를 체크할 수 있습니다. 완료 체크 시 목록에 취소선이 그어집니다.

##### Remove
+ 목록에 마우스를 올리면 우측에 휴지통 아이콘이 나타나며 아이콘 클릭 시 목록에서 삭제됩니다.

![image](https://user-images.githubusercontent.com/109052469/218026388-d69df8b1-4e09-4295-98df-77ad0e083110.png)

### Version
---------
- Styled Component Version
- Css module Version
- Redux-toolkit Version
- Function Update Version

### Source
----------
벨로퍼트님의 TodoList - https://react.vlpt.us/mashup-todolist/


### Review
-----------

##### styled-component

##### css-module
기존에는 css-module 방식을 사용했었는데 js코드와 css가 분리된다는 장점이 있어 관리가 편하다.
<br />하지만 하나의 컴포넌트당 파일이 두개라 폴더가 복잡해 보이고 import도 계속 해주어야 하기 때문에 불편한 점도 있다.
<br />styled-component 방식에서는 props로 상태에 따른 css라던지 이벤트 효과를 그 파일에서 바로바로 설정할 수 있는데
<br />css-module 방식은 이벤트 핸들러를 따로 만들고, 맞는 className을 설정해주어야해서 번거로운 점이 있다.
