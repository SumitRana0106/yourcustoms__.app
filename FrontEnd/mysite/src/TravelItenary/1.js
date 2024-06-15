import React from 'react';
import './group.css';
import PageTemplate from '../BlogPageTemplate/v1/template';

class Page_1 extends React.Component{

    render(){

        var page_content_jsx = (
            <div>
                <div>
                    <div className='header-sm'>Cellular Jail National Memorial </div>
                    <div>The Cellular Jail, also known as Kālā Pānī (Black Water), was a colonial prison used by the British to exile political prisoners during India's struggle for independence. It stands as a silent witness to the brutalities faced by freedom fighters. The jail has been converted into a national memorial and museum, offering insights into the Indian independence movement and the sacrifices made by freedom fighters.</div>
                </div>

                <div>
                    <div className='header-sm'>Radhanagar Beach </div>
                    <div>Radhanagar Beach is renowned for its stunning white sandy shores, clear turquoise waters, and breathtaking sunsets. It's often ranked among the best beaches in Asia for its pristine beauty and tranquility. Visitors can relax on the beach, swim in the crystal-clear waters, or enjoy water sports such as snorkeling and scuba diving to explore the vibrant marine life.</div>
                </div>

                <div>
                    <div className='header-sm'>Ross islands</div>
                    <div>Ross Island was once the administrative headquarters of the British in the Andaman Islands. Now in ruins, the island offers a glimpse into its colonial past with remnants of old buildings, churches, and a cemetery. Visitors can explore the island's historical landmarks, stroll through the lush greenery, and enjoy panoramic views of the surrounding sea.</div>
                </div>

                <div>
                    <div className='header-sm'>Baratang Island</div>
                    <div>Baratang Island is known for its natural wonders, including limestone caves, mangrove creeks, and mud volcanoes. The journey to reach the limestone caves involves a boat ride through dense mangrove forests, offering glimpses of exotic flora and fauna. The limestone caves themselves feature stunning stalactite and stalagmite formations, making it a unique geological attraction.</div>
                </div>

                <div>
                    <div className='header-sm'>Neil Island</div>
                    <div>Neil Island, also known as Shaheed Dweep, is a tranquil paradise with serene beaches, lush greenery, and pristine coral reefs. Visitors can relax on the secluded beaches, swim in the azure waters, or indulge in activities like snorkeling and diving to explore the vibrant underwater world. The island offers a laid-back atmosphere ideal for unwinding and soaking in the natural beauty.</div>
                </div>

                <div>
                    <div className='header-sm'>Mahatma Gandhi Marine National Park</div>
                    <div>Mahatma Gandhi Marine National Park is a protected area known for its rich marine biodiversity, coral reefs, and pristine beaches. Visitors can explore the park's underwater treasures through activities like glass-bottom boat rides, snorkeling, and scuba diving. The park is home to a variety of marine life, including colorful corals, tropical fish, sea turtles, and rare species, making it a paradise for nature enthusiasts and adventure seekers.</div>
                </div>

                <div>
                    <div className='header-sm'>Elephant Beach</div>
                    <div>Elephant Beach is a scenic destination known for its vibrant coral reefs, clear waters, and soft sandy shores. It's an excellent spot for snorkeling and diving, offering opportunities to encounter diverse marine life, including colorful fish, corals, and even sea turtles. Visitors can also enjoy water sports like banana boat rides and kayaking or simply relax on the beach and soak in the breathtaking views.</div>
                </div>

                <div>
                    <div className='header-sm'>North Bay Island</div>
                    <div>North Bay Island is famous for its coral reefs, underwater sea life, and adventure activities. Visitors can explore the island's marine ecosystem through activities like snorkeling, scuba diving, and glass-bottom boat rides. The clear waters offer stunning views of colorful corals, exotic fish, and other marine creatures, providing a memorable experience for nature lovers and adventure enthusiasts alike.</div>
                </div>

                <div>
                    <div className='header-sm'>Chidiya Tapu</div>
                    <div>Chidiya Tapu, or Bird Island, is a picturesque destination known for its stunning sunsets, diverse birdlife, and natural beauty. Visitors can enjoy birdwatching, nature walks, and photography amidst lush greenery and scenic landscapes. The island is home to numerous species of birds, making it a paradise for bird enthusiasts and nature lovers. The tranquil atmosphere and breathtaking views make it an ideal spot for relaxation and rejuvenation.</div>
                </div>

                <div>
                    <div className='header-sm'>Limestone Caves at Diglipur</div>
                    <div>The limestone caves at Diglipur are a geological marvel featuring intricate stalactite and stalagmite formations. Visitors can explore these natural caves, marveling at the unique rock formations and underground chambers. The journey to the caves offers scenic views of lush green forests and rugged landscapes, adding to the adventure. The caves are a fascinating destination for nature enthusiasts and those interested in geology.</div>
                </div>
            
            </div>

            
        );

        return (
            
            <PageTemplate title="Top Places to visit while visiting Andaman's ..." content={page_content_jsx} />
            
        );
    }
}

export default Page_1;