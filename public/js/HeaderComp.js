Vue.component('header-js', {
    template:`<header class="header center">
        <div class="header_left">
            <a href="index.html" class="logo"><img src="img/logo.png" alt="logo" class="logo_img">BRAN<span
                    class="red">D</span></a>
            <form action="#" class="header_form">
                <details class="header_browse">
                    <summary class="header_summary">Browse</summary>
                    <div class="drop">
                        <div class="drop_flex">
                            <h3 class="drop_h3">Women</h3>
                            <ul class="drop_ul">
                                <li><a href="#" class="drop_link">Dresses</a></li>
                                <li><a href="#" class="drop_link">Tops</a></li>
                                <li><a href="#" class="drop_link">Sweaters/Knits</a></li>
                                <li><a href="#" class="drop_link">Jackets/Coats</a></li>
                                <li><a href="#" class="drop_link">Blazers</a></li>
                                <li><a href="#" class="drop_link">Denim</a></li>
                                <li><a href="#" class="drop_link">Leggings/Pants</a></li>
                                <li><a href="#" class="drop_link">Skirts/Shorts</a></li>
                                <li><a href="#" class="drop_link">Accessories</a></li>
                            </ul>
                            <h3 class="drop_h3">Men</h3>
                            <ul class="drop_ul">
                                <li><a href="#" class="drop_link">Tees/Tank tops</a></li>
                                <li><a href="#" class="drop_link">Shirts/Polos</a></li>
                                <li><a href="#" class="drop_link">Sweaters</a></li>
                                <li><a href="#" class="drop_link">Sweatshirts/Hoodies</a></li>
                                <li><a href="#" class="drop_link">Blazers</a></li>
                                <li><a href="#" class="drop_link">Jackets/vests</a></li>
                            </ul>
                        </div>
                    </div>
                </details>
                <label>
                    <input class="header_input" type="text" placeholder="Search for Item...">
                </label>
                <a href="#" class="search">
                    <button type="submit" class="header_search_button"><img src="img/search.jpg" alt="search"
                                                                            class="search_image"></button>
                </a>
            </form>
        </div>
        <div class="header_right">
            <details class="header_cart">
                <summary class="header_cart_summary"><img src="img/cart.jpg" alt="cart" class="header_cart_image">
                </summary>
                <div class="header_cart_drop">
                    <div class="header_cart_empty">
                        <div class="header_cart_drop_flex">
                            <a href="single_page.html"><img src="img/header_cart_1.jpg" alt="cart_1"></a>
                            <div class="header_cart_shopping_info">
                                <h3 class="header_cart_shopping_name">Rebox Zane</h3>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                                <h4 class="header_cart_shopping_price">1 <span
                                        class="header_cart_shopping_price_x">x</span>
                                    $250</h4>
                            </div>
                            <button class="header_cart_cancel_action"><img src="img/cart_cancel_action.jpg"
                                                                           alt="cart_cancel_action"></button>
                        </div>
                        <div class="header_cart_drop_flex">
                            <a href="single_page.html"><img src="img/header_cart_2.jpg" alt="cart_1"></a>
                            <div class="header_cart_shopping_info">
                                <h3 class="header_cart_shopping_name">Rebox Zane</h3>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                                <h4 class="header_cart_shopping_price">1 <span
                                        class="header_cart_shopping_price_x">x</span>
                                    $250</h4>
                            </div>
                            <button class="header_cart_cancel_action"><img src="img/cart_cancel_action.jpg"
                                                                           alt="cart_cancel_action"></button>
                        </div>
                        <div class="header_cart_drop_total">
                            <h3 class="header_cart_drop_total_h3">TOTAL</h3>
                            <h3 class="header_cart_drop_total_h3">$500.00</h3>
                        </div>
                        <div class="header_cart_drop_buttons">
                            <a href="#" class="header_button header_cart_drop_checkout">Checkout</a>
                            <a href="shopping_cart.html" class="header_button header_cart_drop_go_to_cart">Go to
                                cart</a>
                        </div>
                    </div>
                </div>
            </details>
            <a href="#" class="button">My&nbsp;Account<img class="margin_left_8" src="img/arrow_down_white.jpg" alt="arrow_down"></a></div>
    </header>`,
});