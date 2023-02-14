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
대충 쓰는 법만 알고 있었는데 TodoList를 styled-component 방식으로 만들어 보니 css-module 방식보다 훨씬 더 편하다.
<br />styled-component의 장점으로는 js 파일에서 컴포넌트를 만들면 그 파일에서 바로 css를 적용할 수 있다는 것이 장점인 것 같다.
<br />그리고 css파일이 별도로 필요하지가 않아 폴더가 단순해 보이며 props를 이용해 내가 원하는 동작의 css를 바로 설정할 수 있어서 매우 편했다.
<br />단점으로는 css와 js코드가 한 파일에 같이 있어서 좀 어지럽게 느껴지지만 이 부분은 각 컴포넌트 부분을 접어놓으면 될 것 같다.
<br />또, styled-component 패키지를 설치해야 하고 css-module처럼 사용할 파일마다 import를 해주어야 하지만 그래도 나는 styled-component가 더 좋은 점이 많다고 생각이 들어서 이제는 styled-component를 주로 사용하게끔 할 것 같다.

##### css-module
기존에는 css-module 방식을 사용했었는데 js코드와 css가 분리된다는 장점이 있어 관리가 편하다.
<br />하지만 하나의 컴포넌트당 파일이 두개라 폴더가 복잡해 보이고(css 별로 파일을 모아놓으면 보기 좋을듯) import도 계속 해주어야 하기 때문에 불편한 점도 있다.
<br />styled-component 방식에서는 props로 상태에 따른 css라던지 이벤트 효과를 그 파일에서 바로바로 설정할 수 있는데
<br />css-module 방식은 이벤트 핸들러를 따로 만들고, 맞는 className을 설정해주어야해서 번거로운 점이 있다.
