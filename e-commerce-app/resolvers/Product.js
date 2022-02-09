exports.Product = {
  category: ({ categoryId }, args, { db }) => {
    //parent can give us CategoryId and other variable/value which take paer in type Product ( parent=Product)

    // you can like this or you can distructure like up
    // const { categoryId } = parent;
    return db.categories.find((category) => category.id === categoryId);
  },

  reviews: ({ id }, args, { db }) => {
    // id ==> product id
    return db.reviews.filter((review) => review.productId === id);
  },
};
