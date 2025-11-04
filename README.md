# MyPortfolio

Một trang portfolio cá nhân được viết bằng TypeScript và CSS, dùng để giới thiệu thông tin, kỹ năng, dự án và cách liên hệ. Mục tiêu của dự án là cung cấp một trang cá nhân nhanh, dễ tuỳ chỉnh và dễ triển khai.

## Mục lục
- [Tính năng](#tính-năng)
- [Công nghệ](#công-nghệ)
- [Cài đặt & Chạy tại máy local](#cài-đặt--chạy-tại-máy-local)
- [Xây dựng & Triển khai](#xây-dựng--triển-khai)
- [Tùy chỉnh nội dung](#tùy-chỉnh-nội-dung)
- [Hướng dẫn đóng góp](#hướng-dẫn-đóng-góp)
- [Giấy phép](#giấy-phép)
- [Liên hệ](#liên-hệ)

## Tính năng
- Trang giới thiệu bản thân (Giới thiệu, kỹ năng, kinh nghiệm).
- Danh sách dự án kèm mô tả và liên kết demo / mã nguồn.
- Giao diện responsive (thích ứng trên mobile và desktop).
- Tối ưu cơ bản về tốc độ và trải nghiệm người dùng.
- Dễ tùy chỉnh (màu sắc, nội dung, cấu trúc).

> Ghi chú: README này là mô tả tổng quát — nếu repo sử dụng framework cụ thể (ví dụ: React, Next.js, Vite,...), các lệnh cài đặt/chạy có thể khác. Hãy điều chỉnh phần "Cài đặt" theo cấu hình thực tế của dự án.

## Công nghệ
- TypeScript (khoảng 77.5% mã nguồn)
- CSS (khoảng 22.4%)
- HTML (một phần nhỏ)
- (Tuỳ chọn) Các thư viện / framework frontend khác nếu repo có sử dụng (React / Vite / Next.js / Tailwind, ...)

## Cài đặt & Chạy tại máy local

1. Clone repo:
```bash
git clone https://github.com/Huy160391/MyPortfolio.git
cd MyPortfolio
```

2. Cài phụ thuộc:
```bash
# Dùng npm
npm install

# Hoặc dùng yarn
yarn install
```

3. Chạy chế độ phát triển:
```bash
npm run dev
# hoặc
yarn dev
```
Mở trình duyệt tại http://localhost:3000 (hoặc cổng mà dự án cấu hình) để xem.

4. Xây dựng production:
```bash
npm run build
# hoặc
yarn build
```

5. Chạy bản build (nếu cần):
```bash
npm start
# hoặc
yarn start
```

(Thay đổi lệnh tuỳ theo script có trong package.json của dự án.)

## Xây dựng & Triển khai
Bạn có thể triển khai trang này lên:
- GitHub Pages
- Vercel
- Netlify
- Firebase Hosting
- Heroku (nếu cần phục vụ server)

Các bước chung:
1. Chạy `npm run build`.
2. Triển khai thư mục `dist` hoặc `build` (tuỳ cấu hình) lên dịch vụ hosting bạn chọn.
3. Nếu dùng Vercel/Netlify, thường chỉ cần kết nối repo và chọn lệnh build cùng thư mục đầu ra.

## Tùy chỉnh nội dung
- Sửa thông tin cá nhân, mô tả, danh sách dự án trong file cấu hình hoặc component tương ứng (ví dụ: `src/data`, `src/config`, hoặc file JSON/TS chứa dữ liệu).
- Thay đổi màu sắc và kiểu bằng cách sửa CSS hoặc biến/định nghĩa theme.
- Thêm/loại bỏ section trong cấu trúc HTML/JSX/TSX tương ứng.

## Hướng dẫn đóng góp
1. Fork repository.
2. Tạo branch tính năng: `git checkout -b feat/my-change`.
3. Commit thay đổi: `git commit -m "Mô tả thay đổi"`.
4. Push lên fork và tạo Pull Request.
5. Mô tả rõ thay đổi trong PR để duyệt nhanh.

Vui lòng giữ code sạch, đặt tên rõ ràng và viết commit ngắn gọn, có ý nghĩa.

## Giấy phép
Bạn có thể thêm tệp LICENSE (ví dụ MIT) nếu muốn cấp phép mở. Nếu chưa có tệp giấy phép, mặc định không có giấy phép rõ ràng — hãy thêm LICENSE phù hợp trước khi chia sẻ mã nguồn công khai rộng rãi.

## Liên hệ
- GitHub: https://github.com/Huy160391
- Email: (thêm email của bạn nếu muốn hiển thị)

Cần tôi chỉnh sửa README theo phong cách, ngôn ngữ (Tiếng Anh) hoặc bổ sung nội dung kỹ thuật (ví dụ: hướng dẫn deploy cụ thể cho Vercel/Netlify, script package.json hiện có)? Tôi có thể cập nhật README cho phù hợp với cấu trúc thực tế trong repo của bạn.
