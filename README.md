# Merge Sorted Arrays (TypeScript Project with Unit Test)

📝 **Created by:** Sareef Masamaeng

## 🎯 วัตถุประสงค์

โปรเจ็กต์นี้เป็นการสาธิตการแก้ปัญหา **Merge Sorted Arrays** ด้วยภาษา TypeScript พร้อมด้วย comprehensive unit testing โดยใช้ Vitest framework

## 📁 โครงสร้างโปรเจ็กต์

```bash
merge-sorted-arrays-ts/
├── src/
│   └── merge.ts          # ฟังก์ชัน merge หลัก
├── test/
│   └── merge.test.ts     # unit tests ใช้ Vitest
├── package.json          # dependencies และ test script
├── tsconfig.json         # การตั้งค่า TypeScript
└── README.md             # เอกสารโปรเจ็กต์
```

## ⚙️ package.json

```json
{
  "name": "merge-sorted-arrays-ts",
  "version": "1.0.0",
  "scripts": {
    "test": "vitest"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "vitest": "^0.34.0"
  }
}
```

## ⚙️ tsconfig.json

```json
{
	"compilerOptions": {
		"target": "ESNext",
		"module": "ESNext",
		"moduleResolution": "Node",
		"strict": true,
		"esModuleInterop": true,
		"forceConsistentCasingInFileNames": true,
		"skipLibCheck": true,
		"outDir": "./dist"
	},
	"include": ["src", "test"]
}
```

-   **typescript** – คอมไพล์ไฟล์ `.ts`
-   **vitest** – เฟรมเวิร์กสำหรับทดสอบที่เร็วและเบา

## 🚀 เริ่มต้นใช้งาน

### 1. **ติดตั้ง dependencies**

```bash
npm install
```

### 2. **รัน unit tests**

```bash
npx vitest run
```

### 3. **ผลลัพธ์ unit tests**


💡 **Note:** โปรเจ็กต์นี้เป็นแบบทดสอบการแก้ปัญหา **Merge Sorted Arrays** ด้วยภาษา TypeScript