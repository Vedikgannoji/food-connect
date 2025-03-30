import { SafetyTip, RescueStory, ContactInfo, FAQ } from './types';

export const safetyTips: SafetyTip[] = [
  {
    id: '1',
    title: 'Pet Care Basics',
    description: 'Provide fresh water, nutritious food, regular exercise, and annual veterinary check-ups for your pets. Keep vaccinations up to date and ensure they have proper identification.',
    icon: '🏠',
  },
  {
    id: '2',
    title: 'Helping Stray Animals',
    description: 'Approach strays cautiously, offer food and water from a safe distance, and contact local animal control or rescue organizations. Never try to handle aggressive or fearful animals.',
    icon: '🐾',
  },
  {
    id: '3',
    title: 'Emergency Response',
    description: 'If you find an injured animal, minimize movement, cover them with a blanket to reduce stress, and contact emergency vet services immediately. Keep your distance from wildlife.',
    icon: '🚑',
  },
  {
    id: '4',
    title: 'Animal Laws & Rights',
    description: 'Familiarize yourself with local animal protection laws. Animals have the right to proper shelter, food, water, and freedom from abuse. Report violations to authorities promptly.',
    icon: '⚖️',
  },
  {
    id: '5',
    title: 'Safe Transportation',
    description: 'Always use appropriate carriers or restraints when transporting pets. Never leave animals in hot cars, even with windows cracked, as temperatures can rise quickly.',
    icon: '🚗',
  },
  {
    id: '6',
    title: 'Wildlife Encounters',
    description: 'Keep a safe distance from wild animals, even if they appear friendly or injured. Contact wildlife rehabilitation specialists instead of attempting to help yourself.',
    icon: '🦊',
  },
];

