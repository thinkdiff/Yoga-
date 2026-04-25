import { Course } from '../types';

const RISHIKESH_GALLERY = {
  ganga: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=1200&q=80',
  ashram: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=1200&q=80',
  asana: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80',
  meditation: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=1200&q=80',
  yogi: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=1200&q=80',
  bridge: 'https://images.unsplash.com/photo-1591291621164-2c6367723315?w=1200&q=80',
  flow: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=1200&q=80',
  group: 'https://images.unsplash.com/photo-1571417228847-2bf0d96a92dd?w=1200&q=80',
  sunset: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=1200&q=80',
  aarti: 'https://images.unsplash.com/photo-1567593810070-7a3d471af022?w=1200&q=80',
  himalaya: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80',
  candle: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1200&q=80',
};

const galleryFor = (...keys: (keyof typeof RISHIKESH_GALLERY)[]) =>
  keys.map((k) => RISHIKESH_GALLERY[k]);

const ALL_TEACHERS = ['t1', 't2', 't3'];

const commonLong200: string[] = [
  'At Nirvana Yoga School, the 200-Hour Yoga Teacher Training is both a certification and a rite of passage — an initiation into a profoundly transformative path of self-discovery, healing, and empowerment. Recognised by Yoga Alliance USA, this foundational course is carefully designed to balance practical learning with the rich philosophy and timeless wisdom that yoga embodies.',
  'Rishikesh — the sacred birthplace of yoga, cradled by the shimmering waters of the Holy Ganga — is the setting for your journey. For 25 immersive days you live, breathe, eat, and study yoga in one of the most revered spiritual ecosystems on earth.',
  'Our curriculum offers a robust framework in asana, pranayama, meditation, anatomy, teaching methodology, adjustments, and the philosophical lineages of Hatha, Ashtanga Vinyasa and Kundalini. Beyond technique, the deeper transformation arises quietly: when mind, body and spirit settle into harmony, a new sense of presence, purpose and peace begins to take root within you.',
];

const commonLong300: string[] = [
  'The 300-Hour Yoga Teacher Training is a deepening — a return to the inner work after the 200-Hour foundation. Designed for sincere practitioners ready to refine their teaching and their practice, this advanced course extends asana, pranayama, philosophy and therapeutic skills.',
  'Set in Rishikesh on the banks of the Ganga, the programme weaves together study, sadhana, satsang and silence. You will learn to teach with greater nuance, sequence with greater intelligence, and hold space for students with humility.',
  'Graduates emerge as RYT-500 eligible teachers — equipped with the lineage, lived practice, and inner clarity to share yoga as a living tradition rather than a workout.',
];

const commonLong500: string[] = [
  'The 500-Hour Yoga Teacher Training is the complete journey — combining our 200-Hour foundation and 300-Hour advanced training in a single immersion of nearly two months. It is for those who wish to embody yoga as a way of life and a vocation.',
  'In Rishikesh, surrounded by the Himalayas and the steady rhythm of the Ganga, you will pass through every layer of the practice — from the gross body of asana to the subtle architecture of breath, energy and consciousness.',
  'On completion you receive Yoga Alliance USA RYT-500 certification, but the real gift is harder to name: a quieter mind, a more honest heart, and a teaching presence rooted in your own direct experience.',
];

const baseInclusions = [
  'Yoga Alliance USA registered certification',
  'Comfortable private/shared accommodation in Tapovan, Rishikesh',
  'Three sattvic vegetarian meals daily, prepared with Ayurvedic principles',
  'All course manuals, study materials and a yoga mat',
  'Weekend Himalayan excursions and Ganga aarti at Parmarth Niketan',
  'Daily mantra chanting, kirtan and group satsang',
  'Free airport pickup from Dehradun (DED)',
];

const shortInclusions = [
  'Course completion certificate',
  'Comfortable accommodation in Tapovan, Rishikesh',
  'Three sattvic vegetarian meals daily',
  'All course materials and study handouts',
  'Ganga aarti and one local excursion',
];

