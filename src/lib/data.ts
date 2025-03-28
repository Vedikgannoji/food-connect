
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
    title: 'Max: From Abandoned to Adored',
    content: 'Max was found tied to a fence in the pouring rain. After receiving medical care and rehabilitation at our shelter, he found a loving forever home with the Johnsons family, where he now enjoys long walks and plenty of treats.',
    author: 'Sarah Chen',
    date: '2023-07-15',
    imageUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1',
  },
  {
    id: '2',
    title: 'Luna\'s Second Chance',
    content: 'Luna was rescued from a hoarding situation with 30+ other cats. Severely malnourished and scared, she slowly learned to trust humans again through patient care and socialization. Today, she\'s a playful, confident companion to her new family.',
    author: 'Michael Brown',
    date: '2023-09-22',
    imageUrl: 'https://images.unsplash.com/photo-1548802673-380ab8ebc7b7',
  },
  {
    id: '3',
    title: 'Hope: The Resilient Rescue',
    content: 'Hope was found with severe injuries after being hit by a car. Thanks to emergency veterinary care funded by generous donors, she made a remarkable recovery. Now she helps her owner, a therapy worker, bring joy to hospital patients.',
    author: 'Jessica Martinez',
    date: '2023-11-05',
    imageUrl: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca',
  },
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
