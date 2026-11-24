// Edit this file to change service content. Components read from here.
export const siteConfig = {
  brandName: 'BizAssist',
  whatsappNumber: '919999999999', // country code + number, no + or spaces
  email: 'hello@bizassist.in',
};

export const services = [
  {
    id: 'chatbot',
    icon: '🤖',
    tag: 'AI Automation',
    title: 'AI Chatbot Setup',
    tagline: '24x7 customer support on WhatsApp and your website.',
    description:
      'We build and deploy an AI chatbot trained on your business. It answers FAQs, takes orders, and books appointments, even when you are closed.',
    features: [
      'WhatsApp and website integration',
      'FAQ and product knowledge training',
      'Order and booking capture',
      'Human handoff when needed',
      'Monthly performance report',
    ],
    price: '₹14,999',
    priceNote: 'one-time setup + ₹1,999/month',
    forWho: 'Local shops, clinics, coaching institutes',
  },
  {
    id: 'crm',
    icon: '📊',
    tag: 'Sales Systems',
    title: 'Done-for-you CRM',
    tagline: 'Track every lead, deal and customer without the spreadsheet chaos.',
    description:
      'We set up Zoho, HubSpot or a custom CRM for your team, migrate your existing data, and train your staff so sales actually gets tracked.',
    features: [
      'Zoho / HubSpot / custom CRM setup',
      'Data migration from Excel and WhatsApp',
      'Pipeline and follow-up automation',
      'Team training sessions',
      '30-day post-launch support',
    ],
    price: '₹24,999',
    priceNote: 'starting price, custom quote on request',
    forWho: 'SMEs that cannot track their sales',
  },
];

export const processSteps = [
  { title: 'Discovery call', text: 'We understand your business, tools and goals in a 20-minute call.' },
  { title: 'Setup & migration', text: 'We configure the bot or CRM and move your existing data across.' },
  { title: 'Training & launch', text: 'Your team learns the system and we go live together.' },
  { title: 'Ongoing support', text: 'We monitor, optimise and stay available for changes.' },
];
