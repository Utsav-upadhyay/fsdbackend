const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const app=express();
app.use(express.json());
app.use(cors())
dotenv.config()
// connect mongoDB
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=>console.log("connected to Mongo db"))
    .catch((error)=> console.log("error in connection",error));

    // design book schema

const BookSchema=new mongoose.Schema({
    title:String,
    author:String,
    date:String,
    image:String
})

// design model
const Book=mongoose.model('MyBook',BookSchema)

app.post('/books', async (req, res) => {
    try {
        const newBook = new Book(req.body);
        await newBook.save();
        res.status(200).send('book added');
    } catch (error) {
        console.error("Error saving book:", error.message);
        res.status(500).send('Server Error');
    }
});

app.get('/books',async(req,res)=>{
    try{
       const Books=await Book.find()
       res.json(Books);
    } catch(error){
       console.log(error);
       res.status(500).send('server error')
    }
})
app.get('/search', async (req, res) => {
    const { title } = req.query;
    try {
        const books = await Book.find({ title: { $regex: title, $options: 'i' } }); // case-insensitive search
        res.json(books);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});
app.delete('/books/:id', async (req, res) => {
    try {
      const book = await Book.findByIdAndDelete(req.params.id);
      if (!book) return res.status(404).send('Book not found');
      res.send('Book deleted successfully');
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  });


app.listen(9000,()=>{
    console.log('Server is running on port 9000')
})
