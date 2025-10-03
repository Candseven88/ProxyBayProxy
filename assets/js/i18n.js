// 支持的语言列表
const supportedLanguages = {
  'en': 'English',
  'zh': '中文',
  'es': 'Español',
  'ru': 'Русский'
};

// 语言翻译数据
const translations = {
  // 英语（默认语言）
  'en': {
    // 导航
    'nav_home': 'Home',
    'nav_setup': 'Setup Guide',
    'nav_submit': 'Submit Proxy',
    'nav_blog': 'Blog',
    
    // 主页
    'main_title': '1337x & PirateBay Proxy List',
    'main_subtitle': 'Access 1337x and The Pirate Bay with these working proxies',
    'main_description': 'Find the fastest and most reliable proxies for accessing 1337x and The Pirate Bay. Our list is updated daily to ensure you always have access to your favorite torrent sites.',
    'proxy_list_title': 'Current Working Proxies',
    'proxy_list_intro': 'Below is a list of verified proxy sites that allow access to 1337x and The Pirate Bay. These proxies are regularly checked for availability and speed.',
    'site_column': 'Site',
    'type_column': 'Type',
    'country_column': 'Country',
    'status_column': 'Status',
    'speed_column': 'Speed',
    'report_column': 'Report',
    'status_online': 'Online',
    'status_offline': 'Offline',
    'report_button': 'Report this proxy',
    'comparison_title': '1337x vs PirateBay: Which Is Better?',
    'comparison_text': 'Both 1337x and The Pirate Bay are popular torrent sites, but they differ in several ways. 1337x has a more user-friendly interface and better organization, while The Pirate Bay is simpler and has been around longer. 1337x typically has more verified torrents and a more active community moderating content.',
    'guide_button': 'Complete Guide',
    '1337x_guide_button': '1337x Guide',
    'vpn_warning': 'Always use a VPN for added security when accessing torrent sites.',
    
    // 设置页面
    'setup_title': 'How to Access 1337x & The Pirate Bay',
    'setup_subtitle': 'Complete guide to accessing blocked torrent sites safely',
    'setup_description': 'Learn how to access 1337x and The Pirate Bay even when they\'re blocked in your region. This guide covers various methods including proxies, VPNs, and alternative access options.',
    
    // 提交页面
    'submit_title': 'Submit a New Proxy',
    'submit_subtitle': 'Help others by sharing working proxy sites',
    'submit_description': 'Know a working proxy for 1337x or The Pirate Bay that\'s not on our list? Submit it here to help other users access their favorite torrent sites.',
    'form_site_url': 'Proxy URL',
    'form_site_type': 'Site Type',
    'form_country': 'Country',
    'form_notes': 'Additional Notes',
    'form_submit': 'Submit Proxy',
    
    // 页脚
    'footer_disclaimer': 'Disclaimer: This website only provides information about proxy sites and does not host or distribute any copyrighted content.',
    'footer_copyright': '© 2025 Proxy Bay Proxy. All rights reserved.',
    
    // 语言选择器
    'language_selector': 'Language',
  },
  
  // 中文
  'zh': {
    // 导航
    'nav_home': '首页',
    'nav_setup': '设置指南',
    'nav_submit': '提交代理',
    'nav_blog': '博客',
    
    // 主页
    'main_title': '1337x 和 海盗湾代理列表',
    'main_subtitle': '通过这些可用代理访问 1337x 和海盗湾',
    'main_description': '查找访问 1337x 和海盗湾的最快速和最可靠的代理。我们的列表每日更新，确保您始终能够访问您喜爱的种子站点。',
    'proxy_list_title': '当前可用代理',
    'proxy_list_intro': '以下是允许访问 1337x 和海盗湾的已验证代理站点列表。这些代理会定期检查可用性和速度。',
    'site_column': '站点',
    'type_column': '类型',
    'country_column': '国家',
    'status_column': '状态',
    'speed_column': '速度',
    'report_column': '报告',
    'status_online': '在线',
    'status_offline': '离线',
    'report_button': '报告此代理',
    'comparison_title': '1337x vs 海盗湾：哪个更好？',
    'comparison_text': '1337x 和海盗湾都是流行的种子站点，但它们在几个方面有所不同。1337x 拥有更加用户友好的界面和更好的组织，而海盗湾则更简单且存在的时间更长。1337x 通常有更多经过验证的种子和更活跃的社区来审核内容。',
    'guide_button': '完整指南',
    '1337x_guide_button': '1337x 指南',
    'vpn_warning': '访问种子站点时，请始终使用 VPN 以增加安全性。',
    
    // 设置页面
    'setup_title': '如何访问 1337x 和海盗湾',
    'setup_subtitle': '安全访问被封锁种子站点的完整指南',
    'setup_description': '了解如何在您所在地区被封锁的情况下访问 1337x 和海盗湾。本指南涵盖各种方法，包括代理、VPN 和替代访问选项。',
    
    // 提交页面
    'submit_title': '提交新代理',
    'submit_subtitle': '通过分享可用代理站点帮助他人',
    'submit_description': '知道一个我们列表中没有的可用 1337x 或海盗湾代理？在此提交以帮助其他用户访问他们喜爱的种子站点。',
    'form_site_url': '代理网址',
    'form_site_type': '站点类型',
    'form_country': '国家',
    'form_notes': '附加说明',
    'form_submit': '提交代理',
    
    // 页脚
    'footer_disclaimer': '免责声明：本网站仅提供有关代理站点的信息，不托管或分发任何受版权保护的内容。',
    'footer_copyright': '© 2025 Proxy Bay Proxy. 保留所有权利。',
    
    // 语言选择器
    'language_selector': '语言',
  },
  
  // 西班牙语
  'es': {
    // 导航
    'nav_home': 'Inicio',
    'nav_setup': 'Guía de Configuración',
    'nav_submit': 'Enviar Proxy',
    'nav_blog': 'Blog',
    
    // 主页
    'main_title': 'Lista de Proxies para 1337x y The Pirate Bay',
    'main_subtitle': 'Accede a 1337x y The Pirate Bay con estos proxies funcionales',
    'main_description': 'Encuentra los proxies más rápidos y confiables para acceder a 1337x y The Pirate Bay. Nuestra lista se actualiza diariamente para asegurar que siempre tengas acceso a tus sitios de torrents favoritos.',
    'proxy_list_title': 'Proxies Funcionales Actuales',
    'proxy_list_intro': 'A continuación hay una lista de sitios proxy verificados que permiten acceso a 1337x y The Pirate Bay. Estos proxies son revisados regularmente para verificar su disponibilidad y velocidad.',
    'site_column': 'Sitio',
    'type_column': 'Tipo',
    'country_column': 'País',
    'status_column': 'Estado',
    'speed_column': 'Velocidad',
    'report_column': 'Reportar',
    'status_online': 'En línea',
    'status_offline': 'Fuera de línea',
    'report_button': 'Reportar este proxy',
    'comparison_title': '1337x vs The Pirate Bay: ¿Cuál es Mejor?',
    'comparison_text': 'Tanto 1337x como The Pirate Bay son sitios de torrents populares, pero difieren en varios aspectos. 1337x tiene una interfaz más amigable y mejor organización, mientras que The Pirate Bay es más simple y ha existido por más tiempo. 1337x típicamente tiene más torrents verificados y una comunidad más activa moderando el contenido.',
    'guide_button': 'Guía Completa',
    '1337x_guide_button': 'Guía de 1337x',
    'vpn_warning': 'Siempre usa una VPN para mayor seguridad al acceder a sitios de torrents.',
    
    // 设置页面
    'setup_title': 'Cómo Acceder a 1337x y The Pirate Bay',
    'setup_subtitle': 'Guía completa para acceder de forma segura a sitios de torrents bloqueados',
    'setup_description': 'Aprende cómo acceder a 1337x y The Pirate Bay incluso cuando están bloqueados en tu región. Esta guía cubre varios métodos incluyendo proxies, VPNs y opciones de acceso alternativas.',
    
    // 提交页面
    'submit_title': 'Enviar un Nuevo Proxy',
    'submit_subtitle': 'Ayuda a otros compartiendo sitios proxy funcionales',
    'submit_description': '¿Conoces un proxy funcional para 1337x o The Pirate Bay que no está en nuestra lista? Envíalo aquí para ayudar a otros usuarios a acceder a sus sitios de torrents favoritos.',
    'form_site_url': 'URL del Proxy',
    'form_site_type': 'Tipo de Sitio',
    'form_country': 'País',
    'form_notes': 'Notas Adicionales',
    'form_submit': 'Enviar Proxy',
    
    // 页脚
    'footer_disclaimer': 'Descargo de responsabilidad: Este sitio web solo proporciona información sobre sitios proxy y no aloja ni distribuye ningún contenido protegido por derechos de autor.',
    'footer_copyright': '© 2025 Proxy Bay Proxy. Todos los derechos reservados.',
    
    // 语言选择器
    'language_selector': 'Idioma',
  },
  
  // 俄语
  'ru': {
    // 导航
    'nav_home': 'Главная',
    'nav_setup': 'Руководство',
    'nav_submit': 'Добавить Прокси',
    'nav_blog': 'Блог',
    
    // 主页
    'main_title': 'Список Прокси для 1337x и The Pirate Bay',
    'main_subtitle': 'Доступ к 1337x и The Pirate Bay через рабочие прокси',
    'main_description': 'Найдите самые быстрые и надежные прокси для доступа к 1337x и The Pirate Bay. Наш список обновляется ежедневно, чтобы вы всегда имели доступ к любимым торрент-сайтам.',
    'proxy_list_title': 'Текущие Рабочие Прокси',
    'proxy_list_intro': 'Ниже представлен список проверенных прокси-сайтов, которые обеспечивают доступ к 1337x и The Pirate Bay. Эти прокси регулярно проверяются на доступность и скорость.',
    'site_column': 'Сайт',
    'type_column': 'Тип',
    'country_column': 'Страна',
    'status_column': 'Статус',
    'speed_column': 'Скорость',
    'report_column': 'Сообщить',
    'status_online': 'Онлайн',
    'status_offline': 'Офлайн',
    'report_button': 'Сообщить о прокси',
    'comparison_title': '1337x против The Pirate Bay: Что Лучше?',
    'comparison_text': '1337x и The Pirate Bay — популярные торрент-сайты, но они отличаются по нескольким параметрам. 1337x имеет более удобный интерфейс и лучшую организацию, в то время как The Pirate Bay проще и существует дольше. На 1337x обычно больше проверенных торрентов и более активное сообщество, модерирующее контент.',
    'guide_button': 'Полное Руководство',
    '1337x_guide_button': 'Руководство по 1337x',
    'vpn_warning': 'Всегда используйте VPN для дополнительной безопасности при доступе к торрент-сайтам.',
    
    // 设置页面
    'setup_title': 'Как Получить Доступ к 1337x и The Pirate Bay',
    'setup_subtitle': 'Полное руководство по безопасному доступу к заблокированным торрент-сайтам',
    'setup_description': 'Узнайте, как получить доступ к 1337x и The Pirate Bay, даже если они заблокированы в вашем регионе. Это руководство охватывает различные методы, включая прокси, VPN и альтернативные варианты доступа.',
    
    // 提交页面
    'submit_title': 'Добавить Новый Прокси',
    'submit_subtitle': 'Помогите другим, поделившись рабочими прокси-сайтами',
    'submit_description': 'Знаете рабочий прокси для 1337x или The Pirate Bay, которого нет в нашем списке? Добавьте его здесь, чтобы помочь другим пользователям получить доступ к их любимым торрент-сайтам.',
    'form_site_url': 'URL Прокси',
    'form_site_type': 'Тип Сайта',
    'form_country': 'Страна',
    'form_notes': 'Дополнительные Примечания',
    'form_submit': 'Добавить Прокси',
    
    // 页脚
    'footer_disclaimer': 'Отказ от ответственности: Этот веб-сайт предоставляет только информацию о прокси-сайтах и не размещает и не распространяет какой-либо контент, защищенный авторским правом.',
    'footer_copyright': '© 2025 Proxy Bay Proxy. Все права защищены.',
    
    // 语言选择器
    'language_selector': 'Язык',
  }
};

