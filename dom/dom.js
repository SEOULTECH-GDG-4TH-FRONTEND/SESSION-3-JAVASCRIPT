// External JavaScript

// DOM 요소 선택: 버튼과 리스트 요소 선택

// - `getElementById()`, `getElementsByClassName()`, `getElementsByTagName()`: 요소 선택
// - `querySelector()`, `querySelectorAll()`: CSS 선택자 기반 요소 선택
// - `createElement()`: 새로운 요소 생성
// - `appendChild()`, `removeChild()`: 요소 추가 및 삭제
// - `setAttribute()`, `getAttribute()`: 요소 속성 변경 및 조회
// - `textContent`, `innerHTML`: 요소의 텍스트나 HTML 내용 변경

const itemList = document.getElementById("item-list");
const addItemBtn = document.getElementById("add-item-btn");
const removeItemBtn = document.getElementById("remove-item-btn");
const highlightItemBtn = document.getElementById("highlight-item-btn");
const highlightAllBtn = document.getElementById("highlight-all-btn");
const resetHighlightBtn = document.getElementById("reset-highlight-btn");

// - **입력 이벤트**: `input`
// - **폼 제출 이벤트**: `submit`
// - **키보드 이벤트**: `keydown`, `keyup`
// - **마우스 이벤트**: `mouseover`, `mouseout`

// 버튼을 클릭했을 때 새로운 아이템을 리스트에 추가
addItemBtn.addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.textContent = `아이템 ${itemList.children.length + 1}`;
    newItem.className = "item";
    itemList.appendChild(newItem);
});

// 버튼을 클릭했을 때 마지막 아이템을 리스트에서 제거
removeItemBtn.addEventListener("click", () => {
    if (itemList.children.length > 0) {
        itemList.removeChild(itemList.lastChild);
    }
});

// 첫 번째 아이템 강조 (배경색 변경)
highlightItemBtn.addEventListener("click", () => {
    const firstItem = itemList.querySelector(".item");
    if (firstItem) {
        firstItem.classList.toggle("highlight");
    }
});

// 모든 아이템 강조 (배경색 변경)
highlightAllBtn.addEventListener("click", () => {
    const allItems = document.getElementsByClassName("item");
    for (let item of allItems) {
        item.classList.add("highlight");
    }
});

// 강조 해제 (모든 아이템의 강조 해제)
resetHighlightBtn.addEventListener("click", () => {
    const allItems = document.querySelectorAll(".item");
    allItems.forEach((item) => item.classList.remove("highlight"));
});
