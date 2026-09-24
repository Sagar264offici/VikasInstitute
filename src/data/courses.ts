export type CourseLevel = 'Beginner' | 'Professional' | 'Programming' | 'Web' | 'Business Tools' | 'Advanced';
export type CourseFilter = 'All' | CourseLevel;

export interface Course {
  id: string;
  slug: string;
  icon: string; // lucide icon key
  category: string;
  categoryHi: string;
  level: CourseLevel[];
  titleEn: string;
  titleHi: string;
  descEn: string;
  descHi: string;
  tagsEn: string[];
  tagsHi: string[];
}

export const courseFilters: CourseFilter[] = ['All', 'Beginner', 'Professional', 'Programming', 'Web', 'Business Tools', 'Advanced'];

export const courses: Course[] = [
  {
    id: 'basic-computer',
    slug: 'basic-computer-course',
    icon: 'Monitor',
    category: 'Foundation',
    categoryHi: 'बुनियाद',
    level: ['Beginner'],
    titleEn: 'Basic Computer Course',
    titleHi: 'बेसिक कंप्यूटर कोर्स',
    descEn: 'Computer fundamentals, typing, MS Paint, internet basics and everyday digital skills for absolute beginners.',
    descHi: 'बिल्कुल नए learners हेतु कंप्यूटर मूल बातें, टाइपिंग, MS Paint, इंटरनेट व रोज़मर्रा के डिजिटल कौशल।',
    tagsEn: ['Fundamentals', 'Typing', 'Internet'],
    tagsHi: ['मूल बातें', 'टाइपिंग', 'इंटरनेट'],
  },
  {
    id: 'web-designing',
    slug: 'web-designing',
    icon: 'Palette',
    category: 'Design',
    categoryHi: 'डिज़ाइन',
    level: ['Beginner', 'Web', 'Professional'],
    titleEn: 'Web Designing',
    titleHi: 'वेब डिज़ाइनिंग',
    descEn: 'HTML, CSS and visual design basics to create clean, responsive web pages with hands-on layout practice.',
    descHi: 'साफ, responsive वेब पेज बनाने हेतु HTML, CSS और visual design की बुनियाद — hands-on layout अभ्यास सहित।',
    tagsEn: ['HTML', 'CSS', 'UI Basics'],
    tagsHi: ['HTML', 'CSS', 'UI मूल बातें'],
  },
  {
    id: 'tally-gst',
    slug: 'tally-prime-with-gst',
    icon: 'Calculator',
    category: 'Accounting',
    categoryHi: 'अकाउंटिंग',
    level: ['Professional', 'Business Tools'],
    titleEn: 'Tally Prime with GST',
    titleHi: 'Tally Prime with GST',
    descEn: 'Practical accounting entries, inventory, GST concepts and business reports used in real offices.',
    descHi: 'असली ऑफिस में उपयोग होने वाली accounting entries, inventory, GST अवधारणाएं व बिज़नेस रिपोर्ट — व्यावहारिक रूप से।',
    tagsEn: ['Tally', 'GST', 'Billing'],
    tagsHi: ['Tally', 'GST', 'बिलिंग'],
  },
  {
    id: 'data-entry',
    slug: 'data-entry-operator',
    icon: 'Keyboard',
    category: 'Office Skills',
    categoryHi: 'ऑफिस कौशल',
    level: ['Beginner', 'Professional', 'Business Tools'],
    titleEn: 'Data Entry Operator',
    titleHi: 'डाटा एंट्री ऑपरेटर',
    descEn: 'Typing speed & accuracy, MS Office, spreadsheets and office documentation workflows.',
    descHi: 'टाइपिंग गति व शुद्धता, MS Office, स्प्रेडशीट और ऑफिस documentation कार्यप्रणाली।',
    tagsEn: ['Typing', 'MS Office', 'Accuracy'],
    tagsHi: ['टाइपिंग', 'MS Office', 'शुद्धता'],
  },
  {
    id: 'graphic-design',
    slug: 'graphic-designing',
    icon: 'PenTool',
    category: 'Design',
    categoryHi: 'डिज़ाइन',
    level: ['Professional'],
    titleEn: 'Graphic Designing',
    titleHi: 'ग्राफिक डिज़ाइनिंग',
    descEn: 'Design fundamentals, posters, social creatives and print basics with practical design tools.',
    descHi: 'डिज़ाइन मूल बातें, पोस्टर, सोशल creatives व प्रिंट basics — व्यावहारिक डिज़ाइन टूल्स सहित।',
    tagsEn: ['Creatives', 'Posters', 'Branding'],
    tagsHi: ['Creatives', 'पोस्टर', 'ब्रांडिंग'],
  },
  {
    id: 'adca-dca-ccc',
    slug: 'adca-dca-ccc',
    icon: 'Award',
    category: 'Diploma',
    categoryHi: 'डिप्लोमा',
    level: ['Beginner', 'Professional', 'Business Tools'],
    titleEn: 'ADCA / DCA / CCC',
    titleHi: 'ADCA / DCA / CCC',
    descEn: 'Complete computer diploma tracks covering office tools, internet, digital skills and fundamentals.',
    descHi: 'ऑफिस टूल्स, इंटरनेट, डिजिटल कौशल व मूल बातों को कवर करने वाले संपूर्ण कंप्यूटर डिप्लोमा ट्रैक।',
    tagsEn: ['Diploma', 'MS Office', 'Digital Skills'],
    tagsHi: ['डिप्लोमा', 'MS Office', 'डिजिटल कौशल'],
  },
  {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    icon: 'Megaphone',
    category: 'Marketing',
    categoryHi: 'मार्केटिंग',
    level: ['Professional', 'Business Tools'],
    titleEn: 'Digital Marketing',
    titleHi: 'डिजिटल मार्केटिंग',
    descEn: 'Social media, content basics, online promotion and website management fundamentals for business.',
    descHi: 'बिज़नेस हेतु सोशल मीडिया, कंटेंट basics, ऑनलाइन प्रचार व वेबसाइट प्रबंधन की बुनियाद।',
    tagsEn: ['Social Media', 'SEO Basics', 'Content'],
    tagsHi: ['सोशल मीडिया', 'SEO basics', 'कंटेंट'],
  },
  {
    id: 'advanced-excel',
    slug: 'advanced-excel',
    icon: 'Sheet',
    category: 'Productivity',
    categoryHi: 'उत्पादकता',
    level: ['Professional', 'Business Tools'],
    titleEn: 'Advanced Excel',
    titleHi: 'एडवांस्ड एक्सेल',
    descEn: 'Formulas, data cleaning, reporting, charts and automation basics for office & analysis work.',
    descHi: 'ऑफिस व analysis कार्य हेतु formulas, data cleaning, रिपोर्टिंग, चार्ट व automation basics।',
    tagsEn: ['Formulas', 'Reports', 'Power BI Intro'],
    tagsHi: ['Formulas', 'रिपोर्ट', 'Power BI परिचय'],
  },
  {
    id: 'cyber-security',
    slug: 'cyber-security-fundamentals',
    icon: 'ShieldCheck',
    category: 'Security',
    categoryHi: 'सुरक्षा',
    level: ['Advanced', 'Professional'],
    titleEn: 'Cyber Security Fundamentals',
    titleHi: 'साइबर सुरक्षा मूल बातें',
    descEn: 'Safe internet practices, threats, passwords, networks and security hygiene for everyday users.',
    descHi: 'रोज़मर्रा के users हेतु सुरक्षित इंटरनेट आदतें, खतरें, पासवर्ड, नेटवर्क व सुरक्षा basics।',
    tagsEn: ['Safety', 'Networks', 'Hygiene'],
    tagsHi: ['सुरक्षा', 'नेटवर्क', 'सावधानी'],
  },
  {
    id: 'sql',
    slug: 'sql-fundamentals',
    icon: 'Database',
    category: 'Data',
    categoryHi: 'डाटा',
    level: ['Programming', 'Advanced'],
    titleEn: 'SQL Fundamentals',
    titleHi: 'SQL मूल बातें',
    descEn: 'Databases, queries, filtering, joins and reporting basics using structured hands-on exercises.',
    descHi: 'व्यवस्थित hands-on exercises द्वारा databases, queries, filtering, joins व रिपोर्टिंग basics।',
    tagsEn: ['DBMS', 'Queries', 'Reports'],
    tagsHi: ['DBMS', 'Queries', 'रिपोर्ट'],
  },
  {
    id: 'python',
    slug: 'python-programming',
    icon: 'FileCode',
    category: 'Programming',
    categoryHi: 'प्रोग्रामिंग',
    level: ['Programming', 'Advanced'],
    titleEn: 'Python Programming',
    titleHi: 'पाइथन प्रोग्रामिंग',
    descEn: 'Core Python, logic building, automation basics and problem-solving with guided practice.',
    descHi: 'Core Python, logic building, automation basics व problem-solving — guided practice सहित।',
    tagsEn: ['Python', 'Logic', 'Automation'],
    tagsHi: ['Python', 'Logic', 'Automation'],
  },
  {
    id: 'web-dev',
    slug: 'web-development',
    icon: 'Code2',
    category: 'Development',
    categoryHi: 'डेवलपमेंट',
    level: ['Programming', 'Web', 'Advanced'],
    titleEn: 'Web Development',
    titleHi: 'वेब डेवलपमेंट',
    descEn: 'Modern websites with HTML, CSS, JavaScript and React concepts — project-based learning path.',
    descHi: 'HTML, CSS, JavaScript व React अवधारणाओं से आधुनिक वेबसाइट — प्रोजेक्ट-आधारित लर्निंग पाथ।',
    tagsEn: ['JavaScript', 'React', 'Projects'],
    tagsHi: ['JavaScript', 'React', 'प्रोजेक्ट'],
  },
];

export const advancedTracksEn = [
  'C Programming', 'Java', 'AI Tools', 'Data Structures', 'Full Stack Development',
  'Cloud Computing', 'DevOps', 'Machine Learning', 'Power BI', 'Python Automation',
  'AI Productivity Tools', 'Networking',
];

export const advancedTracksHi = [
  'C प्रोग्रामिंग', 'Java', 'AI टूल्स', 'डाटा स्ट्रक्चर्स', 'फुल स्टैक डेवलपमेंट',
  'क्लाउड कंप्यूटिंग', 'DevOps', 'मशीन लर्निंग', 'Power BI', 'Python Automation',
  'AI Productivity टूल्स', 'नेटवर्किंग',
];

export const techChips = [
  'C', 'C++', 'Python', 'Java', 'JavaScript', 'HTML', 'CSS', 'React', 'SQL', 'Git',
  'Web Development', 'Data Structures', 'AI', 'Cyber Security',
];
