# try

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>いいねボタン</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <!-- いいねボタンとカウント表示 -->
    <button id="like-btn">いいね!</button><div id="count-area"></div>

    
    

    <script>
        // IPアドレスの取得（実際のブラウザ環境では機能しないことに注意）
        var ipAddress = "127.0.0.1"; // for local use
        // localStorageを使用していいね数を保存する場合、ここに適切な値を使うこと。
        var countKey = 'likeCount';
        
        $(document).ready(function() {
            // いいねボタンをクリックしたときの処理
            $('#like-btn').on('click', function() {
                // IPアドレスがすでにある場合、カウントアップする
                if (localStorage.getItem(ipAddress)) {
                    var count = localStorage.getItem(ipAddress);
                    localStorage.setItem(ipAddress, parseInt(count) + 1);
                    updateCount();
                } else {
                    // IPアドレスがなければ初期値からカウントを始める
                    localStorage.setItem(ipAddress, 1);
                    updateCount();
                }
            });
            
            function updateCount() {
                var count = localStorage.getItem(ipAddress);
                $('#count-area').text('いいね数:' + count);
            }
        });
    </script>
</body>
</html>


