export interface Feature {
  index: string;
  titleEn: string;
  titleHi: string;
  descEn: string;
  descHi: string;
}

export const features: Feature[] = [
  {
    index: '01',
    titleEn: 'Practical Training',
    titleHi: 'व्यावहारिक प्रशिक्षण',
    descEn: 'Every concept followed by hands-on exercises on live computer systems.',
    descHi: 'हर कॉन्सेप्ट के बाद लाइव सिस्टम पर hands-on अभ्यास।',
  },
  {
    index: '02',
    titleEn: 'Expert Faculty',
    titleHi: 'अनुभवी शिक्षक',
    descEn: 'Structured explanations, demonstrations and guided practice.',
    descHi: 'व्यवस्थित समझ, प्रदर्शन और guided practice।',
  },
  {
    index: '03',
    titleEn: 'Career-Focused Skills',
    titleHi: 'करियर-केंद्रित कौशल',
    descEn: 'Topics selected to match real office, business and technology needs.',
    descHi: 'असली ऑफिस, बिज़नेस और तकनीकी ज़रूरतों से जुड़े विषय।',
  },
  {
    index: '04',
    titleEn: 'Modern Learning',
    titleHi: 'आधुनिक लर्निंग',
    descEn: 'Comfortable lab with updated systems for daily practice.',
    descHi: 'रोज़ अभ्यास हेतु updated सिस्टम वाली आरामदायक लैब।',
  },
];
