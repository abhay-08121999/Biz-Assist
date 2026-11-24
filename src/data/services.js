// Edit this file to change content. Components read from here.
// NOTE: prices, reviews and stats below are SAMPLE content - replace with your real ones.
export const siteConfig = {
  brandName: 'BizAssist',
  whatsappNumber: '919999999999', // country code + number, no + or spaces
  email: 'hello@bizassist.in',
};
export const wa = (t) => `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(t)}`;

export const services = [
  { id: 'whatsapp', icon: '💬', title: 'WhatsApp Business Bot', span: 2, featured: true, img: '/images/bot-hi.png',
    text: 'Replies to customers, shares your catalogue and takes orders on WhatsApp, day and night.',
    features: ['Trained on your prices, timings and FAQs', 'Hindi, English and Hinglish', 'Human handoff with chat summary', 'Monthly performance report'],
    price: '₹14,999', note: 'one-time setup + ₹1,999/month' },
  { id: 'website', icon: '🌐', title: 'Website Chat Assistant', text: 'Greets visitors, answers questions and captures their contact details.', price: '₹9,999' },
  { id: 'booking', icon: '📅', title: 'Appointment Booking Bot', text: 'Books, reschedules and reminds. Ideal for clinics, salons and studios.', price: '₹12,999' },
  { id: 'leads', icon: '🎯', title: 'Lead Qualification Bot', text: 'Asks budget, need and timeline, then alerts you only for serious buyers.', price: '₹11,999' },
  { id: 'faq', icon: '🛟', title: 'FAQ & Support Bot', text: 'Answers policy, fee and delivery questions from your own documents.', price: '₹8,999' },
  { id: 'orders', icon: '🛒', title: 'Order & Payment Bot', span: 2, text: 'Shows your menu or catalogue, builds the cart and sends a UPI payment link.', price: '₹17,999' },
];
export const industries = ['Clinics', 'Salons & spas', 'Coaching institutes', 'Cloud kitchens', 'Real estate', 'Gyms & studios', 'Retail shops', 'Travel agencies', 'Schools', 'Service centres'];
export const chat = { name: 'Sharma Dental Clinic', messages: [
  { from: 'user', text: 'Hi, kal shaam ko appointment mil sakta hai?' },
  { from: 'bot', text: 'Namaste! Kal 5:30 pm aur 6:15 pm available hain. Kaunsa slot chahiye?' },
  { from: 'user', text: '5:30 please' },
  { from: 'bot', text: 'Booked ✅ Kal, 5:30 pm. Main 2 ghante pehle reminder bhej dunga.' },
] };
export const points = [
  ['Learns your business', 'We feed it your price list, timings, policies and the way you talk to customers.'],
  ['Speaks your customers’ language', 'Hindi, English, Hinglish and regional languages on request.'],
  ['Hands over to you', 'When a chat needs a person, you get a WhatsApp alert with a short summary.'],
  ['Shows what it does', 'A monthly report of chats, bookings, leads and questions it could not answer.'],
];
export const stats = [
  { to: 24, suffix: 'x7', label: 'Always on, including Sundays and festivals' },
  { to: 7, suffix: ' days', label: 'Average time from first call to live bot' },
  { to: 2, prefix: '< ', suffix: ' sec', label: 'Typical reply time' },
  { to: 10, suffix: '+', label: 'Languages supported' },
];
export const processSteps = [
  { title: 'Discovery call', text: 'A 20-minute call about your business, common questions and where customers message you.' },
  { title: 'Training and build', text: 'We load your prices, timings and FAQs and connect WhatsApp or your website.' },
  { title: 'Test and launch', text: 'You try it, we fix the answers, then go live together.' },
  { title: 'Monitor and improve', text: 'Monthly report, new answers and changes whenever you ask.' },
];
export const reviews = [
  { name: 'Dr. Neha Kapoor', role: 'Dental clinic, Jaipur', text: 'Our front desk used to miss calls after 7 pm. Now the bot books slots and sends reminders. Staff finally get a proper lunch break.' },
  { name: 'Rohit Agarwal', role: 'Coaching institute, Kota', text: 'Parents ask the same ten questions daily: fees, batches, demo class. The bot answers in Hindi and English, and we only talk to serious leads.' },
  { name: 'Priya Menon', role: 'Cloud kitchen, Pune', text: 'WhatsApp orders were a mess of voice notes. Now the bot takes the order, sends the UPI link and I get a clean list.' },
  { name: 'Sandeep Chauhan', role: 'Real estate, Ahmedabad', text: 'It asks budget and location first, so I only call people who are actually looking. Weekend enquiries no longer go cold.' },
];
export const faqs = [
  ['How long does setup take?', 'Most bots go live within 7 days of the discovery call. A simple FAQ bot can be faster.'],
  ['Where can the chatbot run?', 'On WhatsApp Business, your website and, on request, Instagram DMs.'],
  ['Does it understand Hindi and Hinglish?', 'Yes. It replies in the language the customer uses, and we test it on real messages from your business.'],
  ['What if the bot cannot answer?', 'It tells the customer a team member will reply and alerts you with a summary of the chat.'],
  ['What does it cost?', 'One-time setup from ₹8,999 depending on the bot, plus ₹1,999/month for hosting, support and reports. WhatsApp’s own message charges, if any, are extra.'],
  ['Can I change the answers later?', 'Yes. Message us the change and we update it, usually within 1 to 2 working days.'],
  ['Will it replace my staff?', 'No. It handles repeat questions so your team can focus on customers who need a person.'],
];