# try

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>いいねボタン</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <!-- いいねボタン -->
    <button id="like-btn">いいね!</button>
    <button id="like-btn">いいね!</button>
    <button id="like-btn">いいね!</button>

    <!-- いいね数カウント表示エリア -->
    <div id="count-area" style="display: inline-block; margin-left: 5px;"></div>
    <div id="count-area" style="display: inline-block; margin-left: 5px;"></div>
    <div id="count-area" style="display: inline-block; margin-left: 5px;"></div>
    <script>
        // sessionStorageを使用していいね数を保存する
        var countKey = 'likeCount';
        
        $(document).ready(function() {
            // いいねボタンをクリックしたときの処理
            $('#like-btn').on('click', function() {
                // IPアドレスがすでにある場合、カウントアップする
                if (sessionStorage.getItem(countKey)) {
                    var count = sessionStorage.getItem(countKey);
                    sessionStorage.setItem(countKey, parseInt(count) + 1);
                } else {
                    // IPアドレスがなければ初期値からカウントを始める
                    sessionStorage.setItem(countKey, 1);
                }
                
                // カウント表示更新
                updateCount();
            });
            
            function updateCount() {
                var count = sessionStorage.getItem(countKey);
                $('#count-area').text('いいね数:' + count);
            }
        });
    </script>
</body>
</html>



