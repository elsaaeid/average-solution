const express = require("express");
const router = express.Router();


  const {
    likeProduct,
    unlikeProduct,

  } = require("../controllers/likesController");
  
  router.post('/:productId/like', likeProduct);
  router.post('/:productId/unlike', unlikeProduct);
  
  module.exports = router;