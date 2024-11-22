const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); 

mongoose.connect('mongodb+srv://baibhav:Wethepeople10@cluster0.xyyrvvd.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const tweetSchema = new mongoose.Schema({
    user: {
      name: { type: String, required: true },
      username: { type: String, required: true }
    },
    content: { type: String, required: true },
    date: { type: String, required: true },
    replies: { type: Number, default: 0 },
    retweets: { type: Number, default: 0 },
    likes: { type: Number, default: 0 }
  });
  

const Tweet = mongoose.model('Tweet', tweetSchema);

app.get('/tweets', async (req, res) => {
  try {
    const tweets = await Tweet.find();
    res.json(tweets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/tweets', async (req, res) => {
  const { user, content, date, replies, retweets, likes } = req.body;
  const newTweet = new Tweet({ user, content, date, replies, retweets, likes });

  try {
    const savedTweet = await newTweet.save();
    res.status(201).json(savedTweet);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.delete('/tweets/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTweet = await Tweet.findByIdAndDelete(id);
    if (!deletedTweet) {
      return res.status(404).json({ message: 'Tweet not found' });
    }
    res.json({ message: 'Tweet deleted', tweet: deletedTweet });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
