import mainSectionBg from '../public/main-section-bg.jpg';
import planningSectionBeachImage1 from '../public/planning-section-beach-image-1.jpg';
import planningSectionBeachImage2 from '../public/planning-section-beach-image-2.jpeg';
import planningSectionBeachImage3 from '../public/planning-section-beach-image-3.jpg';
import planningSectionBeachImage4 from '../public/planning-section-beach-image-4.jpg';
import planningSectionBeachImage5 from '../public/planning-section-beach-image-5.jpg';
import room1 from '../public/room-1.jpg';
import room2 from '../public/room-2.jpg';
import room3 from '../public/room-3.jpg';
import food1 from '../public/food-image-1.jpg';
import food3 from '../public/food-image-3.jpg';
import food4 from '../public/food-image-4.jpg';

const appConfig = {
    headMetadata: {
        description: 'Description',
    },
    navigationConfigs: {
        sections: [
            {
                name: 'Home',
                link: '#home',
            },
            {
                name: 'About',
                link: '#about',
            },
            {
                name: 'Work',
                link: '#work',
            },
            {
                name: 'Contact',
                link: '#contact',
            },
        ]
    },
    sectionsConfigs: {
        main: {
            backgroundImage: mainSectionBg,
            text: {
                allInclusive: 'All inclusive',
                privateBeachesAndGateways: 'Private Beaches & Gateways',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                reserveNow: 'Reserve now',
            }
        },
        offers: {
            offersNames: ['Booking Incentives', 'Competitive Rates', 'Book With Flexibility', 'Trip Insurance'],
        },
        planning: {
            images: [planningSectionBeachImage1, planningSectionBeachImage2, planningSectionBeachImage3, planningSectionBeachImage4, planningSectionBeachImage5],
            text: {
                planYourNExtTrip: 'Plan your next trip',
                description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                description2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                learnMore: 'Learn More',
                bookYourTrip: 'Book Your Trip'
            }
        },
        rooms: {
            text: {
                fineInteriorRooms: 'Fine Interior Rooms',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
            roomsImages: [room1, room2, room3],
            imageSliderImages: [food1, food3, food4],
        },
    },
    footerConfigs: {
        text: {
            solutions: 'Solutions',
            solutionsArray: ['Travel', 'Booking', 'Flights', 'Cruises', 'Ground'],
            support: 'Support',
            supportArray: ['Pricing', 'Documentation', 'Tours', 'Refunds'],
            company: 'Company',
            companyInfoArray: ['About', 'Jobs', 'Blogs', 'Press', 'Partners'],
            legal: 'Legal',
            legalInfoArray: ['Claims', 'Privacy', 'Terms', 'Policies', 'Conditions'],
            subscribeToOurNewsletter: 'Subscribe to our newsletter',
            theLatestDeals: 'The latest deals, articles and resources sent to your inbox weekly',
            subscribe: 'Subscribe',
            experiences: '2022 Experiences, LLC. All rights reserved'
        }
    }
};

export default appConfig;