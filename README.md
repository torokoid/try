# try

// script.js
let count = 0;
const likeBtn = document.getElementById('like-btn');
const dislikeBtn = document.getElementById('dislike-btn');

function like() {
    count++;
    console.log(`いいね!(${count}回)`);
}

function dislike() {
    if (count >= 1) {
        count--;
        console.log(`ダメね!(${count}回残ります)`);
    } else {
        console.log("もうダメねを押したことはないみたいです")
    }
}

likeBtn.addEventListener('click', () => {
    like();
});

dislikeBtn.addEventListener('click', () => {
    dislike();
});

<!-- index.html -->
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>いいね!ダメねボタン</title>
    <script src="script.js"></script>
</head>
<body>

<button id="like-btn">いいね!</button>
<button id="dislike-btn">ダメね</button>

</body>
</html>











