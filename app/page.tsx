'use client';
import React from 'react'

import { useState, useEffect } from 'react';

type AccordionId = 'insurance' | 'rates' | 'openings' | 'education' | 'licensure' | 'certifications';

const page = () => {
 const [activeAccordion, setActiveAccordion] = useState<AccordionId | null>(null);
   const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
 

   useEffect(() => {
     const observer = new IntersectionObserver(
       (entries: IntersectionObserverEntry[]) => {
         entries.forEach((entry: IntersectionObserverEntry) => {
           if (entry.isIntersecting) {
             entry.target.classList.add('visible');
           }
         });
       },
       {
         threshold: 0.15,
         rootMargin: '0px 0px -50px 0px'
       }
     );
 
     const elements = document.querySelectorAll('.fade-in');
     elements.forEach((el: Element) => observer.observe(el));
 
     return () => observer.disconnect();
   }, []);
 
   const toggleAccordion = (id: AccordionId): void => {
     setActiveAccordion(activeAccordion === id ? null : id);
   };
 
   const toggleMobileMenu = (): void => {
     setMobileMenuOpen(!mobileMenuOpen);
   };
 
   return (
     <div className="bg-[#F8F6F3] min-h-screen">
      
       <header className="fixed top-0 left-0 right-0 bg-[#F8F6F3]/95 backdrop-blur-sm z-50 border-b border-[#E5DED3]/30">
         <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[50px] py-4 sm:py-5 md:py-[28px] flex items-center justify-between">
           <h1 className="text-xl sm:text-2xl md:text-[26px] font-light text-[#2C3E50] tracking-[-0.01em]">
             Dr. Maya Reynolds
           </h1>
           
          
           <nav className="hidden md:flex gap-8 lg:gap-[40px]">
             <a
               href="#about"
               className="text-[#2C3E50] text-base lg:text-[16px] font-light hover:text-[#5D7B8F] transition-colors duration-300"
             >
               About
             </a>
             <a
               href="#services"
               className="text-[#2C3E50] text-base lg:text-[16px] font-light hover:text-[#5D7B8F] transition-colors duration-300"
             >
               Services
             </a>
             <a
               href="#contact"
               className="text-[#2C3E50] text-base lg:text-[16px] font-light hover:text-[#5D7B8F] transition-colors duration-300"
             >
               Contact
             </a>
           </nav>
 
           
           <button
             onClick={toggleMobileMenu}
             className="md:hidden w-10 h-10 flex items-center justify-center z-[60]"
             aria-label="Toggle menu"
           >
             {mobileMenuOpen ? (
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2C3E50" strokeWidth="1.5">
                 <line x1="18" y1="6" x2="6" y2="18"></line>
                 <line x1="6" y1="6" x2="18" y2="18"></line>
               </svg>
             ) : (
               <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2C3E50" strokeWidth="1.5">
                 <line x1="3" y1="6" x2="21" y2="6"></line>
                 <line x1="3" y1="12" x2="21" y2="12"></line>
                 <line x1="3" y1="18" x2="21" y2="18"></line>
               </svg>
             )}
           </button>
         </div>
       </header>
 
       
       <div 
         className={`md:hidden fixed inset-0 bg-[#F8F6F3] z-40 transition-transform duration-300 ease-in-out ${
           mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
         }`}
       >
         <nav className="flex flex-col items-center justify-center gap-12 h-full">
           <a
             href="#about"
             onClick={() => setMobileMenuOpen(false)}
             className="text-[#2C3E50] text-3xl font-light hover:text-[#5D7B8F] transition-colors duration-300"
           >
             About
           </a>
           <a
             href="#services"
             onClick={() => setMobileMenuOpen(false)}
             className="text-[#2C3E50] text-3xl font-light hover:text-[#5D7B8F] transition-colors duration-300"
           >
             Services
           </a>
           <a
             href="#contact"
             onClick={() => setMobileMenuOpen(false)}
             className="text-[#2C3E50] text-3xl font-light hover:text-[#5D7B8F] transition-colors duration-300"
           >
             Contact
           </a>
         </nav>
       </div>
 
       
       <section className="pt-24 sm:pt-28 md:pt-32 lg:pt-[140px] pb-12 sm:pb-16 md:pb-20 lg:pb-[120px] bg-gradient-to-br from-[#F8F6F3] to-[#EBE6DD]">
         <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[60px]">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-[80px] items-center">
             
             <div className="fade-in order-2 md:order-1">
               <div className="w-full max-w-[400px] sm:max-w-[450px] md:max-w-[520px] mx-auto">
                 <div className="relative aspect-[3/4] rounded-[24px] overflow-hidden bg-[#C9D5E0] shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
                   <img
                     src="./Dr. Maya Reynolds.png"
                     alt="Professional therapy office in Santa Monica"
                     className="w-full h-full object-cover"
                   />
                 </div>
               </div>
             </div>
 
             
             <div className="order-1 md:order-2 text-center md:text-left">
               <h2 className="fade-in text-[clamp(38px,7vw,72px)] leading-[1.15] font-light text-[#2C3E50] mb-4 sm:mb-6 md:mb-[24px] tracking-[-0.025em]">
                 Therapy for Anxiety,<br />Trauma & Burnout<br />in Santa Monica
               </h2>
               <p className="fade-in text-base sm:text-lg md:text-[19px] leading-[1.65] text-[#5D7B8F] mb-6 sm:mb-8 md:mb-[40px] font-light">
                 Evidence-based therapy for adults seeking relief from anxiety, stress, and the lasting effects of difficult experiences.
               </p>
               <button className="fade-in bg-[#5D7B8F] text-white px-8 sm:px-10 md:px-[40px] py-3.5 sm:py-4 md:py-[16px] text-sm sm:text-[15px] tracking-[0.03em] font-light rounded-full hover:bg-[#4A6575] transition-all duration-400 shadow-lg hover:shadow-xl">
                 Schedule a Consultation
               </button>
             </div>
           </div>
         </div>
       </section>
 
      
       <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F8F6F3]">
         <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[60px]">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-[80px] items-start">
             
             <div className="flex flex-col justify-between">
               <div>
                 <h2 className="fade-in text-[clamp(32px,5.5vw,52px)] leading-[1.25] font-light text-[#2C3E50] mb-5 sm:mb-6 md:mb-[28px] tracking-[-0.02em]">
                   You don't have to navigate this alone
                 </h2>
                 <p className="fade-in text-base sm:text-[17px] leading-[1.7] text-[#5D7B8F] mb-4 sm:mb-5 md:mb-[20px] font-light">
                   Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.
                 </p>
                 <p className="fade-in text-base sm:text-[17px] leading-[1.7] text-[#5D7B8F] font-light">
                   You may appear functional on the outside while quietly struggling with constant worry, tension, difficulty sleeping, or a sense that you're always bracing for something to go wrong.
                 </p>
               </div>
 
               <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-[60px]">
                 <button className="fade-in border-[1.5px] border-[#5D7B8F] text-[#5D7B8F] px-6 sm:px-8 md:px-[36px] py-3 sm:py-[14px] text-xs sm:text-[14px] tracking-[0.05em] font-light rounded-full hover:bg-[#5D7B8F] hover:text-white transition-all duration-400 w-full sm:w-auto">
                   Learn More About My Approach
                 </button>
               </div>
             </div>
 
             
             <div className="fade-in">
               <img
                 src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80"
                 alt="Calm therapeutic environment"
                 className="w-full rounded-[16px] shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
               />
             </div>
           </div>
         </div>
       </section>
 
       
       <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-[100px] bg-gradient-to-br from-[#EBE6DD] to-[#F8F6F3]">
         <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[60px]">
           <h2 className="fade-in text-[clamp(32px,5.5vw,52px)] leading-[1.25] font-light text-[#2C3E50] text-center mb-12 sm:mb-16 md:mb-20 lg:mb-[80px] tracking-[-0.02em]">
             Areas of Focus
           </h2>
 
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-[40px]">
             
             <div className="fade-in bg-white border border-[#E5DED3] p-8 sm:p-10 md:p-12 lg:p-[48px] hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] transition-all duration-500 rounded-[20px]">
               <div className="w-14 h-14 mb-6 rounded-full bg-[#C9D5E0]/40 flex items-center justify-center">
                 <svg className="w-7 h-7 text-[#5D7B8F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                 </svg>
               </div>
               <h3 className="text-2xl sm:text-[26px] font-light text-[#2C3E50] mb-4 sm:mb-5 md:mb-[20px] tracking-[-0.01em]">
                 Anxiety & Panic
               </h3>
               <p className="text-sm sm:text-[15px] leading-[1.75] text-[#5D7B8F] mb-8 sm:mb-10 md:mb-[40px] font-light">
                 Relief from constant worry, racing thoughts, and physical tension. Using CBT and mindfulness-based practices to help you feel more grounded and regulated in daily life.
               </p>
               <div className="w-full aspect-square rounded-[16px] overflow-hidden bg-[#C9D5E0]/20">
                 <img
                   src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&auto=format&fit=crop&q=80"
                   alt="Peaceful natural setting representing calm"
                   className="w-full h-full object-cover"
                 />
               </div>
             </div>
 
             
             <div className="fade-in bg-white border border-[#E5DED3] p-8 sm:p-10 md:p-12 lg:p-[48px] hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] transition-all duration-500 rounded-[20px]">
               <div className="w-14 h-14 mb-6 rounded-full bg-[#C9D5E0]/40 flex items-center justify-center">
                 <svg className="w-7 h-7 text-[#5D7B8F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                 </svg>
               </div>
               <h3 className="text-2xl sm:text-[26px] font-light text-[#2C3E50] mb-4 sm:mb-5 md:mb-[20px] tracking-[-0.01em]">
                 Trauma & EMDR
               </h3>
               <p className="text-sm sm:text-[15px] leading-[1.75] text-[#5D7B8F] mb-8 sm:mb-10 md:mb-[40px] font-light">
                 Carefully paced trauma work for single-incident and complex experiences. Using EMDR and body-oriented techniques with emphasis on safety, stabilization, and feeling more secure.
               </p>
               <div className="w-full aspect-square rounded-[16px] overflow-hidden bg-[#C9D5E0]/20">
                 <img
                   src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&auto=format&fit=crop&q=80"
                   alt="Supportive therapeutic relationship"
                   className="w-full h-full object-cover"
                 />
               </div>
             </div>
 
             
             <div className="fade-in bg-white border border-[#E5DED3] p-8 sm:p-10 md:p-12 lg:p-[48px] hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] transition-all duration-500 rounded-[20px] sm:col-span-2 md:col-span-1">
               <div className="w-14 h-14 mb-6 rounded-full bg-[#C9D5E0]/40 flex items-center justify-center">
                 <svg className="w-7 h-7 text-[#5D7B8F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                 </svg>
               </div>
               <h3 className="text-2xl sm:text-[26px] font-light text-[#2C3E50] mb-4 sm:mb-5 md:mb-[20px] tracking-[-0.01em]">
                 Burnout & Perfectionism
               </h3>
               <p className="text-sm sm:text-[15px] leading-[1.75] text-[#5D7B8F] mb-8 sm:mb-10 md:mb-[40px] font-light">
                 Support for professionals, entrepreneurs, and creatives feeling disconnected after years of pushing through stress. Developing sustainable ways of living and working without losing yourself.
               </p>
               <div className="w-full aspect-square rounded-[16px] overflow-hidden bg-[#C9D5E0]/20">
                 <img
                   src="https://images.unsplash.com/photo-1494178270175-e96de2971df9?w=600&auto=format&fit=crop&q=80"
                   alt="Balance and restoration"
                   className="w-full h-full object-cover"
                 />
               </div>
             </div>
           </div>
         </div>
       </section>
 
       
       <section className="py-12 sm:py-16 md:py-20 lg:py-[100px]">
         <div className="max-w-[1400px] mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
             
             <div className="fade-in order-2 md:order-1">
               <img
                 src="https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=800&auto=format&fit=crop&q=80"
                 alt="Thoughtful therapy session"
                 className="w-full h-full object-cover min-h-[400px] sm:min-h-[500px] md:min-h-[600px]"
               />
             </div>
 
             
             <div className="bg-[#2C3E50] p-6 sm:p-10 md:p-16 lg:p-[80px] flex flex-col justify-center order-1 md:order-2">
               <h2 className="fade-in text-[clamp(28px,4.5vw,44px)] leading-[1.3] font-light text-white mb-6 sm:mb-8 md:mb-[32px] tracking-[-0.02em]">
                 My approach is warm, collaborative, and grounded
               </h2>
 
               <p className="fade-in text-base sm:text-[17px] leading-[1.7] text-[#C9D5E0] mb-5 sm:mb-6 md:mb-[28px] font-light">
                 Therapy works best when you feel respected, understood, and actively involved in the process. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth.
               </p>
 
               <ul className="space-y-3 sm:space-y-4 md:space-y-[16px] text-[#C9D5E0] mb-6 sm:mb-8 md:mb-[32px]">
                 <li className="fade-in flex items-start text-sm sm:text-[15px] leading-[1.7] font-light">
                   <span className="mr-3 mt-1 text-[#8FA7B8]">•</span>
                   <span>Evidence-based methods: CBT, EMDR, mindfulness, and body-oriented techniques</span>
                 </li>
                 <li className="fade-in flex items-start text-sm sm:text-[15px] leading-[1.7] font-light">
                   <span className="mr-3 mt-1 text-[#8FA7B8]">•</span>
                   <span>Understanding both emotional and physiological aspects of what you're experiencing</span>
                 </li>
                 <li className="fade-in flex items-start text-sm sm:text-[15px] leading-[1.7] font-light">
                   <span className="mr-3 mt-1 text-[#8FA7B8]">•</span>
                   <span>Not just symptom relief, but developing insight and resilience over time</span>
                 </li>
                 <li className="fade-in flex items-start text-sm sm:text-[15px] leading-[1.7] font-light">
                   <span className="mr-3 mt-1 text-[#8FA7B8]">•</span>
                   <span>Practical tools combined with depth-oriented work</span>
                 </li>
               </ul>
 
               <p className="fade-in text-base sm:text-[17px] leading-[1.7] text-[#C9D5E0] mb-8 sm:mb-10 md:mb-12 lg:mb-[48px] font-light">
                 My goal is helping you develop a stronger relationship with yourself while navigating the realities of living in a fast-paced environment.
               </p>
               
               <button className="fade-in border-[1.5px] border-white text-white px-6 sm:px-8 md:px-[36px] py-3 sm:py-[14px] text-xs sm:text-[14px] tracking-[0.05em] font-light rounded-full hover:bg-white hover:text-[#2C3E50] transition-all duration-400 w-full sm:w-auto">
                 Read More About My Methods
               </button>
             </div>
           </div>
         </div>
       </section>
 
      
       <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-[120px] bg-[#F8F6F3]">
         <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[60px]">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-[80px] items-center">
             {/* Left: Text */}
             <div className="text-center md:text-left">
               <h2 className="fade-in text-[clamp(32px,5.5vw,52px)] leading-[1.25] font-light text-[#2C3E50] mb-5 sm:mb-6 md:mb-[28px] tracking-[-0.02em]">
                 About Dr. Maya Reynolds
               </h2>
               <p className="fade-in text-base sm:text-[17px] leading-[1.7] text-[#5D7B8F] mb-5 font-light">
                 I'm a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.
               </p>
               <p className="fade-in text-base sm:text-[17px] leading-[1.7] text-[#5D7B8F] mb-5 font-light">
                 I take a warm, collaborative, and grounded approach to therapy, integrating evidence-based methods to help clients understand both the emotional and physiological sides of what they're experiencing.
               </p>
               <p className="fade-in text-base sm:text-[17px] leading-[1.7] text-[#5D7B8F] mb-6 sm:mb-8 md:mb-10 lg:mb-[40px] font-light">
                 I offer both in-person therapy from my Santa Monica office and secure telehealth sessions for clients located in California. My office is a quiet, private space designed to feel calm and grounding.
               </p>
               <div className="flex justify-center md:justify-start">
                 <button className="fade-in bg-[#5D7B8F] text-white px-8 sm:px-10 md:px-[40px] py-3.5 sm:py-4 md:py-[16px] text-sm sm:text-[15px] tracking-[0.03em] font-light rounded-full hover:bg-[#4A6575] transition-all duration-400 shadow-lg hover:shadow-xl">
                   Book a Session
                 </button>
               </div>
             </div>
 
             
             <div className="fade-in">
               <div className="w-full max-w-[400px] sm:max-w-[450px] md:max-w-[520px] mx-auto">
                 <div className="relative aspect-[3/4] rounded-[24px] overflow-hidden bg-[#C9D5E0] shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
                   <img
                     src="./Dr. Maya Reynolds.png"
                     alt="Dr. Maya Reynolds, Licensed Clinical Psychologist"
                     className="w-full h-full object-cover"
                   />
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
       
       <section className="py-12 sm:py-16 md:py-20 lg:py-[100px] bg-gradient-to-br from-[#EBE6DD] to-[#F8F6F3]">
         <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[60px]">
           
           <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-[80px]">
             <h2 className="fade-in text-[clamp(32px,5.5vw,52px)] leading-[1.25] font-light text-[#2C3E50] mb-5 sm:mb-6 md:mb-[24px] tracking-[-0.02em]">
               A Calm Space for Healing
             </h2>
             <p className="fade-in text-base sm:text-[17px] leading-[1.7] text-[#5D7B8F] max-w-[800px] mx-auto font-light">
               My Santa Monica office is designed to feel calm and grounding—a quiet, private space with natural light and an uncluttered environment where you can feel at ease from the moment you arrive.
             </p>
           </div>
 
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-[40px] mb-12 sm:mb-16 md:mb-20 lg:mb-[60px]">
             
             
             <div className="fade-in">
               <div className="relative aspect-[4/3] rounded-[20px] overflow-hidden bg-[#C9D5E0]/20 shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
                 <img
                   src="./office2.jpeg"
                   alt="Comfortable seating area for therapy sessions"
                   className="w-full h-full object-cover"
                 />
               </div>
             </div>
 
             
             <div className="fade-in">
               <div className="relative aspect-[4/3] rounded-[20px] overflow-hidden bg-[#C9D5E0]/20 shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
                 <img
                   src="./office1.jpeg"
                   alt="Private and welcoming office space in Santa Monica"
                   className="w-full h-full object-cover"
                 />
               </div>
             </div>
           </div>
 
           
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-[40px]">
             
             <div className="fade-in bg-white border border-[#E5DED3] p-6 sm:p-8 md:p-10 rounded-[16px] text-center">
               <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#C9D5E0]/40 flex items-center justify-center">
                 <svg className="w-6 h-6 text-[#5D7B8F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                 </svg>
               </div>
               <h3 className="text-lg sm:text-xl md:text-[22px] font-light text-[#2C3E50] mb-2 tracking-[-0.01em]">
                 Convenient Location
               </h3>
               <p className="text-sm sm:text-[15px] leading-[1.7] text-[#5D7B8F] font-light">
                 Located in the heart of Santa Monica, easily accessible with nearby parking.
               </p>
             </div>
 
             
             <div className="fade-in bg-white border border-[#E5DED3] p-6 sm:p-8 md:p-10 rounded-[16px] text-center">
               <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#C9D5E0]/40 flex items-center justify-center">
                 <svg className="w-6 h-6 text-[#5D7B8F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                 </svg>
               </div>
               <h3 className="text-lg sm:text-xl md:text-[22px] font-light text-[#2C3E50] mb-2 tracking-[-0.01em]">
                 Flexible Options
               </h3>
               <p className="text-sm sm:text-[15px] leading-[1.7] text-[#5D7B8F] font-light">
                 In-person sessions or secure telehealth for clients throughout California.
               </p>
             </div>
 
             
             <div className="fade-in bg-white border border-[#E5DED3] p-6 sm:p-8 md:p-10 rounded-[16px] text-center sm:col-span-2 md:col-span-1">
               <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#C9D5E0]/40 flex items-center justify-center">
                 <svg className="w-6 h-6 text-[#5D7B8F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                 </svg>
               </div>
               <h3 className="text-lg sm:text-xl md:text-[22px] font-light text-[#2C3E50] mb-2 tracking-[-0.01em]">
                 Complete Privacy
               </h3>
               <p className="text-sm sm:text-[15px] leading-[1.7] text-[#5D7B8F] font-light">
                 A confidential, safe environment where you can explore openly and without judgment.
               </p>
             </div>
           </div>
 
           
           <div className="fade-in mt-12 sm:mt-16 md:mt-20 lg:mt-[80px] text-center max-w-[700px] mx-auto">
             <p className="text-base sm:text-[17px] leading-[1.7] text-[#5D7B8F] mb-6 sm:mb-8 font-light">
               Clients often share that the space itself helps them feel more at ease when they arrive. The office environment is designed to support the therapeutic work we do together—offering comfort, privacy, and a sense of calm.
             </p>
             <p className="text-sm sm:text-[15px] leading-[1.7] text-[#2C3E50] font-light italic">
               123th Street 45 W, Santa Monica, CA 90401
             </p>
           </div>
         </div>
       </section>
 
       
       <section className="py-12 sm:py-16 md:py-20 lg:py-[100px] bg-gradient-to-br from-[#EBE6DD] to-[#F8F6F3]">
         <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[60px]">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-[80px]">
             
             <div className="fade-in order-2 md:order-1">
               <div className="w-full max-w-[400px] sm:max-w-[450px] md:max-w-[520px] mx-auto">
                 <div className="relative aspect-[3/4] rounded-[24px] overflow-hidden bg-[#C9D5E0]/30 shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
                   <img
                     src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80"
                     alt="Welcoming therapy space"
                     className="w-full h-full object-cover"
                   />
                 </div>
               </div>
             </div>
             
 
             
             <div className="order-1 md:order-2">
               <h2 className="fade-in text-[clamp(32px,5.5vw,52px)] leading-[1.25] font-light text-[#2C3E50] mb-10 sm:mb-12 md:mb-[60px] tracking-[-0.02em]">
                 Common Questions
               </h2>
 
               <div className="space-y-6 sm:space-y-8 md:space-y-[32px]">
                 <div className="fade-in border-t-[1.5px] border-[#C9D5E0] pt-5 sm:pt-6 md:pt-[24px]">
                   <button
                     onClick={() => toggleAccordion('insurance')}
                     className="w-full flex items-center justify-between text-left group"
                   >
                     <span className="text-xl sm:text-2xl md:text-[23px] font-light text-[#2C3E50] tracking-[-0.01em] group-hover:text-[#5D7B8F] transition-colors duration-300 pr-4">
                       Do you accept insurance?
                     </span>
                     <span className="text-2xl sm:text-3xl md:text-[28px] font-extralight text-[#2C3E50] flex-shrink-0">
                       {activeAccordion === 'insurance' ? '−' : '+'}
                     </span>
                   </button>
                   {activeAccordion === 'insurance' && (
                     <div className="pt-4 sm:pt-5 md:pt-[20px] text-sm sm:text-[15px] leading-[1.75] text-[#5D7B8F] font-light">
                       <p>I am currently in-network with select insurance providers. Please contact me directly to verify your specific coverage and discuss out-of-network options if applicable.</p>
                     </div>
                   )}
                 </div>
 
                 <div className="fade-in border-t-[1.5px] border-[#C9D5E0] pt-5 sm:pt-6 md:pt-[24px]">
                   <button
                     onClick={() => toggleAccordion('rates')}
                     className="w-full flex items-center justify-between text-left group"
                   >
                     <span className="text-xl sm:text-2xl md:text-[23px] font-light text-[#2C3E50] tracking-[-0.01em] group-hover:text-[#5D7B8F] transition-colors duration-300 pr-4">
                       What are your session rates?
                     </span>
                     <span className="text-2xl sm:text-3xl md:text-[28px] font-extralight text-[#2C3E50] flex-shrink-0">
                       {activeAccordion === 'rates' ? '−' : '+'}
                     </span>
                   </button>
                   {activeAccordion === 'rates' && (
                     <div className="pt-4 sm:pt-5 md:pt-[20px] text-sm sm:text-[15px] leading-[1.75] text-[#5D7B8F] font-light">
                       <p>Session rates vary based on insurance coverage and payment method. A standard 50-minute individual therapy session typically ranges from $200-$250. I'm happy to discuss specific fees during our initial consultation.</p>
                     </div>
                   )}
                 </div>
 
                 <div className="fade-in border-t-[1.5px] border-[#C9D5E0] pt-5 sm:pt-6 md:pt-[24px]">
                   <button
                     onClick={() => toggleAccordion('openings')}
                     className="w-full flex items-center justify-between text-left group"
                   >
                     <span className="text-xl sm:text-2xl md:text-[23px] font-light text-[#2C3E50] tracking-[-0.01em] group-hover:text-[#5D7B8F] transition-colors duration-300 pr-4">
                       Do you have availability for new clients?
                     </span>
                     <span className="text-2xl sm:text-3xl md:text-[28px] font-extralight text-[#2C3E50] flex-shrink-0">
                       {activeAccordion === 'openings' ? '−' : '+'}
                     </span>
                   </button>
                   {activeAccordion === 'openings' && (
                     <div className="pt-4 sm:pt-5 md:pt-[20px] text-sm sm:text-[15px] leading-[1.75] text-[#5D7B8F] font-light">
                       <p>I currently have limited availability for new clients. Please reach out to schedule an initial consultation, and we can discuss whether my approach might be a good fit for what you're looking for.</p>
                     </div>
                   )}
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
 
       
       <section className="py-12 sm:py-16 md:py-20 lg:py-[100px] bg-[#F8F6F3]">
         <div className="max-w-[900px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[60px]">
           <h2 className="fade-in text-[clamp(32px,5.5vw,52px)] leading-[1.25] font-light text-[#2C3E50] text-center mb-10 sm:mb-12 md:mb-[60px] tracking-[-0.02em]">
             Professional Background
           </h2>
 
           <div className="space-y-6 sm:space-y-8 md:space-y-[32px]">
             <div className="fade-in border-t-[1.5px] border-[#C9D5E0] pt-5 sm:pt-6 md:pt-[24px]">
               <button
                 onClick={() => toggleAccordion('education')}
                 className="w-full flex items-center justify-between text-left group"
               >
                 <span className="text-xl sm:text-2xl md:text-[23px] font-light text-[#2C3E50] tracking-[-0.01em] group-hover:text-[#5D7B8F] transition-colors duration-300 pr-4">
                   Education
                 </span>
                 <span className="text-2xl sm:text-3xl md:text-[28px] font-extralight text-[#2C3E50] flex-shrink-0">
                   {activeAccordion === 'education' ? '−' : '+'}
                 </span>
               </button>
               {activeAccordion === 'education' && (
                 <div className="pt-4 sm:pt-5 md:pt-[20px] text-sm sm:text-[15px] leading-[1.75] text-[#5D7B8F] font-light">
                   <p>Doctor of Psychology (PsyD) in Clinical Psychology</p>
                   <p className="mt-2">Specialized training in trauma-focused therapies and anxiety disorders</p>
                 </div>
               )}
             </div>
 
             <div className="fade-in border-t-[1.5px] border-[#C9D5E0] pt-5 sm:pt-6 md:pt-[24px]">
               <button
                 onClick={() => toggleAccordion('licensure')}
                 className="w-full flex items-center justify-between text-left group"
               >
                 <span className="text-xl sm:text-2xl md:text-[23px] font-light text-[#2C3E50] tracking-[-0.01em] group-hover:text-[#5D7B8F] transition-colors duration-300 pr-4">
                   Licensure
                 </span>
                 <span className="text-2xl sm:text-3xl md:text-[28px] font-extralight text-[#2C3E50] flex-shrink-0">
                   {activeAccordion === 'licensure' ? '−' : '+'}
                 </span>
               </button>
               {activeAccordion === 'licensure' && (
                 <div className="pt-4 sm:pt-5 md:pt-[20px] text-sm sm:text-[15px] leading-[1.75] text-[#5D7B8F] font-light">
                   <p>Licensed Clinical Psychologist, State of California</p>
                   <p className="mt-2">PSY 12345 (California)</p>
                 </div>
               )}
             </div>
             
 
             <div className="fade-in border-t-[1.5px] border-[#C9D5E0] pt-5 sm:pt-6 md:pt-[24px]">
               <button
                 onClick={() => toggleAccordion('certifications')}
                 className="w-full flex items-center justify-between text-left group"
               >
                 <span className="text-xl sm:text-2xl md:text-[23px] font-light text-[#2C3E50] tracking-[-0.01em] group-hover:text-[#5D7B8F] transition-colors duration-300 pr-4">
                   Specialized Training
                 </span>
                 <span className="text-2xl sm:text-3xl md:text-[28px] font-extralight text-[#2C3E50] flex-shrink-0">
                   {activeAccordion === 'certifications' ? '−' : '+'}
                 </span>
               </button>
               {activeAccordion === 'certifications' && (
                 <div className="pt-4 sm:pt-5 md:pt-[20px] text-sm sm:text-[15px] leading-[1.75] text-[#5D7B8F] font-light">
                   <p>EMDR (Eye Movement Desensitization and Reprocessing) Certified Therapist</p>
                   <p className="mt-2">Advanced Training in Cognitive-Behavioral Therapy (CBT)</p>
                   <p className="mt-2">Mindfulness-Based Stress Reduction (MBSR)</p>
                   <p className="mt-2">Somatic Experiencing Practitioner</p>
                 </div>
               )}
             </div>
           </div>
         </div>
       </section>
 
       
       <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-[120px] bg-[#5D7B8F]">
         <div className="max-w-[900px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[60px] text-center">
           <h2 className="fade-in text-[clamp(32px,5.5vw,52px)] leading-[1.25] font-light text-white mb-4 sm:mb-6 md:mb-[24px] tracking-[-0.02em]">
             Begin your therapy journey today
           </h2>
           <p className="fade-in text-base sm:text-[17px] leading-[1.7] text-white/90 mb-3 sm:mb-4 md:mb-[16px] font-light">
             If you're looking for a therapist who combines practical tools with depth-oriented work—
           </p>
           <p className="fade-in text-base sm:text-[17px] leading-[1.7] text-white/90 mb-8 sm:mb-10 md:mb-12 lg:mb-[48px] font-light">
             and who understands the realities of living in a fast-paced environment—I may be a good fit.
           </p>
           <button className="fade-in bg-white text-[#5D7B8F] px-8 sm:px-10 md:px-[40px] py-3.5 sm:py-4 md:py-[16px] text-sm sm:text-[15px] tracking-[0.03em] font-light rounded-full hover:bg-[#F8F6F3] transition-all duration-400 shadow-lg hover:shadow-xl">
             Schedule Your Consultation
           </button>
         </div>
       </section>
 
       
       <footer className="py-12 sm:py-16 md:py-20 lg:py-[80px] bg-[#2C3E50] text-white">
         <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[60px]">
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-[60px]">
             
             <div className="text-center sm:text-left">
               <h3 className="text-xl sm:text-2xl md:text-[22px] font-light mb-4 sm:mb-5 md:mb-[20px] tracking-[-0.01em]">
                 Dr. Maya Reynolds, PsyD
               </h3>
               <p className="text-sm sm:text-[15px] text-white/80 mb-2 font-light">123th Street 45 W</p>
               <p className="text-sm sm:text-[15px] text-white/80 mb-2 font-light">Santa Monica, CA 90401</p>
               <p className="text-sm sm:text-[15px] text-white/80 font-light">Licensed Clinical Psychologist</p>
             </div>
 
             
             <div className="text-center sm:text-left">
               <h3 className="text-xl sm:text-2xl md:text-[22px] font-light mb-4 sm:mb-5 md:mb-[20px] tracking-[-0.01em]">
                 Office Hours
               </h3>
               <p className="text-sm sm:text-[15px] text-white/80 mb-2 font-light">Monday – Thursday</p>
               <p className="text-sm sm:text-[15px] text-white/80 mb-2 font-light">9:00 AM – 6:00 PM</p>
               <p className="text-sm sm:text-[15px] text-white/80 font-light">Friday by appointment</p>
             </div>
 
            
             <div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
               <h3 className="text-xl sm:text-2xl md:text-[22px] font-light mb-4 sm:mb-5 md:mb-[20px] tracking-[-0.01em]">
                 Services
               </h3>
               <nav className="flex flex-col gap-3 md:gap-[12px]">
                 <a href="#services" className="text-sm sm:text-[15px] text-white/80 hover:text-white transition-colors duration-300 font-light">
                   Anxiety & Panic Treatment
                 </a>
                 <a href="#services" className="text-sm sm:text-[15px] text-white/80 hover:text-white transition-colors duration-300 font-light">
                   Trauma & EMDR Therapy
                 </a>
                 <a href="#services" className="text-sm sm:text-[15px] text-white/80 hover:text-white transition-colors duration-300 font-light">
                   Burnout Recovery
                 </a>
                 <a href="#about" className="text-sm sm:text-[15px] text-white/80 hover:text-white transition-colors duration-300 font-light">
                   Telehealth in California
                 </a>
               </nav>
             </div>
           </div>
           
           <div className="mt-12 pt-8 border-t border-white/20 text-center">
             <p className="text-sm text-white/60 font-light">
               © 2024 Dr. Maya Reynolds, PsyD. Licensed Clinical Psychologist in California.
             </p>
           </div>
         </div>
       </footer>
     </div>
   );
}

export default page