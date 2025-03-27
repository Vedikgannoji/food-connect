
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
    name: 'Paws & Claws Animal Shelter',
    address: '123 Rescue Lane, Anytown, CA 90210',
    phone: '(555) 123-4567',
    email: 'info@pawsclaws.org',
    type: 'shelter',
  },
  {
    id: '2',
    name: 'Pet Emergency Helpline',
    address: 'Available 24/7',
    phone: '(555) 911-PETS',
    email: 'emergency@pethelp.org',
    type: 'helpline',
  },
  {
    id: '3',
    name: 'Furry Friends Veterinary Clinic',
    address: '456 Healing Way, Anytown, CA 90210',
    phone: '(555) 789-0123',
    email: 'appointments@furryfriendvet.com',
    type: 'vet',
  },
  {
    id: '4',
    name: 'Wildlife Rescue Center',
    address: '789 Forest Road, Anytown, CA 90210',
    phone: '(555) 456-7890',
    email: 'help@wildliferescue.org',
    type: 'shelter',
  },
  {
    id: '5',
    name: 'Animal Cruelty Reporting Hotline',
    address: 'Confidential',
    phone: '(555) 222-SAFE',
    email: 'report@animalprotection.org',
    type: 'helpline',
  },
];

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'What should I do if I find a stray animal?',
    answer: 'First, ensure your safety and the animal\'s. Approach cautiously, as the animal may be scared. If possible, contain the animal in a safe area, provide water, and contact local animal control or a rescue organization. Take photos and share on local lost pet groups.'
  },
  {
    id: '2',
    question: 'How can I report animal cruelty?',
    answer: 'Document what you\'ve witnessed with photos or videos if safe to do so. Contact your local animal control, humane society, or police department immediately. You can usually report anonymously. You can also use our Report form on this website.'
  },
  {
    id: '3',
    question: 'What are signs an animal might need help?',
    answer: 'Look for visible injuries, limping, extreme thinness, difficulty breathing, visible parasites, unusual lethargy, or being left in extreme weather conditions. Animals in distress may also show unusual aggression or fearfulness.'
  },
  {
    id: '4',
    question: 'How can I volunteer to help animals?',
    answer: 'You can volunteer at local shelters, foster animals temporarily, transport animals to vet appointments, help with adoption events, or offer professional skills like photography or web design. Fill out our Volunteer form to get started!'
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
