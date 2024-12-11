# try

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>いいねボタン</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <div id="button-container"></div>

    <script>
        // sessionStorageを使用していいね数を保存する
        var countKeys = [];
        
        for(i = 1; i <= 10; i++) {
            // ボタンのidとカウントキーを作成する
            var btnId = 'like-btn-' + i;
            var countKey = 'count-btn-' + i;

            // HTMLにボタンを追加する
            $('#button-container').append('<div style="margin-bottom: 10px;"><button id="' + btnId + '" class="like-btn">いいね!</button><span id="count-area-' + i +             '" style="display: inline-block; margin-left: 5px;">いいね数:0</span></div>');
            
            // sessionStorageにカウントキーを作成する
            countKeys.push(countKey);
        }
        
        $(document).ready(function() {
            // いいねボタンをクリックしたときの処理
            $('.like-btn').on('click', function() {
                var btnId = this.id.replace('like-btn','');
                
                // ボタンのidからカウントキーを作成する
                var countKey = 'count-btn-' + btnId;
                
                // いいねボタンをクリックしたときの処理
                if (!sessionStorage.getItem(countKey)) {
                    sessionStorage.setItem(countKey, 1);
                }else{
                    var count = parseInt(sessionStorage.getItem(countKey)) + 1;
                    sessionStorage.setItem(countKey, count.toString());
                }

                // カウント表示更新
                updateCount(btnId);});
            
                function updateCount(btnId) {
                
                setTimeout(function() {
                
                var countKey = 'count-btn-' + btnId
                
                var count = sessionStorage.getItem(countKey);
                
                $('#' + btnId).next().text('いいね数:' + count);
                }, 500);
            }
        });
    </script>
</body>
</html>










