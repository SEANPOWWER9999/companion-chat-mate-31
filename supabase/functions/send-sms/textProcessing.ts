export function adjustTone(text: string, tone: string): string {
  switch (tone.toLowerCase()) {
    case 'professional':
      return text.replace(/hey/gi, 'hello').replace(/yeah/gi, 'yes');
    case 'casual':
      return text.replace(/hello/gi, 'hey').replace(/greetings/gi, 'hi');
    case 'friendly':
      return `${text} 😊`;
    default:
      return text;
  }
}

export function incorporateTypicalPhrases(text: string, phrases: string[]): string {
  if (Math.random() > 0.7 && phrases.length > 0) {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    return `${text} ${randomPhrase}`;
  }
  return text;
}

export function adjustFormality(text: string, formalityLevel: string): string {
  switch (formalityLevel.toLowerCase()) {
    case 'formal':
      return text
        .replace(/don't/gi, 'do not')
        .replace(/won't/gi, 'will not')
        .replace(/can't/gi, 'cannot');
    case 'informal':
      return text
        .replace(/do not/gi, "don't")
        .replace(/will not/gi, "won't")
        .replace(/cannot/gi, "can't");
    default:
      return text;
  }
}