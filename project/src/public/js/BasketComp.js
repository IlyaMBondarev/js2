const basketItem = {
    props: ['item'],
    data() {
        return {
            mainAPI: this.$root,
            cartAPI: this.$root.$refs.header.$refs.cart,
        }
    },
    template:`<div class="cart_shopping_item">
            <div class="cart_product"><a href="single_page.html" @click="mainAPI.open(item)"><img :src="item.img.normal" alt="cart_item"
                                                                      class="cart_image"></a>
                <div class="cart_shopping_info">
                    <a href="single_page.html"><h3 class="cart_shopping_name">{{ item.product_name }}</h3></a>
                    <p class="cart_shopping_info_content"><span class="cart_shopping_info_content_name">Color:</span>Red
                    </p>
                    <p class="cart_shopping_info_content"><span class="cart_shopping_info_content_name">Size:</span>Xll
                    </p>
                </div>
            </div>
            <span class="cart_price">{{item.price}}</span>
            <label>
                <input type="number" class="cart_quantity" v-model="item.quantity" v-on:change="cartAPI.change(item)" min="1">
            </label> <span class="cart_shipping">FREE</span> <span class="cart_subtotal">{{ item.price*item.quantity }}</span>
            <button class="cart_cancel_action"><img src="img/cart_cancel_action.jpg" alt="cart_cancel_action"
                                                    class="cart_cancel_action_image" @click="cartAPI.remove(item)"></button>
        </div>`,
};

const grandTotalJs = {
    data() {
        return {
            cartAPI: this.$root.$refs.header.$refs.cart,
        }
    },
    template:`
        <div class="grand_total">
            <h4 class="cart_shopping_h4">Sub total <span class="margin_left_8">{{ cartAPI.total }}</span></h4>
            <h3 class="cart_shopping_h3 h3_sub_total_form" style="text-align: right">Sub total <span
                    class="margin_left_8 red">{{ cartAPI.total }}</span></h3>
            <button type="submit" class="cart_form_submit_total button">proceed to checkout</button>
        </div>
    `,
};

const basketJs = {
    data() {
        return {
            cartAPI: this.$root.$refs.header.$refs.cart,
        }
    },
    components: {
        basketItem,
        grandTotalJs
    },
    template:`
    <div class="cart center">
        <ul class="cart_menu">
            <li class="cart_menu_list cart_product_details">Product Details</li>
            <li class="cart_menu_list">unite Price</li>
            <li class="cart_menu_list">Quantity</li>
            <li class="cart_menu_list">shipping</li>
            <li class="cart_menu_list">Subtotal</li>
            <li class="cart_menu_list">ACTION</li>
        </ul>
        <basket-item v-for="item of cartAPI.cartItems" 
                :key="item.id_product"
                :item="item">
                </basket-item>
        <div class="cart_buttons"><a href="#" class="cart_button" @click="cartAPI.clear()">cLEAR SHOPPING CART</a> <a href="product.html"
                                                                                             class="cart_button">cONTINUE
            sHOPPING</a></div>
    </div>
    `,
};

export default basketJs;