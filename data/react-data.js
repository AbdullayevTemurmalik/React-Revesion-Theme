export const reactData = [
  {
    id: 1,
    title: "React nima? & SPA",
    category: "Asoslar",
    desc: "React - bu JS kutubxonasi. U SPA (Single Page Application) yaratish uchun ishlatiladi.",
    reja: "Component based, Virtual DOM vs Real DOM.",
    vazifa: "React fragment (<> </>) ishlatib ko'ring.",
    code: "// Virtual DOM - bu Real DOMning nusxasi\nconst App = () => (\n  <>\n    <h1>Salom</h1>\n    <p>SPA dastur</p>\n  </>\n);",
    result: "<h1>Salom</h1><p>SPA dastur</p>",
  },
  {
    id: 2,
    title: "Props (Properties)",
    category: "Asoslar",
    desc: "Ota komponentdagi ma'lumotni farzand komponentga yuborish uchun ishlatiladigan obyekt.",
    reja: "Parent-to-Child data transfer.",
    vazifa: "Props orqali ismni yuboring.",
    code: "const Child = (props) => <h2>{props.name}</h2>;\n<Child name='TemurMalik' />",
    result: "<h2>TemurMalik</h2>",
  },
  {
    id: 3,
    title: "useState Hook",
    category: "Hooks",
    desc: "Komponent holatlarini (state) saqlash va boshqarish uchun ishlatiladi.",
    reja: "State va Setter funksiyasi.",
    vazifa: "Sanagich yasang.",
    code: "const [count, setCount] = useState(0);\n<button onClick={() => setCount(count + 1)}>Oshirish</button>",
    result: "<button>Oshirish (0)</button>",
  },
  {
    id: 4,
    title: "Life-cycle methods",
    category: "Hooks",
    desc: "Komponentning hayot davri: 1. Mounting (ishga tushish), 2. Updating (o'zgarish), 3. Unmounting (o'chish).",
    reja: "Mounting, Updating va Unmounting bosqichlari.",
    vazifa: "Har bir bosqichni tushuntiring.",
    code: "// 1. Mounting: Brauzerda birinchi chiqishi\n// 2. Updating: State yoki Props o'zgarishi\n// 3. Unmounting: Komponent o'chirilishi",
    result: "<i style='color:#0ea5e9;'>Komponent hayotiy bosqichlari</i>",
  },
  {
    id: 5,
    title: "useEffect() - Case 1",
    category: "Hooks",
    desc: "Side-effectlarni boshqarish: API, DOM rendering, Timeout.",
    reja: "Har renderda ishlash.",
    vazifa: "Dependency bo'lmagan holatni yozing.",
    code: "useEffect(() => {\n  console.log('Har renderda ishlayman');\n});",
    result: "<code>Log: Har renderda ishlayman...</code>",
  },
  {
    id: 6,
    title: "useEffect() - Case 2 (Mounting)",
    category: "Hooks",
    desc: "Faqat birinchi marta (Mounting) ishlash holati.",
    reja: "Bo'sh Dependency Array [].",
    vazifa: "Faqat bir marta ishlaydigan effekt yozing.",
    code: "useEffect(() => {\n  console.log('Faqat birinchi renderda');\n}, []);",
    result: "<b style='color:green;'>✓ Mounting bajarildi</b>",
  },
  {
    id: 7,
    title: "useEffect() - Case 3 (Updating)",
    category: "Hooks",
    desc: "Berilgan qiymat o'zgarganda ishlovchi holat.",
    reja: "Dependency Array [count].",
    vazifa: "Count o'zgarganda ishlaydigan effekt yozing.",
    code: "useEffect(() => {\n  console.log('Count o'zgardi');\n}, [count]);",
    result: "<b style='color:orange;'>! Qiymat o'zgardi</b>",
  },
  {
    id: 8,
    title: "React-Router-Dom",
    category: "Library",
    desc: "Websaytda routelarni boshqarish va ko'p sahifali qilish uchun.",
    reja: "BrowserRouter, Routes, Route, Link, NavLink.",
    vazifa: "Navigatsiya menyusini yarating.",
    code: "<BrowserRouter>\n  <Routes>\n    <Route path='/' element={<Home />} />\n  </Routes>\n</BrowserRouter>",
    result: "<nav><a href='#'>Home</a> | <a href='#'>About</a></nav>",
  },
  {
    id: 9,
    title: "useNavigate() & useParams()",
    category: "Hooks",
    desc: "useNavigate - yo'naltirish uchun, useParams - dinamik ID olish uchun.",
    reja: "Dinamik routing.",
    vazifa: "URL dan ID ni oling.",
    code: "const { id } = useParams();\nconst navigate = useNavigate();\n<button onClick={() => navigate('/')}>Home</button>",
    result: "<code>Param ID: 123</code>",
  },
  {
    id: 10,
    title: "Re-render & React.memo()",
    category: "Optimization",
    desc: "Komponent re-render bo'lishi: 1. Props o'zgarganda, 2. State o'zgarganda, 3. Force Update (Ota render bo'lganda).",
    reja: "Force update oldini olish.",
    vazifa: "React.memo dan foydalaning.",
    code: "const Child = React.memo(({ data }) => {\n  return <div>{data}</div>;\n});",
    result: "<span style='color:blue;'>Optimallashgan komponent</span>",
  },
  {
    id: 11,
    title: "useMemo() Hook",
    category: "Optimization",
    desc: "Funksiyani keraksiz qayta hisoblanishidan himoya qilish.",
    reja: "Keshlashtirish (Memoization).",
    vazifa: "Og'ir hisob-kitobni useMemo ichiga oling.",
    code: "const result = useMemo(() => {\n  return heavyCalculation(a, b);\n}, [a, b]);",
    result: "<b>Natija keshdan olindi</b>",
  },
  {
    id: 12,
    title: "Axios vs Fetch",
    category: "Library",
    desc: "Axios kutubxona, fetch esa brauzer funksiyasi. Axios avtomatik JSON qiladi.",
    reja: "API so'rovlar farqi.",
    vazifa: "Axios orqali GET so'rovi yuboring.",
    code: "axios.get(url).then(res => console.log(res.data));",
    result: "<code>Status: 200 OK</code>",
  },
  {
    id: 13,
    title: "Redux Toolkit - Global State",
    category: "Redux",
    desc: "Store - omborxona, Action - bajariladigan ish, Reducer - asosiy funksiya.",
    reja: "useDispatch (yuborish) va useSelector (olish).",
    vazifa: "Global staseni boshqaring.",
    code: "const user = useSelector(state => state.user);\nconst dispatch = useDispatch();",
    result:
      "<div style='background:#764abc; color:white; padding:5px;'>Redux Store Active</div>",
  },
  {
    id: 14,
    title: "Library vs Framework",
    category: "Asoslar",
    desc: "Library (React) - kerakli packagelarni yuklash kerak. Framework (Next.js) - hamma narsa ichida.",
    reja: "Arxitektura farqlari.",
    vazifa: "Farqlarni tushuntiring.",
    code: "// Library: React, Axios\n// Framework: Next.js, Angular",
    result: "<b>React = Library 📚</b>",
  },
  {
    id: 15,
    title: "GitHub Teamwork & Git Commands",
    category: "Git",
    desc: "Guruh bo'lib ishlashda versiya nazorati: clone, branch, push, pull va merge jarayonlari.",
    reja: "Git buyruqlari: init, clone, add, commit, push, pull, branch, checkout, merge, remote.",
    vazifa:
      "Yangi branch ochib, o'zgarishlarni asosiy (main) branchga birlashtiring.",
    code: `// 1. Repozitoriyani nusxalash
git clone <url>

// 2. Yangi shoxcha (branch) ochish va unga o'tish
git checkout -b feature-nomi

// 3. O'zgarishlarni saqlash va izoh qoldirish
git add .
git commit -m "loyihaga yangi qism qo'shildi"

// 4. O'zgarishlarni GitHub serveriga jo'natish
git push origin feature-nomi

// 5. Serverdagi yangilanishlarni qabul qilish
git pull origin main

// 6. Branchlarni birlashtirish (Merge)
git checkout main
git merge feature-nomi

// 7. Masofaviy manzilni tekshirish
git remote -v`,
    result:
      "<div style='background:#f1f5f9; padding:10px; border-radius:8px;'><p style='color:#1e293b; font-size:13px;'>✅ <b>Muvaffaqiyatli:</b> Branch yaratildi va o'zgarishlar GitHub'ga yuborildi.</p></div>",
  },
  {
    id: 16,
    title: "Mashhur Kutubxonalar",
    category: "Library",
    desc: "React ekotizimi: icons, toastify, swiper, AOS, countup, json-server.",
    reja: "Tayyor paketlardan foydalanish.",
    vazifa: "Toastify o'rnating.",
    code: "import { toast } from 'react-toastify';\ntoast.success('Bajarildi!');",
    result:
      "<div style='background:white; border:1px solid #ddd; padding:10px;'>🚀 Toast: Bajarildi!</div>",
  },
];
