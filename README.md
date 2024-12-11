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

        <!-- カウント数表示エリア -->
        <span id="count-area1" style="display: inline-block; margin-left: 5px;">いいね数:0</span>
    </div>

    <div style="margin-bottom: 10px;">
        <!-- いいねボタン -->
        <button id="like-btn2" class="like-btn">いいね!</button>

        <!-- カウント数表示エリア -->
        <span id="count-area2" style="display: inline-block; margin-left: 5px;">いいね数:0</span>
    </div>

    <script>
        // sessionStorageを使用していいね数を保存する
        var countKey1 = 'count-btn1';
        var countKey2 = 'count-btn2';

        $(document).ready(function() {
            // いいねボタンをクリックしたときの処理
            $('.like-btn').on('click', function() {
                // ボタンのidからカウントキーを作成する
                var btnId = $(this).attr('id');
                if (btnId == 'like-btn1') {
                    var countKey = countKey1;
                } else {
                    var countKey = countKey2;
                }

                // いいねボタンをクリックしたときの処理
                var count = sessionStorage.getItem(countKey);
                if (!count) {
                    count = 0;
                }
                count = parseInt(count) + 1;

                sessionStorage.setItem(countKey, count);

                // カウント表示更新
                updateCount(btnId);
            });
            
            function updateCount(btnId) {
                var countKey;
                if (btnId == 'like-btn1') {
                    countKey = countKey1;
                } else {
                    countKey = countKey2;
                }
                
                var count = sessionStorage.getItem(countKey);
                $('#' + btnId).next().text('いいね数:' + count);
            }
        });
    </script>
</body>
</html>





