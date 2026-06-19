
# 📝 Görev Defteri — Todo App
 
> ReactJS + TypeScript + Bootstrap 5 ile geliştirilmiş, **localStorage** tabanlı yapılacaklar listesi uygulaması.  
> Web Geliştirme Javascript Proje Ödevi kapsamında hazırlanmıştır.
 
🔗 **Canlı Demo:** [https://strong-dragon-6cdbbc.netlify.app](https://strong-dragon-6cdbbc.netlify.app)
 
---
## 🚀 Özellikler
 
- ✅ **Görev Ekleme** — Başlık, açıklama ve öncelik (Düşük / Orta / Yüksek) ile yeni görev ekle
- 📋 **Görev Listeleme** — Tüm görevleri listele; Tümü / Aktif / Tamamlanan filtresi ile görüntüle
- ✏️ **Görev Güncelleme** — Mevcut görevi modal üzerinden düzenle; tamamlandı olarak işaretle
- 🗑️ **Görev Silme** — Onay adımıyla güvenli silme
- 💾 **LocalStorage** — Sayfa yenilense bile veriler kaybolmaz
- 📊 **İlerleme Halkası** — Tamamlanma oranını anlık gösterir
---
## 🛠️ Kullanılan Teknolojiler
 
| Teknoloji | Açıklama |
|---|---|
| [React 19](https://react.dev) | UI kütüphanesi |
| [TypeScript](https://www.typescriptlang.org) | Tip güvenliği |
| [Bootstrap 5](https://getbootstrap.com) | CSS framework |
| [Vite](https://vitejs.dev) | Build aracı |
| LocalStorage API | Tarayıcı tabanlı veri saklama |
 
---
## 📁 Proje Yapısı
 
```
src/
├── components/
│   ├── TaskForm.tsx        # Görev ekleme formu
│   ├── TaskList.tsx        # Görev listesi
│   ├── TaskItem.tsx        # Tek görev satırı (düzenle/sil)
│   ├── EditTaskModal.tsx   # Güncelleme modalı
│   ├── ProgressRing.tsx    # İlerleme halkası
│   └── EmptyState.tsx      # Boş liste durumu
├── pages/
│   └── HomePage.tsx        # Ana sayfa
├── interfaces/
│   └── Task.ts             # TypeScript veri modeli
└── hooks/
    ├── useTasks.ts         # Ekle/Listele/Güncelle/Sil mantığı
    └── useLocalStorage.ts  # LocalStorage senkronizasyonu
```
 
---
## ⚙️ Kurulum ve Çalıştırma
 
### Gereksinimler
- [Node.js](https://nodejs.org) (LTS sürüm)
### Adımlar
 
```bash
# Repoyu klonla
git clone https://github.com/HakanUZN/todo-app.git
 
# Proje klasörüne gir
cd todo-app
 
# Bağımlılıkları yükle
npm install
 
# Geliştirme sunucusunu başlat
npm run dev
```
 
Tarayıcıda `http://localhost:5173` adresini aç.
 
### Production Build
 
```bash
npm run build
```
 
`dist/` klasörü oluşur, Netlify'a sürükle-bırak ile yayına alabilirsin.
 
---
 
## 📋 Proje Gereksinimleri (Karşılanan Maddeler)
 
- [x] Modern JavaScript kütüphanesi kullanıldı → **ReactJS**
- [x] Tailwind CSS / Bootstrap 5 kullanıldı → **Bootstrap 5**
- [x] Bir adet **Ekle** işlemi
- [x] Bir adet **Listeleme** işlemi
- [x] Bir adet **Güncelleme** işlemi
- [x] Bir adet **Silme** işlemi
- [x] LocalStorage kullanıldı
- [x] En az 1 adet proje ekran görüntüsü eklendi
- [x] GitHub'a public repo olarak yüklendi
- [x] Netlify ile yayına alındı
---
 
## 🌐 Yayın
 
[![Netlify Status](https://api.netlify.com/api/v1/badges/strong-dragon-6cdbbc/deploy-status)](https://strong-dragon-6cdbbc.netlify.app)


