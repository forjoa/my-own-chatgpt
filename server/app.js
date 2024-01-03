import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: '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',
})

async function main() {
  const stream = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: 'Say this is a test' }],
    stream: true,
  })
  for await (const chunk of stream) {
    console.log(chunk.choices[0]?.delta?.content || '')
  }
}

main()
