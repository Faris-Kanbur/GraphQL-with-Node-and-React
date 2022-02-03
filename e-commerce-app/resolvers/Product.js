exports.Product = {
  category: ({ categoryId }, args, { categories }) => {
    //parent can give us CategoryId and other variable/value which take paer in type Product ( parent=Product)

    // you can like this or you can distructure like up
    // const { categoryId } = parent;
    return categories.find((category) => category.id === categoryId);
  },

  reviews: ({ id }, args, { reviews }) => {
    // id ==> product id
    return reviews.filter((review) => review.productId === id);
  },
};
