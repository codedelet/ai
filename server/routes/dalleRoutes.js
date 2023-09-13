import express from 'express';
import * as dotenv from 'dotenv';
import Configuration  from 'openai';
import OpenAI from 'openai';


dotenv.config();

const router = express.Router();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAI(configuration);

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello from DALL-E!' });
});

router.route('/').post(async (req, res) => {
    try{

      const { prompt} = req.body;

      const aiResponse = await openai.images.generate({
        prompt,
        n: 1,
        size: '1024x1024',
        // response_format: 'b64_json'
      });
      // console.log( aiResponse.data[0].url)

      // const image = aiResponse.data.data[0].url;

      res.status(200).json({ photo: aiResponse.data[0].url});
    }catch(error){
    console.log(error)
    res.status(500).send(error?.response.data.error.message)
    }
})
export default router;