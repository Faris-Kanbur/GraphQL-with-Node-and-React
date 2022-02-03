exports.Query = {
  hello: () => {
    return "World!";
  },
  products: (parent, args, { products }) => {
    return products;
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
