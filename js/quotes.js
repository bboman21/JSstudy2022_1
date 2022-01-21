const quotes = [
    {
        quote: "01 ahsdfnlkjsdlfsja asdfasdfasdfasdf sdf asdfasd",
        author: "ajsdflds",
    },
    {
        quote: "02 aagalkjsdlfsja asdfasdfasdfasdf sdf asdfasd",
        author: "ajsdflds",
    },
    {
        quote: "03 jghg ae avsew asdf sdf asdfasd",
        author: "msgfbvd",
    },
    {
        quote: "04 gbsdf gbvccasdffasdf asdfasf fasd",
        author: "vdscvsd d",
    },
    {
        quote: "05 etg nb gfsf sfsdffasdsafassafa asfdsf  asf ",
        author: "xvcasdv flds",
    },
    {
        quote: "06 nstrh afs gfhsdfasdf swfsczxsf dcafdf",
        author: "reg flds",
    },
    {
        quote: "07 lkjhngfb43 wfaht retasdfasvzx dafawe f",
        author: "wefxcb lds",
    },
    {
        quote: "08 aver dlfsja asdxdfsefasabfzvzsvcswecewc",
        author: "sdaf lds",
    },
    {
        quote: "09 eyjiuio lfsja asdf asdsa fssfSFcv fasd",
        author: "jhsfdc ds",
    },
    {
        quote: "10 fkhg g dsvdfa asdfasdfasdfascvbzres eawf aw",
        author: "xcvr lds",
    },
];






const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;





