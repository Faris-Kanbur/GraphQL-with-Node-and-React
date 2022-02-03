// we create new that and didnt write in "Query" because we dont have "products" in  "categories list" we just have id and name variables
exports.Category = {
  products: ({ id }, { filter }, { products }) => {
    //parent can give us id and name which take part in type Category ( parent=Category)
    // you can like this or you can distructure like up
    // const { id } = parent;
    const categoryProducts = products.filter(
      (product) => product.categoryId === id
    );

    let filteredCategoryProducts = categoryProducts;

    if (filter) {
      if (filter.onSale === true) {
        filteredCategoryProducts = filteredCategoryProducts.filter(
          (product) => {
            return product.onSale;
          }
        );
      }
    }

    return filteredCategoryProducts;
  },
};
