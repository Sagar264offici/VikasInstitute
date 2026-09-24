export const DIRECT_MAPS_URL = 'https://maps.app.goo.gl/DFKugUJijYjQLq68A';

export const contactInfo = {
  addressEn: 'Mannat Complex, Khadri Road, Shyampur, Rishikesh, Dehradun – 249204',
  addressHi: 'मन्नत कॉम्प्लेक्स, खादरी रोड, श्यामपुर, ऋषिकेश, देहरादून – 249204',
  phones: ['+91 8679398235'],
  phoneLinks: ['tel:+918679398235'],
  whatsapp: 'https://wa.me/918679398235?text=Hello%20Vikas%20IT%20Institute%2C%20I%20want%20course%20details',
  // Real navigation destination supplied by institute — always use for directions buttons
  mapsUrl: DIRECT_MAPS_URL,
  // Safe embeddable query (not the short URL) for iframe preview
  mapsEmbed:
    'https://www.google.com/maps?q=Mannat+Complex+Khadri+Road+Shyampur+Rishikesh+249204&output=embed',
  instagram: 'https://www.instagram.com/vikas_it_institute/',
  facebook: 'https://www.facebook.com/people/Vikas-It-Institute/61592844021511/',
};

export interface FaqItem {
  qEn: string;
  qHi: string;
  aEn: string;
  aHi: string;
}

export const faqs: FaqItem[] = [
  {
    qEn: 'Which courses are available?',
    qHi: 'कौन-कौन से पाठ्यक्रम उपलब्ध हैं?',
    aEn: 'Basic Computer, Web Designing, Tally Prime with GST, Data Entry, Graphic Designing, ADCA / DCA / CCC, Digital Marketing, Advanced Excel, Cyber Security Fundamentals, SQL, Python and Web Development. Contact institute for details.',
    aHi: 'Basic Computer, Web Designing, Tally Prime with GST, Data Entry, Graphic Designing, ADCA / DCA / CCC, Digital Marketing, Advanced Excel, Cyber Security Fundamentals, SQL, Python और Web Development उपलब्ध हैं। अधिक जानकारी के लिए संस्थान से संपर्क करें।',
  },
  {
    qEn: 'Can beginners join?',
    qHi: 'क्या शुरुआती विद्यार्थियों को पहले से कंप्यूटर का ज्ञान होना आवश्यक है?',
    aEn: 'No prior knowledge needed. Beginner tracks start from absolute basics — using a computer, typing, files and internet — with step-by-step guidance.',
    aHi: 'नहीं। शुरुआती पाठ्यक्रम बिल्कुल मूल स्तर से शुरू होते हैं — कंप्यूटर चलाना, टाइपिंग, फाइलों का उपयोग और इंटरनेट — तथा चरण-दर-चरण मार्गदर्शन दिया जाता है।',
  },
  {
    qEn: 'Is practical training included?',
    qHi: 'क्या व्यावहारिक प्रशिक्षण शामिल है?',
    aEn: 'Yes. Every topic includes demonstrations followed by hands-on practice in the computer lab with guided exercises.',
    aHi: 'हाँ। प्रत्येक विषय में पहले प्रदर्शन और उसके बाद कंप्यूटर प्रयोगशाला में मार्गदर्शित व्यावहारिक अभ्यास कराया जाता है।',
  },
  {
    qEn: 'Which programming languages are taught?',
    qHi: 'कौन-कौन सी प्रोग्रामिंग भाषाएँ सिखाई जाती हैं?',
    aEn: 'C concepts, Python, Java concepts, JavaScript, SQL and web technologies across relevant learning paths. Ask the institute which language track suits your goal.',
    aHi: 'संबंधित अध्ययन मार्गों के अनुसार C की अवधारणाएँ, Python, Java की अवधारणाएँ, JavaScript, SQL तथा वेब प्रौद्योगिकियाँ सिखाई जाती हैं। आपके लक्ष्य के लिए कौन-सा भाषा अध्ययन मार्ग उपयुक्त है, इसकी जानकारी संस्थान से प्राप्त करें।',
  },
  {
    qEn: 'Which web development courses are available?',
    qHi: 'क्या वेब विकास के पाठ्यक्रम उपलब्ध हैं?',
    aEn: 'Yes — Web Designing (HTML/CSS) for beginners and Web Development (JavaScript, React concepts) as an advanced project-based path.',
    aHi: 'हाँ — शुरुआती विद्यार्थियों के लिए Web Designing (HTML/CSS) और उन्नत परियोजना आधारित अध्ययन के लिए Web Development (JavaScript, React की अवधारणाएँ) उपलब्ध है।',
  },
  {
    qEn: 'How can I contact the institute?',
    qHi: 'संस्थान से कैसे संपर्क किया जा सकता है?',
    aEn: 'Call +91 8679398235, message on WhatsApp, or visit Mannat Complex, Khadri Road, Shyampur, Rishikesh.',
    aHi: '+91 8679398235 पर कॉल करें, WhatsApp पर संदेश भेजें, या Mannat Complex, Khadri Road, Shyampur, Rishikesh पर आएँ।',
  },
  {
    qEn: 'Where is the institute located?',
    qHi: 'संस्थान कहाँ स्थित है?',
    aEn: 'Mannat Complex, Khadri Road, Shyampur, Rishikesh, Dehradun – 249204. Use Get Directions for live navigation.',
    aHi: 'Mannat Complex, Khadri Road, Shyampur, Rishikesh, Dehradun – 249204। वास्तविक मार्गदर्शन के लिए मार्ग देखें का उपयोग करें।',
  },
];
