# Oyun Merkezi

Kişisel oyun koleksiyonu. VitaTakip > Ayarlar > Veriler ve yedek > "Şifreli" bölümünden açılır.

## Yeni oyun eklemek
1. Oyunun klasörünü `games/<oyun-adi>/` altına kopyala (içinde `index.html` olmalı).
2. `games.json` dosyasına bir satır ekle:

```json
{ "title": "Oyunun adı", "desc": "Kısa açıklama", "path": "games/oyun-adi/", "icon": "🚀", "theme": "space", "tags": ["platform"] }
```

Temalar (her oyunun kendi arka planı): `neon`, `ocean`, `lava`, `forest`, `space`, `circuit`, `sunset`, `ice`.
Tema yazılmazsa sıradaki tema otomatik verilir.

## İnternetsiz kullanım ve indirme
Site PWA olarak çalışır. `games.json` içindeki oyunlar, `index.html`, `src`/`href` ve CSS `url()` bağlantılarıyla otomatik olarak çevrimdışı kaydedilir. Oyun kodunda JavaScript ile sonradan yüklenen dosyalar varsa, ilk açılıştan sonra önbelleğe girer.
