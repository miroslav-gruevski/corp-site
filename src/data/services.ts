export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  sectors: ServiceSector[];
}

export interface ServiceSector {
  name: string;
  slug: string;
  href: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  categoryTitle: string;
  intro: string;
  services: {
    title: string;
    description: string;
  }[];
}

const sectors = [
  { name: 'Residential', slug: 'residential' },
  { name: 'Luxury Residential', slug: 'luxury-residential' },
  { name: 'Education', slug: 'education' },
  { name: 'Commercial', slug: 'commercial' },
  { name: 'Hospitality', slug: 'hospitality' },
];

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'security',
    title: 'Security Systems',
    description:
      'From intruder alarms and CCTV through to access control systems, door locks, intercoms and even safe alarms, our integrated security systems give you maximum peace of mind.',
    icon: 'Shield',
    sectors: sectors.map((s) => ({
      ...s,
      href: `/services/security-${s.slug}`,
    })),
  },
  {
    id: 'fire-safety',
    title: 'Fire Safety Systems',
    description:
      "Whether it's your home, business or school, fire safety systems are essential protection. Whether you need fire alarms, fire extinguishers or H&S-compliant fire escapes, we've got you covered.",
    icon: 'Flame',
    sectors: sectors.map((s) => ({
      ...s,
      href: `/services/fire-safety-${s.slug}`,
    })),
  },
  {
    id: 'gates-railings',
    title: 'Automated Gates & Railings',
    description:
      'From traditional railings to perimeter fences with built-in vibration detectors, sturdy gates to barriers with smart access controls, our solutions help you secure your property.',
    icon: 'Fence',
    sectors: sectors.map((s) => ({
      ...s,
      href: `/services/gates-railings-${s.slug}`,
    })),
  },
];

// ─── Security: Residential ───────────────────────────────────────────────────

export const securityResidential: ServiceDetail = {
  slug: 'security-residential',
  title: 'Security Residential',
  categoryTitle: 'Security',
  intro:
    "It\u2019s unfortunate, but most homeowners come to us for security advice after their properties have been broken into. Don\u2019t let this happen to you! At ECS, we can advise you on modern, cost-effective and integrated security solutions that can safeguard your home, your belongings and your family.",
  services: [
    {
      title: 'Intruder Alarms',
      description:
        "These days, if you want to install an intruder alarm, you don\u2019t need to worry about intrusive rewiring or messy cables. Instead, you can opt for a quick-to-install wireless system with battery-powered sensors. Pet-friendly systems ensure false alarms are kept to a minimum, plus you can receive instant intruder alerts on your smartphone.",
    },
    {
      title: 'CCTV',
      description:
        'CCTV systems are a powerful visual deterrent. They can alert you to unusual activity around your property, as well as capturing footage that can be used as evidence by the police. Modern systems can also detect different kinds of movement and will send alerts to your smartphone. We offer a wide range of CCTV brands that will integrate with your intruder alarms and other systems.',
    },
    {
      title: 'Intercoms',
      description:
        "Who is trying to gain access to your property? With a modern intercom system, you can visually verify a caller\u2019s identity immediately and talk with them no matter where you are thanks to our smartphone app.",
    },
    {
      title: 'Gates & Railings',
      description:
        "It always pays to invest in your first line of defence \u2013 gates and railings. We can create systems that work best for your security needs, from smart-access gates to robust perimeter fencing.",
    },
    {
      title: 'Locksmith Services',
      description:
        'We provide a fast response service for customers who have locked themselves out of their property, lost their keys, or are experiencing issues with accessing their building. Lock upgrades are also available.',
    },
  ],
};

// ─── Security: Luxury Residential ────────────────────────────────────────────

