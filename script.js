{\rtf1\ansi\ansicpg932\cocoartf2820
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 HelveticaNeue;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab560
\pard\pardeftab560\slleading20\pardirnatural\partightenfactor0

\f0\fs26 \cf0 // script.js\
let count = 0;\
const likeBtn = document.getElementById('like-btn');\
const dislikeBtn = document.getElementById('dislike-btn');\
\
function like() \{\
    count++;\
    console.log(`\uc0\u12356 \u12356 \u12397 !($\{count\}\u22238 )`);\
\}\
\
function dislike() \{\
    if (count >= 1) \{\
        count--;\
        console.log(`\uc0\u12480 \u12513 \u12397 !($\{count\}\u22238 \u27531 \u12426 \u12414 \u12377 )`);\
    \} else \{\
        console.log("\uc0\u12418 \u12358 \u12480 \u12513 \u12397 \u12434 \u25276 \u12375 \u12383 \u12371 \u12392 \u12399 \u12394 \u12356 \u12415 \u12383 \u12356 \u12391 \u12377 ")\
    \}\
\}\
\
likeBtn.addEventListener('click', () => \{\
    like();\
\});\
\
dislikeBtn.addEventListener('click', () => \{\
    dislike();\
\});}