// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.thechristophervenue.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.thechristophervenue.com/","title_tag":"Wedding venue Allensville & inn in Kentucky | The Christopher","meta_description":"Farmhouse getaway Kentucky, outdoor wedding venue and inn in Allensville for weddings, micro-weddings, events, craft fairs and photography. Booking The Christopher."},{"page_url":"https://www.thechristophervenue.com/services-6","title_tag":"Micro-wedding Allensville pricing | The Christopher venue","meta_description":"See wedding venue Allensville pricing for elopements, micro-weddings and weekend weddings. Outdoor wedding venue and event space Allensville with farmhouse charm."},{"page_url":"https://www.thechristophervenue.com/booking-engine","title_tag":"Booking The Christopher inn in Kentucky | Farmhouse getaway","meta_description":"Booking The Christopher for a farmhouse getaway Kentucky stay. Charming inn in Kentucky near Nashville with cozy rooms, perfect for photography venue Kentucky escapes."}],"keywords":["wedding venue allensville","farmhouse getaway kentucky","event space allensville","inn in kentucky","outdoor wedding venue","booking the christopher","micro-wedding allensville","business party venue","craft fair location","photography venue kentucky"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "@id": "https://www.thechristophervenue.com/#lodgingbusiness",
  "name": "The Christopher",
  "url": "https://www.thechristophervenue.com/",
  "description": "The Christopher is a stunning farmhouse wedding venue and inn centrally located in Allensville, Kentucky, near Nashville, Bowling Green, and Clarksville. Perfect for weddings, elopements, micro-weddings, overnight escapes, business parties, family reunions, festivals, and more.",
  "image": [
    "https://static.wixstatic.com/media/248f89_828d3d0d433e48e5b08b09515e258dde~mv2.jpg/v1/fill/w_354,h_630,fp_0.49_0.43,q_90,enc_avif,quality_auto/248f89_828d3d0d433e48e5b08b09515e258dde~mv2.jpg",
    "https://static.wixstatic.com/media/248f89_b60a05b16cf14fa8a750e3058991cf02~mv2.jpg/v1/fill/w_354,h_630,fp_0.58_0.17,q_90,enc_avif,quality_auto/248f89_b60a05b16cf14fa8a750e3058991cf02~mv2.jpg",
    "https://static.wixstatic.com/media/248f89_544dd781b0a240bd9f45047ac593c864~mv2.jpg/v1/fill/w_354,h_630,fp_0.37_0.46,q_90,enc_avif,quality_auto/248f89_544dd781b0a240bd9f45047ac593c864~mv2.jpg"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "165 Keysburg Adams Road",
    "addressLocality": "Allensville",
    "addressRegion": "KY"
  },
  "telephone": "+1-615-568-2944",
  "email": "thechristophervenue@gmail.com",
  "foundingDate": "2023",
  "geo": {
    "@type": "GeoCoordinates",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "165 Keysburg Adams Road",
      "addressLocality": "Allensville",
      "addressRegion": "KY"
    }
  },
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "Complimentary high-speed Wi-Fi",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Continental breakfast included with every night stay",
      "value": true
    }
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "name": "Elopement Wedding Package",
      "description": "Elopement package Monday through Thursday for up to 15 people with 6 hours of venue use. Tables, chairs, and white linens are provided. Couple can stay at the mansion for an additional fee.",
      "price": "950.00",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://www.thechristophervenue.com/services-6"
    },
    {
      "@type": "Offer",
      "name": "Micro-Wedding Package",
      "description": "Micro-wedding package Monday through Thursday for up to 30 people with 12 hours of venue use. Tables, chairs, and white linens are provided. Couple can stay at the mansion for an additional fee.",
      "price": "2000.00",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://www.thechristophervenue.com/services-6"
    },
    {
      "@type": "Offer",
      "name": "Weekend Day Wedding Package",
      "description": "Weekend day wedding package on Friday, Saturday, or Sunday for up to 125 guests with 12 hours of venue use. Tables, chairs, and white linens are provided. Additional charge for more than 125 guests. Couple can stay the night for an additional fee; paid over three payments.",
      "price": "3000.00",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://www.thechristophervenue.com/services-6"
    },
    {
      "@type": "Offer",
      "name": "Weekend Wedding Package",
      "description": "Weekend wedding package with use of the venue Friday evening, Saturday, and Sunday morning for up to 125 guests. Tables, chairs, and white linens are provided. Additional charge for more than 125 guests. Use of the property from Friday at 4:00 p.m. to Sunday at 11:00 a.m. for up to 8 guests in the mansion; paid over three payments.",
      "price": "4000.00",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://www.thechristophervenue.com/services-6"
    },
    {
      "@type": "Offer",
      "name": "Day of Coordination",
      "description": "Day of wedding coordination service at The Christopher.",
      "price": "500.00",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://www.thechristophervenue.com/services-6"
    },
    {
      "@type": "Offer",
      "name": "On Site Officiant",
      "description": "On-site wedding officiant service at The Christopher.",
      "price": "250.00",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://www.thechristophervenue.com/services-6"
    }
  ],
  "review": {
    "@type": "Review",
    "reviewBody": "My husband and I used The Christopher as our wedding venue on October 11th and I cannot say enough good things about it. The house is to die for with gorgeous rooms with natural lighting and the most beautiful kitchen. The barn is a wedding dream with the pillars and chandeliers. The couple who owns the Christopher are some of the kindest souls I have ever met. They accommodated us so well and took the reins to make sure it was OUR day no matter what was happening. They communicated wonderfully making sure we didn’t need anything. If you are thinking of using The Christopher as a venue, DO IT. We loved it!",
    "author": {
      "@type": "Person",
      "name": "Guest"
    }
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
