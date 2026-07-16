export type Partner = {
  name: string;
  href?: string;
  logo: string;
  width: number;
  height: number;
  treatment: string;
};

export const partners: Partner[] = [
  {
    name: "TRIMNDS",
    href: "https://www.trimnds.com",
    logo: "/partners/trimnds-logo.svg",
    width: 210,
    height: 108,
    treatment: "trimnds",
  },
  {
    name: "GRIPHCON TECHNOLOGIES",
    href: "https://www.griphcon.com",
    logo: "/partners/griphcon-logo.png",
    width: 2007,
    height: 2338,
    treatment: "griphcon",
  },
  {
    name: "HAP HEIGHT",
    href: "https://www.hapheight.com",
    logo: "/partners/hap-height-logo.svg",
    width: 920,
    height: 148,
    treatment: "hap-height",
  },
  {
    name: "SOLIELI",
    href: "https://solieli.netlify.app",
    logo: "/partners/solieli-logo.svg",
    width: 174,
    height: 48,
    treatment: "solieli",
  },
  {
    name: "WELLTRACE",
    logo: "/partners/welltrace-logo.svg",
    width: 3172,
    height: 2187,
    treatment: "welltrace",
  },
];
