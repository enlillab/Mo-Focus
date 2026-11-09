# MO FOCUS

A Pomodoro timer made for Mohammad.

## On a computer (no install)

1. Unzip this folder.
2. Double-click `index.html`.

It opens in your browser and works offline. Music stations (YouTube, Spotify…) only work from the online version.

## On a phone (install as an app)

1. Put this folder online for free: drag it onto [Netlify Drop](https://app.netlify.com/drop) (or use GitHub Pages). You get a link.
2. Open the link on your phone.
   - **iPhone:** Safari → Share → **Add to Home Screen**
   - **Android:** Chrome → menu → **Install app**

It then opens full-screen like a normal app and works offline.

## Updating the app without losing anyone's data

Each user's settings, tasks and statistics are saved in their own browser, tied to the site's **address**. An update keeps that data as long as the address stays the same.

1. **Upload to the same site.** On Netlify, open your existing site → **Deploys** → drag the new folder onto it. Don't use Netlify Drop again: that creates a new address, and the app would open empty there.
2. **Never change the address** (domain or folder path). If you ever must, ask users to tap **Settings → Export backup** first, then **Import backup** on the new address.
3. **When you change any file, raise the version** at the top of `sw.js` (for example `mofocus-v7` → `mofocus-v8`) so phones download the new files.

What the app does to protect data:

- The storage key never changes, and new versions only add fields — they never remove old ones.
- Before upgrading saved data to a new format, it keeps a copy of the old data.
- If saved data can't be read, it's set aside instead of being overwritten.
- It asks the browser to keep the data even when storage is low.
- **Settings → Export backup / Import backup** saves everything to a file and restores it on any device.

## Notes

- The app uses the phone's or computer's system language (Arabic or English). The layout is the same in both languages.
- The screen stays on while the timer runs, and for 5 minutes after a phase ends or is paused. Turn this off in **Settings → Keep screen awake**.
- Alerts play while the app is open. Keep the volume up.
- Switching between Focus and breaks keeps each one's progress. A small dot marks a paused phase, and the timer resumes from where you left it.
- **Music:** built-in ambient sounds (rain, ocean, brown noise, white noise) work offline. You can also paste any YouTube, Spotify, SoundCloud or Apple Music link. Spotify plays full songs only when you are signed in to Spotify in that browser.
- On a computer, the **Space** bar starts or pauses the timer.

---

<div dir="rtl">

# مو فوكس

مؤقت بومودورو صُمم لمحمد.

## على الكمبيوتر

فك ضغط المجلد وانقر مرتين على `index.html`.

## على الهاتف

ارفع المجلد إلى [Netlify Drop](https://app.netlify.com/drop) ثم افتح الرابط على هاتفك:

- **آيفون:** سفاري ← مشاركة ← **إضافة إلى الشاشة الرئيسية**
- **أندرويد:** كروم ← القائمة ← **تثبيت التطبيق**

## التحديث دون فقدان البيانات

- ارفع النسخة الجديدة إلى **الموقع نفسه** (في Netlify: افتح موقعك ← Deploys ← اسحب المجلد). لا تستخدم Netlify Drop مرة أخرى لأنه يُنشئ عنواناً جديداً فارغاً.
- لا تغيّر عنوان الموقع. وإن اضطررت، اطلب من المستخدمين **تصدير نسخة احتياطية** من الإعدادات ثم استيرادها في العنوان الجديد.
- عند تعديل أي ملف، ارفع رقم الإصدار في أعلى `sw.js`.

</div>