export const rescueStories: RescueStory[] = [
  {
    id: '1',
    title: 'Rocky: From Streets to Forever Home',
    content: 'Rocky was found injured on the side of a busy road in Mumbai after being hit by a car. His back leg was badly hurt, and he was severely malnourished. Our rescue team rushed him to our medical facility where he underwent emergency surgery. After weeks of recovery and physical therapy, Rocky\'s spirit never dimmed. Despite losing his leg, he learned to walk and run again with incredible determination. Six weeks after his rescue, he was adopted by the Sharma family who fell in love with his resilience. Today, Rocky enjoys long walks in Juhu Beach and has become an ambassador for our three-legged survivors program.',
    author: 'Priya Sharma',
    date: '2023-08-15',
    imageUrl: 'https://images.unsplash.com/photo-1602483911953-1df93955fe45?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Sita: The Temple Elephant\'s New Life',
    content: 'For 30 years, Sita served as a temple elephant in Tamil Nadu, suffering from chronic foot infections and malnutrition. When we found her, she was chained to a concrete floor, unable to move freely and displaying clear signs of psychological distress. After months of legal battles, we secured her release to our sanctuary outside Chennai. Sita\'s rehabilitation was slow but remarkable - her wounds healed, she gained healthy weight, and gradually began forming bonds with other rescued elephants. Today, two years after her rescue, Sita enjoys mud baths and forages freely with her new herd. Her case helped strengthen enforcement of the Wildlife Protection Act in the region.',
    author: 'Dr. Vikram Patel',
    date: '2023-05-22',
    imageUrl: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Chai & Biscuit: Rescued From a Puppy Mill',
    content: 'Chai and Biscuit were two of 43 dogs rescued from an illegal breeding operation in Delhi. The Labrador siblings were kept in a tiny cage, used repeatedly for breeding with no medical care. Both were severely underweight with numerous health issues including skin infections and dental disease. After their rescue, they received comprehensive medical treatment at our facility. Though initially fearful of humans, with patient rehabilitation they began to trust again. The special bond between the siblings was clear - they comforted each other through recovery. After three months, they were adopted together by the Kapoor family who were committed to keeping them together. Their story led to increased awareness about unethical breeding practices.',
    author: 'Neha Kapoor',
    date: '2023-12-05',
    imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '4',
    title: 'Kaalu: The Market Cat\'s Second Chance',
    content: 'Kaalu was a fixture at Crawford Market in Mumbai for years, surviving on scraps and dodging vehicles. When our team found him, he was suffering from a severe eye infection that had been left untreated for months. Local vendors had noticed his deteriorating condition but didn\'t know how to help. Our street cat program provided immediate medical intervention, saving his remaining eye but unable to save the infected one. Despite his rough start in life, Kaalu adapted quickly to his disability. Rather than returning him to the dangerous market environment, he was adopted by Seema, one of our volunteers. Today, he\'s a happy indoor cat who enjoys lounging in sunny windows and playing with his toy mice.',
    author: 'Seema Joshi',
    date: '2024-01-30',
    imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '5',
    title: 'Moti & Raja: The Abandoned Bullocks',
    content: 'Moti and Raja were work bullocks abandoned when they became too old to plow fields. When our team found them in a rural area outside Pune, they were severely dehydrated and malnourished, tied to a tree without adequate food or water. After their rescue, both required intensive veterinary care to treat their infections and malnutrition. Through our Farm Animal Rehabilitation Program, they were given sanctuary at our Pune facility where they now live peacefully, enjoying fresh grass and shady rest areas. Their story highlights the plight of working animals discarded when no longer deemed useful. We\'ve since established an education program in the region to promote compassionate retirement for work animals.',
    author: 'Rajesh Patil',
    date: '2024-02-18',
    imageUrl: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a',
  },
  {
    id: '6',
    title: 'Sundari: Rescued From Wildlife Trafficking',
    content: 'Sundari, a Bengal Tiger cub, was confiscated from wildlife traffickers at the Nepal-India border. At just three months old, she had been separated from her mother to be sold into the illegal exotic pet trade. When our wildlife team received her, she was severely dehydrated and frightened. Under expert care at our wildlife rehabilitation center in Northern India, Sundari flourished. Though she couldn\'t be released back to the wild due to her young age at rescue, she now lives in a spacious, enriched habitat at our sanctuary. Her case led to the arrest of three wildlife traffickers and the dismantling of a significant trafficking network. Sundari serves as an ambassador for tiger conservation education programs.',
    author: 'Dr. Arjun Singh',
    date: '2023-06-04',
    imageUrl: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '7',
    title: 'Laxmi: The Street Cow\'s Journey to Freedom',
    content: 'Laxmi was a "plastic cow" - one of many urban street cows in Jaipur consuming dangerous amounts of plastic waste while scavenging. When our team found her, she was severely bloated and in pain from an intestinal blockage. Emergency surgery removed over 35 kg of plastic from her stomach - one of the worst cases we\'d seen. Her recovery was long, requiring multiple follow-up treatments and a special diet. Today, Laxmi lives at our gaushala outside the city where she receives proper nutrition and care. Her story sparked our "Plastic-Free Streets" campaign in Jaipur, which has educated thousands about the dangers urban waste poses to street animals and implemented regular waste collection in key areas.',
    author: 'Dr. Meera Sharma',
    date: '2023-07-12',
    imageUrl: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '8',
    title: 'Bahadur: The Fighting Rooster\'s Transformation',
    content: 'Bahadur was rescued during a raid on an illegal cockfighting ring in rural Andhra Pradesh. He had suffered severe injuries from fighting and had been subjected to cruel training methods. His aggressive behavior made rehabilitation challenging, but our specialized avian team worked patiently to help him overcome his trauma. Over several months, Bahadur learned to trust humans again and coexist peacefully with other birds. He now lives at our farm animal sanctuary where he leads a natural life free from exploitation. His case contributed to increased awareness and enforcement against cockfighting in the region, resulting in several additional raids and rescues.',
    author: 'Venkat Rao',
    date: '2023-10-08',
    imageUrl: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '9',
    title: 'Champa: The Dancing Bear Who Found Peace',
    content: 'Champa was one of the last "dancing bears" in India, rescued in collaboration with Wildlife SOS. When we found her near the Nepal border, she had a painful rope through her nose and severely worn teeth from years of malnutrition and stress. Her rescue marked the end of an era - completing the 18-year mission to end the dancing bear tradition in India. At our sanctuary, Champa received specialized veterinary care and began her journey to bear-hood, learning to forage, climb, and hibernate naturally. Though she bears physical and psychological scars, her transformation has been remarkable. Her former kalandar (bear handler) was provided alternative livelihood training through our rehabilitation program, breaking the cycle of exploitation for future generations.',
    author: 'Kartik Satyanarayan',
    date: '2024-03-05',
    imageUrl: 'https://images.unsplash.com/photo-1568162603664-fcd658421851?q=80&w=1000&auto=format&fit=crop',
  }
];

