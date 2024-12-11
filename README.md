# try

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>いいねボタン</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <!-- いいねボタンのセット -->
    <div style="margin-bottom: 10px;">
        <!-- いいねボタン -->
        <button id="like-btn1" class="like-btn">いいね!</button>

        <!-- いいね数カウント表示エリア -->
        <div id="count-area1" style="display: inline-block; margin-left: 5px;"></div>
    </div>

    <div style="margin-bottom: 10px;">
        <!-- いいねボタン -->
        <button id="like-btn2" class="like-btn">いいね!</button>

        <!-- いいね数カウント表示エリア -->
        <div id="count-area2" style="display: inline-block; margin-left: 5px;"></div>
    </div>

    <script>
        // sessionStorageを使用していいね数を保存する
        var countKey = 'likeCount';
        
        $(document).ready(function() {
            // いいねボタンをクリックしたときの処理
            $('.like-btn').on('click', function() {
                // ボタンのidからカウントキーを作成する
                var btnId = $(this).attr('id');
                var countKey = 'count-' + btnId;
                
                // いいねボタンをクリックしたときの処理
                if (sessionStorage.getItem(countKey)) {
                    var count = sessionStorage.getItem(countKey);
                    sessionStorage.setItem(countKey, parseInt(count) + 1);
                } else {
                    // IPアドレスがなければ初期値からカウントを始める
                    sessionStorage.setItem(countKey, 1);
                }
                
                // カウント表示更新
                updateCount(btnId);
            });
            
            function updateCount(btnId) {
                var count = sessionStorage.getItem('count-' + btnId);
                $('#' + 'count-area' + btnId).text('いいね数:' + count);
            }
        });
    </script>
</body>
</html>




