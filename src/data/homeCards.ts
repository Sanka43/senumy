/**
 * Single data sheet for Senumy Home page.
 * Used for both Premium and Free user home views.
 * - href: link shown to premium users (direct download/config).
 * - freeGated: if true, free users see /BecomePremiumUser/ instead of href. If false, free users get the same href.
 */

export type HomeCard = {
  icon: string
  title: string
  description: string
  href: string
  external?: boolean
  /** If true, free users are shown /BecomePremiumUser/ instead of href. Default true. */
  freeGated?: boolean
}

export type HomeCategory = {
  title: string
  cards: HomeCard[]
}

/** Resolve the link for a card based on user type. */
export function getCardHref(card: HomeCard, isPremium: boolean): string {
  if (isPremium) return card.href
  return card.freeGated === false ? card.href : '/BecomePremiumUser/'
}

export const HOME_CATEGORIES: HomeCategory[] = [
  {
    title: 'IPA Stores',
    cards: [
      { icon: 'senipa.png', 
        title: 'SenIPA', 
        description: 'SenIPA is the exclusive freemium IPA library with a wide variety of IPAs.', 
        href: 'https://apps.senumy.com/secure/configs/senipa.mobileconfig', 
        external: true },

      { icon: 'applejr.webp', 
        title: 'AppleJr', 
        description: 'AppleJr lets you install tweaked apps on iOS 26, 18, and 17 without jailbreak or PC—just add the DNS profile and sideload IPAs safely.', 
        href: 'https://apps.senumy.com/applejr/applejr.mobileconfig', 
        external: true, 
        freeGated: false },
        
      { icon: 'ipa-installer.png', title: 'IPA Installer', description: 'Install iOS apps instantly from .ipa or .tipa files with IPA Installer fast, simple, and reliable for developers and testers.', href: 'https://apps.apple.com/us/app/ipa-installer/id6748286191', external: true },
      { icon: 'maple-ipa.png', title: 'MapleIPAs', description: 'The easiest way to sideload MapleIPAs Store applications on iOS, iPadOS, tvOS, and visionOS.', href: 'https://apps.senumy.com/mapleIpas/secure/mappleipa.mobileconfig', external: true },
      { icon: 'velixa.png', title: 'Velixa', description: 'The Velixa IPA Library offers an amazing collection of IPA files.', href: 'https://apps.senumy.com/secure/configs/velixa.mobileconfig', external: true },
      { icon: 'zignee.png', title: 'Zignee', description: 'Exclusive IPA library with unique files unavailable elsewhere.', href: 'https://apps.senumy.com/secure/configs/zignee.mobileconfig', external: true },
      { icon: 'jbapastore.png', title: 'JBIPAs Store.', description: 'JBIPAs Store: Jailbreak IPA Store for iOS 9 – 17.0 Download and install apps easily.', href: 'https://apps.senumy.com/secure/configs/jbipa.mobileconfig', external: true },
      { icon: 'tiktok.png', title: 'TikTok++ IPA', description: 'TikTok Double Plus IPA MOD is a custom version of TikTok for iPhones and iPads.', href: 'https://senumy.com/files/IPAs/download/BHTikTok_Plus_v.32.8.0.ipa', external: true, freeGated: false },
    ],
  },
  {
    title: 'Jailbreak Solution',
    cards: [
      { icon: 'redensa.png', title: 'Redensa', description: 'iTerminal-based Jailbreak solution for the latest iOS version.', href: 'https://redensa.com/app/install/redensa.mobileconfig', external: true },
      { icon: 'Palera1n.webp', title: 'Palera1n', description: 'Palera1n online jailbreak tool for iOS/iPadOS 18+ on iPhones and iPads.', href: 'https://palera1n.com/online/source/secureFile/Terminalv2.mobileconfig', external: true },
      { icon: 'NekoJb.png', title: 'NekoJb', description: 'Neko Online Jailbreak supports iOS 18+ to install Cydia, Sileo, and Zebra.', href: 'https://nekojb.com/source/nekojb/secure/nekoJB.mobileconfig', external: true },
      { icon: 'sileemapp.png', title: 'Sileem', description: 'Sileem is a brand new jailbreak app installer for both iPhones and iPads.', href: 'https://sileem.com/secure/config/english/premium-sileem.mobileconfig', external: true },
      { icon: 'zjailbreak.png', title: 'zJailbreak', description: 'Third-party app store that lists jailbreaks and third-party iOS apps.', href: 'https://install.zjailbreak.store/app/zjailbreak/secure/provh/vhzf.mobileconfig', external: true },
      { icon: 'Unc0verBlack.png', title: 'Unc0ver Black', description: 'A powerful jailbreak for iOS 18+, making it easy to download Dark Cydia.', href: 'https://unc0verblack.com/unc0verdark.mobileconfig', external: true },
    ],
  },
  {
    title: 'Package Managers',
    cards: [
      { icon: 'cydia2.png', title: 'Cydia2', description: 'Easily install jailbreak apps, tweaks, and themes on the latest iOS versions.', href: 'https://appv2.cydia2.com/appv2free/v2fconfiles/cydia2v2free.mobileconfig', external: true },
      { icon: 'Sileo2.webp', title: 'Sileo2', description: 'Modern package manager for the latest versions of iOS and iPadOS.', href: 'https://app.sileo2.com/secure/sileo2.mobileconfig', external: true },
    ],
  },
  {
    title: 'iOS 26 Demo – Try It Early',
    cards: [
      { icon: 'ios26.png', title: 'iOS 26 Demo', description: 'Apple renames iOS by year—iOS 26 replaces iOS 19 with a futuristic, AI-powered experience.', href: 'https://apps.xixtract.com/ios26/secure/ios26.mobileconfig', external: true },
    ],
  },
  {
    title: "Apple's Future AI Apps",
    cards: [
      { icon: 'AppleGPT.PNG', title: 'Apple GPT', description: "Apple's Next-Gen AI Chatbot.", href: 'https://tools.leakbreak.com/applegpt/config/applegpt.mobileconfig', external: true },
      { icon: 'Safari3DX.png', title: 'Safari 3DX', description: "Apple's 3D internet browser.", href: 'https://leakbreak.com/securesafari/safari3dx.mobileconfig', external: true },
      { icon: 'apple-ai-search.png', title: 'Apple AI Search', description: 'Next-gen intelligent search engine.', href: 'https://tools.leakbreak.com/search_engine_ai/config/aisearch.mobileconfig', external: true },
    ],
  },
  {
    title: 'Game Stores',
    cards: [
      { icon: 'emula.png', title: 'Emula', description: 'Play classic games, without worrying about revokes.', href: 'https://apps.senumy.com/Emula/secure/emula.mobileconfig', external: true },
    ],
  },
  {
    title: 'Repo Extractor',
    cards: [
      { icon: 'sileem.png', title: 'Sileem Repo Extractor', description: 'A method for extracting repos to install jailbreak apps, themes, system tweaks, and online jailbreaks.', href: 'https://app.sileem.com/secure/free/Dark_Shadow.mobileconfig', external: true },
      { icon: 'altlist.png', title: 'AltList', description: 'A modern AppList app for adding Repo IPA tweaks and ++ apps.', href: 'https://apps.senumy.com/secure/configs/altlist.mobileconfig', external: true },
    ],
  },
  {
    title: 'TrollStore IPA Stores',
    cards: [
      { icon: 'quorix.png', title: 'Quorix', description: 'The ultimate source for TrollStore-based tweaks, apps, and themes.', href: 'https://apps.senumy.com/secure/configs/quorix.mobileconfig', external: true },
      { icon: 'nexara.png', title: 'Nexara', description: "Nexara's library of KFD IPAs offers amazing apps and tweaks.", href: 'https://apps.senumy.com/secure/configs/nexara.mobileconfig', external: true },
      { icon: 'trollstore.png', title: 'TrollApps', description: 'An alternative to TrollStore, this subreddit shares non-piracy open-source apps.', href: 'https://files.iextras.org/app/secure/applist/trollapp.mobileconfig', external: true },
    ],
  },
  {
    title: 'Third-party app Stores',
    cards: [
      { icon: 'tutupro.png', title: 'TutuPro', description: 'An old IPA library with a large collection of IPAs, still popular today.', href: 'https://apps.senumy.com/secure/configs/tutupro/premium.mobileconfig', external: true },
      { icon: 'panda_helper.png', title: 'Panda Helper', description: 'A top-rated third-party app store and Cydia alternative.', href: 'https://apps.senumy.com/config-ipa/pandahelper_lite_s.mobileconfig', external: true },
      { icon: 'iosninja.webp', title: 'iOS Ninja', description: 'Download iOS Jailbreak, Tweaks, and Apps.', href: 'https://apps.senumy.com/secure/configs/iosninja.mobileconfig', external: true },
      { icon: 'iosgods.webp', title: 'iOSGods', description: 'Experience the ultimate access to tweaks and customized apps.', href: 'https://app.iosgods.com/iOSGodsApp.mobileconfig', external: true },
      { icon: 'appvalley.webp', title: 'App Valley', description: 'Tweaked apps No Jailbreak - Get Tweaks Apps For Free iOS.', href: 'https://apps.senumy.com/secure/configs/appvalley.mobileconfig', external: true },
    ],
  },
  {
    title: 'Entertainment',
    cards: [
      { icon: 'tvnow.png', title: 'TVNow', description: 'Watch shows, movies, and live streams anytime on your iPhone or iPad.', href: 'https://apps.senumy.com/app/tvnow.mobileconfig', external: true },
    ],
  },
  {
    title: 'Shortcuts Tweaks',
    cards: [
      { icon: 'apple_intelligence.png', title: 'Apple Intelligence', description: 'Enable apple intelligence on any unsupported iPhone or iPad.', href: 'https://www.icloud.com/shortcuts/54ede19d68944a6494d8578a6f418651', external: true },
      { icon: 'glance.webp', title: 'Glance', description: 'Add more Lock Screen power to iOS with Glance.', href: 'https://apps.senumy.com/secure/configs/glance.mobileconfig', external: true },
      { icon: 'classicls.jpg', title: 'ClassicLS', description: 'iOS 6 style Lock Screen for modern iOS.', href: 'https://www.icloud.com/shortcuts/f03bfc6a50c24f4eaa91910494ae0697', external: true },
      { icon: 'home_screen_creator.jpg', title: 'HomeScreen Creator', description: 'Design an Overlay Image for Your Home Screen Wallpaers.', href: 'https://www.icloud.com/shortcuts/8c50cc3458d9488a85f6edd06a180f78', external: true },
      { icon: 'vertiblur.jpg', title: 'Vertiblur', description: 'Blur half of your wallpaper on your Lock Screen & Home Screen.', href: 'https://www.icloud.com/shortcuts/481947722b744082b42b84ab972fb4cb', external: true },
      { icon: 'wetr.jpg', title: 'Wetr', description: 'Rain or Shine, Update Your Lockscreen with Stunning Live Weather.', href: 'https://www.icloud.com/shortcuts/bad1df940701400ca44c5f3c62109c0e', external: true },
      { icon: 'waltz.jpg', title: 'Waltz', description: 'This shortcut lets you automate switching between your installed wallpapers.', href: 'https://www.icloud.com/shortcuts/c002bd4d970e4365a2e94a03c8e990b3', external: true },
      { icon: 'accessible.jpg', title: 'Accessible', description: 'iOS 18+ Filesystem Viewer & Extractor.', href: 'https://www.icloud.com/shortcuts/08ae998de1d7406c94f4ac594f8249d7', external: true },
    ],
  },
  {
    title: 'Utilities Stores',
    cards: [
      { icon: 'adguard-dns.png', title: 'AdGuard DNS', description: 'Free Ad & Tracker Blocker.', href: 'https://apps.senumy.com/secure/configs/adguard-dns.mobileconfig', external: true },
      { icon: 'ipainstaller.webp', title: 'IPA Installer', description: 'Install an iPA from a link, directly on your device.', href: 'https://apps.senumy.com/secure/configs/ipainstaller.mobileconfig', external: true },
      { icon: 'iconfig.webp', title: 'iConfig', description: 'A mobileconfig generator for iPhone & iPad.', href: 'https://apps.senumy.com/secure/configs/iconfig.mobileconfig', external: true },
      { icon: 'ideviceinfo.webp', title: 'iDevice Info', description: 'Retrieve information about your iPhone, iPad, and more.', href: 'https://apps.senumy.com/secure/configs/ideviceinfo.mobileconfig', external: true },
    ],
  },
  {
    title: 'Customize Themes and more',
    cards: [
      { icon: 'ela.png', title: 'Ela themes', description: 'Handpicked the best theme collection for iOS 16/17 running iPhones and iPads.', href: 'https://semijbapps.com/ela/secure/ela.mobileconfig', external: true },
      { icon: 'Android-on-iOS.png', title: 'Android on iOS', description: 'Run Android apps and experience Android features on your iOS device with ease!', href: 'https://semijbapps.com/mobile_os/trygalaxy.mobileconfig', external: true },
      { icon: 'ryOS_favicon.ico', title: 'ryOS', description: 'Use ryOS Macintosh to experience classic macOS features on iPhone and iPad. No Mac required — everything runs in one app.', href: 'https://apps.senumy.com/app/macios.mobileconfig', external: true },
    ],
  },
]
