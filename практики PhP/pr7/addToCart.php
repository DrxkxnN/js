<?php
    if (isset($_POST['product'])) {
        $product = $_POST['product'];
        
        if (isset($_COOKIE['cart'])) {
            $cartItems = json_decode($_COOKIE['cart'], true);
        } else {
            $cartItems = array();
        }
        
        array_push($cartItems, $product);
        
        setcookie('cart', json_encode($cartItems), time() + 3600, '/'); 

        echo $product; 
    }
?>
