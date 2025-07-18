"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useRouter } from "next/navigation";
import { useState } from "react";

function NavbarMain() {
  const router = useRouter();
  const navItems = [
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Skills", link: "/skills" },
    { name: "Blogs", link: "/blogs" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full fixed top-2  z-50 max-w-4xl">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton
              variant="secondary"
              onClick={() => {
                router.push(
                  "https://drive.google.com/file/d/1MfQvt34HFb1M1rAEZF6VQ5V8sQ9-HkfJ/view?usp=sharing"
                );
              }}
            >
              Resume
            </NavbarButton>
            <NavbarButton
              variant="primary"
              onClick={() => router.push("/contact")}
            >
              Contact Us
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => {
                  router.push(
                    "https://drive.google.com/file/d/1MfQvt34HFb1M1rAEZF6VQ5V8sQ9-HkfJ/view?usp=sharing"
                  );
                }}
                variant="primary"
                className="w-full"
              >
                Resume
              </NavbarButton>
              <NavbarButton
                onClick={() => {
                  router.push("/contact");
                }}
                variant="primary"
                className="w-full"
              >
                Contact Us
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Navbar */}
    </div>
  );
}

export default NavbarMain;
