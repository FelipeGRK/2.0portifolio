export const profile = {
  name: 'Felipe Siqueira',
  shortName: 'Felipe',
  role: 'IT Support & Help Desk Technician',
  roles: [
    'IT Support | Help Desk Technician',
    'Network Administrator Jr.',
    'Systems Administrator',
    'Tier 2 Support Specialist',
  ],
  email: 'fcordeirogrochevskisiqueira@fisher.edu',
  github: 'https://github.com/FelipeGRK',
  linkedin: 'https://www.linkedin.com/in/felipe-siqueira-0bbb6a169/',
  resume: '/assets/resume.pdf',
  typingSvg:
    'https://readme-typing-svg.demolab.com?font=Fira+Code&size=25&pause=1000&color=29FF09&width=560&lines=IT+Support+%7C+Help+Desk+Technician',
};

export const aboutText = [
  "I'm a motivated IT professional with hands-on experience in technical support, Active Directory, Microsoft Entra ID, endpoint deployment, asset management, and infrastructure-focused homelab projects. I learn quickly, stay organized, and take ownership of new tasks, while keeping a strong focus on documentation, follow-up, and reliable support.",
  "I'm known for patience, flexibility, and a team-oriented mindset, and I like to research, test, and validate solutions, not just understand them in theory. I also look for ways to improve processes and address issues early.",
  "Outside of daily support work, I continue building my network skills — Network Troubleshooting, Network Security, Network Operations, Network Implementation, and Networking Concepts — through my home lab and hands-on projects. I'm CompTIA Network+ certified and am eager to grow into network administration.",
];

export const aboutHighlights = [
  'Actively seeking full-time Network Administrator Jr. and Tier 2 Support positions',
  'CompTIA Network+ Certified',
  'Hands-on homelab experience with Active Directory, Zabbix & Intune',
  'Strong focus on documentation, follow-up, and reliable support',
];

export type SkillCategory = {
  title: string;
  icon: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Systems Administration',
    icon: 'Server',
    skills: [
      'Active Directory (AD DS)',
      'Group Policy (GPO/GPP)',
      'Identity & Access Management',
      'Microsoft Entra ID (Azure AD)',
      'Entra Connect / Hybrid Identity',
      'Microsoft Intune (MDM)',
      'Endpoint & Device Management',
      'Windows Server 2022',
      'Windows Imaging & Deployment',
      'Linux (Ubuntu Server)',
      'VMware / Virtualization',
      'PowerShell',
    ],
  },
  {
    title: 'Networking',
    icon: 'Network',
    skills: [
      'CompTIA Network+ Certified',
      'Network Troubleshooting',
      'Network Security',
      'Wireless & Wired Performance',
      'Networking Concepts',
      'Wireshark & Network Troubleshooting',
      'UniFi Switching & Wi-Fi',
      'Cisco Networking Fundamentals',
      'pfSense Firewall / Routing',
      'DHCP / NAT / DNS',
      '802.1Q VLAN Segmentation',
      'Static IPv4 Addressing',
    ],
  },
  {
    title: 'IT Support & Operations',
    icon: 'Headset',
    skills: [
      'IT Support & Help Desk',
      'Tier 1/2 Support & Ticketing',
      'Remote Support (Quick Assist/RDP)',
      'Asset & Inventory Management',
      'Customer Service & Documentation',
      'Microsoft 365 (Exchange, SharePoint, Teams)',
      'Microsoft Office',
      'IT Support & Troubleshooting',
      'Active Directory & Azure AD Administration',
      'Identity and Access Management (IAM)',
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: 'IT Infrastructure Lab: Active Directory, Zabbix Monitoring & Endpoint Management',
    description:
      'Built a Windows Server Active Directory environment (AD DS, DNS, OUs, RBAC) and deployed a Linux-based Zabbix server for centralized monitoring of CPU, RAM, disk, and service health across domain-joined endpoints. Integrated Microsoft Entra ID with on-prem AD via Entra Connect and managed hybrid endpoints with Intune.',
    tags: [
      'Active Directory',
      'DNS',
      'RBAC',
      'Zabbix',
      'Microsoft Entra ID',
      'Intune',
      'Windows Server 2022',
    ],
    link: 'https://github.com/FelipeGRK/IT-Infrastructure-Monitoring-Active-Directory-Lab-Endpoint-Management',
  },
  {
    title: 'pfSense Virtualized Enterprise Network Lab',
    description:
      'Designed a virtualized enterprise-style network using pfSense and Oracle VirtualBox, configuring a dual-interface firewall/router with WAN/LAN separation, custom IPv4 subnetting, DHCP/NAT, and 802.1Q VLAN segmentation with per-interface firewall rules.',
    tags: ['pfSense', 'VirtualBox', 'Firewall', 'VLAN', 'DHCP', 'NAT', 'Subnetting'],
  },
  {
    title: 'Ubiquiti UniFi USW-24-G2 Network Infrastructure Implementation',
    description:
      'Designed and deployed a dedicated, isolated LAN for live esports broadcast and production at Fisher College: configured a UniFi Layer 2 switch, static IPv4 addressing for Dante audio devices, PoE injectors for announcer consoles, and a dual-NIC broadcast PC setup.',
    tags: ['UniFi (Ubiquiti)', 'Static IP', 'PoE', 'Dante Audio', 'Network Configuration'],
  },
];

export type Education = {
  institution: string;
  location: string;
  degree: string;
  period: string;
  link?: string;
};

export const education: Education[] = [
  {
    institution: 'Cumberland University',
    location: 'Lebanon, TN',
    degree: 'B.S. in Information Technology (minor Software Engineering)',
    period: 'Expected Graduation May 2026',
    link: 'https://www.cumberland.edu',
  },
  {
    institution: 'Fisher College',
    location: 'Boston, MA',
    degree: 'Information Technology',
    period: 'Feb 2026 - Apr 2026',
    link: 'https://fisher.edu',
  },
  {
    institution: 'Northeastern Oklahoma A&M College',
    location: 'Miami, OK',
    degree: 'Information Technology',
    period: 'Jan 2026 - Mar 2026',
  },
];

export type Certification = {
  title: string;
  issuer: string;
  issuerLogo?: string;
  skills: string[];
  certImage?: string;
  link?: string;
};

export const certifications: Certification[] = [
  {
    title: 'CompTIA Network+ Certified',
    issuer: 'CompTIA',
    issuerLogo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/comptia.svg',
    skills: [
      'Network Troubleshooting',
      'Network Security',
      'Wireless & Wired Performance',
      'Networking Concepts',
      'IT Support & Troubleshooting',
      'Active Directory & Azure AD Administration',
      'Identity and Access Management (IAM)',
    ],
  },
  {
    title: 'HTML & CSS in Depth',
    issuer: 'Meta',
    issuerLogo:
      'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg',
    skills: [
      'Semantic HTML5 markup & accessibility best practices',
      'Responsive layouts with CSS Flexbox & Grid',
      'Basic CSS styling & layout techniques',
      'Crafting semantic HTML5 tags for clear structure',
      'Embedding images & hyperlinks to build interactive pages',
      'WCAG accessibility & semantic web principles',
    ],
    certImage: '/assets/skills/html_css_meta.png',
  },
  {
    title: 'Programming with JavaScript',
    issuer: 'Meta',
    issuerLogo:
      'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg',
    skills: [
      'Core JavaScript fundamentals (ES6+, control flow, functions)',
      'Event-driven & asynchronous programming',
      'Node.js scripting & npm package management',
      'Unit testing with Jest for reliable code',
    ],
    certImage: '/assets/skills/meta_javascript.png',
  },
  {
    title: 'Introduction to HTML5',
    issuer: 'University of Michigan',
    issuerLogo:
      'https://upload.wikimedia.org/wikipedia/commons/c/c1/University_of_Michigan_logo.svg',
    skills: [
      'Crafting semantic HTML5 tags for clear structure',
      'Embedding images & hyperlinks to build interactive pages',
      'WCAG accessibility & semantic web principles',
    ],
    certImage: '/assets/skills/html_certificate.png',
  },
  {
    title: 'Crash Course on Python',
    issuer: 'Google',
    issuerLogo:
      'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    skills: [
      'Working with core data structures: strings, lists & dictionaries',
      'Writing concise scripts to automate repetitive workflows',
      'Defining and using custom Python objects',
      "Grasping Python's relevance for automation & real-world tasks",
    ],
    certImage: '/assets/skills/google_felipe.png',
  },
  {
    title: 'Databases & SQL for Data Science with Python',
    issuer: 'IBM',
    issuerLogo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    skills: [
      'CRUD operations & complex SQL querying',
      'Relational schema design & DDL fundamentals',
      'Views, stored procedures & ACID transactions',
      'SQL-Python integration with Pandas in Jupyter',
    ],
    certImage: '/assets/skills/ibm_Database.png',
  },
];

export type TechIcon = {
  name: string;
  url: string;
};

export const techIcons: TechIcon[] = [
  { name: 'Cisco', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/cisco.svg' },
  { name: 'CompTIA', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/comptia.svg' },
  { name: 'Dell', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/dell.svg' },
  { name: 'Azure', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftazure.svg' },
  { name: 'Teams', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftteams.svg' },
  { name: 'pfSense', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/pfsense.svg' },
  { name: 'PowerShell', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/powershell.svg' },
  { name: 'Ubiquiti', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/ubiquiti.svg' },
  { name: 'VMware', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/vmware.svg' },
  { name: 'Windows', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/windows.svg' },
  { name: 'Wireshark', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/wireshark.svg' },
  { name: 'Office', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftoffice.svg' },
  { name: 'VirtualBox', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/virtualbox.svg' },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];
