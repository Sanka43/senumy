# Full folder analysis: Guest vs Premium vs Senumy-Web

## Guest app (fr7hfcgxc5gcee)

| Route | Page file | Content type | In senumy-web? |
|-------|-----------|--------------|----------------|
| `/` | home.html | Card list (IPA stores, Jailbreak, Package managers) | Yes (Home) |
| `/BecomePremiumUser/` | BecomePremiumUser.html | Donate + registration code + Upgrade | Yes |
| `/donate/` | donate.html | Info + Install premium / Become premium / Contact | Yes (Donate) |
| `/SenumyJailbreakTools/` | SenumyJailbreakTools.html | Info + same 3 buttons | **Yes** |
| `/SenumyIpaLibrary/` | SenumyIpaLibrary.html | Info + same 3 buttons | **Yes** |
| `/iOSTweaks/` | iOSTweaks.html | Info + same 3 buttons | **Yes** |
| `/Best_iOS_themes/` | BestiosThemes.html | Info + same 3 buttons (guest: CTA only) | **Yes** |
| `/3rd_party_OSes/` | 3rd_party_Oses.html | Info + same 3 buttons (guest: CTA only) | **Yes** |
| `/zignee/` | zignee.html | Info + same 3 buttons | **Yes** |
| `/acutus/` | acutus.html | Info + same 3 buttons | **Yes** |

Other guest routes (Framework7 demo / missing): about, panel-right-*, tab-*, tabs-routable, text-editor, toast, toggle, toolbar-tabbar, tooltip, treeview, timeline*, virtual-list*, vi, color-themes, page-transitions*, page-loader*, master-detail, 404. Not needed for Senumy content.

---

## Premium app (prytexdmifgdv7um)

| Route | Page file | Content type | In senumy-web? |
|-------|-----------|--------------|----------------|
| `/` | home.html | Card list (premium home) | No (different home) |
| `/themesInstallGuide/` | themesInstallGuide.html | Step-by-step guide with images | **Yes** |
| `/SenumyJailbreakTools/` | SenumyJailbreakTools.html | Same CTA block as guest | **Yes** (shared) |
| `/Best_iOS_themes/` | BestiosThemes.html | **List of themes** + Install Guide link + .mobileconfig links | **Yes** (CTA only; list TBD) |
| `/3rd_party_OSes/` | 3rd_party_Oses.html | **List of OSes** with .mobileconfig links | **Yes** (CTA only; list TBD) |

Premium has no BecomePremiumUser or donate (premium users already upgraded).

---

## Senumy-Web current state (after sync)

- **Routes:** `/`, `/BecomePremiumUser/`, `/donate/`, `/SenumyJailbreakTools/`, `/SenumyIpaLibrary/`, `/iOSTweaks/`, `/Best_iOS_themes/`, `/3rd_party_OSes/`, `/zignee/`, `/acutus/`, `/themesInstallGuide/`
- **Guest pages:** All 10 content pages implemented (home, BecomePremiumUser, donate, + 7 CTA pages).
- **Premium pages:** themesInstallGuide implemented (step-by-step with images from `src/img/iosThemes/screenshots-installGuide/`). Best_iOS_themes and 3rd_party_OSes are CTA-only; full list views (theme/OS links) can be added later from premium app data.

---

## Summary

- **Guest:** 10 content pages — all in senumy-web.
- **Premium:** themesInstallGuide in senumy-web; Best_iOS_themes and 3rd_party_OSes list content (many .mobileconfig links) can be added as separate list pages if needed.
