import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { html, text, imageLink } = req.body; // Include 'imageLink' in the destructuring

    try {
      const editorContent = await prisma.editorContent.create({
        data: {
          html,
          text,
          imageLink, // Include 'imageLink' in the data object
        },
      });

      res.status(201).json(editorContent);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error saving editor content.');
    }
  } else {
    res.status(405).send('Method not allowed');
  }
}
