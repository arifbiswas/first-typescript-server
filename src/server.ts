import mongoose from 'mongoose';
import app from './app';
const port : Number = 5000

// database connections 
main().catch(err => console.log(err));

async function main() {
try {
  await mongoose.connect('mongodb://127.0.0.1:27017/practice-ts-server');
  console.log("🛢✨ Database is Connected")
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
} catch (error) {
  console.log(error);
}
 
}



