const quotes = [
    {
        quote: "01 dasdgfajfadsg jalskdjf",
        author: "bvn kljf sadf",
    },
    {
        quote: "02 adf ajflasjgfsdf sdlkfjalskdjf",
        author: "utr jf sadf",
    },
    {
        quote: "03 m.,fggskj jflasjdfljasd lkfjalskdjf",
        author: "asdkljf sadf",
    },
    {
        quote: "04 pyiouc rytlasjd flja sdlkfjalskdjf",
        author: "wthljf sadf",
    },
    {
        quote: "05 bvm sdajflasjd fljasdlkfjalskdjf",
        author: "a.nmkljf sadf",
    },
    {
        quote: "06 ;869tukflsda jflasjdf ljasdlkfjalskdjf",
        author: "fsg.ljf sadf",
    },
    {
        quote: "07 dfsghs daj flasjdflja sdlkfjalskdjf",
        author: "bcvnkljf sadf",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:nth-child(2)");
//const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
//console.log(quote);
//console.log(author);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;