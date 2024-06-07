// // backend/server.js
// import express from 'express';
// import axios from 'axios';
// import cors from 'cors';

// const app = express();
// const port = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// const QUOTE_API_URL = 'https://api.quotable.io/quotes';

// app.get('/api/quote', async (req, res) => {
//   try {
//     const response = await axios.get(QUOTE_API_URL, {
//       params: {
//         limit: 1,
//         ...(req.query.author && { author: req.query.author })
//       }
//     });
//     if (response.data.results.length > 0) {
//       res.json(response.data.results[0]);
//     } else {
//       res.status(404).json({ message: 'No quotes found for this author' });
//     }
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching quote', error: error.message });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port: ${port}`);
// });





import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

const QUOTE_API_URL = 'https://api.quotable.io/random';

app.get('/api/quote', async (req, res) => {
  try {
    const response = await axios.get(QUOTE_API_URL, {
        params:{
            author : req.query.author
        }
    });
    res.json(response.data);
    console.log(response.data.author); 
  } catch (error) {
    res.status(500).send('Error fetching quote');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

