(() => {
  const storageKey = 'lang';
  const getBase = () => (location.pathname.includes('/pages/') ? '../' : './');
  const getLang = () => new URLSearchParams(location.search).get('lang') || localStorage.getItem(storageKey) || 'ja';
  const setLang = (lang) => { localStorage.setItem(storageKey, lang); };

  async function loadDict(lang) {
    const base = getBase();
    try {
      const res = await fetch(`${base}assets/i18n/${lang}.json`, { cache: 'no-cache' });
      if (!res.ok) throw new Error('dict load failed');
      return await res.json();
    } catch (e) {
      if (lang !== 'ja') return loadDict('ja');
      return {};
    }
  }

  function applyI18n(dict) {
    document.documentElement.lang = getLang();
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const text = key.split('|').map(k => k.trim()).map(k => k.split('.').reduce((o, p) => (o ? o[p] : undefined), dict)).find(Boolean);
      if (typeof text === 'string') el.textContent = text;
    });
  }

  function wireLangSwitch(dict) {
    // Any element with [data-lang] sets the language when clicked/changed
    document.querySelectorAll('[data-lang]').forEach((el) => {
      const lang = el.getAttribute('data-lang');
      const handler = () => { setLang(lang); location.reload(); };
      if (el.tagName === 'INPUT' || el.tagName === 'SELECT' || el.hasAttribute('type')) {
        el.addEventListener('change', handler);
      } else {
        el.addEventListener('click', handler);
      }
    });
  }

  document.addEventListener('DOMContentLoaded', async () => {
    const dict = await loadDict(getLang());
    applyI18n(dict);
    wireLangSwitch(dict);
  });
})();

