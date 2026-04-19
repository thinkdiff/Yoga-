import { DailyScheduleItem } from '../types';

export const defaultDailySchedule: DailyScheduleItem[] = [
  { time: '05:30 AM', activity: 'Wake up bell & herbal tea' },
  { time: '06:00 AM', activity: 'Shatkarma — traditional cleansing practices' },
  { time: '06:30 AM', activity: 'Pranayama & Mantra chanting' },
  { time: '07:30 AM', activity: 'Hatha / Ashtanga Asana practice' },
  { time: '09:30 AM', activity: 'Sattvic vegetarian breakfast' },
  { time: '10:30 AM', activity: 'Yoga Anatomy & Physiology' },
  { time: '12:00 PM', activity: 'Yoga Philosophy & Self-Study' },
  { time: '01:30 PM', activity: 'Lunch & rest' },
  { time: '03:30 PM', activity: 'Teaching Methodology & Alignment' },
  { time: '05:00 PM', activity: 'Vinyasa / Restorative Asana' },
  { time: '06:30 PM', activity: 'Meditation & Yoga Nidra' },
  { time: '07:30 PM', activity: 'Dinner & free time' },
  { time: '09:30 PM', activity: 'Rest — lights out' },
];

export const defaultEligibility: string[] = [
  'Open to sincere practitioners aged 16 and above from any background.',
  'Basic familiarity with a regular yoga or meditation practice is helpful but not required for 200-hour programs.',
  'You should be in reasonable physical and mental health and able to commit to a full-time residential schedule.',
  'Willingness to follow the ashram code of conduct — no alcohol, tobacco, or non-vegetarian food on campus.',
  'English comprehension sufficient to follow instruction and participate in discussions.',
  'For 300 and 500-hour programs, a completed Yoga Alliance 200-hour certification (or equivalent) is required.',
];

export const defaultAccommodation: string[] = [
  'Private and twin-shared rooms with attached bathrooms and hot water',
  'Cotton linens, towels, and daily housekeeping',
  'High-speed Wi-Fi in common areas',
  'Filtered drinking water on every floor',
  'Rooftop terrace with Himalayan views',
  'Laundry service available on request',
];

export const defaultFood: string[] = [
  'Three freshly prepared sattvic vegetarian / vegan meals per day',
  'Seasonal and locally sourced organic ingredients from the Himalayan foothills',
  'Ayurvedic herbal teas served throughout the day',
  'Gluten-free and dairy-free options on request',
  'Weekly traditional Indian thali and specialty cuisine night',
];

export const defaultExcursions: string[] = [
  'Guided visit to Vashishta Cave and sacred sites of Rishikesh',
  'Evening Ganga aarti at Triveni Ghat',
  'Morning trek to Kunjapuri Temple for sunrise over the Himalayas',
  'Day trip to Neer Garh and Patna waterfalls',
  'Full-moon bonfire and kirtan on the banks of the Ganges',
  'Beatles Ashram cultural walk',
];

export const defaultWhyChoose: string[] = [
  'Yoga Alliance USA registered school — internationally recognised RYT certification',
  'Small group sizes (max 20 students) for personal attention from faculty',
  'Faculty with 10–25+ years of teaching experience in authentic Himalayan lineages',
  'Located in Tapovan, Rishikesh — the world capital of yoga, on the banks of the Ganga',
  'Lifetime alumni community, refresher classes, and post-course mentoring',
  'Balanced curriculum of classical theory, modern anatomy, and daily teaching practice',
];

export const travelGuide: { title: string; body: string }[] = [
  {
    title: 'Visa',
    body: 'Most nationalities can apply for an Indian e-Visa online at indianvisaonline.gov.in. Choose the "Tourist" category and allow 3–5 business days for approval.',
  },
  {
    title: 'Flights',
    body: 'Fly into Delhi (DEL) or Dehradun (DED). We recommend arriving at least one day before the course begins so you can rest and acclimatise.',
  },
  {
    title: 'Airport pickup',
    body: 'We arrange complimentary pickup from Dehradun Airport and paid pickup from Delhi (approx. $80 USD, ~6-hour drive). Let us know your flight details after booking.',
  },
  {
    title: 'What to bring',
    body: 'Yoga clothing, warm layers for mornings (Oct–Mar), a notebook, reusable water bottle, personal toiletries, and any prescription medication. We provide mats, blocks, and manuals.',
  },
  {
    title: 'Weather',
    body: 'Spring (Mar–May) is warm and sunny. Monsoon (Jul–Sep) is green and cool. Autumn (Oct–Nov) is ideal. Winter (Dec–Feb) is crisp and clear — bring a jacket.',
  },
  {
    title: 'Currency & connectivity',
    body: 'The local currency is the Indian Rupee (INR). ATMs and SIM-card shops are a short walk from the ashram. Wi-Fi is available on campus.',
  },
];

export const defaultStudentVideoIds: string[] = ['wX78iKhInsc', 'ScMzIvxBSi4', 'inpok4MKVLM'];
