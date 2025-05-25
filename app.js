<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>دخول التوكنات للروم الصوتي</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container">
    <h1>أدخل التوكنات</h1>
    <textarea id="tokens" placeholder="كل توكن في سطر..."></textarea>
    <button onclick="goToVoice()">التالي</button>
  </div>

  <div class="container" id="voiceForm" style="display:none;">
    <h1>أدخل ID الروم الصوتي</h1>
    <input type="text" id="channelId" placeholder="ID الروم" />
    <button onclick="startVoice()">دخول التوكنات</button>
  </div>

  <script src="app.js"></script>
</body>
</html>
