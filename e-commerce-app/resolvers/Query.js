const { reviews } = require("../db");

exports.Query = {
  hello: () => {
    return "World!";
  },
  products: (parent, { filter }, { products }) => {
    let filteredProducts = products;

    if (filter) {
      const { onSale, avgRating } = filter;

      if (onSale) {
        filteredProducts = filteredProducts.filter((product) => {
          return product.onSale;
        });
      }

      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filteredProducts = filteredProducts.filter((product) => {
          let sumRating = 0;
          let numberOfReviews = 0;
          reviews.forEach((review) => {
            if (review.productId === product.id) {
              sumRating += review.rating;
            }
          });
          const avgProductRating = sumRating / numberOfReviews;
          return avgProductRating >= avgRating;
        });
      }
    }

    return filteredProducts;
  },
  product: (parent, { id }, { products }) => {
    //The id we send to get the product we want
    // const productId = args.id;
    //The procucts list is scanned and returns the product to us if the product id and id which we sent match
    // const product = products.find((product) => product.id === productId);
    // if (!product) return null;
    // return product;
    // you can like this or you can distructure like up
    // const { id } = args;
    return products.find((product) => product.id === id);
  },
  categories: (parent, args, { categories }) => {
    return categories;
  },
  category: (parent, { id }, { categories }) => {
    //The id we send to get the category we want
    // const categorytId = args.id;
    //The catergories list is scanned and returns the category to us if the category id and id which we sent match
    // const catergory = categories.find( (category) => category.id === categorytId);
    // if (!catergory) return null;
    // return catergory;
    // const { id } = args;
    return categories.find((category) => category.id === id);
  },
};
