import { NextResponse } from 'next/server';
import { analyzeText } from '@/lib/openai';

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    const analysis = await analyzeText(message);
    
    return NextResponse.json({ analysis });
  } catch (error) {
    console.error('Error analyzing message:', error);
    return NextResponse.json(
      { error: 'Failed to analyze message' },
      { status: 500 }
    );
  }
} 