// Logo
import logo from '../img/senumylogo/senumy-logo.png'

// Card icons (from src/img/cardIcons) – all icons used in home.html; add file to this folder if missing
import senipa from '../img/cardIcons/senipa.png'
import applejr from '../img/cardIcons/applejr.webp'
import ipaInstaller from '../img/cardIcons/ipa-installer.png'
import mapleIpa from '../img/cardIcons/maple-ipa.png'
import velixa from '../img/cardIcons/velixa.png'
import zignee from '../img/cardIcons/zignee.png'
import jbapastore from '../img/cardIcons/jbapastore.png'
import tiktok from '../img/cardIcons/tiktok.png'
import redensa from '../img/cardIcons/redensa.png'
import Palera1n from '../img/cardIcons/Palera1n.webp'
import NekoJb from '../img/cardIcons/NekoJb.png'
import sileemapp from '../img/cardIcons/sileemapp.png'
import zjailbreak from '../img/cardIcons/zjailbreak.png'
import Unc0verBlack from '../img/cardIcons/Unc0verBlack.png'
import cydia2 from '../img/cardIcons/cydia2.png'
import Sileo2 from '../img/cardIcons/Sileo2.webp'

import ios26 from '../img/cardIcons/ios26.png'
import AppleGPT from '../img/cardIcons/AppleGPT.PNG'
import Safari3DX from '../img/cardIcons/Safari3DX.png'
import appleAiSearch from '../img/cardIcons/apple-ai-search.png'
import emula from '../img/cardIcons/emula.png'
import sileem from '../img/cardIcons/sileem.png'
import altlist from '../img/cardIcons/altlist.png'
import quorix from '../img/cardIcons/quorix.png'
import nexara from '../img/cardIcons/nexara.png'
import trollstore from '../img/cardIcons/trollstore.png'
import tutupro from '../img/cardIcons/tutupro.png'
import pandaHelper from '../img/cardIcons/panda_helper.png'
import iosninja from '../img/cardIcons/iosninja.webp'
import iosgods from '../img/cardIcons/iosgods.webp'
import appvalley from '../img/cardIcons/appvalley.webp'
import tvnow from '../img/cardIcons/tvnow.png'
import appleIntelligence from '../img/cardIcons/apple_intelligence.png'
import glance from '../img/cardIcons/glance.webp'
import classicls from '../img/cardIcons/classicls.jpg'
import homeScreenCreator from '../img/cardIcons/home_screen_creator.jpg'
import vertiblur from '../img/cardIcons/vertiblur.jpg'
import wetr from '../img/cardIcons/wetr.jpg'
import waltz from '../img/cardIcons/waltz.jpg'
import accessible from '../img/cardIcons/accessible.jpg'
import adguardDns from '../img/cardIcons/adguard-dns.png'
import ipaInstallerWebp from '../img/cardIcons/ipainstaller.webp'
import iconfig from '../img/cardIcons/iconfig.webp'
import ideviceinfo from '../img/cardIcons/ideviceinfo.webp'
import ela from '../img/cardIcons/ela.png'
import androidOnIos from '../img/cardIcons/Android-on-iOS.png'
import ryOS from '../img/cardIcons/ryOS_favicon.ico'

export const LOGO_SRC: string = logo

export const CARD_ICONS: Record<string, string> = {
  'senipa.png': senipa,
  'applejr.webp': applejr,
  'ipa-installer.png': ipaInstaller,
  'maple-ipa.png': mapleIpa,
  'velixa.png': velixa,
  'zignee.png': zignee,
  'jbapastore.png': jbapastore,
  'tiktok.png': tiktok,
  'redensa.png': redensa,
  'Palera1n.webp': Palera1n,
  'NekoJb.png': NekoJb,
  'sileemapp.png': sileemapp,
  'zjailbreak.png': zjailbreak,
  'Unc0verBlack.png': Unc0verBlack,
  'cydia2.png': cydia2,
  'Sileo2.webp': Sileo2,
  'ios26.png': ios26,
  'AppleGPT.PNG': AppleGPT,
  'Safari3DX.png': Safari3DX,
  'apple-ai-search.png': appleAiSearch,
  'emula.png': emula,
  'sileem.png': sileem,
  'altlist.png': altlist,
  'quorix.png': quorix,
  'nexara.png': nexara,
  'trollstore.png': trollstore,
  'tutupro.png': tutupro,
  'panda_helper.png': pandaHelper,
  'iosninja.webp': iosninja,
  'iosgods.webp': iosgods,
  'appvalley.webp': appvalley,
  'tvnow.png': tvnow,
  'apple_intelligence.png': appleIntelligence,
  'glance.webp': glance,
  'classicls.jpg': classicls,
  'home_screen_creator.jpg': homeScreenCreator,
  'vertiblur.jpg': vertiblur,
  'wetr.jpg': wetr,
  'waltz.jpg': waltz,
  'accessible.jpg': accessible,
  'adguard-dns.png': adguardDns,
  'ipainstaller.webp': ipaInstallerWebp,
  'iconfig.webp': iconfig,
  'ideviceinfo.webp': ideviceinfo,
  'ela.png': ela,
  'Android-on-iOS.png': androidOnIos,
  'ryOS_favicon.ico': ryOS,
}

export function getCardIconUrl(filename: string): string {
  return CARD_ICONS[filename] ?? ''
}
