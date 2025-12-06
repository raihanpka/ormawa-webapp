import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import logoDitmawa from "../assets/logo-ditmawa.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="w-32 rounded-lg bg-white flex items-center justify-center p-2">
                <img src={logoDitmawa} alt="Logo Ditmawa" className="w-full h-auto" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Laporan Tahunan dan Evaluasi Organisasi Kemahasiswaan IPB University Tahun 2025
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#overview" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Ringkasan
            </a>
            <a href="#statistics" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Statistik
            </a>
            <a href="#highlights" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Sorotan
            </a>
            <a href="#reports" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Laporan
            </a>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass text-muted-foreground hover:text-foreground hover:border-accent transition-all"
          >
            <span className="text-sm">Kembali ke atas</span>
            <ArrowUp size={16} />
          </motion.button>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2025 Ormawa IPB University. Hak cipta dilindungi.
          </p>
          <p className="text-xs text-muted-foreground">
            Dibuat dengan dedikasi oleh <span className="text-accent font-medium">Lemma Agency</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
