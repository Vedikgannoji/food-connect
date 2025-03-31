
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy - Paws Project';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            
            <div className="prose prose-sm sm:prose lg:prose-lg dark:prose-invert max-w-none">
              <p className="lead">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              
              <h2>1. Introduction</h2>
              <p>
                Welcome to Paws Project. We respect your privacy and are committed to protecting your personal data. 
                This privacy policy will inform you how we look after your personal data when you visit our website 
                and tell you about your privacy rights and how the law protects you.
              </p>
              
              <h2>2. The Data We Collect About You</h2>
              <p>
                Personal data means any information about an individual from which that person can be identified. 
                We may collect, use, store and transfer different kinds of personal data about you which we have 
                grouped together as follows:
              </p>
              <ul>
                <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
                <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, 
                time zone setting and location, browser plug-in types and versions, operating system and platform, 
                and other technology on the devices you use to access this website.</li>
                <li><strong>Usage Data</strong> includes information about how you use our website and services.</li>
              </ul>
              
              <h2>3. How We Use Your Personal Data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your 
                personal data in the following circumstances:
              </p>
              <ul>
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests 
                and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>
              
              <h2>4. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being 
                accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, 
                we limit access to your personal data to those employees, agents, contractors and other third 
                parties who have a business need to know.
              </p>
              
              <h2>5. Data Retention</h2>
              <p>
                We will only retain your personal data for as long as reasonably necessary to fulfill the purposes 
                we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting 
                or reporting requirements.
              </p>
              
              <h2>6. Your Legal Rights</h2>
              <p>
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, 
                including the right to request access, correction, erasure, restriction, transfer, to object to processing, 
                to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
              </p>
              
              <h2>7. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us through 
                our contact form or by emailing privacy@pawsproject.org.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
