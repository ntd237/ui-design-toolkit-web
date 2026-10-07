# UI Design Toolkit — Landing Page

Trang giới thiệu (landing page) cho **UI Design Toolkit** — bộ 6 skills ZCode chuyên thiết kế giao diện UI/UX đa nền tảng (Web App, Mobile App, Desktop App, Game UI). Trang được viết bằng **HTML/CSS/JS thuần**, tự áp dụng đúng triết lý thiết kế của chính bộ toolkit mà nó giới thiệu.

## Mục lục

- [Giới thiệu](#giới-thiệu)
- [Tính năng](#tính-năng)
- [Cài đặt](#cài-đặt)
- [Sử dụng](#sử-dụng)
- [Cấu trúc dự án](#cấu-trúc-dự-án)
- [License](#license)
- [Liên hệ](#liên-hệ)

## Giới thiệu

UI Design Toolkit là bộ skill đi theo pipeline cố định 6 bước:

1. **00-ui-orchestrator** — phân tích ý định & nền tảng, điều phối toàn bộ quy trình
2. **01-ux-flow-architecture** — kiến trúc luồng UX, sitemap, error/recovery path
3. **02-ui-design-system** — design token (bảng màu 60-30-10, typography tiếng Việt, 6 trạng thái component)
4. **03-ui-platform-responsive** — layout responsive 4 breakpoint + recipe theo nền tảng
5. **04-ui-ux-qa-review** — kiểm toán WCAG 2.2 AA, heuristic Nielsen, stress test tiếng Việt
6. **05-ui-example-generator** — sinh giao diện mẫu vanilla HTML/CSS/JS từ đặc tả

Định nghĩa đầy đủ của từng skill nằm trong thư mục [`.agents/skills/`](.agents/skills/).

Trang landing này **không dùng framework, không build step, không CDN** — mọi thứ chạy trực tiếp khi mở file HTML trong trình duyệt.

## Tính năng

- **Hero** giới thiệu giá trị cốt lõi kèm card demo design token (palette 60-30-10, line-height, spacing base-8)
- **Pipeline 6 bước** trình bày quy trình hoạt động của toolkit
- **6 thẻ skill** với mô tả tiếng Việt + trích nguyên văn `description` từ từng `SKILL.md`
- **5 nền tảng được hỗ trợ**: Web App, Mobile App, Desktop App, Game Desktop, Game Mobile
- **Dark mode** — toggle sáng/tối, ghi nhớ lựa chọn qua `localStorage`, tôn trọng `prefers-color-scheme`
- **Responsive đủ 4 breakpoint**: Mobile (<768px), Tablet (768–1024px), PC (>1024px), Ultrawide (>1920px)
- **Accessibility đạt WCAG 2.2 AA**: tương phản ≥ 4.5:1 ở cả 2 theme, focus ring 2px, skip link, `aria-expanded`/`aria-pressed`, mục tiêu chạm ≥ 44px
- **Typography tiếng Việt**: font hệ thống hỗ trợ đầy đủ Unicode, line-height 1.4–1.6 chống clipping dấu
- Tương tác nhẹ bằng JS thuần: hamburger menu, scroll reveal (IntersectionObserver), tôn trọng `prefers-reduced-motion`

## Cài đặt

Không cần cài đặt gì — dự án là trang tĩnh thuần HTML/CSS/JS.

```bash
# 1. Clone repository
git clone https://github.com/ntd237/ui-design-toolkit-web.git
cd ui-design-toolkit-web

# 2. Mở trực tiếp bằng trình duyệt
#    (nhấp đúp vào index.html, hoặc:)
start index.html        # Windows
open index.html         # macOS
xdg-open index.html     # Linux
```

Không có bước cài dependency, không có dev server, không có build.

## Sử dụng

Mở `index.html` bằng bất kỳ trình duyệt hiện đại nào (Chrome, Edge, Firefox, Safari).

Các tương tác có sẵn trên trang:

| Tương tác | Cách dùng |
|-----------|-----------|
| Chuyển sáng/tối | Nút mặt trời/mặt trăng ở góc phải header |
| Menu mobile (<768px) | Nút hamburger, đóng bằng `Escape` hoặc click ngoài |
| Điều hướng nhanh | Các link trong header: Cách hoạt động · 6 skills · Nền tảng |

Tuỳ chọn: chỉnh theme mặc định bằng cách sửa biến `--color-*` trong khối `:root` và `[data-theme="dark"]` của `style.css` — toàn bộ màu sắc đều là token, không có hex rải rác trong markup.

## Cấu trúc dự án

```
ui-design-toolkit-web/
├── index.html          # Trang chính (hero, pipeline, skills, platforms, footer)
├── style.css           # Design tokens + toàn bộ style (2 theme, 4 breakpoint)
├── script.js           # Dark mode, hamburger menu, scroll reveal
└── .agents/
    └── skills/         # Định nghĩa 6 skills của bộ toolkit (SKILL.md)
```

## License

Dự án được phát hành công khai dưới giấy phép [MIT](LICENSE) — mọi người đều được phép sử dụng, sao chép, sửa đổi và phân phối, kể cả trong sản phẩm thương mại, với điều kiện giữ nguyên bản quyền trong file LICENSE.

## Liên hệ

- **Author**: ntd237
- **Email**: ntd237.work@gmail.com
- **GitHub**: https://github.com/ntd237
