const { Router } = require("express");

const { Items } = require("../src/models/items.model");

const router = Router();

//Get All Items by User

router.get("", async (req, res) => {
  let { user } = req.query;
  user = user.toLowerCase();

  const allItems = await Items.find({ created_by: user });

  res.send(allItems);
});

//Get Specific Item

router.get("/:item", async (req, res) => {
  let { item } = req.params;

  item = item.toLowerCase();

  const yourItem = await Items.findOne({ item });
  res.send(yourItem);
});

//Add items

router.post("", async (req, res) => {
  let { item, created_by } = req.body;
  item = item.toLowerCase();
  created_by = created_by.toLowerCase();

  await Items.insertMany({ item: item, created_by: created_by });

  res.send(`${item} added successfully by ${created_by}`);
});

//delete items

router.delete("/:item", async (req, res) => {
  let { item } = req.params;
  item = item.toLowerCase();

  await Items.deleteOne({ item: item });

  res.send("Item deleted successfully");
});

//update items

router.put("/:item", async (req, res) => {
  let { item } = req.params;

  let newItem = req.body.item;

  newItem = newItem.toLowerCase();

  await Items.updateOne(
    { item: item },
    {
      $set: {
        item: newItem,
      },
    }
  );

  res.send(`${item} Item updated to ${newItem} successfully`);
});

module.exports = router;