// 获取当前语言或设置默认语言
function getCurrentLanguage() {
  // 尝试从本地存储中获取语言设置
  let lang = localStorage.getItem('preferred_language');
  
  // 如果没有设置语言或设置的语言不受支持，则使用默认语言（英语）
  if (!lang || !translations[lang]) {
    lang = 'en';
    localStorage.setItem('preferred_language', lang);
  }
  
  return lang;
}

// 设置语言
function setLanguage(lang) {
  // 确保语言受支持
  if (!translations[lang]) {
    console.error(`Language ${lang} is not supported.`);
    return;
  }
  
  // 保存语言选择到本地存储
  localStorage.setItem('preferred_language', lang);
  
  // 更新页面上的所有文本
  updatePageText();
  
  // 更新语言选择器的显示
  updateLanguageSelector();
}

// 更新页面上的所有文本
function updatePageText() {
  const currentLang = getCurrentLanguage();
  const texts = translations[currentLang];

  // 同步 <html lang="..."> 属性
  if (document && document.documentElement) {
    document.documentElement.setAttribute('lang', currentLang);
  }
  
  // 查找页面上所有带有 data-i18n 属性的元素
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');

    if (texts[key]) {
      const tag = element.tagName.toLowerCase();
      // 输入类元素：更新 placeholder/value
      if (tag === 'input' || tag === 'textarea') {
        // 占位符（如有）
        if ('placeholder' in element) {
          element.placeholder = texts[key];
        }
        // 按钮类型 input 的可见文本
        if (tag === 'input' && (element.type === 'button' || element.type === 'submit' || element.type === 'reset')) {
          element.value = texts[key];
        }
      } else if (tag === 'button') {
        // 按钮使用可见文本
        element.textContent = texts[key];
      } else {
        // 其他元素直接替换内容
        element.innerHTML = texts[key];
      }
    }
  });
}