export const courses: Course[] = [
  // ─────────────────────────────────────────────────────────────
  // 1. 100-Hour Hatha Ashtanga Vinyasa
  // ─────────────────────────────────────────────────────────────
  {
    id: 'c100hav',
    slug: '100hr-hatha-ashtanga-vinyasa',
    title: '100-Hour Hatha Ashtanga Vinyasa YTT, Rishikesh',
    category: '200 Hour',
    format: 'in-person',
    duration: '12 days',
    style: ['Hatha', 'Ashtanga', 'Vinyasa'],
    price: { usd: 799, inr: 66000, earlyBirdUsd: 599 },
    depositUsd: 200,
    startDates: ['Oct 5, 2026', 'Nov 5, 2026', 'Dec 5, 2026'],
    description:
      'A 12-day immersion in the foundations of Hatha and Ashtanga Vinyasa — perfect for sincere practitioners who want a structured first step into yogic study without committing to a full 200-Hour course.',
    longDescription: [
      'Our 100-Hour Hatha Ashtanga Vinyasa Course is a focused, 12-day foundation programme set on the banks of the Holy Ganga in Rishikesh. It is designed for students who want to deepen their personal practice and lay an honest foundation for future teacher training.',
      'You will learn the traditional Hatha postures, the Ashtanga Vinyasa Primary Series with its breath-led vinyasa count, the essentials of pranayama and meditation, and the philosophical roots of yoga as taught in Patanjali’s Yoga Sutras.',
      'On completion, the 100-Hour can be credited toward our 200-Hour Yoga Teacher Training, allowing you to continue your study at your own rhythm.',
    ],
    curriculum: [
      'Foundations of Hatha Yoga',
      'Ashtanga Vinyasa Primary Series — short form',
      'Pranayama essentials',
      'Introduction to meditation',
      'Yoga philosophy & lifestyle',
    ],
    curriculumModules: [
      {
        title: 'Asana — Foundations',
        topics: [
          'Sun salutations A & B with vinyasa count',
          'Standing and seated Hatha postures',
          'Alignment principles and use of props',
          'Introduction to the Ashtanga Primary Series',
        ],
      },
      {
        title: 'Pranayama & Meditation',
        topics: [
          'Nadi Shodhana, Bhastrika, Ujjayi & Bhramari',
          'Breath awareness and natural breath observation',
          'Trataka, mantra japa and silent sitting',
        ],
      },
      {
        title: 'Anatomy & Philosophy',
        topics: [
          'Functional anatomy for the yogi',
          'Eight limbs of yoga (Ashtanga of Patanjali)',
          'Yamas, niyamas and the yogic lifestyle',
        ],
      },
    ],
    inclusions: shortInclusions.concat([
      '100-Hour course completion certificate',
      'Credit transfer toward our 200-Hour YTT',
    ]),
    teachers: ALL_TEACHERS,
    images: galleryFor('asana', 'ganga', 'group'),
    gallery: galleryFor('asana', 'ganga', 'group', 'meditation', 'sunset'),
    seoTitle: '100 Hour Hatha Ashtanga Vinyasa Yoga Teacher Training Course in Rishikesh | Nirvana Yoga School',
    seoDescription:
      '100 hour Hatha Ashtanga Vinyasa yoga teacher training course in Rishikesh, India. 12-day foundation immersion on the banks of the Ganga. Yoga Alliance lineage. Enrol today.',
  },

  // ─────────────────────────────────────────────────────────────
  // 2. 200-Hour Hatha Ashtanga Vinyasa
  // ─────────────────────────────────────────────────────────────
  {
    id: 'c200hav',
    slug: '200hr-hatha-ashtanga-vinyasa',
    title: '200-Hour Hatha Ashtanga Vinyasa YTT, Rishikesh',
    category: '200 Hour',
    format: 'in-person',
    duration: '25 days',
    style: ['Hatha', 'Ashtanga', 'Vinyasa'],
    price: { usd: 1299, inr: 108000, earlyBirdUsd: 974 },
    depositUsd: 250,
    startDates: ['Oct 1, 2026', 'Nov 1, 2026', 'Dec 1, 2026'],
    description:
      'A comprehensive foundational training blending traditional Hatha with the dynamic flow of Ashtanga Vinyasa. Rooted in the lineage of Rishikesh, this 25-day immersion gives you the tools, philosophy, and teaching practice to begin your journey as a certified yoga teacher.',
    longDescription: commonLong200,
    curriculum: [
      'Pranayama & Shatkarma (cleansing practices)',
      'Ashtanga Vinyasa Primary Series',
      'Traditional Hatha Yoga Asanas',
      'Yoga Anatomy & Physiology',
      'Yoga Philosophy — Patanjali & the Bhagavad Gita',
      'Teaching Methodology & Adjustments',
    ],
    curriculumModules: [
      {
        title: 'Asana — Posture Practice',
        topics: [
          'Traditional Hatha postures and their therapeutic effects',
          'Ashtanga Vinyasa Primary Series — full sequence and vinyasa count',
          'Alignment, modifications, and safe hands-on adjustments',
          'Use of props, blocks, straps, and walls',
        ],
      },
      {
        title: 'Pranayama & Shatkarma',
        topics: [
          'Nadi Shodhana, Bhastrika, Kapalabhati, Ujjayi and Bhramari',
          'Jala & Sutra Neti, Trataka and Kunjal Kriya',
          'Bandhas — Mula, Uddiyana and Jalandhara',
          'Sequencing pranayama into a daily sadhana',
        ],
      },
      {
        title: 'Yoga Anatomy & Physiology',
        topics: [
          'Musculoskeletal system and common yoga-related injuries',
          'Biomechanics of standing, seated, and inverted postures',
          'Respiratory, nervous, and endocrine systems',
          'Subtle anatomy — koshas, nadis, chakras',
        ],
      },
      {
        title: 'Philosophy & Lifestyle',
        topics: [
          'Patanjali’s Yoga Sutras — the Eight Limbs of Yoga',
          'Bhagavad Gita — Karma, Bhakti and Jnana Yoga',
          'History and lineage of Hatha and Ashtanga Yoga',
          'Ethics, yamas & niyamas, and the yogic lifestyle',
        ],
      },
      {
        title: 'Meditation & Mantra',
        topics: [
          'Techniques of meditation — trataka, mantra, vipassana',
          'Japa practice with mala beads',
          'Silent sadhana and self-inquiry',
        ],
      },
      {
        title: 'Teaching Methodology & Practicum',
        topics: [
          'Sequencing a balanced 60–90 minute class',
          'Voice, demonstration and language of cueing',
          'Hands-on adjustments and student observation',
          'Practice teaching with peer and faculty feedback',
        ],
      },
    ],
    inclusions: baseInclusions.concat(['Yoga Alliance USA RYT-200 certification']),
    teachers: ALL_TEACHERS,
    images: galleryFor('asana', 'ganga', 'group'),
    gallery: galleryFor('asana', 'ganga', 'group', 'meditation', 'aarti'),
    seoTitle: '200 Hour Hatha Ashtanga Vinyasa Yoga Teacher Training Course in Rishikesh India | Nirvana Yoga School',
    seoDescription:
      '200 hour Hatha Ashtanga Vinyasa yoga teacher training course in Rishikesh India. 25-day Yoga Alliance certified RYT-200 immersion on the banks of the Ganga. Reserve your seat.',
  },

  // ─────────────────────────────────────────────────────────────
  // 3. 300-Hour Hatha Ashtanga Vinyasa
  // ─────────────────────────────────────────────────────────────
  {
    id: 'c300hav',
    slug: '300hr-hatha-ashtanga-vinyasa',
    title: '300-Hour Hatha Ashtanga Vinyasa YTT, Rishikesh',
    category: '300 Hour',
    format: 'in-person',
    duration: '30 days',
    style: ['Hatha', 'Ashtanga', 'Vinyasa'],
    price: { usd: 1999, inr: 166000, earlyBirdUsd: 1499 },
    depositUsd: 300,
    startDates: ['Oct 1, 2026', 'Dec 1, 2026', 'Feb 1, 2027'],
    description:
      'An advanced 30-day deepening for RYT-200 graduates — refined alignment, the Intermediate Series of Ashtanga, advanced pranayama and a teaching practicum that prepares you to lead with clarity and humility.',
    longDescription: commonLong300,
    curriculum: [
      'Ashtanga Vinyasa Intermediate Series',
      'Advanced Hatha and pranayama',
      'Sequencing & adjustments — advanced',
      'Yoga therapy fundamentals',
      'Teaching methodology — advanced',
      'Patanjali, Hatha Yoga Pradipika & Bhagavad Gita',
    ],
    curriculumModules: [
      {
        title: 'Advanced Asana',
        topics: [
          'Ashtanga Vinyasa Intermediate Series',
          'Advanced Hatha postures, inversions and arm balances',
          'Refined alignment and the use of bandhas',
        ],
      },
      {
        title: 'Pranayama & Subtle Body',
        topics: [
          'Advanced pranayama techniques',
          'Nadis, chakras and the koshas in practice',
          'Mantra and bija sound work',
        ],
      },
      {
        title: 'Yoga Therapy',
        topics: [
          'Therapeutic sequencing for back, knee and shoulder care',
          'Working with stress, anxiety and insomnia',
          'Foundations of one-on-one yoga therapy',
        ],
      },
      {
        title: 'Philosophy — Advanced',
        topics: [
          'Hatha Yoga Pradipika in depth',
          'Patanjali’s Yoga Sutras (deeper study)',
          'Bhagavad Gita — Jnana, Bhakti and Karma',
        ],
      },
      {
        title: 'Teaching Practicum',
        topics: [
          'Designing and leading multi-week training arcs',
          'Hands-on adjustments — advanced',
          'Mentored teaching with feedback',
        ],
      },
    ],
    inclusions: baseInclusions.concat(['Yoga Alliance USA RYT-500 (300hr) certification']),
    teachers: ALL_TEACHERS,
    images: galleryFor('flow', 'ashram', 'himalaya'),
    gallery: galleryFor('flow', 'ashram', 'himalaya', 'meditation', 'sunset'),
    seoTitle: '300 Hour Hatha Ashtanga Vinyasa Yoga Teacher Training Course in Rishikesh India | Nirvana Yoga School',
    seoDescription:
      '300 hour Hatha Ashtanga Vinyasa yoga teacher training course in Rishikesh India. Advanced 30-day RYT-500 immersion for RYT-200 graduates. Apply for our next batch.',
  },

  // ─────────────────────────────────────────────────────────────
  // 4. 200-Hour Hatha Kundalini
  // ─────────────────────────────────────────────────────────────
  {
    id: 'c200hk',
    slug: '200hr-hatha-kundalini',
    title: '200-Hour Hatha Kundalini YTT, Rishikesh',
    category: '200 Hour',
    format: 'in-person',
    duration: '25 days',
    style: ['Hatha', 'Kundalini', 'Meditation'],
    price: { usd: 1399, inr: 116000, earlyBirdUsd: 1049 },
    depositUsd: 250,
    startDates: ['Nov 1, 2026', 'Jan 1, 2027', 'Mar 1, 2027'],
    description:
      'A 25-day Yoga Alliance certified training that blends the steadiness of Hatha with the energetic awakening of Kundalini Yoga — kriyas, mantras, meditation and the subtle anatomy of the chakras.',
    longDescription: commonLong200,
    curriculum: [
      'Hatha Yoga foundations',
      'Kundalini Yoga kriyas',
      'Mantra & sound practice',
      'Pranayama & bandhas',
      'Subtle anatomy — chakras & nadis',
      'Teaching methodology',
    ],
    curriculumModules: [
      {
        title: 'Kundalini Kriyas',
        topics: [
          'Classical Kundalini kriyas as taught in the Himalayan tradition',
          'Breath of fire (Agni Pran) and rapid pranayama',
          'Bandhas — Mula, Uddiyana, Jalandhara',
        ],
      },
      {
        title: 'Hatha Foundations',
        topics: [
          'Traditional Hatha asanas and sequencing',
          'Alignment and modifications',
          'Sun salutations and warm-up flows',
        ],
      },
      {
        title: 'Mantra & Sound',
        topics: [
          'Bija mantras and the chakras',
          'Daily kirtan and call-and-response chanting',
          'Mantra japa with the mala',
        ],
      },
      {
        title: 'Subtle Anatomy',
        topics: [
          'Seven chakras — practice and teaching',
          'Ida, Pingala and Sushumna nadis',
          'Koshas — the five sheaths',
        ],
      },
      {
        title: 'Philosophy & Practicum',
        topics: [
          'Patanjali’s Yoga Sutras',
          'Yamas, niyamas and the yogic lifestyle',
          'Teaching methodology and practicum',
        ],
      },
    ],
    inclusions: baseInclusions.concat(['Yoga Alliance USA RYT-200 certification', 'Daily kirtan and mantra session']),
    teachers: ALL_TEACHERS,
    images: galleryFor('meditation', 'aarti', 'yogi'),
    gallery: galleryFor('meditation', 'aarti', 'yogi', 'candle', 'ganga'),
    seoTitle: '200 Hour Hatha Kundalini Yoga Teacher Training Course in Rishikesh India | Nirvana Yoga School',
    seoDescription:
      '200 hour Hatha Kundalini yoga teacher training course in Rishikesh India. 25-day Yoga Alliance RYT-200 immersion blending kriyas, mantra and Hatha. Enrol today.',
  },

  // ─────────────────────────────────────────────────────────────
  // 5. 300-Hour Hatha Kundalini
  // ─────────────────────────────────────────────────────────────
  {
    id: 'c300hk',
    slug: '300hr-hatha-kundalini',
    title: '300-Hour Hatha Kundalini YTT, Rishikesh',
    category: '300 Hour',
    format: 'in-person',
    duration: '30 days',
    style: ['Hatha', 'Kundalini', 'Meditation'],
    price: { usd: 2099, inr: 174000, earlyBirdUsd: 1574 },
    depositUsd: 300,
    startDates: ['Oct 15, 2026', 'Jan 15, 2027'],
    description:
      'An advanced 30-day deepening into Hatha and Kundalini Yoga — advanced kriyas, mantra sadhana, chakra meditation and the teaching of subtle-body practices.',
    longDescription: commonLong300,
    curriculum: [
      'Advanced Kundalini kriyas',
      'Advanced Hatha and pranayama',
      'Mantra sadhana & chanting',
      'Chakra meditation in depth',
      'Teaching subtle-body practices',
      'Yoga philosophy — Hatha Yoga Pradipika & Tantra texts',
    ],
    curriculumModules: [
      {
        title: 'Advanced Kriya & Pranayama',
        topics: [
          'Long-form classical Kundalini kriyas',
          'Advanced bandhas and mudras',
          'Pranayama for awakening prana shakti',
        ],
      },
      {
        title: 'Mantra Sadhana',
        topics: [
          'Personal mantra practice (japa with mala)',
          'Bija mantras and chakra activation',
          'Kirtan leadership skills',
        ],
      },
      {
        title: 'Chakra & Subtle Body',
        topics: [
          'Chakra meditation — guided practice',
          'Awakening Sushumna nadi safely',
          'Working ethically with energy practices',
        ],
      },
      {
        title: 'Philosophy — Tantric & Hatha',
        topics: [
          'Hatha Yoga Pradipika in depth',
          'Introduction to classical Tantra',
          'Patanjali on samadhi',
        ],
      },
      {
        title: 'Teaching Practicum',
        topics: [
          'Designing safe Kundalini classes',
          'Adjustments and energy ethics',
          'Mentored teaching with feedback',
        ],
      },
    ],
    inclusions: baseInclusions.concat(['Yoga Alliance USA RYT-500 (300hr) certification', 'Daily kirtan and mantra session']),
    teachers: ALL_TEACHERS,
    images: galleryFor('candle', 'aarti', 'meditation'),
    gallery: galleryFor('candle', 'aarti', 'meditation', 'yogi', 'sunset'),
    seoTitle: '300 Hour Hatha Kundalini Yoga Teacher Training Course in Rishikesh India | Nirvana Yoga School',
    seoDescription:
      '300 hour Hatha Kundalini yoga teacher training course in Rishikesh India. Advanced 30-day RYT-500 immersion in kriyas, mantra and chakra sadhana. Reserve your place.',
  },

  // ─────────────────────────────────────────────────────────────
  // 6. 500-Hour Hatha Ashtanga Vinyasa
  // ─────────────────────────────────────────────────────────────
  {
    id: 'c500hav',
    slug: '500hr-hatha-ashtanga-vinyasa',
    title: '500-Hour Hatha Ashtanga Vinyasa YTT, Rishikesh',
    category: '500 Hour',
    format: 'in-person',
    duration: '60 days',
    style: ['Hatha', 'Ashtanga', 'Vinyasa', 'Meditation'],
    price: { usd: 3199, inr: 265000, earlyBirdUsd: 2399 },
    depositUsd: 400,
    startDates: ['Oct 1, 2026', 'Feb 1, 2027'],
    description:
      'Our most complete journey — 200-Hour foundation and 300-Hour deepening combined into a single 60-day immersion. The full RYT-500 path of Hatha and Ashtanga Vinyasa Yoga.',
    longDescription: commonLong500,
    curriculum: [
      '200-Hour foundational curriculum',
      '300-Hour advanced curriculum',
      'Ashtanga Primary & Intermediate Series',
      'Advanced Hatha & pranayama',
      'Yoga therapy fundamentals',
      'Teaching methodology — full arc',
    ],
    curriculumModules: [
      {
        title: 'Foundations (200-Hour)',
        topics: [
          'Hatha asanas and the Ashtanga Primary Series',
          'Pranayama, shatkarma and meditation',
          'Anatomy, philosophy and ethics',
        ],
      },
      {
        title: 'Deepening (300-Hour)',
        topics: [
          'Ashtanga Intermediate Series',
          'Advanced Hatha and pranayama',
          'Yoga therapy and adjustments',
        ],
      },
      {
        title: 'Yoga Therapy',
        topics: [
          'Therapeutic sequencing for common conditions',
          'Working with stress, anxiety and insomnia',
          'One-on-one yoga therapy basics',
        ],
      },
      {
        title: 'Philosophy — Full Arc',
        topics: [
          'Patanjali, Hatha Yoga Pradipika and Bhagavad Gita',
          'History of yoga and lineage study',
          'Yamas, niyamas and the teacher’s ethics',
        ],
      },
      {
        title: 'Teaching Practicum',
        topics: [
          'Designing and leading multi-week training arcs',
          'Adjustments — beginner through advanced',
          'Mentored teaching and final assessment',
        ],
      },
    ],
    inclusions: baseInclusions.concat(['Yoga Alliance USA RYT-500 certification', 'Two-month full-board accommodation']),
    teachers: ALL_TEACHERS,
    images: galleryFor('flow', 'himalaya', 'group'),
    gallery: galleryFor('flow', 'himalaya', 'group', 'meditation', 'aarti'),
    seoTitle: '500 Hour Hatha Ashtanga Vinyasa Yoga Teacher Training Course in Rishikesh India | Nirvana Yoga School',
    seoDescription:
      '500 hour Hatha Ashtanga Vinyasa yoga teacher training course in Rishikesh India. 60-day Yoga Alliance RYT-500 immersion. The complete teacher’s path. Apply now.',
  },

  // ─────────────────────────────────────────────────────────────
  // 7. 500-Hour Hatha Kundalini Vinyasa
  // ─────────────────────────────────────────────────────────────
  {
    id: 'c500hkv',
    slug: '500hr-hatha-kundalini-vinyasa',
    title: '500-Hour Hatha Kundalini Vinyasa YTT, Rishikesh',
    category: '500 Hour',
    format: 'in-person',
    duration: '60 days',
    style: ['Hatha', 'Kundalini', 'Vinyasa', 'Meditation'],
    price: { usd: 3299, inr: 273000, earlyBirdUsd: 2474 },
    depositUsd: 400,
    startDates: ['Nov 1, 2026', 'Mar 1, 2027'],
    description:
      'A 60-day complete path that weaves Hatha, Kundalini and Vinyasa into a single integrative immersion — RYT-500 certified, with deep mantra sadhana and refined teaching practicum.',
    longDescription: commonLong500,
    curriculum: [
      'Hatha Yoga foundations & advanced practice',
      'Kundalini kriyas & subtle-body work',
      'Vinyasa flow methodology',
      'Mantra sadhana and chanting',
      'Yoga therapy and adjustments',
      'Teaching methodology — full arc',
    ],
    curriculumModules: [
      {
        title: 'Hatha & Vinyasa',
        topics: [
          'Traditional Hatha postures and sequencing',
          'Vinyasa flow methodology and breath-led movement',
          'Sun salutations and creative sequencing',
        ],
      },
      {
        title: 'Kundalini & Subtle Body',
        topics: [
          'Classical and advanced Kundalini kriyas',
          'Bandhas, mudras and pranayama for prana awakening',
          'Chakra meditation and energy ethics',
        ],
      },
      {
        title: 'Mantra Sadhana',
        topics: [
          'Personal mantra practice and japa',
          'Bija mantras and the chakras',
          'Daily kirtan and devotional chanting',
        ],
      },
      {
        title: 'Yoga Therapy & Anatomy',
        topics: [
          'Functional anatomy and biomechanics',
          'Therapeutic sequencing for common conditions',
          'Adjustments — beginner through advanced',
        ],
      },
      {
        title: 'Philosophy — Full Arc',
        topics: [
          'Patanjali, Hatha Yoga Pradipika and Bhagavad Gita',
          'Introduction to classical Tantra',
          'Ethics and the teacher’s role',
        ],
      },
      {
        title: 'Teaching Practicum',
        topics: [
          'Designing and leading multi-week training arcs',
          'Mentored teaching with peer and faculty feedback',
          'Final assessment and final practicum',
        ],
      },
    ],
    inclusions: baseInclusions.concat(['Yoga Alliance USA RYT-500 certification', 'Two-month full-board accommodation', 'Daily kirtan and mantra']),
    teachers: ALL_TEACHERS,
    images: galleryFor('aarti', 'flow', 'meditation'),
    gallery: galleryFor('aarti', 'flow', 'meditation', 'candle', 'ganga'),
    seoTitle: '500 Hour Hatha Kundalini Vinyasa Yoga Teacher Training Course in Rishikesh India | Nirvana Yoga School',
    seoDescription:
      '500 hour Hatha Kundalini Vinyasa yoga teacher training course in Rishikesh India. 60-day Yoga Alliance RYT-500 immersion. The complete kriya, mantra and asana path.',
  },

  // ─────────────────────────────────────────────────────────────
  // 8. Yin Yoga TTC (Specialty)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'cyin',
    slug: 'yin-yoga-ttc',
    title: 'Yin Yoga Teacher Training, Rishikesh',
    category: 'Specialty',
    format: 'in-person',
    duration: '14 days',
    style: ['Yin Yoga', 'Meditation'],
    price: { usd: 799, inr: 66000, earlyBirdUsd: 599 },
    depositUsd: 200,
    startDates: ['Nov 10, 2026', 'Jan 15, 2027'],
    description:
      'A two-week training in the slow, contemplative practice of Yin Yoga — long-held floor postures that work the deep fascia and meridians, paired with stillness, breath, and Taoist philosophy.',
    longDescription: [
      'Yin Yoga is the still counterpart to the more active practices of Hatha, Vinyasa and Ashtanga. Postures are held for three to seven minutes, allowing the connective tissues — fascia, ligaments and joints — to slowly release.',
      'In this 14-day Rishikesh immersion you will learn the Yin tradition as taught by Paul Grilley and Sarah Powers, alongside its roots in Taoist meridian theory and Buddhist mindfulness.',
      'You will leave with a complete teaching toolkit: how to sequence a Yin class, how to offer mindful adjustments, and how to hold the silent space that Yin teaching requires.',
    ],
    curriculum: [
      'Yin Yoga theory & meridian system',
      'Long-hold postures for the lower body, spine & shoulders',
      'Mindfulness meditation in stillness',
      'Sequencing & teaching methodology',
      'Yin philosophy — Taoist & Buddhist roots',
    ],
    curriculumModules: [
      {
        title: 'Yin Theory & Meridians',
        topics: [
          'The five Yin elements and meridian system',
          'Working with fascia, ligaments and joints',
          'Variations of bodies and the Yin approach',
        ],
      },
      {
        title: 'Yin Postures',
        topics: [
          'Lower-body Yin (hips, sacrum, legs)',
          'Spinal Yin (twists, backbends, forward folds)',
          'Upper-body Yin (shoulders, heart-space)',
        ],
      },
      {
        title: 'Stillness & Mindfulness',
        topics: [
          'Mindfulness meditation in long-hold practice',
          'Breath observation and mental noting',
          'Working with discomfort, sensation and silence',
        ],
      },
      {
        title: 'Teaching & Sequencing',
        topics: [
          'Designing a 60–90 minute Yin class',
          'Sequencing for the meridians and the seasons',
          'Cueing, language and the silent teacher',
        ],
      },
    ],
    inclusions: shortInclusions.concat(['Yin Yoga Teacher Training certification']),
    teachers: ALL_TEACHERS,
    images: galleryFor('meditation', 'asana', 'sunset'),
    gallery: galleryFor('meditation', 'asana', 'sunset', 'candle', 'ganga'),
    seoTitle: 'Yin Yoga Teacher Training Course in Rishikesh India | Nirvana Yoga School',
    seoDescription:
      'Yin Yoga teacher training course in Rishikesh India. 14-day specialty training in long-hold postures, meridian theory and mindful stillness on the banks of the Ganga.',
  },

  // ─────────────────────────────────────────────────────────────
  // 9. Pre-Natal & Post-Natal Yoga TTC (Specialty)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'cprenatal',
    slug: 'prenatal-postnatal-ttc',
    title: 'Pre-Natal & Post-Natal Yoga Teacher Training, Rishikesh',
    category: 'Specialty',
    format: 'in-person',
    duration: '14 days',
    style: ['Hatha', 'Yoga Therapy', 'Meditation'],
    price: { usd: 899, inr: 74000, earlyBirdUsd: 674 },
    depositUsd: 200,
    startDates: ['Nov 15, 2026', 'Feb 15, 2027'],
    description:
      'A 14-day specialty training that prepares you to teach yoga safely and beautifully through every trimester of pregnancy and the first year postpartum.',
    longDescription: [
      'Pregnancy and the early postpartum window ask much of a body, a mind, and a heart. Yoga, taught skilfully, can be one of the kindest companions through this passage.',
      'In this 14-day Rishikesh immersion you will study trimester-by-trimester sequencing, contraindicated postures, breath practices for labour and recovery, and the emotional landscape of motherhood.',
      'You will leave equipped to teach group pre-natal classes, lead one-on-one sessions, and support new mothers in the often-overlooked fourth trimester.',
    ],
    curriculum: [
      'Anatomy & physiology of pregnancy',
      'Trimester-by-trimester sequencing',
      'Contraindicated postures & safe modifications',
      'Pranayama & meditation for labour',
      'Post-natal recovery & pelvic floor work',
      'Teaching methodology for pregnant students',
    ],
    curriculumModules: [
      {
        title: 'Pregnancy Anatomy',
        topics: [
          'The trimesters — what changes in body and mind',
          'Pelvic floor, diaphragm and the breath',
          'Common discomforts and how yoga can help',
        ],
      },
      {
        title: 'Pre-Natal Asana',
        topics: [
          'Safe asana for each trimester',
          'Contraindicated postures and modifications',
          'Use of props for support and ease',
        ],
      },
      {
        title: 'Pranayama & Meditation',
        topics: [
          'Breath practices for pregnancy and labour',
          'Yoga nidra and guided relaxation',
          'Mindfulness for the wandering mind of motherhood',
        ],
      },
      {
        title: 'Post-Natal Recovery',
        topics: [
          'Diastasis recti and core rebuilding',
          'Pelvic floor recovery',
          'Yoga with a baby — gentle return to practice',
        ],
      },
      {
        title: 'Teaching Methodology',
        topics: [
          'Sequencing for mixed-trimester classes',
          'One-on-one pre-natal sessions',
          'Holding space for the emotional journey',
        ],
      },
    ],
    inclusions: shortInclusions.concat(['Pre-Natal & Post-Natal Yoga Teacher Training certification']),
    teachers: ALL_TEACHERS,
    images: galleryFor('asana', 'meditation', 'group'),
    gallery: galleryFor('asana', 'meditation', 'group', 'sunset', 'ganga'),
    seoTitle: 'Pre Natal Post Natal Yoga Teacher Training Course in Rishikesh India | Nirvana Yoga School',
    seoDescription:
      'Pre-natal and post-natal yoga teacher training course in Rishikesh India. 14-day specialty training in trimester-safe sequencing, breathwork for labour and post-natal recovery.',
  },

  // ─────────────────────────────────────────────────────────────
  // 10. Sound Healing Course (Specialty)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'csound',
    slug: 'sound-healing-course',
    title: 'Sound Healing Course, Rishikesh',
    category: 'Specialty',
    format: 'in-person',
    duration: '10 days',
    style: ['Sound Healing', 'Meditation'],
    price: { usd: 699, inr: 58000, earlyBirdUsd: 524 },
    depositUsd: 200,
    startDates: ['Oct 20, 2026', 'Dec 10, 2026', 'Feb 20, 2027'],
    description:
      'A 10-day immersion in the healing power of sound — Tibetan & crystal singing bowls, gongs, tuning forks, mantra and the science of vibrational therapy.',
    longDescription: [
      'Sound is one of the oldest healing tools known to humankind. From the bija mantras of the Vedas to the singing bowls of the Himalayas, sound has been used for millennia to quiet the mind and open the heart.',
      'In this 10-day Rishikesh immersion you will learn to play and teach with Tibetan and crystal singing bowls, gongs, tuning forks and the human voice.',
      'You will study the principles of vibrational therapy, the chakras and sound, and how to design and lead a complete sound bath session.',
    ],
    curriculum: [
      'Foundations of sound healing',
      'Tibetan & crystal singing bowls',
      'Gongs, tuning forks and chimes',
      'Mantra & vocal sound healing',
      'Designing & leading a sound bath',
    ],
    curriculumModules: [
      {
        title: 'Sound Healing Foundations',
        topics: [
          'History and traditions of sound healing',
          'Vibration, frequency and the human body',
          'Chakras, nadis and sound',
        ],
      },
      {
        title: 'Singing Bowls',
        topics: [
          'Tibetan singing bowls — playing techniques',
          'Crystal singing bowls and the chakras',
          'Working with the body and the bowls',
        ],
      },
      {
        title: 'Gongs & Tuning Forks',
        topics: [
          'Gong technique and safety',
          'Tuning forks for the body and the field',
          'Chimes, bells and accent instruments',
        ],
      },
      {
        title: 'Voice & Mantra',
        topics: [
          'Bija mantras and the chakras',
          'Vocal toning and humming',
          'Leading group chant',
        ],
      },
      {
        title: 'Designing a Session',
        topics: [
          'Structuring a 60–90 minute sound bath',
          'Working one-on-one and with groups',
          'Holding space for emotional release',
        ],
      },
    ],
    inclusions: shortInclusions.concat(['Sound Healing Practitioner certification']),
    teachers: ALL_TEACHERS,
    images: galleryFor('candle', 'meditation', 'aarti'),
    gallery: galleryFor('candle', 'meditation', 'aarti', 'yogi', 'sunset'),
    seoTitle: 'Sound Healing Course in Rishikesh India | Nirvana Yoga School',
    seoDescription:
      'Sound healing course in Rishikesh India. 10-day immersion in Tibetan and crystal singing bowls, gongs, tuning forks, mantra and the design of full sound-bath sessions.',
  },

  // ─────────────────────────────────────────────────────────────
  // 11. Aerial Yoga TTC (Specialty)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'caerial',
    slug: 'aerial-yoga-ttc',
    title: 'Aerial Yoga Teacher Training, Rishikesh',
    category: 'Specialty',
    format: 'in-person',
    duration: '14 days',
    style: ['Hatha', 'Vinyasa'],
    price: { usd: 899, inr: 74000, earlyBirdUsd: 674 },
    depositUsd: 200,
    startDates: ['Nov 20, 2026', 'Feb 5, 2027'],
    description:
      'A 14-day Aerial Yoga teacher training — silk hammocks, inversion therapy, anti-gravity sequencing and a playful, creative path back to the breath.',
    longDescription: [
      'Aerial Yoga uses a soft silk hammock to support and challenge the body in equal measure. It allows for safe inversions, gentle decompression of the spine, and a quality of weightless ease that seated practice cannot offer.',
      'In this 14-day Rishikesh immersion you will study aerial-specific anatomy, hammock setup and safety, sequencing for beginners and advanced students, and the art of joyful, creative teaching.',
      'You will leave certified to teach aerial yoga in studios worldwide, with a full toolkit of postures, transitions and class plans.',
    ],
    curriculum: [
      'Aerial yoga foundations & safety',
      'Hammock setup and rigging basics',
      'Aerial-specific anatomy',
      'Inversions and decompression',
      'Sequencing for all levels',
      'Teaching methodology — aerial',
    ],
    curriculumModules: [
      {
        title: 'Foundations & Safety',
        topics: [
          'History and styles of aerial yoga',
          'Hammock setup, rigging and weight ratings',
          'Contraindications and safe practice',
        ],
      },
      {
        title: 'Aerial Asana',
        topics: [
          'Standing and seated aerial postures',
          'Aerial sun salutations',
          'Inversions and decompression',
        ],
      },
      {
        title: 'Anatomy & Adjustments',
        topics: [
          'Aerial-specific anatomy — shoulders, spine, pelvis',
          'Modifications for different bodies',
          'Hands-on adjustments in the hammock',
        ],
      },
      {
        title: 'Sequencing',
        topics: [
          'Beginner aerial flow',
          'Restorative aerial sequences',
          'Creative and playful aerial classes',
        ],
      },
      {
        title: 'Teaching Practicum',
        topics: [
          'Cueing and language in aerial',
          'Class management and student care',
          'Mentored teaching and final practicum',
        ],
      },
    ],
    inclusions: shortInclusions.concat(['Aerial Yoga Teacher Training certification', 'Aerial hammock for the duration of the course']),
    teachers: ALL_TEACHERS,
    images: galleryFor('flow', 'asana', 'group'),
    gallery: galleryFor('flow', 'asana', 'group', 'sunset', 'ganga'),
    seoTitle: 'Aerial Yoga Teacher Training Course in Rishikesh | Nirvana Yoga School',
    seoDescription:
      'Aerial yoga teacher training course in Rishikesh. 14-day specialty training in hammock-based asana, safe inversions and creative aerial sequencing. Reserve your seat.',
  },

  // ─────────────────────────────────────────────────────────────
  // 12. Short Meditation Course (Specialty)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'cmed',
    slug: 'meditation-course',
    title: 'Short Meditation Course, Rishikesh',
    category: 'Specialty',
    format: 'in-person',
    duration: '7 days',
    style: ['Meditation'],
    price: { usd: 399, inr: 33000, earlyBirdUsd: 299 },
    depositUsd: 100,
    startDates: ['Oct 25, 2026', 'Nov 25, 2026', 'Dec 25, 2026'],
    description:
      'A 7-day silent retreat-style introduction to traditional meditation — trataka, mantra japa, vipassana, and the quiet, steady gaze inward that is the heart of yoga.',
    longDescription: [
      'Yoga, in the end, is meditation. The asana and the breathwork are preparation; the steady, quiet gaze inward is the practice itself.',
      'This 7-day course in Rishikesh distils the meditation traditions of India — trataka, mantra japa, vipassana and self-inquiry — into a structured immersion suitable for both new and experienced practitioners.',
      'Days are spent in alternating cycles of sitting, walking, gentle Hatha, and noble silence. You will leave with a meditation practice you can sustain for the rest of your life.',
    ],
    curriculum: [
      'Foundations of meditation',
      'Trataka (candle gazing)',
      'Mantra japa with the mala',
      'Vipassana (insight meditation)',
      'Self-inquiry and silent sitting',
    ],
    curriculumModules: [
      {
        title: 'Foundations',
        topics: [
          'Posture, breath and the meditative seat',
          'Working with the wandering mind',
          'Setting up a daily home practice',
        ],
      },
      {
        title: 'Concentration Practices',
        topics: [
          'Trataka — candle and yantra gazing',
          'Mantra japa with mala beads',
          'Breath-focused dharana',
        ],
      },
      {
        title: 'Insight Practices',
        topics: [
          'Vipassana — body scan and noting',
          'Mindfulness in walking and eating',
          'Working with thought and emotion',
        ],
      },
      {
        title: 'Self-Inquiry',
        topics: [
          '"Who am I?" — the inquiry of Ramana Maharshi',
          'Silent sitting and resting in awareness',
          'Integration into daily life',
        ],
      },
    ],
    inclusions: shortInclusions.concat(['Meditation Course completion certificate', 'Mala beads for daily practice']),
    teachers: ['t1', 't2'],
    images: galleryFor('meditation', 'candle', 'sunset'),
    gallery: galleryFor('meditation', 'candle', 'sunset', 'aarti', 'ganga'),
    seoTitle: 'Short Meditation Course in Rishikesh India | Nirvana Yoga School',
    seoDescription:
      'Short meditation course in Rishikesh India. 7-day silent immersion in trataka, mantra, vipassana and self-inquiry. A foundation for a lifelong meditation practice.',
  },
];
