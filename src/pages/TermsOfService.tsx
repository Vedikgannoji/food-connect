
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function TermsOfService() {
  useEffect(() => {
    document.title = 'Terms of Service - Paws Project';
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
              
              <h2>1. Introduction</h2>
              <p>
                These terms and conditions outline the rules and regulations for the use of Paws Project's website.
                By accessing this website, we assume you accept these terms and conditions in full. Do not continue 
                to use Paws Project's website if you do not accept all of the terms and conditions stated on this page.
              </p>
              
              <h2>2. License</h2>
              <p>
                Unless otherwise stated, Paws Project and/or its licensors own the intellectual property rights for all 
                material on this website. All intellectual property rights are reserved. You may view and/or print pages 
                from the website for your own personal use subject to restrictions set in these terms and conditions.
              </p>
              
              <h3>You must not:</h3>
              <ul>
                <li>Republish material from this website</li>
                <li>Sell, rent or sub-license material from this website</li>
                <li>Reproduce, duplicate or copy material from this website</li>
                <li>Redistribute content from Paws Project (unless content is specifically made for redistribution)</li>
              </ul>
              
              <h2>3. User Content</h2>
              <p>
                In these terms and conditions, "User Content" means material (including without limitation text, images, 
                audio material, video material and audio-visual material) that you submit to this website, for whatever purpose.
              </p>
              <p>
                You grant to Paws Project a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, 
                adapt, publish, translate and distribute your User Content in any existing or future media. You also grant 
                to Paws Project the right to sub-license these rights, and the right to bring an action for infringement of these rights.
              </p>
              
              <h2>4. Limitation of Liability</h2>
              <p>
                In no event shall Paws Project, nor any of its officers, directors and employees, be held liable for 
                anything arising out of or in any way connected with your use of this website whether such liability 
                is under contract, tort or otherwise.
              </p>
              
              <h2>5. Indemnification</h2>
              <p>
                You hereby indemnify to the fullest extent Paws Project from and against any and all liabilities, costs, 
                demands, causes of action, damages and expenses arising in any way related to your breach of any of the 
                provisions of these terms.
              </p>
              
              <h2>6. Severability</h2>
              <p>
                If any provision of these terms is found to be invalid under any applicable law, such provisions shall be 
                deleted without affecting the remaining provisions herein.
              </p>
              
              <h2>7. Variation of Terms</h2>
              <p>
                Paws Project is permitted to revise these terms at any time as it sees fit, and by using this website you 
                are expected to review these terms on a regular basis.
              </p>
              
              <h2>8. Governing Law & Jurisdiction</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws applicable in India, 
                and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
              
              <h2>9. Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us through our contact form or by 
                emailing terms@pawsproject.org.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
