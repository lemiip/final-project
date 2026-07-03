const OFFICIAL_SITE = "https://global.oliveyoung.com/";
const AFFILIATE_URL = "https://global.oliveyoung.com/influencer/main";
const TRACK_ORDERS_URL = "https://global.oliveyoung.com/member/trackorder";
const WISH_LIST_URL = "https://global.oliveyoung.com/myaccount/wish";
const PRIVACY_URL = "https://global.oliveyoung.com/footer/privacy";
const APP_URL = "https://play.google.com/store/search?q=OLIVE%20YOUNG&c=apps";

function isExternalLink(href) {
  return href.startsWith("http");
}

function FooterLink({ href, children, className = "" }) {
  const externalProps = isExternalLink(href)
    ? { target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <a href={href} className={className} {...externalProps}>
      {children}
    </a>
  );
}

const footerColumns = [
  {
    title: "About OLIVE YOUNG",
    links: [
      { label: "OLIVE YOUNG Platforms", href: OFFICIAL_SITE },
      { label: "About Us", href: OFFICIAL_SITE },
      { label: "Business", href: OFFICIAL_SITE },
    ],
  },
  {
    title: "My Account",
    links: [
      { label: "Track Orders", href: TRACK_ORDERS_URL },
      { label: "Wish List", href: WISH_LIST_URL },
      { label: "Reviews", href: "#/login" },
      { label: "Contact Us", href: "#/contact" },
      { label: "OY MEMBERS Benefit", href: "#/login" },
      { label: "Affiliate Program", href: AFFILIATE_URL, className: "text-blue-600" },
      { label: "Student & Grand Discount", href: OFFICIAL_SITE },
      { label: "Healthcare & Teacher Discount", href: OFFICIAL_SITE },
    ],
  },
  {
    title: "Terms & Policies",
    links: [
      { label: "Terms & Conditions", href: OFFICIAL_SITE },
      { label: "Legal Information", href: OFFICIAL_SITE },
      { label: "Privacy Policy", href: PRIVACY_URL, className: "text-blue-600" },
      { label: "Your Privacy Choices", href: OFFICIAL_SITE },
      { label: "Email Collection Policy", href: OFFICIAL_SITE },
      { label: "Influencer Terms & Conditions", href: AFFILIATE_URL, className: "text-blue-600" },
    ],
    listClassName: "space-y-3",
  },
  {
    title: "Help",
    links: [
      { label: "Customer Service", href: "#/contact" },
      { label: "FAQs", href: "#/faq" },
      { label: "Shipping", href: "#/faq" },
      { label: "Billing", href: "#/faq" },
      { label: "Return & Exchanges", href: "#/faq" },
      { label: "Hotline", href: "#/contact" },
    ],
  },
];

function FooterColumn({ title, links, listClassName = "space-y-1" }) {
  return (
    <div>
      <h3 className="mb-5 text-lg font-bold">{title}</h3>

      <ul className={`${listClassName} text-sm text-gray-600`}>
        {links.map((link) => (
          <li key={link.label}>
            <FooterLink href={link.href} className={link.className || ""}>
              {link.label}
            </FooterLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-10 border-t border-gray-200 bg-gray-100">
      <div className="grid grid-cols-1 gap-10 px-4 py-10 sm:grid-cols-2 sm:px-6 sm:py-12 lg:grid-cols-3 lg:px-16 xl:grid-cols-5">
        {footerColumns.map((column) => (
          <FooterColumn key={column.title} {...column} />
        ))}

        <div>
          <h3 className="mb-5 text-lg font-bold">Download App</h3>

          <FooterLink
            href={APP_URL}
            className="inline-flex w-full cursor-pointer justify-center rounded border border-gray-300 px-6 py-3 text-center hover:bg-gray-300 sm:w-auto"
          >
            OLIVE YOUNG App
          </FooterLink>
        </div>
      </div>

      <div className="border-t border-gray-200 px-4 py-8 text-sm text-gray-500 sm:px-6 lg:px-16">
        <p>CJ Olive Young Corporation</p>
        <p className="mt-2">Business Registration No. : 809-81-01574</p>
        <p className="mt-2">Email : oycs.global@cj.net</p>
        <p className="mt-2">© OLIVE YOUNG. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
