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
