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
    title: 'Rani: The Street Dog Princess',
    content: 'Rani was found severely injured after being hit by a car in the busy streets of Hyderabad. Local residents called our emergency team, who provided immediate medical attention. After months of rehabilitation, Rani made a full recovery and was adopted by a loving family in Jubilee Hills. She now enjoys morning walks at KBR Park and has become the neighborhood\'s beloved mascot.',
    author: 'Dr. Priya Sharma',
    date: '2023-08-15',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Lakshmi: The Elephant\'s Journey Home',
    content: 'Lakshmi was a temple elephant who suffered from years of mistreatment and neglect. Our team, along with Wildlife SOS, worked tirelessly to legally rescue her and provide urgent medical care for her wounded feet and malnourished body. Today, Lakshmi roams freely at our sanctuary outside Hyderabad, enjoying natural elephant behaviors like mud baths and foraging. Her story has inspired stronger enforcement of wildlife protection laws across Telangana.',
    author: 'Vikram Aditya',
    date: '2023-10-22',
    imageUrl: 'https://images.unsplash.com/photo-1527118732049-c88155f2107c?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Krishna: The Sacred Cow\'s Rescue',
    content: 'Krishna was abandoned after becoming unproductive, despite cows\' sacred status in India. Found wandering highways near Gachibowli with life-threatening injuries, our team rescued him just in time. After treatment and care at our gaushala, Krishna recovered fully, becoming an ambassador for abandoned cattle. He now lives peacefully at our sanctuary, where visitors learn about ethical treatment of all animals, sacred or otherwise.',
    author: 'Arjun Reddy',
    date: '2023-12-05',
    imageUrl: 'https://images.unsplash.com/photo-1599843533756-8d3aed4ebb31?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '4',
    title: 'Bagheera: From Circus to Sanctuary',
    content: 'Bagheera, a black leopard, spent seven years performing in an illegal traveling circus across India. After a coordinated raid with forest officials in Telangana, we rescued him and several other wild animals from cramped cages and inhumane conditions. At our wildlife rehabilitation center, Bagheera has slowly recovered from physical and psychological trauma. While he cannot be released into the wild, he now has a spacious naturalistic enclosure where he can climb, rest, and be a leopard without the fear of punishment.',
    author: 'Nisha Kumar',
    date: '2024-01-30',
    imageUrl: 'https://images.unsplash.com/photo-1553425300-8c56e9d7d9e3?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '5',
    title: 'Radha and Mohan: Bonded Through Trauma',
    content: 'When monsoon floods devastated rural areas outside Hyderabad, our rescue team found two goat kids, Radha and Mohan, stranded on a roof. After bringing them to safety, we discovered they had formed an inseparable bond through their shared trauma. We couldn\'t bear to separate them, so we found them a forever home together at a sanctuary where they continue to support each other. Their story demonstrates that animals, like humans, form deep emotional connections that deserve our respect.',
    author: 'Sunita Devi',
    date: '2024-02-18',
    imageUrl: 'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '6',
    title: 'Raju: The Working Elephant\'s Freedom',
    content: 'For 50 years, Raju carried tourists and pulled heavy loads, living in chains that cut into his legs. When we found him in a remote area near Hyderabad, he was severely malnourished and had infected wounds. After a complex legal battle with his owner, we were finally able to free Raju. The moment his chains were removed, witnesses reported seeing tears in his eyes. Today, Raju lives at our elephant sanctuary where he enjoys freedom, proper medical care, and the company of other rescued elephants.',
    author: 'Mahesh Babu',
    date: '2023-07-04',
    imageUrl: 'https://images.unsplash.com/photo-1603483080228-04f2313d9f10?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '7',
    title: 'Maya: The Dancing Bear\'s New Life',
    content: 'Maya was forced to "dance" on the streets of India from a young age, with a painful rope threaded through her sensitive nose. Our team located her in a remote village outside Hyderabad and worked with authorities to confiscate her from her handlers. After years of rehabilitation, Maya has learned to forage, play, and interact with other bears. Today, she lives at the Bannerghatta Bear Rescue Centre where she can finally express natural bear behaviors without fear of punishment.',
    author: 'Kiran Desai',
    date: '2023-05-12',
    imageUrl: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '8',
    title: 'Sundari: The Tiger\'s Recovery',
    content: 'Sundari was confiscated from an illegal wildlife trader in Hyderabad who was selling tiger parts on the black market. When we found her, she was severely malnourished and showing signs of abuse. After extensive veterinary care and rehabilitation at our wildlife center, Sundari regained her strength and natural behaviors. While she cannot be released back to the wild, she now lives in a spacious, naturalistic enclosure at our sanctuary where she serves as an ambassador for tiger conservation in India.',
    author: 'Dr. Rajiv Singh',
    date: '2023-09-18',
    imageUrl: 'https://images.unsplash.com/photo-1549480017-d76466a4b7e8?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '9',
    title: 'Chotu: The Monkey Who Found Freedom',
    content: 'Chotu was kept as a "pet" in a tiny cage in an apartment in Hyderabad. When neighbors reported the situation, our team worked with forest officials to confiscate him. After a period of rehabilitation where he learned how to socialize with other monkeys and develop natural foraging skills, Chotu was successfully integrated into a troop of his own species. Today, he lives free in a protected forest area, a true conservation success story that shows the importance of keeping wildlife in the wild.',
    author: 'Ananya Gupta',
    date: '2024-03-05',
    imageUrl: 'https://images.unsplash.com/photo-1548816265-bbe8b4b27726?q=80&w=1000&auto=format&fit=crop',
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
