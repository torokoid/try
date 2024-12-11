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
    <?php for($i = 1; $i <= 10; $i++) { ?>
        <div style="margin-bottom: 10px;">
            <!-- いいねボタン -->
            <button id="like-btn<?php echo $i ?>" class="like-btn">いいね!</button>

            <!-- カウント数表示エリア -->
            <span id="count-area<?php echo $i ?>" style="display: inline-block; margin-left: 5px;">いいね数:0</span>
        </div>
    <?php } ?>

    <script>
        // sessionStorageを使用していいね数を保存する
        var countKeys = [];
        for(i = 1; i <= 10; i++) {
            countKeys.push('count-btn-' + i);
        }
        
        $(document).ready(function() {
            // いいねボタンをクリックしたときの処理
            $('.like-btn').on('click', function() {
                var btnId = this.id.replace('like-btn','');
                
                // ボタンのidからカウントキーを作成する
                var countKey = 'count-btn-' + btnId;
                
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
                
                var countKey = 'count-btn-' + btnId
                
                var count = sessionStorage.getItem(countKey);
                
                $('#' + btnId).next().text('いいね数:' + count);
            }
        });
    </script>
</body>
</html>






