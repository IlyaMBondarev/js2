const addGood = (good, catalog, products, req) => {
    let find = catalog.find(el => el.id_product === +req.params.id);
    if (!find) {
        find = products.find(el => el.id_product === +req.params.id)
    }
    good.id_product = find.id_product;
    good.img = find.img;
    good.product_name = find.product_name;
    good.price = find.price;
    return JSON.stringify(good, null, 4);
};

module.exports = addGood;