import mongoose from 'mongoose';
const connectDB = async (url) => {
    try {
        mongoose.set('strictQuery', true);

    const conn = await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    // .then(() => console.log('MongoDB connected'))
    // .catch((err) => console.log(err));
    console.log(conn)
    } catch(err) {
        // console.log(err)
    }
}

export default connectDB