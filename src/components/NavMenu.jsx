import { RxHamburgerMenu } from "react-icons/rx";
import { publicUrl } from "../lib/publicUrl";

const OFFICIAL_SITE = "https://global.oliveyoung.com/";
const OY_EVENT_URL = "https://global.oliveyoung.com/event/main";
const OY_MEMBERSHIP_URL = "https://global.oliveyoung.com/display/page/membership";

function productSearchUrl(searchText) {
  return `#/products?search=${encodeURIComponent(searchText)}`;
}

function productSectionUrl(sectionText) {
  return `#/products?section=${encodeURIComponent(sectionText)}`;
}

function isExternalLink(href) {
  return href.startsWith("http");
}

function MenuLink({ href, children, className = "" }) {
  const externalProps = isExternalLink(href)
    ? { target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <a href={href} className={className} {...externalProps}>
      {children}
    </a>
  );
}

function MenuItem({ href, children }) {
  return (
    <li className="transition-colors duration-300 hover:text-lime-500">
      <MenuLink href={href}>{children}</MenuLink>
    </li>
  );
}

function UnderlineItem({ href, children, className = "" }) {
  return (
    <li
      className={`relative shrink-0 transition-colors duration-300 hover:text-lime-500 after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-lime-500 after:transition-all after:duration-300 hover:after:w-full ${className}`}
    >
      <MenuLink href={href}>{children}</MenuLink>
    </li>
  );
}

const mainCategoryLinks = [
  { label: "All Products", href: "#/products" },
  { label: "Skincare", href: productSectionUrl("Skincare") },
  { label: "Makeup", href: productSectionUrl("Makeup") },
  { label: "Hair", href: productSearchUrl("Hair") },
  { label: "Face Masks", href: productSearchUrl("Mask") },
  { label: "Suncare", href: productSectionUrl("Suncare") },
  { label: "K-POP", href: "#/kpop" },
];

const extraCategoryLinks = [
  { label: "Best Sellers", href: "#/best" },
  { label: "New Products", href: "#/new" },
  { label: "Sale Products", href: "#/sale" },
  { label: "Brands A-Z", href: "#/brands" },
  { label: "UNOVE Haircare", href: productSearchUrl("UNOVE") },
  { label: "SPF Picks", href: productSectionUrl("Suncare") },
];

const trendLinks = [
  { label: "Anua", href: productSearchUrl("Anua") },
  { label: "MEDIHEAL", href: productSearchUrl("MEDIHEAL") },
  { label: "ROUND LAB", href: productSearchUrl("ROUND LAB") },
  { label: "UNOVE", href: productSearchUrl("UNOVE") },
  { label: "Beauty of Joseon", href: productSearchUrl("Beauty of Joseon") },
  { label: "d'Alba", href: productSearchUrl("d'Alba") },
];

const skincareLinks = [
  { label: "All Skincare", href: productSectionUrl("Skincare") },
  { label: "Serums", href: productSearchUrl("Serum") },
  { label: "Toner Pads", href: productSearchUrl("Toner Pad") },
  { label: "Creams", href: productSearchUrl("Cream") },
  { label: "Cleansers", href: productSearchUrl("Cleanser") },
  { label: "PDRN Care", href: productSearchUrl("PDRN") },
];

const skincareConcernLinks = [
  { label: "Dry Skin", href: productSearchUrl("dry") },
  { label: "Sensitive Skin", href: productSearchUrl("sensitive") },
  { label: "Oily Skin", href: productSearchUrl("oily") },
  { label: "Dark Spots", href: productSearchUrl("Dark Spot") },
  { label: "Hydration", href: productSearchUrl("Hydrating") },
  { label: "Calming", href: productSearchUrl("Calming") },
];

const skincareBrandLinks = [
  { label: "Anua", href: productSearchUrl("Anua") },
  { label: "MEDIHEAL", href: productSearchUrl("MEDIHEAL") },
  { label: "ROUND LAB", href: productSearchUrl("ROUND LAB") },
  { label: "Torriden", href: productSearchUrl("Torriden") },
  { label: "AESTURA", href: productSearchUrl("AESTURA") },
  { label: "SKINFOOD", href: productSearchUrl("SKINFOOD") },
];

