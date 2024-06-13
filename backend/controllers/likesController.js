const asyncHandler = require("express-async-handler");
const Product = require('../models/productModel');
const User = require('../models/userModel');


// Like a product
const likeProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.productId);
  const user = await User.findById(req.user._id);

  if (!product || !user)
    return res.status(404).json({ message: 'Product or user not found' });

  if (!product.usersLiked.includes(user._id)) {
    product.likes += 1;
    product.usersLiked.push(user._id);
    await product.save();
  }

  res.status(200).json({ likes: product.likes });
});

// Unlike a product
const unlikeProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.productId);
  const user = await User.findById(req.user._id);

  if (!product || !user)
    return res.status(404).json({ message: 'Product or user not found' });

  if (product.usersLiked.includes(user._id)) {
    product.likes -= 1;
    product.usersLiked = product.usersLiked.filter(id => id.toString() !== user._id.toString());
    await product.save();
  }

  res.status(200).json({ likes: product.likes });
});


module.exports = {
  likeProduct,
  unlikeProduct,
};

