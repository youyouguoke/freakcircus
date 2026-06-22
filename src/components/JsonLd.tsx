export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://freak-circus.com/#webpage",
        "url": "https://freak-circus.com",
        "name": "The Freak Circus Guide, Endings, Characters & Hidden Lore Archive",
        "description": "The ultimate fan archive for The Freak Circus horror visual novel. Explore character guides, all endings explained, walkthroughs, hidden routes, timeline lore, and community theories.",
        "isPartOf": {
          "@id": "https://freak-circus.com/#website"
        },
        "about": {
          "@type": "VideoGame",
          "name": "The Freak Circus",
          "genre": ["Horror", "Visual Novel", "Indie"],
          "applicationCategory": "Game",
          "operatingSystem": "Any",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://freak-circus.com/#website",
        "url": "https://freak-circus.com",
        "name": "Freak Circus Hub",
        "description": "A fan-maintained archive documenting characters, endings, theories, and hidden routes for The Freak Circus.",
        "publisher": {
          "@id": "https://freak-circus.com/#organization"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://freak-circus.com/#organization",
        "name": "Freak Circus Hub",
        "url": "https://freak-circus.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://freak-circus.com/Logo.png"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://freak-circus.com"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is The Freak Circus?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Freak Circus is an indie psychological horror visual novel that uses replay-aware mechanics to create a meta-narrative experience. Unlike traditional horror games, it builds dread through silence, repetition, and characters who appear to remember your choices across playthroughs."
            }
          },
          {
            "@type": "Question",
            "name": "Is The Freak Circus free to play?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, The Freak Circus is available for free on itch.io. It runs directly in your browser without requiring download or installation. The game is rated 18+ for mature themes."
            }
          },
          {
            "@type": "Question",
            "name": "How long is The Freak Circus?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A single route playthrough takes approximately 4-6 hours. However, experiencing all content requires multiple playthroughs due to replay-aware mechanics, hidden triggers, and route dependencies. A comprehensive investigation to see all endings and hidden content can take 40+ hours."
            }
          },
          {
            "@type": "Question",
            "name": "How many endings are in The Freak Circus?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The exact number remains unknown. The community has confirmed 8 endings including standard routes (Grand Finale, Smile For Me, Doctor's Note), secret endings (Eternal Silence, Columbina's Truth), and corrupted endings (Corrupted Data, White Room)."
            }
          },
          {
            "@type": "Question",
            "name": "Who is Pierrot in The Freak Circus?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Pierrot is the melancholic clown and often the first route players encounter. His storyline explores themes of forgotten identity, repeated loops, and awareness that extends beyond the fourth wall. The loop theory suggests Pierrot remembers player behavior across save files."
            }
          },
          {
            "@type": "Question",
            "name": "What is the Eternal Silence ending and how do you unlock it?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Eternal Silence is a secret ending on Pierrot's route that requires refusing every major dialogue interaction during the final act. The screen remains black for several minutes before credits roll. The ending suggests the only escape from the circus is to stop engaging entirely."
            }
          },
          {
            "@type": "Question",
            "name": "What is the true ending of The Freak Circus?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The community has not reached consensus on a true ending. Some theories suggest Columbina's Truth represents the most complete revelation. Others argue the Corrupted Data ending was intended as the true ending before being cut. The ambiguity appears intentional."
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Pierrot Character Guide",
            "url": "https://freak-circus.com/characters/pierrot"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Harlequin Character Guide",
            "url": "https://freak-circus.com/characters/harlequin"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "The Doctor Character Guide",
            "url": "https://freak-circus.com/characters/doctor"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Columbina Character Guide",
            "url": "https://freak-circus.com/characters/columbina"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "All Endings Explained",
            "url": "https://freak-circus.com/endings"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "Eternal Silence Ending Guide",
            "url": "https://freak-circus.com/endings/eternal-silence"
          },
          {
            "@type": "ListItem",
            "position": 7,
            "name": "Walkthroughs",
            "url": "https://freak-circus.com/walkthroughs"
          },
          {
            "@type": "ListItem",
            "position": 8,
            "name": "Lore Archive",
            "url": "https://freak-circus.com/lore"
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
