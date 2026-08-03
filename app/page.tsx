import { getDb } from "../db";
import { products as productsTable, supplyRoutes as routesTable, processSteps as stepsTable, faqs as faqsTable } from "../db/schema";
import { asc } from "drizzle-orm";

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function BrandMark() {
  return (
    <span className="brand-mark" aria-label="Гидропоставка">
      <span className="brand-piston" aria-hidden="true">
        <i />
      </span>
      <span>
        ГИДРО<span>//</span>ПОСТАВКА
      </span>
    </span>
  );
}

function CylinderVisual() {
  return (
    <div className="cylinder-stage" aria-label="Схематичное изображение гидроцилиндра">
      <div className="visual-label label-top">
        <span>РАБОЧЕЕ ДАВЛЕНИЕ</span>
        <b>под задачу</b>
      </div>
      <div className="visual-label label-bottom">
        <span>ИСПОЛНЕНИЕ</span>
        <b>серийное / special</b>
      </div>
      <div className="measure-line measure-a">
        <i />
        <span>L</span>
      </div>
      <div className="measure-line measure-b">
        <i />
        <span>ØD</span>
      </div>
      <div className="cylinder-shadow" />
      <div className="cylinder-assembly">
        <div className="rear-eye">
          <i />
        </div>
        <div className="barrel">
          <div className="barrel-band band-one" />
          <div className="barrel-band band-two" />
          <div className="brand-etch">HP / 240</div>
        </div>
        <div className="gland" />
        <div className="rod" />
        <div className="front-eye">
          <i />
        </div>
      </div>
      <div className="pressure-port port-a" />
      <div className="pressure-port port-b" />
      <div className="visual-chip chip-one">точный подбор</div>
      <div className="visual-chip chip-two">сильная цена</div>
    </div>
  );
}

