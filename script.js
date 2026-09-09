/* =============================================
   مؤسسة الإتقان للسيراميك والرخام - script.js
   ============================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ---- Active Nav Link ---- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a, .mobile-menu a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ---- Hamburger Menu ---- */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');
      const isOpen = mobileMenu.classList.contains('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });
    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
      });
    });
  }

  /* ---- Scroll Fade-in ---- */
  const fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.12 });
    fadeEls.forEach(function (el) { observer.observe(el); });
  }

  /* ---- FAQ Accordion ---- */
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-item').forEach(function (i) { i.classList.remove('open'); });
      // Toggle current
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ---- Contact Form ---- */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      contactForm.style.display = 'none';
      const msg = document.getElementById('success-msg');
      if (msg) { msg.classList.add('show'); }
    });
  }

  /* ---- Blog Articles Toggle ---- */
  const blogList   = document.getElementById('blog-list');
  const articleView = document.getElementById('article-view');
  const articleTitle   = document.getElementById('article-title');
  const articleDate    = document.getElementById('article-date');
  const articleBody    = document.getElementById('article-body');

  // Article content stored as data
  const articles = {
    1: {
      title: 'كيف تختار السيراميك المناسب لمنزلك',
      date: '15 يناير 2024',
      html: `
        <p>اختيار السيراميك المناسب لمنزلك ليس قرارًا سهلاً، فهو استثمار طويل الأمد يؤثر على مظهر منزلك وراحتك اليومية لسنوات قادمة. مع توفر المئات من الأنواع والتصاميم في الأسواق، قد يشعر الكثيرون بالحيرة عند اتخاذ هذا القرار. في هذا المقال الشامل، سنقدم لك دليلاً عمليًا يساعدك على اختيار السيراميك الأمثل بناءً على احتياجاتك وميزانيتك وذوقك الشخصي.</p>

        <h2>أولاً: فهم أنواع السيراميك الأساسية</h2>
        <p>قبل أن تبدأ في عملية الاختيار، من المهم أن تفهم الأنواع الرئيسية للسيراميك المتوفرة في السوق. هناك ثلاثة أنواع أساسية: السيراميك التقليدي، البورسلان، والجرانيت السيراميكي. كل نوع له خصائصه الفريدة ومجالات استخدامه المثالية.</p>
        <p><strong>السيراميك التقليدي</strong> هو الأكثر شيوعًا واقتصادية، مصنوع من الطين المحروق ومغطى بطبقة زجاجية ملونة. يتميز بتنوع كبير في التصاميم والألوان، وهو مناسب للجدران والأرضيات الداخلية ذات الاستخدام المتوسط.</p>
        <p><strong>البورسلان</strong> هو نوع أكثر كثافة وصلابة من السيراميك التقليدي، يُصنع من طين أنقى ويُحرق في درجات حرارة أعلى. هذا يجعله أكثر مقاومة للماء، أقل مسامية، وأكثر تحملاً للخدوش والبقع. البورسلان مثالي للمناطق ذات الاستخدام الكثيف وللمناطق الخارجية.</p>
        <p><strong>الجرانيت السيراميكي</strong> (Vitrified Tiles) هو نوع متطور من البورسلان، يتميز بامتصاص شبه معدوم للماء ومقاومة عالية جدًا للخدوش والبقع. يُستخدم عادة في المشاريع التجارية، لكنه يكتسب شعبية متزايدة في المنازل الفاخرة.</p>

        <h2>ثانيًا: اختيار الحجم المناسب</h2>
        <p>حجم البلاط يلعب دورًا كبيرًا في المظهر النهائي للمساحة. البلاط الصغير (20×20 سم) يخلق مظهرًا تقليديًا، بينما البلاط الكبير (80×80 سم وأكبر) يعطي إحساسًا بالفخامة والاتساع. القاعدة العامة: لا يزيد البلاط عن ثلث عرض الغرفة.</p>

        <h2>ثالثًا: اختيار اللون والتصميم</h2>
        <p>الألوان الفاتحة (الأبيض، البيج، الرمادي الفاتح) تجعل المساحة تبدو أكبر وأكثر إشراقًا. الألوان الداكنة تخلق مظهرًا فخمًا لكنها تحتاج إضاءة جيدة. البلاط الذي يحاكي مواد طبيعية (رخام، خشب، حجر) يجمع جمال المواد الطبيعية مع متانة السيراميك.</p>

        <h2>رابعًا: اختيار التشطيب</h2>
        <p>البلاط اللامع يعكس الضوء ويجعل المساحة أكثر إشراقًا لكنه قد يكون زلقًا. البلاط المطفي أقل عرضة للانزلاق ومثالي للمطابخ والحمامات والمناطق الخارجية.</p>

        <h2>خامسًا: اختيار البلاط حسب الغرفة</h2>
        <p>للصالات: بورسلان متوسط إلى كبير الحجم بتشطيب مطفي. للمطابخ: بورسلان مقاوم للبقع والماء. للحمامات: الأولوية للمقاومة للماء والانزلاق. للمداخل: بورسلان قوي بألوان متوسطة إلى داكنة.</p>

        <h2>سادسًا: الأخطاء الشائعة</h2>
        <p>تجنب اختيار البلاط بناءً على المظهر فقط. اطلب دائمًا رؤية قطعة كبيرة. اشترِ الكمية كلها مرة واحدة مع إضافة 10-15% احتياطي للفاقد.</p>

        <h2>سابعًا: نصائح للصيانة</h2>
        <p>نظف البلاط بانتظام بماء دافئ ومنظف معتدل. تجنب المنظفات الحمضية القوية. افحص الحشو دوريًا واستبدله عند التشقق. امسح الانسكابات فورًا.</p>

        <div class="article-summary">
          <h3>خلاصة النصائح الرئيسية:</h3>
          <ul class="feature-list">
            ${['اختر البورسلان للمناطق عالية الاستخدام والخارجية','حدد الحجم بناءً على مساحة الغرفة','اختر الألوان الفاتحة للمساحات الصغيرة','استخدم تشطيب مطفي للمطابخ والحمامات','احسب الكمية مع إضافة 10-15% احتياطي','نظف البلاط بانتظام بمواد معتدلة'].map(t=>`<li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="#C9A84C" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg><span>${t}</span></li>`).join('')}
          </ul>
        </div>

        <p style="margin-top:2rem;">لا تتردد في استشارة فريق مؤسسة الإتقان للحصول على نصائح مخصصة تناسب احتياجاتك. نحن هنا لمساعدتك في كل خطوة من رحلة اختيار وتركيب السيراميك المثالي لمنزلك.</p>
      `
    },
    2: {
      title: 'فوائد الرخام الطبيعي في التصميم الداخلي',
      date: '10 يناير 2024',
      html: `
        <p>منذ آلاف السنين والرخام الطبيعي يعتبر رمزًا للفخامة والرقي في العمارة والتصميم الداخلي. من القصور الملكية إلى المعابد القديمة، استخدم الرخام ليضفي طابعًا من الجلال والجمال الخالد. اليوم، يواصل الرخام الطبيعي تميزه كخيار أول للمنازل والمباني الفاخرة حول العالم.</p>

        <h2>الجمال الطبيعي الفريد</h2>
        <p>أول ما يميز الرخام الطبيعي هو جماله الفريد الذي لا يُضاهى. كل قطعة رخام هي عمل فني طبيعي فريد من نوعه، تشكلت على مدى ملايين السنين تحت الضغط والحرارة العاليين. العروق الطبيعية والأنماط الملونة التي تتخلل الرخام لا يمكن تقليدها بدقة، مما يجعل كل تركيبة رخام مميزة تمامًا.</p>

        <h2>المتانة والعمر الطويل</h2>
        <p>رغم أن الرخام قد يبدو رقيقًا وأنيقًا، فهو في الواقع حجر طبيعي صلب ومتين للغاية. عند تركيبه وصيانته بشكل صحيح، يمكن للرخام أن يدوم لعقود طويلة، بل لقرون. الرخام مقاوم للحرارة بشكل طبيعي، مما يجعله خيارًا ممتازًا للمطابخ.</p>

        <h2>أنواع الرخام الطبيعي الشائعة</h2>
        <p><strong>رخام كرارا الإيطالي</strong> هو الأكثر شهرة، يتميز بلونه الأبيض النقي مع عروق رمادية رقيقة. <strong>رخام كالاكاتا</strong> أكثر ندرة وغلاءً بعروق ذهبية ورمادية جريئة. <strong>رخام إمبرادور</strong> الإسباني بظلال بنية غنية مع عروق بيضاء وذهبية. <strong>رخام نيرو ماركينا</strong> الإسباني بلونه الأسود مع عروق بيضاء رفيعة.</p>

        <h2>تطبيقات الرخام في المنزل</h2>
        <p>في <strong>الأرضيات</strong>: الرخام يخلق مظهرًا فخمًا وواسعًا، خاصة في الصالات والمداخل. في <strong>المطابخ</strong>: يُستخدم كأسطح عمل وخلفية جدارية. في <strong>الحمامات</strong>: الرخام هو الخيار الكلاسيكي للفخامة - أرضيات وجدران وأسطح أحواض رخامية تخلق تجربة سبا فاخرة.</p>

        <h2>العناية بالرخام وصيانته</h2>
        <p>للتنظيف اليومي، استخدم فقط الماء الدافئ وصابون معتدل. <strong>تجنب تمامًا</strong> المنظفات الحمضية مثل الخل وعصير الليمون. امسح الانسكابات فورًا، خاصة السوائل الحمضية. طبّق مادة ختم مقاومة للبقع عند التركيب وأعد تطبيقها كل عام أو عامين.</p>

        <h2>الاستثمار في الرخام: هل يستحق؟</h2>
        <p>الرخام الطبيعي يدوم لعقود طويلة، مما يعني أنك لن تحتاج لاستبداله. كما يزيد بشكل كبير من قيمة العقار، والمنازل ذات التشطيبات الرخامية تُباع بأسعار أعلى وبشكل أسرع. الرخام أيضًا مادة مستدامة وصديقة للبيئة.</p>

        <div class="article-summary">
          <h3>ملخص فوائد الرخام الطبيعي:</h3>
          <ul class="feature-list">
            ${['جمال طبيعي فريد لا يتكرر','متانة عالية وعمر يمتد لعقود','مقاومة طبيعية للحرارة','تنوع كبير في الأنواع والألوان','يزيد من قيمة العقار بشكل ملحوظ','مادة طبيعية مستدامة وصديقة للبيئة','يمكن تجديده وتلميعه عدة مرات','استثمار طويل الأمد يستحق التكلفة'].map(t=>`<li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="#C9A84C" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg><span>${t}</span></li>`).join('')}
          </ul>
        </div>

        <p style="margin-top:2rem;">إذا كنت تفكر في استخدام الرخام الطبيعي في منزلك، فريق مؤسسة الإتقان مستعد لمساعدتك في اختيار النوع المناسب والتركيب الاحترافي الذي يضمن لك الاستفادة الكاملة من جمال ومتانة هذه المادة الطبيعية الرائعة.</p>
      `
    }
  };

  if (blogList && articleView) {
    document.querySelectorAll('[data-article]').forEach(function (card) {
      card.addEventListener('click', function () {
        const id = parseInt(card.getAttribute('data-article'));
        if (!articles[id]) return;
        const a = articles[id];
        if (articleTitle) articleTitle.textContent = a.title;
        if (articleDate)  articleDate.textContent  = a.date;
        if (articleBody)  articleBody.innerHTML     = a.html;
        blogList.classList.add('hidden');
        articleView.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });

    const backBtn = document.getElementById('back-to-blog');
    if (backBtn) {
      backBtn.addEventListener('click', function () {
        articleView.classList.remove('active');
        blogList.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  /* ---- Image Error Fallback ---- */
  document.querySelectorAll('img[data-alt]').forEach(function (img) {
    img.addEventListener('error', function () {
      img.style.background = '#dde3f0';
    });
  });

});
