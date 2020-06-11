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
            <cart-js ref="cart"></cart-js>
            <a href="#" class="button">My&nbsp;Account<img class="margin_left_8" src="img/arrow_down_white.jpg" alt="arrow_down"></a></div>
    </header>`,
});