import guide1 from '../img/iosThemes/screenshots-installGuide/guide1.png'
import guide2 from '../img/iosThemes/screenshots-installGuide/guide2.png'
import guide3 from '../img/iosThemes/screenshots-installGuide/guide3.png'
import guide4 from '../img/iosThemes/screenshots-installGuide/guide4.png'
import guide6 from '../img/iosThemes/screenshots-installGuide/guide6.png'

const STEPS = [
  {
    title: 'Step 1 - Tap on list of themes to download. Then tap on "Allow" button in the popup alert and Close it',
    img: guide1,
  },
  {
    title: 'Step 2 - Go to settings. In the setting section you can see the downloaded profile',
    img: guide2,
  },
  {
    title: 'Step 3 - Tap on the downloaded profile and install it. (Tap on "install" link in every messages and windows)',
    img: guide3,
  },
  {
    title: 'Step 4 - Enter your passcode, if asked',
    img: guide4,
  },
  {
    title: 'Step 5 - Enjoy awesome Themes',
    img: guide6,
  },
] as const

export default function ThemesInstallGuide() {
  return (
    <div className="px-4 py-6">
      <p className="text-center text-lg font-bold text-senumy-link">
        Steps Guide for Themes installation
      </p>
      <div className="mt-6 space-y-6">
        {STEPS.map((step, i) => (
          <section key={i}>
            <h4 className="text-[15px] font-bold text-[var(--text-primary)]">{step.title}</h4>
            <div className="mt-2 flex justify-center">
              <img
                src={step.img}
                alt=""
                className="w-[66%] max-w-sm rounded-lg"
                loading="lazy"
              />
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