export const contactInfoList: ContactInfo[] = [
  {
    id: '1',
    name: 'Blue Cross of Hyderabad',
    address: 'Plot No. 71, Road No. 10, Jubilee Hills, Hyderabad, Telangana 500033',
    phone: '040 2354 4360',
    email: 'info@bluecrosshyd.org',
    type: 'shelter',
  },
  {
    id: '2',
    name: 'People For Animals Hyderabad',
    address: 'Dattagiri Complex, Lothkunta Rd, Secunderabad, Telangana 500015',
    phone: '040 2780 6027',
    email: 'contact@pfahyderabad.org',
    type: 'helpline',
  },
  {
    id: '3',
    name: 'PVNR Veterinary Hospital',
    address: 'Street No. 8, Banjara Hills, Hyderabad, Telangana 500034',
    phone: '040 2339 5066',
    email: 'appointments@pvnrvet.com',
    type: 'vet',
  },
  {
    id: '4',
    name: 'Care Animal Rescue Foundation',
    address: 'Plot 94, Phase 3, KPHB Colony, Kukatpally, Hyderabad, Telangana 500072',
    phone: '9848053568',
    email: 'help@carefoundation.org',
    type: 'shelter',
  },
  {
    id: '5',
    name: 'Animal Cruelty Helpline Hyderabad',
    address: 'Confidential',
    phone: '040 2323 1234',
    email: 'report@animalwelfarehyd.org',
    type: 'helpline',
  },
  {
    id: '6',
    name: 'Pawsome Sanctuary',
    address: 'Plot 15, Road 12, Gachibowli, Hyderabad, Telangana 500032',
    phone: '9876543210',
    email: 'contact@pawsomesanctuary.org',
    type: 'shelter',
  },
];

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'What should I do if I find a stray animal in Hyderabad?',
    answer: 'First, ensure your safety and the animal\'s. Approach cautiously, as the animal may be scared. If possible, contain the animal in a safe area, provide water, and contact Blue Cross of Hyderabad or People For Animals Hyderabad. Take photos and share on local lost pet groups.'
  },
  {
    id: '2',
    question: 'How can I report animal cruelty in Hyderabad?',
    answer: 'Document what you\'ve witnessed with photos or videos if safe to do so. Contact the Animal Cruelty Helpline Hyderabad, GHMC Animal Care Centre, or local police station immediately. You can usually report anonymously. You can also use our Report form on this website.'
  },
  {
    id: '3',
    question: 'What are signs an animal might need help?',
    answer: 'Look for visible injuries, limping, extreme thinness, difficulty breathing, visible parasites, unusual lethargy, or being left in extreme weather conditions. Animals in distress may also show unusual aggression or fearfulness.'
  },
  {
    id: '4',
    question: 'How can I volunteer to help animals in Hyderabad?',
    answer: 'You can volunteer at Blue Cross of Hyderabad, Care Animal Rescue Foundation, or People For Animals. You can foster animals temporarily, transport animals to vet appointments, help with adoption events, or offer professional skills like photography or web design. Fill out our Volunteer form to get started!'
  },
  {
    id: '5',
    question: 'What should I include in an emergency kit for my pet?',
    answer: 'Your pet emergency kit should include: food and water for 5+ days, medications, medical records, first aid supplies, collar with ID, leash, carrier, comfort items (toy/blanket), waste supplies, and a current photo of your pet.'
  },
  {
    id: '6',
    question: 'How can I make my home safe for pets?',
    answer: 'Secure toxic substances (cleaners, medications, certain plants), remove choking hazards, cover electrical cords, ensure screens on windows, secure trash cans, and provide appropriate temperatures. Consider pet-proofing like baby-proofing.'
  }
];

export const incidentTypes = [
  'Neglect',
  'Physical abuse',
  'Abandonment',
  'Animal hoarding',
  'Organized animal fighting',
  'Wildlife crime',
  'Other (please specify)'
];

export const volunteerInterests = [
  'Animal care and handling',
  'Administrative support',
  'Event coordination',
  'Fundraising',
  'Transport assistance',
  'Foster care provider',
  'Education and outreach',
  'Veterinary services',
  'Social media management',
  'Other (please specify)'
];