const makeupLinks = [
  { label: "All Makeup", href: productSectionUrl("Makeup") },
  { label: "Lip Makeup", href: productSearchUrl("Lip") },
  { label: "Eye Palettes", href: productSearchUrl("Eye Palette") },
  { label: "BB Cream", href: productSearchUrl("BB") },
  { label: "Tone-Up Base", href: productSearchUrl("Tone-Up") },
  { label: "Blurring Finish", href: productSearchUrl("Blurring") },
];

const makeupLookLinks = [
  { label: "Juicy Shine", href: productSearchUrl("Juicy") },
  { label: "Rosy Color", href: productSearchUrl("Rosy") },
  { label: "Tinted Ampoule", href: productSearchUrl("Tinted") },
  { label: "Glow Jelly", href: productSearchUrl("Glow Jelly") },
  { label: "Curl & Shine", href: productSearchUrl("Curl") },
  { label: "Hello Kitty Edition", href: productSearchUrl("HELLO KITTY") },
];

const makeupBrandLinks = [
  { label: "WAKEMAKE", href: productSearchUrl("WAKEMAKE") },
  { label: "Losy Kim", href: productSearchUrl("Losy Kim") },
  { label: "espoir", href: productSearchUrl("espoir") },
  { label: "Beauty of Joseon", href: productSearchUrl("Beauty of Joseon") },
  { label: "REJURAN", href: productSearchUrl("REJURAN") },
  { label: "Aheb", href: productSearchUrl("Aheb") },
];

const hairProductLinks = [
  { label: "All Hair", href: productSearchUrl("Hair") },
  { label: "Hair Masks", href: productSearchUrl("Hair Mask") },
  { label: "Shampoo", href: productSearchUrl("Shampoo") },
  { label: "Treatment", href: productSearchUrl("Treatment") },
  { label: "Hair Oil", href: productSearchUrl("Hair Oil") },
  { label: "Essence", href: productSearchUrl("Essence") },
];

const hairTypeLinks = [
  { label: "Damage Repair", href: productSearchUrl("Damage Repair") },
  { label: "Deep Repair", href: productSearchUrl("Deep Damage") },
  { label: "Silk Finish", href: productSearchUrl("Silk") },
  { label: "Soft Hair", href: productSearchUrl("Soft") },
  { label: "Summer Haircare", href: productSearchUrl("Haircare") },
  { label: "Curl & Shine", href: productSearchUrl("Curl") },
];

const hairBenefitLinks = [
  { label: "UNOVE", href: productSearchUrl("UNOVE") },
  { label: "Aheb", href: productSearchUrl("Aheb") },
  { label: "Damage Sets", href: productSearchUrl("Damage") },
  { label: "Oil Essence", href: productSearchUrl("Oil Essence") },
  { label: "New Hair Items", href: productSearchUrl("Hair") },
  { label: "Hair Masks", href: productSearchUrl("Hair Mask") },
];

const maskTypeLinks = [
  { label: "All Face Masks", href: productSearchUrl("Mask") },
  { label: "Sheet Masks", href: productSearchUrl("Mask Sheet") },
  { label: "Hydrating Masks", href: productSearchUrl("Hyaluronic Acid Mask") },
  { label: "Toner Pads", href: productSearchUrl("Toner Pad") },
  { label: "PDRN Masks", href: productSearchUrl("PDRN") },
  { label: "Calming Pads", href: productSearchUrl("Calming") },
];

const maskConcernLinks = [
  { label: "Dry Skin Masks", href: productSearchUrl("dry Mask") },
  { label: "Sensitive Skin", href: productSearchUrl("sensitive") },
  { label: "Hydration", href: productSearchUrl("Hydrating") },
  { label: "Low Molecular", href: productSearchUrl("Low Molecular") },
  { label: "Carrot Calming", href: productSearchUrl("Carrot") },
  { label: "Portable Sets", href: productSearchUrl("Portable Case") },
];