export const securityLuxuryResidential: ServiceDetail = {
  slug: 'security-luxury-residential',
  title: 'Security Luxury Residential',
  categoryTitle: 'Security',
  intro:
    "High-value homes need high-level security. The more lines of defence you have against intruders, the safer your property and valuables will be. ECS offers you a full range of smart, integrated security systems that give you the bespoke, insurance-backed security you need \u2013 without compromising your home\u2019s aesthetics.",
  services: [
    {
      title: 'Security Consultancy',
      description:
        'Your home is safest when your security systems have been tailor-made to protect it. We are happy to work with your appointed project professionals (such as architects, interior designers, building contractors and AV specialists), or directly with you to create the intelligent layers of security you need \u2013 from the perimeter of your property to the heart of your home.',
    },
    {
      title: 'Access Controls & Smart Locks',
      description:
        'Access controls and smart locks are vital for checking and logging who is where on your property. Using the tap of a keypad, press of a fingerprint, swipe of a key-fob or a tap of a mobile device, people can access only the areas of your property and home that you have authorised.',
    },
    {
      title: 'Intruder Alarms',
      description:
        'The more ways an alarm can detect intruders, the more effective it becomes. From internal motion detection and vibration sensors, through to external perimeter ground or wall detection systems, our intruder alarms can be designed unobtrusively into the fabric of your property.',
    },
    {
      title: 'CCTV',
      description:
        'Top-of-the-range CCTV systems give you exceptional functionality. Extremely high-resolution cameras record footage in exceptional detail and can be programmed to detect specific types of movement thanks to top-of-the-range video analytics. Activation notifications can alert you, our monitoring station, or the police. In addition, our operators can also verbally challenge intruders via a loudspeaker.',
    },
    {
      title: 'Intercoms',
      description:
        "Every high-value property needs an intercom system, but with ours you can check the identity of visitors from any place in the world \u2013 via our integrated smartphone app. The intercoms themselves can be supplied in many discreet finishes and are designed to be vandal resistant.",
    },
    {
      title: 'Gates & Railings',
      description:
        'Gates and railings are your first line of defence against intruders, so it pays to invest in the best solutions for your property. We can work with you to create traditional gates and railings that are designed to complement your home, whilst our automation systems can deliver your chosen access requirements.',
    },
    {
      title: 'Valuables Protection: Safes and Art Alarms',
      description:
        'If you keep extremely valuable art or belongings in your home, your insurers will demand they have security protection of their own. We can integrate safe security systems and movement sensors for artworks, both of which can be connected to your alarm network.',
    },
    {
      title: 'Security Rooms',
      description:
        "For maximum peace of mind, you may wish to install a security room (sometimes known as a \u2018panic room\u2019) in your home. We can design a security room that meets your needs, such as a concealed safe environment. When you sound the alarm from your security room, it will immediately be picked up by our monitoring station, allowing us to summon help as quickly as possible.",
    },
  ],
};

// ─── Security: Education ─────────────────────────────────────────────────────

export const securityEducation: ServiceDetail = {
  slug: 'security-education',
  title: 'Security Education',
  categoryTitle: 'Security',
  intro:
    "Effective security systems are key to your safeguarding responsibilities. At ECS, we have a dedicated education team with many years\u2019 experience of working with schools, colleges and universities. We offer effective, integrated systems that can be installed across multiple sites. If an alarm is triggered when your site is unoccupied, our systems can alert your keyholders and the police via our responsive monitoring station.",
  services: [
    {
      title: 'Education Security Specialists',
      description:
        "When you work with ECS to provide your security solutions, you will be allocated a dedicated education account manager and a single number to call in case of problems. Our DBS-checked engineers are experts in installing security systems during the holidays to minimise disruption. They are also equipped to solve most technical problems during a single visit. Increasingly, schools are becoming part of multi-organisation trusts \u2013 and we can help them save money with integrated contracts that offer a bespoke premises security service across multiple sites.",
    },
    {
      title: 'Smart Locks',
      description:
        'Prevent unauthorised visitors from gaining access to your site and your systems with smartphone door locks that add an extra layer of security to your premises. Fast, convenient, and easy to operate, smart locks are ideal for managing entry without manual intervention. We can also supply and install wireless lockers for use in staffrooms and student communal areas.',
    },
    {
      title: 'Access Control',
      description:
        'Every school and college has high-security areas that should only be accessed by certain people. Our access control systems can ensure that only approved people can access different areas. Ideal for managing access for staff, visitors and contractors, our systems can be operated using swipe cards or even biometric readers.',
    },
    {
      title: 'Intruder Alarms',
      description:
        'Many buildings on education sites or campuses are left empty overnight, putting valuable contents at risk. Our intruder alarms can secure multiple buildings, entrances and exits. Specialist sensors can detect motion, vibration and breaking glass, sending instant alerts in the event of suspicious activity. Automatic loudspeaker warnings can also be deployed to deter intruders or vandals.',
    },
    {
      title: 'CCTV',
      description:
        "Effective CCTV systems can detect and deter intruders, as well as capture high-quality footage that can be used as evidence. Exterior and interior CCTV is also an important tool for school managers, allowing them to obtain and review footage of bullying, bad behaviour or other incidents. We can work with you to design and install CCTV systems that meet your precise needs.",
    },
    {
      title: 'Intercoms',
      description:
        'You need to the ability to check the identity of every visitor to a school or campus building. Our intercom systems allow operators such as receptionists to see exactly who is calling, and to challenge them if necessary.',
    },
    {
      title: 'Gates & Barriers',
      description:
        "Gates and barriers are key to your site\u2019s security. They not only help to keep intruders out, but also allow you to control who can access a site or building \u2013 whether on foot or in a vehicle. Our smart gates can be programmed to limit access to authorised personnel, while our perimeter fencing solutions are low-maintenance and vandal resistant.",
    },
    {
      title: 'Lockdown Alarms',
      description:
        'If an incident occurs at your site, you need the ability to lock down the premises as quickly as possible. We can help you choose a lockdown alarm system that allows staff to sound the alarm in an emergency situation, alerting staff and students to follow safety protocols. These systems are simple to install and allow you to make routine announcements, as with a traditional tannoy.',
    },
  ],
};

// ─── Security: Commercial ────────────────────────────────────────────────────

export const securityCommercial: ServiceDetail = {
  slug: 'security-commercial',
  title: 'Security Commercial',
  categoryTitle: 'Security',
  intro:
    "It\u2019s never been more important to protect your commercial properties from theft or damage. We understand the importance of ensuring your premises, possessions and staff remain safe and secure, enabling your business to continue operations without disruption. ECS works with clients to design, install and maintain security systems for a wide range of commercial premises, from hotels to office complexes. Recommended by many architects and builders, you can rely on us to create the modern security systems you need.",
  services: [
    {
      title: 'Intruder Alarms',
      description:
        "If your commercial premises are left empty overnight or at the weekends, effective intruder alarms are a must. Even if your properties are occupied 24/7, it\u2019s essential to secure certain entrances and exits. Our intruder alarm systems are monitored by our station around the clock and will alert you instantly to any suspicious activity, thanks to a wide range of sensors that can detect motion, vibration or breaking glass. Choose from either wired or wireless systems, both controllable by our dedicated mobile app.",
    },
    {
      title: 'Access Controls & Smart Locks',
      description:
        "If your business has restricted areas, or it\u2019s a venue like a hotel where guests need entry to their own rooms, you need the best access controls and smart locks possible. Our intelligent control systems allow you to create access zones and assign privileges as needed. Smart locks can be operated using cards, smart phones, fingerprint scans, keypads or even voice commands.",
    },
    {
      title: 'CCTV',
      description:
        "Quality CCTV is a deterrent. Thieves don\u2019t like to think they\u2019ll be caught on camera! It also allows you to capture high-definition footage, which can be used as evidence if needed. We offer both external CCTV to help secure your premises, as well as internal CCTV to monitor activity inside your building \u2013 ideal for hotels, offices and hospitality venues.",
    },
    {
      title: 'Intercoms',
      description:
        'Good commercial premises security depends on being able to restrict who has access to a building. Our smart intercom systems allow you to check the identity of all callers, making sure only authorised people can enter. Thanks to our app, you can see who callers are and communicate with them from wherever you have an internet connection.',
    },
    {
      title: 'Wireless Lockers',
      description:
        "Some commercial premises rely on lockers to keep people\u2019s belongings safe \u2013 whether they\u2019re staff lockers at an office or supermarket, or patrons\u2019 lockers at a gym or leisure centre. Our wireless locker solutions allow you to do away with the hassle of keys and padlocks; instead, they can be opened using RFID cards or smartphones.",
    },
    {
      title: 'Gates & Barriers',
      description:
        'If your commercial premises occupy a larger site, gates and barriers offer you an all-important first line of security. We can recommend and install smart access gates, allowing you to control who enters your site by vehicle or on foot. We can also supply a wide range of fences and barriers, ranging from the robust and vandal-proof to bespoke, aesthetically pleasing designs.',
    },
  ],
};

// ─── Security: Hospitality ───────────────────────────────────────────────────

export const securityHospitality: ServiceDetail = {
  slug: 'security-hospitality',
  title: 'Security Hospitality',
  categoryTitle: 'Security',
  intro:
    'From hotels to leisure centres, bars and restaurants to events venues, ECS Systems works with all manner of hospitality businesses in our region to ensure their premises are secure, compliant, and fire safe. Thanks to our industry-leading expertise, our wealth of experience, and our scalable setup, we\u2019re renowned for our ability to add value to any project.',
  services: [
    {
      title: 'Security Systems',
      description:
        "Protect your hotel from theft, damage, and trespassers with some of the most advanced security products on the market. From standalone or integrated intruder alarm systems to smart locks, keycard entry points, CCTV cameras, and wireless lockers, we\u2019ve got your property\u2019s security needs covered.",
    },
    {
      title: 'Access Control',
      description:
        'Our access control division delivers everything from sophisticated commercial intercoms to automated gates, barriers, and bollards to help you restrict traffic flow and control who enters your hotel via vehicle or on foot. All access control products are available in a range of finishes to help you achieve your desired aesthetic.',
    },
    {
      title: 'Truly Remarkable Products',
      description:
        'Reimagine what\u2019s possible with the most advanced security and fire safety devices available. We source the best ideas from leading industry partners and can adapt these technologies to help you overcome common challenges onsite.',
    },
    {
      title: 'Direct Technical Support & Maintenance',
      description:
        'Throughout your project and beyond, ECS will look after your security and fire systems on your behalf. We can offer 24/7 engineer support packages as part of our maintenance contracts, so you really can call on us anytime.',
    },
  ],
};

// ─── Fire Safety: Residential ────────────────────────────────────────────────

export const fireSafetyResidential: ServiceDetail = {
  slug: 'fire-safety-residential',
  title: 'Fire Safety Residential',
  categoryTitle: 'Fire Safety',
  intro:
    "Fire can damage or destroy your home or \u2013 worse \u2013 threaten lives. Luckily, residential fire safety systems have never been more effective, discreet and easy to install. From wireless fire alarms to affordable fire extinguishers and robust fire escapes, ECS has got you covered.",
  services: [
    {
      title: 'Fire Alarms',
      description:
        "If fire breaks out, you need to be alerted fast. Worryingly, research has found that many people \u2013 particularly children \u2013 don\u2019t get woken by standard smoke alarms. We can recommend and install fire alarms that are much louder and can even be linked to a monitoring station.",
    },
    {
      title: 'Fire Extinguishers',
      description:
        "If you have fire extinguishers in your home, you have the means to put out small fires before they spread. But it\u2019s important to have the right ones \u2013 for example, using certain types of foam fire extinguishers on electric fires is extremely dangerous. We can design and supply you with the correct extinguishers for every part of your home.",
    },
    {
      title: '24/7 Monitoring',
      description:
        'The moment your fire alarms are triggered, you need to know. For added security, particularly at night, our Alarm Receiving Centre can inform you of the problem \u2013 fast.',
    },
  ],
};

// ─── Fire Safety: Luxury Residential ─────────────────────────────────────────

export const fireSafetyLuxuryResidential: ServiceDetail = {
  slug: 'fire-safety-luxury-residential',
  title: 'Fire Safety Luxury Residential',
  categoryTitle: 'Fire Safety',
  intro:
    "Protecting luxury homes from fire is complex. Not only do you need systems that can alert you to fire in any one of your rooms, but you need solutions that will help prevent fire spreading from one part of the building to another. Aesthetic considerations are also important \u2013 which is why we not only design bespoke systems, but we ensure they are as unnoticeable as possible.",
  services: [
    {
      title: 'Aspiration Systems',
      description:
        "Our aspiration systems are more than discreet \u2013 they are virtually invisible. Designed to offer enhanced protection without intrusive wiring or pipework, our undetectable aspiration detection solutions will constantly filter and analyse the air for excess smoke, alerting you quickly in the event of a fire. These products can be flush mounted so as not to interfere with your property\u2019s design.",
    },
    {
      title: 'Fire Alarms',
      description:
        'ECS fire alarm systems are effective and discreet. We have designed and installed fire systems for many luxury homes, to complete satisfaction. Where aesthetics are important, we can offer systems with flush-detection devices or, alternatively, aspiration systems with hard-to-notice pinhole sampling points, replacing the need for detectors. Our BAFE-accredited alarms can be linked to a 24/7 monitoring system.',
    },
    {
      title: 'Fire Extinguishers',
      description:
        "It\u2019s wise to have the correct fire extinguishers in every part of your luxury home. The only problem is that normal models are intrusive and ugly. We can solve this problem by supplying smaller extinguishers in a range of attractive finishes (such as gold and silver).",
    },
    {
      title: 'Fire Curtains',
      description:
        'If fire breaks out, you need a trusted and proven method of containing the blaze before it spreads to other parts of your property. We can install and integrate discreet flush-contained fire curtains that will automatically seal an area with a thin strip of fire-resistant material when the alarm is sounded.',
    },
    {
      title: '24/7 Monitoring',
      description:
        'The moment your fire alarms are triggered, you need to know. For added security, particularly at night, our Alarm Receiving Centre can inform you of the problem \u2013 fast.',
    },
  ],
};

// ─── Fire Safety: Education ──────────────────────────────────────────────────

export const fireSafetyEducation: ServiceDetail = {
  slug: 'fire-safety-education',
  title: 'Fire Safety Education',
  categoryTitle: 'Fire Safety',
  intro:
    'Every education provider needs the best possible protection from fire. Not only do schools, colleges and universities have a responsibility to keep people safe, their fire safety systems need to comply with strict standards. ECS can not only help you meet your fire protection responsibilities and maintain your systems, but we will also work with you to keep costs low.',
  services: [
    {
      title: 'Fire Risk Assessment',
      description:
        "It\u2019s now a legal requirement for all non-domestic properties to undergo a fire risk assessment \u2013 and if you are listed as the building\u2019s Responsible Person, it\u2019s your job to manage your building\u2019s fire safety requirements. Speak to ECS for help in this area. Our fully trained assessor can visit your premises to identify any fire-related risks and hazards, review your emergency equipment and escape routes, and ensure your premises is compliant with the PAS 79 code of practice.",
    },
    {
      title: 'Fire Alarms',
      description:
        'We can provide you with a wide range of fire alarm systems, which will sound and alert responders quickly. From conventional zoned systems, to networks of alarms which will identify exactly where fire has broken out, we offer you many options. Modern air sampling systems can detect smoke before fire has fully broken out.',
    },
    {
      title: 'Fire Extinguishers',
      description:
        'Schools and colleges need a wide variety of different fire extinguishers: for classrooms, laboratories, technology rooms and more. We can advise you on the correct extinguisher for each location, then source and maintain them cost effectively.',
    },
    {
      title: 'Emergency Lighting',
      description:
        "It\u2019s essential that your emergency lighting systems will work the moment they are needed. Hallways and corridors need to be brightly illuminated, while fire exit signs must be clearly visible. We can advise on powerful LED lighting systems, as well as undertake regular testing and maintenance.",
    },
    {
      title: 'Smoke Vents',
      description:
        'Smoke inhalation kills. If one of your buildings needs to be evacuated in the event of a fire, you need systems that channel smoke and heat away from escape routes. Automatic Vent Opening systems from ECS automatically ventilate areas to make evacuation safer.',
    },
  ],
};

// ─── Fire Safety: Commercial ─────────────────────────────────────────────────

export const fireSafetyCommercial: ServiceDetail = {
  slug: 'fire-safety-commercial',
  title: 'Fire Safety Commercial',
  categoryTitle: 'Fire Safety',
  intro:
    "Whether your commercial premises are left empty overnight, or they are occupied around the clock, you can\u2019t leave fire safety to chance. If empty, the quicker you are alerted to any fire, the better your chance of saving your buildings and their contents. If occupied, fire safety systems ensure swift alerts, evacuation and can help contain any blaze.",
  services: [
    {
      title: 'Fire Risk Assessment',
      description:
        "It\u2019s now a legal requirement for all non-domestic properties to undergo a fire risk assessment \u2013 and if you are listed as the building\u2019s Responsible Person, it\u2019s your job to manage your building\u2019s fire safety requirements. Speak to ECS for help in this area. Our fully trained assessor can visit your premises to identify any fire-related risks and hazards, review your emergency equipment and escape routes, and ensure your premises is compliant with the PAS 79 code of practice.",
    },
    {
      title: 'Fire Alarms',
      description:
        'From wired systems to smart wireless detectors, we can design and install fire alarm systems that meet your needs. When a fire starts you can receive automatic notifications, telling you exactly where a blaze has started \u2013 and the system can be linked to a 24/7 monitoring service.',
    },
    {
      title: 'Fire Extinguishers',
      description:
        'In commercial premises, fire extinguishers are an essential requirement. But you need to have the right extinguishers in the right places. If your building has kitchens, server rooms or similar areas, you\u2019ll need different extinguishers than the ones in offices or corridors. We can advise on the correct fire extinguishers for your needs, install them and keep them maintained and safe.',
    },
    {
      title: 'Emergency Lighting',
      description:
        'Businesses have to install emergency lighting in the premises by law. It is essential for escape routes, open areas and areas where high-risk tasks are undertaken (such as kitchens or workshops). We can design and install the most suitable emergency lighting for your premises.',
    },
    {
      title: 'Smoke Vents',
      description:
        'When fire breaks out, one of the biggest hazards is smoke. If smoke fills escape routes, then it can prevent people from evacuating \u2013 and can kill. Intelligent smoke vents open automatically in the event of a blaze, allowing smoke and heat to escape and making evacuation procedures safer.',
    },
  ],
};

// ─── Fire Safety: Hospitality ────────────────────────────────────────────────

export const fireSafetyHospitality: ServiceDetail = {
  slug: 'fire-safety-hospitality',
  title: 'Fire Safety Hospitality',
  categoryTitle: 'Fire Safety',
  intro:
    "The safety of your staff and guests is paramount \u2013 so make sure your hotel\u2019s fire strategy is on point. The BAFE registered team here at ECS Systems can provide fire risk assessments, wired and non-wired fire alarms and smoke detectors, fire extinguishers, smoke vents, emergency lighting and much more.",
  services: [
    {
      title: 'Fire Risk Assessments',
      description:
        "It\u2019s a legal requirement for all non-domestic properties to undergo a fire risk assessment. Our fully trained assessor can visit your premises to identify any fire-related risks and hazards, review your emergency equipment and escape routes, and ensure your premises is compliant with the PAS 79 code of practice.",
    },
    {
      title: 'Fire Alarms & Smoke Detection',
      description:
        'From wired systems to smart wireless detectors, we can design and install fire alarm systems that meet the specific needs of hotels and hospitality venues. Bedroom detectors, corridor sounders, and systems designed to minimise false alarms from kitchens and bathrooms.',
    },
    {
      title: 'Emergency Lighting & Smoke Vents',
      description:
        'Compliant emergency lighting throughout guest corridors, stairways, and public areas ensures guests unfamiliar with the building can evacuate safely. Intelligent smoke vents open automatically in the event of a blaze, allowing smoke and heat to escape.',
    },
    {
      title: 'Friendly, Fully Trained Staff',
      description:
        'Our employees are our greatest asset. Our surveyors, installers and engineers are 100% committed to getting the best results for your project, and you\u2019ll be impressed by their knowledge and technical capabilities.',
    },
  ],
};

// ─── Gates & Railings: Residential ───────────────────────────────────────────

export const gatesRailingsResidential: ServiceDetail = {
  slug: 'gates-railings-residential',
  title: 'Gates & Railings Residential',
  categoryTitle: 'Gates & Railings',
  intro:
    'Gates, railings and barriers are not only your first line of defence against intruders, but they offer a strong visual deterrent to thieves and vandals. We offer you automated entry solutions that can be seamlessly integrated with your intruder systems, as well as sturdy and attractive barriers and bespoke staircases and handrails.',
  services: [
    {
      title: 'Manual Gates',
      description:
        'Protect your property against unauthorised visitors with hinged gates or swing gates that can be operated manually without the need for additional electronics. These strong, stable products can be more affordable and easier to maintain, making them ideal for smaller sites.',
    },
    {
      title: 'Automated Gates',
      description:
        'Automated systems make entry gates convenient as well as secure. Wireless keys allow you to open gates without leaving your car, while intercom systems allow you to grant others access while you are inside your home. Pedestrian gates operate on the same principle \u2013 and can even provide fingerprint access for added security.',
    },
    {
      title: 'Railings',
      description:
        "Secure railings needn\u2019t be unattractive. At ECS, we specialise in designing, fabricating and installing railings that not only give you an added layer of security, but also complement and add a touch of class to your home.",
    },
    {
      title: 'Bollards',
      description:
        'Automated bollards are a simple and effective way to keep unwanted vehicles off your property. When you arrive home, you can use a wireless key to make them disappear into the ground \u2013 and raise up again when you\u2019ve gained entry.',
    },
  ],
};

// ─── Gates & Railings: Luxury Residential ────────────────────────────────────

export const gatesRailingsLuxuryResidential: ServiceDetail = {
  slug: 'gates-railings-luxury-residential',
  title: 'Gates & Railings Luxury Residential',
  categoryTitle: 'Gates & Railings',
  intro:
    "Luxury homes need secure perimeters. The challenge is to make sure that defences like automated gates, railings and barriers offer the right blend of security, sophistication, convenience and aesthetics. Every installation needs to be in keeping with your home. This is where ECS\u2019s experience comes to your aid \u2013 not only do we create and install hi-tech perimeter security, we can even design and fabricate beautiful interior staircases and handrails.",
  services: [
    {
      title: 'Manual Gates',
      description:
        'Sometimes it makes more practical sense to install a manual gate without additional technology. ECS can design, supply, install and maintain manually operated structures that offer exceptional security, stability and durability onsite.',
    },
    {
      title: 'Gate Automation',
      description:
        "Historically, many of the finest homes had to rely on a gatekeeper. Today, that\u2019s rarely practical nor necessary. Modern automated gates are intelligent, opening automatically in response to wireless signals or biometrics. They also allow you to screen visitors at the perimeter of your property before you follow their progress on CCTV. Our gates can also be designed in collaboration with your architects to ensure they beautifully complement your premises.",
    },
    {
      title: 'Railings',
      description:
        "High-end railings can add an extra layer of class and security to your home. We can design, fabricate and install railings in a variety of materials and finishes to create sturdy, stylish barriers that fit in with your property\u2019s architecture.",
    },
    {
      title: 'Bollards',
      description:
        'Automated bollards are an unobtrusive and effective method of securing areas like garages and courtyards. Available in a range of designs, you can use a wireless key to make them disappear into the ground when you need access \u2013 before they automatically raise again when you\u2019ve passed.',
    },
  ],
};

// ─── Gates & Railings: Education ─────────────────────────────────────────────

export const gatesRailingsEducation: ServiceDetail = {
  slug: 'gates-railings-education',
  title: 'Gates & Railings Education',
  categoryTitle: 'Gates & Railings',
  intro:
    "Gates, railings and barriers are essential for securing education sites. They are vital for safeguarding, as they allow you to control who has access to any premises. They are equally important to secure sites that are left empty overnight, providing a first line of defence against intruders, thieves and vandals. ECS can design, install and maintain a wide range of perimeter security solutions for your site cost-effectively.",
  services: [
    {
      title: 'Gates & Automation',
      description:
        'Schools and colleges need to be able to control who accesses their site by foot or by vehicle. Automated gates are the perfect solution for this need. Anyone arriving at your site can be seen via camera link before you make the decision to allow or deny entry. You can also allow staff and other trusted individuals to enter using a code, card or biometric ID.',
    },
    {
      title: 'Roller Barrier',
      description:
        'On education sites, railings serve a very practical purpose. They allow you to demarcate and protect sensitive or dangerous areas. ECS can also supply and install grilles to protect vulnerable windows. Both railings and grilles can be designed and fabricated in a variety of styles and finishes to suit your needs.',
    },
    {
      title: 'Fencing',
      description:
        'Your site probably covers a large area, containing sports grounds, a variety of different buildings, car parks and more. Effective and vandal-proof fencing is essential to secure your perimeter and prevent trespassers, vandals and other unauthorised people entering the site.',
    },
    {
      title: 'Bollards',
      description:
        'Bollards offer a solid and practical method of preventing vehicles from entering any outdoor area of your site. They can be operated wirelessly, so they sink flush with the ground, allowing easy access for authorised people and the emergency services.',
    },
    {
      title: 'Barriers',
      description:
        'From automated traffic barriers to box-metal barriers that prevent sensitive areas from being rammed by vehicles, we can supply and maintain a whole range of intelligent or traditional options that meet your requirements.',
    },
  ],
};

