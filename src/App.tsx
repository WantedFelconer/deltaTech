import { useEffect, useMemo, useState } from "react"

type IconName = "arrow" | "bag" | "bell" | "box" | "chart" | "check" | "chevron" | "close" | "compare" | "cube" | "heart" | "menu" | "moon" | "search" | "settings" | "shield" | "sun" | "user" | "wallet"

const iconPaths: Record<IconName, React.ReactNode> = {
  arrow: (
    <>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </>
  ),
  bag: (
    <>
      <path d="M5 8h14l-1 12H6L5 8Z" />
      <path d="M9 9V6a3 3 0 0 1 6 0v3" />
    </>
  ),
  bell: (
    <>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
      <path d="M10 21h4" />
    </>
  ),
  box: (
    <>
      <path d="m4 7 8-4 8 4-8 4-8-4Z" />
      <path d="M4 7v10l8 4 8-4V7M12 11v10" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  chevron: <path d="m9 18 6-6-6-6" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  compare: (
    <>
      <path d="M8 3v18M16 3v18M3 8h5M16 16h5" />
      <path d="m5 5 3 3-3 3M19 13l-3 3 3 3" />
    </>
  ),
  cube: (
    <>
      <path d="m12 2 9 5-9 5-9-5 9-5Z" />
      <path d="m3 7 9 5 9-5M12 12v10M3 7v10l9 5 9-5V7" />
    </>
  ),
  heart: (
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  moon: <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
  wallet: (
    <>
      <path d="M3 6h16v14H3z" />
      <path d="M3 9h18v7h-6a3 3 0 0 1 0-6h6M15 13h.01" />
    </>
  ),
}

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return (
    <svg
      aria-hidden="true"
      className="icon"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      {iconPaths[name]}
    </svg>
  )
}

function Button({
  children,
  className = "",
  icon,
  onClick,
  variant = "primary",
}: {
  children?: React.ReactNode
  className?: string
  icon?: IconName
  onClick?: () => void
  variant?: "primary" | "secondary" | "ghost"
}) {
  return (
    <button className={`btn btn-${variant} ${className}`} onClick={onClick}>
      {children}
      {icon && <Icon name={icon} size={17} />}
    </button>
  )
}

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <img
      alt="DeltaTech"
      className={compact ? "logo compact" : "logo"}
      src="/brand/deltatech-logo.svg"
    />
  )
}

const images = {
  hero: "https://images.unsplash.com/photo-1696710257827-75e2e5954059?auto=format&fit=crop&w=1600&q=88",
  keyboard1:
    "https://images.unsplash.com/photo-1626958390943-a70309376444?auto=format&fit=crop&w=900&q=85",
  keyboard2:
    "https://images.unsplash.com/photo-1626958390898-162d3577f293?auto=format&fit=crop&w=900&q=85",
  keyboard3:
    "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?auto=format&fit=crop&w=900&q=85",
  keyboard4:
    "https://images.unsplash.com/photo-1598662779094-110c2bad80b5?auto=format&fit=crop&w=900&q=85",
}

const products = [
  {
    id: 1,
    brand: "Keychron",
    category: "Mechanical Keyboard",
    name: "Keychron Q1 Max QMK Wireless",
    sku: "DT-KC-Q1M-BN",
    specs: "Gateron Jupiter Brown · 75% · Tri-mode",
    price: 21900,
    old: 23900,
    stock: 12,
    warranty: "1 year",
    rating: 4.9,
    image: images.keyboard3,
  },
  {
    id: 2,
    brand: "Royal Kludge",
    category: "Gaming Keyboard",
    name: "RK M75 Smart Display",
    sku: "DT-RK-M75-PH",
    specs: "Silver Switch · 75% · Hot-swap",
    price: 7490,
    old: 8290,
    stock: 7,
    warranty: "1 year",
    rating: 4.7,
    image: images.keyboard1,
  },
  {
    id: 3,
    brand: "Aula",
    category: "Mechanical Keyboard",
    name: "Aula F75 Pro Wireless",
    sku: "DT-AU-F75-GR",
    specs: "Reaper Switch · Gasket · Tri-mode",
    price: 6290,
    old: 6800,
    stock: 24,
    warranty: "1 year",
    rating: 4.8,
    image: images.keyboard2,
  },
  {
    id: 4,
    brand: "Attack Shark",
    category: "Gaming Mouse",
    name: "Attack Shark X3 Pro",
    sku: "DT-AS-X3P-WH",
    specs: "PAW3395 · 26K DPI · 49g",
    price: 4890,
    old: 5290,
    stock: 18,
    warranty: "1 year",
    rating: 4.6,
    image: images.keyboard4,
  },
]

const money = (value: number) => `৳${value.toLocaleString("en-BD")}`

function SectionTitle({
  eyebrow,
  title,
  action,
}: {
  eyebrow?: string
  title: string
  action?: string
}) {
  return (
    <div className="section-title">
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
      </div>
      {action && (
        <Button icon="arrow" variant="ghost">
          {action}
        </Button>
      )}
    </div>
  )
}

function ProductCard({
  product,
  onAdd,
  onOpen,
}: {
  product: typeof products[0]
  onAdd: () => void
  onOpen: () => void
}) {
  return (
    <article className="product-card">
      <div className="product-media" onClick={onOpen}>
        <img alt={product.name} src={product.image} />
        <span className="discount">
          SAVE {Math.round((1 - product.price / product.old) * 100)}%
        </span>
        <button aria-label="Add to wishlist" className="round-action">
          <Icon name="heart" size={18} />
        </button>
      </div>
      <div className="product-body">
        <div className="product-meta">
          <span>{product.brand}</span>
          <span className="stock">
            <i /> {product.stock} in stock
          </span>
        </div>
        <h3 onClick={onOpen}>{product.name}</h3>
        <p>{product.specs}</p>
        <span className="sku">{product.sku}</span>
        <div className="rating">
          ★ {product.rating} <span>· {product.warranty} warranty</span>
        </div>
        <div className="price-row">
          <div>
            <strong>{money(product.price)}</strong>
            <del>{money(product.old)}</del>
          </div>
          <button
            aria-label={`Add ${product.name} to cart`}
            className="add-icon"
            onClick={onAdd}
          >
            <Icon name="bag" />
          </button>
        </div>
      </div>
    </article>
  )
}

function CustomerHeader({
  cartCount,
  dark,
  go,
  setDark,
}: {
  cartCount: number
  dark: boolean
  go: (page: string) => void
  setDark: (v: boolean) => void
}) {
  const [menu, setMenu] = useState(false)
  return (
    <>
      <div className="utility">
        <div className="container utility-inner">
          <span>Built for Bangladesh’s technology community</span>
          <div>
            <button onClick={() => go("track")}>Track order</button>
            <button onClick={() => go("support")}>Help center</button>
            <button onClick={() => setDark(!dark)}>
              <Icon name={dark ? "sun" : "moon"} size={15} />{" "}
              {dark ? "Light" : "Dark"}
            </button>
          </div>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-main">
          <button
            aria-label="Open menu"
            className="mobile-menu"
            onClick={() => setMenu(!menu)}
          >
            <Icon name={menu ? "close" : "menu"} />
          </button>
          <button className="logo-button" onClick={() => go("home")}>
            <Logo />
          </button>
          <label className="global-search">
            <Icon name="search" />
          <input
            onKeyDown={(event) => {
              if (event.key === "Enter") go("search")
            }}
            placeholder="Search products, brands, SKUs and specifications"
          />
            <kbd>⌘ K</kbd>
          </label>
          <div className="header-actions">
          <button onClick={() => go("login")}>
              <Icon name="user" />
              <span>
                Account<small>Sign in</small>
              </span>
            </button>
            <button onClick={() => go("compare")}>
              <Icon name="compare" />
              <span>
                Compare<small>2 items</small>
              </span>
            </button>
            <button className="cart-action" onClick={() => go("cart")}>
              <Icon name="bag" />
              <span>
                Cart<small>{cartCount} items</small>
              </span>
              {cartCount > 0 && <b>{cartCount}</b>}
            </button>
          </div>
        </div>
        <nav className={menu ? "nav open" : "nav"}>
          <div className="container nav-inner">
            {[
              "Shop",
              "Keyboards",
              "Mice",
              "Gaming",
              "PC Components",
              "Accessories",
              "Brands",
              "Deals",
              "Support",
            ].map((item, i) => (
              <button
                className={i === 0 ? "shop-all" : ""}
                key={item}
                onClick={() => {
                  go(item === "Support" ? "support" : "shop")
                  setMenu(false)
                }}
              >
                {i === 0 && <Icon name="menu" size={16} />}
                {item}
                {["Shop", "Keyboards", "PC Components"].includes(item) && (
                  <span>⌄</span>
                )}
              </button>
            ))}
            <button className="pc-builder" onClick={() => go("builder")}>
              <Icon name="cube" size={16} /> PC Builder <em>Preview</em>
            </button>
          </div>
        </nav>
      </header>
    </>
  )
}

