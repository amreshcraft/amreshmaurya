"use client";

import { useState } from "react";
import { BsArrowUpRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import profile from "../data/profile";

const ProfileHero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <section
      id="home"
      className="relative isolate min-h-screen w-full overflow-hidden bg-neutral-950"
    >
      {/* Background */}
      <img
        src={profile.image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-10"
      />

      <div className="absolute inset-0 bg-neutral-950/85" />

      <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />

      {/* Navbar */}
      <header className="relative z-30 px-5 pt-5 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <a
              href="#home"
              onClick={closeMenu}
              className="flex items-center gap-3"
            >
              <div className="h-9 w-9 overflow-hidden rounded-full ring-1 ring-white/15">
                <img
                  src={profile.logo}
                  alt={profile.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <span className="hidden text-sm font-medium text-white sm:block">
                {profile.name}
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="flex items-center gap-1 rounded-full bg-white/[0.06] p-1 ring-1 ring-white/10 backdrop-blur-xl">
                {profile.navigation.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="
                      rounded-full
                      px-4 py-2
                      text-sm
                      font-medium
                      text-white/65
                      transition
                      hover:bg-white/[0.08]
                      hover:text-white
                    "
                  >
                    {link.label}
                  </a>
                ))}

                <a
                  href={profile.social.email}
                  className="
                    ml-1
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-white
                    px-4 py-2
                    text-sm
                    font-medium
                    text-neutral-900
                    transition
                    hover:bg-white/90
                  "
                >
                  Contact
                  <BsArrowUpRight size={13} />
                </a>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={
                mobileMenuOpen ? "Close navigation" : "Open navigation"
              }
              className="
                relative
                z-50
                inline-flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-white/[0.08]
                text-white
                ring-1
                ring-white/15
                backdrop-blur-xl
                md:hidden
              "
            >
              {mobileMenuOpen ? (
                <span className="text-xl leading-none">×</span>
              ) : (
                <span className="flex flex-col gap-1.5">
                  <span className="h-px w-4 bg-white" />
                  <span className="h-px w-4 bg-white" />
                </span>
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav
              id="mobile-navigation"
              className="
                absolute
                left-5
                right-5
                top-[72px]
                overflow-hidden
                rounded-2xl
                bg-neutral-900/95
                p-2
                ring-1
                ring-white/10
                shadow-2xl
                backdrop-blur-xl
                md:hidden
              "
            >
              {profile.navigation.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    px-4
                    py-3.5
                    text-sm
                    font-medium
                    text-white/75
                    transition
                    hover:bg-white/[0.06]
                    hover:text-white
                  "
                >
                  {link.label}
                  <BsArrowUpRight size={14} />
                </a>
              ))}

              <a
                href={profile.social.email}
                onClick={closeMenu}
                className="
                  mt-1
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  bg-white
                  px-4
                  py-3.5
                  text-sm
                  font-medium
                  text-neutral-900
                "
              >
                Contact
                <HiOutlineMail size={18} />
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-28 sm:pt-32 lg:pt-40">
          <div className="mx-auto max-w-4xl text-center">

            {/* Badge */}
            <div className="mb-7 inline-flex max-w-full items-center gap-2 rounded-full bg-white/[0.07] px-2 py-1.5 ring-1 ring-white/10 backdrop-blur-xl">
              <span className="shrink-0 rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-neutral-900">
                {profile.badge.label}
              </span>

              <span className="truncate px-1 text-xs font-medium text-white/70 sm:text-sm">
                {profile.badge.text}
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                text-5xl
                font-normal
                leading-[1.05]
                tracking-[-0.045em]
                text-white
                sm:text-6xl
                lg:text-7xl
                xl:text-8xl
              "
            >
              {profile.hero.title}
              <br />
              <span className="text-white/55">
                {profile.hero.titleLine2}
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
              {profile.hero.description}
            </p>

            {/* Actions */}
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={profile.actions.primary.href}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-white
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-neutral-900
                  transition
                  hover:bg-white/90
                "
              >
                {profile.actions.primary.label}
                <BsArrowUpRight size={14} />
              </a>

              <a
                href={profile.actions.secondary.email}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-white/75
                  ring-1
                  ring-white/10
                  transition
                  hover:bg-white/[0.06]
                  hover:text-white
                "
              >
                {profile.actions.secondary.label}
              </a>
            </div>
          </div>

          {/* Bottom information */}
          <div className="mx-auto mt-24 max-w-5xl border-t border-white/10 pt-6">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

              {/* Availability */}
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />

                <span className="text-sm text-white/55">
                  {profile.availability.text}
                </span>
              </div>

              {/* Expertise */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 sm:justify-end">
                {profile.expertise.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs text-white/40"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="mt-10 flex justify-center gap-5">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-white/40 transition hover:text-white"
            >
              <BsGithub size={17} />
            </a>

            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-white/40 transition hover:text-white"
            >
              <BsLinkedin size={17} />
            </a>

            <a
              href={profile.social.email}
              aria-label="Email"
              className="text-white/40 transition hover:text-white"
            >
              <HiOutlineMail size={19} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileHero;