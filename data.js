// Array holding data for all 28 Indian states with 5 top destinations and 5 famous foods each
const indianStates = [
  {
    name: "Andhra Pradesh",
    image: "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/andhra-famous.jpg",
    description: "Andhra Pradesh is a state on the east coast of southern India.Telugu is the most widely spoken language in the state, as well as its official language.Amaravati is the state capital, while the largest city is Visakhapatnam.",
    bestTime: "October to March",
    topDestinations: [
      { name: "Tirupati", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1S185C6gUp1q2TAt_RqFGEfRtcR4hR96__w&s" , description: "Tirupati Sri Venkateswara swamy Temple sits atop one of the the 7 peaks of Tirumala Hills, attracting scores of Hindu pilgrims." },
      { name: "Visakhapatnam", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRlMcI-_ilUhr_-ddpdmRKNYXt4A6NasbAsQ&s" , description: "Visakhapatnam is known for its many beaches, including Ramakrishna Beach, home to a preserved submarine at the Kursura Submarine Museum."},
      { name: "Araku Valley", image: "https://vizagtourism.org.in/images/places-to-visit/header/araku-valley-vizag-tourism-entry-fee-timings-holidays-reviews-header.jpg" , description: "Araku Valley is a hill station and valley region in the southeastern Indian state of Andhra Pradesh."},
      { name: "Srisailam", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6WGaO1AkXL2wpJSyvH9VR4kj6DxdaxOrh7Q&s" , description: "Srisaila Mahakshetram is the living embodiment of ancient and spiritual-cultural traditions and values."},
      { name: "Vijayawada", image: "https://www.abhibus.com/blog/wp-content/uploads/2023/09/Things-to-Do-in-Vijayawada-for-a-Quick-Getaway.jpg" , description: "Vijayawada is renowned for its iconic Kanaka Durga Temple, an important Hindu shrine that attracts millions of devotees each year."}
    ],
    famousFoods: [
      { name: "Pesarattu", image: "https://cdn3.foodviva.com/static-content/food-images/andhra-recipes/pesarattu/pesarattu.jpg" , description: "Pesarattu is a crepe-like bread, originating in Andhra Pradesh, India, that is a variety of dosa."},
      { name: "Gongura Pachadi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAmaUwHT7_5NZlVuEjT8EgGCdpZ4oGPirA5g&s" , description: "This Gongura Pachadi is tangy, hot, spicy and tastes exactly the way it should."},
      { name: "Pulihora", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBZzVdQgcPClKJ0viotgyDuCyOA42jRm3gMQ&s" , description: "Pulihora is a common and traditional rice preparation in the South Indian states of Andhra Pradesh, Telangana, Kerala, Tamil Nadu and Karnataka."},
      { name: "Bobbatlu", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST4mdQTj7TFVu6f5Wg79E--d3EfyMx1PC8qA&s" , description: "Bobbatlu is an Indian sweet flatbread that is popular in South India and the state of Maharashtra."},
      { name: "Andhra Chicken Curry", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvNnWUyaQlc9yMaUEPpR-tdryfBVqdSCLXKQ&s" , description: "Andhra Style Chicken Curry (Kodi Kura) is a spicy and flavorful chicken curry from the South Indian state of Andra Pradesh in India."}
    ]
  },
  {
    name: "Arunachal Pradesh",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Golden_Pagoda_Namsai_Arunachal_Pradesh.jpg",
    description: "Arunachal Pradesh is a state in northeast India.Itanagar is its capital and largest town. It borders the Indian states of Assam and Nagaland to the south.",
    bestTime: "October to April",
    topDestinations: [
      { name: "Tawang", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/TawangMonastery-ArunachalPradesh-1.jpg/1200px-TawangMonastery-ArunachalPradesh-1.jpg" , description: "Tawang is a town and district headquarters in Arunachal Pradesh, India, known for its stunning scenery and the iconic Tawang Monastery."},
      { name: "Ziro Valley", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgDDtzCp2scnffydfJbYTMdsp09myxfjz3zQ&s" , description: "Ziro is a town in and the district headquarters of the Lower Subansiri district in the Indian state of Arunachal Pradesh. It is included the Tentative List for UNESCO's World Heritage Site for the Apatani cultural landscape."},
      { name: "Itanagar", image: "https://propscience.s3.ap-south-1.amazonaws.com/backoffice_blogs/20250402042821_0_Arunachal_Pradesh__Itanagar_embraces_smart_growth_with_ropeway__e_buses__and_major_infra_upgrades.png" , description: "Itanagar is the capital of the northeast Indian state of Arunachal Pradesh. Set in the foothills of the Himalayas, the city is home to medieval Ita Fort and the Jawaharlal Nehru State Museum, which exhibits textiles and handicrafts."},
      { name: "Bomdila", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjzRx3tIi-8tVOV5FdfMCaXa9utaPTNg1wiQ&s" , description: "Bomdila is the headquarters of West Kameng district in the state of Arunachal Pradesh in India. Bomdila is one of the 60 constituencies of the state of Arunachal Pradesh."},
      { name: "Pasighat", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG8aiT7pTxMZ8OizJKMCrfgLL08vC0ktiFRA&s" , description: "Pasighat is the headquarters of East Siang district in the Indian state of Arunachal Pradesh. Situated at the eastern foothills of the Himalayas at 155 metres above mean sea level, Pasighat is Arunachal's oldest town."}
    ],
    famousFoods: [
      { name: "Thukpa", image: "https://foodtrails25.com/wp-content/uploads/2019/09/How-to-make-Thukpa-Noodle-Soup.jpg" , description: "Thukpa is a Tibetan noodle soup that has become a popular comfort food in various parts of India, including Ladakh, Sikkim, and Darjeeling."},
      { name: "Momo", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSErbNdDlgEP4rQ5SuEct4xbctioX7TWfasMw&s" , description: "Momo is a steamed dumpling, popular in Tibet, Nepal, Bhutan, and India, often served with a spicy sauce. They are typically filled with meat (like yak, beef, or pork) or vegetables, seasoned with herbs and spices."},
      { name: "Apong", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThs_iy-xnjPGS5aj__W4WzQO_iMb1ELHlBkA&s" , description: "Apong is a traditional alcoholic beverage made by fermenting rice, primarily in the Mising and other tribal communities of Northeast India, especially in Arunachal Pradesh and Assam. It's a local beer, often served in bamboo shoots and considered a sacred drink, used in ceremonies and gatherings. "},
      { name: "Fish Curry", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR5bv5CUtCfSyCjiwS29HyMoq0FfaCTGxX1A&s" , description: "Fish curry is a diverse and flavorful Indian dish, prepared in various regional styles. It typically features fish cooked in a spiced broth or sauce, and is often served with rice, idli, or dosa."},
      { name: "Axone", image: "https://cdn.dotpe.in/longtail/store-items/460859/TQJlFv4n.jpeg" , description: "Axone, also known as akhuni, is a fermented soybean staple in Naga cuisine from Nagaland, a state in northeastern India. It's a condiment used in various dishes, including pickles, chutneys, and curries, known for its distinctive flavor and strong aroma."}
    ]
  },
  {
    name: "Assam",
    image: "https://eodbtest.assam.statedatacenter.in/assets/websitev2/assets/images/about/h8_about_img01.jpg",
    description: "Assam is a state in northeastern India known for its wildlife, archeological sites and tea plantations.The state capital, Dispur, is a suburb of Guwahati.",
    bestTime: "October to April",
    topDestinations: [
      { name: "Kaziranga National Park", image: "https://www.kaziranganationalpark-india.com/blog/wp-content/uploads/2022/08/kaziranga-wildlife-2.jpg" , description: "Kaziranga National Park is a vital wildlife sanctuary in Assam, India, known for its high density of one-horned rhinoceroses"},
      { name: "Majuli Island", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZJcHnkS8ELlORzqlib8SA-qbb6rnNHDtAvA&s" , description: "Majuli Island is special because it's the world's largest river island, renowned for its rich culture, vibrant Assamese heritage, and unique ecological significance."},
      { name: "Guwahati", image: "https://brahmaputravalleyfilmfestival.com/wp-content/uploads/2023/08/about-gohati.jpeg" , description: "Guwahati the largest city of the Indian state of Assam, and also the largest metropolis in northeastern India."},
      { name: "Sivasagar", image: "https://i0.wp.com/kaziranganationalparkassam.in/wp-content/uploads/2020/12/Kareng-Ghar.jpg?resize=648%2C484&ssl=1" , description: "Sivasagar is a city and headquarter of the Sivasagar district, Assam. Sivasagar City It is well known for its Ahom palaces and monuments."},
      { name: "Manas National Park", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Herd_of_Elephant_in_Manas.jpg/1280px-Herd_of_Elephant_in_Manas.jpg" , description: "Manas National Park is a national park, Project Tiger reserve, and an elephant reserve in Assam, India. Located in the Himalayan foothills, it borders the Royal Manas National Park in Bhutan."}
      ],
    famousFoods: [
      { name: "Assam Laksa", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-J0aSgzJ6gULZ2IJ4H8eeNA0vIwaMXesz3g&s" , description: "Assam laksa is a Peranakan noodle dish from northern Peninsular Malaysia and northern Sumatra, known for its spicy, sour, and fishy broth."},
      { name: "Pitha", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5KWSzH7D3KdncAIaZruw6wjU_ZPLE_iJ6gg&s" , description: "Pithas are a diverse category of foods, particularly popular in India and Bangladesh, resembling pancakes, dumplings, or fritters."},
      { name: "Duck Curry", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgwF8z2qdn72WJoF03pDp_MImFDW0_S0myFw&s" , description: "Duck curry is a savory dish featuring pieces of duck cooked in a rich, flavorful curry sauce. It's a popular dish in many cuisines, particularly in Kerala, India, and Thailand."},
      { name: "Khar", image: "https://img1.wsimg.com/isteam/ip/e4c53108-cc9d-4fa6-b2a9-3666569e6d89/Khar%20of%20Assam.jpg" , description: "Khar is a traditional Assamese dish that serves as both a cooking technique and a distinct flavor profile."},
      { name: "Masor Tenga", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzwF9U26rXtKNnt2P1mDap-VNPC1GXyArx5g&s" , description: "Masor Tenga is a popular Assamese dish that combines fish with Turai."}
      ]
  },
  {
    name: "Bihar",
    image: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/bodh-gaya/MAHABODHI%20TEMPLE.jpg",
    description: "Rich in history and culture, known for ancient sites and religious significance.",
    bestTime: "October to March",
    topDestinations: [
      { name: "Bodh Gaya", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdlsNpMp44hkrloFlTRXngHXfOQBZl5giVvg&s" , description: "Bodh Gaya is a village in the northeast Indian state of Bihar. Considered one of the most important Buddhist pilgrimage sites"},
      { name: "Patna", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0FtPv7RWM6JZcy7JiBs-3ubYGj-mJIgZrnQ&s" , description: "Patna is an ancient city that sprawls along the south bank of the Ganges River in Bihar, northeast India."},
      { name: "Nalanda", image: "https://blissfulbihar.com/wp-content/uploads/2023/08/nalanda-university-ruins.webp" , description: "The Nalanda is home to the ancient Nalanda Mahavihara a UNESCO World Heritage Site"},
      { name: "Rajgir", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGrqpkNZnrxShGKDLvd6GuOOVPBZ1oq0qn6w&s" , description: "Rajgir is an ancient city in the northeast Indian state of Bihar. Surrounded by hills"},
      { name: "Vaishali", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Vaishali%2C_Bihar.JPG/1200px-Vaishali%2C_Bihar.JPG" , description: "Vaishali is a part of Tirhut division. Vaishali is known for being the birthplace of Mahavira of the Jain religion."}
    ],
    famousFoods: [
      { name: "Litti Chokha", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnc5W1X1T8WzVf2OZDQbBifFF8LYkrGOgVlA&s" , description: "Litti Chokha is a traditional dish from Bihar, India, that combines roasted wheat balls stuffed with spiced gram flour and a smoky vegetable mash."},
      { name: "Sattu Paratha", image: "https://i0.wp.com/cookingfromheart.com/wp-content/uploads/2022/02/Sattu-Paratha-3.jpg?fit=684%2C1024&ssl=1" , description: "Sattu paratha is a popular Indian paratha (flatbread) that is stuffed with a filling made of sattu" },
      { name: "Khaja", image: "https://odishatour.in/wp-content/uploads/2024/07/feni-khaja.jpg" , description: "Khaja is a multi-layered, deep-fried, and sugar-soaked Indian sweet.It's known for its crispy, flaky texture and is a popular treat during festivals and celebrations."},
      { name: "Thekua", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLkiduBWFYXWRdLqM2A4_m4KtObkceRqNMQQ&s" , description: "Thekua is a traditional deep-fried sweet snack.It's made with wheat flour, jaggery and ghee, and is often served as prasad during Chhath Puja."},
      { name: "Balushahi", image: "https://i.ytimg.com/vi/AjOsi6AKXJ0/maxresdefault.jpg" , description: "Makhan Bada, also known as Makhan Vada, is a traditional dessert originating from the Indian subcontinent. It is also known as Balushahi"}
    ]
  },
  {
   name: "Chhattisgarh",
    image: "https://chhattisgarh.s3waas.gov.in/assets/images/banner-1.jpg",
    description: "Known for its ancient temples, waterfalls, and tribal culture.",
    bestTime: "October to March",
   topDestinations: [
     { name: "Chitrakote Falls",image: "https://media.assettype.com/outlooktraveller/2024-09-18/ap0uvkn4/shutterstock2399894931.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true" , description: "The chirakote Falls is a natural waterfall on the Indravati River."},
     { name: "Bastar",image: "https://i.redd.it/the-bastar-which-i-know-chhattisgarh-is-underrated-in-v0-je5dduwe7n1e1.jpg?width=4000&format=pjpg&auto=webp&s=1230860bad64aae61810a9a61c77e22fa25487fd" , description: "Bastar in Chhattisgarh, India, is renowned for its rich tribal culture  and stunning natural beauty."},
     { name: "Raipur",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_3UdS1bNJ9_IroJTlVcsTjbUNvUgON23N2Q&s" , description: "Raipur is the capital city of Chhattisgarh state in central India."},
     { name: "Kanger Valley National Park",image: "https://static.toiimg.com/thumb/msid-118943591,width-1280,height-720,resizemode-72/118943591.jpg" , description: "Kanger Valley National Park, a biodiverse region in Chhattisgarh, India, known for its dense forests, unique limestone caves, and waterfalls."},
     { name: "Sirpur",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP4y5QJ3b38d4aiybGv7joUGQR-eISlCFqzg&s" , description: "Sirpur is a historical site located in Chhattisgarh, India, known for its archaeological remains and cultural significance."}
   ],
   famousFoods: [
    { name: "Chhattisgarhi Bafauri",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOYIYt5vCW6z0xHUtoW5Hrlmj_WkN7eazuxA&s" , description: "Bafauri is a healthy and flavorful steamed snack, popular in the state of Chhattisgarh, and also found in Bihar, Madhya Pradesh, and Uttar Pradesh."},
    { name: "Muthia",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7bECcBnRyPGblgI9edl5KrQlvI77jFiyp4g&s" , description: "Muthia is a gujarati snack which is made with dudhi, methi and other vegetables with besan."},
    { name: "Aamat",image: "https://blog.swiggy.com/wp-content/uploads/2024/04/Aamat-1024x538.jpg" , description: "Aamat is a tangy tribal soup originating from the Bastar region of Chhattisgarh, India."},
    { name: "Fara",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxjpEqfYBr5QTvO0UMS5Imv6hxsZcpiZ_XmQ&s" , description: "Fara is a traditional Indian dish, typically a steamed rice dumpling, often filled with lentils or other savory ingredients."},
    { name: "Dubki Kadhi",image: "https://images.slurrp.com/webstories/wp-content/uploads/2023/10/Archanas-Kitchen-kadhi.jpg" , description: "Dubki Kadhi is a curd based one pot dish from the Indian state of Chattisgarh."}
   ]
   },
  {
   name: "Delhi",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/red-fort-delhi1-attr-hero?qlt=82&ts=1727352314555",
    description: "Delhi, India’s capital territory, is a massive metropolitan area in the country’s north.",
    bestTime: "October to March",
   topDestinations: [
     { name: "Red Fort",image: "https://cdn.britannica.com/20/189820-050-D650A54D/Red-Fort-Old-Delhi-India.jpg" , description: "The Red Fort, also known as Lal Qila is a historic Mughal fort in Delhi, India, that served as the primary residence of the Mughal emperors."},
     { name: "Qutub Minar",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-fBvJcqVULNExj6RoqkTJi2ykIGN1czV5A&s" , description: "The Qutb Minar, also spelled Qutub Minar and Qutab Minar, is a minaret and victory tower comprising the Qutb complex, which lies at the site of Delhi's oldest fortified city, Lal Kot, founded by the Tomar Rajputs."},
     { name: "Lodi Gardens",image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/14/cf/80/lodi-gardens.jpg?w=900&h=500&s=1" , description: "Lodhi Garden is a beautiful, tranquil park spread over 90 acres in the heart of New Delhi. It is known for its lush greenery, serene walking trails, and historic tombs and structures dating back to the 15th and 16th centuries."},
     { name: "Lotus Temple",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPHoeXnc0VsmC4et_41Cy7998rq6ca1KhfIQ&s" , description: "The Lotus Temple is a Baháʼí House of Worship in Kalkaji, New Delhi, Delhi, India. It was completed in December 1986. Notable for its lotus-like shape, it has become a prominent attraction in the city."},
     { name: "Humayun's Tomb",image: "https://s7ap1.scene7.com/is/image/incredibleindia/humayuns-tomb-delhi-1-attr-hero?qlt=82&ts=1727352156717" , description: "Humayun's tomb is the tomb of Emperor Mirza Nasir al-Din Muhammad commonly known as Humayun situated in Delhi, India."}
   ],
   famousFoods: [
    { name: "Chole Bhature",image: "https://cdn.zeptonow.com/production///tr:w-600,ar-100-100,pr-true,f-auto,q-80/web/recipes/chola-bhatura.png" , description: "Chole bhature is a food dish popular in the northern areas of the Indian subcontinent."},
    { name: "Gol Gappe",image: "https://static.toiimg.com/photo/75107900.cms" , description: "Gol Gappa, also known as Pani Puri, is a popular Indian street food consisting of crispy, hollow shells filled with a mixture of mashed potatoes, chickpeas, and spices."},
    { name: "Aloo Tikki",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7kRjFKUc3YqCe-4hdV_JGjU_lKrMryzJNQA&s" , description: "Aloo tikki, also known as aloo ki tikkia, aloo ki tikki or alu tikki, is a vegetarian snack originating from the Indian subcontinent."},
    { name: "Paranthas",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ_j4eQDzZlJ5zm6y1daaKQnWhIK2Esyllnw&s" , description: "Parathas are a type of flaky, layered flatbread common in the Indian subcontinent, particularly popular in North India."},
    { name: "Kathi Rolls",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxltt8oJkL6WDLhv-KBJWngwp9zsuwge3g7A&s" , description: "A kati roll is a street-food dish originating from India. In its original form, it is a skewer-roasted kebab wrapped in a paratha bread, although over the years many variants have evolved all of which now go under the generic name of kati roll. "}
   ]
   },
  {
   name: "Goa",
    image: "https://lp-cms-production.imgix.net/2025-01/shutterstock2542346155-cropped.jpg?auto=compress&format=auto&fit=crop&q=50&w=1200&h=800",
    description: "Famous for its beaches, nightlife, and Portuguese heritage.",
    bestTime: "November to February",
   topDestinations: [
     { name: "Baga Beach",image: "https://static.toiimg.com/photo/59486326/.jpg" , description: "a vibrant and popular beach in North Goa, India."},
     { name: "Fort Aguada",image: "https://imkarchitects.com/images/projects/lesuire-hotel/fort-aguada-beach-resort-goa/1.jpg" , description: "Historic significance and stunning architecture."},
     { name: "Dudhsagar Falls",image: "https://imgmediagumlet.lbb.in/media/2021/10/6165b8de6a9fc04e3f38c58c_1634056414914.jpg" , description: "Dudhsagar Falls is a majestic, four-tiered waterfall in Goa."},
     { name: "Basilica of Bom Jesus",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2AI-aX66eoFfrC8U09XAq2amiQNLMJIigCg&s" , description: "The Basilica of Bom Jesus is a UNESCO World Heritage site in Goa, India"},
     { name: "Anjuna Beach",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1WyMZG5nFdxHazAbUXOxWzJRuL89qrxs54A&s" , description: "part of a 30 kilometer stretch of extended beach coastline along the west coast of Goa by the Arabian Sea."}
   ],
   famousFoods: [
    { name: "Goan Fish Curry",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqc5-CqTxgWvrZFdRV3yt4AUEHK5BnD7L9ZQ&s" , description: "an aromatic curry with a blend of spices, garlic, ginger and onion along with fresh tomato and coconut"},
    { name: "Bebinca",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGaxCuYURdV1v93H6I5s7ajXEMukK9SwN3TA&s" , description: "Bebinca: a multi-layered cake from India."},
    { name: "Pork Vindaloo",image: "https://www.allrecipes.com/thmb/Q-Wi8mphO7IGeyLyjW96GmK3mQY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/734094-d43077b9e8d74fd69594627d88dc3531.jpg" , description: "Vindaloo is a curry dish from the state of Goa in India."},
    { name: "Xacuti",image: "https://greatcurryrecipes.net/wp-content/uploads/2023/04/F7D0F663-FA65-460F-A62D-BF8786B347E7-735x980.jpeg" , description: "Xacuti is a curry prepared in Goa, India, with complex spicing, including white poppy seeds, sliced onions, toasted grated coconut, and large dried red chillies."},
    { name: "Sorpotel",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAq7IVdqC5zi-_I6UKRmi0UQSchj3LdgPisw&s" , description: "Sorpotel is a traditional Goan (Indian) dish, particularly of Portuguese origin, known for its rich, spicy, and sour flavor."}
   ]
   },
  {
   name: "Gujarat",
    image: "gujarat.jpg",
    description: "Known for its vibrant culture, historical sites, and wildlife.",
    bestTime: "November to February",
   topDestinations: [
     { name: "Gir National Park",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStMaNkUf8yYiLKX_VmgwjB52wVj_-v4kjNvg&s" , description: "Gir National Park is the only natural habitat in the world for the Asiatic lion, located in Gujarat, India, and is a vital conservation success story."},
     { name: "Somnath Temple",image: "https://media.istockphoto.com/id/1174372687/photo/somnath-temple-facade-gujarat.webp?a=1&b=1&s=612x612&w=0&k=20&c=f1Vi15E4aRKBSG8s0BrkSvl32caUgVI_07TcTvjKOZQ=" , description: "Somnath Temple is one of the twelve Jyotirlinga shrines of Lord Shiva, renowned for its spiritual significance."},
     { name: "Rann of Kutch",image: "https://images.unsplash.com/photo-1670406312373-6d4d1776e4aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmFubiUyMG9mJTIwS3V0Y2h8ZW58MHx8MHx8fDA%3D" , description: "The Rann of Kutch is a vast, unique salt marsh in Gujarat, India, known for its stunning white salt desert and vibrant Rann Utsav festival."},
     { name: "Dwarkadhish Temple",image: "https://images.unsplash.com/photo-1668160747331-4275e35f0713?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RHdhcmthZGhpc2glMjBUZW1wbGV8ZW58MHx8MHx8fDA%3D" , description: "Dwarkadhish Temple is a sacred Hindu temple dedicated to Lord Krishna, located in Dwarka, Gujarat."},
     { name: "Saputara",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThjrzatqP1vG7P6IW22dRjI00uE4y522AnTQ&s" , description: "Saputara is a picturesque hill station in Gujarat known for its cool climate, lakes, and lush green landscapes."}
   ],
   famousFoods: [
    { name: "Dhokla",image: "https://media.istockphoto.com/id/1257018928/photo/gujarati-khaman-dhokla-or-steamed-gram-flour-puffy-snack-cake.webp?a=1&b=1&s=612x612&w=0&k=20&c=YQTu_3O4g7MJ7iRqXrl634_J_SajzmaF-E9W51YdAOs=" , description: "Dhokla is a soft, steamed Gujarati snack made from fermented rice and chickpea flour batter."},
    { name: "Khandvi",image: "https://d1uz88p17r663j.cloudfront.net/original/ff75422b53f60e10642b1df6e54f943d_Khandvi_with_sprouts_filling_Plating.jpg" , description: "Khandvi is a soft, rolled Gujarati snack made from gram flour and buttermilk."},
    { name: "Fafda",image: "https://images.news18.com/ibnkhabar/uploads/2023/06/fafda-16875144723x2.jpg" , description: "Fafda is a crispy Gujarati snack made from gram flour, often served with chutney or jalebi."},
    { name: "Undhiyu",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xmEl2Qu0RAPTRKH65sFs4ci054NpybqYRA&s" , description: "Undhiyu is a traditional Gujarati mixed vegetable dish cooked with spices and fenugreek dumplings."},
    { name: "Thepla",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Vuo0v-PzdMDy-MIOCIC32KLnDY82rhQGvQ&s" , description: "Thepla is a spiced Gujarati flatbread made from whole wheat flour and fenugreek leaves."}
   ]
   },
  {
   name: "Haryana",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/2-shish-mahal-gurugram-haryana-state-hero?qlt=82&ts=1726732666469",
    description: "Rich in agriculture and known for its historical sites.",
    bestTime: "October to March",
   topDestinations: [
     { name: "Kurukshetra",image: "https://cdnbbsr.s3waas.gov.in/s37b7a53e239400a13bd6be6c91c4f6c4e/uploads/2020/05/2020051445.jpg" , description: "Kurukshetra is a city in the northern Indian state of Haryana, historically significant as the location of the battle of Mahabharata and where Lord Krishna preached the Bhagavad Gita to Arjuna."},
     { name: "Sultanpur National Park",image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201501/2499c39100000578-2905758-image-a-1_1421025753750_650_011215032354.jpg?VersionId=8p1JJ5Mwg4aOBCIKJzN8R2uJWySB3977&size=690:388" , description: "Sultanpur National Park is located at Sultanpur village on Gurugram-Jhajjar highway, 15 km from Gurugram, Haryana and 50 km from Delhi in India."},
     { name: "Morni Hills",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC__-tzEX1lpCT07iCWl2m9UoYvak1z1f69Q&s" , description: "Morni is a village and tourist attraction in the Morni Hills in the Panchkula district of the northern Indian state of Haryana."},
     { name: "Pinjore Gardens",image: "https://static2.tripoto.com/media/filter/tst/img/1979318/TripDocument/1589267123_1589267108183.jpg.webp" , description: "Yadavindra Gardens, also known as Pinjore Gardens, is a historic 17th century garden located in Pinjore city of Panchkula district in the Indian state of Haryana."},
     { name: "Karnal",image: "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/08/a706ea5e94489ab4a95914120e3a9310_1000x1000.jpg" , description: "Karnal is a city located in the state of Haryana, India and is the administrative headquarters of Karnal District."}
   ],
   famousFoods: [
    { name: "Bajra Khichdi",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6_Ehf3vQBS0_lsoFOVlIOfIRHjiUjOm-uSQ&s" , description: "Bajra Khichdi is a traditional Indian dish made from bajra (pearl millet) and moong dal (split green gram)."},
    { name: "Kadhi Pakora",image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/03/kadhi-recipe-kadhi-pakora.jpg" , description: "Kadhi Pakora is a popular Punjabi dish consisting of pakoras (fritters) served in a creamy and delicious yogurt sauce known as 'Kadhi'."},
    { name: "Besan Masala Roti",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUO-mgzKjgD_t31iJ3ChEWxCrG5GKOJc4vpQ&s" , description: "Besan masala roti is a very popular snack from north India. Chickpea flour is mixed with wheat flour and some spices and this delicious roti is made."},
    { name: "Churma",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1M05zpO31-BE_P_9pLtf5IR91gqtj899sjg&s" , description: "Churma is a popular Indian dessert, particularly well-known in Rajasthan, where it is often served as part of the Dal Bati Churma dish."},
    { name: "Kheer",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo5uEwKRYp2GvyJK1Na7tc-Kjfec7KxHXajg&s" , description: "Kheer is a pudding or porridge popular in the Indian subcontinent, usually made by boiling milk, sugar or jaggery, and rice."}
   ]
   },
  {
   name: "Himachal Pradesh",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/cityscape-of-shimla-himachal-pradesh-city-1-hero?qlt=82&ts=1726730693575",
    description: "A Himalayan state known for its scenic beauty and adventure activities.",
    bestTime: "March to June, September to October",
   topDestinations: [
     { name: "Shimla",image: "https://c.ndtvimg.com/2025-01/tuhgraag_shimla_625x300_31_January_25.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=738" , description: "Shimla is a picturesque hill station and the capital of Himachal Pradesh, known for its colonial architecture and snow-capped mountains."},
     { name: "Manali",image: "https://upload.wikimedia.org/wikipedia/commons/0/03/Manali_City.jpg" , description: "Manali is a popular hill station in Himachal Pradesh known for its breathtaking landscapes, adventure sports, and spiritual sites."},
     { name: "Dharmashala",image: "https://cdn.britannica.com/00/259800-050-F34687F5/houses-hillside-McLeodganj-Dharamshala-Kangra-Himachal-Pradesh-India.jpg" , description: "Dharamshala is a picturesque town in Himachal Pradesh known for its scenic beauty and Tibetan culture, home to the Dalai Lama."},
     { name: "Dalhousie",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRebUetEyU5U5d82OC3BXhd4yscL9DBHMyBag&s" , description: "Dalhousie is a scenic hill station in Himachal Pradesh known for its colonial architecture, panoramic views, and tranquil atmosphere."},
     { name: "Kullu",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTuFMFzIQn-jdC0l6TWEMvg6o8d9_rcljkMg&s" , description: "Kullu is a scenic valley town in Himachal Pradesh, famous for its stunning landscapes, adventure sports, and the Kullu Dussehra festival."}
   ],
   famousFoods: [
    { name: "Dham",image: "https://www.holidify.com/images/cmsuploads/compressed/57551921_2301707306531534_946636123755511808_o_20200417125340.jpg" , description: "Dham is a traditional Himachali thali featuring local delicacies like rajma, dal, kaddu, and boor ki khatti mithi."},
    { name: "Sidu",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS22yWb4xO6ADSmxKVfHIMc_zvmrm8hKzc2A&s" , description: "Siddu is a traditional Himachali steamed bun filled with spiced potatoes, peas, or chana dal, often served with ghee or chutney."},
    { name: "Chha Gosht",image: "https://images.slurrp.com/prod/recipe_images/transcribe/main%20course/Chha-Gosht.webp" , description: "Chha Gosht is a traditional Himachali mutton curry, rich in flavor and spices, often served with rice or roti."},
    { name: "Babru",image: "https://i.ytimg.com/vi/o_xUAt5OP4g/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAwbOnspAXdSI4bNx6hee0HC4A_LA" , description: "Babru is a traditional Himachali stuffed bread or pancake filled with urad dal or other ingredients."},
    { name: "Trout Fish",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGgTScVdd3eoSgQJksEso8adfPFNLd9nsTYQ&s" , description: "Trout is a popular fish dish in Himachal Pradesh, often prepared in local styles like masala or fry."}
   ]
   },
  {
   name: "Jharkhand",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/1-sir-dorabji-tata-park-jamshedpur-jharkhand-state-hero?qlt=82&ts=1726723968059",
    description: "Known for its mineral resources, forests, and tribal culture.",
    bestTime: "October to March",
   topDestinations: [
     { name: "Ranchi",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3c2NXS0eNzrYEAZdC1DOIcu42iAvfOxjrlQ&s" , description: "Ranchi is the capital city of Jharkhand, known for its scenic waterfalls, temples, and rich cultural heritage."},
     { name: "Netarhat",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv0UOErB7fE7D7rujz_zZ5YjYh888jHwB8BQ&s" , description: "Netarhat is a picturesque hill station in Jharkhand, known for its stunning sunsets, pine forests, and serene environment."},
     { name: "Deoghar",image: "https://www.bihartrip.com/pub/media/catalog/product/cache/cab15b78dac35e1077797ee439f6374a/d/e/deoghar-tour-packages.jpg" , description: "Deoghar is a sacred pilgrimage town in Jharkhand, famous for its ancient Baidyanath Temple, one of the twelve Jyotirlingas in India."},
     { name: "Betla National Park",image: "https://www.traveltourguru.in/wp-content/uploads/2020/08/Betla-National-Park.jpg" , description: "Betla National Park is a wildlife sanctuary in Jharkhand, known for its diverse flora and fauna, including tigers, elephants, and leopards."},
     { name: "Hazaribagh",image: "https://content.jdmagicbox.com/comp/hazaribagh/y5/9999p6546.6546.200627213559.f5y5/catalogue/canary-hill-veiwing-point-dipugarha-hazaribagh-tourist-attraction-fPXOzXwHmF-250.jpg" , description: "Hazaribagh is a city in Jharkhand, known for its scenic beauty, Hazaribagh Lake, and the famous Hazaribagh National Park."}
   ],
   famousFoods: [
    { name: "Rugra",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhwWBWiRr4m23WqdNDgUSvYIxlzyoezCAgOw&s" , description: "Rugra is a type of edible mushroom commonly used in Jharkhandi cuisine, often cooked in traditional dishes."},
    { name: "Malpua",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgiUIRWk_akKcThiuEo9E91uSUb21BfwZ-Ow&s" , description: "Malpua is a popular sweet dish in Jharkhand, made with flour, milk, and sugar, typically served during festivals and special occasions."},
    { name: "Chilka Roti",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD1q87GDCRj0V0fDKMlW6bsAISQRUILp-FVg&s" , description: "Chhilka Roti is a traditional Jharkhandi flatbread made from rice flour, often served with local vegetables or lentil-based dishes."},
    { name: "Thekua",image: "https://www.bigbasket.com/media/uploads/recipe/w-l/4551_2_1.jpg" , description: "Thekua is a traditional Jharkhandi sweet cookie-like dish made with wheat flour, jaggery, and ghee."},
    { name: "Handia",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfD_yBEaGIjKnMGJaDg7clM4-7Ltpo3iJ-NQ&s" , description: "Handia is a traditional rice beer popular in Jharkhand, often consumed during festivals and social gatherings."}
   ]
   },
  {
   name: "Karnataka",
    image: "https://www.tourmyindia.com/states/karnataka/image/karnataka-home-banner.webp",
    description: "Known for its diverse landscapes, historical sites, and coffee plantations.",
    bestTime: "October to March",
   topDestinations: [
     { name: "Bangalore",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS13dS5tYUIW9Mtx-94GtMuUuoE33OGZ9X-Q&s" , description: "Bengaluru (also called Bangalore) is the capital of India's southern Karnataka state. The center of India's high-tech industry, the city is also known for its parks and nightlife."},
     { name: "Mysore",image: "https://www.fabhotels.com/blog/wp-content/uploads/2019/05/Mysore-palace_600.jpg" , description: "Mysore (or Mysuru), a city in India's southwestern Karnataka state, was the capital of the Kingdom of Mysore from 1399 to 1947."},
     { name: "Coorg",image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/df/42/5d/the-tamara-coorg.jpg?w=900&h=500&s=1" , description: "Kodagu, also known as Coorg, is a rural district in the southwest Indian state of Karnataka. In the area’s north, Madikeri Fort has 2 life-size elephant statues at its entrance, plus a Gothic-style church with a museum on its grounds."},
     { name: "Hampi",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSJwesMeSMDEjJLvv6jBJFKFfH91XeIzdrUQ&s" , description: "Hampi or Hampe is the city in the Vijayanagara district in the Indian state of Karnataka. Located along the Tungabhadra River in the east and center part of the state, Hampi is near the city of Hospet."},
     { name: "Gokarna",image: "https://vl-prod-static.b-cdn.net/system/images/000/711/619/f5fd357355dd3de37d14f13992e43732/x1000gt/BmAPFEzHIc1.jpg?1710292784" , description: "Gokarna is a town on the Arabian Sea, in the southwestern Indian state of Karnataka. A popular pilgrimage destination for Hindus, it’s known for sacred sites like Mahabaleshwar Temple, which has a shrine dedicated to the deity Shiva."}
   ],
   famousFoods: [
    { name: "Bisi Bele Bath",image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/bisi-bele-bath-recipe.jpg" , description: "Bisi bele bhath is a spicy, rice-based dish with origins in the state of Karnataka, India.It is said to have originated in the Mysore Palace."},
    { name: "Mysore Pak",image: "https://static.wixstatic.com/media/8fd501_243e6c5eb8c14acd800ef3cfb2624b42~mv2.jpeg/v1/fill/w_642,h_502,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-empty-state.jpeg" , description: "Mysore Pak is a type of mithai (sweetmeat) from India. It is prepared with only three ingredients: ghee, sugar and besan."},
    { name: "Ragi Mudde",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL5IjW_SLdYMnrZxogCc1sGVN2889HglUtbg&s" , description: "Ragi Mudde, also known as finger millet balls, is a traditional South Indian dish, particularly popular in Karnataka, made from ragi (finger millet) flour and water."},
    { name: "Coorgi Pandi Curry",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpWPJae2oozZGjRWlDisMHLhkAHm41ZBQuBg&s" , description: "Pandi curry is an emblematic, celebratory dish, cooked on every special social occasion in Kodagu."},
    { name: "Dosa",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7P9-ECimzMDQMWGiu2XnSWErvEqRmz5rTaw&s" , description: "Dosa is a thin, crispy crepe-like pancake from South India, typically made from a fermented batter of rice and black lentils."}
   ]
   },
  {
   name: "Kerala",
    image: "https://travloger.in/wp-content/uploads/2024/04/wp7877187-alappuzha.jpg",
    description: "Known for its backwaters, beaches, and lush greenery.",
    bestTime: "September to March",
   topDestinations: [
     { name: "Munnar",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT45G3rGGmDmTz9durTZ5oAbDLrK6xZqxCB1w&s" , description: "Munnar is a town in the Western Ghats mountain range in India’s Kerala state. A hill station and former resort for the British Raj elite, it's surrounded by rolling hills dotted with tea plantations established in the late 19th century."},
     { name: "Alleppey",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa14-2LEratGJgZH1jTuG6wVKNs9lXccKA2w&s" , description: "Alappuzha (or Alleppey) is a city on the Laccadive Sea in the southern Indian state of Kerala. It's best known for houseboat cruises along the rustic Kerala backwaters, a network of tranquil canals and lagoons."},
     { name: "Kochi",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGCIQa18ayW4QmSXE9dpArrDRLl7-HlL6dUA&s" , description: "Kochi (also known as Cochin) is a city in southwest India's coastal Kerala state. It has been a port since 1341, when a flood carved out its harbor and opened it to Arab, Chinese and European merchants."},
     { name: "Wayanad",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSRK8RnOWa6bVnmDcgZND7put-P9BPZUes9w&s" , description: "Wayanad is a rural district in Kerala state, southwest India. In the east, the Wayanad Wildlife Sanctuary is a lush, forested region with areas of high altitude, home to animals including Asiatic elephants, tigers, leopards and egrets."},
     { name: "Kovalam",image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/01KovalamBeach%26Kerala.jpg/330px-01KovalamBeach%26Kerala.jpg" , description: "Kovalam is a popular beach town located in the southern Indian state of Kerala, near the city of Thiruvananthapuram."}
   ],
   famousFoods: [
    { name: "Appam with Stew",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvtf075Od24cE9fNER2L5XFxiZWHaLOTIJJQ&s" , description: "Appam and Vegetable Stew is a traditional South Indian dish that consists of soft, spongy appams served with a fragrant and mildly spiced vegetable stew."},
    { name: "Kerala Sadya",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHU0pr4TQN1o2Y03XRNpXfSROveJLvh3c79w&s" , description: "Kerala Sadya is a traditional vegetarian feast of Kerala, typically served on a banana leaf for special occasions like Onam and Vishu, and also for weddings and other celebrations."},
    { name: "Puttu and Kadala Curry",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0XSIdUGs4C7oqSdrnSMbJhAFXl9dMUPqZbw&s" , description: "Puttu is a steamed rice cake from Kerala, made with rice flour and grated coconut, often served in cylindrical shapes. Kadala curry is a black chickpea curry, a popular pairing with puttu."},
    { name: "Fish Moilee",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQILOyfOUG_WlWNcgjRIv3K_xP4KvWIgZBxRA&s" , description: "Fish moilee is a spicy fish and coconut dish of possible Portuguese or Indian origin. It is common in India, Malaysia and Singapore."},
    { name: "Malabar Parotta",image: "https://i0.wp.com/www.chitrasfoodbook.com/wp-content/uploads/2015/02/kerala-parotta.jpg?w=1200&ssl=1" , description: "Parotta is a layered Indian flatbread made from refined flour, eggs and oil. It is commonly seen in South India, especially in the states of Kerala."}
   ]
   },
  {
   name: "Madhya Pradesh",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/gwalior-fort-gwalior-madhya-pradesh-city-1-hero?qlt=82&ts=1726675024634",
    description: "Rich in historical sites, wildlife, and cultural heritage.",
    bestTime: "October to March",
   topDestinations: [
     { name: "Khajuraho",image: "https://media.assettype.com/outlooktraveller/2024-09-28/f6onhspi/shutterstock2152949513.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true" , description: "The Khajuraho Group of Monuments are a group of Hindu and Jain temples in Chhatarpur district, Madhya Pradesh, India."},
     { name: "Bhopal",image: "https://s7ap1.scene7.com/is/image/incredibleindia/2-taj-ul-masajid-bhopal-mp-city-hero?qlt=82&ts=1726671322602" , description: "Bhopal is a city in the central Indian state of Madhya Pradesh. It's one of India’s greenest cities. There are two main lakes, the Upper Lake and the Lower Lake."},
     { name: "Pachmarhi",image: "https://synques-cdn.s3.ap-south-1.amazonaws.com/golfview.in/images/chauragarh14.jpg" , description: "Pachmarhi, also known as Satpura ki Rani, is a hill station in the central Indian state of Madhya Pradesh. Its many waterfalls include Apsara Vihar, with its calm pool, and soaring, single-drop Silver Fall nearby."},
     { name: "Sanchi Stupa",image: "https://cdn.britannica.com/36/155836-050-89E7AA9E/Great-Stupa-Sanchi-India.jpg" , description: "The Sanchi Stupa is a significant Buddhist monument and a UNESCO World Heritage Site located in Sanchi, Madhya Pradesh."},
     { name: "Bandhavgarh National Park",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbwYCdiH9N7JxNsgeOjU6mV0mlqq9Ooc1IlQ&s" , description: "Bandhavgarh National Park, located in the Umaria district of Madhya Pradesh, India, is renowned for its high tiger density and is a popular destination for wildlife enthusiasts."}
   ],
   famousFoods: [
    { name: "Poha",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7X67YW9LnDC2uJFIrgz3um_EfRFGSI8KtmA&s" , description: "Poha(Flattened rice) is a preparation of rice made from raw, toasted, or parboiled rice grains pounded into flat flakes."},
    { name: "Bhutte Ka Kees",image: "https://images.squarespace-cdn.com/content/v1/578753d7d482e9c3a909de40/1663559333407-EPZD6M7BYOZ04P5DZWEH/cornkeesrecipe.jpeg?format=2500w" , description: "Bhutte Ka Kees is prepared with fresh and tender sweet corn kernels that is first grated and then cooked with fragrant spices and herbs."},
    { name: "Dal Bafla",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ053EQc4wW9lQj-gu5IRLse29DO09CDS_viA&s" , description: "Dal Bafla, a traditional dish from the state of Madhya Pradesh, consists of a combination of dal (lentils) and bafla (hard, baked dough balls)."},
    { name: "Jalebi",image: "https://swagathfoods.com.au/cdn/shop/articles/Screenshot_2023-10-09_at_2.15.42_AM.png?v=1696797958&width=1000" , description: "Jalebi is a popular Indian and Middle Eastern sweet snack made by frying a batter into twisted or spiral shapes and then soaking them in sugar syrup."},
    { name: "Malpua",image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/malpua-recipe.jpg" , description: "Malpua is a famous dish during the Muslim holy month of Ramadan. Muslim families across India, as well as Pakistan prepare malpuas for iftar (meal to break the fast)."}
   ]
   },
  {
   name: "Maharastra",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/1-gateway-of-india-state-hero?qlt=82&ts=1726670249199",
    description: "Known for its vibrant cities, historical monuments, and coastline",
    bestTime: "November to February",
   topDestinations: [
     { name: "Mumbai",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT0Ig18IkK223B6bPEgT_YbzSLW8jkcEu99g&s" , description: "Mumbai is India's financial capital, known for its vibrant culture, iconic landmarks like the Gateway of India, and the Bollywood film industry."},
     { name: "Pune",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrT52ePR_K1vKrhg43ent8UxC9jNongUcZ6A&s" , description: "Pune is a city in Maharashtra known for its educational institutions, IT industry, and rich cultural heritage, including the Shaniwar Wada fort."},
     { name: "Ajanta and Ellora Caves",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0a6eNoRtMVO18H4os0ugvR_WSO-Snibtu-A&s" , description: "The Ajanta and Ellora Caves are UNESCO World Heritage Sites in Maharashtra, renowned for their ancient rock-cut Buddhist, Jain, and Hindu temples and intricate sculptures."},
     { name: "Lonavala",image: "https://d3sftlgbtusmnv.cloudfront.net/blog/wp-content/uploads/2024/10/Places-to-Visit-in-Lonavala-OG-Cover-840x425.jpg" , description: "Lonavala is a popular hill station in Maharashtra, known for its scenic beauty, monsoon charm, and delicious chikki sweets."},
     { name: "Mahabaleshwar",image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/ab/40/f8/very-beautiful-hill-station.jpg?w=600&h=-1&s=1" , description: "Mahabaleshwar is a picturesque hill station in Maharashtra, famous for its strawberry farms, scenic views, and ancient Mahabaleshwar Temple."}
   ],
   famousFoods: [
    { name: "Vada Pav",image: "https://ministryofcurry.com/wp-content/uploads/2024/06/vada-pav-3.jpg" , description: "Vada Pav is a popular Mumbai street food, consisting of a deep-fried potato dumpling served in a bread bun with spicy chutneys."},
    { name: "Pav Bhaji",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgaCo8MyoCR2OLwt9h1CJV5gfSmJX2XEV55w&s" , description: "Pav Bhaji is a popular Indian street food, consisting of a spicy vegetable curry served with buttered bread rolls (pav)."},
    { name: "Puran Poli",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSicKjwOzcwxWilZRPSkeR_Ys6hItOIBac45w&s" , description: "Puran Poli is a traditional Maharashtrian sweet flatbread, made with stuffed jaggery and gram flour filling, often served during festivals."},
    { name: "Misal Pav",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5PYFMqsQz1FwGhNsPwW8Nk-FO9y_-QxZGcg&s" , description: "Misal Pav is a popular Maharashtrian street food, consisting of spicy curry made with sprouted lentils, topped with farsan, and served with bread (pav)."},
    { name: "Modak",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFkVe7_CAyDzOE0jj2kAg95IDoBHzuLs5GaQ&s" , description: "Modak is a traditional Maharashtrian sweet dumpling, typically filled with coconut and jaggery, and is a favorite offering of Lord Ganesha."}
   ]
   },
  {
   name: "Manipur",
    image: "https://www.beautyofindia.in/wp-content/uploads/2017/08/manipur.jpg",
    description: "Known for its classical dance, scenic beauty, and unique culture.",
    bestTime: "October to March",
   topDestinations: [
     { name: "Imphal",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG2Id29agLKT3pdVCeHQsHcHe8tuGcU1p57A&s" , description: "Imphal is the capital city of Manipur, known for its rich cultural heritage, historic sites like Kangla Fort, and vibrant traditional dances."},
     { name: "Loktak Lake",image: "https://img-cdn.publive.online/fit-in/640x430/filters:format(webp)/bw-travel/media/media_files/2025/05/15/Ixn6qd9m52TpTViMKO5N.png" , description: "Loktak Lake is the largest freshwater lake in Northeast India, located in Manipur, famous for its floating phumdis and diverse wildlife."},
     { name: "Kangla Fort",image: "https://s7ap1.scene7.com/is/image/incredibleindia/kangla-fort-imphal-manipur-1-attr-hero?qlt=82&ts=1727354841373" , description: "Kangla Fort is a historic fort in Imphal, Manipur, known for its rich cultural significance, ancient architecture, and association with Manipur's royal history."},
     { name: "Keibul Lamjao National Park",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ddnz0p5Aj5VOd_hfkYvqCnhkrzA5QS4flA&s" , description: "Keibul Lamjao National Park is a unique national park in Manipur, famous for being the only floating national park in the world, home to the endangered Manipur brow-antlered deer (Sangai)."},
     { name: "Shirui Hill",image: "https://static.wixstatic.com/media/b9d1b5_b4b5ff9460624f19a7d449c43d77a08b~mv2.jpg/v1/fill/w_568,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/b9d1b5_b4b5ff9460624f19a7d449c43d77a08b~mv2.jpg" , description: "Shirui Hill is a notable landmark in Manipur's Ukhrul district, famous for its stunning views and the rare Shirui Lily flowers that bloom in spring."}
   ],
   famousFoods: [
    { name: "Eromba",image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Yongchaak_eromba_%282%29.jpg/1200px-Yongchaak_eromba_%282%29.jpg" , description: "Eromba is a traditional Manipuri dish made with fermented fish, potatoes, and chilies."},
    { name: "Singju",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdz7_y6JV-RRaxXBXbpcbxLUsFejKfihwS2A&s" , description: "Singju is a traditional Manipuri salad made with a mix of fresh vegetables, herbs, and sometimes fish or meat, flavored with ngari (fermented fish)."},
    { name: "Chamthong",image: "https://img-global.cpcdn.com/recipes/988715c2f9010b32/400x400cq90/photo.jpg" , description: "Chamthong is a traditional Manipuri vegetable stew made with local greens and herbs."},
    { name: "Chak-hao Kheer",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAoOkxFsSsy_FmURshUobXX07JPvSe9Ij5aQ&s" , description: "Chak Hao Kheer is a traditional Manipuri dessert made with black rice, milk, and sweeteners."},
    { name: "Nga Thongba",image: "https://images.slurrp.com/prodrich_article/ifxhlia5rp.webp?impolicy=slurrp-20210601&width=1200&height=675" , description: "Nga Thongba is a traditional Manipuri fish curry made with local fish and ngari (fermented fish paste)."}
   ]
   },
  {
   name: "Meghalaya",
    image: "https://images.unsplash.com/photo-1609276804051-8c5e906cc430?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lZ2hhbGF5YXxlbnwwfHwwfHx8MA%3D%3D",
    description: "The 'abode of the clouds', known for its rainfall, caves, and living root bridges.",
    bestTime: "October to April",
   topDestinations: [
     { name: "Shillong",image: "https://thrillingtravel.in/wp-content/uploads/2017/12/IMG_8462.jpg" , description: "Shillong is a hill station in northeast India and capital of the state of Meghalaya. It’s known for the manicured gardens at Lady Hydari Park."},
     { name: "Cherrapunji",image: "https://s7ap1.scene7.com/is/image/incredibleindia/double-decker-living-root-bridge-cherrapunjee-meghalaya-city-ff?qlt=82&ts=1726666202571" , description: "Cherrapunjee, also known as Sohra, is a high-altitude town in the northeast Indian state of Meghalaya. It's known for its living root bridges, made from rubber trees."},
     { name: "Dawki",image: "https://nomadicweekends.com/blog/wp-content/uploads/2019/09/66851483_2355591914534526_8824396371357335552_o.jpg" , description: "Dawki is renowned for its stunning Umngot River, known for its crystal-clear, almost transparent waters. It's also famous for the picturesque landscapes, serene ambiance, and cultural attractions like the Dawki Bridge and Mawlynnong Village."},
     { name: "Mawlynnong",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU_RIP1fF5SvNCF4IqOQV1uFr2LJq2sBa9jw&s" , description: "Mawlynnong is a village in the East Khasi Hills district of the Meghalaya state in North East India. It is notable for its cleanliness and also was chosen by Discover India magazine as Asia's cleanest village."},
     { name: "Nohkalikai Falls",image: "https://res.cloudinary.com/kmadmin/image/upload/v1618830536/kiomoi/Cherrapunji_Nohkalikai_Waterfalls_1618830535578.jpg" , description: "Nohkalikai Falls is the tallest plunge waterfall in India. The 340 metres waterfall is located in the Indian state of Meghalaya, near Cherapunji, one of the wettest places on Earth."}
   ],
   famousFoods: [
    { name: "Jadoh",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqGXyTCFAxxzdzghuRN0Id4HqUflXRURXiHA&s" , description: "Jadoh is a traditional Meghalayan dish, particularly popular among the Khasi people. It's a rice-based dish, often made with pork, and traditionally includes pork blood for a unique flavor."},
    { name: "Dohneiiong",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR5Bw4Mz0jbom3UuJR3EWEoop8phKtLbPPDg&s" , description: "Dohneiiong is a pork dish from Meghalaya which is one of the North East State of India. Dohneiiong is a very famous dish served on different occasions. It is pork cooked with black sesame seeds."},
    { name: "Tungrymbai",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0pYPMz18oN8mHffOLfjBp1XshM00By33AA&s" , description: "Tungrymbai is a traditional fermented soybean dish from Meghalaya, Northeast India, popular among the Khasi and Jaiñtia tribes. It's a rich source of protein and has a unique flavor and texture."},
    { name: "Pumaloi",image: "https://assets.simplotel.com/simplotel/image/upload/x_0,y_41,w_800,h_450,r_0,c_crop,q_80,fl_progressive/w_500,f_auto,c_fit/hotel-polo-towers/pumaloi-dish-min_kfznxg" , description: "Pumaloi is a traditional Khasi rice cake from Meghalaya, India, made with powdered rice and cooked in a special pot called Khiew Ranei. It's often served during public celebrations and festivals, and its taste varies slightly depending on the region within Meghalaya."},
    { name: "Nakham Bitchi",image: "https://static.india.com/wp-content/uploads/2023/12/Nakham-Bitchi.png" , description: "Nakham Bitchi is a popular Meghalayan dish, specifically a Garro delicacy, that is a spicy soup or stew often made with fermented dry fish and vegetables."}
   ]
   },
  {
   name: "Mizoram",
    image: "https://mediaim.expedia.com/destination/2/9f329029ab242fa85ad3a5b99186d8f6.jpg",
    description: "Known for its rolling hills, dense forests, and unique culture.",
    bestTime: "October to March",
   topDestinations: [
     { name: "Aizawl",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAlH7ehPEX-1hVHW6IRSKbj0cJymWZJ61G1g&s" , description: "Aizawl, formerly known as Aijal, is the capital city and the most populous city of Mizoram, India. It is also the third largest city in northeast India."},
     { name: "Reiek",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLL_XXzgECQjgBOrlBhGxCHtCaHm2-I-DHYA&s" , description: "Reiek is a mountain and tourist spot 29 km from Aizawl, Mizoram, India. It rests at an elevation of 1,465 metres overlooking Aizawl and offers a view of the surrounding valleys and hills."},
     { name: "Dampa Tiger Reserve",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXojkbIGAZ6ATY2IT4uXayEdQCWU0oWaFqQA&s" , description: "Dampa Tiger Reserve or Dampha Tiger Reserve is a tiger reserve of western Mizoram, India. It covers an area of about 500 km² in the Lushai Hills at an elevation of 800–1,100 m."},
     { name: "Vantawng Falls",image: "https://cdn.s3waas.gov.in/s36766aa2750c19aad2fa1b32f36ed4aee/uploads/bfi_thumb/2018081697-olw8z0svast2qbduijnqbw1gc2b4p4jezlkc1cbg5m.jpg" , description: "The Vantawng Khawhthla is located 5 kilometres south of Thenzawl in Serchhip district in the Indian state of Mizoram. It is the highest uninterrupted waterfall in Mizoram. It is about 92 kilometres away from Aizawl."},
     { name: "Palak Lake",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtClMsaNRldI--UE_geYxv--7Aia-_7hhLaw&s" , description: "Palak Dil or Pala Tipo is the largest and biggest lake in Mizoram, northeast India. It is located near Phura village in Siaha district, within the Mara Autonomous District Council in the southernmost district of Mizoram."}
   ],
   famousFoods: [
    { name: "Bai",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp_EOwMp7SbKDyUwXouvIigURYsIaEhA9DIg&s" , description: "Bai is a signature dish of the Mizos. It is a stew prepared out of an assortment of vegetables."},
    { name: "Vawksa Rep",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvWSEqPhLZh48WQqfK8VUqY8IF3t3Io03hcA&s" , description: "Vawksa Rep or smoked pork is a dish that is loved by not only the Mizo habitants, which is made of pork cubes, flavoured with herbs but also all food lovers, saw chair is another item prepared from rice and pork."},
    { name: "Chhangban",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhjf_6F-F98irObR4WmL0ERyHDGgXc5NYKEQ&s" , description: "Chhangban is a Mizo delicacy made from sticky rice, pounded into a coarse powder, and steamed. It's often enjoyed with molasses or pounded sesame seeds, and is a popular tea snack in Mizoram."},
    { name: "Sawhchiar",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvEp7hvo7-b1grsxJhjHkMstLmtoi-YI-nqQ&s" , description: "It is a famous traditional dish that is made of rice, paneer, and salt which originated in Mizoram."},
    { name: "Arsa Buhchiar",image: "https://s7ap1.scene7.com/is/image/incredibleindia/arsa-buhchiar-aizawl-mizoram-1-blog-gas-hero?qlt=82&ts=1727159770702" , description: "Arsa buhchiar is a savory dish from Mizoram, a state in Northeast India, known for its distinct Mizo cuisine. It's essentially a chicken porridge, featuring tender chicken meat, aromatic rice, and locally sourced herbs and spices."}
   ]
   },
  {
   name: "Nagaland",
    image: "https://pbs.twimg.com/media/F8EU8ZibAAAnTiB.jpg",
    description: "Known for its vibrant tribal culture and festivals.",
    bestTime: "October to May",
   topDestinations: [
     { name: "Kohima",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnv34lM2G4UK45JsytcxARxFv_1DNqYn2QLg&s" , description: "Kohima is the scenic capital of Nagaland, known for its rich tribal culture and World War II history."},
     { name: "Dzukou Valley",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa9hbMBuA24-bAQneV2Ogj6ZbfEnkfouJubg&s" , description: "Dzukou Valley is a breathtaking alpine valley famous for its rolling green hills and seasonal wildflowers."},
     { name: "Mokokchung",image: "https://static2.tripoto.com/media/filter/tst/img/OgData/1516603698_1515401971_screen_shot_2018_01_08_at_1_27_46_pm_fotor.png" , description: "Mokokchung is a cultural hub of the Ao Naga tribe, known for its vibrant traditions and scenic landscapes."},
     { name: "Mon",image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Mon-Nagaland-Jim-Ankan-Deka-photography.jpg" , description: "Mon is a district in Nagaland famed for its unique Konyak tribal heritage and traditional headhunting history."},
     { name: "Wokha",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuQyR52h5yK0KnYXeQ06EZL99McKSGtaOPhw&s" , description: "Wokha literally means head count or census in the Lotha language. It has a population of 35,004 and is predominantly inhabited by the Lotha Nagas."}
   ],
   famousFoods: [
    { name: "Smoked Pork",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn-Dlps1E-NIoPNtLis5NAbRVhAu_VS9eagQ&s" , description: "Smoked pork is a flavorful meat dish cured and smoked to infuse a rich, smoky taste."},
    { name: "Axone",image: "https://c.ndtvimg.com/2020-10/8ancjmbg_axone_625x300_13_October_20.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886" , description: "Axone is a traditional fermented soybean delicacy from Nagaland with a strong, pungent aroma and savory flavor."},
    { name: "Galho",image: "https://images.slurrp.com/prodarticles/a9ubhrjcb34.webp" , description: "Galho is a comforting Naga rice and vegetable stew, often cooked with meat or fish."},
    { name: "Naga Chili Sauce",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ufVEoqfEIKBylVTb1z5rXJnVtzYPgO7inA&s" , description: "Naga chili sauce is a fiery and tangy condiment made from the world’s hottest Naga chilies, adding intense heat to dishes."},
    { name: "Pork Curry",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7e8JuGDczAHzxylfqDg5XgysKUOt0avV4aA&s" , description: "Pork curry is a spicy and hearty Naga dish simmered with aromatic herbs and local spices."}
   ]
   },
  {
   name: "Odisha",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/1-lingaraj-temple-bhubaneshwar-odisha-city-hero?qlt=82&ts=1726663559461",
    description: "Known for its ancient temples, beaches, and classical dance.",
    bestTime: "October to March",
   topDestinations: [
     { name: "Puri",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfS1wNjoxkd4TQLMrpI45c0oBJOlrNDhYWBg&s" , description: "Puri is a famous coastal city in Odisha, known for its historic Jagannath Temple and beautiful beaches."},
     { name: "Konark Sun Temple",image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/16/92/b7/konarak-sun-temple.jpg?w=900&h=500&s=1" , description: "Konark Sun Temple is a 13th-century architectural marvel in Odisha, shaped like a colossal chariot dedicated to the Sun God."},
     { name: "Bhubaneswar",image: "https://s7ap1.scene7.com/is/image/incredibleindia/1-lingaraj-temple-bhubaneshwar-odisha-city-hero?qlt=82&ts=1726663559461" , description: "Bhubaneswar is the capital of Odisha, renowned for its ancient temples and vibrant cultural heritage."},
     { name: "Chilika Lake",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmYzyIkNWCIlD2i7vZIlTZNfueC7-pyYO7QA&s" , description: "Chilika Lake is Asia’s largest coastal lagoon, famous for its rich biodiversity and migratory bird sanctuary."},
     { name: "Similipal National Park",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAEwShCoYAJtzcPVwu2T1dpVPZFlHPMQ7Aw&s" , description: "Similipal National Park is a lush wildlife sanctuary in Odisha, home to tigers, elephants, and diverse flora."}
   ],
   famousFoods: [
    { name: "Dahi Bara Aloo Dum",image: "https://i.pinimg.com/736x/39/bf/9a/39bf9a819cad7c1de3b4e13708ec7f96.jpg" , description: "Dahi Bara Aloo Dum is a popular Odia snack featuring soft lentil dumplings in spiced yogurt paired with flavorful potato curry."},
    { name: "Rasgulla",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSob3EerZuChoGLlNXmz5-YZSC4-W-fmFxXSA&s" , description: "Rasgulla is a soft, spongy Indian dessert made from ball-shaped chhena soaked in sugary syrup."},
    { name: "Pakhala Bhata",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXlPXRRBt8Q1QH1Y4cE_WMG-dRwmdGOk9VIQ&s" , description: "Pakhala Bhata is a traditional Odia fermented rice dish served chilled, perfect for beating the heat."},
    { name: "Chhena Poda",image: "https://www.bigbasket.com/media/uploads/recipe/w-l/4570_2_1.jpg" , description: "Chhena Poda is a delicious baked Indian cheesecake from Odisha made with caramelized cottage cheese and sugar."},
    { name: "Macha Tarkari",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLhb54dN-Gdn1Y4oJGZX5Q1lAX9kYVIQ_WRQ&s" , description: "Macha Tarkari is a flavorful Odia fish curry cooked with spices, mustard, and fresh vegetables."}
   ]
   },
  {
   name: "Punjab",
    image: "https://plus.unsplash.com/premium_photo-1697730324062-c012bc98eb13?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHVuamFifGVufDB8fDB8fHww",
    description: "Known for its fertile lands, vibrant culture, and historical sites.",
    bestTime: "October to March",
   topDestinations: [
     { name: "Amritsar",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw-NVXhlhlDybV5YQCVr0jPe9FQny3JLm4mA&s" , description: "Amritsar is a vibrant city in Punjab, famous for the Golden Temple and rich Sikh heritage."},
     { name: "Chandigarh",image: "https://s7ap1.scene7.com/is/image/incredibleindia/chandigarh-union-territory-1-city-ff?qlt=82&ts=1726738895064" , description: "Chandigarh is a modern planned city known for its architecture by Le Corbusier and lush gardens."},
     { name: "Patiala",image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/NSNIS.png" , description: "Patiala is a historic city in Punjab, celebrated for its royal heritage, traditional turbans, and rich cuisine."},
     { name: "Jalandhar",image: "https://s7ap1.scene7.com/is/image/incredibleindia/devi-talab-temple-jalandhar-punjab-city-1-hero?qlt=82&ts=1726674723802" , description: "Jalandhar is an industrial and cultural city in Punjab, known for its sports goods manufacturing and vibrant festivals."},
     { name: "Ludhiana",image: "https://s7ap1.scene7.com/is/image/incredibleindia/alamgir-gurudwara-ludhiana-punjab-2-attr-hero?qlt=82&ts=1726661908640" , description: "Ludhiana is Punjab’s largest city, famous for its textile industry and lively street food scene."}
   ],
   famousFoods: [
    { name: "Butter Chicken",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQfysu3jzv-y7psPTFkWdSQpZPFyr0qjd3jw&s" , description: "Butter chicken is a creamy, mildly spiced North Indian chicken curry cooked in a rich tomato and butter sauce."},
    { name: "Sarson Ka Saag",image: "https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2024/Sarson_ka_saag_recipe_authentic_archanas_kitchen.jpg" , description: "Sarson ka Saag is a traditional Punjabi dish made from mustard greens, slow-cooked with spices and served with makki di roti."},
    { name: "Amritsari Kulcha",image: "https://static.toiimg.com/thumb/62376759.cms?imgsize=890054&width=800&height=800" , description: "Amritsari Kulcha is a crispy, stuffed flatbread from Amritsar, filled with spiced potatoes and served with butter and chutney."},
    { name: "Chole Bhature",image: "https://thewhiskaddict.com/wp-content/uploads/2024/08/IMG_0727-4-scaled.jpg" , description: "Chole Bhature is a popular North Indian combo of spicy chickpea curry paired with fluffy deep-fried bread."},
    { name: "Lassi",image: "https://www.sharmispassions.com/wp-content/uploads/2023/08/sweet-lassi5.jpg" , description: "Lassi is a refreshing yogurt-based drink from India, often sweetened or flavored with spices like cardamom."}
   ]
   },
  {
   name: "Rajasthan",
    image: "https://img.nayatrip.com/images/state/big/RAJASTHAN.jpg",
    description: "Known for its royal palaces, forts, and vibrant culture.",
    bestTime: "November to February",
   topDestinations: [
     { name: "Jaipur",image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg/1200px-East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg" , description: "Jaipur, the Pink City of Rajasthan, is famous for its royal palaces, vibrant bazaars, and rich cultural heritage."},
     { name: "Udaipur",image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Udaipur_City_Palace.jpg" , description: "Udaipur is a romantic city in Rajasthan known for its stunning lakes, majestic palaces, and rich history."},
     { name: "Jodhpur",image: "https://s7ap1.scene7.com/is/image/incredibleindia/jodhpur-hero?qlt=82&ts=1726661024132" , description: "Jodhpur, the Blue City of Rajasthan, is famous for its imposing Mehrangarh Fort and vibrant old town."},
     { name: "Jaisalmer",image: "https://lp-cms-production.imgix.net/2025-01/GettyImages-2099208947-cropped.jpg?auto=format,compress&q=72&w=1440&h=810&fit=crop" , description: "Jaisalmer is the Golden City of Rajasthan, renowned for its sandstone fort, desert landscapes, and rich heritage."},
     { name: "Mount Abu",image: "https://assets.cntraveller.in/photos/669120910f15e089fb0cd3f1/16:9/w_5616,h_3159,c_limit/1206473179" , description: "Mount Abu is Rajasthan’s only hill station, known for its cool climate, scenic views, and the Dilwara Jain Temples."}
   ],
   famousFoods: [
    { name: "Dal Baati Churma",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6gMaYPBHpyjIDiJmJGK3ZrRmwbck83mMzjg&s" , description: "Dal Batti Churma is a traditional Rajasthani dish combining lentils, baked wheat balls, and sweet crushed wheat."},
    { name: "Ghevar",image: "https://www.cookwithmanali.com/wp-content/uploads/2016/08/Ghevar-Indian-Sweet-500x500.jpg" , description: "Ghevar is a traditional Rajasthani sweet made from flour, soaked in sugar syrup, and often topped with rabri or dry fruits."},
    { name: "Laal Maas",image: "https://swatisani.net/kitchen/wp-content/uploads/2015/11/IMG_9546.jpg" , description: "Laal Maas is a fiery Rajasthani mutton curry made with red chilies and aromatic spices."},
    { name: "Kachori",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgjsslRg8kahVtnsRTLj3mCqkJFYkEVnI7DQ&s" , description: "Kachori is a crispy, deep-fried Indian snack filled with spicy lentils, peas, or potato mixtures."},
    { name: "Mirchi Bada",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQksSm0o9hYeYna1kbtWuFsnYkCpI5WxT2FEA&s" , description: "Mirchi Bada is a spicy Rajasthani snack made of large green chilies stuffed with masala and deep-fried in gram flour batter."}
   ]
   },
  {
   name: "Sikkim",
    image: "https://storage.justwravel.com/package/images/banner/detail_mobile/cropped/8-night-9-days-sikkim-package-with-lachung-pelling-JustWravel-1597388094.jpg.webp",
    description: "Known for its Himalayan landscapes, monasteries, and biodiversity.",
    bestTime: "March to May, October to November",
   topDestinations: [
     { name: "Gangtok",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg1mBTpcTolndnp9xq-oU2rhODjn1uNtxzNg&s" , description: "Gangtok is the capital of the mountainous northern Indian state of Sikkim. Established as a Buddhist pilgrimage site in the 1840s, the city became capital of an independent monarchy after British rule ended, but joined India in 1975."},
     { name: "Pelling",image: "https://assets.zeezest.com/blogs/PROD_Indulge%20In%20The%20Sikkimese%20Legacy%20With%20Some%20Of%20The%20Top%20Places%20To%20Visit%20In%20Pelling%20%281%29_1723563550195.jpg" , description: "Pelling is a small town in the northeastern Indian state of Sikkim, at the foothills of Mount Khangchendzonga. The late-17th-century Buddhist Sanga Choling Monastery has mountain views."},
     { name: "Tsongmo Lake",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB9zpev6mUf1fsQxBR7-AdYvfM2XnjBhYsnw&s" , description: "Tsomgo Lake, also known as Tsongmo Lake or Changu Lake, is a glacial lake in the East Sikkim district of the Indian state of Sikkim, some 40 kilometers (25Â mi) from the capital Gangtok."},
     { name: "Yumthang Valley",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgqM7R_9pYg6HreJSJrFDuzxvIMd7kosxMtA&s" , description: "The Yumthang Valley or Sikkim Valley of Flowers sanctuary, is a nature sanctuary with river, hot springs, yaks and grazing pasture on rolling meadows surrounded by the Himalayan mountains in Yumthang in the Mangan district of Sikkim state in India."},
     { name: "Nathula Pass",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTabV1sHxuRhQksWheVBz-ieobL1703hp_-9A&s" , description: "Nathu La is a mountain pass in the Dongkya Range of the Himalayas between China's Yadong County in Tibet, and the Indian states of Sikkim."}
   ],
   famousFoods: [
    { name: "Momos",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSErbNdDlgEP4rQ5SuEct4xbctioX7TWfasMw&s" , description: "Momos are a type of steamed filled dumpling in Tibetan and Nepali cuisine that is also popular in neighbouring Bhutan, Bangladesh, and India."},
    { name: "Thukpa",image: "https://junifoods.com/wp-content/uploads/2024/05/The-Best-Chicken-Thukpa-Tibetan-Noodle-Soup-%E0%A4%95%E0%A5%81%E0%A4%96%E0%A5%81%E0%A4%B0%E0%A4%BE%E0%A4%95%E0%A5%8B-%E0%A4%A5%E0%A5%81%E0%A4%95%E0%A5%8D%E0%A4%AA%E0%A4%BE--500x500.jpg" , description: "Thukpa is a traditional Tibetan noodle soup, originating in eastern Tibet."},
    { name: "Gundruk",image: "https://junifoods.com/wp-content/uploads/2023/07/Gundruk-High-Nutrition-Fermented-Greens-%E0%A4%97%E0%A5%81%E0%A4%A8%E0%A5%8D%E0%A4%A6%E0%A5%8D%E0%A4%B0%E0%A5%81%E0%A4%95-1.jpg" , description: "Gundruk is a traditional Nepali fermented food made from leafy green vegetables, typically mustard or radish leaves."},
    { name: "Phagshapa",image: "https://i.pinimg.com/736x/e7/74/1f/e7741f0dff03c090a73c85809850504f.jpg" , description: "Phagshapa is a popular pork-based dish from Sikkim, India, known for its spicy and flavorful combination of pork, radish, and dried red chillies."},
    { name: "Sel Roti",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkk6vixZcfTdi7JUYJ3_Bxbds16if72FEosQ&s" , description: "Sel roti is a traditional Nepalese sweet, ring-shaped, fried dough dish made from rice flour."}
   ]
   },
  {
   name: "Tamil Nadu",
    image: "https://images.blacktomato.com/2015/02/Tamil-Nadu.jpg?auto=compress%2Cformat&fit=crop&h=800&ixlib=php-3.3.1&q=82&w=1520&s=a9c82c17b443e42a650ed17dbf7cf41c",
    description: "Known for its ancient temples, classical arts, and cuisine.",
    bestTime: "November to March",
   topDestinations: [
     { name: "Chennai",image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Chennai_Central.jpg" , description: "Chennai is the capital of Tamil Nadu, known for its rich cultural heritage, classical music, and Marina Beach."},
     { name: "Madurai",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8yeSMn5v5i7Ew371WYD9ReJUROsgfxTQxIA&s" , description: "Madurai is an ancient city in Tamil Nadu famed for the majestic Meenakshi Amman Temple and vibrant Tamil culture."},
     { name: "Ooty",image: "https://clubmahindra.gumlet.io/blog/media/section_images/ultimate-o-8ac88a2da056a3d.jpg?w=376&dpr=2.6" , description: "Ooty is a charming hill station in Tamil Nadu, known for its tea gardens, cool climate, and scenic Nilgiri hills."},
     { name: "Kanyakumari",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoWfKk1pCgWh1t6EhYKaEH982BmkXoJ-7wtg&s" , description: "Kanyakumari is the southernmost tip of India, famous for its sunrise views and the confluence of three seas."},
     { name: "Mahabalipuram",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQetXeNbnDP0uQAG-c14mwYL624H1_4nTfaSg&s" , description: "Mahabalipuram is a coastal town in Tamil Nadu famous for its ancient rock-cut temples and intricate stone carvings."}
   ],
   famousFoods: [
    { name: "Dosa",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7P9-ECimzMDQMWGiu2XnSWErvEqRmz5rTaw&s" , description: "Dosa is a thin, crispy South Indian crepe made from fermented rice and lentil batter."},
    { name: "Idli",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzRLKvSf9bcjFHCsS42ZqnmRGQ5JtlxwZTKw&s" , description: "Idli is a soft, steamed South Indian rice cake made from fermented rice and lentil batter."},
    { name: "Pongal",image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/01/pongal-ven-pongal.jpg" , description: "Pongal is a comforting South Indian rice and lentil dish, often seasoned with black pepper and cumin."},
    { name: "Chettinad Chicken",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTASpImRvYVEQm6AmxNQeHoczOJMT30AnmEXw&s" , description: "Chettinad chicken is a spicy, aromatic South Indian chicken curry from the Chettinad region, known for its bold use of spices."},
    { name: "Filter Coffee",image: "https://www.sharmispassions.com/wp-content/uploads/2012/01/filter-coffee-recipe8.jpg" , description: "Filter coffee is a strong, aromatic South Indian coffee brewed using a metal filter and served with milk and sugar."}
   ]
   },
  {
   name: "Telangana",
    image: "https://papikondalu-tour-package.com/telangana-tourism/Papikondalu-Tour-Package-From-Hyderabad/Warangal-Fort.jpg",
    description: "Known for its historical sites, lakes, and cuisine.",
    bestTime: "October to March",
   topDestinations: [
     { name: "Hyderabad",image: "https://s7ap1.scene7.com/is/image/incredibleindia/2-charminar_hyderabad_telangana-1-city-hero?qlt=82&ts=1726653248112" , description: "Hyderabad is a historic city famous for its rich culture, iconic Charminar, and delicious biryani."},
     { name: "Warangal",image: "https://static.toiimg.com/photo/59593180.cms" , description: "Warangal is a historic city in Telangana known for its ancient Kakatiya architecture and vibrant cultural heritage."},
     { name: "Nagarjuna Sagar",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Z0SDjoOFUjlJF3d9WGb35vS6yl0nh830fg&s" , description: "Nagarjuna Sagar is a massive dam and reservoir on the Krishna River, famous for its engineering marvel and scenic surroundings."},
     { name: "Karimnagar",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUvhr-GKXkwls1z6KLF6OZS9BsagjBUFsHwg&s" , description: "Karimnagar is a city in Telangana known for its rich history, granite industries, and vibrant cultural festivals."},
     { name: "Nizamabad",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh1cZIGnvsto5VfQ6FuQmCi2xCZVEC7U_aeQ&s" , description: "Nizamabad is a city in Telangana known for its historical forts, diverse culture, and agricultural produce."}
   ],
   famousFoods: [
    { name: "Hyderabadi Biryani",image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Hyderabadi_Chicken_Biryani.jpg/960px-Hyderabadi_Chicken_Biryani.jpg" , description: "Hyderabad biryani is a flavorful, aromatic rice dish layered with spiced marinated meat and fragrant basmati rice."},
    { name: "Mirchi Ka Salaan",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzOkHYH8TJlkh6B9xtWC_djdlB8TU-6UMypQ&s" , description: "Mirchi ka Salan is a spicy Hyderabadi curry made with green chilies cooked in a tangy, nutty peanut and sesame seed gravy."},
    { name: "Haleem",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThIWVg4NNRCkzQa87YhVUNhfeh0bFAoyi6OA&s" , description: "Haleem is a rich, slow-cooked stew of meat, lentils, and wheat, popular during Ramadan in Hyderabad."},
    { name: "Osmania Biscuits",image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Subhan_osmania_biscuits.jpg/640px-Subhan_osmania_biscuits.jpg" , description: "Osmania is a famous Hyderabad bakery known for its soft, buttery Osmania biscuits and traditional snacks."},
    { name: "Double Ka Meetha",image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/03/double-ka-meetha-recipe.jpg" , description: "Double Ka Meetha is a sweet Hyderabadi bread pudding made with fried bread slices, milk, sugar, and nuts."}
   ]
   },
  {
   name: "Tripura",
    image: "https://i0.wp.com/thefloatingpebbles.com/wp-content/uploads/2025/02/IMG_1347-Edit-1024x768-1.jpg?fit=1024%2C768&ssl=1",
    description: "Known for its palaces, temples, and handicrafts.",
    bestTime: "October to March",
   topDestinations: [
     { name: "Agartala",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkvI2mejy6fVr4QtsBELKp93UlmY7yV5vYzw&s" , description: "Agartala is the capital of Tripura, known for its royal palaces and lush natural beauty."},
     { name: "Neermahal",image: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Neer-Mahal.jpg" , description: "Neermahal is a stunning water palace in Tripura, built in the middle of Rudrasagar Lake blending Hindu and Islamic architecture."},
     { name: "Unakoti",image: "https://images.moneycontrol.com/static-mcnews/2024/01/Unakoti-rocks-Tripura-2.jpg?impolicy=website&width=1600&height=900" , description: "Unakoti is an ancient hill shrine in Tripura famous for its massive rock-cut stone carvings and sculptures."},
     { name: "Jampui Hills",image: "https://knowledgeofindia.com/wp-content/uploads/2020/02/Jampui-Hill-In-Tripura.jpg" , description: "Jampui Hills in Tripura are scenic hill ranges known for their orange orchards and tribal culture."},
     { name: "Sepahijala Wildlife Sanctuary",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOVEpsxKwEISqMA2ZbxyC8u6i_2Fcrl0p7hQ&s" , description: "Sepahijala Wildlife Sanctuary in Tripura is a lush forest reserve home to diverse flora, fauna, and a famous primate rehabilitation center."}
   ],
   famousFoods: [
    { name: "Mui Borok (Bamboo Shoot)",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUCwaa6VFQIibh9th8uqq8HZx0uhDnjXIWkg&s" , description: "Mui Borok is a traditional Tripuri dish made with fermented bamboo shoots, mixed with local herbs and spices for a tangy, earthy flavor."},
    { name: "Chakhwi",image: "https://images.slurrp.com/prod/articles/wo5wpphuyik.webp" , description: "Chakhwi is a spicy Tripuri chicken stew cooked with bamboo shoots and local herbs, popular in Tripura’s tribal cuisine."},
    { name: "Berma",image: "https://migrationology.com/wp-content/uploads/2011/04/featured-burma.jpg" , description: "Berma is a traditional Tripuri fermented and dried fish, known for its strong aroma and distinctive umami flavor."},
    { name: "Wahan Mosdeng",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREfQqgN0MqCiH-Cx8SEKnbdOJ8RAfPFglLeA&s" , description: "Wahan Mosdeng is a fiery Tripuri chili chutney made from roasted red chilies and fermented fish, adding bold heat and tang to meals."},
    { name: "Bamboo Shoot Fry",image: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/divya_shivaraman/Bamboo_Shoot_Stir_Fry.jpg" , description: "Bamboo Shoot Fry is a crunchy and flavorful stir-fry dish made with tender bamboo shoots sautéed with spices and herbs."}
   ]
   },
  {
   name: "Uttarpradesh",
    image: "https://media.istockphoto.com/id/537988165/photo/varanasi.jpg?s=612x612&w=0&k=20&c=fFpEL17MiQJx5NkkNIVrTsesd2E8b04SCgzjfhUmQ7g=",
    description: "Rich in history, culture, and religious significance.",
    bestTime: "October to March",
   topDestinations: [
     { name: "Agra",image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Taj_Mahal%2C_Agra%2C_India.jpg/1200px-Taj_Mahal%2C_Agra%2C_India.jpg" , description: "Agra is a city on the banks of the Yamuna river in the Indian state of Uttar Pradesh, about 230 kilometres south-east of the national capital Delhi and 330 km west of the state capital Lucknow."},
     { name: "Varanasi",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaJPlNakQRkCiqXOZMwTHISXsIIw59iYhkAA&s" , description: "Varanasi is a city in the northern Indian state of Uttar Pradesh dating to the 11th century B.C. Regarded as the spiritual capital of India, the city draws Hindu pilgrims who bathe in the Ganges River’s sacred waters and perform funeral rites."},
     { name: "Lucknow",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG3U5ECG-iZ6xD1b4x8TzN0zE5E4OZrv_r2g&s" , description: "Lucknow, a large city in northern India, is the capital of the state of Uttar Pradesh. Toward its center is Rumi Darwaza, a Mughal gateway."},
     { name: "Mathura",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWWrUIlGIDNlH_zM66UUUMKwR-qS0TgiwLZQ&s" , description: "Mathura is a sacred city in Uttar Pradesh, northern India. The deity Lord Krishna is said to have been born on the site of Sri Krishna Janma Bhoomi, a Hindu temple."},
     { name: "Kanpur",image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/J.K._Temple.jpg/640px-J.K._Temple.jpg" , description: "Kanpur, originally named Kanhapur and formerly anglicized as Cawnpore, is the second largest city of the Indian state of Uttar Pradesh after Lucknow."}
   ],
   famousFoods: [
    { name: "Tunday Kababi",image: "https://b.zmtcdn.com/data/pictures/chains/0/19458270/33c3e8a8c101fc842a173ddd4da6eb03.jpeg" , description: "Tunday Kababi is a renowned Mughlai restaurant, particularly known for its signature dish, Tunday Kababs, which are a Lucknow specialty."},
    { name: "Petha",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCDXzhJd3WcHj57yktKHk-zF-UiklGGPohTw&s" , description: "Petha is a traditional Indian sweet candy made from ash gourd, also known as winter melon, wax gourd, or white pumpkin."},
    { name: "Bedmi Poori",image: "https://www.archanaskitchen.com//images/archanaskitchen/1-Author/Farrukh_Aziz_Ansari/Bedmi_Poori.jpg" , description: "An extremely simple and popular deep-fried crispbread recipe with spiced Black gram stuffing. It is a popular and tasty breakfast snack meal recipe."},
    { name: "Banarasi Lassi",image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Banarasi_Lassi.jpg/960px-Banarasi_Lassi.jpg" , description: "Lassi is prepared more like a dessert in Varanasi. Flavours such as pomegranate banana, papaya pineapple and apple pistachio, are quite popular here."},
    { name: "Jalebi",image: "https://static.toiimg.com/thumb/53099699.cms?width=1200&height=900" , description: "Jalebi is a popular Indian and Middle Eastern sweet snack made by frying a batter into twisted or spiral shapes and then soaking them in sugar syrup."}
   ]
   },
  {
   name: "Uttarakhand",
    image: "https://t3.ftcdn.net/jpg/05/36/92/22/360_F_536922260_RdOvY4Z5KyvGxnbTZLR9DZWz8fnrIXWm.jpg",
    description: "Nestled in the Himalayas, offers stunning mountain scenery",
    bestTime: "March to June, September to October",
   topDestinations: [
     { name: "Nainital",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuOxHSz--rvRktcubho8AgWokjjjbS_IHIaA&s" , description: "Nainital is a Himalayan resort town in the Kumaon region of India’s Uttarakhand state, at an elevation of roughly 2,000m."},
     { name: "Rishikesh",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDXMl7PPHlb55rZ7OYS0ihwoZ8l2DGjRgCMg&s" , description: "Rishikesh is a city in India’s northern state of Uttarakhand, in the Himalayan foothills beside the Ganges River. The river is considered holy, and the city is renowned as a center for studying yoga and meditation."},
     { name: "Mussoorie",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCABu_lEWD-kKuqjC008hoONbL2WoTsBDtw&s" , description: "Mussoorie is a hill station and a municipal board, in Dehradun city in the Dehradun district of the Indian state of Uttarakhand."},
     { name: "Haridwar",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm8IMNNNGZjpP_faM3Jhw4MBywYCPAZ6qjBQ&s" , description: "Haridwar is an ancient city and important Hindu pilgrimage site in North India's Uttarakhand state, where the River Ganges exits the Himalayan foothills."},
     { name: "Jim Corbett National Park",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu20OqDn9TrQ1w6N2xU5frNytpXzcqbw65YQ&s" , description: "Jim Corbett National Park is a forested wildlife sanctuary in northern India’s Uttarakhand State. Rich in flora and fauna, it’s known for its Bengal tigers."}
   ],
   famousFoods: [
    { name: "Aloo Ke Gutke",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ7IX4YvnZ0V4_6PIjqn01QMPlex6dIbWIdA&s" , description: "Aloo ke Gutke is a popular potato stir fry in the Kumaoni cuisine. This simple food is considered as an everyday dish in the households of Uttarakhand."},
    { name: "Bhatt Ki Churdkani",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBlyflHA6r4CrB0GZCOcZ9YcB9nkg8ZvBNVg&s" , description: "Bhatt Ki Churkani is a traditional recipe from the Kumaon region made from Bhatt ki dal, also known as black beans, which have a rich aroma that lingers in the room for quite a long time."},
    { name: "Bal Mithai",image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Bal_mithai.jpg" , description: "Bal mithai is a brown chocolate-like fudge, made with roasted khoya and coated with white balls made of sugar coated roasted poppy seeds."},
    { name: "Kafuli",image: "https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2017/10-oct/Uttaranchal_Style_Garwhali_Kafuli_Recipe_Spinach_Curry-9378.jpg" , description: "Kafuli is a delicacy of Uttarakhand prepared out of leafy greens such as palak (spinach) and methi (fenugreek) leaves. It is also known as Dhapdi in Garhwal."},
    { name: "Singhal",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYnYwRsB0dNvVcR0uvVP0qyzu57JvABjD1yg&s" , description: "Singhal, also called Kumaoni Malpua, is a traditional sweet dish from the Kumaon area of Uttarakhand, India"}
   ]
   },
  {
   name: "West Bengal",
    image: "https://www.citybit.in/wp-content/uploads/2023/10/Tourist-Places-in-West-Bengal.jpg",
    description: "Known for its culture, literature, and historical sites",
    bestTime: "October to March",
   topDestinations: [
     { name: "Kolkata",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjeDyuj3ZicCa6uHM9i-IMrThroJpUwu2m3g&s" , description: "Kolkata (formerly Calcutta) is the capital of India's West Bengal state. Founded as an East India Company trading post, it was India's capital under the British Raj from 1773–1911."},
     { name: "Darjeeling",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXd_l1hLfFRiXLbtj02tHuLxDTPJATnl-cLQ&s" , description: "Darjeeling is a town in India's West Bengal state, in the Himalayan foothills. Once a summer resort for the British Raj elite, it remains the terminus of the narrow-gauge Darjeeling Himalayan Railway, or “Toy Train,” completed in 1881."},
     { name: "Sundarbans",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAQpuHHJLK8IqgZeOWynoJ-z8uYkVp4dYh_g&s" , description: "Sundarbans is a mangrove forest area in the Ganges Delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal."},
     { name: "Shantiniketan",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrG5eiyg-DFA1vDY6Y1FY-A7_TvhCVEaE_vQ&s" , description: "Shantiniketan is a neighbourhood of Bolpur town in the Bolpur subdivision of Birbhum district in West Bengal, India, approximately 152 km north of Kolkata."},
     { name: "Digha",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-WBDYYKY4Qy1S54y6VFi4Z3iA1xhohjjSQw&s" , description: "Digha is a coastal resort town in the east Indian state of West Bengal. The dune-backed Old Digha Sea Beach faces the Bay of Bengal."}
   ],
   famousFoods: [
    { name: "Rosogolla",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRI10NfhSvH7uslW0nUnvZhZ5HlpvUGFrIZw&s" , description: "Rosogolla, also known as Rasgulla, is a popular Indian dessert, particularly in Bengal and neighboring regions."},
    { name: "Mishti Doi",image: "https://bakewithshivesh.com/wp-content/uploads/2023/04/mishti-doi-scaled.jpg" , description: "Mishti Doi, a cherished delicacy of Bengal, is a timeless yogurt treat made from milk, yogurt culture, and jaggery or sugar."},
    { name: "Sandesh",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRymQ9WaA89aillazdmQQzAdMRPQr5ykHHc8A&s" , description: "It's a simple and delicious mix of fresh crumbled paneer and powdered sugar with invigorating aroma of cardamom."},
    { name: "Fish Curry",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR5bv5CUtCfSyCjiwS29HyMoq0FfaCTGxX1A&s" , description: "Fish curry is a diverse and flavorful Indian dish, prepared in various regional styles. It typically features fish cooked in a spiced broth or sauce, and is often served with rice, idli, or dosa."},
    { name: "Puchka (Pani Puri)",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl-2hVWfCfUWtCgm35lNoEoh5iztOpn8Mk1Q&s" , description: "Puchka, also known as Fuchka or Pani Puri, is a popular street food in India, particularly in West Bengal and Bangladesh."}
   ]
   }];