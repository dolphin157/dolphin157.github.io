const quotes = [
    {
        quote: "영감님의 영광의 시대는 언제였죠..? 난 지금입니다!!",
        author: "강백호",
    },
    {
        quote:  "그래 난 정대만. 포기를 모르는 남자지. " ,
        author: "정대만",
    },
    {
        quote: "정말 좋아합니다. 이번엔 거짓이 아니라구요.",
        author: "강백호",
    },
    {
        quote:"포기하면 그 순간이 바로 시합 종료에요.   ",
        author:"안감독",
    },
    {
        quote:"왼손은 거들 뿐.     ",
        author:"강백호",
    },
    {
        quote:"나도 미국에간다 오늘 여기서 너를 쓰러트리고간다.",
        author:"서태웅",
    },
    {
        quote:"리바운드를 제압하는자가 농구를 제압한다.  ",
        author:"채치수",
    },
    {
        quote:"안선생님, 농구가 하고싶어요...",
        author:"정대만",
    },
    {
        quote:"저녀석을 쓰러트리고 내가 톱이된다.",
        author:"송태섭",
    },
    {
        quote:"나는 팀의 주역이 아니라도 좋다.",
        author:"변덕규",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()  * quotes.length)];


quote.innerText = todaysQuote.quote;
author.innerText = `-${todaysQuote.author}-`;