// ─── Gates & Railings: Commercial ────────────────────────────────────────────

export const gatesRailingsCommercial: ServiceDetail = {
  slug: 'gates-railings-commercial',
  title: 'Gates & Railings Commercial',
  categoryTitle: 'Gates & Railings',
  intro:
    "If you have large commercial premises, perimeter security is essential for protecting your site from intruders, vandals and thieves. You need to know exactly who is coming onto your site and be reassured that unauthorised access is difficult \u2013 if not impossible. ECS\u2019s specialist gates, railings and other barriers provide you with the defences you need to protect your buildings and personnel.",
  services: [
    {
      title: 'Gates & Automation',
      description:
        'Whenever anyone arrives at your site by foot or by vehicle, you need to check their identity or credentials before allowing them access. ECS automated gates are the ideal solution. Not only can you verify visitors by camera and intercom, but smart access features allow staff and authorised personnel to come on site using wireless keys, keycodes, smartcards or biometric IDs.',
    },
    {
      title: 'Fencing',
      description:
        'Fencing is the first deterrent to intruders, vandals and trespassers. Whether you need traditional, robust and vandal-proof metal fencing, or you need smart fences with vibration alarms, ECS is here to create the solution you need.',
    },
    {
      title: 'Bollards',
      description:
        'If you want to prevent unauthorised vehicles from accessing your site, smart bollards are a robust and intelligent solution. Operated wirelessly or via an interior control, they lower into the ground to allow vehicular access and rise again to form a strong barrier.',
    },
    {
      title: 'Barriers',
      description:
        'If you need automatic or traditional barriers to protect any part of your commercial site or premises, we can make them to your specifications, install them and maintain them as needed.',
    },
  ],
};

// ─── Gates & Railings: Hospitality ───────────────────────────────────────────

export const gatesRailingsHospitality: ServiceDetail = {
  slug: 'gates-railings-hospitality',
  title: 'Gates & Railings Hospitality',
  categoryTitle: 'Gates & Railings',
  intro:
    'Find out how our security and fire safety specialists can support your hotel with our comprehensive design, planning, installation, and aftercare services. We collaborate closely with main contractors and other third parties to get each job done to an exceptional standard.',
  services: [
    {
      title: 'Access Control',
      description:
        'Our access control division delivers everything from sophisticated commercial intercoms to automated gates, barriers, and bollards to help you restrict traffic flow and control who enters your hotel via vehicle or on foot. All access control products are available in a range of finishes to help you achieve your desired aesthetic.',
    },
    {
      title: 'Cutting-Edge Technologies',
      description:
        "Though we remain impartial and always tailor our recommendations to suit the needs of every project, we are a SALTO Platinum Partner, meaning we have the training and the technical know-how to deliver these world-leading access control devices. SALTO\u2019s data-on-card access control networks enable hotels to manage full movement in and around your building quickly, securely, and with full traceability.",
    },
    {
      title: 'Meeting Your Challenges Head On',
      description:
        "We appreciate that downtime means lost revenue, and system errors can damage your reputation. We\u2019ll do everything in our power to ensure our works cause minimal disruption to your operations. We carry out surveys and installations outside of normal working hours if required and assign you one main point of contact for your project.",
    },
    {
      title: 'Direct Technical Support & Maintenance',
      description:
        'Throughout your project and beyond, ECS will look after your security and fire systems on your behalf. We can offer 24/7 engineer support packages as part of our maintenance contracts, so you really can call on us anytime.',
    },
  ],
};
