# try

<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>簡単な「いいね」ボタン</title>
  <style>
    /* いいねボタンのデザイン */
    .like-button {
      background-color: #007BFF;
      color: white;
      border: none;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      border-radius: 5px;
    }

    .like-button:hover {
      background-color: #0056b3;
    }

    .like-count {
      margin-top: 10px;
      font-size: 18px;
    }
  </style>
</head>
<body>

  <h1>あなたのウェブページ内の「いいね」ボタン</h1>
  
  <!-- いいねボタン -->
  <button class="like-button" id="like-button">いいね</button>
  
  <!-- いいね数表示 -->
  <div class="like-count" id="like-count">いいね数: 0</div>

  <script>
    // 初期のいいね数
    let likeCount = 0;

    // いいねボタンのクリックイベント
    document.getElementById("like-button").addEventListener("click", function() {
      likeCount++; // いいね数を増加
      document.getElementById("like-count").textContent = "いいね数: " + likeCount; // 表示を更新
    });
  </script>

</body>
</html>



