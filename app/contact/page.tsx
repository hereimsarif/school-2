import ContactForm from '../(components)/ContactForm';
import GoogleMapsEmbed from '../(components)/GoogleMapsEmbed';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <section className="container max-w-3xl mx-auto px-4 py-12 space-y-10">
      <h1 className="text-4xl font-display font-bold text-primary mb-4">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-primary mb-2">Get In Touch</h2>
          <ContactForm />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-primary mb-2">Map & Info</h2>
          <GoogleMapsEmbed />
          <div className="mt-5 text-base space-y-1">
            <div>123 Learning St., EduCity 400001</div>
            <div>+1 234 567 8901</div>
            <div>admissions@yourschool.edu</div>
            <div className="flex gap-4 mt-2">
              <a href="https://facebook.com" aria-label="Facebook" rel="noopener noreferrer" target="_blank"><FaFacebook className="text-primary text-xl" /></a>
              <a href="https://twitter.com" aria-label="Twitter" rel="noopener noreferrer" target="_blank"><FaTwitter className="text-primary text-xl" /></a>
              <a href="https://instagram.com" aria-label="Instagram" rel="noopener noreferrer" target="_blank"><FaInstagram className="text-primary text-xl" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
