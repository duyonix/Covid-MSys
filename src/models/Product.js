const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;
const AutoIncrement = require('mongoose-sequence')(mongoose);
const productSchema = new Schema({
    _id: { 
        type: Number, 
        unique:true, 
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    unit: {
        type: String,
        required: true,
        min: 0
    },
    category: {
        type: ObjectId,
        ref: 'Category',
        required: true
    },
    images: {
        type: Array,
        required: true
    }
},{
    _id: false
})

productSchema.plugin(AutoIncrement, {startSequence: 1000});
module.exports = mongoose.model('Product', productSchema);