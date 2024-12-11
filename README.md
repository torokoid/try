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

    <div style="margin-bottom: 10px;">
        <!-- いいねボタン -->
        <button id="like-btn3" class="like-btn">いいね!</button>

        <!-- カウント数表示エリア -->
        <span id="count-area3" style="display: inline-block; margin-left: 5px;">いいね数:0</span>
    </div>

    <div style="margin-bottom: 10px;">
        <!-- いいねボタン -->
        <button id="like-btn4" class="like-btn">いいね!</button>

        <!-- カウント数表示エリア -->
        <span id="count-area4" style="display: inline-block; margin-left: 5px;">いいね数:0</span>
    </div>

    <div style="margin-bottom: 10px;">
        <!-- いいねボタン -->
        <button id="like-btn5" class="like-btn">いいね!</button>

        <!-- カウント数表示エリア -->
        <span id="count-area5" style="display: inline-block; margin-left: 5px;">いいね数:0</span>
    </div>

    <div style="margin-bottom: 10px;">
        <!-- いいねボタン -->
        <button id="like-btn6" class="like-btn">いいね!</button>

        <!-- カウント数表示エリア -->
        <span id="count-area6" style="display: inline-block; margin-left: 5px;">いいね数:0</span>
    </div>

    <div style="margin-bottom: 10px;">
        <!-- いいねボタン -->
        <button id="like-btn7" class="like-btn">いいね!</button>

        <!-- カウント数表示エリア -->
        <span id="count-area7" style="display: inline-block; margin-left: 5px;">いいね数:0</span>
    </div>

    <div style="margin-bottom: 10px;">
        <!-- いいねボタン -->
        <button id="like-btn8" class="like-btn">いいね!</button>

        <!-- カウント数表示エリア -->
        <span id="count-area8" style="display: inline-block; margin-left: 5px;">いいね数:0</span>
    </div>

    <div style="margin-bottom: 10px;">
        <!-- いいねボタン -->
        <button id="like-btn9" class="like-btn">いいね!</button>

        <!-- カウント数表示エリア -->
        <span id="count-area9" style="display: inline-block; margin-left: 5px;">いいね数:0</span>
    </div>

    <div style="margin-bottom: 10px;">
        <!-- いいねボタン -->
        <button id="like-btn10" class="like-btn">いいね!</button>

        <!-- カウント数表示エリア -->
        <span id="count-area10" style="display: inline-block; margin-left: 5px;">いいね数:0</span>
    </div>

    <script>
        // sessionStorageを使用していいね数を保存する
        var countKey1 = 'count-btn1';
        var countKey2 = 'count-btn2';
        var countKey3 = 'count-btn3';
        var countKey4 = 'count-btn4';
        var countKey5 = 'count-btn5';
        var countKey6 = 'count-btn6';
        var countKey7 = 'count-btn7';
        var countKey8 = 'count-btn8';
        var countKey9 = 'count-btn9';
        var countKey10 = 'count-btn10';

        $(document).ready(function() {
            // いいねボタンをクリックしたときの処理
            $('.like-btn').on('click', function() {
                // ボタンのidからカウントキーを作成する
                var btnId = $(this).attr('id');
                if (btnId == 'like-btn1') {
                    var countKey = countKey1;
                } 
                if (btnId == 'like-btn2') {
                    var countKey = countKey2;
                } 
                if (btnId == 'like-btn3') {
                    var countKey = countKey3;
                } 
                if (btnId == 'like-btn4') {
                    var countKey = countKey4;
                } 
                if (btnId == 'like-btn5') {
                    var countKey = countKey5;
                } 
                if (btnId == 'like-btn6') {
                    var countKey = countKey6;
                } 
                if (btnId == 'like-btn7') {
                    var countKey = countKey7;
                } 
                if (btnId == 'like-btn8') {
                    var countKey = countKey8;
                } 
                if (btnId == 'like-btn9') {
                    var countKey = countKey9;
                } 
                else {
                    var countKey = countKey10;
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
                } 
                if (btnId == 'like-btn2') {
                    countKey = countKey2;
                }
                if (btnId == 'like-btn3') {
                    countKey = countKey3;
                }
                if (btnId == 'like-btn4') {
                    countKey = countKey4;
                }
                if (btnId == 'like-btn5') {
                    countKey = countKey5;
                }
                if (btnId == 'like-btn6') {
                    countKey = countKey6;
                }
                if (btnId == 'like-btn7') {
                    countKey = countKey7;
                }
                if (btnId == 'like-btn8') {
                    countKey = countKey8;
                }
                if (btnId == 'like-btn9') {
                    countKey = countKey9;
                }else {
                    countKey = countKey10;
                }
                
                var count = sessionStorage.getItem(countKey);
                $('#' + btnId).next().text('いいね数:' + count);
            }
        });
    </script>
</body>
</html>





