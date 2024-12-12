# try

<!-- index.html -->
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>いいね!ダメねボタン</title>
</head>
<body>

<button onclick="like()">いいね!</button>
<button onclick="dislike()">ダメね</button>
<script src="script.js"></script>

</body>
</html>
```

```javascript
// script.js
let count = 0;

function like() {
    count++;
    console.log("いいね!");
}

function dislike() {
    if (count >= 1) {
        count--;
        console.log("ダメね");
    } else {
        console.log("もうダメねを押したことはないみたいです")
    }
}











