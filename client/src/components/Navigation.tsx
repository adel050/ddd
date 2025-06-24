import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";

const Navigation = () => {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "الصفحة الرئيسية" },
    { href: "/laws", label: "القوانين" },
    { href: "/store", label: "المتجر" },
    { href: "/contact", label: "تواصل معنا" },
  ];

  const dropdownItems = [
    { href: "/laws", label: "الأمن العام" },
    { href: "/laws", label: "حرس الحدود" },
    { href: "/laws", label: "هيئة الأوقاف" },
    { href: "/laws", label: "المحاكم" },
    { href: "/laws", label: "الطب المعتمد" },
  ];

  const isActive = (href: string) => location === href;

  return (
    <nav className="bg-[var(--qiddiya-dark)] border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-reverse space-x-2">
              <div className="w-10 h-10 bg-[var(--qiddiya-accent)] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">س</span>
              </div>
            </Link>
            <div className="mr-4 flex flex-col">
              <Link 
                href="/login" 
                className="text-2xl hover:text-yellow-400 transition-colors"
                title="تسجيل دخول المالك"
              >
                👑
              </Link>
              <span className="text-sm text-gray-300">سيرفر اخر | Another Server</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-reverse space-x-6">
              {navItems.map((item, index) => {
                if (item.label === "القوانين") {
                  return (
                    <div key={index} className="relative group">
                      <Link
                        href={item.href}
                        className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          isActive(item.href)
                            ? "bg-[var(--qiddiya-accent)] text-white"
                            : "text-[var(--qiddiya-text)] hover:bg-[var(--qiddiya-secondary)] hover:text-white"
                        }`}
                      >
                        {item.label}
                        <ChevronDown className="mr-1 h-4 w-4" />
                      </Link>
                      
                      {/* Dropdown Menu */}
                      <div className="absolute top-full right-0 mt-1 w-48 bg-[var(--qiddiya-dark)] border border-gray-700 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="py-1">
                          {dropdownItems.map((dropdownItem, dropdownIndex) => (
                            <Link
                              key={dropdownIndex}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-[var(--qiddiya-text)] hover:bg-[var(--qiddiya-secondary)] hover:text-white"
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }
                
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? "bg-[var(--qiddiya-accent)] text-white"
                        : "text-[var(--qiddiya-text)] hover:bg-[var(--qiddiya-secondary)] hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-[var(--qiddiya-text)]">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[var(--qiddiya-dark)] border-gray-700">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item, index) => {
                    if (item.label === "القوانين") {
                      return (
                        <div key={`mobile-dropdown-${index}`} className="space-y-2">
                          <div className="text-lg text-white font-semibold">{item.label}</div>
                          <div className="pr-4 space-y-2">
                            {dropdownItems.map((dropdownItem, dropdownIndex) => (
                              <Link
                                key={dropdownIndex}
                                href={dropdownItem.href}
                                onClick={() => setIsOpen(false)}
                                className="block py-2 text-[var(--qiddiya-text)] hover:text-white"
                              >
                                {dropdownItem.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      );
                    }
                    
                    return (
                      <Link
                        key={index}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-medium transition-colors ${
                          isActive(item.href)
                            ? "text-[var(--qiddiya-accent)]"
                            : "text-[var(--qiddiya-text)] hover:text-white"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
