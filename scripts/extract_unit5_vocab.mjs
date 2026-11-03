import fs from 'node:fs';

const env = fs.readFileSync('.env', 'utf8');
const keyMatch = env.match(/OPENROUTER_API_KEY=([^\r\n]+)/);
const apiKey = keyMatch ? keyMatch[1].trim() : '';

const vocabPages = [176, 177, 178, 179, 180, 181, 182, 183, 184, 188, 190, 191, 198, 199, 200, 201, 204, 205, 208, 209, 214, 215, 216];

async function extractPages() {
  const allVocab = [];
  for (const p of vocabPages) {
    const imgPath = '.agents/cache/klik_b1/b_p' + p + '.png';
    if (!fs.existsSync(imgPath)) continue;
    const b64 = fs.readFileSync(imgPath).toString('base64');
    try {
      const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: { 'Authorization': 'Bearer ' + apiKey, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'google/gemini-2.5-flash',
          messages: [{
            role: 'user',
            content: [
              { type: 'text', text: 'You are an expert Greek B1 teacher. Extract ONLY high-yield B1 vocabulary, collocations, idiomatic travel phrases, hotel amenities, transport and holiday activities from this textbook page (Klik sta Ellinika B1, Unit 5). Output a JSON array of objects with keys: "greek", "grammarHint", "russian", "example". Do not include basic A1/A2 words. Keep Russian translation accurate and natural. Return ONLY valid JSON array.' },
              { type: 'image_url', image_url: { url: 'data:image/png;base64,' + b64 } }
            ]
          }]
        })
      });
      const data = await res.json();
      if (data.choices && data.choices[0]) {
        let content = data.choices[0].message.content.trim();
        if (content.startsWith('```json')) content = content.replace(/^```json/, '').replace(/```$/, '').trim();
        else if (content.startsWith('```')) content = content.replace(/^```/, '').replace(/```$/, '').trim();
        const items = JSON.parse(content);
        console.log(`Page ${p}: found ${items.length} items`);
        for (const it of items) {
          allVocab.push({ page: p, ...it });
        }
      }
    } catch(err) {
      console.error(`Error on page ${p}:`, err.message);
    }
  }
  fs.writeFileSync('.agents/cache/klik_b1/unit5_extracted_raw.json', JSON.stringify(allVocab, null, 2), 'utf8');
  console.log(`Total extracted items: ${allVocab.length}`);
}

extractPages();
