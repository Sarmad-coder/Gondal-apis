const router = require("express").Router();
const {
  createGroup,
  getAllGroup,
  getGroupById,
  updateGroup,
  deleteGroup,
  isGroupExist,
  getGroupByType
} = require("../controllers/groupController");

router.route("/").get(getAllGroup).post(createGroup);
router
  .route("/:id")
  .get(isGroupExist, getGroupById)
  .patch(isGroupExist, updateGroup)
  .delete(isGroupExist, deleteGroup);
  router.post('/byType', getGroupByType)
module.exports = router;
