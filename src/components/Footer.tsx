
const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">PROREZULTAT</h3>
            <p className="text-background/80">
              Your trusted partner in talent acquisition and HR excellence.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-background/80">
              <li>Recruitment</li>
              <li>Staff Assessment & Audit</li>
              <li>HR Process Support</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-background/80">
              <p>Email: info@prorezultat.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>&copy; 2024 PROREZULTAT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