// 创建语言选择器
function createLanguageSelector(variant = 'desktop') {
  // 创建语言选择器容器
  const selectorContainer = document.createElement('div');
  if (variant === 'mobile') {
    selectorContainer.className = 'language-selector flex items-center px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium';
  } else {
    selectorContainer.className = 'language-selector flex items-center ml-4';
  }
  
  // 创建下拉菜单
  const select = document.createElement('select');
  select.className = 'i18n-language-select bg-white border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500';
  
  // 添加语言选项
  for (const [code, name] of Object.entries(supportedLanguages)) {
    const option = document.createElement('option');
    option.value = code;
    option.textContent = name;
    select.appendChild(option);
  }
  
  // 设置当前选中的语言
  select.value = getCurrentLanguage();
  
  // 添加事件监听器
  select.addEventListener('change', function() {
    setLanguage(this.value);
    // 刷新页面以应用新语言
    window.location.reload();
  });
  
  // 添加标签
  const label = document.createElement('label');
  label.className = 'mr-2 text-sm text-gray-700';
  label.setAttribute('data-i18n', 'language_selector');
  label.textContent = translations[getCurrentLanguage()]['language_selector'];
  
  // 组装选择器
  selectorContainer.appendChild(label);
  selectorContainer.appendChild(select);
  
  return selectorContainer;
}