const maskBrandLinks = [
  { label: "MEDIHEAL", href: productSearchUrl("MEDIHEAL") },
  { label: "Torriden", href: productSearchUrl("Torriden") },
  { label: "Anua", href: productSearchUrl("Anua") },
  { label: "SKINFOOD", href: productSearchUrl("SKINFOOD") },
  { label: "AESTURA", href: productSearchUrl("AESTURA") },
  { label: "ROUND LAB", href: productSearchUrl("ROUND LAB") },
];

const suncareProductLinks = [
  { label: "All Suncare", href: productSectionUrl("Suncare") },
  { label: "Sun Cream", href: productSearchUrl("Sun Cream") },
  { label: "Sun Serum", href: productSearchUrl("Sun Serum") },
  { label: "Sunscreen", href: productSearchUrl("Sunscreen") },
  { label: "Tone-Up Sun", href: productSearchUrl("Tone-Up Sun") },
  { label: "SPF50+", href: productSearchUrl("SPF50") },
];

const suncareBenefitLinks = [
  { label: "Daily UV Shield", href: productSearchUrl("Daily UV") },
  { label: "Waterfull Glow", href: productSearchUrl("Waterfull") },
  { label: "Moisturizing Sun", href: productSearchUrl("Moisturizing Sun") },
  { label: "Calming Sun", href: productSearchUrl("Calming Sun") },
  { label: "Birch Juice", href: productSearchUrl("Birch Juice") },
  { label: "Pink Correcting", href: productSearchUrl("Pink Correcting") },
];

const suncareBrandLinks = [
  { label: "d'Alba", href: productSearchUrl("d'Alba") },
  { label: "ROUND LAB", href: productSearchUrl("ROUND LAB") },
  { label: "goodal", href: productSearchUrl("goodal") },
  { label: "Purito Seoul", href: productSearchUrl("Purito Seoul") },
  { label: "Beauty of Joseon", href: productSearchUrl("Beauty of Joseon") },
  { label: "KSECRET", href: productSearchUrl("KSECRET") },
];

const bannerCards = [
  {
    image: "/bannerimg/376c36aa-6a18-43a3-8906-d5264fc9c124.webp",
    displayText: "Best deals and sets",
    targetHref: "#/best",
    text: "OY Magazine 🎥",
    href: OFFICIAL_SITE,
  },
  {
    image: "/bannerimg/265fd36f-af49-4c6f-9360-ee90ee6b3187.webp",
    displayText: "Rising brands",
    targetHref: "#/brands",
    text: "Rising Brand Week 💜",
    href: OFFICIAL_SITE,
  },
];

const menuPromos = {
  skincare: [
    { image: "/bannerimg/2416db0f-59c1-4309-8a90-044693354bd0.webp", text: "Anua PDRN serum", href: productSearchUrl("Anua PDRN") },
    { image: "/bannerimg/85c58a2e-5084-4496-8d5c-1e9106f16caf.webp", text: "MEDIHEAL toner pads", href: productSearchUrl("MEDIHEAL Toner") },
  ],
  makeup: [
    { image: "/bannerimg/0e387d00-9bf9-488e-8fee-e371f1b14e2e.webp", text: "WAKEMAKE eye palette", href: productSearchUrl("WAKEMAKE") },
    { image: "/bannerimg/18dee254-0ed4-4961-98d1-10ffe952a438.webp", text: "Tinted lip ampoule", href: productSearchUrl("Lip Ampoule") },
  ],
  hair: [
    { image: "/bannerimg/4629e142-4168-476a-a654-ee76429b9f8a.webp", text: "UNOVE hair mask", href: productSearchUrl("UNOVE Hair Mask") },
    { image: "/bannerimg/c3887cef-0baf-4782-9eed-1439b627130d.webp", text: "Damage repair shampoo", href: productSearchUrl("Damage Repair Shampoo") },
  ],
  masks: [
    { image: "/bannerimg/505039da-0202-4d3f-8b29-96ad48ecebd7.webp", text: "Torriden mask set", href: productSearchUrl("Torriden Mask") },
    { image: "/bannerimg/85c58a2e-5084-4496-8d5c-1e9106f16caf.webp", text: "MEDIHEAL pad set", href: productSearchUrl("MEDIHEAL Toner Pad") },
  ],
  suncare: [
    { image: "/bannerimg/5d41c0a3-2d56-4ded-a4ea-0e78b85f36a6.webp", text: "d'Alba tone-up sun", href: productSearchUrl("d'Alba Sun") },
    { image: "/bannerimg/7a6448f7-c10f-48f5-af40-e6e967f547d8.webp", text: "ROUND LAB sun serum", href: productSearchUrl("ROUND LAB Sun") },
  ],
};

