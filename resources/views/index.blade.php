<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">
    <title>Todo App</title>
</head>
<body>
    <noscript>
        <div class="title">
            <p class="huge">Missing Dependency!</p>
            <p class="small">That's an error.</p>
        </div>

        <div class="body">
            <p>Your browser does not support JavaScript. This app requires Javascript to work properly. Please update your browser to its latest version before comming back.</p>
        </div>
    </noscript>
    <div id="app"></div>
    <script type="text/javascript">
    	window.__PRELOADED_STORE__ = <?= json_encode($preloaded_store); ?>;
    	window.__BASEURL__ = "<?= $baseurl; ?>";
        window.__CSRF__ = "<?= csrf_token(); ?>";
    </script>
    <script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
</body>
</html>
