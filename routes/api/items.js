const express = require('express');
const router = express.Router();
const { getTransactions, postTransactions, deleteTransactions } = require('../../controllers/transactions')

router
    .route('/')
    .get(getTransactions)
    .post(postTransactions);
router
    .route('/:id')
    .delete(deleteTransactions);

/*
router.get('/', (req,res) => {
    Item.find()
        .sort({ date: -1})
        .then(items => res.json(items));
});

router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        transaction_add: req.body.transaction_add
    });
    newItem.save().then(item => res.json(item));
})

router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
})
    
*/

module.exports = router;