function Home({
  add,
  go,
}: {
  add: (p: typeof products[0]) => void
  go: (page: string) => void
}) {
  const categories = [
    ["Mechanical", "Keyboards", "Precision switches, custom feel", "01"],
    ["Gaming", "Mice", "Speed, control, zero compromise", "02"],
    ["Wireless", "Productivity", "A cleaner, smarter workspace", "03"],
    [
      "PC Components",
      "Future catalog",
      "Built to scale with your next build",
      "04",
    ],
  ]
  return (
    <main>
      <section className="hero">
        <img
          alt="Premium gaming setup with keyboard and desktop computer"
          className="hero-image"
          src={images.hero}
        />
        <div className="hero-grid" />
        <div className="container hero-content">
          <div className="hero-copy">
            <span className="eyebrow">DELTA PRECISION / 2026</span>
            <h1>
              Technology,
              <br />
              selected with <i>intent.</i>
            </h1>
            <p>
              Authentic peripherals and expert guidance for better work, sharper
              play, and every build that comes next.
            </p>
            <div className="hero-actions">
              <Button icon="arrow" onClick={() => go("shop")}>
                Explore the collection
              </Button>
              <Button onClick={() => go("builder")} variant="secondary">
                Build your PC
              </Button>
            </div>
          </div>
          <div className="hero-product">
            <span>EDITOR’S PICK · 01</span>
            <strong>Keychron Q1 Max</strong>
            <small>Precision-milled aluminium. Wireless freedom.</small>
            <b>{money(21900)}</b>
          </div>
          <div className="hero-index">
            <b>01</b>
            <span />
            <small>04</small>
          </div>
        </div>
      </section>
      <section className="trust-strip">
        <div className="container trust-grid">
          {[
            ["shield", "Authenticity first", "Products sourced with care"],
            ["box", "Clear availability", "Live prototype stock states"],
            ["wallet", "Flexible checkout", "COD and configurable methods"],
            ["user", "Human support", "Help before and after purchase"],
          ].map(([icon, title, text]) => (
            <div key={title}>
              <Icon name={icon as IconName} />
              <span>
                <strong>{title}</strong>
                <small>{text}</small>
              </span>
            </div>
          ))}
        </div>
      </section>
      <section className="section categories-section">
        <div className="container">
          <SectionTitle
            eyebrow="Explore the catalog"
            title="Find your category."
            action="View all categories"
          />
          <div className="category-grid">
            {categories.map(([top, bottom, copy, no], i) => (
              <button
                className={`category-card category-${i + 1}`}
                key={no}
                onClick={() => go("shop")}
              >
                <span className="category-no">{no} / 04</span>
                <div>
                  <small>{copy}</small>
                  <h3>
                    {top}
                    <br />
                    <i>{bottom}</i>
                  </h3>
                  <span className="category-link">
                    Explore <Icon name="arrow" size={16} />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="section products-section">
        <div className="container">
          <SectionTitle
            eyebrow="Curated hardware"
            title="Featured this week."
            action="Shop all products"
          />
          <div className="product-grid">
            {products.map((p) => (
              <ProductCard
                key={p.id}
                onAdd={() => add(p)}
                onOpen={() => go("product")}
                product={p}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="campaign">
        <div className="container campaign-inner">
          <div>
            <span className="eyebrow">THE SETUP EDIT / 01</span>
            <h2>
              Built for the hours
              <br />
              no one sees.
            </h2>
            <p>
              A considered selection of keyboards, mice, and desk essentials for
              focused work and competitive play.
            </p>
            <Button icon="arrow" onClick={() => go("shop")}>
              Shop the edit
            </Button>
          </div>
          <div className="campaign-stat">
            <b>24</b>
            <span>
              carefully selected
              <br />
              current products
            </span>
          </div>
        </div>
      </section>
      <section className="section promise">
        <div className="container promise-grid">
          <div>
            <span className="eyebrow">WHY DELTATECH</span>
            <h2>
              Hardware retail,
              <br />
              <i>engineered better.</i>
            </h2>
          </div>
          <div>
            <p>
              We believe buying technology should feel informed, transparent,
              and personal. Every detail—from model number to warranty state—is
              designed to help you choose with confidence.
            </p>
            <div className="promise-points">
              {[
                "Technical clarity",
                "Authentic products",
                "Responsible support",
                "Built for the long term",
              ].map((x, i) => (
                <span key={x}>
                  <b>0{i + 1}</b>
                  {x}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
    </main>
  )
}

function Shop({
  add,
  go,
}: {
  add: (p: typeof products[0]) => void
  go: (page: string) => void
}) {
  const [filters, setFilters] = useState(false)
  const [sort, setSort] = useState("Recommended")
  const [density, setDensity] = useState(3)
  return (
    <main className="page shop-page">
      <div className="container">
        <div className="breadcrumbs">
          Home <span>/</span> Shop <span>/</span> Keyboards
        </div>
        <div className="catalog-heading">
          <div>
            <span className="eyebrow">42 PRODUCTS</span>
            <h1>Mechanical keyboards.</h1>
            <p>
              From first switch to full custom build—find a board matched to the
              way you work and play.
            </p>
          </div>
          <div className="catalog-note">
            CATEGORY GUIDE <b>How to choose your switch</b>
            <Icon name="arrow" />
          </div>
        </div>
        <div className="catalog-tools">
          <Button onClick={() => setFilters(!filters)} variant="secondary">
            <Icon name="settings" /> Filters <b>3</b>
          </Button>
          <div className="density">
            <span>View</span>
            {[2, 3, 4].map((n) => (
              <button
                className={density === n ? "active" : ""}
                key={n}
                onClick={() => setDensity(n)}
              >
                {n}
              </button>
            ))}
          </div>
          <label>
            Sort by{" "}
            <select onChange={(e) => setSort(e.target.value)} value={sort}>
              <option>Recommended</option>
              <option>Price: Low to High</option>
              <option>Newest</option>
              <option>Highest Rated</option>
            </select>
          </label>
        </div>
        <div className="catalog-layout">
          <aside className={filters ? "filters open" : "filters"}>
            <div className="filter-head">
              <b>Refine selection</b>
              <button onClick={() => setFilters(false)}>
                <Icon name="close" />
              </button>
            </div>
            {[
              "Availability",
              "Brand",
              "Switch type",
              "Connection",
              "Keyboard size",
              "Layout",
              "Hot-swappable",
              "Price range",
            ].map((f, i) => (
              <details key={f} open={i < 3}>
                <summary>
                  {f}
                  <span>+</span>
                </summary>
                <div className="filter-options">
                  {i === 0
                    ? ["In stock", "Pre-order", "Out of stock"].map((x) => (
                        <label key={x}>
                          <input type="checkbox" /> {x}
                          <small>{Math.floor(Math.random() * 30) + 5}</small>
                        </label>
                      ))
                    : ["Keychron", "Royal Kludge", "Aula"].map((x) => (
                        <label key={x}>
                          <input type="checkbox" /> {x}
                        </label>
                      ))}
                </div>
              </details>
            ))}
          </aside>
          <div className={`product-grid density-${density}`}>
            {[...products, ...products].map((p, i) => (
              <ProductCard
                key={`${p.id}-${i}`}
                onAdd={() => add(p)}
                onOpen={() => go("product")}
                product={p}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

function ProductDetail({
  add,
  go,
}: {
  add: (p: typeof products[0]) => void
  go: (page: string) => void
}) {
  const product = products[0]
  const [variant, setVariant] = useState("Jupiter Brown")
  const [tab, setTab] = useState("Specifications")
  const variants: Record<
    string,
    { ean: string; price: number; sku: string; stock: number }
  > = {
    "Jupiter Brown": {
      ean: "4895248872146",
      price: 21900,
      sku: "DT-KC-Q1M-BN",
      stock: 12,
    },
    "Jupiter Red": {
      ean: "4895248872153",
      price: 22400,
      sku: "DT-KC-Q1M-RD",
      stock: 5,
    },
    "Jupiter Banana": {
      ean: "4895248872160",
      price: 22900,
      sku: "DT-KC-Q1M-BA",
      stock: 3,
    },
  }
  const selectedVariant = variants[variant]
  return (
    <main className="page">
      <div className="container">
        <div className="breadcrumbs">
          Home <span>/</span> Keyboards <span>/</span> {product.brand}
        </div>
        <div className="product-detail">
          <div className="gallery">
            <div className="gallery-main">
              <img alt={product.name} src={product.image} />
              <span>01 / 04</span>
            </div>
            <div className="thumbnails">
              {[product.image, images.keyboard1, images.keyboard2].map(
                (im, i) => (
                  <button className={i === 0 ? "active" : ""} key={im}>
                    <img alt="" src={im} />
                  </button>
                ),
              )}
            </div>
          </div>
          <div className="product-info">
            <span className="eyebrow">
              {product.brand} / {product.category}
            </span>
            <h1>{product.name}</h1>
            <div className="detail-meta">
              <span>★ {product.rating} · 37 reviews</span>
              <span>Model: Q1M-M3</span>
              <span>SKU: {selectedVariant.sku}</span>
              <span>EAN: {selectedVariant.ean}</span>
            </div>
            <p className="lead">
              A premium 75% wireless mechanical keyboard crafted from CNC
              aluminium, with QMK/VIA support and a refined double-gasket
              design.
            </p>
            <div className="detail-price">
              <strong>{money(selectedVariant.price)}</strong>
              <del>{money(product.old)}</del>
              <span>Save {money(product.old - selectedVariant.price)}</span>
            </div>
            <div className="stock-panel">
              <span>
                <i /> In stock — {selectedVariant.stock} available
              </span>
              <small>Availability shown for this selected variant</small>
            </div>
            <fieldset>
              <legend>
                Switch type <b>{variant}</b>
              </legend>
              <div className="variant-row">
                {["Jupiter Brown", "Jupiter Red", "Jupiter Banana"].map((v) => (
                  <button
                    className={variant === v ? "active" : ""}
                    key={v}
                    onClick={() => setVariant(v)}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </fieldset>
            <div className="purchase-actions">
              <div className="quantity">
                <button>−</button>
                <span>1</span>
                <button>+</button>
              </div>
              <Button
                onClick={() =>
                  add({
                    ...product,
                    price: selectedVariant.price,
                    sku: selectedVariant.sku,
                    stock: selectedVariant.stock,
                  })
                }
              >
                Add to cart <Icon name="bag" />
              </Button>
              <Button
                onClick={() => {
                  add({
                    ...product,
                    price: selectedVariant.price,
                    sku: selectedVariant.sku,
                    stock: selectedVariant.stock,
                  })
                  go("checkout")
                }}
                variant="secondary"
              >
                Buy now
              </Button>
            </div>
            <div className="assurances">
              {[
                ["shield", "Authenticity support"],
                ["box", "Warranty: 1 year"],
                ["user", "Product assistance"],
              ].map(([icon, text]) => (
                <span key={text}>
                  <Icon name={icon as IconName} />
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>
        <section className="product-tabs">
          <div className="tab-list">
            {[
              "Overview",
              "Key features",
              "Specifications",
              "Warranty",
              "Reviews",
              "FAQ",
            ].map((t) => (
              <button
                className={tab === t ? "active" : ""}
                key={t}
                onClick={() => setTab(t)}
              >
                {t}
              </button>
            ))}
          </div>
          {tab === "Reviews" ? (
            <div className="public-reviews">
              <div className="review-summary">
                <strong>4.9</strong>
                <span>★★★★★</span>
                <small>37 verified-purchase reviews</small>
                <select>
                  <option>Most helpful</option>
                  <option>Newest</option>
                  <option>Highest rated</option>
                </select>
              </div>
              <div className="published-review">
                <div>
                  <span>AR</span>
                  <p>
                    <b>Adnan Rahman</b>
                    <small>Verified purchase · Approved</small>
                  </p>
                  <strong>★★★★★</strong>
                </div>
                <h3>Excellent build quality and a clear upgrade.</h3>
                <p>
                  The aluminium case feels substantial, the wireless connection
                  has been reliable, and VIA made remapping straightforward.
                </p>
              </div>
            </div>
          ) : (
          <div className="spec-content">
            <div>
              <span className="eyebrow">{tab}</span>
              <h2>
                Technical detail,
                <br />
                without the guesswork.
              </h2>
              <p>
                Structured information helps you compare precisely and select
                the correct variant.
              </p>
            </div>
            <dl>
              {[
                ["Layout", "75% ANSI"],
                ["Connectivity", "2.4 GHz / Bluetooth 5.1 / USB-C"],
                ["Frame material", "CNC machined aluminium"],
                ["Polling rate", "1,000 Hz wired & 2.4 GHz"],
                ["Compatibility", "macOS / Windows / Linux"],
                ["Hot-swappable", "Yes, 3-pin and 5-pin MX"],
              ].map(([dt, dd]) => (
                <div key={dt}>
                  <dt>{dt}</dt>
                  <dd>{dd}</dd>
                </div>
              ))}
            </dl>
          </div>
          )}
        </section>
        <section className="section">
          <SectionTitle
            eyebrow="COMPLETE YOUR SETUP"
            title="Related products."
          />
          <div className="product-grid">
            {products.slice(1).map((p) => (
              <ProductCard
                key={p.id}
                onAdd={() => add(p)}
                onOpen={() => {}}
                product={p}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

function Cart({
  cart,
  go,
  remove,
}: {
  cart: typeof products
  go: (p: string) => void
  remove: (id: number) => void
}) {
  const subtotal = cart.reduce((sum, p) => sum + p.price, 0)
  const [coupon, setCoupon] = useState("")
  const [couponState, setCouponState] = useState<
    "idle" | "applied" | "invalid" | "expired"
  >("idle")
  const discount = couponState === "applied" ? Math.min(500, subtotal) : 0
  const applyCoupon = () => {
    const code = coupon.trim().toUpperCase()
    setCouponState(
      code === "WELCOME500"
        ? "applied"
        : code === "EXPIRED15"
          ? "expired"
          : "invalid",
    )
  }
  return (
    <main className="page">
      <div className="container narrow">
        <div className="breadcrumbs">
          Home <span>/</span> Cart
        </div>
        <SectionTitle eyebrow={`${cart.length} ITEMS`} title="Your cart." />
        <div className="cart-layout">
          <div className="cart-list">
            {cart.length === 0 ? (
              <Empty
                title="Your cart is ready for something good."
                action={() => go("shop")}
              />
            ) : (
              cart.map((p, i) => (
                <div className="cart-item" key={`${p.id}-${i}`}>
                  <img alt={p.name} src={p.image} />
                  <div>
                    <span>{p.brand}</span>
                    <h3>{p.name}</h3>
                    <small>{p.specs}</small>
                    <button onClick={() => remove(p.id)}>Remove</button>
                  </div>
                  <div className="quantity">
                    <button>−</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                  <strong>{money(p.price)}</strong>
                </div>
              ))
            )}
          </div>
          <aside className="order-summary">
            <span className="eyebrow">ORDER SUMMARY</span>
            <div>
              <span>Subtotal</span>
              <b>{money(subtotal)}</b>
            </div>
            <div>
              <span>Delivery</span>
              <b>Calculated next</b>
            </div>
            <label>
              Coupon code{" "}
              <span>
                <input
                  onChange={(event) => setCoupon(event.target.value)}
                  placeholder="Enter code"
                  value={coupon}
                />
                <button onClick={applyCoupon}>Apply</button>
              </span>
              {couponState !== "idle" && (
                <small className={`coupon-message ${couponState}`}>
                  {couponState === "applied"
                    ? "WELCOME500 applied · ৳500 fixed discount"
                    : couponState === "expired"
                      ? "This coupon expired on 28 Feb 2026."
                      : "Coupon not recognized or eligibility not met."}
                </small>
              )}
            </label>
            {discount > 0 && (
              <div>
                <span>Coupon discount</span>
                <b className="discount-value">−{money(discount)}</b>
              </div>
            )}
            <div className="total">
              <span>Total</span>
              <strong>{money(subtotal - discount)}</strong>
            </div>
            <Button
              className="full"
              icon="arrow"
              onClick={() => go("checkout")}
            >
              Proceed to checkout
            </Button>
            <small>
              Payment options and delivery fees are confirmed at checkout.
            </small>
          </aside>
        </div>
      </div>
    </main>
  )
}

function Checkout({
  cart,
  go,
}: {
  cart: typeof products
  go: (p: string) => void
}) {
  const [step, setStep] = useState(1)
  const [complete, setComplete] = useState(false)
  if (complete)
    return (
      <main className="page">
        <div className="container confirmation">
          <div className="success-mark">
            <Icon name="check" size={34} />
          </div>
          <span className="eyebrow">ORDER CONFIRMED</span>
          <h1>Thank you. We’ve got it.</h1>
          <p>
            Your prototype order <b>DT-260184</b> is confirmed. Payment and
            fulfillment remain separately tracked.
          </p>
          <div className="confirmation-card">
            <span>
              Order number <b>DT-260184</b>
            </span>
            <span>
              Payment <b>Cash on delivery · Pending</b>
            </span>
            <span>
              Delivery <b>Editable estimate placeholder</b>
            </span>
          </div>
          <Button icon="arrow" onClick={() => go("track")}>
            Track this order
          </Button>
        </div>
      </main>
    )
  return (
    <main className="page checkout-page">
      <div className="container narrow">
        <div className="checkout-head">
          <Logo />
          <span>SECURE CHECKOUT</span>
        </div>
        <div className="steps">
          {["Information", "Delivery", "Payment", "Review"].map((s, i) => (
            <button
              className={step === i + 1 ? "active" : step > i + 1 ? "done" : ""}
              key={s}
              onClick={() => setStep(i + 1)}
            >
              <b>{step > i + 1 ? "✓" : i + 1}</b>
              {s}
            </button>
          ))}
        </div>
        <div className="checkout-grid">
          <section className="checkout-form">
            <span className="eyebrow">STEP 0{step}</span>
            <h1>
              {
                [
                  "Contact information",
                  "Delivery details",
                  "Payment method",
                  "Review your order",
                ][step - 1]
              }
            </h1>
            {step === 1 && (
              <FormGrid
                fields={[
                  "Full name",
                  "Email address",
                  "Mobile number",
                  "District / city",
                  "Full delivery address",
                  "Order notes (optional)",
                ]}
              />
            )}
            {step === 2 && (
              <div className="choice-list">
                {[
                  "Standard delivery · Fee confirmed by area",
                  "Store / office collection · Subject to confirmation",
                ].map((x, i) => (
                  <label key={x}>
                    <input
                      defaultChecked={i === 0}
                      name="shipping"
                      type="radio"
                    />
                    <span>
                      <b>{x.split(" · ")[0]}</b>
                      <small>{x.split(" · ")[1]}</small>
                    </span>
                  </label>
                ))}
              </div>
            )}
            {step === 3 && (
              <div className="choice-list">
                {[
                  "Cash on delivery · Pay when received",
                  "Online payment · Configurable gateway",
                  "Other method · Set by administrator",
                ].map((x, i) => (
                  <label key={x}>
                    <input
                      defaultChecked={i === 0}
                      name="payment"
                      type="radio"
                    />
                    <span>
                      <b>{x.split(" · ")[0]}</b>
                      <small>{x.split(" · ")[1]}</small>
                    </span>
                  </label>
                ))}
              </div>
            )}
            {step === 4 && (
              <div className="review-box">
                <Icon name="check" />
                <div>
                  <b>Ready for confirmation</b>
                  <p>
                    This is a prototype. No payment will be processed and no
                    live order will be created.
                  </p>
                </div>
              </div>
            )}
            <Button
              icon="arrow"
              onClick={() => (step < 4 ? setStep(step + 1) : setComplete(true))}
            >
              {step < 4 ? "Continue" : "Confirm prototype order"}
            </Button>
          </section>
          <aside className="checkout-summary">
            <span className="eyebrow">YOUR ORDER</span>
            {cart.length ? (
              cart.map((p, i) => (
                <div className="mini-item" key={`${p.id}-${i}`}>
                  <img alt="" src={p.image} />
                  <span>
                    <b>{p.name}</b>
                    <small>{p.specs}</small>
                  </span>
                  <strong>{money(p.price)}</strong>
                </div>
              ))
            ) : (
              <p>No cart items. Prototype total shown.</p>
            )}
            <div className="total">
              <span>Total</span>
              <strong>{money(cart.reduce((s, p) => s + p.price, 0))}</strong>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}

function FormGrid({ fields }: { fields: string[] }) {
  return (
    <div className="form-grid">
      {fields.map((f, i) => (
        <label className={i > 3 ? "wide" : ""} key={f}>
          <span>{f}</span>
          {i === 3 ? (
            <select>
              <option>Select area</option>
              <option>Dhaka</option>
              <option>Chattogram</option>
            </select>
          ) : (
            <input placeholder={f} />
          )}
        </label>
      ))}
    </div>
  )
}

function Builder() {
  const components = [
    "Processor",
    "Motherboard",
    "Memory",
    "Graphics card",
    "Storage",
    "Power supply",
    "Cooling",
    "Case",
  ]
  const [selected, setSelected] = useState<number[]>([0, 1])
  return (
    <main className="page">
      <div className="container">
        <div className="builder-heading">
          <div>
            <span className="eyebrow">
              FUTURE CAPABILITY / INTERACTIVE PREVIEW
            </span>
            <h1>Build with confidence.</h1>
            <p>
              A compatibility-aware workspace ready for DeltaTech’s future PC
              component catalog.
            </p>
          </div>
          <div className="compatibility">
            <Icon name="check" />
            <span>
              <b>Compatible so far</b>
              <small>2 of 8 components selected</small>
            </span>
          </div>
        </div>
        <div className="builder-layout">
          <div className="component-list">
            {components.map((c, i) => (
              <div
                className={
                  selected.includes(i)
                    ? "component-row selected"
                    : "component-row"
                }
                key={c}
              >
                <span className="component-index">0{i + 1}</span>
                <Icon name={i === 5 ? "wallet" : "cube"} />
                <div>
                  <b>{c}</b>
                  <small>
                    {selected.includes(i)
                      ? i === 0
                        ? "AMD Ryzen 7 7800X3D · AM5"
                        : "MSI B650 Tomahawk WiFi · ATX"
                      : "Required component not selected"}
                  </small>
                </div>
                {selected.includes(i) ? (
                  <>
                    <strong>{i === 0 ? "৳48,500" : "৳28,900"}</strong>
                    <button
                      onClick={() =>
                        setSelected(selected.filter((x) => x !== i))
                      }
                    >
                      Change
                    </button>
                  </>
                ) : (
                  <Button
                    onClick={() => setSelected([...selected, i])}
                    variant="secondary"
                  >
                    Choose
                  </Button>
                )}
              </div>
            ))}
          </div>
          <aside className="build-summary">
            <span className="eyebrow">LIVE BUILD SUMMARY</span>
            <div className="build-ring">
              <b>{selected.length}/8</b>
              <span>selected</span>
            </div>
            <dl>
              <div>
                <dt>Estimated total</dt>
                <dd>৳77,400</dd>
              </div>
              <div>
                <dt>Estimated power</dt>
                <dd>142 W</dd>
              </div>
              <div>
                <dt>Compatibility</dt>
                <dd className="good">Compatible</dd>
              </div>
            </dl>
            <div className="build-warning">
              <Icon name="shield" />
              <span>
                <b>6 selections needed</b>
                <small>
                  Complete mandatory components to validate the full build.
                </small>
              </span>
            </div>
            <Button className="full">Save configuration</Button>
            <Button className="full" variant="secondary">
              Request consultation
            </Button>
          </aside>
        </div>
      </div>
    </main>
  )
}

function Account({ go }: { go: (page: string) => void }) {
  const [tab, setTab] = useState("Overview")
  return (
    <main className="page">
      <div className="container account-shell">
        <aside className="account-nav">
          <div className="account-person">
            <span>AR</span>
            <div>
              <b>Adnan Rahman</b>
              <small>Customer since 2024</small>
            </div>
          </div>
          {[
            "Overview",
            "My orders",
            "Order tracking",
            "Wishlist",
            "Product reviews",
            "Saved addresses",
            "Personal information",
            "Password & security",
            "Support requests",
            "Notifications",
          ].map((x) => (
            <button
              className={tab === x ? "active" : ""}
              key={x}
              onClick={() => setTab(x)}
            >
              {x}
            </button>
          ))}
        </aside>
        <section className="account-content">
          {tab === "Overview" && (
            <>
              <span className="eyebrow">MY ACCOUNT</span>
              <h1>Good afternoon, Adnan.</h1>
              <p>Here’s what’s happening with your orders and account.</p>
              <div className="account-stats">
                {[
                  ["2", "Active orders"],
                  ["4", "Wishlist items"],
                  ["1", "Review pending"],
                ].map((x) => (
                  <div key={x[1]}>
                    <b>{x[0]}</b>
                    <span>{x[1]}</span>
                  </div>
                ))}
              </div>
              <SectionTitle title="Recent orders" action="View all" />
              <div className="order-card">
                <div>
                  <span>ORDER DT-260184</span>
                  <b>Aula F75 Pro Wireless</b>
                  <small>Placed 18 Mar 2026 · ৳6,290</small>
                </div>
                <span className="status processing">In transit</span>
                <Button onClick={() => go("order-detail")} variant="secondary">
                  View order
                </Button>
              </div>
            </>
          )}
          {tab === "My orders" && (
            <AccountOrders go={go} />
          )}
          {tab === "Saved addresses" && (
            <AccountAddresses />
          )}
          {tab === "Product reviews" && (
            <ReviewWorkspace />
          )}
          {!["Overview", "My orders", "Saved addresses", "Product reviews"].includes(
            tab,
          ) && (
            <AccountSettings tab={tab} />
          )}
        </section>
      </div>
    </main>
  )
}

function AccountOrders({ go }: { go: (page: string) => void }) {
  return (
    <div className="account-subview">
      <span className="eyebrow">ORDER HISTORY</span>
      <h2>Every purchase, in one place.</h2>
      {[
        ["DT-260184", "18 Mar 2026", "৳6,290", "In transit"],
        ["DT-251942", "02 Dec 2025", "৳21,900", "Delivered"],
      ].map((order) => (
        <div className="order-card" key={order[0]}>
          <div>
            <span>ORDER {order[0]}</span>
            <b>{order[0] === "DT-260184" ? "Aula F75 Pro Wireless" : "Keychron Q1 Max"}</b>
            <small>
              {order[1]} · {order[2]} · COD
            </small>
          </div>
          <span className={`status ${order[3] === "Delivered" ? "success" : "processing"}`}>
            {order[3]}
          </span>
          <Button onClick={() => go("order-detail")} variant="secondary">
            Details & invoice
          </Button>
        </div>
      ))}
    </div>
  )
}

function AccountAddresses() {
  const [editing, setEditing] = useState(false)
  return (
    <div className="account-subview">
      <span className="eyebrow">SAVED ADDRESSES</span>
      <h2>Delivery details.</h2>
      <div className="address-grid">
        <article>
          <span>DEFAULT SHIPPING</span>
          <b>Adnan Rahman</b>
          <p>Address placeholder, Dhaka, Bangladesh<br />01XXXXXXXXX</p>
          <Button onClick={() => setEditing(!editing)} variant="secondary">
            {editing ? "Close editor" : "Edit address"}
          </Button>
        </article>
        <button className="add-address" onClick={() => setEditing(true)}>
          <b>+</b>
          Add another address
        </button>
      </div>
      {editing && (
        <div className="inline-form">
          <FormGrid fields={["Full name", "Mobile number", "District / city", "Postal code", "Full address"]} />
          <Button>Save address</Button>
        </div>
      )}
    </div>
  )
}

function AccountSettings({ tab }: { tab: string }) {
  return (
    <div className="account-subview">
      <span className="eyebrow">ACCOUNT / {tab}</span>
      <h2>{tab}.</h2>
      <p className="muted-copy">
        Update account information with clear validation and confirmation states.
      </p>
      <FormGrid
        fields={
          tab === "Password & security"
            ? ["Current password", "New password", "Confirm new password"]
            : ["Full name", "Email address", "Mobile number", "Preferred language"]
        }
      />
      <Button>Save changes</Button>
    </div>
  )
}

function ReviewWorkspace() {
  const [state, setState] = useState<"eligible" | "pending">("eligible")
  return (
    <div className="account-subview">
      <span className="eyebrow">VERIFIED PURCHASE REVIEWS</span>
      <h2>Share an informed opinion.</h2>
      {state === "eligible" ? (
        <div className="review-editor">
          <div className="review-product">
            <img alt="Aula F75 Pro" src={products[2].image} />
            <div>
              <b>Aula F75 Pro Wireless</b>
              <small>Purchased in order DT-260184 · Eligible to review</small>
            </div>
          </div>
          <label>
            Your rating
            <span className="rating-picker">★ ★ ★ ★ ★</span>
          </label>
          <label>
            Review
            <textarea placeholder="What should another buyer know?" />
          </label>
          <Button onClick={() => setState("pending")}>Submit verified review</Button>
        </div>
      ) : (
        <div className="state-card success-state">
          <Icon name="check" />
          <div>
            <b>Review submitted for moderation</b>
            <span>It will appear publicly after approval. Current status: Pending.</span>
          </div>
        </div>
      )}
      <div className="review-state-row">
        {[
          ["Approved", "Published reviews appear on the product page."],
          ["Pending", "Awaiting moderation by DeltaTech."],
          ["Rejected", "Reason and editing guidance are provided."],
        ].map(([status, text]) => (
          <div key={status}>
            <span className={`status ${status === "Approved" ? "success" : "processing"}`}>
              {status}
            </span>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function AuthPage({ go }: { go: (page: string) => void }) {
  const [mode, setMode] = useState<"login" | "register" | "recover">("login")
  const [sent, setSent] = useState(false)
  return (
    <main className="page auth-page">
      <div className="auth-shell">
        <div className="auth-story">
          <span className="eyebrow">DELTATECH ACCOUNT</span>
          <h1>One account.<br />Every detail.</h1>
          <p>Track purchases, save addresses, request support, and review products you own.</p>
          <div className="auth-assurance">
            <Icon name="shield" />
            <span>Authentication is simulated in this front-end prototype.</span>
          </div>
        </div>
        <section className="auth-form">
          <div className="auth-tabs">
            <button className={mode === "login" ? "active" : ""} onClick={() => { setMode("login"); setSent(false) }}>Sign in</button>
            <button className={mode === "register" ? "active" : ""} onClick={() => { setMode("register"); setSent(false) }}>Create account</button>
          </div>
          {sent ? (
            <div className="state-card success-state">
              <Icon name="check" />
              <div><b>Check your inbox</b><span>Password recovery instructions were simulated successfully.</span></div>
            </div>
          ) : (
            <>
              <span className="eyebrow">{mode === "recover" ? "PASSWORD RECOVERY" : mode === "register" ? "NEW CUSTOMER" : "WELCOME BACK"}</span>
              <h2>{mode === "recover" ? "Recover access." : mode === "register" ? "Create your account." : "Sign in securely."}</h2>
              <div className="stack-form">
                {mode === "register" && <label>Full name<input placeholder="Your name" /></label>}
                <label>Email or phone<input placeholder="Email address or mobile number" /></label>
                {mode !== "recover" && <label>Password<input placeholder="Enter password" type="password" /></label>}
                {mode === "register" && <label className="check-label"><input type="checkbox" /> I agree to the terms and privacy policy.</label>}
              </div>
              <Button className="full" onClick={() => mode === "recover" ? setSent(true) : go("account")}>
                {mode === "recover" ? "Send recovery instructions" : mode === "register" ? "Create account" : "Sign in"}
              </Button>
              {mode === "login" && <button className="text-action" onClick={() => setMode("recover")}>Forgot your password?</button>}
            </>
          )}
        </section>
      </div>
    </main>
  )
}

function OrderDetail({ go }: { go: (page: string) => void }) {
  return (
    <main className="page">
      <div className="container narrow">
        <div className="breadcrumbs">Account <span>/</span> Orders <span>/</span> DT-260184</div>
        <div className="detail-heading">
          <div><span className="eyebrow">ORDER DT-260184</span><h1>Order details.</h1></div>
          <Button onClick={() => go("track")} variant="secondary">Track shipment</Button>
        </div>
        <div className="customer-detail-grid">
          <section className="detail-panel">
            <PanelHead title="Items" subtitle="1 product · 1 unit" />
            <div className="detail-product"><img alt="" src={products[2].image} /><div><b>Aula F75 Pro Wireless</b><span>Reaper Switch · Grey · DT-AU-F75-GR</span><small>Serial assigned after packing</small></div><strong>৳6,290</strong></div>
          </section>
          <aside className="detail-panel">
            <PanelHead title="Payment" subtitle="Cash on delivery" />
            <dl className="detail-list"><div><dt>Subtotal</dt><dd>৳6,290</dd></div><div><dt>Delivery</dt><dd>Editable fee</dd></div><div><dt>Paid</dt><dd>৳0</dd></div><div className="total"><dt>Due</dt><dd>৳6,290</dd></div></dl>
          </aside>
          <section className="detail-panel wide-panel">
            <PanelHead title="Fulfillment timeline" subtitle="Payment and delivery are tracked independently" />
            <div className="operational-timeline">{["Confirmed · 18 Mar 10:42", "Packed · 18 Mar 15:16", "Shipped · 19 Mar 09:05", "Delivered · Pending"].map((x, i) => <div className={i < 3 ? "complete" : ""} key={x}><span>{i < 3 ? "✓" : i + 1}</span><b>{x}</b></div>)}</div>
          </section>
        </div>
      </div>
    </main>
  )
}

function SearchResults({ add, go }: { add: (p: typeof products[0]) => void; go: (page: string) => void }) {
  const [query, setQuery] = useState("wireless keyboard")
  return (
    <main className="page">
      <div className="container">
        <span className="eyebrow">SEARCH / 14 RESULTS</span>
        <div className="search-page-head"><h1>Results for “{query}”.</h1><label><Icon name="search" /><input value={query} onChange={(event) => setQuery(event.target.value)} /></label></div>
        <div className="suggestion-row"><span>Related</span>{["75% keyboard", "tri-mode", "hot-swappable", "Keychron"].map(x => <button key={x}>{x}</button>)}</div>
        <div className="product-grid">{products.map(p => <ProductCard key={p.id} onAdd={() => add(p)} onOpen={() => go("product")} product={p} />)}</div>
      </div>
    </main>
  )
}

function SupportRequest() {
  const [submitted, setSubmitted] = useState(false)
  return (
    <main className="page">
      <div className="container support-layout">
        <div><span className="eyebrow">CUSTOMER SUPPORT</span><h1>Tell us what happened.</h1><p>Submit an order, product, warranty, or account question. Confirmed business contact details remain editable placeholders.</p></div>
        <section className="support-form">
          {submitted ? (
            <div className="state-card success-state"><Icon name="check" /><div><b>Request DT-SUP-260184 received</b><span>A support specialist will review the prototype request.</span></div></div>
          ) : (
            <>
              <FormGrid fields={["Full name", "Email or phone", "Order reference (optional)", "Issue category", "Description"]} />
              <label className="file-drop"><Icon name="box" /><b>Attach supporting files</b><span>Images or documents · prototype upload</span><input type="file" /></label>
              <Button onClick={() => setSubmitted(true)}>Submit support request</Button>
            </>
          )}
        </section>
      </div>
    </main>
  )
}

function Tracking() {
  return (
    <main className="page">
      <div className="container tracking">
        <span className="eyebrow">ORDER TRACKING</span>
        <h1>Follow every step.</h1>
        <p>
          Enter your order details to view separate payment and fulfillment
          progress.
        </p>
        <div className="tracking-search">
          <input defaultValue="DT-260184" />
          <input defaultValue="01XXXXXXXXX" />
          <Button>Track order</Button>
        </div>
        <div className="tracking-card">
          <div className="tracking-top">
            <div>
              <small>ORDER</small>
              <b>DT-260184</b>
            </div>
            <div>
              <small>PAYMENT</small>
              <b className="amber">Pending · COD</b>
            </div>
            <div>
              <small>FULFILLMENT</small>
              <b className="blue">In transit</b>
            </div>
          </div>
          <div className="timeline">
            {["Confirmed", "Packed", "Shipped", "Delivered"].map((x, i) => (
              <div className={i < 3 ? "done" : ""} key={x}>
                <span>{i < 3 && <Icon name="check" size={14} />}</span>
                <b>{x}</b>
                <small>
                  {i < 3
                    ? ["18 Mar · 10:42", "18 Mar · 15:16", "19 Mar · 09:05"][i]
                    : "Estimated date placeholder"}
                </small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

function ContentPage({ page }: { page: string }) {
  const names: Record<string, string> = {
    support: "Help, when you need it.",
    compare: "Compare with clarity.",
  }
  return (
    <main className="page">
      <div className="container content-page">
        <span className="eyebrow">DELTATECH / SUPPORT</span>
        <h1>{names[page] || "Designed for what comes next."}</h1>
        <p>
          This connected prototype page demonstrates the shared information
          architecture. Business policies, contact details, guarantees, and
          provider integrations remain editable placeholders until confirmed by
          DeltaTech.
        </p>
        <div className="help-grid">
          {[
            "Product guidance",
            "Order & delivery",
            "Warranty support",
            "Returns & exchange",
            "Account help",
            "Business purchases",
          ].map((x, i) => (
            <button key={x}>
              <b>0{i + 1}</b>
              <span>{x}</span>
              <Icon name="arrow" />
            </button>
          ))}
        </div>
      </div>
    </main>
  )
}

function Empty({ action, title }: { action: () => void; title: string }) {
  return (
    <div className="empty">
      <Icon name="bag" size={30} />
      <h3>{title}</h3>
      <p>Explore curated products and add them here.</p>
      <Button onClick={action}>Browse products</Button>
    </div>
  )
}

function Newsletter() {
  return (
    <section className="newsletter">
      <div className="container newsletter-inner">
        <div>
          <span className="eyebrow">THE DELTA SIGNAL</span>
          <h2>
            Useful updates.
            <br />
            No unnecessary noise.
          </h2>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            Email address
            <input placeholder="you@example.com" type="email" />
          </label>
          <Button>
            Subscribe <Icon name="arrow" />
          </Button>
          <small>
            Product arrivals, considered recommendations, and important updates.
          </small>
        </form>
      </div>
    </section>
  )
}

function Footer({ go }: { go: (page: string) => void }) {
  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>
            Intelligent technology commerce for Bangladesh—designed around
            clarity, authenticity, and long-term support.
          </p>
          <span>OFFICIAL DETAILS / EDITABLE PLACEHOLDER</span>
        </div>
        {[
          ["Shop", "Keyboards", "Mice", "Accessories", "Brands", "Deals"],
          ["Help", "Track order", "Warranty", "Returns", "Delivery", "Contact"],
          [
            "Company",
            "About",
            "Vision",
            "Business sales",
            "Careers",
            "Policies",
          ],
        ].map(([head, ...links]) => (
          <div className="footer-col" key={head}>
            <b>{head}</b>
            {links.map((x) => (
              <button
                key={x}
                onClick={() => go(x === "Track order" ? "track" : "support")}
              >
                {x}
              </button>
            ))}
          </div>
        ))}
      </div>
      <div className="container footer-bottom">
        <span>© 2026 DeltaTech. Prototype content for review.</span>
        <span>Bangladesh / BDT ৳ / English</span>
      </div>
    </footer>
  )
}

const adminSections: {
  label: string
  items: [string, string, IconName][]
}[] = [
  { label: "COMMAND", items: [["dashboard", "Dashboard", "chart"]] },
  {
    label: "COMMERCE",
    items: [
      ["orders", "Sales & Orders", "bag"],
      ["products", "Products", "box"],
      ["inventory", "Inventory", "cube"],
      ["serials", "Serial & Barcode", "compare"],
      ["damaged", "Damaged Stock", "shield"],
      ["wholesale", "Wholesale", "user"],
    ],
  },
  {
    label: "SUPPLY",
    items: [
      ["purchases", "Purchases", "wallet"],
      ["suppliers", "Suppliers", "box"],
      ["courier", "Courier & Delivery", "arrow"],
    ],
  },
  {
    label: "FINANCE",
    items: [
      ["accounting", "Accounting", "wallet"],
      ["documents", "Invoices & Documents", "compare"],
      ["reports", "Reports & Analytics", "chart"],
    ],
  },
  {
    label: "RELATIONSHIPS",
    items: [
      ["warranty", "Warranty & Returns", "shield"],
      ["customers", "Customers", "user"],
      ["support-admin", "Support Tickets", "bell"],
      ["marketing", "Marketing", "chart"],
    ],
  },
  {
    label: "SYSTEM",
    items: [
      ["staff", "Staff & Permissions", "user"],
      ["settings", "Settings", "settings"],
    ],
  },
]

const moduleConfig: Record<string, {
  title: string
  eyebrow: string
  stats: [string, string, string][]
  columns: string[]
  rows: string[][]
  action: string
}> = {
  orders: {
    title: "Sales & Orders",
    eyebrow: "UNIFIED CHANNEL CONTROL",
    stats: [
      ["128", "Orders this month", "+12.4%"],
      ["৳1.42M", "Gross order value", "+8.7%"],
      ["৳184K", "Outstanding due", "12 accounts"],
      ["19", "Needs attention", "Review"],
    ],
    columns: [
      "Order",
      "Customer",
      "Channel",
      "Total",
      "Payment",
      "Fulfillment",
    ],
    rows: [
      [
        "DT-260184",
        "Adnan Rahman",
        "Website",
        "৳6,290",
        "Pending",
        "In transit",
      ],
      [
        "DT-260181",
        "Nexus IT",
        "Wholesale",
        "৳148,500",
        "Partially paid",
        "Reserved",
      ],
      ["DT-260179", "Nabila Ahmed", "Messenger", "৳21,900", "Paid", "Packed"],
      [
        "DT-260172",
        "Walk-in customer",
        "Offline",
        "৳4,890",
        "Paid",
        "Delivered",
      ],
    ],
    action: "Create manual order",
  },
  products: {
    title: "Product Catalog",
    eyebrow: "CATALOG OPERATIONS",
    stats: [
      ["486", "Total products", "+12 this month"],
      ["438", "Published", "90.1%"],
      ["28", "Draft products", "Review"],
      ["20", "Out of stock", "4.1%"],
    ],
    columns: ["Product", "SKU", "Brand", "Retail price", "Stock", "Status"],
    rows: products.map((p) => [
      p.name,
      p.sku,
      p.brand,
      money(p.price),
      `${p.stock} units`,
      "Published",
    ]),
    action: "Add product",
  },
  inventory: {
    title: "Inventory Control",
    eyebrow: "WAREHOUSE + OFFICE",
    stats: [
      ["1,842", "Total units", "৳8.42M value"],
      ["1,506", "Available", "81.7%"],
      ["192", "Reserved", "10.4%"],
      ["23", "Low stock alerts", "Review"],
    ],
    columns: ["Product", "SKU", "Warehouse", "Office", "Reserved", "Available"],
    rows: [
      ["Keychron Q1 Max", "DT-KC-Q1M-BN", "8", "4", "2", "10"],
      ["RK M75 Smart Display", "DT-RK-M75-PH", "5", "2", "1", "6"],
      ["Aula F75 Pro", "DT-AU-F75-GR", "18", "6", "4", "20"],
      ["Attack Shark X3 Pro", "DT-AS-X3P-WH", "12", "6", "3", "15"],
    ],
    action: "Stock transfer",
  },
  serials: {
    title: "Serial & Barcode",
    eyebrow: "UNIT-LEVEL TRACEABILITY",
    stats: [
      ["1,624", "Registered serials", "+42 this week"],
      ["1,208", "Available", "74.4%"],
      ["284", "Sold", "17.5%"],
      ["11", "Exceptions", "Review"],
    ],
    columns: [
      "Serial number",
      "Product",
      "EAN / SKU",
      "Location",
      "Status",
      "Warranty",
    ],
    rows: [
      [
        "DT26-KQ1-001842",
        "Keychron Q1 Max",
        "DT-KC-Q1M-BN",
        "Warehouse",
        "Available",
        "—",
      ],
      [
        "DT26-AF7-003921",
        "Aula F75 Pro",
        "DT-AU-F75-GR",
        "Office",
        "Reserved",
        "—",
      ],
      [
        "MFR-RKM75-88721",
        "RK M75",
        "DT-RK-M75-PH",
        "Customer",
        "Sold",
        "Active",
      ],
      [
        "DT26-ASX-002174",
        "Attack Shark X3 Pro",
        "DT-AS-X3P-WH",
        "Warehouse",
        "Damaged",
        "Claim open",
      ],
    ],
    action: "Register serials",
  },
  damaged: {
    title: "Damaged Stock",
    eyebrow: "QUARANTINE & RESOLUTION",
    stats: [
      ["14", "Damaged units", "৳86K value"],
      ["4", "Under inspection", "Active"],
      ["6", "Supplier return", "Pending"],
      ["3", "Resolved this month", "+1"],
    ],
    columns: [
      "Record",
      "Product",
      "Serial",
      "Location",
      "Reason",
      "Resolution",
    ],
    rows: [
      [
        "DMG-260041",
        "Attack Shark X3 Pro",
        "DT26-ASX-002174",
        "Warehouse",
        "Sensor fault",
        "Inspection",
      ],
      [
        "DMG-260038",
        "Aula F75 Pro",
        "DT26-AF7-003414",
        "Office",
        "Key chatter",
        "Supplier return",
      ],
      [
        "DMG-260034",
        "RK M75",
        "MFR-RKM75-88104",
        "Warehouse",
        "Box damage",
        "Review",
      ],
    ],
    action: "Register damage",
  },
  wholesale: {
    title: "Wholesale Accounts",
    eyebrow: "VENDOR LEDGERS",
    stats: [
      ["38", "Active vendors", "+3 this quarter"],
      ["৳1.84M", "Outstanding balance", "12 accounts"],
      ["৳3.2M", "Monthly sales", "+16.2%"],
      ["৳420K", "Pending collections", "This week"],
    ],
    columns: [
      "Vendor",
      "Contact",
      "Credit limit",
      "Outstanding",
      "Last sale",
      "Status",
    ],
    rows: [
      [
        "Nexus IT Solutions",
        "Business contact placeholder",
        "৳500,000",
        "৳184,500",
        "18 Mar 2026",
        "Active",
      ],
      [
        "ByteCraft BD",
        "Business contact placeholder",
        "৳250,000",
        "৳62,900",
        "16 Mar 2026",
        "Active",
      ],
      [
        "Tech Point Rangpur",
        "Business contact placeholder",
        "৳150,000",
        "৳0",
        "12 Mar 2026",
        "Active",
      ],
    ],
    action: "Add vendor",
  },
  purchases: {
    title: "Purchases & Receiving",
    eyebrow: "PROCUREMENT CONTROL",
    stats: [
      ["12", "Open purchase orders", "3 overdue"],
      ["৳2.18M", "On order", "Current value"],
      ["4", "Pending receiving", "This week"],
      ["৳624K", "Supplier payable", "7 invoices"],
    ],
    columns: [
      "PO number",
      "Supplier",
      "Currency",
      "Total cost",
      "Receiving",
      "Status",
    ],
    rows: [
      ["PO-260047", "Supplier Alpha", "USD", "৳842,000", "72 / 100", "Partial"],
      [
        "PO-260044",
        "Local Distributor",
        "BDT",
        "৳248,500",
        "40 / 40",
        "Received",
      ],
      [
        "PO-260041",
        "Supplier Beta",
        "USD",
        "৳1,092,000",
        "0 / 120",
        "Approved",
      ],
    ],
    action: "Create purchase order",
  },
  suppliers: {
    title: "Suppliers",
    eyebrow: "PAYABLES & SOURCING",
    stats: [
      ["16", "Active suppliers", "4 international"],
      ["৳624K", "Total payable", "Current"],
      ["৳210K", "Advances", "3 suppliers"],
      ["2", "Overdue invoices", "Review"],
    ],
    columns: [
      "Supplier",
      "Currency",
      "Purchases YTD",
      "Payable",
      "Last order",
      "Status",
    ],
    rows: [
      ["Supplier Alpha", "USD", "৳4.8M", "৳382,000", "PO-260047", "Active"],
      ["Local Distributor", "BDT", "৳2.1M", "৳92,000", "PO-260044", "Active"],
      ["Supplier Beta", "USD", "৳3.4M", "৳150,000", "PO-260041", "Active"],
    ],
    action: "Add supplier",
  },
  accounting: {
    title: "Accounting",
    eyebrow: "DOUBLE-ENTRY FINANCE",
    stats: [
      ["৳1.42M", "Revenue this month", "+8.7%"],
      ["৳468K", "Gross profit", "33.0% margin"],
      ["৳184K", "Receivables", "12 accounts"],
      ["৳624K", "Payables", "7 invoices"],
    ],
    columns: ["Account code", "Account", "Type", "Debit", "Credit", "Balance"],
    rows: [
      ["1100", "Cash & Bank", "Asset", "৳1,284,000", "৳920,000", "৳364,000 Dr"],
      [
        "1200",
        "Inventory",
        "Asset",
        "৳8,420,000",
        "৳1,086,000",
        "৳7,334,000 Dr",
      ],
      [
        "2100",
        "Accounts Payable",
        "Liability",
        "৳380,000",
        "৳1,004,000",
        "৳624,000 Cr",
      ],
      ["4100", "Product Sales", "Revenue", "৳0", "৳1,420,000", "৳1,420,000 Cr"],
    ],
    action: "New journal entry",
  },
}

const genericConfig = (page: string) => {
  const title =
    adminSections.flatMap((s) => s.items).find((x) => x[0] === page)?.[1] ||
    "Operations"
  return {
    title,
    eyebrow: "CONNECTED OPERATIONS",
    stats: [
      ["24", "Active records", "+4 this week"],
      ["8", "Pending actions", "Review"],
      ["96.4%", "Completion rate", "+2.1%"],
      ["3", "Exceptions", "Resolve"],
    ],
    columns: [
      "Reference",
      "Name / description",
      "Owner",
      "Updated",
      "Status",
      "Action",
    ],
    rows: [
      [
        "DT-260184",
        `${title} record A`,
        "Farhan A.",
        "18 Mar 2026",
        "Active",
        "View",
      ],
      [
        "DT-260179",
        `${title} record B`,
        "Samira K.",
        "17 Mar 2026",
        "Pending",
        "Review",
      ],
      [
        "DT-260172",
        `${title} record C`,
        "Nafis R.",
        "16 Mar 2026",
        "Completed",
        "View",
      ],
    ],
    action: `New ${title.toLowerCase()} record`,
  }
}

function AdminApp({
  dark,
  leave,
  setDark,
}: {
  dark: boolean
  leave: () => void
  setDark: (v: boolean) => void
}) {
  const [page, setPage] = useState("dashboard")
  const [sidebar, setSidebar] = useState(false)
  const [toast, setToast] = useState("")
  const notify = (text: string) => {
    setToast(text)
    window.setTimeout(() => setToast(""), 2400)
  }
  return (
    <div className="admin-shell">
      <aside className={sidebar ? "admin-sidebar open" : "admin-sidebar"}>
        <div className="admin-logo">
          <Logo />
          <button onClick={() => setSidebar(false)}>
            <Icon name="close" />
          </button>
        </div>
        <div className="workspace">
          <span>ΔT</span>
          <div>
            <b>DeltaTech</b>
            <small>Business OS · Prototype</small>
          </div>
        </div>
        <nav>
          {adminSections.map((s) => (
            <div className="nav-group" key={s.label}>
              <small>{s.label}</small>
              {s.items.map(([id, label, icon]) => (
                <button
                  className={page === id ? "active" : ""}
                  key={id}
                  onClick={() => {
                    setPage(id)
                    setSidebar(false)
                  }}
                >
                  <Icon name={icon as IconName} size={18} />
                  {label}
                  {id === "orders" && <b>19</b>}
                </button>
              ))}
            </div>
          ))}
        </nav>
        <button className="storefront-link" onClick={leave}>
          <Icon name="arrow" /> View storefront
        </button>
      </aside>
      <div className="admin-main">
        <header className="admin-topbar">
          <button className="admin-menu" onClick={() => setSidebar(true)}>
            <Icon name="menu" />
          </button>
          <div className="admin-search">
            <Icon name="search" />
            <input placeholder="Search orders, serials, customers…" />
            <kbd>⌘ K</kbd>
          </div>
          <div>
            <button onClick={() => setDark(!dark)}>
              <Icon name={dark ? "sun" : "moon"} />
            </button>
            <button>
              <Icon name="bell" />
              <i />
            </button>
            <button className="admin-user">
              <span>SA</span>
              <div>
                <b>Shahid Ahmed</b>
                <small>Super Admin</small>
              </div>
              <Icon name="chevron" size={15} />
            </button>
          </div>
        </header>
        {page === "dashboard" ? (
          <AdminDashboard notify={notify} setPage={setPage} />
        ) : (
          <AdminModule notify={notify} page={page} />
        )}
      </div>
      {toast && (
        <div className="toast">
          <Icon name="check" />
          {toast}
        </div>
      )}
    </div>
  )
}

function AdminDashboard({
  notify,
  setPage,
}: {
  notify: (x: string) => void
  setPage: (x: string) => void
}) {
  return (
    <main className="admin-page">
      <AdminHeading
        eyebrow="COMMAND CENTER / 18 MAR 2026"
        title="Good afternoon, Shahid."
        action={() => notify("Quick action menu opened")}
        actionText="Quick action"
      />
      <div className="metric-grid">
        {[
          ["৳84,620", "Today’s sales", "+12.8%", "chart"],
          ["৳62,400", "Collections", "+8.2%", "wallet"],
          ["৳184,500", "Outstanding dues", "12 accounts", "user"],
          ["৳8.42M", "Inventory value", "23 low stock", "cube"],
        ].map(([value, label, trend, icon]) => (
          <button
            className="metric-card"
            key={label}
            onClick={() =>
              setPage(
                label === "Inventory value"
                  ? "inventory"
                  : label === "Outstanding dues"
                    ? "wholesale"
                    : "orders",
              )
            }
          >
            <div>
              <span>{label}</span>
              <strong>{value}</strong>
              <small>{trend}</small>
            </div>
            <Icon name={icon as IconName} />
          </button>
        ))}
      </div>
      <div className="admin-grid-main">
        <section className="panel revenue-panel">
          <PanelHead
            title="Revenue performance"
            subtitle="Retail and wholesale · Last 12 months"
          />
          <div className="chart-area">
            <div className="chart-y">
              {["1.5M", "1.0M", "500K", "0"].map((x) => (
                <span key={x}>{x}</span>
              ))}
            </div>
            <div className="chart-bars">
              {[42, 55, 48, 63, 68, 60, 72, 76, 70, 85, 88, 94].map((h, i) => (
                <div key={i}>
                  <i style={{ height: `${h}%` }} />
                  <span>
                    {
                      [
                        "A",
                        "M",
                        "J",
                        "J",
                        "A",
                        "S",
                        "O",
                        "N",
                        "D",
                        "J",
                        "F",
                        "M",
                      ][i]
                    }
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="chart-legend">
            <span>
              <i /> Retail ৳842K
            </span>
            <span>
              <i /> Wholesale ৳578K
            </span>
          </div>
        </section>
        <section className="panel status-panel">
          <PanelHead title="Order status" subtitle="128 orders this month" />
          <div className="donut">
            <div>
              <b>128</b>
              <span>orders</span>
            </div>
          </div>
          <div className="status-legend">
            {[
              ["Delivered", "74", "58%"],
              ["Processing", "28", "22%"],
              ["In transit", "19", "15%"],
              ["Cancelled", "7", "5%"],
            ].map((x) => (
              <span key={x[0]}>
                <i />
                <b>{x[0]}</b>
                <small>
                  {x[1]} · {x[2]}
                </small>
              </span>
            ))}
          </div>
        </section>
      </div>
      <div className="admin-grid-secondary">
        <section className="panel">
          <PanelHead
            title="Recent orders"
            subtitle="Across all sales channels"
            action={() => setPage("orders")}
          />
          <DataTable
            columns={[
              "Order",
              "Customer",
              "Channel",
              "Total",
              "Payment",
              "Status",
            ]}
            rows={moduleConfig.orders.rows.slice(0, 4)}
          />
        </section>
        <section className="panel attention">
          <PanelHead title="Needs attention" subtitle="Operational alerts" />
          <div className="alert-list">
            {[
              ["23 products", "Below reorder threshold", "inventory"],
              ["4 transfers", "Awaiting receiving", "inventory"],
              ["৳184,500", "Wholesale dues to collect", "wholesale"],
              ["7 claims", "Pending warranty inspection", "warranty"],
            ].map(([value, text, page], i) => (
              <button key={text} onClick={() => setPage(page)}>
                <span className={`alert-icon a${i}`}>
                  <Icon name={i < 2 ? "cube" : i === 2 ? "wallet" : "shield"} />
                </span>
                <span>
                  <b>{value}</b>
                  <small>{text}</small>
                </span>
                <Icon name="chevron" size={16} />
              </button>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

function WorkflowShell({
  children,
  eyebrow,
  onBack,
  title,
}: {
  children: React.ReactNode
  eyebrow: string
  onBack: () => void
  title: string
}) {
  return (
    <main className="admin-page workflow-page">
      <button className="back-action" onClick={onBack}>
        ← Back to records
      </button>
      <div className="workflow-title">
        <div>
          <span>{eyebrow}</span>
          <h1>{title}</h1>
        </div>
        <span className="prototype-badge">Interactive prototype</span>
      </div>
      {children}
    </main>
  )
}

function StepRail({
  current,
  steps,
}: {
  current: number
  steps: string[]
}) {
  return (
    <div className="step-rail">
      {steps.map((step, index) => (
        <button
          className={
            current === index
              ? "active"
              : current > index
                ? "complete"
                : ""
          }
          key={step}
        >
          <span>{current > index ? "✓" : index + 1}</span>
          <b>{step}</b>
        </button>
      ))}
    </div>
  )
}

function ManualOrderWorkflow({
  notify,
  onBack,
}: {
  notify: (text: string) => void
  onBack: () => void
}) {
  const steps = ["Channel", "Customer", "Products", "Serials", "Pricing", "Payment", "Review"]
  const [step, setStep] = useState(0)
  const [channel, setChannel] = useState("Website")
  const [serials, setSerials] = useState(["DT26-AF7-003921"])
  return (
    <WorkflowShell eyebrow="SALES / NEW ORDER" onBack={onBack} title="Create manual order">
      <div className="workflow-layout">
        <StepRail current={step} steps={steps} />
        <section className="workflow-card">
          <div className="workflow-card-head">
            <div>
              <span>STEP {step + 1} OF {steps.length}</span>
              <h2>{steps[step]}</h2>
            </div>
            <span className="status processing">Draft · No stock deducted</span>
          </div>
          {step === 0 && (
            <div className="channel-grid">
              {[
                ["Website", "Online storefront order"],
                ["Facebook / Messenger", "Social conversation sale"],
                ["Direct / Offline", "Office or direct sale"],
                ["Wholesale", "Approved vendor pricing"],
              ].map(([name, text]) => (
                <button
                  className={channel === name ? "active" : ""}
                  key={name}
                  onClick={() => setChannel(name)}
                >
                  <Icon name={name === "Wholesale" ? "user" : "bag"} />
                  <b>{name}</b>
                  <span>{text}</span>
                </button>
              ))}
            </div>
          )}
          {step === 1 && (
            <div className="split-form">
              <label className="search-select">
                Find an existing customer
                <span><Icon name="search" /><input defaultValue={channel === "Wholesale" ? "Nexus IT Solutions" : "Adnan Rahman"} /></span>
              </label>
              <div className="selected-record">
                <span>SELECTED CUSTOMER</span>
                <b>{channel === "Wholesale" ? "Nexus IT Solutions" : "Adnan Rahman"}</b>
                <small>{channel === "Wholesale" ? "Wholesale · ৳500,000 credit limit · ৳184,500 due" : "Retail · 4 previous orders · No outstanding due"}</small>
              </div>
              <Button variant="secondary">Create new customer</Button>
            </div>
          )}
          {step === 2 && (
            <div>
              <label className="search-select">Add product, model, SKU or EAN<span><Icon name="search" /><input placeholder="Search catalog…" /></span></label>
              <div className="line-item-editor">
                <img alt="" src={products[2].image} />
                <div><b>Aula F75 Pro Wireless</b><small>Reaper Switch · DT-AU-F75-GR · 20 available</small></div>
                <label>Quantity<input defaultValue="1" type="number" /></label>
                <label>Unit price<input defaultValue="6290" /></label>
                <strong>৳6,290</strong>
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="serial-picker">
              <div className="serial-picker-head">
                <div><b>Assign individual units</b><span>1 required · {serials.length} selected</span></div>
                <Button variant="secondary"><Icon name="search" /> Scan serial</Button>
              </div>
              {["DT26-AF7-003921", "DT26-AF7-003922", "DT26-AF7-003923", "DT26-AF7-003924"].map(serial => (
                <label key={serial}>
                  <input
                    checked={serials.includes(serial)}
                    onChange={() => setSerials(serials.includes(serial) ? serials.filter(x => x !== serial) : [...serials, serial])}
                    type="checkbox"
                  />
                  <span><b>{serial}</b><small>Warehouse · Available · Received PO-260044</small></span>
                </label>
              ))}
            </div>
          )}
          {step === 4 && (
            <div className="form-section-grid">
              <label>Price list<select><option>{channel === "Wholesale" ? "Nexus IT vendor pricing" : "Retail pricing"}</option></select></label>
              <label>Discount type<select><option>Fixed amount</option><option>Percentage</option></select></label>
              <label>Discount amount<input defaultValue="0" /></label>
              <label>Shipping charge<input defaultValue="120" /></label>
              <label className="wide">Staff note<textarea placeholder="Visible internally only" /></label>
            </div>
          )}
          {step === 5 && (
            <div className="payment-workspace">
              <div className="form-section-grid">
                <label>Payment method<select><option>Cash on Delivery</option><option>Cash</option><option>Bank transfer</option><option>Configurable gateway</option></select></label>
                <label>Amount received<input defaultValue="0" /></label>
                <label>Payment status<select><option>Pending</option><option>Partially paid</option><option>Paid</option></select></label>
                <label>Reference<input placeholder="Optional transaction reference" /></label>
              </div>
              <div className="financial-callout"><span>Order total<b>৳6,410</b></span><span>Paid<b>৳0</b></span><span>Outstanding<b>৳6,410</b></span></div>
            </div>
          )}
          {step === 6 && (
            <div className="review-order">
              <div className="state-card"><Icon name="shield" /><div><b>Ready to create as draft</b><span>Inventory remains available until the order is confirmed and stock is reserved.</span></div></div>
              <DataTable columns={["Product", "Serial", "Qty", "Unit price", "Total"]} rows={[["Aula F75 Pro", serials[0] || "Not assigned", "1", "৳6,290", "৳6,290"]]} />
              <div className="posting-preview"><b>Operational effects after confirmation</b>{["Reserve 1 unit at Warehouse", "Link serial to order DT-260185", "Create ৳6,410 receivable if unpaid", "Preserve draft and approval audit trail"].map(x => <span key={x}><Icon name="check" size={14} />{x}</span>)}</div>
            </div>
          )}
          <div className="workflow-actions">
            <Button onClick={() => notify("Draft saved without stock deduction")} variant="secondary">Save draft</Button>
            <div>
              {step > 0 && <Button onClick={() => setStep(step - 1)} variant="secondary">Back</Button>}
              <Button
                icon="arrow"
                onClick={() => {
                  if (step < steps.length - 1) setStep(step + 1)
                  else notify("Draft order DT-260185 created")
                }}
              >
                {step < steps.length - 1 ? "Continue" : "Create draft order"}
              </Button>
            </div>
          </div>
        </section>
        <aside className="effect-panel">
          <span>ORDER CONTROL</span>
          <dl>
            <div><dt>Channel</dt><dd>{channel}</dd></div>
            <div><dt>Location</dt><dd>Warehouse</dd></div>
            <div><dt>Stock state</dt><dd className="good">Available</dd></div>
            <div><dt>Payment</dt><dd>Pending</dd></div>
            <div><dt>Due</dt><dd>৳6,410</dd></div>
          </dl>
          <p>Draft orders never deduct inventory. Reservation occurs only after confirmation.</p>
        </aside>
      </div>
    </WorkflowShell>
  )
}

function InventoryWorkflow({
  notify,
  onBack,
}: {
  notify: (text: string) => void
  onBack: () => void
}) {
  const [tab, setTab] = useState("Transfer")
  const [stage, setStage] = useState(2)
  const stages = ["Request", "Approval", "Dispatch", "In transit", "Receive", "Reconcile", "Complete"]
  return (
    <WorkflowShell eyebrow="INVENTORY / OPERATIONS" onBack={onBack} title="Stock control workspace">
      <div className="workspace-tabs">{["Transfer", "Receiving", "Adjustment", "Physical count", "Movement history", "Valuation"].map(x => <button className={tab === x ? "active" : ""} key={x} onClick={() => setTab(x)}>{x}</button>)}</div>
      {tab === "Transfer" && (
        <div className="two-panel-workflow">
          <section className="workflow-card">
            <div className="workflow-card-head"><div><span>TRANSFER TR-260038</span><h2>Warehouse → Office</h2></div><span className="status processing">{stages[stage]}</span></div>
            <div className="progress-track">{stages.map((x, i) => <button className={i <= stage ? "complete" : ""} key={x} onClick={() => setStage(i)}><span>{i < stage ? "✓" : i + 1}</span><b>{x}</b></button>)}</div>
            <div className="form-section-grid">
              <label>Source<select><option>Warehouse</option></select></label>
              <label>Destination<select><option>Office</option></select></label>
              <label>Responsible staff<select><option>Nafis Rahman</option></select></label>
              <label>Transfer date<input defaultValue="2026-03-18" type="date" /></label>
            </div>
            <DataTable columns={["Product", "SKU", "Quantity", "Serials", "Dispatched", "Received"]} rows={[["Aula F75 Pro", "DT-AU-F75-GR", "4", "4 assigned", "4", stage >= 4 ? "4" : "0"], ["RK M75", "DT-RK-M75-PH", "2", "2 assigned", "2", stage >= 4 ? "2" : "0"]]} />
            <div className="workflow-actions"><Button onClick={() => notify("Transfer discrepancy dialog opened")} variant="secondary">Report discrepancy</Button><Button onClick={() => { setStage(Math.min(stage + 1, 6)); notify(`Transfer moved to ${stages[Math.min(stage + 1, 6)]}`) }}>Advance transfer</Button></div>
          </section>
          <aside className="history-panel"><span>MOVEMENT HISTORY</span>{stages.slice(0, stage + 1).map((x, i) => <div key={x}><i /><b>{x}</b><small>{18 + i} Mar 2026 · {i % 2 ? "Shahid Ahmed" : "Nafis Rahman"}</small></div>)}</aside>
        </div>
      )}
      {tab === "Receiving" && <ReceivingWorkspace notify={notify} />}
      {tab === "Adjustment" && (
        <section className="workflow-card compact-workflow">
          <div className="workflow-card-head"><div><span>STOCK ADJUSTMENT</span><h2>Reconcile a counted difference</h2></div><span className="status processing">Approval required</span></div>
          <div className="form-section-grid"><label>Product<input defaultValue="Keychron Q1 Max" /></label><label>Variant<input defaultValue="Jupiter Brown" /></label><label>Location<select><option>Warehouse</option><option>Office</option></select></label><label>Reason<select><option>Physical count variance</option><option>Data correction</option></select></label><label>System stock<input defaultValue="8" disabled /></label><label>Counted stock<input defaultValue="7" /></label><label className="wide">Supporting notes<textarea defaultValue="One unit moved to inspection; movement record pending." /></label></div>
          <div className="financial-callout"><span>Difference<b>−1 unit</b></span><span>Value impact<b>−৳18,420</b></span><span>Result<b>7 units</b></span></div>
          <div className="workflow-actions"><Button variant="secondary">Save draft</Button><Button onClick={() => notify("Adjustment sent for approval")}>Submit for approval</Button></div>
        </section>
      )}
      {["Physical count", "Movement history", "Valuation"].includes(tab) && <OperationalRegister type={tab} />}
    </WorkflowShell>
  )
}

function ReceivingWorkspace({ notify }: { notify: (text: string) => void }) {
  return (
    <section className="workflow-card">
      <div className="workflow-card-head"><div><span>GOODS RECEIVING / PO-260047</span><h2>Partial receiving from Supplier Alpha</h2></div><span className="status processing">72 of 100 received</span></div>
      <div className="summary-strip"><span>Supplier<b>Supplier Alpha</b></span><span>Currency<b>USD / ৳ rate recorded</b></span><span>Destination<b>Warehouse</b></span><span>Discrepancies<b>2 flagged</b></span></div>
      <DataTable columns={["Product", "Expected", "Previously", "Receive now", "Serial mode", "Location"]} rows={[["Aula F75 Pro", "60", "42", "18", "Manufacturer import", "Warehouse"], ["RK M75", "40", "30", "10", "Generate internal", "Warehouse"]]} />
      <div className="state-card"><Icon name="compare" /><div><b>28 serials must be validated</b><span>Duplicates and invalid manufacturer serials will block final receiving.</span></div><Button variant="secondary">Open serial validation</Button></div>
      <div className="workflow-actions"><Button variant="secondary">Save receiving draft</Button><Button onClick={() => notify("28 units received; inventory movement preview created")}>Receive 28 units</Button></div>
    </section>
  )
}

function OperationalRegister({ type }: { type: string }) {
  return (
    <section className="workflow-card">
      <div className="workflow-card-head"><div><span>INVENTORY / {type.toUpperCase()}</span><h2>{type}</h2></div><Button variant="secondary">Export</Button></div>
      <div className="filter-bar"><input defaultValue="01 Mar 2026 — 18 Mar 2026" /><select><option>All locations</option><option>Warehouse</option><option>Office</option></select><select><option>All movement types</option><option>Receiving</option><option>Transfer</option><option>Sale</option><option>Return</option></select></div>
      <DataTable columns={["Date", "Reference", "Product", "Location", "Movement", "Quantity"]} rows={[["18 Mar 2026", "TR-260038", "Aula F75 Pro", "Warehouse → Office", "Transfer dispatch", "−4"], ["18 Mar 2026", "PO-260047", "Aula F75 Pro", "Warehouse", "Purchase receiving", "+18"], ["17 Mar 2026", "DT-260184", "Aula F75 Pro", "Warehouse", "Sale reservation", "−1"]]} />
    </section>
  )
}

function SerialWorkflow({
  notify,
  onBack,
}: {
  notify: (text: string) => void
  onBack: () => void
}) {
  const [tab, setTab] = useState("Generate internal")
  const [generated, setGenerated] = useState(false)
  return (
    <WorkflowShell eyebrow="SERIAL CONTROL / PHYSICAL UNITS" onBack={onBack} title="Serial & barcode workspace">
      <div className="workspace-tabs">{["Generate internal", "Manufacturer serials", "Bulk import", "Model explorer", "Barcode labels"].map(x => <button className={tab === x ? "active" : ""} key={x} onClick={() => setTab(x)}>{x}</button>)}</div>
      <section className="workflow-card serial-workspace">
        {tab === "Generate internal" && (
          <>
            <div className="workflow-card-head"><div><span>MODE A</span><h2>Generate unique internal serials</h2></div><span className="status success">Uniqueness scope · Global</span></div>
            <div className="form-section-grid"><label>Product<select><option>Aula F75 Pro Wireless</option></select></label><label>Variant<select><option>Reaper Switch · Grey</option></select></label><label>Quantity<input defaultValue="4" type="number" /></label><label>Prefix<input defaultValue="DT26-AF7" /></label></div>
            <Button onClick={() => setGenerated(true)} variant="secondary">Generate preview</Button>
            {generated && <div className="serial-preview">{["DT26-AF7-004101", "DT26-AF7-004102", "DT26-AF7-004103", "DT26-AF7-004104"].map(x => <span key={x}><Icon name="check" size={14} /><b>{x}</b><small>Unique · Valid</small></span>)}</div>}
            <div className="workflow-actions"><span>Serials are not saved until confirmation.</span><Button onClick={() => notify("4 unique serials registered")}>Confirm and register</Button></div>
          </>
        )}
        {tab === "Manufacturer serials" && (
          <>
            <div className="workflow-card-head"><div><span>MODE B</span><h2>Preserve manufacturer serials</h2></div><Button variant="secondary">Start barcode scanner</Button></div>
            <div className="manufacturer-entry"><textarea defaultValue={"MFR-RKM75-88728\nMFR-RKM75-88729\nMFR-RKM75-88721"} /><div><span className="status success">2 valid</span><span className="status danger">1 duplicate</span><p>MFR-RKM75-88721 already exists and is linked to invoice DT-251942.</p></div></div>
            <div className="workflow-actions"><Button variant="secondary">Clear invalid rows</Button><Button onClick={() => notify("Valid manufacturer serials registered")}>Register valid serials</Button></div>
          </>
        )}
        {tab === "Bulk import" && (
          <div className="import-workspace"><label className="file-drop"><Icon name="box" /><b>Drop CSV or Excel file</b><span>Map serial, product, EAN, purchase, and location columns</span><input type="file" /></label><div className="import-steps">{["Upload", "Map columns", "Validate", "Resolve duplicates", "Confirm"].map((x, i) => <span className={i === 0 ? "active" : ""} key={x}>{i + 1}. {x}</span>)}</div></div>
        )}
        {tab === "Model explorer" && (
          <div>
            <div className="filter-bar"><input defaultValue="Aula F75 Pro / DT-AU-F75-GR" /><select><option>All locations</option><option>Warehouse</option><option>Office</option></select><select><option>All statuses</option><option>Available</option><option>Reserved</option><option>Sold</option><option>Damaged</option></select></div>
            <DataTable columns={["Serial", "EAN / SKU", "Location", "Status", "Source", "Linked record"]} rows={moduleConfig.serials.rows} />
          </div>
        )}
        {tab === "Barcode labels" && <BarcodeWorkspace notify={notify} />}
      </section>
    </WorkflowShell>
  )
}

function BarcodeWorkspace({ notify }: { notify: (text: string) => void }) {
  return (
    <div className="barcode-layout">
      <div className="form-section-grid">
        <label>Barcode format<select><option>Code 128</option><option>QR code</option><option>EAN-13</option></select></label>
        <label>Label dimensions<select><option>50 × 25 mm</option><option>40 × 20 mm</option></select></label>
        <label>Batch selection<select><option>4 selected serials</option></select></label>
        <label>Copies per unit<input defaultValue="1" /></label>
        <label className="check-label wide"><input defaultChecked type="checkbox" /> Include product model and SKU</label>
      </div>
      <div className="label-preview">
        <span>DELTATECH</span>
        <b>Aula F75 Pro Wireless</b>
        <div className="barcode-lines">|||| || | |||| | | ||| || ||||</div>
        <strong>DT26-AF7-004101</strong>
        <small>DT-AU-F75-GR</small>
      </div>
      <div className="workflow-actions wide-actions"><span>Preview 1 of 4 labels</span><Button onClick={() => notify("Print confirmation opened")}>Print batch</Button></div>
    </div>
  )
}

function FinanceWorkflow({
  notify,
  onBack,
}: {
  notify: (text: string) => void
  onBack: () => void
}) {
  const [tab, setTab] = useState("Journal entry")
  const [balanced, setBalanced] = useState(true)
  return (
    <WorkflowShell eyebrow="ACCOUNTING / DOUBLE ENTRY" onBack={onBack} title="Finance workspace">
      <div className="workspace-tabs">{["Journal entry", "General ledger", "Cash & bank", "Receivables", "Payables", "Reconciliation", "Period closing"].map(x => <button className={tab === x ? "active" : ""} key={x} onClick={() => setTab(x)}>{x}</button>)}</div>
      {tab === "Journal entry" && (
        <section className="workflow-card">
          <div className="workflow-card-head"><div><span>JOURNAL JE-260418</span><h2>New journal entry</h2></div><span className={`status ${balanced ? "success" : "danger"}`}>{balanced ? "Balanced" : "Out of balance"}</span></div>
          <div className="form-section-grid"><label>Transaction date<input defaultValue="2026-03-18" type="date" /></label><label>Reference<input defaultValue="ADJ-260041" /></label><label className="wide">Description<input defaultValue="Inventory count adjustment pending approval" /></label></div>
          <div className="journal-table"><div className="journal-head"><span>Account</span><span>Description</span><span>Debit</span><span>Credit</span></div><div><select><option>Inventory adjustment expense</option></select><input defaultValue="Count variance" /><input defaultValue="18420" onChange={event => setBalanced(event.target.value === "18420")} /><input defaultValue="0" /></div><div><select><option>Inventory asset</option></select><input defaultValue="Reduce inventory value" /><input defaultValue="0" /><input defaultValue={balanced ? "18420" : "18000"} /></div></div>
          <div className="journal-totals"><span>Total debit<b>৳18,420</b></span><span>Total credit<b>{balanced ? "৳18,420" : "৳18,000"}</b></span><span>Difference<b>{balanced ? "৳0" : "৳420"}</b></span></div>
          <div className="workflow-actions"><Button variant="secondary">Save draft</Button><Button onClick={() => balanced ? notify("Journal entry submitted for approval") : notify("Entry cannot post until balanced")}>{balanced ? "Submit for approval" : "Resolve imbalance"}</Button></div>
        </section>
      )}
      {tab === "General ledger" && <LedgerView />}
      {tab === "Cash & bank" && <AccountRegister title="Cash & bank accounts" rows={[["1101", "Office Cash", "৳184,500", "Reconciled"], ["1102", "Warehouse Cash", "৳62,900", "Review"], ["1110", "Bank Account Placeholder", "৳116,600", "Reconciled"]]} />}
      {tab === "Receivables" && <AgingView title="Accounts receivable" />}
      {tab === "Payables" && <AgingView title="Accounts payable" supplier />}
      {tab === "Reconciliation" && <ReconciliationView notify={notify} />}
      {tab === "Period closing" && <PeriodClosing notify={notify} />}
    </WorkflowShell>
  )
}

function LedgerView() {
  return <section className="workflow-card"><div className="workflow-card-head"><div><span>GENERAL LEDGER</span><h2>Inventory asset · 1200</h2></div><Button variant="secondary">Export ledger</Button></div><div className="filter-bar"><input defaultValue="01 Mar 2026 — 18 Mar 2026" /><select><option>Account 1200 · Inventory</option></select></div><DataTable columns={["Date", "Reference", "Description", "Debit", "Credit", "Running balance"]} rows={[["18 Mar", "PO-260047", "Goods receiving", "৳248,500", "—", "৳7,334,000 Dr"], ["17 Mar", "DT-260184", "Cost of goods sold", "—", "৳4,120", "৳7,085,500 Dr"], ["16 Mar", "ADJ-260038", "Count correction", "—", "৳18,420", "৳7,089,620 Dr"]]} /></section>
}

function AccountRegister({ rows, title }: { rows: string[][]; title: string }) {
  return <section className="workflow-card"><div className="workflow-card-head"><div><span>ACCOUNT DIRECTORY</span><h2>{title}</h2></div><Button>Add account</Button></div><DataTable columns={["Code", "Account", "Current balance", "Status"]} rows={rows} /><div className="workflow-actions"><Button variant="secondary">Record withdrawal</Button><Button variant="secondary">Record deposit</Button><Button>Transfer funds</Button></div></section>
}

function AgingView({ supplier = false, title }: { supplier?: boolean; title: string }) {
  return <section className="workflow-card"><div className="workflow-card-head"><div><span>AGING ANALYSIS</span><h2>{title}</h2></div><Button variant="secondary">Export aging</Button></div><div className="aging-grid">{[["Current", "৳82,500"], ["1–30 days", "৳62,000"], ["31–60 days", "৳40,000"], ["60+ days", supplier ? "৳439,500" : "৳0"]].map(x => <div key={x[0]}><span>{x[0]}</span><b>{x[1]}</b></div>)}</div><DataTable columns={[supplier ? "Supplier" : "Customer / vendor", "Reference", "Due date", "Original", "Paid", "Outstanding"]} rows={supplier ? [["Supplier Alpha", "PI-260047", "25 Mar 2026", "৳842,000", "৳460,000", "৳382,000"], ["Supplier Beta", "PI-260041", "02 Apr 2026", "৳1,092,000", "৳942,000", "৳150,000"]] : [["Nexus IT Solutions", "WS-260092", "28 Mar 2026", "৳248,500", "৳64,000", "৳184,500"], ["Adnan Rahman", "DT-260184", "On delivery", "৳6,290", "৳0", "৳6,290"]]} /></section>
}

function ReconciliationView({ notify }: { notify: (text: string) => void }) {
  return <section className="workflow-card"><div className="workflow-card-head"><div><span>BANK RECONCILIATION</span><h2>March 2026 statement</h2></div><span className="status processing">2 unmatched</span></div><div className="reconcile-columns"><div><b>Book transactions</b>{["Deposit · ৳62,400", "Supplier payment · ৳150,000", "Bank fee · ৳850"].map(x => <button key={x}>{x}<span>Match →</span></button>)}</div><div><b>Statement transactions</b>{["Credit · ৳62,400", "Transfer · ৳150,000", "Service fee · ৳850"].map(x => <button key={x}>← Match<span>{x}</span></button>)}</div></div><div className="workflow-actions"><span>Difference: ৳0 after proposed matches</span><Button onClick={() => notify("Reconciliation completed for March 2026")}>Complete reconciliation</Button></div></section>
}

function PeriodClosing({ notify }: { notify: (text: string) => void }) {
  return <section className="workflow-card"><div className="workflow-card-head"><div><span>PERIOD CONTROL</span><h2>March 2026 closing checklist</h2></div><span className="status processing">6 of 8 complete</span></div><div className="closing-list">{["All sales posted", "Purchase receiving reconciled", "Cash accounts reconciled", "Bank accounts reconciled", "Inventory valuation reviewed", "Receivables reviewed", "Adjustment entries approved", "Management approval"].map((x, i) => <label key={x}><input defaultChecked={i < 6} type="checkbox" /><span><b>{x}</b><small>{i < 6 ? "Completed · audit reference retained" : "Required before period lock"}</small></span></label>)}</div><div className="workflow-actions"><Button variant="secondary">Export audit pack</Button><Button onClick={() => notify("Period cannot lock until 2 checks are complete")}>Lock period</Button></div></section>
}

function EntityWorkflow({
  notify,
  onBack,
  page,
}: {
  notify: (text: string) => void
  onBack: () => void
  page: string
}) {
  const type = page === "wholesale" ? "vendor" : page === "suppliers" || page === "purchases" ? "supplier" : page
  const title = page === "wholesale" ? "Nexus IT Solutions" : page === "purchases" ? "Purchase & landed cost workspace" : page === "suppliers" ? "Supplier Alpha" : `${genericConfig(page).title} workspace`
  return (
    <WorkflowShell eyebrow={`${page.toUpperCase()} / DETAIL & CREATE`} onBack={onBack} title={title}>
      {page === "wholesale" && <VendorWorkspace notify={notify} />}
      {(page === "purchases" || page === "suppliers") && <ProcurementWorkspace notify={notify} />}
      {page === "damaged" && <DamageWorkspace notify={notify} />}
      {page === "documents" && <DocumentWorkspace notify={notify} />}
      {page === "warranty" && <WarrantyWorkspace notify={notify} />}
      {page === "courier" && <CourierWorkspace notify={notify} />}
      {page === "staff" && <PermissionWorkspace notify={notify} />}
      {page === "reports" && <ReportWorkspace notify={notify} />}
      {page === "marketing" && <MarketingWorkspace notify={notify} />}
      {page === "settings" && <SettingsWorkspace notify={notify} />}
      {["products", "customers", "support-admin"].includes(page) && <GenericRecordEditor notify={notify} type={type} />}
    </WorkflowShell>
  )
}

function VendorWorkspace({ notify }: { notify: (text: string) => void }) {
  const [tab, setTab] = useState("Ledger")
  return <div><div className="profile-summary"><span className="profile-mark">NI</span><div><b>Nexus IT Solutions</b><small>Wholesale vendor · Active · Credit approved</small></div><span>Credit limit<b>৳500,000</b></span><span>Outstanding<b>৳184,500</b></span><span>Available credit<b>৳315,500</b></span></div><div className="workspace-tabs">{["Overview", "Ledger", "Sales", "Serial records", "New invoice", "Collection"].map(x => <button className={tab === x ? "active" : ""} key={x} onClick={() => setTab(x)}>{x}</button>)}</div>
    {tab === "Ledger" && <section className="workflow-card"><div className="workflow-card-head"><div><span>RUNNING BALANCE</span><h2>Vendor ledger</h2></div><div><Button variant="secondary">PDF</Button> <Button variant="secondary">Excel</Button></div></div><DataTable columns={["Date", "Reference", "Description", "Debit", "Credit", "Balance"]} rows={[["18 Mar", "WS-260092", "Wholesale invoice", "৳248,500", "—", "৳248,500 Dr"], ["18 Mar", "RC-260084", "Bank collection", "—", "৳64,000", "৳184,500 Dr"], ["12 Mar", "CR-260011", "Product return credit", "—", "৳18,900", "৳120,500 Dr"]]} /></section>}
    {tab === "New invoice" && <section className="workflow-card"><div className="workflow-card-head"><div><span>WHOLESALE INVOICE</span><h2>New invoice for Nexus IT</h2></div><span className="status processing">Draft</span></div><DataTable columns={["Product", "Qty", "Wholesale price", "Serials", "Discount", "Total"]} rows={[["Aula F75 Pro", "50", "৳5,740", "0 / 50 assigned", "৳5,000", "৳282,000"]]} /><div className="state-card"><Icon name="compare" /><div><b>50 individual serials required</b><span>Scan or select each available unit before finalizing the invoice.</span></div><Button variant="secondary">Assign serials</Button></div><div className="financial-callout"><span>Invoice total<b>৳282,000</b></span><span>Advance applied<b>৳40,000</b></span><span>Outstanding<b>৳242,000</b></span></div><div className="workflow-actions"><Button variant="secondary">Save draft</Button><Button onClick={() => notify("Invoice blocked until 50 serials are assigned")}>Finalize invoice</Button></div></section>}
    {tab === "Collection" && <section className="workflow-card compact-workflow"><div className="workflow-card-head"><div><span>RECORD COLLECTION</span><h2>Vendor payment</h2></div></div><div className="form-section-grid"><label>Amount<input defaultValue="64000" /></label><label>Payment account<select><option>Bank Account Placeholder</option></select></label><label>Method<select><option>Bank transfer</option><option>Cash</option></select></label><label>Reference<input defaultValue="BANK-260318-04" /></label><label className="wide">Note<textarea /></label></div><div className="workflow-actions"><Button onClick={() => notify("Collection recorded in prototype ledger")}>Record collection</Button></div></section>}
    {!["Ledger", "New invoice", "Collection"].includes(tab) && <OperationalRegister type={`Vendor ${tab}`} />}
  </div>
}

function ProcurementWorkspace({ notify }: { notify: (text: string) => void }) {
  const [tab, setTab] = useState("Landed cost")
  return <div><div className="workspace-tabs">{["Supplier profile", "Purchase order", "Goods receiving", "Landed cost", "Supplier ledger", "Purchase return"].map(x => <button className={tab === x ? "active" : ""} key={x} onClick={() => setTab(x)}>{x}</button>)}</div>
    {tab === "Landed cost" && <section className="workflow-card"><div className="workflow-card-head"><div><span>PO-260047 / USD IMPORT</span><h2>Traceable landed cost allocation</h2></div><span className="status processing">Policy not yet selected</span></div><div className="form-section-grid"><label>Allocation method<select><option>Select business-approved method</option><option>By unit quantity</option><option>By item value</option><option>By weight</option></select></label><label>Exchange rate<input defaultValue="122.50" /></label><label>Shipping cost<input defaultValue="184000" /></label><label>Customs & import<input defaultValue="246000" /></label><label>Other costs<input defaultValue="42000" /></label></div><DataTable columns={["Product", "Units", "Original unit cost", "Allocated additional", "Final landed unit cost"]} rows={[["Aula F75 Pro", "60", "৳4,820", "Pending method", "Not calculated"], ["RK M75", "40", "৳5,280", "Pending method", "Not calculated"]]} /><div className="state-card"><Icon name="shield" /><div><b>Costing method requires business approval</b><span>No costing policy is assumed. The calculation remains a preview until configured.</span></div></div><div className="workflow-actions"><Button onClick={() => notify("Allocation preview requires a selected method")}>Preview allocation</Button></div></section>}
    {tab === "Goods receiving" && <ReceivingWorkspace notify={notify} />}
    {tab === "Supplier ledger" && <section className="workflow-card"><DataTable columns={["Date", "Reference", "Description", "Debit", "Credit", "Balance"]} rows={[["18 Mar", "PI-260047", "Purchase invoice", "—", "৳842,000", "৳842,000 Cr"], ["18 Mar", "PAY-260082", "Bank payment", "৳460,000", "—", "৳382,000 Cr"]]} /></section>}
    {!["Landed cost", "Goods receiving", "Supplier ledger"].includes(tab) && <OperationalRegister type={tab} />}
  </div>
}

function DamageWorkspace({ notify }: { notify: (text: string) => void }) {
  const [resolution, setResolution] = useState("Inspection")
  return <div className="two-panel-workflow"><section className="workflow-card"><div className="workflow-card-head"><div><span>DMG-260041</span><h2>Register damaged unit</h2></div><span className="status danger">Quarantined</span></div><div className="form-section-grid"><label>Product<input defaultValue="Attack Shark X3 Pro" /></label><label>Variant<input defaultValue="White" /></label><label>Serial<input defaultValue="DT26-ASX-002174" /></label><label>Location<select><option>Warehouse</option><option>Office</option></select></label><label>Damage reason<select><option>Sensor fault</option><option>Physical damage</option><option>Packaging damage</option></select></label><label>Reported date<input defaultValue="2026-03-18" type="date" /></label><label className="wide">Description<textarea defaultValue="Sensor intermittently stops tracking during inspection." /></label></div><label className="file-drop"><Icon name="box" /><b>Damage evidence</b><span>Attach photos or inspection files</span><input type="file" /></label><div className="workflow-actions"><Button onClick={() => notify("Damaged unit saved outside available stock")}>Save damage record</Button></div></section><aside className="resolution-panel"><span>RESOLUTION WORKFLOW</span>{["Inspection", "Repair", "Return to supplier", "Replacement", "Disposal", "Return to sellable stock"].map(x => <button className={resolution === x ? "active" : ""} key={x} onClick={() => setResolution(x)}><span /><b>{x}</b></button>)}<p>Returning to sellable stock requires inspection approval and creates a traceable stock movement.</p></aside></div>
}

function DocumentWorkspace({ notify }: { notify: (text: string) => void }) {
  const [type, setType] = useState("Sales Invoice")
  return <div className="document-layout"><aside className="document-tools"><span>DOCUMENT TYPE</span><select value={type} onChange={e => setType(e.target.value)}>{["Quotation", "Proforma Invoice", "Sales Invoice", "Wholesale Invoice", "Money Receipt", "Credit Note", "Rebate", "Purchase Return", "Purchase Order"].map(x => <option key={x}>{x}</option>)}</select><div className="document-actions">{["Download PDF", "Print", "Email", "View transaction", "Revision history"].map(x => <Button key={x} onClick={() => notify(`${x} prepared in prototype`)} variant="secondary">{x}</Button>)}</div><div className="state-card"><Icon name="shield" /><div><b>{type === "Proforma Invoice" ? "Not a finalized tax document" : "Finalized records are immutable"}</b><span>Corrections create linked revisions rather than silently overwriting the document.</span></div></div></aside><section className="a4-document"><header><Logo /><div><span>{type.toUpperCase()}</span><b>DT-INV-260184</b><small>Issue date · 18 March 2026</small></div></header><div className="document-parties"><div><span>ISSUED TO</span><b>Adnan Rahman</b><p>Address placeholder<br />Dhaka, Bangladesh</p></div><div><span>PAYMENT</span><b>Cash on Delivery</b><p>Status: Pending<br />Order: DT-260184</p></div></div><DataTable columns={["Description", "Qty", "Unit price", "Discount", "Amount"]} rows={[["Aula F75 Pro Wireless · Reaper Switch", "1", "৳6,290", "—", "৳6,290"]]} /><div className="document-totals"><span>Subtotal<b>৳6,290</b></span><span>Delivery<b>Editable</b></span><span>Paid<b>৳0</b></span><span className="grand">Balance due<b>৳6,290</b></span></div><div className="serial-attachment"><span>SERIAL NUMBERS</span><b>Assigned after packing · attached serial list supported</b></div><footer><span>Warranty terms and company details remain editable pending confirmation.</span><b>Authorized staff · Shahid Ahmed</b></footer></section></div>
}

function WarrantyWorkspace({ notify }: { notify: (text: string) => void }) {
  const [tab, setTab] = useState("Wholesale registration")
  return <div><div className="workspace-tabs">{["Claims", "Claim inspection", "Wholesale registration", "Repair", "Replacement", "RMA timeline"].map(x => <button className={tab === x ? "active" : ""} key={x} onClick={() => setTab(x)}>{x}</button>)}</div>{tab === "Wholesale registration" ? <section className="workflow-card compact-workflow"><div className="workflow-card-head"><div><span>AUTHORIZED STAFF WORKFLOW</span><h2>Set final-customer warranty date</h2></div><span className="status processing">Verification required</span></div><div className="form-section-grid"><label>Serial<input defaultValue="MFR-RKM75-88721" /></label><label>Wholesale vendor<input defaultValue="Nexus IT Solutions" /></label><label>DeltaTech invoice<input defaultValue="WS-260092" /></label><label>Final customer invoice date<input defaultValue="2026-03-16" type="date" /></label><label>Warranty duration<select><option>12 months</option></select></label><label>Calculated expiry<input defaultValue="2027-03-15" disabled /></label></div><label className="file-drop"><Icon name="box" /><b>Upload retail invoice evidence</b><span>Required for verification</span><input type="file" /></label><div className="workflow-actions"><Button onClick={() => notify("Warranty date submitted for authorized verification")}>Submit for verification</Button></div></section> : <section className="workflow-card"><div className="workflow-card-head"><div><span>CLAIM WC-260028</span><h2>Sensor fault inspection</h2></div><span className="status processing">{tab}</span></div><div className="summary-strip"><span>Serial<b>DT26-ASX-002174</b></span><span>Customer<b>Adnan Rahman</b></span><span>Assigned staff<b>Samira Khan</b></span><span>Warranty<b>Active</b></span></div><div className="form-section-grid"><label>Inspection result<select><option>Fault confirmed</option><option>No fault found</option></select></label><label>Resolution<select><option>Replacement</option><option>Repair</option><option>Reject</option></select></label><label className="wide">Inspection notes<textarea defaultValue="Sensor failure reproduced on two test surfaces." /></label></div><div className="workflow-actions"><Button onClick={() => notify("Claim progressed with audit history")}>Advance claim</Button></div></section>}</div>
}

function CourierWorkspace({ notify }: { notify: (text: string) => void }) {
  const [tab, setTab] = useState("COD reconciliation")
  return <div><div className="workspace-tabs">{["Shipment creation", "Tracking", "Shipping label", "COD reconciliation", "Settlements"].map(x => <button className={tab === x ? "active" : ""} key={x} onClick={() => setTab(x)}>{x}</button>)}</div>{tab === "COD reconciliation" ? <section className="workflow-card"><div className="workflow-card-head"><div><span>COURIER SETTLEMENT / MARCH</span><h2>COD reconciliation</h2></div><span className="status processing">৳18,420 outstanding</span></div><DataTable columns={["Order", "Courier", "COD amount", "Fee", "Expected", "Actual", "Status"]} rows={[["DT-260184", "Steadfast · not connected", "৳6,290", "৳120", "৳6,170", "৳6,170", "Matched"], ["DT-260179", "Provider B", "৳21,900", "৳150", "৳21,750", "৳0", "Pending"], ["DT-260172", "Steadfast · not connected", "৳4,890", "৳110", "৳4,780", "৳4,500", "Review"]]} /><div className="financial-callout"><span>Expected settlement<b>৳32,700</b></span><span>Received<b>৳10,670</b></span><span>Adjustments<b>−৳280</b></span><span>Outstanding<b>৳22,310</b></span></div><div className="workflow-actions"><Button onClick={() => notify("COD reconciliation adjustments saved")}>Save reconciliation</Button></div></section> : <GenericRecordEditor notify={notify} type={`courier ${tab}`} />}</div>
}

function PermissionWorkspace({ notify }: { notify: (text: string) => void }) {
  const modules = ["Products", "Orders", "Inventory", "Purchase costs", "Profit reports", "Vendor dues", "Refunds", "Account adjustments"]
  return <section className="workflow-card"><div className="workflow-card-head"><div><span>ROLE / SHOP MANAGER</span><h2>Permission matrix</h2></div><span className="status processing">Backend enforcement required</span></div><div className="permission-table"><div className="permission-head"><b>Module</b>{["View", "Create", "Edit", "Delete", "Approve", "Export"].map(x => <span key={x}>{x}</span>)}</div>{modules.map((module, i) => <div key={module}><b>{module}{i > 2 && <small>Sensitive</small>}</b>{["View", "Create", "Edit", "Delete", "Approve", "Export"].map((x, j) => <label key={x}><input defaultChecked={i < 3 && j < 4 || i > 2 && j === 0 && i < 6} type="checkbox" /><span /></label>)}</div>)}</div><div className="state-card"><Icon name="shield" /><div><b>Permissions must be enforced server-side</b><span>Hiding a menu item is not access control. This matrix represents the required authorization policy.</span></div></div><div className="workflow-actions"><Button onClick={() => notify("Role permission changes saved as draft")}>Save permission draft</Button></div></section>
}

function ReportWorkspace({ notify }: { notify: (text: string) => void }) {
  const [category, setCategory] = useState("Sales")
  const reports: Record<string, string[]> = { Sales: ["Daily sales", "Monthly sales", "Yearly sales", "Channel performance", "Retail vs wholesale", "Product performance", "Returns"], Inventory: ["Stock balance", "Warehouse stock", "Office stock", "Movements", "Valuation", "Serial status", "Damaged stock", "Slow-moving"], Finance: ["Profit and Loss", "Balance Sheet", "General Ledger", "Trial Balance", "Cash Flow", "Receivables", "Payables"], Vendor: ["Vendor balances", "Vendor aging", "Wholesale sales", "Collections"], Procurement: ["Purchase summary", "Supplier payables", "Landed cost", "Purchase returns"], Operations: ["Order processing", "Delivery performance", "Warranty claims", "Staff activity"] }
  return <div className="report-layout"><aside>{Object.keys(reports).map(x => <button className={category === x ? "active" : ""} key={x} onClick={() => setCategory(x)}>{x}<span>{reports[x].length}</span></button>)}</aside><section className="workflow-card"><div className="workflow-card-head"><div><span>REPORT CENTER / {category.toUpperCase()}</span><h2>{category} reports</h2></div><div><Button onClick={() => notify("PDF export prepared")} variant="secondary">PDF</Button> <Button onClick={() => notify("Excel export prepared")} variant="secondary">Excel</Button></div></div><div className="filter-bar advanced-filters"><input defaultValue="01 Mar 2026 — 18 Mar 2026" /><select><option>All channels</option><option>Website</option><option>Messenger</option><option>Offline</option><option>Wholesale</option></select><select><option>All locations</option><option>Warehouse</option><option>Office</option></select><select><option>All brands</option></select><select><option>All staff</option></select></div><div className="report-cards">{reports[category].map((x, i) => <button key={x}><Icon name={i % 2 ? "chart" : "wallet"} /><span><b>{x}</b><small>Connected sample records · Drill down</small></span><Icon name="chevron" size={15} /></button>)}</div></section></div>
}

function MarketingWorkspace({ notify }: { notify: (text: string) => void }) {
  const [tab, setTab] = useState("Coupons")
  return <div><div className="workspace-tabs">{["Campaigns", "Banners", "Coupons", "Featured content", "Pages & policies", "Product SEO", "Notifications", "Analytics"].map(x => <button className={tab === x ? "active" : ""} key={x} onClick={() => setTab(x)}>{x}</button>)}</div><section className="workflow-card"><div className="workflow-card-head"><div><span>MARKETING / {tab.toUpperCase()}</span><h2>Manage {tab.toLowerCase()}</h2></div><Button>Create new</Button></div>{tab === "Coupons" ? <><DataTable columns={["Code", "Type", "Value", "Maximum cap", "Eligibility", "Status"]} rows={[["WELCOME500", "Fixed", "৳500", "—", "First order ≥ ৳5,000", "Active"], ["KEYS10", "Percentage", "10%", "৳1,200", "Selected keyboards", "Scheduled"], ["EXPIRED15", "Percentage", "15%", "৳2,000", "Orders ≥ ৳8,000", "Expired"]]} /><div className="form-section-grid marketing-editor"><label>Coupon code<input defaultValue="WELCOME500" /></label><label>Discount type<select><option>Fixed amount</option><option>Percentage</option></select></label><label>Discount value<input defaultValue="500" /></label><label>Maximum cap<input placeholder="Optional for percentage" /></label><label>Minimum order<input defaultValue="5000" /></label><label>Eligibility<select><option>First order only</option><option>Selected categories</option></select></label></div></> : tab === "Product SEO" ? <div className="form-section-grid marketing-editor"><label>Product<input defaultValue="Aula F75 Pro Wireless" /></label><label>URL slug<input defaultValue="aula-f75-pro-wireless" /></label><label className="wide">SEO title<input defaultValue="Aula F75 Pro Wireless Mechanical Keyboard | DeltaTech" /></label><label className="wide">Meta description<textarea defaultValue="Explore specifications, variants, availability and warranty information for the Aula F75 Pro." /></label><label className="check-label wide"><input defaultChecked type="checkbox" /> Include structured product data and sitemap entry</label></div> : <OperationalRegister type={tab} />}<div className="workflow-actions"><Button onClick={() => notify(`${tab} changes saved as prototype draft`)}>Save changes</Button></div></section></div>
}

function SettingsWorkspace({ notify }: { notify: (text: string) => void }) {
  const [tab, setTab] = useState("Company")
  return <div className="settings-layout"><aside>{["Company", "Locations", "Payments", "Shipping", "Delivery areas", "Invoices", "Warranty", "Currency & tax", "Notifications", "Analytics & consent"].map(x => <button className={tab === x ? "active" : ""} key={x} onClick={() => setTab(x)}>{x}</button>)}</aside><section className="workflow-card"><div className="workflow-card-head"><div><span>BUSINESS SETTINGS</span><h2>{tab}</h2></div><span className="status processing">Editable placeholder</span></div><div className="form-section-grid"><label>Setting name<input defaultValue={`${tab} configuration`} /></label><label>Status<select><option>Enabled</option><option>Disabled</option></select></label><label className="wide">Configuration notes<textarea defaultValue="Values remain subject to DeltaTech confirmation and applicable business policy." /></label>{tab === "Locations" && <><label>Warehouse<input defaultValue="Warehouse" /></label><label>Office<input defaultValue="Office" /></label></>}{tab === "Payments" && <><label className="check-label"><input defaultChecked type="checkbox" /> Cash on Delivery</label><label className="check-label"><input type="checkbox" /> Configurable online gateway</label></>}{tab === "Currency & tax" && <><label>Currency<input defaultValue="BDT · ৳" /></label><label>Tax mode<select><option>Configurable — accountant review required</option></select></label></>}</div><div className="workflow-actions"><Button onClick={() => notify(`${tab} settings saved`)}>Save settings</Button></div></section></div>
}

function ProductAdminEditor({ notify }: { notify: (text: string) => void }) {
  const [tab, setTab] = useState("General")
  return (
    <div>
      <div className="workspace-tabs">
        {[
          "General",
          "Media",
          "Pricing",
          "Inventory",
          "Variants",
          "Specifications",
          "Warranty",
          "SEO",
          "Publication",
          "History",
        ].map((item) => (
          <button
            className={tab === item ? "active" : ""}
            key={item}
            onClick={() => setTab(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <section className="workflow-card">
        <div className="workflow-card-head">
          <div>
            <span>PRODUCT / DT-KC-Q1M-BN</span>
            <h2>{tab} information</h2>
          </div>
          <span className="status success">Published</span>
        </div>
        {tab === "Variants" ? (
          <DataTable
            columns={["Variant", "SKU", "EAN", "Retail", "Wholesale", "Stock"]}
            rows={[
              ["Jupiter Brown", "DT-KC-Q1M-BN", "4895248872146", "৳21,900", "৳19,500", "12"],
              ["Jupiter Red", "DT-KC-Q1M-RD", "4895248872153", "৳22,400", "৳19,900", "5"],
              ["Jupiter Banana", "DT-KC-Q1M-BA", "4895248872160", "৳22,900", "৳20,400", "3"],
            ]}
          />
        ) : tab === "History" ? (
          <div className="history-panel product-history">
            {[
              ["Retail price updated", "৳21,500 → ৳21,900 · Shahid Ahmed · 18 Mar"],
              ["Stock received", "+8 Warehouse · PO-260047 · 17 Mar"],
              ["Specification edited", "Connectivity field · Samira Khan · 15 Mar"],
              ["Published", "Website catalog · Shahid Ahmed · 12 Mar"],
            ].map(([title, detail]) => (
              <div key={title}>
                <i />
                <b>{title}</b>
                <small>{detail}</small>
              </div>
            ))}
          </div>
        ) : (
          <div className="form-section-grid">
            <label>Product name<input defaultValue="Keychron Q1 Max QMK Wireless" /></label>
            <label>Brand<select><option>Keychron</option></select></label>
            <label>Category<select><option>Mechanical Keyboards</option></select></label>
            <label>Model<input defaultValue="Q1M-M3" /></label>
            <label>Internal SKU<input defaultValue="DT-KC-Q1M-BN" /></label>
            <label>EAN<input defaultValue="4895248872146" /></label>
            <label className="wide">Description<textarea defaultValue="Premium 75% wireless mechanical keyboard with CNC aluminium frame and QMK/VIA support." /></label>
          </div>
        )}
        <div className="workflow-actions">
          <Button variant="secondary">Save draft</Button>
          <Button onClick={() => notify(`${tab} product changes saved`)}>
            Save changes
          </Button>
        </div>
      </section>
    </div>
  )
}

function GenericRecordEditor({ notify, type }: { notify: (text: string) => void; type: string }) {
  if (type === "products") return <ProductAdminEditor notify={notify} />
  return <section className="workflow-card compact-workflow"><div className="workflow-card-head"><div><span>{type.toUpperCase()} / NEW RECORD</span><h2>Create and manage {type}</h2></div><span className="status processing">Draft</span></div><div className="form-section-grid"><label>Name / reference<input placeholder={`Enter ${type} reference`} /></label><label>Status<select><option>Draft</option><option>Active</option><option>Pending approval</option></select></label><label>Assigned staff<select><option>Shahid Ahmed</option><option>Samira Khan</option><option>Nafis Rahman</option></select></label><label>Priority<select><option>Normal</option><option>High</option><option>Urgent</option></select></label><label className="wide">Description<textarea placeholder="Add operational detail and internal notes" /></label></div><label className="file-drop"><Icon name="box" /><b>Supporting attachments</b><span>Files remain linked to the record and audit trail</span><input type="file" /></label><div className="workflow-actions"><Button variant="secondary">Cancel</Button><Button onClick={() => notify(`${type} draft saved`)}>Save record</Button></div></section>
}

function AdminModule({
  notify,
  page,
}: {
  notify: (x: string) => void
  page: string
}) {
  const config = moduleConfig[page] || genericConfig(page)
  const [search, setSearch] = useState("")
  const [view, setView] = useState<"list" | "workflow">("list")
  const filtered = config.rows.filter((r) =>
    r.join(" ").toLowerCase().includes(search.toLowerCase()),
  )
  useEffect(() => setView("list"), [page])
  if (view === "workflow") {
    if (page === "orders")
      return <ManualOrderWorkflow notify={notify} onBack={() => setView("list")} />
    if (page === "inventory")
      return <InventoryWorkflow notify={notify} onBack={() => setView("list")} />
    if (page === "serials")
      return <SerialWorkflow notify={notify} onBack={() => setView("list")} />
    if (page === "accounting")
      return <FinanceWorkflow notify={notify} onBack={() => setView("list")} />
    return (
      <EntityWorkflow
        notify={notify}
        onBack={() => setView("list")}
        page={page}
      />
    )
  }
  return (
    <main className="admin-page">
      <AdminHeading
        action={() => setView("workflow")}
        actionText={config.action}
        eyebrow={config.eyebrow}
        title={config.title}
      />
      <div className="metric-grid module-metrics">
        {config.stats.map(([value, label, meta], i) => (
          <div className="metric-card" key={label}>
            <div>
              <span>{label}</span>
              <strong>{value}</strong>
              <small>{meta}</small>
            </div>
            <span className={`metric-signal s${i}`} />
          </div>
        ))}
      </div>
      {page === "accounting" && (
        <div className="accounting-tabs">
          {[
            "Overview",
            "Chart of accounts",
            "Journal entries",
            "General ledger",
            "Cash & bank",
            "Receivables",
            "Payables",
            "Period closing",
          ].map((x, i) => (
            <button className={i === 0 ? "active" : ""} key={x}>
              {x}
            </button>
          ))}
        </div>
      )}
      <section className="panel records-panel">
        <div className="table-toolbar">
          <label>
            <Icon name="search" />
            <input
              onChange={(e) => setSearch(e.target.value)}
              placeholder={`Search ${config.title.toLowerCase()}…`}
              value={search}
            />
          </label>
          <div>
            <Button
              onClick={() => notify("Filters applied")}
              variant="secondary"
            >
              <Icon name="settings" /> Filter
            </Button>
            <Button
              onClick={() => notify("Export prepared (prototype)")}
              variant="secondary"
            >
              Export
            </Button>
          </div>
        </div>
        <DataTable
          columns={config.columns}
          onRowClick={() => setView("workflow")}
          rows={filtered}
        />
        <div className="pagination">
          <span>Showing {filtered.length} records</span>
          <div>
            <button>Previous</button>
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <button>Next</button>
          </div>
        </div>
      </section>
      <div className="prototype-note">
        <Icon name="shield" />
        <div>
          <b>Front-end prototype mode</b>
          <span>
            Changes, financial postings, inventory effects, integrations,
            permissions, and exports are simulated because backend setup was
            declined.
          </span>
        </div>
      </div>
    </main>
  )
}

function AdminHeading({
  action,
  actionText,
  eyebrow,
  title,
}: {
  action: () => void
  actionText: string
  eyebrow: string
  title: string
}) {
  return (
    <div className="admin-heading">
      <div>
        <span>{eyebrow}</span>
        <h1>{title}</h1>
      </div>
      <div>
        <Button onClick={action} variant="secondary">
          Export
        </Button>
        <Button icon="arrow" onClick={action}>
          {actionText}
        </Button>
      </div>
    </div>
  )
}

function PanelHead({
  action,
  subtitle,
  title,
}: {
  action?: () => void
  subtitle: string
  title: string
}) {
  return (
    <div className="panel-head">
      <div>
        <h3>{title}</h3>
        <span>{subtitle}</span>
      </div>
      {action && (
        <button onClick={action}>
          View all <Icon name="arrow" size={15} />
        </button>
      )}
    </div>
  )
}

function DataTable({
  columns,
  onRowClick,
  rows,
}: {
  columns: string[]
  onRowClick?: (row: string[]) => void
  rows: string[][]
}) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              className={onRowClick ? "clickable-row" : ""}
              key={`${row[0]}-${i}`}
              onClick={() => onRowClick?.(row)}
            >
              {row.map((cell, j) => (
                <td key={`${cell}-${j}`}>
                  {j === 0 ? (
                    <b>{cell}</b>
                  ) : [
                      "Paid",
                      "Published",
                      "Available",
                      "Active",
                      "Delivered",
                      "Completed",
                      "Received",
                    ].includes(cell) ? (
                    <span className="status success">{cell}</span>
                  ) : [
                      "Pending",
                      "Partially paid",
                      "Reserved",
                      "Partial",
                      "Inspection",
                      "Review",
                    ].includes(cell) ? (
                    <span className="status processing">{cell}</span>
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function App() {
  const [mode, setMode] = useState<"shop" | "admin">("shop")
  const [page, setPage] = useState("home")
  const [dark, setDark] = useState(true)
  const [cart, setCart] = useState<typeof products>([products[2]])
  const [toast, setToast] = useState("")

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light"
    document.title = "DeltaTech — Intelligent Technology Commerce"
  }, [dark])
  const add = (p: typeof products[0]) => {
    setCart([...cart, p])
    setToast(`${p.name} added to cart`)
    window.setTimeout(() => setToast(""), 2200)
  }
  const go = (next: string) => {
    setPage(next)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  const current = useMemo(() => {
    if (page === "home") return <Home add={add} go={go} />
    if (page === "shop") return <Shop add={add} go={go} />
    if (page === "product") return <ProductDetail add={add} go={go} />
    if (page === "cart")
      return (
        <Cart
          cart={cart}
          go={go}
          remove={(id) =>
            setCart(
              cart.filter(
                (p, i) =>
                  p.id !== id || i !== cart.findIndex((x) => x.id === id),
              ),
            )
          }
        />
      )
    if (page === "checkout") return <Checkout cart={cart} go={go} />
    if (page === "builder") return <Builder />
    if (page === "account") return <Account go={go} />
    if (page === "login") return <AuthPage go={go} />
    if (page === "order-detail") return <OrderDetail go={go} />
    if (page === "search") return <SearchResults add={add} go={go} />
    if (page === "support") return <SupportRequest />
    if (page === "track") return <Tracking />
    return <ContentPage page={page} />
  }, [page, cart])

  if (mode === "admin")
    return (
      <AdminApp
        dark={dark}
        leave={() => {
          setMode("shop")
          go("home")
        }}
        setDark={setDark}
      />
    )
  return (
    <div className="storefront">
      <CustomerHeader
        cartCount={cart.length}
        dark={dark}
        go={go}
        setDark={setDark}
      />
      {current}
      <Footer go={go} />
      <button
        className="whatsapp"
        onClick={() => setToast("Support options opened")}
      >
        <span>WA</span>
        <small>Product support</small>
      </button>
      <button className="admin-switch" onClick={() => setMode("admin")}>
        <Icon name="chart" />
        <span>Business OS</span>
      </button>
      {toast && (
        <div className="toast">
          <Icon name="check" />
          {toast}
        </div>
      )}
    </div>
  )
}
