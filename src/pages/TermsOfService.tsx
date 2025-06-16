
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function TermsOfService() {
  useEffect(() => {
    document.title = 'Terms of Service - Food Connect';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
            
            <div className="prose prose-sm sm:prose lg:prose-lg dark:prose-invert max-w-none">
              <p className="lead">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              
              <p>
                Welcome to Food Connect. These Terms of Service ("Terms") govern your use of our platform, which connects food donors with non-governmental organizations (NGOs) to facilitate the donation and redistribution of surplus food.
              </p>
              
              <p>
                By using this website, you agree to be bound by these Terms. If you do not agree, you may not access or use the platform.
              </p>
              
              <h2>1. Purpose</h2>
              <p>
                Food Connect is a non-commercial platform designed to reduce food waste by connecting individuals and businesses with surplus food to NGOs that can redistribute it to people and animals in need. This initiative is primarily for social good and educational demonstration.
              </p>
              
              <h2>2. User Roles</h2>
              <p>Food Connect supports two types of users:</p>
              <p><strong>Donors:</strong> Individuals, households, or businesses that wish to donate surplus food.</p>
              <p><strong>NGOs:</strong> Verified organizations that receive food donations and manage pickups.</p>
              <p>Users must register with accurate details and agree to use the platform ethically and responsibly.</p>
              
              <h2>3. User Responsibilities</h2>
              <p>By using this platform, users agree to:</p>
              <ul>
                <li>Share only food that is safe and hygienic for human or animal consumption.</li>
                <li>Provide accurate and timely information regarding donations.</li>
                <li>Respond responsibly to donation claims and pickups.</li>
                <li>Avoid misrepresentation, misuse, or spam.</li>
              </ul>
              <p>Food Connect reserves the right to suspend accounts for any misuse or unethical activity.</p>
              
              <h2>4. Food Safety</h2>
              <p>
                Food Connect does not verify the quality or condition of food being donated. It is the sole responsibility of the donor to ensure that:
              </p>
              <ul>
                <li>The food is properly handled, stored, and fit for consumption.</li>
                <li>The posted details (type, quantity, expiry, etc.) are accurate.</li>
              </ul>
              <p>NGOs are responsible for inspecting food before accepting it. Food Connect is not liable for any food safety-related incidents.</p>
              
              <h2>5. Claims and Cancellations</h2>
              <ul>
                <li>Donors may edit or delete unclaimed posts at any time.</li>
                <li>NGOs should claim donations only if they are able to collect them within the specified time.</li>
                <li>Repeated cancellations or unfulfilled pickups may result in review or restriction of access.</li>
              </ul>
              
              <h2>6. Prohibited Use</h2>
              <p>Users may not:</p>
              <ul>
                <li>Share expired, spoiled, or unsafe food</li>
                <li>Upload misleading or fraudulent information</li>
                <li>Engage in discriminatory or abusive behavior</li>
                <li>Use the platform for any illegal or unauthorized purpose</li>
              </ul>
              <p>Violation of these terms may result in account termination and, where applicable, legal action.</p>
              
              <h2>7. Privacy and Data</h2>
              <p>
                We respect your privacy. Any personal information provided (such as name, contact details, and location) will be used solely for communication and platform functionality. We do not sell or share your data with third-party services.
              </p>
              
              <h2>8. Limitation of Liability</h2>
              <p>
                Food Connect is a prototype platform built for educational and social good purposes. While we aim to provide a reliable service, we do not guarantee the accuracy, availability, or reliability of the platform at all times.
              </p>
              <p>We are not responsible for:</p>
              <ul>
                <li>The safety or quality of donated food</li>
                <li>Delays, cancellations, or disputes between users</li>
                <li>Any direct or indirect damages resulting from use of the platform</li>
              </ul>
              
              <h2>9. Modifications</h2>
              <p>
                We reserve the right to update or modify these Terms at any time. Changes will be posted on this page. Continued use of the platform constitutes your acceptance of the revised Terms.
              </p>
              
              <h2>10. Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at foodconnet@gmail.com.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
