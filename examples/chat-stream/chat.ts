import { Ollama } from '../../src/index';
import { Message } from '../../src/interfaces';

async function main(): Promise<void> {
    const client: Ollama = new Ollama();
    const messages: Message[] = [
        { role: "user", content: "Why is the sky blue?" },
    ];
    const stream = await client.chat({model: "mistral", messages, stream: true});
    for await (const part of stream) {
        process.stdout.write(part.message.content);
    }
}

await main();