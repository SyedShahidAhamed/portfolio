
import { cn } from "@/lib/utils";
import { Menu, X, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Keep the navbar appearance consistent while scrolling.
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close the mobile menu when the screen becomes desktop-sized.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Prevent background scrolling while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50",
        "transition-all duration-300 ease-in-out",
        "bg-[#05060c]/95 backdrop-blur-md",
        isScrolled
          ? "py-3 shadow-lg shadow-black/20 border-b border-white/5"
          : "py-4 md:py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Portfolio Logo */}
        <a
          href="#hero"
          onClick={() => setIsMenuOpen(false)}
          className="relative z-[60] flex items-center text-lg sm:text-xl md:text-2xl font-bold tracking-tight whitespace-nowrap"
          aria-label="Syed Shahid Ahamed Portfolio - Home"
        >
          <span className="text-slate-100 text-glow">
            Syed Shahid Ahamed
          </span>

          <span className="ml-1.5 text-[#8067e8]">
            Portfolio
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-9">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "relative text-base lg:text-lg font-medium",
                "text-slate-300 hover:text-white",
                "transition-colors duration-300",
                "after:absolute after:left-0 after:-bottom-1",
                "after:h-0.5 after:w-0 after:bg-[#8067e8]",
                "after:transition-all after:duration-300",
                "hover:after:w-full"
              )}
            >
              {item.name}
            </a>
          ))}

          {/* Decorative sun icon, matching the screenshot */}
          <span
            className="ml-1 text-yellow-400"
            aria-hidden="true"
          >
            <Sun size={27} strokeWidth={2.2} />
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="relative z-[60] md:hidden p-2 rounded-md text-slate-100 hover:text-[#a18aff] transition-colors"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Mobile Navigation Overlay */}
        <div
          id="mobile-navigation"
          aria-hidden={!isMenuOpen}
          className={cn(
            "fixed inset-0 z-50 md:hidden",
            "bg-[#05060c]/98 backdrop-blur-xl",
            "flex flex-col items-center justify-center",
            "transition-all duration-300 ease-in-out",
            isMenuOpen
              ? "opacity-100 visible pointer-events-auto"
              : "opacity-0 invisible pointer-events-none"
          )}
        >
          <div className="flex flex-col items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                tabIndex={isMenuOpen ? 0 : -1}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  transitionDelay: isMenuOpen
                    ? `${index * 60}ms`
                    : "0ms",
                }}
                className={cn(
                  "text-xl sm:text-2xl font-medium",
                  "text-slate-300 hover:text-[#a18aff]",
                  "transition-all duration-300",
                  isMenuOpen
                    ? "translate-y-0"
                    : "translate-y-3"
                )}
              >
                {item.name}
              </a>
            ))}

            <Sun
              size={30}
              className="mt-4 text-yellow-400"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
