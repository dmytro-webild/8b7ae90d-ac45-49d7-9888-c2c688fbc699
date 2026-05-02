"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { Heart } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="medium"
        sizing="largeSmallSizeLargeTitles"
        background="aurora"
        cardStyle="gradient-radial"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "home",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Chateau du Ranch"
    />
  </div>

  <div id="home" data-section="home">
      <HeroBillboardCarousel
      background={{
        variant: "sparkles-gradient",
      }}
      title="Welcome to Chateau du Ranch"
      description="Where luxury meets comfort. Your beloved pets are part of our family, enjoying wide-open spaces and personalized attention in our home-like atmosphere."
      tag="Luxury Pet Retreat"
      buttons={[
        {
          text: "Book Your Stay",
          href: "#contact",
        },
        {
          text: "Learn More",
          href: "#about",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/dogs-enjoying-picnic-outdoors_23-2151332461.jpg",
          imageAlt: "Luxury pet ranch landscape",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/view-automatic-smart-feeder-household-pets_23-2151482472.jpg",
          imageAlt: "Dog playing in meadow",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-woman-with-cute-greyhound-dog_23-2150231890.jpg",
          imageAlt: "Dog hotel interior",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/beagle-dog-standing-two-paws-posing-beside-attractive-brunette-girl-with-white-pedicure-chilling-terrace_197531-4851.jpg",
          imageAlt: "Professional pet care staff",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/ai-generated-labrador-retriever-dog-picture_23-2150644959.jpg",
          imageAlt: "Happy pet portrait",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/poodle-posing-makeup-studio_23-2151987173.jpg",
          imageAlt: "Dog spa experience",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Our Story"
      title="Luxury Care for Your Family"
      description="At Chateau du Ranch, we believe every pet deserves a vacation that matches your standards of living."
      subdescription="Our team provides dedicated, personalized attention in a serene, nature-rich setting to ensure your pets feel right at home."
      imageSrc="http://img.b2bpic.net/free-photo/young-woman-doing-picnic-with-her-dog_23-2148199146.jpg"
      mediaAnimation="slide-up"
      icon={Heart}
      imageAlt="owner hugging dog at ranch"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Premium Services"
      description="Tailored amenities for every pet."
      accordionItems={[
        {
          id: "1",
          title: "Luxury Boarding",
          content: "Spacious, climate-controlled suites designed for rest and comfort.",
        },
        {
          id: "2",
          title: "Daycare Adventures",
          content: "Active, fun-filled play hours in our secured open-air fields.",
        },
        {
          id: "3",
          title: "Personalized Grooming",
          content: "Full-service spa treatments using natural, high-quality products.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/joyful-girl-sitting-chair-beside-vase-white-roses-stroking-beagle-dog-beautiful-brown-haired-woman-enjoying-fresh-air-balcony-with-pet-lies-her-knees_197531-4856.jpg"
      mediaAnimation="slide-up"
      imageAlt="luxury dog suite interior"
    />
  </div>

  <div id="shop" data-section="shop">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Grooming Kit",
          price: "$45",
          imageSrc: "http://img.b2bpic.net/free-photo/empty-deluxe-ski-complex-winter_482257-76604.jpg",
          imageAlt: "premium pet grooming kit",
        },
        {
          id: "p2",
          name: "Gourmet Bites",
          price: "$30",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-little-sweet-pillows-inside-plate-white-surface_140725-66098.jpg",
          imageAlt: "organic dog food gourmet",
        },
        {
          id: "p3",
          name: "Travel Carrier",
          price: "$120",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-smiley-woman-carrying-dog-bag_23-2149940537.jpg",
          imageAlt: "luxury pet travel carrier",
        },
        {
          id: "p4",
          name: "Plush Bedding",
          price: "$85",
          imageSrc: "http://img.b2bpic.net/free-photo/futuristic-style-adorable-dog_23-2151107710.jpg",
          imageAlt: "plush pet bed luxury",
        },
        {
          id: "p5",
          name: "Spa Shampoo",
          price: "$25",
          imageSrc: "http://img.b2bpic.net/free-photo/washing-pet-dog-home_23-2149627217.jpg",
          imageAlt: "luxury pet shampoo bath",
        },
        {
          id: "p6",
          name: "Leather Collar",
          price: "$50",
          imageSrc: "http://img.b2bpic.net/free-photo/father-s-day-composition-with-great-objects_23-2147615942.jpg",
          imageAlt: "handmade dog collar leather",
        },
      ]}
      title="Exclusive Pet Boutique"
      description="Carefully selected products for your companion."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",
          badge: "Essential",
          price: "$50/day",
          subtitle: "Perfect for standard care.",
          buttons: [
            {
              text: "Select",
              href: "#contact",
            },
          ],
          features: [
            "Daily walk",
            "Comfy suite",
            "Feeding included",
          ],
        },
        {
          id: "deluxe",
          badge: "Popular",
          price: "$90/day",
          subtitle: "Best for active pups.",
          buttons: [
            {
              text: "Select",
              href: "#contact",
            },
          ],
          features: [
            "Group play",
            "Spa bath",
            "Daily video updates",
          ],
        },
        {
          id: "premium",
          badge: "VIP",
          price: "$150/day",
          subtitle: "Ultimate luxury experience.",
          buttons: [
            {
              text: "Select",
              href: "#contact",
            },
          ],
          features: [
            "1-on-1 playtime",
            "Full grooming",
            "Private suite",
            "Gourmet meal",
          ],
        },
      ]}
      title="Transparent Pricing"
      description="Choose the care package that fits your pet’s needs."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-happy-woman-with-long-hair-posing-with-her-dog-outside_291650-560.jpg",
        },
        {
          id: "2",
          name: "Mark D.",
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-young-man-pointing-finger-his-dog-showing-small-cute-black-pug-sitting-white-background_1258-158063.jpg",
        },
        {
          id: "3",
          name: "Elena R.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-her-dog-having-good-time_23-2148728028.jpg",
        },
        {
          id: "4",
          name: "Chris B.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-happy-smiling-woman-holding-boston-terrrier-dog-park-summer-sunny-day-cheerful-mood-playing-with-pet-waving-long-hair-having-fun-summer-fashion-trend_285396-5109.jpg",
        },
        {
          id: "5",
          name: "Anna S.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-young-couple-with-their-dog-garden_23-2147902122.jpg",
        },
        {
          id: "6",
          name: "Kevin L.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-hipster-glasses-holding-cute-black-pug-smiling-dog-owner-staring-camera-with-amazed-smile-standing-white-background_1258-75777.jpg",
        },
      ]}
      cardTitle="What Our Clients Say"
      cardTag="Testimonials"
      cardAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Do you offer medical care?",
          content: "Yes, we monitor and accommodate specific medical needs with prior consultation.",
        },
        {
          id: "q2",
          title: "Can I bring my pet's toys?",
          content: "We encourage bringing favorite familiar toys to make their stay more comfortable.",
        },
        {
          id: "q3",
          title: "How do I book a stay?",
          content: "Easily book via our portal or contact us directly for specific requests.",
        },
      ]}
      sideTitle="Common Questions"
      sideDescription="Everything you need to know about our luxury ranch."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Bookings"
      title="Ready for a Luxury Stay?"
      description="Reserve your pet's spot today and give them the best experience."
      buttons={[
        {
          text: "Contact Us Now",
          href: "mailto:hello@chateau.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/close-up-goat-near-farmer_23-2149140371.jpg"
      logoText="Chateau du Ranch"
      columns={[
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Booking",
              href: "#contact",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