export default async function Home() {
  let products = [];
  let supplyRoutes = [];
  let process = [];
  let faqs = [];
  
  try {
    const db = getDb();
    products = await db.select().from(productsTable).orderBy(asc(productsTable.order));
    
    if (products.length === 0) {
      const { seed } = await import("../db/seed");
      await seed();
      products = await db.select().from(productsTable).orderBy(asc(productsTable.order));
    }
    
    supplyRoutes = await db.select().from(routesTable).orderBy(asc(routesTable.order));
    process = await db.select().from(stepsTable).orderBy(asc(stepsTable.order));
    faqs = await db.select().from(faqsTable).orderBy(asc(faqsTable.order));
  } catch (error) {
    console.error("Database connection failed or tables not created yet.", error);
  }

  return (
    <main>
      <header className="site-header">
        <a className="logo" href="#top">
          <BrandMark />
        </a>
        <nav className="desktop-nav" aria-label="Основная навигация">
          <a href="#catalog">Оборудование</a>
          <a href="#supply">Поставка</a>
          <a href="#process">Как работаем</a>
          <a href="#faq">Вопросы</a>
        </nav>
        <a className="header-cta" href="#request">
          Запросить расчёт <ArrowIcon />
        </a>
        <details className="mobile-menu">
          <summary aria-label="Открыть меню">
            <span />
            <span />
          </summary>
          <nav aria-label="Мобильная навигация">
            <a href="#catalog">Оборудование</a>
            <a href="#supply">Поставка</a>
            <a href="#process">Как работаем</a>
            <a href="#faq">Вопросы</a>
            <a href="#request">Запросить расчёт</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="pulse" />
            Поставка по Москве, МО и всей России
          </div>
          <h1>
            Гидравлика,
            <br />
            которая <em>подходит.</em>
          </h1>
          <p className="hero-lead">
            Гидроцилиндры на специальных условиях, европейские оригиналы и
            проверенное оборудование из Китая — с инженерным подбором под вашу
            технику.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#request">
              Получить предложение <ArrowIcon />
            </a>
            <a className="text-link" href="#catalog">
              Смотреть ассортимент <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-proof">
            <div>
              <b>01</b>
              <span>Подбор по фото, маркировке или чертежу</span>
            </div>
            <div>
              <b>02</b>
              <span>Несколько вариантов по цене и сроку</span>
            </div>
            <div>
              <b>03</b>
              <span>Доставка по России</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <CylinderVisual />
        </div>
        <div className="hero-side-note">
          <span>BY</span>
          <i />
          <span>RU</span>
          <small>прямой маршрут поставки</small>
        </div>
      </section>

      <section className="ticker" aria-label="Основные категории">
        <div className="ticker-track">
          <span>ГИДРОЦИЛИНДРЫ</span>
          <i>✦</i>
          <span>НАСОСЫ</span>
          <i>✦</i>
          <span>ГИДРОМОТОРЫ</span>
          <i>✦</i>
          <span>РАСПРЕДЕЛИТЕЛИ</span>
          <i>✦</i>
          <span>РВД</span>
          <i>✦</i>
          <span>КОМПЛЕКТУЮЩИЕ</span>
        </div>
      </section>

      <section className="advantage-section section-shell">
        <div className="section-kicker">КЛЮЧЕВОЕ ПРЕДЛОЖЕНИЕ / 01</div>
        <div className="advantage-grid">
          <div className="advantage-title">
            <span className="outline-number">01</span>
            <h2>
              Сильные условия
              <br />
              на <span>гидроцилиндры</span>
            </h2>
          </div>
          <div className="advantage-copy">
            <p>
              Не ограничиваемся одним заводом или одной линейкой. Подбираем
              решение под реальные параметры техники и бюджет проекта — от
              серийной позиции до изготовления по образцу.
            </p>
            <div className="advantage-list">
              <div>
                <b>Под задачу</b>
                <span>
                  Ход, усилие, крепления, давление и условия эксплуатации
                </span>
              </div>
              <div>
                <b>Без переплаты</b>
                <span>
                  Сравниваем несколько вариантов и объясняем разницу
                </span>
              </div>
              <div>
                <b>С контролем качества</b>
                <span>
                  Согласуем исполнение до размещения заказа
                </span>
              </div>
            </div>
            <a className="inline-cta" href="#request">
              Рассчитать гидроцилиндр <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="catalog-section section-shell" id="catalog">
        <div className="section-heading">
          <div>
            <div className="section-kicker">ОБОРУДОВАНИЕ / 02</div>
            <h2>
              Закрываем гидравлическую
              <br />
              систему <span>целиком</span>
            </h2>
          </div>
          <p>
            Подберём отдельную позицию или соберём комплект для ремонта,
            модернизации и серийной комплектации.
          </p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article
              className={`product-card${product.accent ? " product-card-accent" : ""}`}
              key={product.number}
            >
              <div className="product-card-top">
                <span>{product.number}</span>
                <i aria-hidden="true">↗</i>
              </div>
              <div className={`product-symbol symbol-${product.number}`}>
                <span />
                <i />
              </div>
              <h3>{product.title}</h3>
              <p>{product.text}</p>
              <div className="tag-row">
                {product.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="supply-section" id="supply">
        <div className="section-shell">
          <div className="section-heading supply-heading">
            <div>
              <div className="section-kicker section-kicker-light">
                МАРШРУТЫ ПОСТАВКИ / 03
              </div>
              <h2>
                Не привязаны
                <br />
                к <span>одному рынку</span>
              </h2>
            </div>
            <p>
              Выбираем источник поставки под критичность узла, требуемый ресурс,
              бюджет и допустимый срок.
            </p>
          </div>
          <div className="routes">
            {supplyRoutes.map((route, index) => (
              <article className="route-card" key={route.code}>
                <div className="route-index">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <b>{route.code}</b>
                </div>
                <div className="route-copy">
                  <span className="route-label">{route.label}</span>
                  <h3>{route.title}</h3>
                  <p>{route.text}</p>
                  <ul>
                    {route.points.map((point) => (
                      <li key={point}>
                        <i aria-hidden="true">+</i>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="compatibility-section section-shell">
        <div className="compatibility-card">
          <div className="compatibility-grid" aria-hidden="true" />
          <div className="compatibility-copy">
            <div className="section-kicker">ТОЧНЫЙ ПОДБОР / 04</div>
            <h2>
              Аналог «примерно такой же»
              <br />
              может стоить <span>дороже оригинала</span>
            </h2>
            <p>
              Европейская гидравлика уже установлена на большом парке техники в
              России. Замена только по внешнему сходству часто приводит к
              перегреву, потере мощности или повторному простою.
            </p>
          </div>
          <div className="parameter-board">
            <div className="parameter-head">
              <span>ПРОВЕРКА СОВМЕСТИМОСТИ</span>
              <b>06 / 06</b>
            </div>
            {[
              ["P", "рабочее давление"],
              ["Q", "расход и объём"],
              ["A/B", "присоединительные порты"],
              ["CTRL", "тип управления"],
              ["DIM", "габариты и крепления"],
              ["ENV", "температура и среда"],
            ].map(([code, label]) => (
              <div className="parameter-row" key={code}>
                <b>{code}</b>
                <span>{label}</span>
                <i aria-hidden="true">✓</i>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section section-shell" id="process">
        <div className="section-heading">
          <div>
            <div className="section-kicker">ПРОЦЕСС / 05</div>
            <h2>
              От шильдика
              <br />
              до <span>поставки</span>
            </h2>
          </div>
          <p>
            Техническую часть берём на себя. Вам не нужно заранее знать точный
            артикул.
          </p>
        </div>
        <div className="process-track">
          {process.map((item) => (
            <article key={item.step}>
              <div className="process-dot">
                <i />
                <span>{item.step}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className="delivery-strip">
          <div className="delivery-pin">
            <i />
          </div>
          <div>
            <b>МОСКВА И МОСКОВСКАЯ ОБЛАСТЬ</b>
            <span>приоритетное направление</span>
          </div>
          <div className="delivery-line" />
          <div>
            <b>ВСЯ РОССИЯ</b>
            <span>доставка в регионы</span>
          </div>
          <strong>RU</strong>
        </div>
      </section>

      <section className="request-section" id="request">
        <div className="section-shell request-grid">
          <div className="request-copy">
            <div className="section-kicker section-kicker-light">
              ЗАПРОС НА РАСЧЁТ / 06
            </div>
            <h2>
              Пришлите фото.
              <br />
              <span>Остальное уточним.</span>
            </h2>
            <p>
              Для первого расчёта достаточно шильдика, общего вида оборудования
              и короткого описания задачи.
            </p>
            <div className="request-prompt">
              <span>ЧТО ПРИЛОЖИТЬ</span>
              <ul>
                <li>фото маркировки или изделия</li>
                <li>количество</li>
                <li>город доставки</li>
                <li>желаемый срок</li>
              </ul>
            </div>
          </div>
          <form className="request-form" action="#request-ready">
            <div className="form-head">
              <b>Запросить предложение</b>
              <span>Ответим с вариантами поставки</span>
            </div>
            <label>
              <span>Что нужно поставить?</span>
              <textarea
                name="request"
                placeholder="Например: гидроцилиндр подъёма стрелы, есть фото и размеры"
                required
              />
            </label>
            <div className="form-row">
              <label>
                <span>Имя</span>
                <input name="name" type="text" placeholder="Алексей" required />
              </label>
              <label>
                <span>Телефон или email</span>
                <input
                  name="contact"
                  type="text"
                  placeholder="+7 900 000-00-00"
                  required
                />
              </label>
            </div>
            <label className="file-label">
              <input name="files" type="file" multiple />
              <span className="file-icon">+</span>
              <span>
                <b>Добавить фото или чертёж</b>
                <small>PDF, JPG, PNG</small>
              </span>
            </label>
            <button className="button button-primary form-button" type="submit">
              Отправить запрос <ArrowIcon />
            </button>
            <p className="form-note">
              Отправляя запрос, вы соглашаетесь на обработку контактных данных.
            </p>
            <div className="form-demo-note">
              Канал получения заявок подключается после добавления контактов
              компании.
            </div>
          </form>
        </div>
      </section>

      <section className="faq-section section-shell" id="faq">
        <div className="faq-intro">
          <div className="section-kicker">ВОПРОСЫ / 07</div>
          <h2>
            Коротко
            <br />
            о <span>важном</span>
          </h2>
          <p>
            Если вашего вопроса нет в списке — опишите задачу в свободной форме.
          </p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.question}>
              <summary>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <b>{faq.question}</b>
                <i aria-hidden="true">+</i>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer>
        <div className="footer-main section-shell">
          <div className="footer-brand">
            <BrandMark />
            <p>
              Гидравлическое оборудование с инженерным подбором и поставкой в
              Россию.
            </p>
          </div>
          <div className="footer-nav">
            <span>НАВИГАЦИЯ</span>
            <a href="#catalog">Оборудование</a>
            <a href="#supply">Поставка</a>
            <a href="#process">Как работаем</a>
            <a href="#faq">Вопросы</a>
          </div>
          <div className="footer-contact">
            <span>НАЧАТЬ ПРОЕКТ</span>
            <a href="#request">
              Запросить расчёт <ArrowIcon />
            </a>
            <p>Москва · Московская область · Россия</p>
          </div>
        </div>
        <div className="footer-bottom section-shell">
          <span>© 2026 ГИДРО//ПОСТАВКА</span>
          <span>БЕЛАРУСЬ → РОССИЯ</span>
          <a href="#top">НАВЕРХ ↑</a>
        </div>
      </footer>
    </main>
  );
}
