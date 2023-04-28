const mongoose = require('mongoose');
const mongoURI = 'mongodb://foodie:w2oWm1qXMANd3h4g@ac-fwgvaot-shard-00-00.dsjpcwo.mongodb.net:27017,ac-fwgvaot-shard-00-01.dsjpcwo.mongodb.net:27017,ac-fwgvaot-shard-00-02.dsjpcwo.mongodb.net:27017/?ssl=true&replicaSet=atlas-i9e37g-shard-0&authSource=admin&retryWrites=true&w=majority'
const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err) console.log("---", err)
        else {
            console.log("connected");
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(function ( err, data) {
                if (err) console.log(err);
                else console.log();
            })
        }
    });
}

module.exports = mongoDB();