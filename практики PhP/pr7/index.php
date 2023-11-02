<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <div class="clear__cache">Сбросить кеш</div>
    <div class="wrapper">
        <div class="container">
            <h1>Добро пожаловать в магазин каких-то продуктов!<br>
                бери не пожалеешь
            </h1>
            <div id="products" class="products">
                <ul>
                    <li>
                        Товар 1 <button onclick="addToCart('product1')">Добавить в корзину</button>
                    </li>
                    <li>
                        Товар 2 <button onclick="addToCart('product2')">Добавить в корзину</button>
                    </li>
                </ul>
            </div>

            <div id="cart" class="cart">
                <h2>Корзина</h2>
                <ul id="cart-items" class="cart-items">
                    <?php
                        if (isset($_COOKIE['cart'])) {
                            $cartItems = json_decode($_COOKIE['cart'], true);
                            foreach ($cartItems as $item) {
                                echo '<li>' . $item . '</li>';
                            }
                        }
                    ?>
                </ul>
            </div>

            <script src="script.js"></script>
        </div>
    </div>
</body>
</html>