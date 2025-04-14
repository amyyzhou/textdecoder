# Text Decoder

A modern web application that helps decode and analyze text messages using AI. Get insights into the meaning and intent behind messages!

## Features

- Clean, modern UI with a pink theme
- Real-time text message analysis
- Powered by OpenAI's GPT-3.5
- Responsive design for mobile and desktop

## Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env.local` and add your OpenAI API key:
   ```bash
   cp .env.example .env.local
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Deployment

This app can be deployed to Vercel in a few simple steps:

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com) and create a new project
3. Import your GitHub repository
4. Add your `OPENAI_API_KEY` to the Environment Variables section in Vercel
5. Deploy!

## Environment Variables

- `OPENAI_API_KEY`: Your OpenAI API key (required)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
