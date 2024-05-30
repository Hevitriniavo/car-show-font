"use client";

import useIntersectionObserver from '@/app/(hooks)/useIntersectionObserver';
import React, { useCallback, useEffect } from 'react';

interface Contact {
  name: string;
  address: string;
  email: string;
  education: string;
}

const contacts: Contact[] = [
  {
    name: "Tantely",
    address: "Ambalavao Tsihenimparihy",
    email: "hei.tantely@gmail.com",
    education: "2ème année de licence en Data scientist et data analist",
  },
  {
    name: "Anthonyo",
    address: "Anosibe be mpangalatra",
    email: "hei.anthonyo.2@gmail.com",
    education: "2ème année de licence en fullstack js et java",
  },
  {
    name: "Zoarisoa",
    address: "Ambohitsilazaina",
    email: "hei.zoarisoa@gmail.com",
    education: "2ème année de licence en DevOps et fullstack js",
  },
  {
    name: "Elisé",
    address: "Soavimasoandro",
    email: "hei.elise.3@gmail.com",
    education: "2ème année de licence en frontend",
  },
];

const Footer: React.FC = () => {
  const callback = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
      } else {
        entry.target.classList.remove('reveal-visible');
      }
    });
  }, []);

  const elementsRef = useIntersectionObserver(callback, {
    threshold: 0.1,
    rootMargin: '-15px -15px -15px -15px '
  });

  useEffect(() => {
    elementsRef.current = Array.from(document.querySelectorAll('.reveal'));
  }, [elementsRef]);

  return (
    <footer className="bg-gray-200 text-gray-700 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl mb-8">Contactez-nous</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contacts.map((contact, index) => (
            <div key={index} className="bg-gray-300 p-6 rounded-lg shadow-lg reveal">
              <h3 className="text-xl mb-2">{contact.name}</h3>
              <p className="mb-2">{contact.address}</p>
              <p className="mb-2">
                <a href={`mailto:${contact.email}`} className="text-blue-400 underline">
                  {contact.email}
                </a>
              </p>
              <p className="mt-2">{contact.education}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <p>&copy; high-car l&apos;entreprise. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