function LinkColumn({ title, links, className = "" }) {
  return (
    <div className={className}>
      {title && (
        <>
          <h2 className="mb-3 text-base font-bold xl:mb-4 xl:text-lg">{title}</h2>
          <div className="w-full border-b border-gray-200"></div>
        </>
      )}

      <ul className="space-y-2 py-3 text-sm xl:space-y-3 xl:py-4 xl:text-base">
        {links.map((link) => (
          <MenuItem key={link.label} href={link.href}>
            {link.label}
          </MenuItem>
        ))}
      </ul>
    </div>
  );
}

function PromoCard({ image, text, displayText, targetHref, href }) {
  const title = displayText || text;

  return (
    <MenuLink href={targetHref || href} className="block transition-opacity duration-300 hover:opacity-80">
      <img src={publicUrl(image)} className="h-[220px] w-full max-w-[250px] object-cover lg:h-[240px] xl:h-[300px]" alt={title} />
      <p className="mt-3 text-base font-medium">{title}</p>
    </MenuLink>
  );
}

function MegaMenu({ children, align = "left" }) {
  const positionClass =
    align === "center" ? "left-1/2 -translate-x-1/2" : "left-0 right-0 mx-auto";

  return (
    <div
      className={`invisible absolute top-full ${positionClass} z-50 hidden w-[calc(100vw-32px)] max-w-[1200px] translate-y-2 pt-4 text-black opacity-0 transition-all duration-150 pointer-events-none group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:pointer-events-auto group-focus-within:opacity-100 lg:block`}
    >
      <div className="bg-white p-6 shadow-xl xl:p-10">
        {children}
      </div>
    </div>
  );
}

function MegaMenuPanel({ columns, promos, align = "left" }) {
  return (
    <MegaMenu align={align}>
      <div className="grid grid-cols-2 gap-6 xl:grid-cols-5 xl:gap-10">
        {columns.map((column) => (
          <LinkColumn key={column.title} title={column.title} links={column.links} />
        ))}
        {promos.map((card) => (
          <PromoCard key={card.displayText || card.text} {...card} />
        ))}
      </div>
    </MegaMenu>
  );
}

function GeneralMegaMenu() {
  return (
    <MegaMenuPanel
      columns={[
        { title: "Shop Departments", links: mainCategoryLinks },
        { title: "Featured", links: extraCategoryLinks },
        { title: "Popular Brands", links: trendLinks },
      ]}
      promos={bannerCards}
    />
  );
}

function SkincareMegaMenu() {
  return (
    <MegaMenuPanel
      columns={[
        { title: "Skincare Products", links: skincareLinks },
        { title: "Skin Concerns", links: skincareConcernLinks },
        { title: "Skincare Brands", links: skincareBrandLinks },
      ]}
      promos={menuPromos.skincare}
    />
  );
}

function MakeupMegaMenu() {
  return (
    <MegaMenuPanel
      columns={[
        { title: "Makeup Products", links: makeupLinks },
        { title: "Looks & Finishes", links: makeupLookLinks },
        { title: "Makeup Brands", links: makeupBrandLinks },
      ]}
      promos={menuPromos.makeup}
    />
  );
}

