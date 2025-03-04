const Item = require("../models/Item");

// @desc    Get all items (with Pagination)
// @route   GET /api/items
// @access  Public
const getItems = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const items = await Item.find().skip(skip).limit(limit);

    res.status(200).json({ success: true, data: items });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getItems };