// 更新语言选择器的显示
function updateLanguageSelector() {
  const selects = document.querySelectorAll('.i18n-language-select');
  selects.forEach(sel => {
    sel.value = getCurrentLanguage();
  });
}

// 当页面加载完成时初始化
document.addEventListener('DOMContentLoaded', function() {
  // 在桌面导航区域渲染语言选择器
  const desktopLinksContainer = document.querySelector('nav .md\\:flex.items-center.space-x-8');
  if (desktopLinksContainer) {
    const desktopSelector = createLanguageSelector('desktop');
    desktopLinksContainer.appendChild(desktopSelector);
  } else {
    // 回退：如果找不到导航容器，则以不遮挡的方式固定在右上角
    const fallbackSelector = createLanguageSelector('desktop');
    fallbackSelector.style.position = 'fixed';
    fallbackSelector.style.top = '1rem';
    fallbackSelector.style.right = '1rem';
    fallbackSelector.style.zIndex = '40';
    document.body.appendChild(fallbackSelector);
  }
  
  // 在移动菜单中渲染语言选择器（如存在）
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) {
    const mobileSelector = createLanguageSelector('mobile');
    mobileMenu.appendChild(mobileSelector);
  }
  
  // 更新页面文本
  updatePageText();
});

// 导出函数以便在其他脚本中使用
window.i18n = {
  getCurrentLanguage,
  setLanguage,
  updatePageText,
  translations
}; 