function HairMegaMenu() {
  return (
    <MegaMenuPanel
      align="center"
      columns={[
        { title: "Hair Products", links: hairProductLinks },
        { title: "Hair Goals", links: hairTypeLinks },
        { title: "Hair Picks", links: hairBenefitLinks },
      ]}
      promos={menuPromos.hair}
    />
  );
}

function FaceMasksMegaMenu() {
  return (
    <MegaMenuPanel
      columns={[
        { title: "Mask Types", links: maskTypeLinks },
        { title: "Mask Concerns", links: maskConcernLinks },
        { title: "Mask Brands", links: maskBrandLinks },
      ]}
      promos={menuPromos.masks}
    />
  );
}

function SuncareMegaMenu() {
  return (
    <MegaMenuPanel
      columns={[
        { title: "Suncare Products", links: suncareProductLinks },
        { title: "UV Benefits", links: suncareBenefitLinks },
        { title: "SPF Brands", links: suncareBrandLinks },
      ]}
      promos={menuPromos.suncare}
    />
  );
}

function DropdownMenuItem({ href, label, children, className = "" }) {
  return (
    <li className={`group shrink-0 transition-colors duration-300 hover:text-lime-500 ${className}`}>
      <MenuLink href={href}>{label}</MenuLink>
      {children}
    </li>
  );
}

function NavMenu() {
  return (
    <div className="relative border-y border-gray-100 lg:overflow-visible">
      <div className="flex items-center overflow-x-auto px-4 py-3 text-sm font-bold sm:px-7 sm:text-[16px] lg:overflow-visible lg:justify-between">
        <ul className="flex w-max min-w-full cursor-pointer flex-nowrap items-center gap-4 whitespace-nowrap lg:w-auto lg:min-w-0">
          <li className="group shrink-0 text-[23px] transition-colors duration-300 hover:text-lime-500">
            <MenuLink href="#/products" className="block" aria-label="All categories">
              <RxHamburgerMenu />
            </MenuLink>
            <GeneralMegaMenu />
          </li>

          <UnderlineItem href={OFFICIAL_SITE} className="text-[16px] font-bold text-red-400">
            OY EXCLUSIVE
          </UnderlineItem>
          <UnderlineItem href="#/best">Best</UnderlineItem>
          <UnderlineItem href="#/new">New</UnderlineItem>
          <UnderlineItem href="#/sale">Sale</UnderlineItem>
          <UnderlineItem href="#/brands">Brands</UnderlineItem>
          <UnderlineItem href="#/admin">Admin</UnderlineItem>

          <li className="mx-2 hidden h-5 w-px bg-gray-300 lg:block" aria-hidden="true"></li>

          <DropdownMenuItem href={productSectionUrl("Skincare")} label="Skincare">
            <SkincareMegaMenu />
          </DropdownMenuItem>

          <DropdownMenuItem href={productSectionUrl("Makeup")} label="Makeup">
            <MakeupMegaMenu />
          </DropdownMenuItem>

          <DropdownMenuItem href={productSearchUrl("Hair")} label="Hair">
            <HairMegaMenu />
          </DropdownMenuItem>

          <DropdownMenuItem href={productSearchUrl("Mask")} label="Face Masks">
            <FaceMasksMegaMenu />
          </DropdownMenuItem>

          <DropdownMenuItem href={productSectionUrl("Suncare")} label="Suncare">
            <SuncareMegaMenu />
          </DropdownMenuItem>

          <UnderlineItem href="#/kpop">K-pop</UnderlineItem>
          <UnderlineItem href={OY_EVENT_URL} className="lg:hidden">Events</UnderlineItem>
          <UnderlineItem href={OY_MEMBERSHIP_URL} className="lg:hidden">Membership</UnderlineItem>
        </ul>

        <ul className="hidden shrink-0 cursor-pointer items-center gap-6 lg:flex">
          <UnderlineItem href={OY_EVENT_URL}>Events</UnderlineItem>
          <UnderlineItem href={OY_MEMBERSHIP_URL}>Membership</UnderlineItem>
        </ul>
      </div>
    </div>
  );
}

export default NavMenu;
