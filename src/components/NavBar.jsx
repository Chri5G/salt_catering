import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { FaCircleChevronRight } from "react-icons/fa6";

export const NavBar = () => {
  return (
    <div>
      <RoundedDrawerNav
        links={[
          {
            title: "Catering",
            sublinks: [
              {
                title: "Menu",
                href: "/catering",
              },
              {
                title: "Past Events",
                href: "/catering/past_events",
              },
            ],
          },
          {
            title: "Monthly Specials",
            href: "/monthly_specials",
          },
          {
            title: "Bakery",
            sublinks: [
              {
                title: "Sourdough Menu",
                href: "/sourdough",
              },
            ],
          },
          {
            title: "Contact Us",
            href: "/contact_us",
          },
        ]}
        navBackground="bg-neutral-900"
        bodyBackground="bg-white"
      >
      </RoundedDrawerNav>
    </div>
  );
};

const RoundedDrawerNav = ({
  children,
  navBackground,
  bodyBackground,
  links,
}) => {
  const [hovered, setHovered] = useState(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const activeSublinks = useMemo(() => {
    if (!hovered) return [];
    const link = links.find((l) => l.title === hovered);

    return link ? link.sublinks : [];
  }, [hovered]);

  return (
    <>
      <nav
        onMouseLeave={() => setHovered(null)}
        className={`${navBackground} fixed top-0 w-[100%] z-50`} // Position fixed, top-0, and z-index for visibility
      >
        <div className="flex items-center justify-between">
          <div className="flex items-start pl-10">
            <Logo />
          </div>
          <div>
            <DesktopLinks
              links={links}
              setHovered={setHovered} 
              hovered={hovered}
              activeSublinks={activeSublinks}
            />
          </div>

          {/* Mobile Menu Sandwhich */}
          <motion.button
            onClick={() => setMobileNavOpen((pv) => !pv)}
            className="bg-black mt-1.5 block text-2xl text-neutral-50 md:hidden"
            whileTap={{ scale: 0.9}}
          >
            <FiMenu />
          </motion.button>
        </div>
        <MobileLinks links={links} open={mobileNavOpen} />
      </nav>
      <motion.main layout className={`${navBackground} px-2 pb-2`}>
        <div className={`${bodyBackground} rounded-3xl`}>{children}</div>
      </motion.main>
    </>
  );
};

// Company Logo
const Logo = () => {
  return (
    <a href="/">
      <img src="/imgs/logo_trans.png" className="w-24 h-24"></img>
    </a>
  );
};

// Pop Up Hover Links
const DesktopLinks = ({ links, setHovered, hovered, activeSublinks }) => {
  console.log(activeSublinks)
  const handleMouseEnter = (title) => {
    // Only setHovered when there are sublinks
    if (title == "Monthly Specials" || title == "Contact Us") {
      setHovered(null);
    } else {
      setHovered(title);
    }
  };

  return (
    <div className=" mt-0.5 hidden md:block pr-10">
      <div className="flex gap-6">
        {links.map((l) => (
          <TopLink 
            key={l.title} 
            setHovered={setHovered} 
            title={l.title}
            hasSublinks={!!l.sublinks}
            href={l.href}
            handleMouseEnter={handleMouseEnter}  // Pass the handler to TopLink
          >
            {l.title}
          </TopLink>
        ))}
      </div>
      <AnimatePresence mode="popLayout">
        {hovered && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="space-y-4 py-6"
          >
            {activeSublinks && activeSublinks.map((l) => (
              <a
                className="block text-2xl font-semibold text-neutral-50 transition-colors hover:text-dark_blue"
                href={l.href}
                key={l.title}
              >
                {l.title}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileLinks = ({ links, open }) => {
  return (
    <AnimatePresence mode="popLayout">
      {open && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="grid grid-cols-2 gap-6 py-6 md:hidden"
        >
          {/* Mobile Menu Dropdown */}
          {links.map((l) => {
            return (
              <div key={l.title} className="space-y-1.5">
                {l.sublinks ? (
                  <>
                    <span className="text-md block font-semibold text-neutral-50">
                      {l.title}
                    </span>
                    {l.sublinks.map((sl) => (
                      <a
                        className="text-md block text-neutral-300"
                        href={sl.href}
                        key={sl.title}
                      >
                        {sl.title}
                      </a>
                    ))}
                  </>
                ) : (
                  <a
                    href={l.href}
                    className="text-md block font-semibold text-neutral-50"
                  >
                    {l.title}
                  </a>
                )}
              </div>
            );
          })}
          <div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Top Hover Links 
const TopLink = ({ children, setHovered, title, hasSublinks, href, handleMouseEnter}) => (
  <>
    {hasSublinks ? (
      <span
        onMouseEnter={() => handleMouseEnter(title)}  // Use the new handler
        className="mt-5 cursor-pointer text-neutral-50 text-lg transition-colors hover:text-dark_blue"
      >
        {children}
      </span>
    ) : (
      <a
        href={href}
        onMouseEnter={() => handleMouseEnter(title)}  // Use the new handler
        className="mt-5 cursor-pointer block text-neutral-50 text-lg transition-colors hover:text-dark_blue"
      >
        {children}
      </a>
    )}
  </>
);
