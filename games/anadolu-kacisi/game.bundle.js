(()=>{var Fs=.016666666666666666,$o=26,Jc=46,jc=48,Qc=72,eh=1900,Jo=980,th=310,ih=2600,nh=2400,rh=850,sh=280,ah=2100,oh=400,jo=-670,lh=.48,ch=.095,hh=.115,dh=.38,uh=[{id:1,biomeKey:"rainforest",title:"Ya\u011Fmur Orman\u0131",subtitle:"Yosunlu Harabeler & Sahte Zeminler",mechanicSummary:"\xC7\xF6ken toprak bloklar, kayan \xE7ukurlar, bambu tuzaklar\u0131 ve ka\xE7an tap\u0131nak kap\u0131lar\u0131.",accent:"#4ade80",bgPrimary:"#0c231a",bgSecondary:"#163d2d",badgeColor:"#22c55e"},{id:2,biomeKey:"desert",title:"Kumul Tap\u0131na\u011F\u0131",subtitle:"G\xFCne\u015F Kanyonu & Seraplar",mechanicSummary:"\xC7\xF6ken kumta\u015F\u0131 s\xFCtunlar\u0131, dokununca da\u011F\u0131lan seraplar, bronz m\u0131zraklar ve y\xFCkselen batakl\u0131k kumu.",accent:"#f59e0b",bgPrimary:"#2c180a",bgSecondary:"#5c3114",badgeColor:"#f59e0b"},{id:3,biomeKey:"glacier",title:"Buzul Ge\xE7idi",subtitle:"Arktik Ma\u011Fara & Tipi F\u0131rt\u0131nas\u0131",mechanicSummary:"Kaygan buz zeminler, d\xFC\u015Fen buz sark\u0131tlar\u0131, sert tipi r\xFCzgar\u0131 ve f\u0131rlatan buzul gayzerleri.",accent:"#38bdf8",bgPrimary:"#0a1929",bgSecondary:"#163554",badgeColor:"#38bdf8"},{id:4,biomeKey:"volcano",title:"Volkanik Kaldera",subtitle:"Bazalt U\xE7urum & Termal Terslik",mechanicSummary:"Eriyen bazalt s\xFCtunlar, y\xFCkselen lav seli, tersine d\xF6nen yer\xE7ekimi ve kovalayan obsidyen duvar\u0131.",accent:"#f97316",bgPrimary:"#1f0906",bgSecondary:"#47150c",badgeColor:"#ef4444"},{id:5,biomeKey:"foundry",title:"F\u0131rt\u0131nal\u0131 D\xF6k\xFCmhane",subtitle:"Demir At\xF6lye & Karanl\u0131k F\u0131rt\u0131na",mechanicSummary:"H\u0131zlanan testereler, hidrolik presler, ters kutup elektrik ark\u0131 ve \u015Fim\u015Fekli karanl\u0131k.",accent:"#a78bfa",bgPrimary:"#0b0e17",bgSecondary:"#1c2333",badgeColor:"#8b5cf6"}],er=Object.fromEntries(uh.map(n=>[n.id,n])),fh=[{id:1,biomeKey:"ottoman-palace",title:"Neo-Topkap\u0131 Saray\u0131",subtitle:"Hologram \xC7ini & Alt\u0131n Avlu",mechanicSummary:"\xC7\xF6ken siber-mermer zeminler, hologram \xE7ini seraplar\u0131, gizli m\u0131zraklar ve ka\xE7an padi\u015Fah kap\u0131s\u0131.",accent:"#2dd4bf",bgPrimary:"#061a23",bgSecondary:"#0f3644",badgeColor:"#14b8a6"},{id:2,biomeKey:"ottoman-bosphorus",title:"Siber Bo\u011Faz Kulesi",subtitle:"Lazer K\xF6pr\xFC & K\u0131z Kulesi Feneri",mechanicSummary:"Kaygan enerji k\xF6pr\xFCleri, y\xFCkselen plazma dalgalar\u0131, f\u0131rlat\u0131c\u0131 t\xFCrbinler ve hareketli kule iskeleleri.",accent:"#38bdf8",bgPrimary:"#071326",bgSecondary:"#112a4e",badgeColor:"#0284c7"},{id:3,biomeKey:"ottoman-galata",title:"Galata G\xF6k-K\xF6pr\xFCs\xFC",subtitle:"Hezarfen T\xFCrbinleri & Bulut Kuleleri",mechanicSummary:"Y\xFCksek r\xFCzgar t\xFCrbinleri, f\u0131rlat\u0131c\u0131 g\xF6k-yaylar\u0131, d\xFC\u015Fen kristal sark\u0131tlar ve kayan bulut tabanlar\u0131.",accent:"#fbbf24",bgPrimary:"#1a1208",bgSecondary:"#3b250b",badgeColor:"#f59e0b"},{id:4,biomeKey:"ottoman-observatory",title:"Y\u0131ld\u0131z G\xF6zlemevi",subtitle:"Takiy\xFCddin Usturlab\u0131 & S\u0131f\u0131r Yer\xE7ekimi",mechanicSummary:"Tersine d\xF6nen yer\xE7ekimi kubbeleri, karanl\u0131k y\u0131ld\u0131z odalar\u0131, y\xFCkselen plazma \xE7ekirde\u011Fi ve usturlap tuzaklar\u0131.",accent:"#c084fc",bgPrimary:"#120826",bgSecondary:"#29124f",badgeColor:"#a855f7"},{id:5,biomeKey:"ottoman-shipyard",title:"Z\u0131rhl\u0131 Tersane-i \xC2mire",subtitle:"Plazma \u015Eahi Toplar\u0131 & Siber Ocak",mechanicSummary:"Plazma testereler, hidrolik d\xF6k\xFCm presleri, ters kutup elektrik ark\u0131 ve f\u0131rt\u0131nal\u0131 karanl\u0131k final.",accent:"#fb7185",bgPrimary:"#1f070c",bgSecondary:"#45101c",badgeColor:"#f43f5e"}],Fr=Object.fromEntries(fh.map(n=>[n.id,n])),ph=[{id:1,biomeKey:"turkey-amasya",title:"Amasya \xB7 \u015Eehzadeler",subtitle:"Har\u015Fena Kalesi & Ye\u015Fil\u0131rmak Yal\u0131boyu",mechanicSummary:"Amasya Elmas\u0131 topla, Har\u015Fena kayalar\u0131ndan s\xFCz\xFCl, nehir ta\u015Fmalar\u0131ndan ka\xE7.",productName:"Amasya Elmas\u0131",productIcon:"\u{1F34E}",accent:"#ef4444",bgPrimary:"#111c18",bgSecondary:"#1f362c",badgeColor:"#dc2626"},{id:2,biomeKey:"turkey-yozgat",title:"Yozgat \xB7 Bozok Yaylas\u0131",subtitle:"Saat Kulesi & \xC7aml\u0131k Milli Park\u0131",mechanicSummary:"Testi Kebab\u0131 kazan, Saat Kulesi r\xFCzgar\u0131nda z\u0131pla, saat gonguyla ters y\xF6nlere dikkat et.",productName:"Testi Kebab\u0131",productIcon:"\u{1F3FA}",accent:"#f59e0b",bgPrimary:"#1d160b",bgSecondary:"#3b2b14",badgeColor:"#d97706"},{id:3,biomeKey:"turkey-erzurum",title:"Erzurum \xB7 Dada\u015Flar Diyar\u0131",subtitle:"Paland\xF6ken & \xC7ifte Minareli Medrese",mechanicSummary:"Ca\u011F Kebab\u0131 \u0131s\u0131nmas\u0131, Paland\xF6ken kayak-buz kaymas\u0131, tipi r\xFCzgar\u0131 ve k\u0131r\u0131lan kar.",productName:"Ca\u011F Kebab\u0131",productIcon:"\u{1F362}",accent:"#38bdf8",bgPrimary:"#0c1a2e",bgSecondary:"#19355c",badgeColor:"#0284c7"},{id:4,biomeKey:"turkey-corum",title:"\xC7orum \xB7 Hitit Hattu\u015Fa",subtitle:"Aslanl\u0131 Kap\u0131 & Hitit G\xFCne\u015F Kursu",mechanicSummary:"\xC7orum Leblebisi h\u0131z\u0131, Hitit G\xFCne\u015F Kursuyla yava\u015Flayan/h\u0131zlanan zaman ve antik ta\u015F.",productName:"\xC7orum Leblebisi",productIcon:"\u{1F7E1}",accent:"#fbbf24",bgPrimary:"#1f140d",bgSecondary:"#422818",badgeColor:"#eab308"},{id:5,biomeKey:"turkey-samsun",title:"Samsun \xB7 19 May\u0131s Liman\u0131",subtitle:"Band\u0131rma Vapuru & Onur An\u0131t\u0131",mechanicSummary:"Samsun Pidesi topla, Band\u0131rma buhar f\u0131rlat\u0131c\u0131lar\u0131 ve Karadeniz f\u0131rt\u0131na ak\u0131nt\u0131lar\u0131yla fini\u015Fe ko\u015F.",productName:"Samsun Pidesi",productIcon:"\u{1F956}",accent:"#34d399",bgPrimary:"#071b24",bgSecondary:"#0f3647",badgeColor:"#10b981"}],Br=Object.fromEntries(ph.map(n=>[n.id,n])),Xi={classic:{id:"classic",name:"Mod 1 \xB7 Ger\xE7ek\xE7i Ka\xE7\u0131\u015F",shortName:"Mod 1: Klasik",subtitle:"5 Ger\xE7ek\xE7i Biyom \xB7 35 A\u015Fama",firstStageId:"1-1",chapters:uh,chapterById:er},ottoman:{id:"ottoman",name:"Mod 2 \xB7 F\xFCt\xFCristik Osmanl\u0131",shortName:"Mod 2: Osmanl\u0131",subtitle:"5 Siber-Osmanl\u0131 Haritas\u0131 \xB7 35 A\u015Fama",firstStageId:"O1-1",chapters:fh,chapterById:Fr},turkey:{id:"turkey",name:"Mod 3 \xB7 Anadolu \u015Eehirleri",shortName:"Mod 3: Anadolu",subtitle:"5 \u015Eehir Haritas\u0131 \xB7 35 A\u015Fama",firstStageId:"T1-1",chapters:ph,chapterById:Br}},Qo=[{id:"yeniceri",name:"Siber Yeni\xE7eri",tag:"Z\u0131rhl\u0131 B\xF6rk & Neon Kaftan",scarfColor:"#f43f5e",accent:"#2dd4bf",icon:"\u2694\uFE0F"},{id:"sipahi",name:"Neo-Sipahi",tag:"Hologram Mi\u011Ffer & \xC7elik Z\u0131rh",scarfColor:"#38bdf8",accent:"#60a5fa",icon:"\u{1F6E1}\uFE0F"},{id:"hezarfen",name:"Hezarfen Pilot",tag:"Foton Kanat & G\xF6k G\xF6zl\xFC\u011F\xFC",scarfColor:"#fbbf24",accent:"#f59e0b",icon:"\u{1FABD}"},{id:"akinci",name:"K\u0131z\u0131l Ak\u0131nc\u0131",tag:"G\xF6lge Pelerin & Lazer Viz\xF6r",scarfColor:"#c084fc",accent:"#f43f5e",icon:"\u{1F319}"}],Yi=Object.fromEntries(Qo.map(n=>[n.id,n])),el=[{id:"amasya-sehzade",name:"Amasya \u015Eehzadesi",tag:"K\u0131rm\u0131z\u0131 Ka\u015Fkol & Elma Kaftan",scarfColor:"#ef4444",accent:"#fca5a5",icon:"\u{1F34E}"},{id:"yozgat-yigit",name:"Yozgat Yi\u011Fidi",tag:"Bozok Kalpak & Testi Kemeri",scarfColor:"#f59e0b",accent:"#fde68a",icon:"\u{1F3FA}"},{id:"erzurum-dadas",name:"Erzurum Dada\u015F\u0131",tag:"Dada\u015F Kalpak & G\xFCm\xFC\u015F Cepken",scarfColor:"#38bdf8",accent:"#bae6fd",icon:"\u{1F362}"},{id:"corum-hitit",name:"Hitit Muhaf\u0131z\u0131",tag:"G\xFCne\u015F Kursu Tac\u0131 & Tun\xE7 Z\u0131rh",scarfColor:"#eab308",accent:"#fef08a",icon:"\u{1F7E1}"},{id:"samsun-kaptan",name:"Karadeniz Kaptan\u0131",tag:"Band\u0131rma \u015Eapkas\u0131 & Denizci Palto",scarfColor:"#10b981",accent:"#a7f3d0",icon:"\u2693"}],qi=Object.fromEntries(el.map(n=>[n.id,n])),pn={kolay:{label:"KOLAY",color:"#4ade80"},orta:{label:"ORTA",color:"#fbbf24"},zor:{label:"ZOR",color:"#fb923c"},"cok-zor":{label:"\xC7OK ZOR",color:"#f43f5e"}};function Ki(n,e,t){return Math.max(e,Math.min(t,n))}function kt(n,e,t,i,r,s,a,o){return n<r+a&&n+t>r&&e<s+o&&e+i>s}function mh(n,e,t){let r=t-40,s=t;for(let a of n.hazards||[]){if(a.type==="boulder"||a.type==="crusher"){if(e+16+18>a.x&&e-16-18<a.x+a.w)return!1;continue}let o=a.type==="spikes"?18:26,l=20;if(e+16+o>a.x&&e-16-o<a.x+a.w&&s+8>a.y-l&&r<a.y+a.h+l)return!1}return!0}function mn(n,e,t=195){let i=n.levelDef?.spawn?.x??64,r=n.door?.x??1160,s=[];for(let o of n.platforms){if(!o.solid||o.surface==="fake"||o.surface==="bouncy"||o.y<140||o.y>700)continue;let l=Math.max(o.x+42,i+t),c=Math.min(o.x+o.w-42,r-75);c-l>=40&&s.push({platId:o.id,y:o.y,minX:l,maxX:c,span:c-l})}if(s.length===0)return[{platId:null,x:Ki(i+t+120,260,900),y:560,minX:240,maxX:940}];s.sort((o,l)=>o.minX-l.minX);let a=[];for(let o=0;o<e;o+=1){let l=s[o%s.length],c=s.length>=e?.5:(o+1)/(e+1),u=l.minX+(l.maxX-l.minX)*c;a.push({platId:l.platId,x:Math.round(u),y:l.y,minX:l.minX,maxX:l.maxX})}return a}function zr(n,e,t=195){let i=n.levelDef?.spawn?.x??64,r=n.door?.x??1160,s=c=>{let u=[];for(let d of n.platforms){if(!d.solid||d.surface==="fake"||d.surface==="bouncy"||!c&&d.surface==="crumble"||d.y<140||d.y>700)continue;let h=Math.max(d.x+42,i+t),p=Math.min(d.x+d.w-42,r-75);p-h>=40&&u.push({platId:d.id,y:d.y,minX:h,maxX:p,span:p-h})}return u},a=s(!1);if(a.length===0&&(a=s(!0)),a.length===0)return[{platId:null,x:Ki(i+t+120,260,900),y:560,minX:240,maxX:940}];a.sort((c,u)=>c.minX-u.minX);let o=[];for(let c of a){let u=[.5,.25,.75,.15,.85,.05,.95],d=[];for(let h of u){let p=Math.round(c.minX+(c.maxX-c.minX)*h);mh(n,p,c.y)&&(d.some(f=>Math.abs(f.x-p)<38)||d.push({platId:c.platId,x:p,y:c.y,minX:c.minX,maxX:c.maxX}))}if(d.length===0){for(let h=Math.round(c.minX);h<=Math.round(c.maxX);h+=14)if(mh(n,h,c.y)){d.push({platId:c.platId,x:h,y:c.y,minX:c.minX,maxX:c.maxX});break}}o.push(...d)}if(o.length===0)return Array.from({length:e},(c,u)=>{let d=a[u%a.length],h=(u+1)/(e+1),p=Math.round(d.minX+(d.maxX-d.minX)*h);return{platId:d.platId,x:p,y:Math.max(120,d.y-76),minX:d.minX,maxX:d.maxX}});o.sort((c,u)=>c.x-u.x);let l=[];for(let c=0;c<e;c+=1){let u=Math.min(o.length-1,Math.floor(c*o.length/e)),d=o[u],h=l.some(p=>Math.abs(p.x-d.x)<48)&&o.find(p=>l.every(f=>Math.abs(f.x-p.x)>=48))||d;l.push(h)}return l}function xi(n,e,t=2.1){n.toast={text:e,timer:t,maxTimer:t},n.events.push({type:"toast",text:e})}function Ft(){return{speedMult:1,accelMult:1,frictionMult:1,gravityMult:1,extraForceX:0,extraForceY:0}}var tr={rainforest:{init(n){let e=mn(n,2,210);n.mapData={entangled:!1,vineSnares:e.map((t,i)=>({x:t.x-24,y:t.y-54,w:48,h:54,phase:i*1.4}))}},update(n){let e=!1;for(let t of n.players){if(!t.alive)continue;n.mapData.vineSnares.some(r=>kt(t.x,t.y,t.w,t.h,r.x,r.y,r.w,r.h))&&t.grounded&&(e=!0)}n.mapData.entangled=e},playerPhysics(n,e){let t=Ft();return n.mapData.vineSnares.some(r=>kt(e.x,e.y,e.w,e.h,r.x,r.y,r.w,r.h))&&e.grounded&&(t.speedMult=.72,t.frictionMult=1.35),t},hudStatus(n){return n.mapData.entangled?{icon:"\u{1F33F}",label:"SARMA\u015EIK",valueText:"HIZ %72",tone:"warn"}:{icon:"\u{1F33F}",label:"YA\u011EMUR & S\u0130S",valueText:"A\u011EIR ZEM\u0130N",tone:"info"}},render(n,e,t){n.save();for(let i of e.mapData.vineSnares){let r=i.x+i.w/2;n.strokeStyle="#15803d",n.lineWidth=3;for(let s=-2;s<=2;s+=1){let a=r+s*9,o=Math.sin(t*2.4+i.phase+s)*4;n.beginPath(),n.moveTo(a,0),n.quadraticCurveTo(a+o,i.y*.6,a+o*.5,i.y+i.h),n.stroke(),n.fillStyle="#4ade80",n.beginPath(),n.ellipse(a+o*.4,i.y+18+s%2*12,4,2.2,.5,0,Math.PI*2),n.fill()}}n.restore()}},desert:{init(n){let t=mn(n,1,180)[0],i=n.platforms.some(r=>r.surface==="fake");n.mapData={stormPulse:0,mirrorRevealed:!1,sunMirror:{x:t.x,y:t.y-36,w:32,h:36,active:!1,hasMirage:i}}},update(n,e){let t=n.mapData;t.stormPulse=(Math.sin(n.elapsed*.9)+1)*.5;for(let i of n.players){if(!i.alive)continue;let r=t.sunMirror;kt(i.x,i.y,i.w,i.h,r.x-14,r.y-12,r.w+28,r.h+16)&&(r.active||(r.active=!0,t.mirrorRevealed=!0,xi(n,"G\xFCne\u015F aynas\u0131 seraplar\u0131 a\xE7\u0131\u011Fa \xE7\u0131kard\u0131!")))}},playerPhysics(n){let e=Ft();return n.mapData.stormPulse>.82&&(e.extraForceX=-22),e},hudStatus(n){return n.mapData.mirrorRevealed?{icon:"\u2600\uFE0F",label:"AYNA",valueText:"SERAP A\xC7IK",tone:"active"}:{icon:"\u{1F32A}\uFE0F",label:"KUM FIRTINASI",valueText:`${Math.round(n.mapData.stormPulse*100)}%`,tone:"warn"}},render(n,e,t){let i=e.mapData.sunMirror;n.save(),e.mapData.stormPulse>.35&&(n.fillStyle=`rgba(217, 119, 6, ${(e.mapData.stormPulse-.35)*.14})`,n.fillRect(0,0,1280,720)),n.fillStyle="#92400e",n.fillRect(i.x+8,i.y+18,16,18),n.strokeStyle="#fde047",n.lineWidth=2.5,n.beginPath(),n.ellipse(i.x+16,i.y+12,12,10,-.35,0,Math.PI*2),n.stroke(),n.fillStyle=i.active?"#fef08a":"rgba(253, 224, 71, 0.35)",n.fill();let r=i.active?.85:.2+Math.sin(t*3)*.12;for(let s of e.platforms)s.surface!=="fake"||s.broken||(i.active&&(n.strokeStyle="rgba(253, 224, 71, 0.35)",n.lineWidth=2,n.beginPath(),n.moveTo(i.x+16,i.y+10),n.lineTo(s.x+s.w/2,s.y+4),n.stroke()),n.strokeStyle=`rgba(253, 224, 71, ${r})`,n.setLineDash([6,4]),n.lineWidth=2,n.strokeRect(s.x+1,s.y+1,s.w-2,s.h-2),n.setLineDash([]));n.restore()}},glacier:{init(n){n.mapData={frostMeter:0,chilled:!1}},update(n,e){let t=n.player,i=n.mapData.frostMeter,r=t&&t.alive&&(Math.abs(t.vx)>45||!t.grounded);i+=r?-26*e:14*e,n.mapData.frostMeter=Ki(i,0,100),n.mapData.chilled=n.mapData.frostMeter>=75},playerPhysics(n,e){let t=Ft();return e.groundSurface==="ice"&&(t.frictionMult=.82),n.mapData.chilled&&(t.speedMult=.78),t},hudStatus(n){let e=Math.round(n.mapData.frostMeter);return{icon:"\u{1F976}",label:"DONMA",valueText:`${e}%`,tone:e>=75?"danger":e>=40?"warn":"info"}},render(n,e){let t=e.mapData.frostMeter/100;if(t<=.05)return;n.save();let i=n.createRadialGradient(1280/2,720/2,260,1280/2,720/2,740);i.addColorStop(0,"rgba(186, 230, 253, 0)"),i.addColorStop(1,`rgba(125, 211, 252, ${t*.34})`),n.fillStyle=i,n.fillRect(0,0,1280,720),n.restore()}},volcano:{init(n){let e=mn(n,2,240);n.mapData={heatMeter:8,fireVents:e.map((t,i)=>({x:t.x-16,y:t.y,w:32,phase:i*1.9,erupting:!1}))}},update(n,e){let t=n.mapData,i=n.player,r=!1;for(let l of t.fireVents){let c=(n.elapsed+l.phase)%3.2;l.erupting=c>1.9&&c<2.75,l.erupting&&i&&i.alive&&kt(i.x,i.y,i.w,i.h,l.x,l.y-68,l.w,68)&&(r=!0)}let s=n.risingHazard?.active&&n.risingHazard.y-(i.y+i.h)<130,a=!i.grounded&&!r?-20:-8,o=(r?48:s?16:i.grounded?3.5:a)*e;t.heatMeter=Ki(t.heatMeter+o,0,100)},playerPhysics(n){let e=Ft();return n.mapData.heatMeter>=80&&(e.speedMult=1.07),e},hudStatus(n){let e=Math.round(n.mapData.heatMeter);return{icon:"\u{1F525}",label:"ISI BAR",valueText:`${e}%`,tone:e>=80?"danger":e>=50?"warn":"info"}},render(n,e,t){n.save();for(let i of e.mapData.fireVents){n.fillStyle="#7c2d12",n.fillRect(i.x,i.y-6,i.w,6);let r=(e.elapsed+i.phase)%3.2;if(r>1.35&&r<=1.9)n.fillStyle=`rgba(251, 146, 60, ${.4+Math.sin(t*24)*.3})`,n.fillRect(i.x+4,i.y-12,i.w-8,6);else if(i.erupting){let s=n.createLinearGradient(0,i.y-72,0,i.y);s.addColorStop(0,"rgba(254, 240, 138, 0.08)"),s.addColorStop(.5,"rgba(249, 115, 22, 0.72)"),s.addColorStop(1,"rgba(239, 68, 68, 0.92)"),n.fillStyle=s,n.fillRect(i.x+3,i.y-72,i.w-6,72)}}n.restore()}},foundry:{init(n){let e=mn(n,2,230);n.mapData={polarity:1,magnetCoils:e.map(t=>({x:t.x,y:Math.max(120,t.y-160),radius:150}))}},update(n){n.mapData.polarity=Math.floor(n.elapsed/2.4)%2===0?1:-1},playerPhysics(n,e){let t=Ft(),i=e.x+e.w/2,r=e.y+e.h/2;for(let s of n.mapData.magnetCoils){let a=s.x-i;Math.hypot(a,s.y-r)<s.radius&&Math.abs(a)>12&&(t.extraForceX+=Math.sign(a)*n.mapData.polarity*72)}return t},hudStatus(n){let e=n.mapData.polarity>0;return{icon:"\u{1F9F2}",label:"MANYET\u0130K",valueText:e?"\xC7EK\u0130M (+)":"\u0130T\u0130M (-)",tone:e?"active":"warn"}},render(n,e,t){let i=e.mapData.polarity>0,r=i?"56, 189, 248":"244, 63, 94";n.save();for(let s of e.mapData.magnetCoils){let a=t*2.2%1,o=i?(1-a)*62+14:a*62+14;n.strokeStyle=`rgba(${r}, 0.32)`,n.lineWidth=2,n.beginPath(),n.arc(s.x,s.y,o,0,Math.PI*2),n.stroke(),n.fillStyle="#334155",n.fillRect(s.x-10,s.y-14,20,28),n.fillStyle=`rgb(${r})`,n.beginPath(),n.arc(s.x,s.y,7,0,Math.PI*2),n.fill()}n.restore()}},"ottoman-palace":{init(n){let e=mn(n,2,220),t=e[0],i=e[e.length-1];n.mapData={suspicion:0,guardDisabledTimer:0,inVision:!1,divanSeal:{x:t.x-14,y:t.y-34,w:28,h:28,collected:!1},guards:[{originX:i.x,x:i.x,y:i.y-42,minX:i.minX,maxX:i.maxX,dir:-1,coneRange:130}]}},update(n,e){let t=n.mapData;if(t.guardDisabledTimer>0&&(t.guardDisabledTimer=Math.max(0,t.guardDisabledTimer-e)),!t.divanSeal.collected)for(let r of n.players){if(!r.alive)continue;let s=t.divanSeal;if(kt(r.x,r.y,r.w,r.h,s.x,s.y,s.w,s.h)){s.collected=!0,t.guardDisabledTimer=4.5,t.suspicion=0,n.events.push({type:"polarity",value:!0}),xi(n,"Divan m\xFChr\xFC aktif: Muhaf\u0131z radar\u0131 devre d\u0131\u015F\u0131!");break}}let i=!1;for(let r of t.guards){let s=Math.max(20,(r.maxX-r.minX)*.45);if(r.x=r.originX+Math.sin(n.elapsed*1.1)*s,r.dir=Math.cos(n.elapsed*1.1)>=0?1:-1,t.guardDisabledTimer<=0){let a=r.dir>0?r.x+12:r.x-r.coneRange;for(let o of n.players)o.alive&&kt(o.x,o.y,o.w,o.h,a,r.y-8,r.coneRange,52)&&(i=!0)}}t.inVision=i,t.suspicion=Ki(t.suspicion+(i?48*e:-42*e),0,100)},playerPhysics(n){let e=Ft();return n.mapData.suspicion>=85&&(e.speedMult=1.12),e},hudStatus(n){let e=n.mapData;if(e.guardDisabledTimer>0)return{icon:"\u{1F4A0}",label:"D\u0130VAN M\xDCHR\xDC",valueText:`${e.guardDisabledTimer.toFixed(1)}s`,tone:"active"};let t=Math.round(e.suspicion);return{icon:"\u{1F441}\uFE0F",label:"G\u0130ZL\u0130L\u0130K",valueText:t>0?`%${t} \u015E\xDCPHE`:"G\u0130ZL\u0130",tone:t>=65?"danger":t>0?"warn":"info"}},render(n,e,t){let i=e.mapData;if(n.save(),!i.divanSeal.collected){let r=i.divanSeal,s=Math.sin(t*4)*3;n.fillStyle="rgba(45, 212, 191, 0.25)",n.beginPath(),n.arc(r.x+14,r.y+14+s,20,0,Math.PI*2),n.fill(),n.strokeStyle="#fbbf24",n.lineWidth=2,n.beginPath(),n.arc(r.x+14,r.y+14+s,11,0,Math.PI*2),n.stroke(),n.fillStyle="#2dd4bf",n.fillRect(r.x+10,r.y+10+s,8,8)}for(let r of i.guards){if(i.guardDisabledTimer<=0){let s=r.x+r.dir*r.coneRange,a=n.createLinearGradient(r.x,r.y,s,r.y);a.addColorStop(0,i.inVision?"rgba(244, 63, 94, 0.44)":"rgba(251, 191, 36, 0.34)"),a.addColorStop(1,"rgba(251, 191, 36, 0)"),n.fillStyle=a,n.beginPath(),n.moveTo(r.x,r.y+10),n.lineTo(s,r.y-16),n.lineTo(s,r.y+42),n.closePath(),n.fill()}n.fillStyle="#7f1d1d",n.fillRect(r.x-9,r.y,18,42),n.fillStyle="#fde68a",n.fillRect(r.x-6,r.y-8,12,10),n.fillStyle=i.guardDisabledTimer>0?"#64748b":"#2dd4bf",n.fillRect(r.x+r.dir*3,r.y+4,5,3)}n.restore()}},"ottoman-bosphorus":{init(n){let e=n.levelDef?.spawn?.x??64,t=n.platforms.find(o=>o.solid&&o.x<=e&&o.x+o.w>=e+120)||n.platforms[0],i=Ki(t?t.x+t.w-46:e+150,e+115,340),r=(t?t.y:560)-36,a=mn(n,1,390)[0];n.mapData={climbActive:!1,terminal:{x:i,y:r,w:28,h:36,hacked:!1},laserGrid:{x:a.x,y:Math.max(60,a.y-150),w:14,h:150,active:!0}}},update(n){let e=n.mapData,t=e.terminal;if(!t.hacked){for(let i of n.players)if(i.alive&&kt(i.x,i.y,i.w,i.h,t.x-8,t.y-8,t.w+16,t.h+16)){t.hacked=!0,e.laserGrid.active=!1,n.events.push({type:"polarity",value:!0}),xi(n,"Siber terminal hacklendi: Lazer a\u011F\u0131 devre d\u0131\u015F\u0131!");break}}},playerPhysics(n,e){let t=Ft(),i=n.mapData.laserGrid;return i.active&&kt(e.x,e.y,e.w,e.h,i.x-10,i.y,i.w+20,i.h)&&(t.speedMult=.65),t},hudStatus(n){return n.mapData.terminal.hacked?{icon:"\u{1F4BB}",label:"HACK",valueText:"LAZER KAPALI",tone:"active"}:{icon:"\u{1F510}",label:"LAZER A\u011EI",valueText:"AKT\u0130F",tone:"warn"}},render(n,e,t){let{terminal:i,laserGrid:r}=e.mapData;if(n.save(),n.fillStyle="#0f172a",n.fillRect(i.x,i.y,i.w,i.h),n.strokeStyle=i.hacked?"#4ade80":"#38bdf8",n.lineWidth=2,n.strokeRect(i.x,i.y,i.w,i.h),n.fillStyle=i.hacked?"#22c55e":"#0ea5e9",n.fillRect(i.x+5,i.y+6,i.w-10,14),r.active){n.strokeStyle=`rgba(244, 63, 94, ${.55+Math.sin(t*16)*.25})`,n.lineWidth=3;for(let s=0;s<3;s+=1){let a=r.x+s*5;n.beginPath(),n.moveTo(a,r.y),n.lineTo(a,r.y+r.h),n.stroke()}}n.restore()}},"ottoman-galata":{init(n){let e=n.platforms.filter(t=>t.solid&&!t.patrol&&t.y>90&&t.y+t.h<700);n.mapData={balance:0,swayPlats:e.map((t,i)=>({id:t.id,baseY:t.y,phase:i*1.1}))}},update(n){let e=n.mapData,t=s=>Math.sin(n.elapsed*2.2+s)*2.5;for(let s of e.swayPlats){let a=n.platforms.find(o=>o.id===s.id);if(a&&!a.falling&&!a.moveAnim){let o=a.y;a.y=s.baseY+t(s.phase),a.dy=(a.dy||0)+(a.y-o)}}let i=n.player,r=Math.sin(n.elapsed*2.1)*32+n.windForceX*.35;e.balance=Ki(r*.45+(i?i.vx*.14:0),-100,100)},playerPhysics(n){let e=Ft();return e.extraForceX=Math.sin(n.elapsed*2.1)*24,e},hudStatus(n){let e=Math.round(n.mapData.balance);return{icon:"\u{1F309}",label:"DENGE",valueText:`${e>15?"\u27A1":e<-15?"\u2B05":"\u2696\uFE0F"} ${Math.abs(e)}%`,tone:Math.abs(e)>65?"warn":"info"}},render(n,e){n.save(),n.strokeStyle="rgba(251, 191, 36, 0.38)",n.lineWidth=2;for(let t of e.mapData.swayPlats){let i=e.platforms.find(r=>r.id===t.id);if(!(!i||!i.visible))for(let r of[i.x+12,i.x+i.w-12])n.beginPath(),n.moveTo(r,0),n.lineTo(r,i.y),n.stroke()}n.restore()}},"ottoman-observatory":{init(n){n.mapData={timeSlowTimer:0,cooldownTimer:0,prevAbilityHeld:!1}},update(n,e,t=[]){let i=n.mapData;i.timeSlowTimer>0&&(i.timeSlowTimer=Math.max(0,i.timeSlowTimer-e)),i.cooldownTimer>0&&(i.cooldownTimer=Math.max(0,i.cooldownTimer-e));let r=t.some(s=>s&&s.ability);r&&!i.prevAbilityHeld&&i.timeSlowTimer<=0&&i.cooldownTimer<=0&&(i.timeSlowTimer=2.4,i.cooldownTimer=4.6,n.events.push({type:"gravityFlip",value:1}),xi(n,"Usturlap Zaman B\xFCk\xFCm\xFC aktif! (E / Shift)")),i.prevAbilityHeld=r},playerPhysics(){let n=Ft();return n.gravityMult=.85,n},worldTimeScale(n){return n.mapData.timeSlowTimer>0?.42:1},hudStatus(n){let e=n.mapData;return e.timeSlowTimer>0?{icon:"\u23F3",label:"ZAMAN B\xDCK\xDCM\xDC",valueText:`${e.timeSlowTimer.toFixed(1)}s`,tone:"active"}:e.cooldownTimer>0?{icon:"\u{1F52D}",label:"D\xDC\u015E\xDCK \xC7EK\u0130M",valueText:`\u015EARJ ${e.cooldownTimer.toFixed(0)}s`,tone:"warn"}:{icon:"\u23F3",label:"D\xDC\u015E\xDCK \xC7EK\u0130M",valueText:"ZAMAN HAZIR [E]",tone:"info"}},render(n,e){e.mapData.timeSlowTimer<=0||(n.save(),n.strokeStyle="rgba(192, 132, 252, 0.5)",n.lineWidth=6,n.strokeRect(4,4,1272,712),n.restore())}},"ottoman-shipyard":{init(n){let e=mn(n,2,210),t=mn(n,1,290)[0];n.mapData={partsCollected:0,heavyParts:e.map(i=>({x:i.x-12,y:i.y-34,w:24,h:24,collected:!1})),steamPistons:[{x:t.x-20,y:t.y,w:40,active:!1}]}},update(n){let e=n.mapData,t=n.elapsed%2.6;for(let i of e.steamPistons)i.active=t>1.1&&t<2.1;for(let i of e.heavyParts)if(!i.collected){for(let r of n.players)if(r.alive&&kt(r.x,r.y,r.w,r.h,i.x,i.y,i.w,i.h)){i.collected=!0,e.partsCollected+=1,n.events.push({type:"polarity",value:!0}),xi(n,`Z\u0131rh par\xE7as\u0131 al\u0131nd\u0131 (${e.partsCollected}/${e.heavyParts.length})!`);break}}},playerPhysics(n,e){let t=Ft();t.gravityMult=1+n.mapData.partsCollected*.04;for(let i of n.mapData.steamPistons)i.active&&kt(e.x,e.y,e.w,e.h,i.x,i.y-125,i.w,125)&&(t.extraForceY=-520);return t},hudStatus(n){let e=n.mapData;return{icon:"\u2699\uFE0F",label:"A\u011EIR PAR\xC7A",valueText:`${e.partsCollected}/${e.heavyParts.length}`,tone:e.partsCollected>=e.heavyParts.length?"active":"info"}},render(n,e,t){let i=e.mapData;n.save();for(let r of i.steamPistons)if(n.fillStyle="#475569",n.fillRect(r.x,r.y-8,r.w,8),r.active){let s=n.createLinearGradient(0,r.y-120,0,r.y);s.addColorStop(0,"rgba(226, 232, 240, 0)"),s.addColorStop(1,"rgba(226, 232, 240, 0.45)"),n.fillStyle=s,n.fillRect(r.x+6,r.y-120,r.w-12,114)}for(let r of i.heavyParts){if(r.collected)continue;let s=Math.sin(t*4.5)*3;n.fillStyle="#fbbf24",n.beginPath(),n.arc(r.x+12,r.y+12+s,10,0,Math.PI*2),n.fill(),n.strokeStyle="#be123c",n.lineWidth=2.5,n.stroke(),n.fillStyle="#0f172a",n.fillRect(r.x+9,r.y+9+s,6,6)}n.restore()}},"turkey-amasya":{init(n){let e=zr(n,2,210);n.mapData={applesCollected:0,buffTimer:0,apples:e.map(t=>({x:t.x-13,y:t.y-34,w:26,h:26,collected:!1}))}},update(n,e){let t=n.mapData;t.buffTimer>0&&(t.buffTimer=Math.max(0,t.buffTimer-e));for(let i of t.apples)if(!i.collected){for(let r of n.players)if(r.alive&&kt(r.x,r.y,r.w,r.h,i.x,i.y,i.w,i.h)){i.collected=!0,t.applesCollected+=1,t.buffTimer=4.2,n.events.push({type:"polarity",value:!0}),xi(n,`\u{1F34E} Amasya Elmas\u0131 al\u0131nd\u0131! (+H\u0131z & Hafiflik ${t.applesCollected}/${t.apples.length})`);break}}},playerPhysics(n){let e=Ft();return n.mapData.buffTimer>0&&(e.speedMult=1.18,e.gravityMult=.85),e},hudStatus(n){let e=n.mapData;return{icon:"\u{1F34E}",label:"AMASYA ELMASI",valueText:e.buffTimer>0?`AKT\u0130F (${e.applesCollected}/${e.apples.length})`:`${e.applesCollected}/${e.apples.length}`,tone:e.buffTimer>0?"active":"info"}},render(n,e,t){let i=e.mapData;n.save();for(let r of i.apples){if(r.collected)continue;let s=r.x+13,a=r.y+13+Math.sin(t*4)*3,o=n.createRadialGradient(s,a,2,s,a,20);o.addColorStop(0,"rgba(239, 68, 68, 0.45)"),o.addColorStop(1,"rgba(239, 68, 68, 0)"),n.fillStyle=o,n.beginPath(),n.arc(s,a,20,0,Math.PI*2),n.fill();let l=n.createRadialGradient(s-3,a-3,2,s,a,12);l.addColorStop(0,"#fde047"),l.addColorStop(.55,"#ef4444"),l.addColorStop(1,"#991b1b"),n.fillStyle=l,n.beginPath(),n.arc(s,a+1,10.5,0,Math.PI*2),n.fill(),n.strokeStyle="#78350f",n.lineWidth=2,n.beginPath(),n.moveTo(s,a-9),n.lineTo(s+2,a-14),n.stroke(),n.fillStyle="#22c55e",n.beginPath(),n.ellipse(s+5,a-11,4.5,2.2,-.4,0,Math.PI*2),n.fill()}n.restore()}},"turkey-yozgat":{init(n){let e=zr(n,2,210);n.mapData={testisCollected:0,buffTimer:0,gongActive:!1,testis:e.map(t=>({x:t.x-13,y:t.y-34,w:26,h:28,collected:!1}))}},update(n,e){let t=n.mapData;t.buffTimer>0&&(t.buffTimer=Math.max(0,t.buffTimer-e));let i=n.players.some(s=>s.alive&&s.x>260),r=n.elapsed%3.6;t.gongActive=i&&r>2.4&&r<3.25;for(let s of t.testis)if(!s.collected){for(let a of n.players)if(a.alive&&kt(a.x,a.y,a.w,a.h,s.x,s.y,s.w,s.h)){s.collected=!0,t.testisCollected+=1,t.buffTimer=4.5,n.events.push({type:"polarity",value:!0}),xi(n,`\u{1F3FA} Testi Kebab\u0131 g\xFCc\xFC! (+\u0130vme ${t.testisCollected}/${t.testis.length})`);break}}},playerPhysics(n,e){let t=Ft();return n.mapData.buffTimer>0&&(t.speedMult=1.14,t.accelMult=1.26),n.mapData.gongActive&&e.x>260&&(t.extraForceX=-82),t},hudStatus(n){let e=n.mapData;return{icon:"\u{1F3FA}",label:"TEST\u0130 KEBABI",valueText:e.gongActive?`R\xDCZGAR! (${e.testisCollected}/${e.testis.length})`:`${e.testisCollected}/${e.testis.length}`,tone:e.gongActive?"warn":e.buffTimer>0?"active":"info"}},render(n,e,t){let i=e.mapData;n.save();for(let r of i.testis){if(r.collected)continue;let s=r.x+13,a=r.y+15+Math.sin(t*3.8)*3;n.fillStyle="rgba(245, 158, 11, 0.25)",n.beginPath(),n.arc(s,a,18,0,Math.PI*2),n.fill(),n.fillStyle="#c2410c",n.beginPath(),n.ellipse(s,a+3,9.5,10.5,0,0,Math.PI*2),n.fill(),n.fillStyle="#ea580c",n.fillRect(s-4.5,a-11,9,6),n.fillStyle="#fde68a",n.fillRect(s-6,a-12.5,12,2.5),n.strokeStyle="rgba(255, 255, 255, 0.65)",n.lineWidth=1.5,n.beginPath(),n.moveTo(s-2,a-14),n.quadraticCurveTo(s+Math.sin(t*6)*4,a-20,s-1,a-25),n.stroke()}n.restore()}},"turkey-erzurum":{init(n){let e=zr(n,2,210);n.mapData={cagsCollected:0,warmTimer:0,frostRatio:.25,cags:e.map(t=>({x:t.x-14,y:t.y-34,w:28,h:24,collected:!1}))}},update(n,e){let t=n.mapData;t.warmTimer>0?(t.warmTimer=Math.max(0,t.warmTimer-e),t.frostRatio=Math.max(0,t.frostRatio-e*.5)):t.frostRatio=Math.min(.65,t.frostRatio+e*.08);for(let i of t.cags)if(!i.collected){for(let r of n.players)if(r.alive&&kt(r.x,r.y,r.w,r.h,i.x,i.y,i.w,i.h)){i.collected=!0,t.cagsCollected+=1,t.warmTimer=4.6,t.frostRatio=0,n.events.push({type:"polarity",value:!0}),xi(n,`\u{1F362} Ca\u011F Kebab\u0131 \u0131s\u0131s\u0131! (Ayaz \xE7\xF6z\xFCld\xFC ${t.cagsCollected}/${t.cags.length})`);break}}},playerPhysics(n){let e=n.mapData,t=Ft();return e.warmTimer>0?(t.speedMult=1.15,t.frictionMult=1.25):(t.frictionMult=.52,t.accelMult=.85),t},hudStatus(n){let e=n.mapData;return{icon:"\u{1F362}",label:"CA\u011E KEBABI",valueText:e.warmTimer>0?`SICAK (${e.cagsCollected}/${e.cags.length})`:`AYAZ (${e.cagsCollected}/${e.cags.length})`,tone:e.warmTimer>0?"active":"info"}},render(n,e,t){let i=e.mapData;n.save();for(let r of i.cags){if(r.collected)continue;let s=r.x+14,a=r.y+12+Math.sin(t*4.1)*3;n.fillStyle="rgba(251, 146, 60, 0.28)",n.beginPath(),n.arc(s,a,18,0,Math.PI*2),n.fill(),n.strokeStyle="#cbd5e1",n.lineWidth=2.2,n.beginPath(),n.moveTo(s-14,a),n.lineTo(s+14,a),n.stroke(),n.fillStyle="#92400e",n.fillRect(s-9,a-5,18,10),n.fillStyle="#d97706",n.fillRect(s-6,a-4,4,8),n.fillRect(s+2,a-4,4,8)}n.restore()}},"turkey-corum":{init(n){let e=zr(n,3,200);n.mapData={leblebisCollected:0,buffTimer:0,timeScale:1,phaseLabel:"NORMAL",leblebis:e.map(t=>({x:t.x-11,y:t.y-32,w:22,h:22,collected:!1}))}},update(n,e){let t=n.mapData;t.buffTimer>0&&(t.buffTimer=Math.max(0,t.buffTimer-e)),n.elapsed%4<1.8?(t.timeScale=.72,t.phaseLabel="YAVA\u015E ZAMAN"):(t.timeScale=1.22,t.phaseLabel="G\xDCNE\u015E HIZI");for(let r of t.leblebis)if(!r.collected){for(let s of n.players)if(s.alive&&kt(s.x,s.y,s.w,s.h,r.x,r.y,r.w,r.h)){r.collected=!0,t.leblebisCollected+=1,t.buffTimer=4,n.events.push({type:"polarity",value:!0}),xi(n,`\u{1F7E1} \xC7orum Leblebisi al\u0131nd\u0131! (+\xC7eviklik ${t.leblebisCollected}/${t.leblebis.length})`);break}}},worldTimeScale(n){return n.mapData.timeScale??1},playerPhysics(n){let e=Ft();return n.mapData.buffTimer>0&&(e.speedMult=1.16,e.gravityMult=.88),e},hudStatus(n){let e=n.mapData;return{icon:"\u{1F7E1}",label:"\xC7ORUM LEBLEB\u0130S\u0130",valueText:`${e.leblebisCollected}/${e.leblebis.length} \xB7 ${e.phaseLabel}`,tone:e.timeScale<1?"active":"warn"}},render(n,e,t){let i=e.mapData;n.save();for(let r of i.leblebis){if(r.collected)continue;let s=r.x+11,a=r.y+11+Math.sin(t*4.4)*3;n.fillStyle="rgba(250, 204, 21, 0.3)",n.beginPath(),n.arc(s,a,17,0,Math.PI*2),n.fill();let o=n.createRadialGradient(s-2,a-2,2,s,a,9.5);o.addColorStop(0,"#fef08a"),o.addColorStop(.65,"#eab308"),o.addColorStop(1,"#a16207"),n.fillStyle=o,n.beginPath(),n.arc(s,a,9,0,Math.PI*2),n.fill(),n.fillStyle="#713f12",n.beginPath(),n.arc(s+3,a-2,1.8,0,Math.PI*2),n.fill()}n.restore()}},"turkey-samsun":{init(n){let e=zr(n,2,200),t=e[e.length-1]||{x:640,y:540};n.mapData={pidesCollected:0,buffTimer:0,pides:e.map(i=>({x:i.x-16,y:i.y-32,w:32,h:22,collected:!1})),steamVent:{x:Ki(t.x-18,280,960),y:t.y,w:38,active:!1}}},update(n,e){let t=n.mapData;t.buffTimer>0&&(t.buffTimer=Math.max(0,t.buffTimer-e));let i=n.elapsed%2.6;t.steamVent.active=i>1.1&&i<2.2;for(let r of t.pides)if(!r.collected){for(let s of n.players)if(s.alive&&kt(s.x,s.y,s.w,s.h,r.x,r.y,r.w,r.h)){r.collected=!0,t.pidesCollected+=1,t.buffTimer=4.6,n.events.push({type:"polarity",value:!0}),xi(n,`\u{1F956} Samsun Pidesi al\u0131nd\u0131! (+H\u0131z & G\xFC\xE7 ${t.pidesCollected}/${t.pides.length})`);break}}},playerPhysics(n,e){let t=n.mapData,i=Ft();t.buffTimer>0&&(i.speedMult=1.18,i.accelMult=1.25);let r=t.steamVent;return r?.active&&kt(e.x,e.y,e.w,e.h,r.x,r.y-125,r.w,125)&&(i.extraForceY=-510),i},hudStatus(n){let e=n.mapData;return{icon:"\u{1F956}",label:"SAMSUN P\u0130DES\u0130",valueText:e.buffTimer>0?`BEREKET (${e.pidesCollected}/${e.pides.length})`:`${e.pidesCollected}/${e.pides.length}`,tone:e.buffTimer>0?"active":"info"}},render(n,e,t){let i=e.mapData;n.save();let r=i.steamVent;if(r&&(n.fillStyle="#334155",n.fillRect(r.x,r.y-8,r.w,8),r.active)){let s=n.createLinearGradient(0,r.y-120,0,r.y);s.addColorStop(0,"rgba(226, 232, 240, 0)"),s.addColorStop(1,"rgba(226, 232, 240, 0.45)"),n.fillStyle=s,n.fillRect(r.x+6,r.y-120,r.w-12,114)}for(let s of i.pides){if(s.collected)continue;let a=s.x+16,o=s.y+11+Math.sin(t*4.2)*3;n.fillStyle="rgba(52, 211, 153, 0.25)",n.beginPath(),n.arc(a,o,20,0,Math.PI*2),n.fill(),n.fillStyle="#d97706",n.beginPath(),n.moveTo(a-16,o),n.quadraticCurveTo(a,o-10,a+16,o),n.quadraticCurveTo(a,o+10,a-16,o),n.fill(),n.fillStyle="#fde047",n.beginPath(),n.ellipse(a,o,9.5,4,0,0,Math.PI*2),n.fill()}n.restore()}}},yh={rainforest:{label:"Elastik Bambu Sekmesi (+Z\u0131plama)",rules:{bounceWalls:!0,jumpVelocityMult:1.12}},desert:{label:"Serap Bo\u015Fluk D\xF6ng\xFCs\xFC (Tavan Portal\u0131)",rules:{voidWrap:!0}},glacier:{label:"Kutup \u015Ea\u015F\u0131rtmacas\u0131 (Z\u0131plamada Ters Y\xF6n)",rules:{toggleInvertOnJump:!0}},volcano:{label:"Termal Tavan S\u0131\xE7ramas\u0131 (Z\u0131plamada \xC7ekim Tersi)",rules:{jumpFlipsGravity:!0}},foundry:{label:"Manyetik \u015Eok (Sekme + Ters Y\xF6n)",rules:{bounceWalls:!0,toggleInvertOnJump:!0}},"ottoman-palace":{label:"Ayna Saray \u0130ll\xFCzyonu (Yatay Ayna)",rules:{mirrorCameraX:!0}},"ottoman-bosphorus":{label:"Bo\u011Faz Portal\u0131 (Bo\u015Fluktan Tavana)",rules:{voidWrap:!0}},"ottoman-galata":{label:"Hezarfen S\xFCper Kanat (+Sekme & S\u0131\xE7rama)",rules:{jumpVelocityMult:1.18,bounceWalls:!0}},"ottoman-observatory":{label:"Kozmik Tavan S\u0131\xE7ramas\u0131 (Z\u0131plamada Antigravite)",rules:{jumpFlipsGravity:!0}},"ottoman-shipyard":{label:"\u015Eahi Kaos Kalkan\u0131 (Portal + Ters Y\xF6n)",rules:{voidWrap:!0,toggleInvertOnJump:!0}},"turkey-amasya":{label:"Har\u015Fena Yank\u0131s\u0131 (+Z\u0131plama & Duvar Sekmesi)",rules:{bounceWalls:!0,jumpVelocityMult:1.14}},"turkey-yozgat":{label:"Saat Kulesi Ters Zaman\u0131 (Z\u0131plamada Ters Y\xF6n)",rules:{toggleInvertOnJump:!0}},"turkey-erzurum":{label:"Paland\xF6ken Ters \xC7ekim (Z\u0131plamada Antigravite)",rules:{jumpFlipsGravity:!0}},"turkey-corum":{label:"Hitit Portal M\xFChr\xFC (Bo\u015Fluktan Tavana)",rules:{voidWrap:!0}},"turkey-samsun":{label:"Karadeniz Ayna Dalgas\u0131 (Ayna + Sekme)",rules:{mirrorCameraX:!0,bounceWalls:!0}}};function gh(n){let e=n.currentMap||n.biome,t=yh[e];if(t){n.physicsRules||(n.physicsRules={});for(let[i,r]of Object.entries(t.rules))n.physicsRules[i]=r}}function vh(n){let e=tr[n.currentMap||n.biome];e?.init&&e.init(n);let t=n.levelDef?.spawn?.x??64,i=n.levelDef?.spawn?.y??514,r=n.platforms.find(o=>o.solid&&o.x<=t+30&&o.x+o.w>=t+110&&o.y>=i)||n.platforms[0],s=r?Ki(t+102,r.x+86,Math.max(r.x+86,r.x+r.w-36)):t+102,a=r?r.y:560;n.mapData.anomalyOrb={x:Math.round(s),y:Math.max(90,a-108),w:24,h:24,collected:!1},n.chaosMode&&(gh(n),n.mapData.anomalyOrb.collected=!0)}function _h(n,e,t){let i=tr[n.currentMap||n.biome];i?.update&&i.update(n,e,t);let r=n.mapData?.anomalyOrb;if(r&&!r.collected){for(let s of n.players)if(s.alive&&kt(s.x,s.y,s.w,s.h,r.x,r.y,r.w,r.h)){r.collected=!0,gh(n);let a=n.currentMap||n.biome,o=yh[a]?.label||"Kaos Fizi\u011Fi";n.events.push({type:"polarity",value:!0}),xi(n,`\u{1F300} Fizik De\u011Fi\u015Fti: ${o}!`,2.6);break}}}function xh(n,e){let t=tr[n.currentMap||n.biome];return t?.playerPhysics?t.playerPhysics(n,e):Ft()}function Bs(n){let e=tr[n.currentMap||n.biome];return e?.worldTimeScale?e.worldTimeScale(n):1}function bh(n){let e=tr[n.currentMap||n.biome];return e?.hudStatus?e.hudStatus(n):null}function Sh(n,e,t){let i=tr[e.currentMap||e.biome];i?.render&&i.render(n,e,t);let r=e.mapData?.anomalyOrb;if(r&&!r.collected){n.save();let s=r.x+r.w/2,a=r.y+r.h/2+Math.sin(t*4.2)*3.5,o=n.createRadialGradient(s,a,3,s,a,22);o.addColorStop(0,"rgba(192, 132, 252, 0.78)"),o.addColorStop(.55,"rgba(251, 191, 36, 0.35)"),o.addColorStop(1,"rgba(0, 0, 0, 0)"),n.fillStyle=o,n.beginPath(),n.arc(s,a,22,0,Math.PI*2),n.fill(),n.translate(s,a),n.rotate(t*2.2),n.strokeStyle="#fde047",n.lineWidth=1.8,n.strokeRect(-7,-7,14,14),n.fillStyle="#c084fc",n.beginPath(),n.arc(0,0,5,0,Math.PI*2),n.fill(),n.restore()}if(e.physicsRules?.voidWrap){n.save();let s=.45+Math.sin(t*5.5)*.25;n.fillStyle=`rgba(56, 189, 248, ${s})`,n.fillRect(0,0,1280,4),n.fillStyle=`rgba(192, 132, 252, ${s})`,n.fillRect(0,716,1280,4),n.restore()}}function vf(n){return JSON.parse(JSON.stringify(n))}function Zi(n,e,t,i,r,s,a,o){return n<r+a&&n+t>r&&e<s+o&&e+i>s}function Mh(n,e,t,i,r,s,a){let o=Math.max(i,Math.min(n,i+s)),l=Math.max(r,Math.min(e,r+a)),c=n-o,u=e-l;return c*c+u*u<t*t}function _f(n){return 1-Math.pow(1-n,3)}function xf(n){return n<.5?2*n*n:1-Math.pow(-2*n+2,2)/2}function il(n,e){let t=Math.max(0,Math.min(1,n));return e==="linear"?t:e==="inOut"?xf(t):_f(t)}function Fn(n,e={}){let t=vf(n),i=(t.platforms||[]).map((h,p)=>({id:h.id||`plat_${p}`,x:h.x,y:h.y,w:h.w,h:h.h,surface:h.surface||"normal",solid:h.solid!==void 0?h.solid:h.surface!=="fake",visible:h.visible!==void 0?h.visible:!0,crumbleDelay:h.crumbleDelay??.28,crumbleTimer:h.crumbleDelay??.28,crumbling:!1,falling:!1,fallVy:0,broken:!1,bounceVy:h.bounceVy??-920,bounceAnim:0,conveyorSpeed:h.conveyorSpeed??145,patrol:h.patrol||null,startX:h.x,startY:h.y,moveAnim:null,dx:0,dy:0,shakeTimer:0})),r=(t.hazards||[]).map((h,p)=>{let f=h.active!==void 0?h.active:!h.hidden,y=h.visible!==void 0?h.visible:!h.hidden;return{id:h.id||`haz_${p}`,type:h.type,x:h.x,y:h.y,w:h.w??36,h:h.h??24,startX:h.x,startY:h.y,dir:h.dir||"up",active:f,visible:y,hidden:!!h.hidden,popProgress:f?1:0,vx:h.vx??0,vy:h.vy??0,gravity:h.gravity??0,patrol:h.patrol||null,slamCycle:h.slamCycle||null,slamState:h.slamCycle?{phase:"waitTop",timer:h.slamCycle.initialDelay??.4}:null,moveAnim:null,stopOnGround:!!h.stopOnGround,shatterOnGround:!!h.shatterOnGround,stopAtX:h.stopAtX??null,stopAtY:h.stopAtY??null,hitGround:!1,angle:0,timeOffset:h.timeOffset??0}}),s=(t.triggers||[]).map((h,p)=>({id:h.id||`trig_${p}`,when:h.when||{},actions:h.actions||[],once:h.once!==void 0?h.once:!0,delay:h.delay??0,fired:!1,wasTrue:!1})),a=t.spawn||{x:70,y:500},o=t.door||{x:1160,y:528},l=e.mode==="2p"?"2p":"1p",c=(h,p,f,y,m="explorer")=>({id:h,x:p,y:f,w:$o,h:Jc,vx:0,vy:0,facing:1,grounded:!1,groundPlatformId:null,groundSurface:"normal",coyoteTimer:0,jumpBufferTimer:0,fromBounce:!1,runPhase:0,stepDist:0,squashX:1,squashY:1,deadReason:null,alive:!0,scarfColor:y,character:m,voidWrapCount:0,prevJumpHeld:!1,pendingJumpPress:!1,pendingJumpRelease:!1}),u=[c(1,a.x,a.y,e.p1Scarf||"#ef4444",e.p1Character||"explorer")];if(l==="2p"){let h=Math.min(1280-$o-8,a.x+28);u.push(c(2,h,a.y,e.p2Scarf||"#38bdf8",e.p2Character||"explorer"))}let d={levelDef:t,id:t.id,campaign:t.campaign||"classic",currentMode:t.campaign||"classic",currentMap:t.biome,chapter:t.chapter,stage:t.stage,difficulty:t.difficulty||"orta",biome:t.biome,title:t.title,subtitle:t.subtitle||"",darkness:!!t.darkness,mode:l,status:"playing",winnerId:null,respawnTimer:0,elapsed:0,accumulator:0,deaths:e.deaths??0,jumpCount:0,invertControls:!!t.invertControls,gravityScale:t.gravityScale??1,windForceX:t.windForceX??0,chaosMode:!!e.chaosMode,physicsRules:{voidWrap:!!t.physicsRules?.voidWrap,jumpFlipsGravity:!!t.physicsRules?.jumpFlipsGravity,toggleInvertOnJump:!!t.physicsRules?.toggleInvertOnJump,bounceWalls:!!t.physicsRules?.bounceWalls,mirrorCameraX:!!t.physicsRules?.mirrorCameraX,jumpVelocityMult:t.physicsRules?.jumpVelocityMult??1},shakeTime:0,shakeIntensity:0,toast:null,players:u,player:u[0],door:{x:o.x,y:o.y,w:o.w??jc,h:o.h??Qc,active:o.active!==void 0?o.active:!0,moveAnim:null,pulse:0},risingHazard:t.risingHazard?{type:t.risingHazard.type||"lava",y:t.risingHazard.startY??750,startY:t.risingHazard.startY??750,minY:t.risingHazard.minY??140,speed:t.risingHazard.speed??44,active:!!t.risingHazard.active}:null,platforms:i,hazards:r,triggers:s,visualZones:t.visualZones||[],mapData:{},pendingActions:[],events:[]};return vh(d),d}function ir(n,e){return n.platforms.find(t=>t.id===e)}function tl(n,e){return n.hazards.find(t=>t.id===e)}function wh(n,e){switch(e.type){case"dropPlatform":{let t=ir(n,e.targetId);t&&!t.falling&&(t.falling=!0,e.keepSolid||(t.solid=!1),t.fallVy=e.initialVy??40,n.events.push({type:"crumble",x:t.x,y:t.y,w:t.w,h:t.h}),n.events.push({type:"trap",subtype:"drop"}));break}case"slidePlatform":{let t=ir(n,e.targetId);t&&(t.moveAnim={fromX:t.x,fromY:t.y,toX:e.toX??t.x,toY:e.toY??t.y,elapsed:0,duration:Math.max(.01,e.duration??.35),ease:e.ease||"outCubic"},e.solid!==void 0&&(t.solid=e.solid),e.visible!==void 0&&(t.visible=e.visible),n.events.push({type:"trap",subtype:"slide"}));break}case"setPlatform":{let t=ir(n,e.targetId);t&&(e.solid!==void 0&&(t.solid=e.solid),e.visible!==void 0&&(t.visible=e.visible),e.surface!==void 0&&(t.surface=e.surface),e.conveyorSpeed!==void 0&&(t.conveyorSpeed=e.conveyorSpeed),e.x!==void 0&&(t.x=e.x),e.y!==void 0&&(t.y=e.y),e.w!==void 0&&(t.w=e.w),e.h!==void 0&&(t.h=e.h));break}case"activateHazard":{let t=tl(n,e.targetId);t&&(t.active=!0,t.visible=!0,t.hidden=!1,t.hitGround=!1,e.popInstant&&(t.popProgress=1),e.vx!==void 0&&(t.vx=e.vx),e.vy!==void 0&&(t.vy=e.vy),e.gravity!==void 0&&(t.gravity=e.gravity),e.stopAtX!==void 0&&(t.stopAtX=e.stopAtX),e.stopAtY!==void 0&&(t.stopAtY=e.stopAtY),n.events.push({type:"trap",subtype:t.type,x:t.x+t.w/2,y:t.y+t.h/2}));break}case"retractHazard":{let t=tl(n,e.targetId);t&&(t.active=!1,t.visible=!1,t.popProgress=0);break}case"moveHazard":{let t=tl(n,e.targetId);t&&(t.active=!0,t.visible=!0,t.popProgress=1,t.moveAnim={fromX:t.x,fromY:t.y,toX:e.toX??t.x,toY:e.toY??t.y,elapsed:0,duration:Math.max(.01,e.duration??.45),ease:e.ease||"outCubic"});break}case"moveDoor":{n.door.moveAnim={fromX:n.door.x,fromY:n.door.y,toX:e.toX??n.door.x,toY:e.toY??n.door.y,elapsed:0,duration:Math.max(.01,e.duration??.42),ease:e.ease||"outCubic"},n.events.push({type:"trap",subtype:"doorMove"});break}case"setInvertControls":{let t=!!e.value;n.invertControls!==t&&(n.invertControls=t,n.events.push({type:"polarity",value:t}));break}case"setGravityScale":{let t=e.value<0?-1:1;n.gravityScale!==t&&(n.gravityScale=t,n.player.grounded=!1,n.player.groundPlatformId=null,n.events.push({type:"gravityFlip",value:t}));break}case"setWind":{n.windForceX=e.forceX??0,n.events.push({type:"wind",forceX:n.windForceX});break}case"setPhysicsRule":{n.physicsRules&&e.rule&&e.rule in n.physicsRules&&(n.physicsRules[e.rule]=e.value,n.events.push({type:"polarity",value:!!e.value}));break}case"startRisingHazard":{n.risingHazard&&(n.risingHazard.active=!0,e.speed!==void 0&&(n.risingHazard.speed=e.speed),e.minY!==void 0&&(n.risingHazard.minY=e.minY),n.events.push({type:"trap",subtype:"rising"}));break}case"shake":{n.shakeIntensity=Math.max(n.shakeIntensity,e.intensity??7),n.shakeTime=Math.max(n.shakeTime,e.duration??.25),n.events.push({type:"shake",intensity:e.intensity??7,duration:e.duration??.25});break}case"toast":{n.toast={text:e.text,timer:e.duration??2.4,maxTimer:e.duration??2.4},n.events.push({type:"toast",text:e.text});break}default:break}}function bf(n,e,t){let i=e.x+e.w/2,r=e.y+e.h/2;if(t.enterZone){let s=t.enterZone;if(!Zi(e.x,e.y,e.w,e.h,s.x,s.y,s.w,s.h))return!1}if(t.playerXGreater!==void 0&&i<t.playerXGreater||t.playerXLess!==void 0&&i>t.playerXLess||t.playerYGreater!==void 0&&r<t.playerYGreater||t.playerYLess!==void 0&&r>t.playerYLess)return!1;if(t.nearDoor!==void 0){let s=n.door.x+n.door.w/2,a=n.door.y+n.door.h/2;if(Math.hypot(i-s,r-a)>t.nearDoor)return!1}if(t.onTouchPlatform!==void 0&&e.groundPlatformId!==t.onTouchPlatform){let s=ir(n,t.onTouchPlatform);if(!s||!Zi(e.x,e.y,e.w,e.h,s.x,s.y-1,s.w,s.h+2))return!1}return!0}function Sf(n,e){if(e.jumpCount!==void 0&&n.jumpCount<e.jumpCount||e.afterTime!==void 0&&n.elapsed<e.afterTime)return!1;for(let t of n.players)if(t.alive&&bf(n,t,e))return!0;return!1}function Mf(n,e){for(let t of n.platforms){let i=t.x,r=t.y;if(t.bounceAnim>0&&(t.bounceAnim=Math.max(0,t.bounceAnim-e*5)),t.crumbling&&!t.falling&&(t.crumbleTimer-=e,t.shakeTimer+=e*45,t.crumbleTimer<=0&&(t.falling=!0,t.solid=!1,t.fallVy=30,n.events.push({type:"crumble",x:t.x,y:t.y,w:t.w,h:t.h}))),t.falling)t.fallVy=Math.min(900,t.fallVy+1500*e),t.y+=t.fallVy*e,t.y>860&&(t.visible=!1);else if(t.moveAnim){let s=t.moveAnim;s.elapsed+=e;let a=il(s.elapsed/s.duration,s.ease);t.x=s.fromX+(s.toX-s.fromX)*a,t.y=s.fromY+(s.toY-s.fromY)*a,s.elapsed>=s.duration&&(t.x=s.toX,t.y=s.toY,t.moveAnim=null)}else if(t.patrol){let s=t.patrol,a=n.elapsed*(s.speed??1.5)+(s.phase??0),o=Math.sin(a)*(s.range??60);s.axis==="x"?t.x=t.startX+o:t.y=t.startY+o}t.dx=t.x-i,t.dy=t.y-r}}function wf(n,e){if(n.door.pulse+=e*3.5,n.door.moveAnim){let t=n.door.moveAnim;t.elapsed+=e;let i=il(t.elapsed/t.duration,t.ease);n.door.x=t.fromX+(t.toX-t.fromX)*i,n.door.y=t.fromY+(t.toY-t.fromY)*i,t.elapsed>=t.duration&&(n.door.x=t.toX,n.door.y=t.toY,n.door.moveAnim=null)}}function Tf(n,e){for(let t of n.hazards)if(t.type==="saw"&&(t.angle+=e*11),!!t.active){if(t.popProgress<1&&(t.popProgress=Math.min(1,t.popProgress+e*9)),t.moveAnim){let i=t.moveAnim;i.elapsed+=e;let r=il(i.elapsed/i.duration,i.ease);t.x=i.fromX+(i.toX-i.fromX)*r,t.y=i.fromY+(i.toY-i.fromY)*r,i.elapsed>=i.duration&&(t.x=i.toX,t.y=i.toY,t.moveAnim=null);continue}if(t.slamCycle&&t.slamState){let i=t.slamCycle,r=t.slamState;r.timer-=e,r.phase==="waitTop"&&r.timer<=0?r.phase="slam":r.phase==="slam"?(t.y+=(i.downSpeed??780)*e,t.y>=i.slamY&&(t.y=i.slamY,r.phase="waitBottom",r.timer=i.waitBottom??.35,n.events.push({type:"slam",x:t.x+t.w/2,y:t.y+t.h}))):r.phase==="waitBottom"&&r.timer<=0?r.phase="rise":r.phase==="rise"&&(t.y-=(i.upSpeed??220)*e,t.y<=i.restY&&(t.y=i.restY,r.phase="waitTop",r.timer=i.waitTop??.65));continue}if(t.patrol){let i=t.patrol,r=n.elapsed*(i.speed??2)+(i.phase??0),s=Math.sin(r)*(i.range??80);i.axis==="x"?t.x=t.startX+s:t.y=t.startY+s;continue}if(!t.hitGround){if(t.gravity&&(t.vy=Math.min(1150,t.vy+t.gravity*e)),t.x+=t.vx*e,t.y+=t.vy*e,t.stopAtX!==null&&(t.vx>0&&t.x>=t.stopAtX||t.vx<0&&t.x<=t.stopAtX)&&(t.x=t.stopAtX,t.vx=0),t.stopAtY!==null&&(t.vy>0&&t.y>=t.stopAtY||t.vy<0&&t.y<=t.stopAtY)&&(t.y=t.stopAtY,t.vy=0,t.hitGround=!0,t.shatterOnGround?(t.active=!1,t.visible=!1,n.events.push({type:"shatter",x:t.x+t.w/2,y:t.y+t.h})):t.stopOnGround&&n.events.push({type:"slam",x:t.x+t.w/2,y:t.y+t.h})),(t.stopOnGround||t.shatterOnGround)&&t.vy>0){for(let i of n.platforms)if(i.solid&&Zi(t.x,t.y,t.w,t.h,i.x,i.y,i.w,i.h)){t.y=i.y-t.h,t.vy=0,t.vx=0,t.hitGround=!0,t.shatterOnGround?(t.active=!1,t.visible=!1,n.events.push({type:"shatter",x:t.x+t.w/2,y:t.y+t.h})):n.events.push({type:"slam",x:t.x+t.w/2,y:t.y+t.h});break}}t.type==="spear"&&(t.x<-140||t.x>1420||t.y<-140||t.y>860)&&(t.active=!1,t.visible=!1)}}if(n.risingHazard&&n.risingHazard.active){let t=n.risingHazard;t.y=Math.max(t.minY,t.y-t.speed*e)}}function Ef(n,e){for(let t of n.hazards){if(!t.active||t.popProgress<.2)continue;if(t.type==="saw"){let o=t.x+t.w/2,l=t.y+t.h/2,c=Math.min(t.w,t.h)*.41;if(Mh(o,l,c,e.x,e.y,e.w,e.h))return t;continue}if(t.type==="boulder"){let o=t.x+t.w/2,l=t.y+t.h/2,c=Math.min(t.w,t.h)*.42;if(Mh(o,l,c,e.x,e.y,e.w,e.h))return t;continue}if(t.type==="spikes"||t.type==="icicle"){let o=Math.min(5,t.w*.18),l=Math.min(4,t.h*.2),c=t.x+o,u=Math.max(4,t.w-o*2),d=t.dir==="down"?t.y:t.y+l,h=Math.max(4,t.h-l);if(Zi(e.x,e.y,e.w,e.h,c,d,u,h))return t;continue}let i=t.x+3,r=t.y+3,s=Math.max(4,t.w-6),a=Math.max(4,t.h-6);if(Zi(e.x,e.y,e.w,e.h,i,r,s,a))return t}return n.risingHazard&&n.risingHazard.active&&e.y+e.h>n.risingHazard.y+5?{type:n.risingHazard.type}:null}function Th(n,e,t){if(!e.alive||n.status!=="playing")return;e.alive=!1,e.deadReason=t,n.shakeIntensity=Math.max(n.shakeIntensity,9),n.shakeTime=Math.max(n.shakeTime,.28),n.events.push({type:"death",playerId:e.id,reason:t,x:e.x+e.w/2,y:e.y+e.h/2});let i=n.players.find(r=>r.alive);i?n.player=i:(n.player=e,n.status="dying",n.respawnTimer=dh,n.deaths+=1)}function Af(n,e,t,i){if(!e.alive)return;let r=n.gravityScale>=0?1:-1,s=xh(n,e);if(e.grounded&&e.groundPlatformId){let y=ir(n,e.groundPlatformId);y&&y.solid&&(e.x+=y.dx,e.y+=y.dy,y.surface==="conveyor"&&(e.x+=y.conveyorSpeed*i))}let a=(t.right?1:0)-(t.left?1:0);n.invertControls&&(a=-a),a!==0&&(e.facing=a);let o=a*th*s.speedMult+n.windForceX+s.extraForceX,l;e.grounded?l=e.groundSurface==="ice"?rh:ih:l=ah,l*=s.accelMult;let c;if(e.grounded?c=e.groundSurface==="ice"?sh:nh:c=oh,c*=s.frictionMult,a!==0||n.windForceX!==0||s.extraForceX!==0){let y=a!==0?l:c;e.vx<o?e.vx=Math.min(o,e.vx+y*i):e.vx>o&&(e.vx=Math.max(o,e.vx-y*i))}else e.vx>0?e.vx=Math.max(0,e.vx-c*i):e.vx<0&&(e.vx=Math.min(0,e.vx+c*i));if(e.grounded?e.coyoteTimer=ch:e.coyoteTimer=Math.max(0,e.coyoteTimer-i),t.jumpPressed?e.jumpBufferTimer=hh:e.jumpBufferTimer=Math.max(0,e.jumpBufferTimer-i),e.jumpBufferTimer>0&&e.coyoteTimer>0&&!e.fromBounce){let y=(n.physicsRules?.jumpVelocityMult??1)*(s.jumpMult??1);e.vy=jo*y*r,e.grounded=!1,e.fromBounce=!1,e.groundPlatformId=null,e.coyoteTimer=0,e.jumpBufferTimer=0,e.squashX=.78,e.squashY=1.24,n.jumpCount+=1,n.events.push({type:"jump",x:e.x+e.w/2,y:r>0?e.y+e.h:e.y}),n.physicsRules?.jumpFlipsGravity&&(n.gravityScale=-r,e.vy=jo*.45*y*r,n.events.push({type:"gravityFlip",value:n.gravityScale})),n.physicsRules?.toggleInvertOnJump&&(n.invertControls=!n.invertControls,n.events.push({type:"polarity",value:n.invertControls}))}e.fromBounce&&(r>0&&e.vy>=0||r<0&&e.vy<=0)&&(e.fromBounce=!1),t.jumpReleased&&!e.fromBounce&&(r>0&&e.vy<0||r<0&&e.vy>0)&&(e.vy*=lh),e.vy+=(eh*s.gravityMult*r+s.extraForceY)*i,r>0?e.vy=Math.min(Jo,e.vy):e.vy=Math.max(-Jo,e.vy),e.x+=e.vx*i,e.x<0?(e.x=0,e.vx<0&&(n.physicsRules?.bounceWalls&&Math.abs(e.vx)>90?(e.vx=-e.vx*.78,n.events.push({type:"bounce",x:e.x,y:e.y+e.h/2})):e.vx=0)):e.x+e.w>1280&&(e.x=1280-e.w,e.vx>0&&(n.physicsRules?.bounceWalls&&Math.abs(e.vx)>90?(e.vx=-e.vx*.78,n.events.push({type:"bounce",x:e.x+e.w,y:e.y+e.h/2})):e.vx=0));for(let y of n.platforms)if(y.solid&&Zi(e.x,e.y,e.w,e.h,y.x,y.y,y.w,y.h)){let m=e.vx;m>0?e.x=y.x-e.w:m<0&&(e.x=y.x+y.w),n.physicsRules?.bounceWalls&&Math.abs(m)>90?(e.vx=-m*.78,n.events.push({type:"bounce",x:m>0?y.x:y.x+y.w,y:e.y+e.h/2})):e.vx=0}let u=e.grounded,d=Math.abs(e.vy);e.grounded=!1,e.groundPlatformId=null,e.y+=e.vy*i;let h=null;for(let y of n.platforms)y.solid&&Zi(e.x,e.y,e.w,e.h,y.x,y.y,y.w,y.h)&&(e.vy>0?(e.y=y.y-e.h,e.vy=0,r>0&&(y.surface==="bouncy"?h=y:(e.grounded=!0,e.groundPlatformId=y.id,e.groundSurface=y.surface))):e.vy<0&&(e.y=y.y+y.h,e.vy=0,r<0&&(y.surface==="bouncy"?h=y:(e.grounded=!0,e.groundPlatformId=y.id,e.groundSurface=y.surface))));if(h?(e.vy=(h.bounceVy||-920)*r,e.grounded=!1,e.fromBounce=!0,e.coyoteTimer=0,e.jumpBufferTimer=0,e.groundPlatformId=null,h.bounceAnim=1,e.squashX=.72,e.squashY=1.32,n.events.push({type:"bounce",x:e.x+e.w/2,y:r>0?e.y+e.h:e.y})):!u&&e.grounded&&(e.fromBounce=!1,e.voidWrapCount=0,e.squashX=1.22,e.squashY=.8,d>180&&n.events.push({type:"land",x:e.x+e.w/2,y:r>0?e.y+e.h:e.y,surface:e.groundSurface,speed:d})),e.grounded&&e.groundPlatformId){let y=ir(n,e.groundPlatformId);y&&y.surface==="crumble"&&!y.crumbling&&(y.crumbling=!0)}for(let y of n.platforms)y.surface==="fake"&&!y.broken&&Zi(e.x,e.y,e.w,e.h,y.x,y.y,y.w,y.h)&&(y.broken=!0,y.visible=!1,y.solid=!1,n.events.push({type:"mirage",x:y.x,y:y.y,w:y.w,h:y.h}));e.squashX+=(1-e.squashX)*Math.min(1,i*14),e.squashY+=(1-e.squashY)*Math.min(1,i*14),e.grounded&&Math.abs(e.vx)>25?(e.runPhase+=i*(Math.abs(e.vx)*.042),e.stepDist+=Math.abs(e.vx)*i,e.stepDist>=72&&(e.stepDist=0,n.events.push({type:"footstep",x:e.x+e.w/2,y:r>0?e.y+e.h:e.y,surface:e.groundSurface}))):e.stepDist=45;let p=r>0&&e.y>744,f=r<0&&e.y+e.h<-50;n.physicsRules?.voidWrap&&(p||f)&&e.voidWrapCount<3?(e.voidWrapCount+=1,p?(e.y=-e.h+10,e.vy=Math.min(e.vy,380)):(e.y=710,e.vy=Math.max(e.vy,-380)),e.fromBounce=!1,n.toast={text:"\u{1F300} Bo\u015Fluktan d\xFC\u015Ft\xFCn \u2014 TERS TARAFTAN GELD\u0130N!",timer:2.1,maxTimer:2.1},n.events.push({type:"voidWrap",x:e.x+e.w/2,y:p?24:696})):(e.y>770||e.y+e.h<-90)&&Th(n,e,"fall")}function Rf(n,e){for(let t=n.pendingActions.length-1;t>=0;t-=1){let i=n.pendingActions[t];i.timer-=e,i.timer<=0&&(wh(n,i.action),n.pendingActions.splice(t,1))}for(let t of n.triggers){if(t.once&&t.fired)continue;let i=Sf(n,t.when);if(i&&!t.wasTrue){t.fired=!0;for(let r of t.actions){let s=r.delay??t.delay??0;s>0?n.pendingActions.push({timer:s,action:r}):wh(n,r)}}t.wasTrue=i}}function Cf(n,e,t){if(n.shakeTime>0&&(n.shakeTime=Math.max(0,n.shakeTime-t),n.shakeTime===0&&(n.shakeIntensity=0)),n.toast&&(n.toast.timer-=t,n.toast.timer<=0&&(n.toast=null)),n.status==="dying"){n.respawnTimer=Math.max(0,n.respawnTimer-t);return}if(n.status==="cleared")return;n.elapsed+=t;let i=t*Bs(n);Rf(n,t),Mf(n,i),wf(n,i),Tf(n,i),_h(n,t,e);for(let s=0;s<n.players.length;s+=1){let a=n.players[s];if(!a.alive||(Af(n,a,e[s]||{},t),!a.alive||n.status!=="playing"))continue;let o=Ef(n,a);o&&Th(n,a,o.type||"hazard")}if(n.status!=="playing")return;let r=n.door;if(r.active){for(let s of n.players)if(s.alive&&Zi(s.x,s.y,s.w,s.h,r.x+8,r.y+8,r.w-16,r.h-8)){n.status="cleared",n.winnerId=s.id,n.events.push({type:"clear",playerId:s.id,x:r.x+r.w/2,y:r.y+r.h/2});break}}}function Eh(n,e,t){let i=Math.min(.1,Math.max(0,t));n.accumulator+=i;let s=e&&(e.p1!==void 0||e.p2!==void 0)?[e.p1||{},e.p2||{}]:[e||{}];for(let a=0;a<n.players.length;a+=1){let o=n.players[a],l=s[a]||{},c=!!l.jump,u=l.jumpPressed!==void 0?!!l.jumpPressed:c&&!o.prevJumpHeld,d=l.jumpReleased!==void 0?!!l.jumpReleased:!c&&o.prevJumpHeld;o.prevJumpHeld=c,u&&(o.pendingJumpPress=!0),d&&(o.pendingJumpRelease=!0)}for(;n.accumulator>=Fs;){let a=n.players.map((o,l)=>{let c=s[l]||{},u=!1,d=!1;return o.pendingJumpPress&&o.pendingJumpRelease?(u=!0,d=!1,o.pendingJumpPress=!1):(u=o.pendingJumpPress,d=o.pendingJumpRelease,o.pendingJumpPress=!1,o.pendingJumpRelease=!1),{left:!!c.left,right:!!c.right,jump:!!c.jump,jumpPressed:u,jumpReleased:d,ability:!!c.ability}});Cf(n,a,Fs),n.accumulator-=Fs}}var Ah=[{id:"1-1",chapter:1,stage:1,difficulty:"kolay",biome:"rainforest",title:"Sadece Kap\u0131ya Y\xFCr\xFC",subtitle:"Orman yolu gayet sa\u011Flam g\xF6r\xFCn\xFCyor...",spawn:{x:64,y:514},door:{x:1170,y:488},platforms:[{id:"g1",x:0,y:560,w:390,h:160},{id:"trap1",x:390,y:560,w:110,h:160},{id:"g2",x:500,y:560,w:340,h:160},{id:"trap2",x:840,y:560,w:120,h:160},{id:"g3",x:960,y:560,w:320,h:160}],hazards:[],triggers:[{when:{playerXGreater:360},actions:[{type:"dropPlatform",targetId:"trap1"},{type:"shake",intensity:6,duration:.22},{type:"toast",text:"Zemin biraz gev\u015Fekmi\u015F.",duration:2}]},{when:{playerXGreater:810},actions:[{type:"dropPlatform",targetId:"trap2"},{type:"shake",intensity:6,duration:.22}]}]},{id:"1-2",chapter:1,stage:2,difficulty:"kolay",biome:"rainforest",title:"Kayan \xC7ukur",subtitle:"K\xFC\xE7\xFCk bir hendek, b\xFCy\xFCt\xFClecek bir \u015Fey yok.",spawn:{x:64,y:514},door:{x:1170,y:488},platforms:[{id:"g1",x:0,y:560,w:390,h:160},{id:"g2",x:485,y:560,w:220,h:160},{id:"g3",x:820,y:560,w:460,h:160}],hazards:[{id:"sp1",type:"spikes",x:980,y:536,w:56,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:400},actions:[{type:"slidePlatform",targetId:"g2",toX:540,toY:560,duration:.24},{type:"toast",text:"\xC7ukur biraz geni\u015Fledi sanki!",duration:2}]},{when:{playerXGreater:895},actions:[{type:"activateHazard",targetId:"sp1"},{type:"shake",intensity:5,duration:.16}]}]},{id:"1-3",chapter:1,stage:3,difficulty:"orta",biome:"rainforest",title:"Bambu Pususu",subtitle:"Eski tap\u0131nak basamaklar\u0131 h\xE2l\xE2 tetikte.",spawn:{x:60,y:534},door:{x:1190,y:388},platforms:[{id:"t1",x:0,y:580,w:300,h:140},{id:"t2",x:360,y:520,w:260,h:200},{id:"t3",x:690,y:460,w:265,h:260},{id:"cb1",x:955,y:460,w:110,h:24,surface:"crumble",crumbleDelay:.28},{id:"t4",x:1075,y:460,w:205,h:260}],hazards:[{id:"sp1",type:"spikes",x:368,y:496,w:48,h:24,dir:"up",hidden:!0},{id:"boulder1",type:"boulder",x:445,y:-60,w:46,h:46,hidden:!0,stopOnGround:!0},{id:"sp2",type:"spikes",x:1110,y:436,w:42,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:435},actions:[{type:"activateHazard",targetId:"sp1"},{type:"toast",text:"Geri d\xF6n\xFC\u015F yok!",duration:1.9}]},{when:{playerXGreater:520},actions:[{type:"activateHazard",targetId:"boulder1",gravity:1450}]},{when:{playerXGreater:1045},actions:[{type:"activateHazard",targetId:"sp2"},{type:"shake",intensity:6,duration:.18}]}]},{id:"1-4",chapter:1,stage:4,difficulty:"orta",biome:"rainforest",title:"Ka\xE7an Tap\u0131nak Kap\u0131s\u0131",subtitle:"Hedefe yakla\u015Ft\u0131n... say\u0131l\u0131r.",spawn:{x:64,y:514},door:{x:1150,y:488},platforms:[{id:"baseL",x:0,y:560,w:420,h:160},{id:"baseM",x:490,y:560,w:280,h:160},{id:"baseR",x:840,y:560,w:440,h:160}],hazards:[{id:"midSp",type:"spikes",x:590,y:536,w:56,h:24,dir:"up",hidden:!0},{id:"rSp",type:"spikes",x:1200,y:536,w:48,h:24,dir:"up",hidden:!0}],triggers:[{when:{nearDoor:115},actions:[{type:"moveDoor",toX:96,toY:488,duration:.52},{type:"activateHazard",targetId:"midSp"},{type:"activateHazard",targetId:"rSp"},{type:"shake",intensity:8,duration:.25},{type:"toast",text:"Kap\u0131 biraz utanga\xE7 \xE7\u0131kt\u0131!",duration:2.3}]}]},{id:"1-5",chapter:1,stage:5,difficulty:"zor",biome:"rainforest",title:"Orman\u0131n Kalbi",subtitle:"Ya\u011Fmur alt\u0131nda \xE7\xFCr\xFCk asma k\xF6pr\xFCler.",spawn:{x:52,y:534},door:{x:1180,y:408},platforms:[{id:"p1",x:0,y:580,w:215,h:140},{id:"vine1",x:245,y:560,w:105,h:22,surface:"crumble",crumbleDelay:.3},{id:"p2",x:380,y:540,w:215,h:180},{id:"vine2",x:625,y:500,w:100,h:22,surface:"crumble",crumbleDelay:.28},{id:"p3",x:760,y:480,w:200,h:240},{id:"trapGap",x:960,y:480,w:95,h:240},{id:"p4",x:1055,y:480,w:225,h:240}],hazards:[{id:"b1",type:"boulder",x:430,y:-60,w:46,h:46,hidden:!0,stopOnGround:!0},{id:"s1",type:"spikes",x:838,y:456,w:48,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:475},actions:[{type:"activateHazard",targetId:"b1",gravity:1500}]},{when:{playerXGreater:785},actions:[{type:"activateHazard",targetId:"s1"}]},{when:{playerXGreater:940},actions:[{type:"dropPlatform",targetId:"trapGap"},{type:"shake",intensity:6,duration:.2},{type:"toast",text:"Son ad\u0131ma dikkat!",duration:1.8}]}]},{id:"1-6",chapter:1,stage:6,difficulty:"zor",biome:"rainforest",title:"Sarma\u015F\u0131k Ge\xE7idi",subtitle:"Kayan ta\u015Flar ve pusudaki bambu kaz\u0131klar\u0131.",spawn:{x:52,y:534},door:{x:1185,y:438},platforms:[{id:"p1",x:0,y:580,w:220,h:140},{id:"v1",x:290,y:560,w:120,h:22,surface:"crumble",crumbleDelay:.28},{id:"p2",x:480,y:540,w:185,h:180},{id:"v2",x:745,y:510,w:115,h:22,surface:"crumble",crumbleDelay:.26},{id:"p3",x:935,y:510,w:345,h:210}],hazards:[{id:"sp1",type:"spikes",x:575,y:516,w:46,h:24,dir:"up",hidden:!0},{id:"sp2",type:"spikes",x:1030,y:486,w:48,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:425},actions:[{type:"slidePlatform",targetId:"p2",toX:520,toY:540,duration:.24},{type:"toast",text:"Ta\u015F blok kay\u0131yor!",duration:1.8}]},{when:{playerXGreater:505},actions:[{type:"activateHazard",targetId:"sp1"}]},{when:{playerXGreater:950},actions:[{type:"activateHazard",targetId:"sp2"},{type:"shake",intensity:6,duration:.18}]}]},{id:"1-7",chapter:1,stage:7,difficulty:"cok-zor",biome:"rainforest",title:"Kadim Tap\u0131nak Muhaf\u0131z\u0131",subtitle:"Ya\u011Fmur orman\u0131n\u0131n son ve en ac\u0131mas\u0131z s\u0131nav\u0131!",spawn:{x:48,y:534},door:{x:1175,y:458},platforms:[{id:"p1",x:0,y:580,w:215,h:140},{id:"v1",x:290,y:550,w:120,h:22,surface:"crumble",crumbleDelay:.28},{id:"p2",x:480,y:530,w:240,h:190},{id:"trapG",x:720,y:530,w:90,h:190},{id:"p3L",x:810,y:530,w:70,h:190},{id:"pad1",x:880,y:530,w:75,h:190,surface:"normal",bounceVy:-990},{id:"p3R",x:955,y:530,w:325,h:190},{id:"altar",x:1025,y:330,w:235,h:26,solid:!1,visible:!1}],hazards:[{id:"b1",type:"boulder",x:530,y:-60,w:46,h:46,hidden:!0,stopOnGround:!0},{id:"sp1",type:"spikes",x:645,y:506,w:46,h:24,dir:"up",hidden:!0},{id:"spGuard",type:"spikes",x:1175,y:506,w:48,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:495},actions:[{type:"activateHazard",targetId:"b1",gravity:1550}]},{when:{playerXGreater:575},actions:[{type:"activateHazard",targetId:"sp1"}]},{when:{playerXGreater:700},actions:[{type:"dropPlatform",targetId:"trapG"},{type:"shake",intensity:6,duration:.2}]},{when:{nearDoor:115},actions:[{type:"setPlatform",targetId:"altar",solid:!0,visible:!0},{type:"setPlatform",targetId:"pad1",surface:"bouncy"},{type:"moveDoor",toX:1150,toY:258,duration:.45},{type:"activateHazard",targetId:"spGuard"},{type:"shake",intensity:8,duration:.25},{type:"toast",text:"Kadim kap\u0131 suna\u011Fa \xE7ekildi!",duration:2.3}]}]}];var Rh=[{id:"2-1",chapter:2,stage:1,difficulty:"kolay",biome:"desert",title:"Serap K\xF6pr\xFCs\xFC",subtitle:"S\u0131cakta g\xF6zlerin sana oyun oynayabilir.",spawn:{x:60,y:514},door:{x:1170,y:488},platforms:[{id:"d1",x:0,y:560,w:310,h:160},{id:"mirage1",x:316,y:560,w:122,h:30,surface:"fake"},{id:"d2",x:445,y:560,w:360,h:160},{id:"mirage2",x:812,y:560,w:122,h:30,surface:"fake"},{id:"d3",x:940,y:560,w:340,h:160}],hazards:[{id:"spear1",type:"spear",x:1270,y:518,w:58,h:14,dir:"left",hidden:!0}],triggers:[{when:{playerXGreater:335},actions:[{type:"toast",text:"O k\xF6pr\xFC bir serapt\u0131!",duration:2}]},{when:{playerXGreater:945},actions:[{type:"activateHazard",targetId:"spear1",vx:-530},{type:"shake",intensity:4,duration:.14}]}]},{id:"2-2",chapter:2,stage:2,difficulty:"kolay",biome:"desert",title:"Firavunun M\u0131zraklar\u0131",subtitle:"Duvarlardaki bronz deliklere fazla g\xFCvenme.",spawn:{x:60,y:514},door:{x:1180,y:488},platforms:[{id:"f1",x:0,y:560,w:620,h:160},{id:"f2",x:730,y:560,w:550,h:160}],hazards:[{id:"sp1",type:"spear",x:1270,y:522,w:58,h:14,dir:"left",hidden:!0},{id:"sp2",type:"spear",x:-60,y:472,w:58,h:14,dir:"right",hidden:!0},{id:"sp3",type:"spear",x:1270,y:522,w:58,h:14,dir:"left",hidden:!0},{id:"obelisk",type:"crusher",x:1015,y:-90,w:48,h:72,hidden:!0,stopOnGround:!0}],triggers:[{when:{playerXGreater:220},actions:[{type:"activateHazard",targetId:"sp1",vx:-580}]},{when:{playerXGreater:500},actions:[{type:"activateHazard",targetId:"sp2",vx:610},{type:"toast",text:"Dikkat! Yukar\u0131dan ve yandan!",duration:2}]},{when:{playerXGreater:810},actions:[{type:"activateHazard",targetId:"sp3",vx:-590}]},{when:{playerXGreater:920},actions:[{type:"activateHazard",targetId:"obelisk",gravity:1650},{type:"shake",intensity:6,duration:.2}]}]},{id:"2-3",chapter:2,stage:3,difficulty:"orta",biome:"desert",title:"\xC7\xF6ken S\xFCtunlar",subtitle:"Kumta\u015F\u0131 ba\u015Fl\u0131klar a\u011F\u0131rl\u0131\u011F\u0131n\u0131 ta\u015F\u0131mayacak.",spawn:{x:56,y:514},door:{x:1185,y:468},platforms:[{id:"start",x:0,y:560,w:210,h:160},{id:"c1",x:290,y:540,w:145,h:28,surface:"crumble",crumbleDelay:.35},{id:"c2",x:515,y:520,w:145,h:28,surface:"crumble",crumbleDelay:.34},{id:"c3",x:740,y:500,w:145,h:28,surface:"crumble",crumbleDelay:.32},{id:"trapEnd",x:955,y:540,w:75,h:180},{id:"endPlat",x:1030,y:540,w:250,h:180}],hazards:[],triggers:[{when:{playerXGreater:875},actions:[{type:"dropPlatform",targetId:"trapEnd"},{type:"toast",text:"Durmak yok, devam!",duration:1.8}]}]},{id:"2-4",chapter:2,stage:4,difficulty:"orta",biome:"desert",title:"Y\xFCkselen Kum",subtitle:"Batakl\u0131k kumu dolmadan yukar\u0131 t\u0131rman.",spawn:{x:54,y:574},door:{x:76,y:118},risingHazard:{type:"quicksand",startY:735,minY:225,speed:46,active:!1},platforms:[{id:"p0",x:0,y:620,w:260,h:100},{id:"p1",x:330,y:545,w:210,h:26},{id:"p2",x:610,y:470,w:210,h:26},{id:"p3",x:890,y:395,w:230,h:26},{id:"p4",x:640,y:315,w:200,h:26},{id:"p5",x:350,y:245,w:220,h:26,surface:"crumble",crumbleDelay:.38},{id:"p6",x:40,y:190,w:250,h:28}],hazards:[{id:"spBait",type:"spikes",x:1070,y:371,w:46,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:195},actions:[{type:"startRisingHazard",speed:46},{type:"toast",text:"Kum y\xFCkseliyor! Yukar\u0131 t\u0131rman!",duration:2.3}]},{when:{playerXGreater:940},actions:[{type:"activateHazard",targetId:"spBait"}]}]},{id:"2-5",chapter:2,stage:5,difficulty:"zor",biome:"desert",title:"G\xFCne\u015F Tap\u0131na\u011F\u0131 S\u0131nav\u0131",subtitle:"\xC7\xF6l\xFCn s\xFCrpriz kap\u0131s\u0131 seni bekliyor.",spawn:{x:56,y:534},door:{x:1165,y:458},platforms:[{id:"s1",x:0,y:580,w:230,h:140},{id:"mir1",x:240,y:580,w:125,h:28,surface:"fake"},{id:"s2",x:375,y:580,w:185,h:140},{id:"cr1",x:635,y:550,w:110,h:26,surface:"crumble",crumbleDelay:.3},{id:"s3L",x:820,y:530,w:60,h:190},{id:"pad1",x:880,y:530,w:72,h:190,surface:"normal",bounceVy:-990},{id:"s3R",x:952,y:530,w:328,h:190},{id:"pillar",x:1020,y:330,w:220,h:26}],hazards:[{id:"sp1",type:"spear",x:1270,y:492,w:58,h:14,dir:"left",hidden:!0}],triggers:[{when:{playerXGreater:850},actions:[{type:"activateHazard",targetId:"sp1",vx:-540}]},{when:{nearDoor:115},actions:[{type:"moveDoor",toX:1140,toY:258,duration:.48},{type:"setPlatform",targetId:"pad1",surface:"bouncy"},{type:"shake",intensity:7,duration:.22},{type:"toast",text:"G\xFCne\u015F kap\u0131s\u0131 yukar\u0131 ka\xE7t\u0131!",duration:2.2}]}]},{id:"2-6",chapter:2,stage:6,difficulty:"zor",biome:"desert",title:"Kanyon Pususu",subtitle:"Seraplar, bronz m\u0131zraklar ve d\xFC\u015Fen obelisk.",spawn:{x:52,y:514},door:{x:1185,y:488},platforms:[{id:"s1",x:0,y:560,w:240,h:160},{id:"mir1",x:248,y:560,w:120,h:28,surface:"fake"},{id:"s2",x:375,y:560,w:265,h:160},{id:"mir2",x:648,y:560,w:120,h:28,surface:"fake"},{id:"s3",x:775,y:560,w:265,h:160},{id:"trapEnd",x:1040,y:560,w:75,h:160},{id:"s4",x:1115,y:560,w:165,h:160}],hazards:[{id:"sp1",type:"spear",x:1270,y:522,w:58,h:14,dir:"left",hidden:!0},{id:"ob1",type:"crusher",x:900,y:-90,w:46,h:68,hidden:!0,stopOnGround:!0}],triggers:[{when:{playerXGreater:395},actions:[{type:"activateHazard",targetId:"sp1",vx:-580}]},{when:{playerXGreater:815},actions:[{type:"activateHazard",targetId:"ob1",gravity:1680},{type:"toast",text:"Dikkat, obelisk \xE7\xF6k\xFCyor!",duration:1.9}]},{when:{playerXGreater:1015},actions:[{type:"dropPlatform",targetId:"trapEnd"},{type:"shake",intensity:6,duration:.2}]}]},{id:"2-7",chapter:2,stage:7,difficulty:"cok-zor",biome:"desert",title:"Firavunun Laneti",subtitle:"Y\xFCkselen kumun i\xE7inde seraplara kanmadan t\u0131rman!",spawn:{x:48,y:574},door:{x:68,y:113},risingHazard:{type:"quicksand",startY:735,minY:205,speed:50,active:!1},platforms:[{id:"p0",x:0,y:620,w:250,h:100},{id:"p1",x:320,y:545,w:200,h:26,surface:"crumble",crumbleDelay:.42},{id:"p2",x:590,y:470,w:235,h:26},{id:"mirBait",x:830,y:470,w:110,h:24,surface:"fake"},{id:"p3",x:880,y:395,w:240,h:26},{id:"p4",x:625,y:315,w:195,h:26,surface:"crumble",crumbleDelay:.38},{id:"p5",x:340,y:245,w:215,h:26},{id:"p6",x:30,y:185,w:240,h:28}],hazards:[{id:"spClimb",type:"spear",x:1270,y:360,w:58,h:14,dir:"left",hidden:!0}],triggers:[{when:{playerXGreater:185},actions:[{type:"startRisingHazard",speed:50},{type:"toast",text:"Kum f\u0131rt\u0131nas\u0131 y\xFCkseliyor! H\u0131zlan!",duration:2.2}]},{when:{playerXGreater:885},actions:[{type:"activateHazard",targetId:"spClimb",vx:-560}]}]}];var Ch=[{id:"3-1",chapter:3,stage:1,difficulty:"kolay",biome:"glacier",title:"Kaygan Zemin",subtitle:"Buz \xFCzerinde fren yapmak biraz zor olabilir.",spawn:{x:60,y:514},door:{x:1170,y:488},platforms:[{id:"i1",x:0,y:560,w:420,h:160,surface:"ice"},{id:"i2",x:525,y:560,w:430,h:160,surface:"ice"},{id:"trapIce",x:955,y:560,w:105,h:160,surface:"ice"},{id:"i3",x:1060,y:560,w:220,h:160,surface:"ice"}],hazards:[],triggers:[{when:{playerXGreater:910},actions:[{type:"dropPlatform",targetId:"trapIce"},{type:"shake",intensity:6,duration:.2},{type:"toast",text:"Buz k\xFCtlesi \xE7atlad\u0131!",duration:1.9}]}]},{id:"3-2",chapter:3,stage:2,difficulty:"kolay",biome:"glacier",title:"Sark\u0131t Ya\u011Fmuru",subtitle:"Tavanlardaki buzlar pek sa\u011Flam g\xF6r\xFCnm\xFCyor.",spawn:{x:56,y:514},door:{x:1175,y:488},platforms:[{id:"ceil",x:0,y:0,w:1280,h:52,surface:"ice"},{id:"g1",x:0,y:560,w:610,h:160,surface:"ice"},{id:"gDrop",x:610,y:560,w:120,h:160,surface:"ice"},{id:"g2",x:730,y:560,w:550,h:160,surface:"ice"}],hazards:[{id:"ic1",type:"icicle",x:320,y:52,w:28,h:52,dir:"down",shatterOnGround:!0},{id:"ic2",type:"icicle",x:520,y:52,w:28,h:56,dir:"down",shatterOnGround:!0},{id:"ic3",type:"icicle",x:860,y:52,w:30,h:56,dir:"down",shatterOnGround:!0},{id:"ic4",type:"icicle",x:1030,y:52,w:30,h:56,dir:"down",shatterOnGround:!0}],triggers:[{when:{playerXGreater:215},actions:[{type:"activateHazard",targetId:"ic1",gravity:1550}]},{when:{playerXGreater:410},actions:[{type:"activateHazard",targetId:"ic2",gravity:1600}]},{when:{playerXGreater:585},actions:[{type:"dropPlatform",targetId:"gDrop"},{type:"toast",text:"Dikkat, buz yar\u0131\u011F\u0131 a\xE7\u0131ld\u0131!",duration:1.9}]},{when:{playerXGreater:760},actions:[{type:"activateHazard",targetId:"ic3",gravity:1600}]},{when:{playerXGreater:940},actions:[{type:"activateHazard",targetId:"ic4",gravity:1650}]}]},{id:"3-3",chapter:3,stage:3,difficulty:"orta",biome:"glacier",title:"Tipi F\u0131rt\u0131nas\u0131",subtitle:"R\xFCzg\xE2r\u0131n y\xF6n\xFCne g\xF6re z\u0131plamal\u0131s\u0131n.",spawn:{x:54,y:514},door:{x:1180,y:428},windForceX:-115,platforms:[{id:"p1",x:0,y:560,w:290,h:160,surface:"ice"},{id:"p2",x:375,y:530,w:215,h:190,surface:"ice"},{id:"p3",x:675,y:500,w:225,h:220,surface:"ice"},{id:"p4",x:990,y:500,w:290,h:220,surface:"ice"}],hazards:[{id:"spEnd",type:"spikes",x:1030,y:476,w:50,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:420},actions:[{type:"setWind",forceX:165},{type:"toast",text:"Tipi y\xF6n de\u011Fi\u015Ftirdi \u2014 arkandan itiyor!",duration:2.2}]},{when:{playerXGreater:880},actions:[{type:"activateHazard",targetId:"spEnd"}]}]},{id:"3-4",chapter:3,stage:4,difficulty:"orta",biome:"glacier",title:"\xC7atlayan Buzul",subtitle:"Buzul gayzerleri seni y\xFCkse\u011Fe f\u0131rlat\u0131r.",spawn:{x:54,y:534},door:{x:1175,y:308},platforms:[{id:"ceil",x:380,y:0,w:480,h:170,surface:"ice"},{id:"p1",x:0,y:580,w:250,h:140,surface:"ice"},{id:"gay1",x:255,y:560,w:80,h:22,surface:"bouncy",bounceVy:-880},{id:"p2",x:420,y:420,w:200,h:26,surface:"ice"},{id:"gay2",x:635,y:560,w:85,h:22,surface:"bouncy",bounceVy:-940},{id:"ferry",x:790,y:380,w:145,h:26,surface:"ice"},{id:"pEnd",x:1045,y:380,w:235,h:340,surface:"ice"}],hazards:[{id:"ceilSp",type:"icicle",x:615,y:170,w:110,h:42,dir:"down"}],triggers:[{when:{playerXGreater:740},actions:[{type:"slidePlatform",targetId:"ferry",toX:880,toY:380,duration:.7},{type:"toast",text:"Buz sal\u0131 kay\u0131yor!",duration:1.9}]}]},{id:"3-5",chapter:3,stage:5,difficulty:"zor",biome:"glacier",title:"Buzulun Zirvesi",subtitle:"Donmu\u015F ge\xE7idin zirve kap\u0131s\u0131.",spawn:{x:54,y:534},door:{x:1165,y:488},platforms:[{id:"ceil",x:0,y:0,w:1280,h:48,surface:"ice"},{id:"s1",x:0,y:580,w:245,h:140,surface:"ice"},{id:"cr1",x:325,y:560,w:105,h:24,surface:"crumble",crumbleDelay:.3},{id:"s2",x:505,y:540,w:215,h:180,surface:"ice"},{id:"cr2",x:795,y:520,w:105,h:24,surface:"crumble",crumbleDelay:.28},{id:"lift",x:970,y:560,w:75,h:160,surface:"ice",bounceVy:-970},{id:"s3",x:1045,y:560,w:235,h:160,surface:"ice"},{id:"highGoal",x:1055,y:380,w:215,h:26,surface:"ice",solid:!1,visible:!1}],hazards:[{id:"ic1",type:"icicle",x:580,y:48,w:30,h:52,dir:"down",shatterOnGround:!0}],triggers:[{when:{playerXGreater:470},actions:[{type:"activateHazard",targetId:"ic1",gravity:1550}]},{when:{nearDoor:115},actions:[{type:"setPlatform",targetId:"highGoal",solid:!0,visible:!0},{type:"setPlatform",targetId:"lift",surface:"bouncy"},{type:"moveDoor",toX:1155,toY:308,duration:.45},{type:"shake",intensity:6,duration:.22},{type:"toast",text:"Tap\u0131nak kap\u0131s\u0131 zirveye \xE7\u0131kt\u0131!",duration:2.1}]}]},{id:"3-6",chapter:3,stage:6,difficulty:"zor",biome:"glacier",title:"Arktik Kas\u0131rga",subtitle:"Sert tipi ters d\xF6nerken buz k\xF6pr\xFCler k\u0131r\u0131l\u0131yor.",spawn:{x:52,y:514},door:{x:1185,y:418},windForceX:-140,platforms:[{id:"ceil",x:0,y:0,w:1280,h:48,surface:"ice"},{id:"p1",x:0,y:560,w:260,h:160,surface:"ice"},{id:"cr1",x:335,y:540,w:120,h:24,surface:"crumble",crumbleDelay:.3},{id:"p2",x:530,y:510,w:220,h:210,surface:"ice"},{id:"cr2",x:825,y:490,w:120,h:24,surface:"crumble",crumbleDelay:.28},{id:"pEnd",x:1055,y:490,w:225,h:230,surface:"ice"}],hazards:[{id:"ic1",type:"icicle",x:640,y:48,w:30,h:54,dir:"down",shatterOnGround:!0},{id:"spEnd",type:"spikes",x:1090,y:466,w:46,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:525},actions:[{type:"activateHazard",targetId:"ic1",gravity:1600},{type:"setWind",forceX:185},{type:"toast",text:"Kas\u0131rga arkadan vuruyor!",duration:2}]},{when:{playerXGreater:1015},actions:[{type:"activateHazard",targetId:"spEnd"}]}]},{id:"3-7",chapter:3,stage:7,difficulty:"cok-zor",biome:"glacier",title:"Buzul \u015Eeytan\u0131",subtitle:"Buzul ge\xE7idinin son ve en so\u011Fuk s\u0131nav\u0131!",spawn:{x:48,y:534},door:{x:1175,y:468},platforms:[{id:"ceil",x:0,y:0,w:1280,h:48,surface:"ice"},{id:"p1",x:0,y:580,w:235,h:140,surface:"ice"},{id:"gay1",x:235,y:580,w:85,h:140,surface:"bouncy",bounceVy:-950},{id:"p2",x:405,y:420,w:215,h:26,surface:"ice"},{id:"cr1",x:695,y:440,w:120,h:24,surface:"crumble",crumbleDelay:.28},{id:"p3L",x:885,y:540,w:70,h:180,surface:"ice"},{id:"lift",x:955,y:540,w:75,h:180,surface:"ice",bounceVy:-990},{id:"p3R",x:1030,y:540,w:250,h:180,surface:"ice"},{id:"highGoal",x:1055,y:340,w:215,h:26,surface:"ice",solid:!1,visible:!1}],hazards:[{id:"ic1",type:"icicle",x:500,y:48,w:30,h:54,dir:"down",shatterOnGround:!0},{id:"spGuard",type:"spikes",x:1175,y:516,w:48,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:380},actions:[{type:"activateHazard",targetId:"ic1",gravity:1580}]},{when:{nearDoor:115},actions:[{type:"setPlatform",targetId:"highGoal",solid:!0,visible:!0},{type:"setPlatform",targetId:"lift",surface:"bouncy"},{type:"moveDoor",toX:1155,toY:268,duration:.45},{type:"activateHazard",targetId:"spGuard"},{type:"setWind",forceX:-135},{type:"shake",intensity:7,duration:.24},{type:"toast",text:"Buzul kap\u0131s\u0131 r\xFCzg\xE2rla zirveye u\xE7tu!",duration:2.3}]}]}];var Ph=[{id:"4-1",chapter:4,stage:1,difficulty:"kolay",biome:"volcano",title:"Eriyen Bazalt",subtitle:"Magma \xFCzerindeki s\xFCtunlar sabit durmayabilir.",spawn:{x:54,y:514},door:{x:1190,y:468},platforms:[{id:"v1",x:0,y:560,w:230,h:160},{id:"b1",x:305,y:540,w:140,h:180},{id:"b2",x:520,y:520,w:140,h:200},{id:"b3",x:735,y:500,w:140,h:220},{id:"b4",x:950,y:520,w:130,h:200},{id:"vEnd",x:1135,y:540,w:145,h:180}],hazards:[{id:"lavaFloor",type:"lava",x:230,y:690,w:905,h:30}],triggers:[{when:{onTouchPlatform:"b1"},actions:[{type:"slidePlatform",targetId:"b1",toX:305,toY:645,duration:.75},{type:"toast",text:"Bazalt s\xFCtun bat\u0131yor!",duration:1.9}]},{when:{playerXGreater:470},actions:[{type:"slidePlatform",targetId:"b2",toX:520,toY:465,duration:.22}]},{when:{onTouchPlatform:"b3"},actions:[{type:"slidePlatform",targetId:"b3",toX:735,toY:645,duration:.7}]}]},{id:"4-2",chapter:4,stage:2,difficulty:"kolay",biome:"volcano",title:"Lav Y\xFCkseliyor",subtitle:"Volkanik baca dolmadan tepeye t\u0131rman.",spawn:{x:50,y:574},door:{x:64,y:113},risingHazard:{type:"lava",startY:735,minY:205,speed:48,active:!1},platforms:[{id:"p0",x:0,y:620,w:250,h:100},{id:"p1",x:320,y:545,w:200,h:26},{id:"p2",x:590,y:470,w:220,h:26},{id:"p3",x:880,y:395,w:240,h:26},{id:"p4",x:630,y:315,w:200,h:26},{id:"p5",x:340,y:245,w:220,h:26},{id:"p6",x:30,y:185,w:245,h:28}],hazards:[{id:"cr1",type:"crusher",x:700,y:165,w:46,h:60,slamCycle:{restY:165,slamY:255,waitTop:.72,waitBottom:.35,downSpeed:760,upSpeed:220}}],triggers:[{when:{playerXGreater:185},actions:[{type:"startRisingHazard",speed:48},{type:"toast",text:"Magma y\xFCkseliyor! Durma!",duration:2.2}]}]},{id:"4-3",chapter:4,stage:3,difficulty:"orta",biome:"volcano",title:"Termal Tersine D\xF6n\xFC\u015F",subtitle:"S\u0131cak hava ak\u0131m\u0131 yer\xE7ekimini alt\xFCst edebilir.",spawn:{x:56,y:514},door:{x:1170,y:488},platforms:[{id:"fStart",x:0,y:560,w:420,h:160},{id:"fEnd",x:860,y:560,w:420,h:160},{id:"ceilL",x:0,y:0,w:455,h:100},{id:"ceilM",x:545,y:0,w:305,h:100},{id:"ceilR",x:935,y:0,w:345,h:100}],hazards:[{id:"csp1",type:"spikes",x:675,y:100,w:48,h:24,dir:"down"}],visualZones:[{type:"thermal",x:330,dir:"up"},{type:"thermal",x:970,dir:"down"}],triggers:[{when:{playerXGreater:330},actions:[{type:"setGravityScale",value:-1},{type:"shake",intensity:6,duration:.22},{type:"toast",text:"Yer\xE7ekimi tersine d\xF6nd\xFC!",duration:2.2}]},{when:{playerXGreater:970},actions:[{type:"setGravityScale",value:1},{type:"shake",intensity:5,duration:.18},{type:"toast",text:"Normale d\xF6n\xFC\u015F!",duration:1.8}]}]},{id:"4-4",chapter:4,stage:4,difficulty:"orta",biome:"volcano",title:"Obsidyen Duvar\u0131",subtitle:"Arkana bakma \u2014 sadece ko\u015F ve z\u0131pla.",spawn:{x:82,y:514},door:{x:1185,y:448},platforms:[{id:"g1",x:0,y:560,w:350,h:160},{id:"g2",x:445,y:540,w:220,h:180},{id:"cb",x:745,y:520,w:115,h:24,surface:"crumble",crumbleDelay:.35},{id:"g3",x:930,y:520,w:350,h:200}],hazards:[{id:"wall",type:"chaser",x:-110,y:140,w:96,h:460,vx:0},{id:"sp1",type:"spikes",x:1015,y:496,w:44,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:170},actions:[{type:"activateHazard",targetId:"wall",vx:205,stopAtX:1055},{type:"shake",intensity:7,duration:.3},{type:"toast",text:"Obsidyen duvar\u0131 pe\u015Finde! KO\u015E!",duration:2.2}]},{when:{playerXGreater:940},actions:[{type:"activateHazard",targetId:"sp1"}]}]},{id:"4-5",chapter:4,stage:5,difficulty:"zor",biome:"volcano",title:"Kaldera Ka\xE7\u0131\u015F\u0131",subtitle:"Batan kayalar ve tavan ka\xE7\u0131\u015F\u0131.",spawn:{x:54,y:514},door:{x:1185,y:488},platforms:[{id:"v1",x:0,y:560,w:230,h:160},{id:"sink1",x:300,y:560,w:115,h:160},{id:"vMid",x:470,y:560,w:180,h:160},{id:"ceilFlip",x:440,y:0,w:355,h:100},{id:"vEnd",x:730,y:560,w:550,h:160}],hazards:[{id:"lavaBase",type:"lava",x:230,y:690,w:500,h:30},{id:"spFinal",type:"spikes",x:1070,y:536,w:48,h:24,dir:"up",hidden:!0}],visualZones:[{type:"thermal",x:505,dir:"up"},{type:"thermal",x:745,dir:"down"}],triggers:[{when:{onTouchPlatform:"sink1"},actions:[{type:"slidePlatform",targetId:"sink1",toX:300,toY:665,duration:.55}]},{when:{playerXGreater:505},actions:[{type:"setGravityScale",value:-1},{type:"toast",text:"Tavana tutun!",duration:1.9}]},{when:{playerXGreater:745},actions:[{type:"setGravityScale",value:1}]},{when:{playerXGreater:1e3},actions:[{type:"activateHazard",targetId:"spFinal"},{type:"shake",intensity:6,duration:.2}]}]},{id:"4-6",chapter:4,stage:6,difficulty:"zor",biome:"volcano",title:"Magma T\xFCnelleri",subtitle:"\xC7ift termal ak\u0131mda tavan ve taban dans\u0131.",spawn:{x:52,y:514},door:{x:1185,y:488},platforms:[{id:"f1",x:0,y:560,w:280,h:160},{id:"c1",x:200,y:0,w:325,h:100},{id:"f2",x:450,y:560,w:350,h:160},{id:"c2",x:735,y:0,w:310,h:100},{id:"f3",x:960,y:560,w:320,h:160}],hazards:[{id:"sp1",type:"spikes",x:610,y:536,w:48,h:24,dir:"up"},{id:"csp1",type:"spikes",x:875,y:100,w:48,h:24,dir:"down"},{id:"lavaBase",type:"lava",x:280,y:690,w:680,h:30}],visualZones:[{type:"thermal",x:240,dir:"up"},{type:"thermal",x:485,dir:"down"},{type:"thermal",x:760,dir:"up"},{type:"thermal",x:1e3,dir:"down"}],triggers:[{when:{playerXGreater:240},actions:[{type:"setGravityScale",value:-1},{type:"toast",text:"Tavana y\xFCksel!",duration:1.7}]},{when:{playerXGreater:485},actions:[{type:"setGravityScale",value:1}]},{when:{playerXGreater:760},actions:[{type:"setGravityScale",value:-1}]},{when:{playerXGreater:1e3},actions:[{type:"setGravityScale",value:1}]}]},{id:"4-7",chapter:4,stage:7,difficulty:"cok-zor",biome:"volcano",title:"Volkan\u0131n \xD6fkesi",subtitle:"Obsidyen duvar\u0131 pe\u015Findeyken termal ka\xE7\u0131\u015F\u0131 yakala!",spawn:{x:80,y:514},door:{x:1190,y:473},platforms:[{id:"v1",x:0,y:560,w:250,h:160},{id:"sink1",x:320,y:545,w:125,h:175},{id:"v2",x:515,y:545,w:165,h:175},{id:"ceilFlip",x:495,y:0,w:385,h:100},{id:"v3",x:810,y:545,w:470,h:175}],hazards:[{id:"wall",type:"chaser",x:-110,y:130,w:96,h:470,vx:0},{id:"lavaFloor",type:"lava",x:250,y:690,w:560,h:30},{id:"spFinal",type:"spikes",x:1085,y:521,w:48,h:24,dir:"up",hidden:!0}],visualZones:[{type:"thermal",x:540,dir:"up"},{type:"thermal",x:845,dir:"down"}],triggers:[{when:{playerXGreater:155},actions:[{type:"activateHazard",targetId:"wall",vx:200,stopAtX:1030},{type:"shake",intensity:7,duration:.25},{type:"toast",text:"Duvar geliyor! \xC7abuk ol!",duration:2}]},{when:{onTouchPlatform:"sink1"},actions:[{type:"slidePlatform",targetId:"sink1",toX:320,toY:660,duration:.6}]},{when:{playerXGreater:540},actions:[{type:"setGravityScale",value:-1}]},{when:{playerXGreater:845},actions:[{type:"setGravityScale",value:1}]},{when:{playerXGreater:1010},actions:[{type:"activateHazard",targetId:"spFinal"}]}]}];var Ih=[{id:"5-1",chapter:5,stage:1,difficulty:"kolay",biome:"foundry",title:"Testere Raylar\u0131",subtitle:"D\xF6k\xFCmhanedeki testereler fi\u015Fe tak\u0131l\u0131 kalm\u0131\u015F.",spawn:{x:56,y:514},door:{x:1175,y:488},platforms:[{id:"cat1",x:0,y:560,w:590,h:160},{id:"cat2",x:695,y:560,w:585,h:160}],hazards:[{id:"saw1",type:"saw",x:515,y:512,w:48,h:48,vx:0},{id:"saw2",type:"saw",x:940,y:150,w:52,h:52,vx:0,vy:0,stopOnGround:!0}],triggers:[{when:{playerXGreater:270},actions:[{type:"activateHazard",targetId:"saw1",vx:-380,stopAtX:40},{type:"toast",text:"Testere raydan \xE7\u0131kt\u0131!",duration:2}]},{when:{playerXGreater:800},actions:[{type:"activateHazard",targetId:"saw2",gravity:1350},{type:"shake",intensity:6,duration:.18}]}]},{id:"5-2",chapter:5,stage:2,difficulty:"kolay",biome:"foundry",title:"Hidrolik Pres",subtitle:"Konvey\xF6r bantlar\u0131 seni do\u011Fruca prese ta\u015F\u0131r.",spawn:{x:52,y:514},door:{x:1180,y:488},platforms:[{id:"f1",x:0,y:560,w:210,h:160},{id:"conv1",x:210,y:560,w:340,h:160,surface:"conveyor",conveyorSpeed:150},{id:"f2",x:620,y:560,w:120,h:160},{id:"conv2",x:740,y:560,w:330,h:160,surface:"conveyor",conveyorSpeed:135},{id:"f3",x:1070,y:560,w:210,h:160}],hazards:[{id:"press1",type:"crusher",x:355,y:310,w:64,h:120,slamCycle:{restY:310,slamY:440,waitTop:.75,waitBottom:.32,downSpeed:820,upSpeed:240}},{id:"press2",type:"crusher",x:880,y:310,w:64,h:120,slamCycle:{restY:310,slamY:440,waitTop:.7,waitBottom:.3,downSpeed:840,upSpeed:240,initialDelay:.1}}],triggers:[{when:{playerXGreater:785},actions:[{type:"setPlatform",targetId:"conv2",conveyorSpeed:-165},{type:"toast",text:"Konvey\xF6r ters y\xF6ne d\xF6nd\xFC!",duration:2}]}]},{id:"5-3",chapter:5,stage:3,difficulty:"orta",biome:"foundry",title:"Ters Kutup",subtitle:"Elektromanyetik alan kontrol duygunu bozabilir.",spawn:{x:54,y:514},door:{x:1175,y:448},platforms:[{id:"p1",x:0,y:560,w:340,h:160},{id:"p2",x:420,y:520,w:240,h:200},{id:"p3",x:745,y:480,w:235,h:240},{id:"p4",x:1060,y:520,w:220,h:200}],hazards:[{id:"sp1",type:"spikes",x:840,y:456,w:46,h:24,dir:"up",hidden:!0}],visualZones:[{type:"teslaArc",x:460},{type:"teslaArc",x:1085}],triggers:[{when:{playerXGreater:460},actions:[{type:"setInvertControls",value:!0},{type:"shake",intensity:6,duration:.22},{type:"toast",text:"Elektrik ark\u0131! Sol ve Sa\u011F TERS!",duration:2.4}]},{when:{playerXGreater:760},actions:[{type:"activateHazard",targetId:"sp1"}]},{when:{playerXGreater:1085},actions:[{type:"setInvertControls",value:!1},{type:"toast",text:"Kontroller normale d\xF6nd\xFC!",duration:1.9}]}]},{id:"5-4",chapter:5,stage:4,difficulty:"orta",biome:"foundry",title:"\u015Eim\u015Fekli Karanl\u0131k",subtitle:"Elektrikler kesildi \u2014 kask fenerine ve \u015Fim\u015Feklere g\xFCven.",darkness:!0,spawn:{x:54,y:514},door:{x:1175,y:458},platforms:[{id:"g1",x:0,y:560,w:340,h:160},{id:"trapPanel",x:340,y:560,w:95,h:160},{id:"g2",x:435,y:560,w:350,h:160},{id:"cb1",x:860,y:530,w:115,h:24,surface:"crumble",crumbleDelay:.34},{id:"g3",x:1045,y:530,w:235,h:190}],hazards:[{id:"saw1",type:"saw",x:615,y:514,w:46,h:46,patrol:{axis:"x",range:75,speed:2.2}}],triggers:[{when:{playerXGreater:310},actions:[{type:"dropPlatform",targetId:"trapPanel"},{type:"shake",intensity:6,duration:.2},{type:"toast",text:"Karanl\u0131kta bo\u015Flu\u011Fa dikkat!",duration:2}]}]},{id:"5-5",chapter:5,stage:5,difficulty:"zor",biome:"foundry",title:"\xC7elik Kapan\u0131",subtitle:"Konvey\xF6rden tavana, oradan ka\xE7an kasa kap\u0131s\u0131na.",spawn:{x:50,y:534},door:{x:1175,y:468},platforms:[{id:"s1",x:0,y:580,w:210,h:140},{id:"trapS1",x:210,y:580,w:90,h:140},{id:"conv1",x:300,y:580,w:250,h:140,surface:"conveyor",conveyorSpeed:135},{id:"pad1",x:575,y:560,w:70,h:20,surface:"bouncy",bounceVy:-920},{id:"midLow",x:670,y:540,w:170,h:180},{id:"ceilBridge",x:615,y:0,w:300,h:105},{id:"sEndL",x:915,y:540,w:25,h:180},{id:"endPad",x:940,y:540,w:66,h:180,surface:"normal",bounceVy:-990},{id:"sEndR",x:1006,y:540,w:274,h:180},{id:"craneEnd",x:1015,y:340,w:235,h:26,solid:!1,visible:!1}],hazards:[{id:"spJoke",type:"spikes",x:1175,y:516,w:48,h:24,dir:"up",hidden:!0}],visualZones:[{type:"thermal",x:660,dir:"up"},{type:"thermal",x:885,dir:"down"}],triggers:[{when:{playerXGreater:180},actions:[{type:"dropPlatform",targetId:"trapS1"}]},{when:{playerXGreater:660},actions:[{type:"setGravityScale",value:-1},{type:"toast",text:"Yer\xE7ekimi ters! Tavandan devam et!",duration:2}]},{when:{playerXGreater:885},actions:[{type:"setGravityScale",value:1}]},{when:{nearDoor:115},actions:[{type:"setPlatform",targetId:"craneEnd",solid:!0,visible:!0},{type:"setPlatform",targetId:"endPad",surface:"bouncy"},{type:"moveDoor",toX:1150,toY:268,duration:.45},{type:"activateHazard",targetId:"spJoke"},{type:"shake",intensity:8,duration:.25},{type:"toast",text:"Kap\u0131 vin\xE7 iskelesine ka\xE7t\u0131!",duration:2.2}]}]},{id:"5-6",chapter:5,stage:6,difficulty:"zor",biome:"foundry",title:"Y\xFCksek Gerilim",subtitle:"Karanl\u0131kta ters kutup ark\u0131 ve dev testere.",darkness:!0,spawn:{x:52,y:514},door:{x:1185,y:458},platforms:[{id:"g1",x:0,y:560,w:320,h:160},{id:"g2",x:400,y:560,w:360,h:160},{id:"cb1",x:830,y:530,w:100,h:24,surface:"crumble",crumbleDelay:.34},{id:"convR",x:960,y:530,w:120,h:190,surface:"conveyor",conveyorSpeed:-135},{id:"g3",x:1080,y:530,w:200,h:190}],hazards:[{id:"saw1",type:"saw",x:600,y:514,w:46,h:46,patrol:{axis:"x",range:70,speed:2.4}}],visualZones:[{type:"teslaArc",x:420},{type:"teslaArc",x:1040}],triggers:[{when:{playerXGreater:420},actions:[{type:"setInvertControls",value:!0},{type:"shake",intensity:6,duration:.2},{type:"toast",text:"Karanl\u0131kta kontroller TERS!",duration:2.2}]},{when:{playerXGreater:1040},actions:[{type:"setInvertControls",value:!1},{type:"toast",text:"Kutup d\xFCzeldi!",duration:1.6}]}]},{id:"5-7",chapter:5,stage:7,difficulty:"cok-zor",biome:"foundry",title:"\u015Eeytan\u0131n Son \u015Eakas\u0131",subtitle:"B\xFCt\xFCn tuzaklar\u0131n birle\u015Fti\u011Fi b\xFCy\xFCk final! Kap\u0131ya dokunmay\u0131 dene.",spawn:{x:48,y:534},door:{x:1180,y:468},platforms:[{id:"s1",x:0,y:580,w:200,h:140},{id:"trapS1",x:200,y:580,w:90,h:140},{id:"conv1",x:290,y:580,w:230,h:140,surface:"conveyor",conveyorSpeed:130},{id:"sMid",x:590,y:540,w:230,h:180},{id:"ceilBridge",x:640,y:0,w:325,h:100},{id:"sEndL",x:900,y:540,w:35,h:180},{id:"endPad",x:935,y:540,w:72,h:180,surface:"normal",bounceVy:-990},{id:"sEndR",x:1007,y:540,w:273,h:180},{id:"craneEnd",x:1020,y:335,w:240,h:26,solid:!1,visible:!1}],hazards:[{id:"press1",type:"crusher",x:375,y:330,w:58,h:120,slamCycle:{restY:330,slamY:460,waitTop:.72,waitBottom:.3,downSpeed:840,upSpeed:240}},{id:"spJoke",type:"spikes",x:1180,y:516,w:48,h:24,dir:"up",hidden:!0}],visualZones:[{type:"thermal",x:685,dir:"up"},{type:"thermal",x:925,dir:"down"}],triggers:[{when:{playerXGreater:175},actions:[{type:"dropPlatform",targetId:"trapS1"}]},{when:{playerXGreater:685},actions:[{type:"setGravityScale",value:-1},{type:"toast",text:"Yer\xE7ekimi ters! Tavandan ko\u015F!",duration:2}]},{when:{playerXGreater:925},actions:[{type:"setGravityScale",value:1}]},{when:{nearDoor:115},actions:[{type:"setPlatform",targetId:"craneEnd",solid:!0,visible:!0},{type:"setPlatform",targetId:"endPad",surface:"bouncy"},{type:"moveDoor",toX:1155,toY:263,duration:.45},{type:"activateHazard",targetId:"spJoke"},{type:"shake",intensity:9,duration:.28},{type:"toast",text:"\u015Eeytan\u0131n son \u015Fakas\u0131! Yukar\u0131 f\u0131rlat!",duration:2.5}]}]}];var Lh=[{id:"O1-1",campaign:"ottoman",chapter:1,stage:1,difficulty:"kolay",biome:"ottoman-palace",title:"B\xE2b-\u0131 H\xFCm\xE2yun",subtitle:"Neo-Topkap\u0131 avlusunun hologram mermerleri...",spawn:{x:64,y:514},door:{x:1170,y:488},platforms:[{id:"g1",x:0,y:560,w:390,h:160},{id:"trap1",x:390,y:560,w:110,h:160},{id:"g2",x:500,y:560,w:340,h:160},{id:"trap2",x:840,y:560,w:120,h:160},{id:"g3",x:960,y:560,w:320,h:160}],hazards:[],triggers:[{when:{playerXGreater:360},actions:[{type:"dropPlatform",targetId:"trap1"},{type:"shake",intensity:6,duration:.22},{type:"toast",text:"Hologram mermer devreden \xE7\u0131kt\u0131!",duration:2}]},{when:{playerXGreater:810},actions:[{type:"dropPlatform",targetId:"trap2"},{type:"shake",intensity:6,duration:.22}]}]},{id:"O1-2",campaign:"ottoman",chapter:1,stage:2,difficulty:"kolay",biome:"ottoman-palace",title:"Lalezar Avlusu",subtitle:"Saray ge\xE7idi biraz kaygan ve oynak g\xF6r\xFCn\xFCyor.",spawn:{x:64,y:514},door:{x:1170,y:488},platforms:[{id:"g1",x:0,y:560,w:390,h:160},{id:"g2",x:485,y:560,w:220,h:160},{id:"g3",x:820,y:560,w:460,h:160}],hazards:[{id:"sp1",type:"spikes",x:980,y:536,w:56,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:400},actions:[{type:"slidePlatform",targetId:"g2",toX:540,toY:560,duration:.24},{type:"toast",text:"Mermer blok geri kay\u0131yor!",duration:2}]},{when:{playerXGreater:895},actions:[{type:"activateHazard",targetId:"sp1"},{type:"shake",intensity:5,duration:.16}]}]},{id:"O1-3",campaign:"ottoman",chapter:1,stage:3,difficulty:"orta",biome:"ottoman-palace",title:"Hologram \xC7ini Yolu",subtitle:"Parlayan \xE7inilerin hepsi ger\xE7ek de\u011Fil.",spawn:{x:56,y:514},door:{x:1185,y:408},platforms:[{id:"g1",x:0,y:560,w:300,h:160},{id:"mir1",x:300,y:560,w:120,h:160,surface:"fake"},{id:"g2",x:420,y:520,w:270,h:200},{id:"cb1",x:765,y:500,w:115,h:24,surface:"crumble",crumbleDelay:.28},{id:"g3",x:960,y:480,w:320,h:240}],hazards:[{id:"boulder1",type:"boulder",x:505,y:-60,w:46,h:46,hidden:!0,stopOnGround:!0},{id:"sp2",type:"spikes",x:1055,y:456,w:48,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:470},actions:[{type:"activateHazard",targetId:"boulder1",gravity:1450},{type:"toast",text:"Kubbe k\xFCresi d\xFC\u015F\xFCyor!",duration:1.8}]},{when:{playerXGreater:970},actions:[{type:"activateHazard",targetId:"sp2"},{type:"shake",intensity:6,duration:.18}]}]},{id:"O1-4",campaign:"ottoman",chapter:1,stage:4,difficulty:"orta",biome:"ottoman-palace",title:"Ka\xE7an H\xFCnkar Kap\u0131s\u0131",subtitle:"Saltanat ge\xE7idi seni s\u0131namak istiyor.",spawn:{x:64,y:514},door:{x:1150,y:488},platforms:[{id:"baseL",x:0,y:560,w:420,h:160},{id:"baseM",x:490,y:560,w:280,h:160},{id:"baseR",x:840,y:560,w:440,h:160}],hazards:[{id:"midSp",type:"spikes",x:590,y:536,w:56,h:24,dir:"up",hidden:!0},{id:"rSp",type:"spikes",x:1200,y:536,w:48,h:24,dir:"up",hidden:!0}],triggers:[{when:{nearDoor:115},actions:[{type:"moveDoor",toX:96,toY:488,duration:.52},{type:"activateHazard",targetId:"midSp"},{type:"activateHazard",targetId:"rSp"},{type:"shake",intensity:8,duration:.25},{type:"toast",text:"Padi\u015Fah ge\xE7idi ba\u015Fa \u0131\u015F\u0131nland\u0131!",duration:2.3}]}]},{id:"O1-5",campaign:"ottoman",chapter:1,stage:5,difficulty:"zor",biome:"ottoman-palace",title:"Enderun Bask\u0131n\u0131",subtitle:"\xC7\xF6ken k\xF6pr\xFCler ve saray i\xE7i lazer kaz\u0131klar\u0131.",spawn:{x:52,y:534},door:{x:1180,y:408},platforms:[{id:"p1",x:0,y:580,w:215,h:140},{id:"v1",x:245,y:560,w:105,h:22,surface:"crumble",crumbleDelay:.3},{id:"p2",x:380,y:540,w:215,h:180},{id:"v2",x:625,y:500,w:100,h:22,surface:"crumble",crumbleDelay:.28},{id:"p3",x:760,y:480,w:200,h:240},{id:"trapGap",x:960,y:480,w:95,h:240},{id:"p4",x:1055,y:480,w:225,h:240}],hazards:[{id:"b1",type:"boulder",x:430,y:-60,w:46,h:46,hidden:!0,stopOnGround:!0},{id:"s1",type:"spikes",x:838,y:456,w:48,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:475},actions:[{type:"activateHazard",targetId:"b1",gravity:1500}]},{when:{playerXGreater:785},actions:[{type:"activateHazard",targetId:"s1"}]},{when:{playerXGreater:940},actions:[{type:"dropPlatform",targetId:"trapGap"},{type:"shake",intensity:6,duration:.2},{type:"toast",text:"Son mermer \xE7\xF6kt\xFC!",duration:1.8}]}]},{id:"O1-6",campaign:"ottoman",chapter:1,stage:6,difficulty:"zor",biome:"ottoman-palace",title:"Divan Pres Hatt\u0131",subtitle:"Devriye lazer testeresi ve pusu tuzaklar\u0131.",spawn:{x:52,y:534},door:{x:1185,y:438},platforms:[{id:"p1",x:0,y:580,w:220,h:140},{id:"v1",x:290,y:560,w:120,h:22,surface:"crumble",crumbleDelay:.28},{id:"p2",x:480,y:540,w:195,h:180},{id:"v2",x:745,y:510,w:115,h:22,surface:"crumble",crumbleDelay:.26},{id:"p3",x:935,y:510,w:345,h:210}],hazards:[{id:"saw1",type:"saw",x:585,y:494,w:44,h:44,patrol:{axis:"x",range:55,speed:2.1}},{id:"sp2",type:"spikes",x:1030,y:486,w:48,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:425},actions:[{type:"slidePlatform",targetId:"p2",toX:515,toY:540,duration:.24},{type:"toast",text:"Avlu iskelesi kay\u0131yor!",duration:1.8}]},{when:{playerXGreater:950},actions:[{type:"activateHazard",targetId:"sp2"},{type:"shake",intensity:6,duration:.18}]}]},{id:"O1-7",campaign:"ottoman",chapter:1,stage:7,difficulty:"cok-zor",biome:"ottoman-palace",title:"Ba\u015Fmuhaf\u0131z \xC7elik Kap\u0131s\u0131",subtitle:"Neo-Topkap\u0131 Saray\u0131\u2019n\u0131n son ve en \xE7etin s\u0131nav\u0131!",spawn:{x:48,y:534},door:{x:1175,y:458},platforms:[{id:"p1",x:0,y:580,w:215,h:140},{id:"v1",x:290,y:550,w:120,h:22,surface:"crumble",crumbleDelay:.28},{id:"p2",x:480,y:530,w:240,h:190},{id:"trapG",x:720,y:530,w:90,h:190},{id:"p3L",x:810,y:530,w:70,h:190},{id:"pad1",x:880,y:530,w:75,h:190,surface:"normal",bounceVy:-990},{id:"p3R",x:955,y:530,w:325,h:190},{id:"throneDeck",x:1025,y:330,w:235,h:26,solid:!1,visible:!1}],hazards:[{id:"spMid",type:"spikes",x:615,y:506,w:40,h:24,dir:"up",hidden:!0},{id:"spFinal",type:"spikes",x:1170,y:506,w:48,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:555},actions:[{type:"activateHazard",targetId:"spMid"}]},{when:{playerXGreater:700},actions:[{type:"dropPlatform",targetId:"trapG"},{type:"shake",intensity:6,duration:.2}]},{when:{nearDoor:115},actions:[{type:"setPlatform",targetId:"throneDeck",solid:!0,visible:!0},{type:"setPlatform",targetId:"pad1",surface:"bouncy"},{type:"moveDoor",toX:1155,toY:258,duration:.45},{type:"activateHazard",targetId:"spFinal"},{type:"shake",intensity:8,duration:.25},{type:"toast",text:"Foton kap\u0131 taht balkonuna y\xFCkseldi!",duration:2.3}]}]}];var Dh=[{id:"O2-1",campaign:"ottoman",chapter:2,stage:1,difficulty:"kolay",biome:"ottoman-bosphorus",title:"K\u0131z Kulesi \u0130skelesi",subtitle:"Bo\u011Faz \u0131\u015F\u0131klar\u0131 alt\u0131nda siber iskeleler...",spawn:{x:64,y:514},door:{x:1170,y:488},platforms:[{id:"g1",x:0,y:560,w:320,h:160},{id:"mirage1",x:320,y:560,w:120,h:160,surface:"fake"},{id:"g2",x:440,y:560,w:340,h:160},{id:"g3",x:875,y:560,w:405,h:160}],hazards:[],triggers:[{when:{playerXGreater:710},actions:[{type:"slidePlatform",targetId:"g3",toX:905,toY:560,duration:.28},{type:"toast",text:"Hologram iskeleye dikkat!",duration:1.9}]}]},{id:"O2-2",campaign:"ottoman",chapter:2,stage:2,difficulty:"kolay",biome:"ottoman-bosphorus",title:"Foton K\xF6pr\xFC Ge\xE7i\u015Fi",subtitle:"Hidro-t\xFCrbin tramboliniyle fener teras\u0131na f\u0131rlan.",spawn:{x:64,y:534},door:{x:1175,y:268},platforms:[{id:"s1",x:0,y:580,w:350,h:140},{id:"s2",x:430,y:560,w:280,h:160},{id:"pad1",x:760,y:550,w:95,h:24,surface:"bouncy",bounceVy:-985},{id:"sHigh",x:930,y:340,w:350,h:380}],hazards:[{id:"sp1",type:"spikes",x:565,y:536,w:48,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:465},actions:[{type:"activateHazard",targetId:"sp1"},{type:"toast",text:"Foton m\u0131zraklara dikkat!",duration:1.8}]}]},{id:"O2-3",campaign:"ottoman",chapter:2,stage:3,difficulty:"orta",biome:"ottoman-bosphorus",title:"Bo\u011Faz Ak\u0131nt\u0131s\u0131",subtitle:"\xC7\xF6ken dubalar ve devriye kesici.",spawn:{x:56,y:534},door:{x:1180,y:438},platforms:[{id:"d1",x:0,y:580,w:240,h:140},{id:"c1",x:295,y:560,w:120,h:24,surface:"crumble",crumbleDelay:.34},{id:"d2",x:485,y:540,w:270,h:180},{id:"c2",x:825,y:510,w:115,h:24,surface:"crumble",crumbleDelay:.3},{id:"d3",x:1010,y:510,w:270,h:210}],hazards:[{id:"saw1",type:"saw",x:615,y:494,w:46,h:46,patrol:{axis:"x",range:65,speed:2}},{id:"spEnd",type:"spikes",x:1065,y:486,w:46,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:990},actions:[{type:"activateHazard",targetId:"spEnd"},{type:"toast",text:"Kule e\u015Fi\u011Fi tuzakl\u0131!",duration:1.8}]}]},{id:"O2-4",campaign:"ottoman",chapter:2,stage:4,difficulty:"orta",biome:"ottoman-bosphorus",title:"Y\xFCkselen Plazma Dalgas\u0131",subtitle:"Mavi plazma gelgiti y\xFCkselmeden fener kulesine t\u0131rman!",spawn:{x:64,y:544},door:{x:1165,y:128},risingHazard:{type:"plasma",startY:740,minY:225,speed:48,active:!1},platforms:[{id:"f0",x:0,y:590,w:300,h:130},{id:"f1",x:350,y:500,w:190,h:26},{id:"f2",x:590,y:410,w:200,h:26},{id:"f3",x:825,y:310,w:185,h:26},{id:"f4",x:1045,y:200,w:235,h:28}],hazards:[{id:"spTop",type:"spikes",x:1065,y:176,w:40,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:165},actions:[{type:"startRisingHazard",speed:48,minY:225},{type:"shake",intensity:6,duration:.25},{type:"toast",text:"Bo\u011Faz plazmas\u0131 y\xFCkseliyor! Yukar\u0131 t\u0131rman!",duration:2.2}]},{when:{playerXGreater:970},actions:[{type:"activateHazard",targetId:"spTop"}]}]},{id:"O2-5",campaign:"ottoman",chapter:2,stage:5,difficulty:"zor",biome:"ottoman-bosphorus",title:"Fener Kulesi Konvey\xF6r\xFC",subtitle:"Enerji bantlar\u0131 ve ka\xE7an Bo\u011Faz kap\u0131s\u0131.",spawn:{x:52,y:534},door:{x:1175,y:468},platforms:[{id:"p1",x:0,y:580,w:220,h:140},{id:"conv1",x:260,y:560,w:220,h:160,surface:"conveyor",conveyorSpeed:-120},{id:"cb1",x:550,y:540,w:115,h:24,surface:"crumble",crumbleDelay:.3},{id:"p2L",x:740,y:540,w:90,h:180},{id:"pad1",x:830,y:540,w:80,h:180,surface:"normal",bounceVy:-990},{id:"p2R",x:910,y:540,w:370,h:180},{id:"highTower",x:1020,y:340,w:240,h:26,solid:!1,visible:!1}],hazards:[{id:"spJoke",type:"spikes",x:1170,y:516,w:48,h:24,dir:"up",hidden:!0}],triggers:[{when:{nearDoor:115},actions:[{type:"setPlatform",targetId:"highTower",solid:!0,visible:!0},{type:"setPlatform",targetId:"pad1",surface:"bouncy"},{type:"moveDoor",toX:1155,toY:268,duration:.45},{type:"activateHazard",targetId:"spJoke"},{type:"shake",intensity:7,duration:.22},{type:"toast",text:"Fener kap\u0131s\u0131 g\xF6zc\xFC kulesine s\u0131\xE7rad\u0131!",duration:2.1}]}]},{id:"O2-6",campaign:"ottoman",chapter:2,stage:6,difficulty:"zor",biome:"ottoman-bosphorus",title:"Asma K\xF6pr\xFC Sabotaj\u0131",subtitle:"Kopacak tabanlar ve lazer m\u0131zraklar\u0131.",spawn:{x:52,y:514},door:{x:1185,y:428},platforms:[{id:"p1",x:0,y:560,w:230,h:160},{id:"dropP",x:230,y:560,w:95,h:160},{id:"p2",x:325,y:540,w:255,h:180},{id:"cb1",x:650,y:510,w:120,h:24,surface:"crumble",crumbleDelay:.28},{id:"p3",x:840,y:500,w:440,h:220}],hazards:[{id:"spear1",type:"spear",x:1290,y:455,w:54,h:18,dir:"left",hidden:!0},{id:"saw1",type:"saw",x:1020,y:454,w:46,h:46,patrol:{axis:"x",range:65,speed:2.3}}],triggers:[{when:{playerXGreater:195},actions:[{type:"dropPlatform",targetId:"dropP"}]},{when:{playerXGreater:430},actions:[{type:"activateHazard",targetId:"spear1",vx:-360},{type:"toast",text:"Kar\u015F\u0131dan m\u0131zrak geliyor!",duration:1.8}]}]},{id:"O2-7",campaign:"ottoman",chapter:2,stage:7,difficulty:"cok-zor",biome:"ottoman-bosphorus",title:"Bo\u011Faz Amirali Z\u0131rhl\u0131s\u0131",subtitle:"Plazma dalgas\u0131 alt\u0131nda Bo\u011Faz kulesinin final kap\u0131s\u0131!",spawn:{x:48,y:534},door:{x:1175,y:448},risingHazard:{type:"plasma",startY:740,minY:380,speed:30,active:!1},platforms:[{id:"p1",x:0,y:580,w:225,h:140},{id:"cb1",x:295,y:540,w:110,h:24,surface:"crumble",crumbleDelay:.3},{id:"p2",x:470,y:520,w:280,h:200},{id:"conv1",x:805,y:520,w:110,h:200,surface:"conveyor",conveyorSpeed:-115},{id:"pad1",x:915,y:520,w:76,h:200,surface:"normal",bounceVy:-990},{id:"p3",x:991,y:520,w:289,h:200},{id:"cmdDeck",x:1020,y:310,w:240,h:26,solid:!1,visible:!1}],hazards:[{id:"saw1",type:"saw",x:655,y:474,w:46,h:46,patrol:{axis:"x",range:35,speed:2.2}},{id:"spGuard",type:"spikes",x:1170,y:496,w:48,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:185},actions:[{type:"startRisingHazard",speed:30,minY:380},{type:"toast",text:"Plazma y\xFCkseliyor, acele et!",duration:2}]},{when:{nearDoor:115},actions:[{type:"setPlatform",targetId:"cmdDeck",solid:!0,visible:!0},{type:"setPlatform",targetId:"pad1",surface:"bouncy"},{type:"moveDoor",toX:1150,toY:238,duration:.45},{type:"activateHazard",targetId:"spGuard"},{type:"shake",intensity:8,duration:.25},{type:"toast",text:"Amiral kap\u0131s\u0131 komuta g\xFCvertesine \xE7ekildi!",duration:2.2}]}]}];var kh=[{id:"O3-1",campaign:"ottoman",chapter:3,stage:1,difficulty:"kolay",biome:"ottoman-galata",title:"Hezarfen \u0130ni\u015F Pisti",subtitle:"Cam g\xF6k-raylar\u0131nda fren yapmay\u0131 unutma!",spawn:{x:64,y:514},door:{x:1170,y:488},platforms:[{id:"g1",x:0,y:560,w:390,h:160,surface:"ice"},{id:"g2",x:480,y:560,w:350,h:160,surface:"ice"},{id:"g3",x:915,y:560,w:365,h:160,surface:"ice"}],hazards:[{id:"sp1",type:"spikes",x:650,y:536,w:48,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:500},actions:[{type:"activateHazard",targetId:"sp1"},{type:"toast",text:"G\xF6k-cam\u0131 \xFCst\xFCnde buz kadar kaygan!",duration:2}]}]},{id:"O3-2",campaign:"ottoman",chapter:3,stage:2,difficulty:"kolay",biome:"ottoman-galata",title:"Galata T\xFCrbin \xC7\u0131k\u0131\u015F\u0131",subtitle:"R\xFCzgar iti\u015Fli yaylarla kulenin \xFCst balkonuna.",spawn:{x:64,y:534},door:{x:1175,y:248},platforms:[{id:"p1",x:0,y:580,w:280,h:140},{id:"pad1",x:310,y:560,w:85,h:22,surface:"bouncy",bounceVy:-940},{id:"p2",x:470,y:420,w:240,h:26},{id:"pad2",x:745,y:420,w:85,h:22,surface:"bouncy",bounceVy:-940},{id:"p3",x:925,y:320,w:355,h:400}],hazards:[{id:"sp1",type:"spikes",x:560,y:396,w:44,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:475},actions:[{type:"activateHazard",targetId:"sp1"}]}]},{id:"O3-3",campaign:"ottoman",chapter:3,stage:3,difficulty:"orta",biome:"ottoman-galata",title:"Kanatlar R\xFCzgarda",subtitle:"Hezarfen r\xFCzgar\u0131 her an tersine d\xF6nebilir!",spawn:{x:56,y:514},door:{x:1180,y:458},windForceX:0,platforms:[{id:"p1",x:0,y:560,w:285,h:160},{id:"cr1",x:355,y:550,w:120,h:24,surface:"crumble",crumbleDelay:.34},{id:"p2",x:540,y:530,w:235,h:190},{id:"cr2",x:840,y:530,w:120,h:24,surface:"crumble",crumbleDelay:.32},{id:"p3",x:1030,y:530,w:250,h:190}],hazards:[{id:"sp1",type:"spikes",x:1090,y:506,w:46,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:155},actions:[{type:"setWind",forceX:110}]},{when:{playerXGreater:540},actions:[{type:"setWind",forceX:-165},{type:"shake",intensity:5,duration:.2},{type:"toast",text:"G\xF6k r\xFCzgar\u0131 tam kar\u015F\u0131dan esiyor!",duration:2}]},{when:{playerXGreater:1005},actions:[{type:"activateHazard",targetId:"sp1"}]}]},{id:"O3-4",campaign:"ottoman",chapter:3,stage:4,difficulty:"orta",biome:"ottoman-galata",title:"Kristal Kubbe Sark\u0131tlar\u0131",subtitle:"Y\xFCzen g\xF6k iskelesi ve d\xFC\u015Fen prizmalar.",spawn:{x:54,y:534},door:{x:1175,y:308},platforms:[{id:"ceil",x:380,y:0,w:480,h:170,surface:"ice"},{id:"p1",x:0,y:580,w:250,h:140},{id:"gay1",x:255,y:560,w:80,h:22,surface:"bouncy",bounceVy:-880},{id:"p2",x:420,y:420,w:200,h:26},{id:"gay2",x:635,y:560,w:85,h:22,surface:"bouncy",bounceVy:-940},{id:"ferry",x:790,y:380,w:145,h:26},{id:"pEnd",x:1045,y:380,w:235,h:340}],hazards:[{id:"ceilSp",type:"icicle",x:615,y:170,w:110,h:42,dir:"down"}],triggers:[{when:{playerXGreater:740},actions:[{type:"slidePlatform",targetId:"ferry",toX:880,toY:380,duration:.7},{type:"toast",text:"G\xF6k sal\u0131 ileri kay\u0131yor!",duration:1.9}]}]},{id:"O3-5",campaign:"ottoman",chapter:3,stage:5,difficulty:"zor",biome:"ottoman-galata",title:"Kule Zirvesine T\u0131rman\u0131\u015F",subtitle:"Galata k\xFClah\u0131n\u0131n alt\u0131na saklanan kap\u0131.",spawn:{x:54,y:534},door:{x:1165,y:488},platforms:[{id:"ceil",x:0,y:0,w:1280,h:48},{id:"s1",x:0,y:580,w:245,h:140},{id:"cr1",x:325,y:560,w:105,h:24,surface:"crumble",crumbleDelay:.3},{id:"s2",x:505,y:540,w:215,h:180},{id:"cr2",x:795,y:520,w:105,h:24,surface:"crumble",crumbleDelay:.28},{id:"lift",x:970,y:560,w:75,h:160,surface:"normal",bounceVy:-970},{id:"s3",x:1045,y:560,w:235,h:160},{id:"highGoal",x:1055,y:380,w:215,h:26,solid:!1,visible:!1}],hazards:[{id:"ic1",type:"icicle",x:580,y:48,w:30,h:52,dir:"down",shatterOnGround:!0}],triggers:[{when:{playerXGreater:470},actions:[{type:"activateHazard",targetId:"ic1",gravity:1550}]},{when:{nearDoor:115},actions:[{type:"setPlatform",targetId:"highGoal",solid:!0,visible:!0},{type:"setPlatform",targetId:"lift",surface:"bouncy"},{type:"moveDoor",toX:1155,toY:308,duration:.45},{type:"shake",intensity:6,duration:.22},{type:"toast",text:"G\xF6k kap\u0131s\u0131 kule k\xFClah\u0131na u\xE7tu!",duration:2.1}]}]},{id:"O3-6",campaign:"ottoman",chapter:3,stage:6,difficulty:"zor",biome:"ottoman-galata",title:"F\u0131rt\u0131na T\xFCrbinleri",subtitle:"R\xFCzgar d\xF6n\xFC\u015Fleri ve g\xF6k presi.",spawn:{x:52,y:514},door:{x:1185,y:418},windForceX:-135,platforms:[{id:"ceil",x:0,y:0,w:1280,h:48},{id:"p1",x:0,y:560,w:260,h:160},{id:"cr1",x:335,y:540,w:120,h:24,surface:"crumble",crumbleDelay:.3},{id:"p2",x:530,y:510,w:220,h:210},{id:"cr2",x:825,y:490,w:120,h:24,surface:"crumble",crumbleDelay:.28},{id:"pEnd",x:1055,y:490,w:225,h:230}],hazards:[{id:"ic1",type:"icicle",x:640,y:48,w:30,h:54,dir:"down",shatterOnGround:!0},{id:"spEnd",type:"spikes",x:1090,y:466,w:46,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:525},actions:[{type:"activateHazard",targetId:"ic1",gravity:1600},{type:"setWind",forceX:185},{type:"toast",text:"T\xFCrbin f\u0131rt\u0131nas\u0131 arkadan itiyor!",duration:2}]},{when:{playerXGreater:1015},actions:[{type:"activateHazard",targetId:"spEnd"}]}]},{id:"O3-7",campaign:"ottoman",chapter:3,stage:7,difficulty:"cok-zor",biome:"ottoman-galata",title:"Hezarfen G\xF6k \u015Eahini",subtitle:"Galata G\xF6k-K\xF6pr\xFCs\xFC\u2019n\xFCn son ve en y\xFCksek s\u0131nav\u0131!",spawn:{x:48,y:534},door:{x:1175,y:468},platforms:[{id:"ceil",x:0,y:0,w:1280,h:48},{id:"p1",x:0,y:580,w:235,h:140},{id:"gay1",x:235,y:580,w:85,h:140,surface:"bouncy",bounceVy:-950},{id:"p2",x:405,y:420,w:215,h:26},{id:"cr1",x:695,y:440,w:120,h:24,surface:"crumble",crumbleDelay:.28},{id:"p3L",x:885,y:540,w:70,h:180},{id:"lift",x:955,y:540,w:75,h:180,surface:"normal",bounceVy:-990},{id:"p3R",x:1030,y:540,w:250,h:180},{id:"highGoal",x:1055,y:340,w:215,h:26,solid:!1,visible:!1}],hazards:[{id:"ic1",type:"icicle",x:500,y:48,w:30,h:54,dir:"down",shatterOnGround:!0},{id:"spGuard",type:"spikes",x:1175,y:516,w:48,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:380},actions:[{type:"activateHazard",targetId:"ic1",gravity:1580}]},{when:{nearDoor:115},actions:[{type:"setPlatform",targetId:"highGoal",solid:!0,visible:!0},{type:"setPlatform",targetId:"lift",surface:"bouncy"},{type:"moveDoor",toX:1155,toY:268,duration:.45},{type:"activateHazard",targetId:"spGuard"},{type:"setWind",forceX:-135},{type:"shake",intensity:7,duration:.24},{type:"toast",text:"G\xF6k-kap\u0131 zirveye ka\xE7t\u0131!",duration:2.2}]}]}];var Nh=[{id:"O4-1",campaign:"ottoman",chapter:4,stage:1,difficulty:"kolay",biome:"ottoman-observatory",title:"Takiy\xFCddin Usturlab\u0131",subtitle:"Y\u0131ld\u0131z kubbesinde yer\xE7ekimi tersine d\xF6n\xFCyor!",spawn:{x:64,y:514},door:{x:1170,y:488},platforms:[{id:"g1",x:0,y:560,w:420,h:160},{id:"ceil",x:350,y:0,w:480,h:110},{id:"g2",x:740,y:560,w:540,h:160}],hazards:[{id:"plPool",type:"lava",x:420,y:688,w:320,h:32}],visualZones:[{type:"thermal",x:390,dir:"up"},{type:"thermal",x:785,dir:"down"}],triggers:[{when:{playerXGreater:390},actions:[{type:"setGravityScale",value:-1},{type:"toast",text:"Usturlap alan\u0131: Kubbe tavan\u0131na \xE7ekiliyorsun!",duration:2.1}]},{when:{playerXGreater:785},actions:[{type:"setGravityScale",value:1}]}]},{id:"O4-2",campaign:"ottoman",chapter:4,stage:2,difficulty:"kolay",biome:"ottoman-observatory",title:"Nebula \xC7ekirde\u011Fi",subtitle:"Y\xFCkselen mor plazmadan y\u0131ld\u0131z balkona t\u0131rman.",spawn:{x:64,y:544},door:{x:1170,y:128},risingHazard:{type:"plasma",startY:730,minY:220,speed:44,active:!1},platforms:[{id:"f0",x:0,y:590,w:290,h:130},{id:"f1",x:345,y:500,w:195,h:26},{id:"f2",x:585,y:405,w:200,h:26},{id:"f3",x:825,y:310,w:185,h:26},{id:"f4",x:1045,y:200,w:235,h:28}],hazards:[],triggers:[{when:{playerXGreater:155},actions:[{type:"startRisingHazard",speed:44,minY:220},{type:"shake",intensity:6,duration:.25},{type:"toast",text:"Y\u0131ld\u0131z \xE7ekirde\u011Fi ta\u015F\u0131yor! T\u0131rman!",duration:2.1}]}]},{id:"O4-3",campaign:"ottoman",chapter:4,stage:3,difficulty:"orta",biome:"ottoman-observatory",title:"Ters K\xFCre Y\xF6r\xFCngesi",subtitle:"Tavandaki kozmik tuzaklar\u0131n \xFCst\xFCnden s\u0131\xE7ra.",spawn:{x:54,y:514},door:{x:1180,y:488},platforms:[{id:"g1",x:0,y:560,w:360,h:160},{id:"ceil",x:280,y:0,w:720,h:100},{id:"g2",x:920,y:560,w:360,h:160}],hazards:[{id:"spCeil",type:"spikes",x:615,y:100,w:54,h:24,dir:"down"},{id:"plBase",type:"lava",x:360,y:690,w:560,h:30}],visualZones:[{type:"thermal",x:315,dir:"up"},{type:"thermal",x:970,dir:"down"}],triggers:[{when:{playerXGreater:315},actions:[{type:"setGravityScale",value:-1},{type:"toast",text:"Tavandaki dikenlere dikkat!",duration:1.9}]},{when:{playerXGreater:970},actions:[{type:"setGravityScale",value:1}]}]},{id:"O4-4",campaign:"ottoman",chapter:4,stage:4,difficulty:"orta",biome:"ottoman-observatory",title:"Karanl\u0131k Rasathane",subtitle:"Y\u0131ld\u0131z \u0131\u015F\u0131klar\u0131 s\xF6nd\xFC \u2014 kovalayan k\xFCtle arkanda!",darkness:!0,spawn:{x:82,y:514},door:{x:1185,y:448},platforms:[{id:"g1",x:0,y:560,w:350,h:160},{id:"g2",x:445,y:540,w:220,h:180},{id:"cb",x:745,y:520,w:115,h:24,surface:"crumble",crumbleDelay:.35},{id:"g3",x:930,y:520,w:350,h:200}],hazards:[{id:"wall",type:"chaser",x:-110,y:140,w:96,h:460,vx:0},{id:"sp1",type:"spikes",x:1015,y:496,w:44,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:170},actions:[{type:"activateHazard",targetId:"wall",vx:200,stopAtX:1055},{type:"shake",intensity:7,duration:.3},{type:"toast",text:"Usturlap bariyeri geliyor! KO\u015E!",duration:2.2}]},{when:{playerXGreater:940},actions:[{type:"activateHazard",targetId:"sp1"}]}]},{id:"O4-5",campaign:"ottoman",chapter:4,stage:5,difficulty:"zor",biome:"ottoman-observatory",title:"Usturlap Kapan\u0131",subtitle:"Batan g\xF6kta\u015F\u0131 ve tavan s\u0131\xE7ramas\u0131.",spawn:{x:54,y:514},door:{x:1185,y:488},platforms:[{id:"v1",x:0,y:560,w:230,h:160},{id:"sink1",x:300,y:560,w:115,h:160},{id:"vMid",x:470,y:560,w:180,h:160},{id:"ceilFlip",x:440,y:0,w:355,h:100},{id:"vEnd",x:730,y:560,w:550,h:160}],hazards:[{id:"plBase",type:"lava",x:230,y:690,w:500,h:30},{id:"spFinal",type:"spikes",x:1070,y:536,w:48,h:24,dir:"up",hidden:!0}],visualZones:[{type:"thermal",x:505,dir:"up"},{type:"thermal",x:745,dir:"down"}],triggers:[{when:{onTouchPlatform:"sink1"},actions:[{type:"slidePlatform",targetId:"sink1",toX:300,toY:665,duration:.55}]},{when:{playerXGreater:505},actions:[{type:"setGravityScale",value:-1},{type:"toast",text:"Tavan y\xF6r\xFCngesine ge\xE7!",duration:1.9}]},{when:{playerXGreater:745},actions:[{type:"setGravityScale",value:1}]},{when:{playerXGreater:1e3},actions:[{type:"activateHazard",targetId:"spFinal"},{type:"shake",intensity:6,duration:.2}]}]},{id:"O4-6",campaign:"ottoman",chapter:4,stage:6,difficulty:"zor",biome:"ottoman-observatory",title:"Tak\u0131my\u0131ld\u0131z Dans\u0131",subtitle:"D\xF6rt termal \xE7ekim de\u011Fi\u015Fimi ve tuzaklar.",spawn:{x:52,y:514},door:{x:1185,y:488},platforms:[{id:"f1",x:0,y:560,w:280,h:160},{id:"c1",x:200,y:0,w:325,h:100},{id:"f2",x:450,y:560,w:350,h:160},{id:"c2",x:735,y:0,w:310,h:100},{id:"f3",x:960,y:560,w:320,h:160}],hazards:[{id:"sp1",type:"spikes",x:610,y:536,w:48,h:24,dir:"up"},{id:"csp1",type:"spikes",x:875,y:100,w:48,h:24,dir:"down"},{id:"plBase",type:"lava",x:280,y:690,w:680,h:30}],visualZones:[{type:"thermal",x:240,dir:"up"},{type:"thermal",x:485,dir:"down"},{type:"thermal",x:760,dir:"up"},{type:"thermal",x:1e3,dir:"down"}],triggers:[{when:{playerXGreater:240},actions:[{type:"setGravityScale",value:-1},{type:"toast",text:"Tavana y\xFCksel!",duration:1.7}]},{when:{playerXGreater:485},actions:[{type:"setGravityScale",value:1}]},{when:{playerXGreater:760},actions:[{type:"setGravityScale",value:-1}]},{when:{playerXGreater:1e3},actions:[{type:"setGravityScale",value:1}]}]},{id:"O4-7",campaign:"ottoman",chapter:4,stage:7,difficulty:"cok-zor",biome:"ottoman-observatory",title:"Kubbe-i Felek",subtitle:"Y\u0131ld\u0131z G\xF6zlemevi\u2019nin karanl\u0131k kozmik finali!",darkness:!0,spawn:{x:48,y:534},door:{x:1175,y:468},risingHazard:{type:"plasma",startY:740,minY:410,speed:24,active:!1},platforms:[{id:"p1",x:0,y:580,w:245,h:140},{id:"c1",x:195,y:0,w:380,h:100},{id:"p2",x:525,y:540,w:280,h:180},{id:"p3L",x:870,y:540,w:70,h:180},{id:"lift",x:940,y:540,w:75,h:180,surface:"normal",bounceVy:-990},{id:"p3R",x:1015,y:540,w:265,h:180},{id:"highAltar",x:1035,y:340,w:225,h:26,solid:!1,visible:!1}],hazards:[{id:"spMid",type:"spikes",x:645,y:516,w:46,h:24,dir:"up",hidden:!0},{id:"spEnd",type:"spikes",x:1170,y:516,w:48,h:24,dir:"up",hidden:!0}],visualZones:[{type:"thermal",x:225,dir:"up"},{type:"thermal",x:545,dir:"down"}],triggers:[{when:{playerXGreater:225},actions:[{type:"setGravityScale",value:-1},{type:"startRisingHazard",speed:24,minY:410},{type:"toast",text:"Karanl\u0131kta tavan \xE7ekimine gir!",duration:2}]},{when:{playerXGreater:545},actions:[{type:"setGravityScale",value:1},{type:"activateHazard",targetId:"spMid"}]},{when:{nearDoor:115},actions:[{type:"setPlatform",targetId:"highAltar",solid:!0,visible:!0},{type:"setPlatform",targetId:"lift",surface:"bouncy"},{type:"moveDoor",toX:1150,toY:268,duration:.45},{type:"activateHazard",targetId:"spEnd"},{type:"shake",intensity:8,duration:.24},{type:"toast",text:"Y\u0131ld\u0131z ge\xE7idi rasathane zirvesine \xE7\u0131kt\u0131!",duration:2.2}]}]}];var Oh=[{id:"O5-1",campaign:"ottoman",chapter:5,stage:1,difficulty:"kolay",biome:"ottoman-shipyard",title:"Siber K\u0131zak Band\u0131",subtitle:"Tersane band\u0131 seni plazma testereye itebilir.",spawn:{x:64,y:514},door:{x:1170,y:488},platforms:[{id:"g1",x:0,y:560,w:300,h:160},{id:"conv1",x:300,y:560,w:320,h:160,surface:"conveyor",conveyorSpeed:145},{id:"g2",x:620,y:560,w:310,h:160},{id:"g3",x:1015,y:560,w:265,h:160}],hazards:[{id:"saw1",type:"saw",x:755,y:514,w:46,h:46,patrol:{axis:"x",range:70,speed:1.9}}],triggers:[]},{id:"O5-2",campaign:"ottoman",chapter:5,stage:2,difficulty:"kolay",biome:"ottoman-shipyard",title:"\u015Eahi Top D\xF6k\xFCm\xFC",subtitle:"Z\u0131rhl\u0131 preslerin ritmini \xF6l\xE7 ve ge\xE7i\u015Fi bul.",spawn:{x:64,y:514},door:{x:1175,y:468},platforms:[{id:"g1",x:0,y:560,w:420,h:160},{id:"g2",x:500,y:540,w:350,h:180},{id:"g3",x:935,y:540,w:345,h:180}],hazards:[{id:"cr1",type:"crusher",x:545,y:260,w:66,h:92,slamCycle:{restY:260,slamY:448,downSpeed:760,upSpeed:210,waitTop:.7,waitBottom:.35,initialDelay:.3}},{id:"cr2",type:"crusher",x:725,y:260,w:66,h:92,slamCycle:{restY:260,slamY:448,downSpeed:760,upSpeed:210,waitTop:.7,waitBottom:.35,initialDelay:.9}}],triggers:[]},{id:"O5-3",campaign:"ottoman",chapter:5,stage:3,difficulty:"orta",biome:"ottoman-shipyard",title:"Ters Kutup Jenerat\xF6r\xFC",subtitle:"Plazma ark\u0131na girince y\xF6n tu\u015Flar\u0131n tersine d\xF6ner!",spawn:{x:54,y:514},door:{x:1185,y:458},platforms:[{id:"g1",x:0,y:560,w:380,h:160},{id:"g2",x:450,y:540,w:280,h:180},{id:"g3",x:800,y:530,w:480,h:190}],hazards:[{id:"sp1",type:"spikes",x:890,y:506,w:46,h:24,dir:"up",hidden:!0}],visualZones:[{type:"teslaArc",x:375},{type:"teslaArc",x:1085}],triggers:[{when:{playerXGreater:375},actions:[{type:"setInvertControls",value:!0},{type:"shake",intensity:6,duration:.2},{type:"toast",text:"Kontroller TERS d\xF6nd\xFC! (Sol \u2194 Sa\u011F)",duration:2.3}]},{when:{playerXGreater:805},actions:[{type:"activateHazard",targetId:"sp1"}]},{when:{playerXGreater:1085},actions:[{type:"setInvertControls",value:!1},{type:"toast",text:"Kontroller normale d\xF6nd\xFC!",duration:1.9}]}]},{id:"O5-4",campaign:"ottoman",chapter:5,stage:4,difficulty:"orta",biome:"ottoman-shipyard",title:"Karanl\u0131k Kad\u0131rga \u0130skelesi",subtitle:"F\u0131rt\u0131na \u015Fim\u015Fekleri ve karanl\u0131kta \xE7al\u0131\u015Fan plazma testeresi.",darkness:!0,spawn:{x:54,y:514},door:{x:1175,y:458},platforms:[{id:"g1",x:0,y:560,w:340,h:160},{id:"trapPanel",x:340,y:560,w:95,h:160},{id:"g2",x:435,y:560,w:350,h:160},{id:"cb1",x:860,y:530,w:115,h:24,surface:"crumble",crumbleDelay:.34},{id:"g3",x:1045,y:530,w:235,h:190}],hazards:[{id:"saw1",type:"saw",x:615,y:514,w:46,h:46,patrol:{axis:"x",range:75,speed:2.2}}],triggers:[{when:{playerXGreater:310},actions:[{type:"dropPlatform",targetId:"trapPanel"},{type:"shake",intensity:6,duration:.2},{type:"toast",text:"Karanl\u0131kta bo\u015Flu\u011Fa dikkat!",duration:2}]}]},{id:"O5-5",campaign:"ottoman",chapter:5,stage:5,difficulty:"zor",biome:"ottoman-shipyard",title:"Plazma K\u0131zaklar\u0131",subtitle:"Konvey\xF6rden ters \xE7ekime, oradan vin\xE7 kap\u0131s\u0131na.",spawn:{x:50,y:534},door:{x:1175,y:468},platforms:[{id:"s1",x:0,y:580,w:210,h:140},{id:"trapS1",x:210,y:580,w:90,h:140},{id:"conv1",x:300,y:580,w:250,h:140,surface:"conveyor",conveyorSpeed:135},{id:"pad1",x:575,y:560,w:70,h:20,surface:"bouncy",bounceVy:-920},{id:"midLow",x:670,y:540,w:170,h:180},{id:"ceilBridge",x:615,y:0,w:300,h:105},{id:"sEndL",x:915,y:540,w:25,h:180},{id:"endPad",x:940,y:540,w:66,h:180,surface:"normal",bounceVy:-990},{id:"sEndR",x:1006,y:540,w:274,h:180},{id:"craneEnd",x:1015,y:340,w:235,h:26,solid:!1,visible:!1}],hazards:[{id:"spJoke",type:"spikes",x:1175,y:516,w:48,h:24,dir:"up",hidden:!0}],visualZones:[{type:"thermal",x:660,dir:"up"},{type:"thermal",x:885,dir:"down"}],triggers:[{when:{playerXGreater:180},actions:[{type:"dropPlatform",targetId:"trapS1"}]},{when:{playerXGreater:660},actions:[{type:"setGravityScale",value:-1},{type:"toast",text:"Yer\xE7ekimi ters! Tavandan devam et!",duration:2}]},{when:{playerXGreater:885},actions:[{type:"setGravityScale",value:1}]},{when:{nearDoor:115},actions:[{type:"setPlatform",targetId:"craneEnd",solid:!0,visible:!0},{type:"setPlatform",targetId:"endPad",surface:"bouncy"},{type:"moveDoor",toX:1150,toY:268,duration:.45},{type:"activateHazard",targetId:"spJoke"},{type:"shake",intensity:8,duration:.25},{type:"toast",text:"Kap\u0131 tersane vincine \xE7ekildi!",duration:2.2}]}]},{id:"O5-6",campaign:"ottoman",chapter:5,stage:6,difficulty:"zor",biome:"ottoman-shipyard",title:"Y\xFCksek Voltaj Tersanesi",subtitle:"Karanl\u0131kta ters kutup ark\u0131 ve dev testere.",darkness:!0,spawn:{x:52,y:514},door:{x:1185,y:458},platforms:[{id:"g1",x:0,y:560,w:320,h:160},{id:"g2",x:400,y:560,w:360,h:160},{id:"cb1",x:830,y:530,w:100,h:24,surface:"crumble",crumbleDelay:.34},{id:"convR",x:960,y:530,w:120,h:190,surface:"conveyor",conveyorSpeed:-135},{id:"g3",x:1080,y:530,w:200,h:190}],hazards:[{id:"saw1",type:"saw",x:600,y:514,w:46,h:46,patrol:{axis:"x",range:70,speed:2.4}}],visualZones:[{type:"teslaArc",x:420},{type:"teslaArc",x:1040}],triggers:[{when:{playerXGreater:420},actions:[{type:"setInvertControls",value:!0},{type:"shake",intensity:6,duration:.2},{type:"toast",text:"Karanl\u0131kta kontroller TERS!",duration:2.2}]},{when:{playerXGreater:1040},actions:[{type:"setInvertControls",value:!1},{type:"toast",text:"Kontroller normale d\xF6nd\xFC!",duration:1.8}]}]},{id:"O5-7",campaign:"ottoman",chapter:5,stage:7,difficulty:"cok-zor",biome:"ottoman-shipyard",title:"B\xFCy\xFCk Siber Sultan Finali",subtitle:"F\xFCt\xFCristik Osmanl\u0131 seferinin en zorlu son kalesi!",darkness:!0,spawn:{x:48,y:534},door:{x:1175,y:488},platforms:[{id:"s1",x:0,y:580,w:215,h:140},{id:"conv1",x:250,y:580,w:185,h:140,surface:"conveyor",conveyorSpeed:130},{id:"ceilZone",x:400,y:0,w:320,h:105},{id:"mid",x:460,y:560,w:170,h:160},{id:"s2L",x:705,y:560,w:135,h:160},{id:"endPad",x:840,y:560,w:80,h:160,surface:"normal",bounceVy:-1020},{id:"s2R",x:920,y:560,w:360,h:160},{id:"altGoal",x:965,y:330,w:295,h:26,solid:!1,visible:!1}],hazards:[{id:"cr1",type:"crusher",x:315,y:260,w:64,h:95,slamCycle:{restY:260,slamY:485,downSpeed:800,upSpeed:220,waitTop:.72,waitBottom:.35,initialDelay:.45}},{id:"spJoke",type:"spikes",x:1170,y:536,w:48,h:24,dir:"up",hidden:!0}],visualZones:[{type:"thermal",x:445,dir:"up"},{type:"thermal",x:695,dir:"down"}],triggers:[{when:{playerXGreater:445},actions:[{type:"setGravityScale",value:-1},{type:"toast",text:"F\u0131rt\u0131nada yer\xE7ekimi ters d\xF6nd\xFC!",duration:2}]},{when:{playerXGreater:695},actions:[{type:"setGravityScale",value:1}]},{when:{nearDoor:115},actions:[{type:"setPlatform",targetId:"altGoal",solid:!0,visible:!0},{type:"setPlatform",targetId:"endPad",surface:"bouncy"},{type:"moveDoor",toX:1150,toY:258,duration:.45},{type:"activateHazard",targetId:"spJoke"},{type:"shake",intensity:8,duration:.25},{type:"toast",text:"Son kap\u0131 komuta k\xF6pr\xFCs\xFCne f\u0131rlad\u0131!",duration:2.3}]}]}];var Uh=[{id:"T1-1",campaign:"turkey",chapter:1,stage:1,difficulty:"kolay",biome:"turkey-amasya",title:"Ye\u015Fil\u0131rmak K\u0131y\u0131s\u0131",subtitle:"Amasya Elmas\u0131 bah\xE7elerinden Har\u015Fena eteklerine ilk ad\u0131m.",spawn:{x:64,y:514},door:{x:1170,y:488},platforms:[{id:"g1",x:0,y:560,w:380,h:160},{id:"trap1",x:380,y:560,w:105,h:160},{id:"g2",x:485,y:560,w:350,h:160},{id:"trap2",x:835,y:560,w:110,h:160},{id:"g3",x:945,y:560,w:335,h:160}],hazards:[],triggers:[{when:{playerXGreater:355},actions:[{type:"dropPlatform",targetId:"trap1"},{type:"shake",intensity:6,duration:.2},{type:"toast",text:"Ye\u015Fil\u0131rmak r\u0131ht\u0131m ta\u015F\u0131 \xE7\xF6kt\xFC!",duration:2}]},{when:{playerXGreater:815},actions:[{type:"dropPlatform",targetId:"trap2"},{type:"shake",intensity:6,duration:.2}]}]},{id:"T1-2",campaign:"turkey",chapter:1,stage:2,difficulty:"kolay",biome:"turkey-amasya",title:"Yal\u0131boyu Evleri",subtitle:"Tarihi konaklar\u0131n ah\u015Fap iskeleleri bir anda kayabilir.",spawn:{x:64,y:514},door:{x:1175,y:488},platforms:[{id:"g1",x:0,y:560,w:375,h:160},{id:"g2",x:470,y:560,w:230,h:160},{id:"g3",x:810,y:560,w:470,h:160}],hazards:[{id:"sp1",type:"spikes",x:970,y:536,w:54,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:390},actions:[{type:"slidePlatform",targetId:"g2",toX:520,toY:560,duration:.25},{type:"toast",text:"Yal\u0131boyu iskelesi geri \xE7ekildi!",duration:2}]},{when:{playerXGreater:890},actions:[{type:"activateHazard",targetId:"sp1"},{type:"shake",intensity:5,duration:.16}]}]},{id:"T1-3",campaign:"turkey",chapter:1,stage:3,difficulty:"orta",biome:"turkey-amasya",title:"Kral Kaya Mezarlar\u0131",subtitle:"Har\u015Fena kayal\u0131klar\u0131nda sahte ta\u015Flara ve yuvarlanan kayalara dikkat!",spawn:{x:56,y:514},door:{x:1180,y:348},platforms:[{id:"g1",x:0,y:560,w:295,h:160},{id:"fake1",x:295,y:560,w:110,h:160,surface:"fake"},{id:"g2",x:405,y:525,w:280,h:195},{id:"cb1",x:750,y:500,w:110,h:24,surface:"crumble",crumbleDelay:.3},{id:"spring1",x:915,y:500,w:80,h:26,surface:"bouncy",bounceVy:-940},{id:"g3",x:1030,y:420,w:250,h:300}],hazards:[{id:"b1",type:"boulder",x:515,y:-55,w:46,h:46,gravity:1650,hidden:!0,stopOnGround:!0}],triggers:[{when:{playerXGreater:470},actions:[{type:"activateHazard",targetId:"b1"},{type:"toast",text:"Pontus kaya blo\u011Fu d\xFC\u015F\xFCyor!",duration:2}]}]},{id:"T1-4",campaign:"turkey",chapter:1,stage:4,difficulty:"orta",biome:"turkey-amasya",title:"Ferhat ile \u015Eirin Kanal\u0131",subtitle:"Da\u011Flar\u0131 delen su kanal\u0131n\u0131n \xFCst\xFCnde hareketli testere ve ka\xE7an kap\u0131.",spawn:{x:56,y:514},door:{x:1165,y:468},platforms:[{id:"g1",x:0,y:560,w:260,h:160},{id:"m1",x:335,y:530,w:140,h:26,patrol:{axis:"x",range:55,speed:1.8}},{id:"g2",x:565,y:540,w:290,h:180},{id:"g3",x:940,y:540,w:340,h:180}],hazards:[{id:"saw1",type:"saw",x:700,y:494,w:46,h:46,patrol:{axis:"x",range:65,speed:2.2}},{id:"sp1",type:"spikes",x:1015,y:516,w:46,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:965},actions:[{type:"activateHazard",targetId:"sp1"},{type:"moveDoor",toX:1210,toY:468,duration:.35},{type:"toast",text:"\u015Eirin K\xF6\u015Fk\xFC kap\u0131s\u0131 kenara kayd\u0131!",duration:2}]}]},{id:"T1-5",campaign:"turkey",chapter:1,stage:5,difficulty:"zor",biome:"turkey-amasya",title:"Har\u015Fena Kalesi Surlar\u0131",subtitle:"Dikkat: U\xE7urumdan d\xFC\u015Fen \u015Fehzade g\xF6kten burca \u0131\u015F\u0131nlan\u0131r! (Sonsuz D\xF6ng\xFC)",spawn:{x:56,y:514},door:{x:1175,y:348},physicsRules:{voidWrap:!0},platforms:[{id:"g1",x:0,y:560,w:290,h:160},{id:"b1",x:355,y:535,w:80,h:26,surface:"bouncy",bounceVy:-980},{id:"top1",x:475,y:420,w:245,h:26},{id:"cb1",x:790,y:420,w:105,h:24,surface:"crumble",crumbleDelay:.25},{id:"top2",x:965,y:420,w:315,h:300}],hazards:[{id:"sp1",type:"spikes",x:575,y:396,w:48,h:24,dir:"up"},{id:"sp2",type:"spikes",x:1055,y:396,w:44,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:985},actions:[{type:"activateHazard",targetId:"sp2"},{type:"shake",intensity:6,duration:.2}]}]},{id:"T1-6",campaign:"turkey",chapter:1,stage:6,difficulty:"zor",biome:"turkey-amasya",title:"Ye\u015Fil\u0131rmak Ta\u015Fk\u0131n\u0131",subtitle:"Nehir sular\u0131 h\u0131zla y\xFCkseliyor! Asma k\xF6pr\xFCden yukar\u0131 ka\xE7.",spawn:{x:56,y:574},door:{x:1175,y:208},risingHazard:{type:"water",startY:710,minY:290,speed:30,active:!1},platforms:[{id:"g1",x:0,y:620,w:320,h:100},{id:"s1",x:385,y:580,w:85,h:26,surface:"bouncy",bounceVy:-980},{id:"mid1",x:525,y:450,w:230,h:26},{id:"s2",x:805,y:420,w:85,h:26,surface:"bouncy",bounceVy:-980},{id:"top",x:945,y:280,w:335,h:440}],hazards:[{id:"saw1",type:"saw",x:640,y:404,w:46,h:46,patrol:{axis:"x",range:55,speed:2.3}},{id:"sp1",type:"spikes",x:1030,y:256,w:44,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:210},actions:[{type:"startRisingHazard",speed:32},{type:"toast",text:"Ye\u015Fil\u0131rmak ta\u015F\u0131yor! \xDCst kaleye t\u0131rman!",duration:2.4}]},{when:{playerXGreater:970},actions:[{type:"activateHazard",targetId:"sp1"}]}]},{id:"T1-7",campaign:"turkey",chapter:1,stage:7,difficulty:"cok-zor",biome:"turkey-amasya",title:"Har\u015Fena Kale Finali",subtitle:"Duvarlardan sek, k\u0131r\u0131lan surlar\u0131 a\u015F ve \u015Eehzade kap\u0131s\u0131na ula\u015F!",spawn:{x:54,y:514},door:{x:1185,y:408},physicsRules:{bounceWalls:!0},platforms:[{id:"g1",x:0,y:560,w:280,h:160},{id:"cb1",x:355,y:525,w:105,h:24,surface:"crumble",crumbleDelay:.24},{id:"g2",x:530,y:500,w:240,h:220},{id:"cb2",x:840,y:490,w:100,h:24,surface:"crumble",crumbleDelay:.24},{id:"g3",x:1010,y:480,w:270,h:240}],hazards:[{id:"cr1",type:"crusher",x:615,y:230,w:64,h:92,slamCycle:{restY:230,slamY:408,downSpeed:760,upSpeed:220,waitTop:.65,waitBottom:.3,initialDelay:.2}},{id:"sp1",type:"spikes",x:1070,y:456,w:46,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:1015},actions:[{type:"activateHazard",targetId:"sp1"},{type:"moveDoor",toX:1210,toY:408,duration:.3},{type:"toast",text:"Elma bah\xE7esi son kilit a\xE7\u0131l\u0131yor!",duration:2.1}]}]}];var Fh=[{id:"T2-1",campaign:"turkey",chapter:2,stage:1,difficulty:"kolay",biome:"turkey-yozgat",title:"Saat Kulesi Meydan\u0131",subtitle:"Bozok Yaylas\u0131 r\xFCzgar\u0131 e\u015Fli\u011Finde Saat Kulesi \xF6n\xFCne ilerle.",spawn:{x:64,y:514},door:{x:1170,y:488},platforms:[{id:"g1",x:0,y:560,w:390,h:160},{id:"trap1",x:390,y:560,w:110,h:160},{id:"g2",x:500,y:560,w:330,h:160},{id:"g3",x:920,y:560,w:360,h:160}],hazards:[{id:"sp1",type:"spikes",x:675,y:536,w:46,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:365},actions:[{type:"dropPlatform",targetId:"trap1"},{type:"setWind",forceX:-120},{type:"toast",text:"Yayla r\xFCzgar\u0131 arkandan itmek yerine geri estirdi!",duration:2.2}]},{when:{playerXGreater:615},actions:[{type:"activateHazard",targetId:"sp1"},{type:"shake",intensity:5,duration:.16}]}]},{id:"T2-2",campaign:"turkey",chapter:2,stage:2,difficulty:"kolay",biome:"turkey-yozgat",title:"\xC7aml\u0131k Milli Park\u0131",subtitle:"\xC7aml\u0131k patikas\u0131ndaki \xE7\xFCr\xFCk k\xFCt\xFCk k\xF6pr\xFClere basarken acele et.",spawn:{x:64,y:514},door:{x:1175,y:468},platforms:[{id:"g1",x:0,y:560,w:310,h:160},{id:"cb1",x:385,y:540,w:115,h:24,surface:"crumble",crumbleDelay:.34},{id:"g2",x:575,y:540,w:225,h:180},{id:"cb2",x:870,y:540,w:110,h:24,surface:"crumble",crumbleDelay:.32},{id:"g3",x:1050,y:540,w:230,h:180}],hazards:[{id:"saw1",type:"saw",x:685,y:494,w:44,h:44,patrol:{axis:"x",range:55,speed:1.9}}],triggers:[]},{id:"T2-3",campaign:"turkey",chapter:2,stage:3,difficulty:"orta",biome:"turkey-yozgat",title:"Testi Kebab\u0131 Oca\u011F\u0131",subtitle:"K\xF6zl\xFC ocaklar\u0131n \xFCst\xFCnden yayla tramboliniyle atla!",spawn:{x:56,y:514},door:{x:1180,y:348},platforms:[{id:"g1",x:0,y:560,w:320,h:160},{id:"spPad",x:390,y:530,w:85,h:26,surface:"bouncy",bounceVy:-960},{id:"mid",x:525,y:440,w:280,h:280},{id:"m1",x:875,y:430,w:115,h:24,patrol:{axis:"x",range:45,speed:1.9}},{id:"g3",x:1055,y:420,w:225,h:300}],hazards:[{id:"coal1",type:"lava",x:320,y:690,w:205,h:30},{id:"sp1",type:"spikes",x:660,y:416,w:46,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:590},actions:[{type:"activateHazard",targetId:"sp1"},{type:"toast",text:"S\u0131cak testi k\xF6z\xFCne dikkat!",duration:2}]}]},{id:"T2-4",campaign:"turkey",chapter:2,stage:4,difficulty:"orta",biome:"turkey-yozgat",title:"Saat Gongu Tuza\u011F\u0131",subtitle:"Saat \xE7ald\u0131\u011F\u0131nda y\xF6nlerin tersine d\xF6ner \u2014 ritmi bozma!",spawn:{x:56,y:514},door:{x:1175,y:468},platforms:[{id:"g1",x:0,y:560,w:360,h:160},{id:"g2",x:435,y:540,w:310,h:180},{id:"g3",x:820,y:540,w:460,h:180}],hazards:[{id:"sp1",type:"spikes",x:930,y:516,w:48,h:24,dir:"up",hidden:!0}],visualZones:[{type:"teslaArc",x:375},{type:"teslaArc",x:1095}],triggers:[{when:{playerXGreater:375},actions:[{type:"setInvertControls",value:!0},{type:"toast",text:"Saat Kulesi gongu: Y\xF6n tu\u015Flar\u0131 TERS!",duration:2.2}]},{when:{playerXGreater:860},actions:[{type:"activateHazard",targetId:"sp1"}]},{when:{playerXGreater:1095},actions:[{type:"setInvertControls",value:!1},{type:"toast",text:"Gong sustu, kontroller d\xFCzeldi!",duration:1.7}]}]},{id:"T2-5",campaign:"turkey",chapter:2,stage:5,difficulty:"zor",biome:"turkey-yozgat",title:"\xC7apano\u011Flu Kemerleri",subtitle:"Her z\u0131play\u0131\u015Fta z\u0131plama g\xFCc\xFCn ekstra artar, tavana \xE7arpma!",spawn:{x:56,y:514},door:{x:1185,y:408},physicsRules:{jumpVelocityMult:1.15},platforms:[{id:"g1",x:0,y:560,w:280,h:160},{id:"p1",x:355,y:495,w:130,h:24},{id:"p2",x:560,y:430,w:145,h:24},{id:"cb1",x:775,y:460,w:110,h:24,surface:"crumble",crumbleDelay:.26},{id:"g3",x:960,y:480,w:320,h:240}],hazards:[{id:"saw1",type:"saw",x:635,y:384,w:44,h:44,patrol:{axis:"y",range:55,speed:2.3}},{id:"sp1",type:"spikes",x:1045,y:456,w:46,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:990},actions:[{type:"activateHazard",targetId:"sp1"},{type:"setWind",forceX:-145}]}]},{id:"T2-6",campaign:"turkey",chapter:2,stage:6,difficulty:"zor",biome:"turkey-yozgat",title:"Kerkenez Surlar\u0131",subtitle:"Z\u0131play\u0131nca yer\xE7ekimi terse d\xF6ner! \xC7ift r\xFCzgar ak\u0131m\u0131 seni bekliyor.",spawn:{x:56,y:514},door:{x:1180,y:488},physicsRules:{jumpFlipsGravity:!0},platforms:[{id:"g1",x:0,y:560,w:360,h:160},{id:"c1",x:260,y:40,w:500,h:90},{id:"g2",x:560,y:560,w:320,h:160},{id:"c2",x:760,y:40,w:300,h:90},{id:"g3",x:970,y:560,w:310,h:160}],hazards:[{id:"sp1",type:"spikes",x:675,y:536,w:48,h:24,dir:"up"},{id:"csp1",type:"spikes",x:870,y:130,w:48,h:24,dir:"down"}],triggers:[]},{id:"T2-7",campaign:"turkey",chapter:2,stage:7,difficulty:"cok-zor",biome:"turkey-yozgat",title:"Bozok Zirve \xC7an\u0131 (Final)",subtitle:"Karanl\u0131kta f\u0131rt\u0131na, presler ve ka\xE7an saat kulesi kap\u0131s\u0131!",spawn:{x:54,y:514},door:{x:1170,y:468},platforms:[{id:"g1",x:0,y:560,w:280,h:160},{id:"conv1",x:345,y:540,w:250,h:180,surface:"conveyor",conveyorSpeed:-125},{id:"g2",x:665,y:540,w:230,h:180},{id:"g3",x:965,y:540,w:315,h:180}],hazards:[{id:"cr1",type:"crusher",x:745,y:250,w:66,h:92,slamCycle:{restY:250,slamY:448,downSpeed:780,upSpeed:220,waitTop:.65,waitBottom:.3,initialDelay:.2}},{id:"sp1",type:"spikes",x:1035,y:516,w:48,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:340},actions:[{type:"setWind",forceX:-150},{type:"toast",text:"Yayla f\u0131rt\u0131nas\u0131 \u015Fiddetlendi!",duration:2}]},{when:{playerXGreater:985},actions:[{type:"setWind",forceX:0},{type:"activateHazard",targetId:"sp1"},{type:"moveDoor",toX:1210,toY:468,duration:.3}]}]}];var Bh=[{id:"T3-1",campaign:"turkey",chapter:3,stage:1,difficulty:"kolay",biome:"turkey-erzurum",title:"Yakutiye Buz Pisti",subtitle:"Paland\xF6ken ayaz\u0131nda kaygan buz ta\u015Flar\u0131n\u0131n \xFCst\xFCnden kayarak ge\xE7.",spawn:{x:64,y:514},door:{x:1170,y:488},platforms:[{id:"g1",x:0,y:560,w:300,h:160},{id:"ice1",x:300,y:560,w:380,h:160,surface:"ice"},{id:"trap1",x:680,y:560,w:110,h:160,surface:"ice"},{id:"g2",x:790,y:560,w:490,h:160}],hazards:[{id:"sp1",type:"spikes",x:965,y:536,w:48,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:645},actions:[{type:"dropPlatform",targetId:"trap1"},{type:"toast",text:"Erzurum buzu yar\u0131ld\u0131!",duration:2}]},{when:{playerXGreater:905},actions:[{type:"activateHazard",targetId:"sp1"}]}]},{id:"T3-2",campaign:"turkey",chapter:3,stage:2,difficulty:"kolay",biome:"turkey-erzurum",title:"\xC7ifte Minareli Avlu",subtitle:"Kar sa\xE7aklar\u0131ndan sark\u0131tlar d\xFC\u015F\xFCyor, buz k\xF6pr\xFCler k\u0131r\u0131lgan.",spawn:{x:64,y:514},door:{x:1175,y:468},platforms:[{id:"g1",x:0,y:560,w:360,h:160},{id:"cb1",x:430,y:540,w:115,h:24,surface:"crumble",crumbleDelay:.3},{id:"ice1",x:620,y:540,w:260,h:180,surface:"ice"},{id:"g2",x:955,y:540,w:325,h:180}],hazards:[{id:"iceDrop1",type:"boulder",x:730,y:-50,w:44,h:44,gravity:1650,hidden:!0,stopOnGround:!0},{id:"sp1",type:"spikes",x:1030,y:516,w:48,h:24,dir:"up"}],triggers:[{when:{playerXGreater:650},actions:[{type:"activateHazard",targetId:"iceDrop1"},{type:"toast",text:"Minare sa\xE7aklar\u0131ndan buz k\xFCtlesi d\xFC\u015Ft\xFC!",duration:2}]}]},{id:"T3-3",campaign:"turkey",chapter:3,stage:3,difficulty:"orta",biome:"turkey-erzurum",title:"Paland\xF6ken Kayak Pisti",subtitle:"E\u011Fimli kayak rampas\u0131ndan f\u0131rlay\u0131p Ca\u011F Kebab\u0131 oca\u011F\u0131na in.",spawn:{x:56,y:514},door:{x:1185,y:348},platforms:[{id:"g1",x:0,y:560,w:310,h:160},{id:"ski1",x:380,y:525,w:90,h:26,surface:"bouncy",bounceVy:-980},{id:"ice1",x:530,y:420,w:260,h:26,surface:"ice"},{id:"ski2",x:855,y:420,w:85,h:26,surface:"bouncy",bounceVy:-920},{id:"g2",x:1010,y:420,w:270,h:300}],hazards:[{id:"saw1",type:"saw",x:660,y:374,w:46,h:46,patrol:{axis:"x",range:70,speed:2.3}},{id:"sp1",type:"spikes",x:1085,y:396,w:44,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:1030},actions:[{type:"activateHazard",targetId:"sp1"}]}]},{id:"T3-4",campaign:"turkey",chapter:3,stage:4,difficulty:"orta",biome:"turkey-erzurum",title:"Tortum \u015Eelalesi Buzulu",subtitle:"Buz sark\u0131tlar\u0131, hareketli kar k\xFCtlesi ve donma r\xFCzgar\u0131!",spawn:{x:56,y:514},door:{x:1180,y:448},platforms:[{id:"g1",x:0,y:560,w:280,h:160},{id:"m1",x:350,y:530,w:150,h:26,surface:"ice",patrol:{axis:"x",range:55,speed:2}},{id:"ice1",x:585,y:520,w:255,h:200,surface:"ice"},{id:"g2",x:920,y:520,w:360,h:200}],hazards:[{id:"sp1",type:"spikes",x:700,y:496,w:48,h:24,dir:"up",hidden:!0},{id:"b1",type:"boulder",x:985,y:-55,w:46,h:46,gravity:1650,hidden:!0,stopOnGround:!0}],triggers:[{when:{playerXGreater:550},actions:[{type:"setWind",forceX:-135},{type:"activateHazard",targetId:"sp1"},{type:"toast",text:"Tortum tipi r\xFCzgar\u0131 esmeye ba\u015Flad\u0131!",duration:2.1}]},{when:{playerXGreater:925},actions:[{type:"activateHazard",targetId:"b1"}]}]},{id:"T3-5",campaign:"turkey",chapter:3,stage:5,difficulty:"zor",biome:"turkey-erzurum",title:"Oltu Ta\u015F\u0131 Madeni",subtitle:"Her z\u0131plamada y\xF6n tu\u015Flar\u0131n de\u011Fi\u015Fir + buz zeminde denge sa\u011Fla!",spawn:{x:56,y:514},door:{x:1185,y:468},physicsRules:{toggleInvertOnJump:!0},platforms:[{id:"g1",x:0,y:560,w:330,h:160},{id:"ice1",x:400,y:540,w:280,h:180,surface:"ice"},{id:"cb1",x:745,y:540,w:110,h:24,surface:"crumble",crumbleDelay:.28},{id:"g2",x:925,y:540,w:355,h:180}],hazards:[{id:"sp1",type:"spikes",x:540,y:516,w:48,h:24,dir:"up"},{id:"sp2",type:"spikes",x:1020,y:516,w:48,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:950},actions:[{type:"activateHazard",targetId:"sp2"}]}]},{id:"T3-6",campaign:"turkey",chapter:3,stage:6,difficulty:"zor",biome:"turkey-erzurum",title:"Aziziye Tabyalar\u0131",subtitle:"Ayna kamera yan\u0131lsamas\u0131 + buzlu siper ge\xE7i\u015Fi!",spawn:{x:56,y:514},door:{x:1185,y:468},physicsRules:{mirrorCameraX:!0},platforms:[{id:"g1",x:0,y:560,w:320,h:160},{id:"ice1",x:390,y:540,w:260,h:180,surface:"ice"},{id:"m1",x:720,y:540,w:150,h:26,surface:"ice",patrol:{axis:"x",range:45,speed:2}},{id:"g2",x:945,y:540,w:335,h:180}],hazards:[{id:"saw1",type:"saw",x:520,y:494,w:46,h:46,patrol:{axis:"x",range:60,speed:2.3}},{id:"sp1",type:"spikes",x:1040,y:516,w:46,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:970},actions:[{type:"activateHazard",targetId:"sp1"},{type:"toast",text:"Ayna d\xFCnyas\u0131nda son diken!",duration:2}]}]},{id:"T3-7",campaign:"turkey",chapter:3,stage:7,difficulty:"cok-zor",biome:"turkey-erzurum",title:"Paland\xF6ken Ejder Zirvesi (Final)",subtitle:"Karanl\u0131k ayazda k\u0131r\u0131lan buzlar, y\xFCkselen kar f\u0131rt\u0131nas\u0131 ve Dada\u015F kap\u0131s\u0131!",spawn:{x:54,y:574},door:{x:1175,y:208},darkness:!0,risingHazard:{type:"water",startY:710,minY:300,speed:28,active:!1},platforms:[{id:"g1",x:0,y:620,w:290,h:100},{id:"s1",x:355,y:580,w:85,h:26,surface:"bouncy",bounceVy:-990},{id:"ice1",x:500,y:450,w:230,h:24,surface:"ice"},{id:"cb1",x:785,y:440,w:95,h:24,surface:"crumble",crumbleDelay:.24},{id:"s2",x:915,y:410,w:80,h:26,surface:"bouncy",bounceVy:-980},{id:"top",x:1030,y:280,w:250,h:440}],hazards:[{id:"sp1",type:"spikes",x:610,y:426,w:44,h:24,dir:"up"},{id:"sp2",type:"spikes",x:1085,y:256,w:42,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:195},actions:[{type:"startRisingHazard",speed:30},{type:"toast",text:"\xC7\u0131\u011F y\xFCkseliyor! Ejder tepesine f\u0131rla!",duration:2.4}]},{when:{playerXGreater:1035},actions:[{type:"activateHazard",targetId:"sp2"},{type:"shake",intensity:6,duration:.2}]}]}];var zh=[{id:"T4-1",campaign:"turkey",chapter:4,stage:1,difficulty:"kolay",biome:"turkey-corum",title:"Hattu\u015Fa Aslanl\u0131 Kap\u0131",subtitle:"Hitit ta\u015F ge\xE7idinin alt\u0131nda sakl\u0131 \xE7\xF6kme ta\u015Flar\u0131 ve leblebi yolu.",spawn:{x:64,y:514},door:{x:1170,y:488},platforms:[{id:"g1",x:0,y:560,w:375,h:160},{id:"trap1",x:375,y:560,w:110,h:160},{id:"g2",x:485,y:560,w:350,h:160},{id:"g3",x:920,y:560,w:360,h:160}],hazards:[{id:"b1",type:"boulder",x:645,y:-55,w:46,h:46,gravity:1650,hidden:!0,stopOnGround:!0}],triggers:[{when:{playerXGreater:350},actions:[{type:"dropPlatform",targetId:"trap1"},{type:"toast",text:"Aslanl\u0131 Kap\u0131 e\u015Fi\u011Fi \xE7\xF6kt\xFC!",duration:2}]},{when:{playerXGreater:605},actions:[{type:"activateHazard",targetId:"b1"},{type:"shake",intensity:6,duration:.2}]}]},{id:"T4-2",campaign:"turkey",chapter:4,stage:2,difficulty:"kolay",biome:"turkey-corum",title:"Alacah\xF6y\xFCk G\xFCne\u015F Kursu",subtitle:"Tun\xE7 G\xFCne\u015F Kursu alan\u0131nda yer\xE7ekimi tersine d\xF6ner, tavandan y\xFCr\xFC!",spawn:{x:60,y:514},door:{x:1175,y:488},platforms:[{id:"g1",x:0,y:560,w:410,h:160},{id:"c1",x:320,y:0,w:495,h:110},{id:"g2",x:745,y:560,w:535,h:160}],hazards:[{id:"sp1",type:"spikes",x:980,y:536,w:48,h:24,dir:"up",hidden:!0}],visualZones:[{type:"thermal",x:345,dir:"up"},{type:"thermal",x:775,dir:"down"}],triggers:[{when:{playerXGreater:345},actions:[{type:"setGravityScale",value:-1},{type:"toast",text:"G\xFCne\u015F Kursu seni tavana \xE7ekti!",duration:2}]},{when:{playerXGreater:775},actions:[{type:"setGravityScale",value:1}]},{when:{playerXGreater:920},actions:[{type:"activateHazard",targetId:"sp1"}]}]},{id:"T4-3",campaign:"turkey",chapter:4,stage:3,difficulty:"orta",biome:"turkey-corum",title:"Yaz\u0131l\u0131kaya Kabartmalar\u0131",subtitle:"Sahte kil ta\u015Flar\u0131n\u0131 a\u015F ve antik preslerin alt\u0131ndan s\u0131yr\u0131l.",spawn:{x:56,y:514},door:{x:1180,y:468},platforms:[{id:"g1",x:0,y:560,w:280,h:160},{id:"fake1",x:280,y:560,w:110,h:160,surface:"fake"},{id:"g2",x:390,y:540,w:390,h:180},{id:"cb1",x:850,y:540,w:105,h:24,surface:"crumble",crumbleDelay:.28},{id:"g3",x:1020,y:540,w:260,h:180}],hazards:[{id:"cr1",type:"crusher",x:525,y:250,w:66,h:92,slamCycle:{restY:250,slamY:448,downSpeed:760,upSpeed:210,waitTop:.7,waitBottom:.3,initialDelay:.2}},{id:"cr2",type:"crusher",x:685,y:250,w:66,h:92,slamCycle:{restY:250,slamY:448,downSpeed:760,upSpeed:210,waitTop:.7,waitBottom:.3,initialDelay:.75}}],triggers:[]},{id:"T4-4",campaign:"turkey",chapter:4,stage:4,difficulty:"orta",biome:"turkey-corum",title:"Bo\u011Fazkale Yeralt\u0131 T\xFCneli",subtitle:"Potern ge\xE7idinde tavan-zemin yer\xE7ekimi sal\u0131n\u0131m\u0131 ve ka\xE7an kap\u0131.",spawn:{x:56,y:514},door:{x:1170,y:488},platforms:[{id:"g1",x:0,y:560,w:300,h:160},{id:"c1",x:240,y:0,w:360,h:100},{id:"g2",x:520,y:560,w:290,h:160},{id:"c2",x:750,y:0,w:300,h:100},{id:"g3",x:960,y:560,w:320,h:160}],hazards:[{id:"csp1",type:"spikes",x:430,y:100,w:46,h:24,dir:"down"},{id:"sp1",type:"spikes",x:660,y:536,w:46,h:24,dir:"up"},{id:"sp2",type:"spikes",x:1070,y:536,w:46,h:24,dir:"up",hidden:!0}],visualZones:[{type:"thermal",x:265,dir:"up"},{type:"thermal",x:545,dir:"down"},{type:"thermal",x:775,dir:"up"},{type:"thermal",x:990,dir:"down"}],triggers:[{when:{playerXGreater:265},actions:[{type:"setGravityScale",value:-1}]},{when:{playerXGreater:545},actions:[{type:"setGravityScale",value:1}]},{when:{playerXGreater:775},actions:[{type:"setGravityScale",value:-1}]},{when:{playerXGreater:990},actions:[{type:"setGravityScale",value:1},{type:"activateHazard",targetId:"sp2"}]}]},{id:"T4-5",campaign:"turkey",chapter:4,stage:5,difficulty:"zor",biome:"turkey-corum",title:"Leblebi Kavurma Kazan\u0131",subtitle:"Kavurma oca\u011F\u0131nda duvar sekmesi ve y\xFCksek s\u0131\xE7rama seni yukar\u0131 ta\u015F\u0131r!",spawn:{x:56,y:574},door:{x:1180,y:208},physicsRules:{bounceWalls:!0},risingHazard:{type:"lava",startY:710,minY:295,speed:30,active:!1},platforms:[{id:"g1",x:0,y:620,w:290,h:100},{id:"s1",x:355,y:580,w:85,h:26,surface:"bouncy",bounceVy:-990},{id:"m1",x:500,y:450,w:230,h:24},{id:"s2",x:785,y:420,w:85,h:26,surface:"bouncy",bounceVy:-985},{id:"top",x:930,y:280,w:350,h:440}],hazards:[{id:"saw1",type:"saw",x:615,y:404,w:46,h:46,patrol:{axis:"x",range:60,speed:2.4}},{id:"sp1",type:"spikes",x:1020,y:256,w:46,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:200},actions:[{type:"startRisingHazard",speed:32},{type:"toast",text:"Kavurma \u0131s\u0131s\u0131 y\xFCkseliyor! Zirveye \xE7\u0131k!",duration:2.3}]},{when:{playerXGreater:960},actions:[{type:"activateHazard",targetId:"sp1"}]}]},{id:"T4-6",campaign:"turkey",chapter:4,stage:6,difficulty:"zor",biome:"turkey-corum",title:"Kral \u015Euppiluliuma Tap\u0131na\u011F\u0131",subtitle:"Bo\u015Fluk d\xF6ng\xFCs\xFC + testere tuzaklar\u0131 + ters kontrol b\xFCy\xFCs\xFC!",spawn:{x:56,y:514},door:{x:1180,y:468},physicsRules:{voidWrap:!0},platforms:[{id:"g1",x:0,y:560,w:320,h:160},{id:"conv1",x:385,y:540,w:230,h:180,surface:"conveyor",conveyorSpeed:155},{id:"cb1",x:690,y:540,w:110,h:24,surface:"crumble",crumbleDelay:.26},{id:"g2",x:870,y:540,w:410,h:180}],hazards:[{id:"saw1",type:"saw",x:500,y:494,w:46,h:46,patrol:{axis:"y",range:60,speed:2.3}},{id:"sp1",type:"spikes",x:970,y:516,w:46,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:905},actions:[{type:"activateHazard",targetId:"sp1"},{type:"moveDoor",toX:1215,toY:468,duration:.3}]}]},{id:"T4-7",campaign:"turkey",chapter:4,stage:7,difficulty:"cok-zor",biome:"turkey-corum",title:"B\xFCy\xFCk Tap\u0131nak M\xFChr\xFC (Final)",subtitle:"Karanl\u0131k Hitit labirenti, g\xFCne\u015F kursu \xE7ekimi ve son m\xFCh\xFCr!",spawn:{x:52,y:514},door:{x:1175,y:488},darkness:!0,platforms:[{id:"g1",x:0,y:560,w:270,h:160},{id:"c1",x:220,y:0,w:365,h:100},{id:"g2",x:500,y:560,w:265,h:160},{id:"cb1",x:830,y:560,w:105,h:24,surface:"crumble",crumbleDelay:.25},{id:"g3",x:1e3,y:560,w:280,h:160}],hazards:[{id:"csp1",type:"spikes",x:405,y:100,w:44,h:24,dir:"down"},{id:"cr1",type:"crusher",x:615,y:260,w:64,h:92,slamCycle:{restY:260,slamY:468,downSpeed:800,upSpeed:225,waitTop:.65,waitBottom:.3,initialDelay:.2}},{id:"sp1",type:"spikes",x:1065,y:536,w:46,h:24,dir:"up",hidden:!0}],visualZones:[{type:"thermal",x:240,dir:"up"},{type:"thermal",x:520,dir:"down"}],triggers:[{when:{playerXGreater:240},actions:[{type:"setGravityScale",value:-1}]},{when:{playerXGreater:520},actions:[{type:"setGravityScale",value:1}]},{when:{playerXGreater:1015},actions:[{type:"activateHazard",targetId:"sp1"},{type:"shake",intensity:6,duration:.2}]}]}];var Gh=[{id:"T5-1",campaign:"turkey",chapter:5,stage:1,difficulty:"kolay",biome:"turkey-samsun",title:"Band\u0131rma G\xFCvertesi",subtitle:"Karadeniz dalgalar\u0131yla sal\u0131nan g\xFCverte band\u0131 ve Samsun Pidesi.",spawn:{x:64,y:514},door:{x:1170,y:488},platforms:[{id:"g1",x:0,y:560,w:300,h:160},{id:"conv1",x:300,y:560,w:320,h:160,surface:"conveyor",conveyorSpeed:145},{id:"g2",x:620,y:560,w:320,h:160},{id:"g3",x:1015,y:560,w:265,h:160}],hazards:[{id:"saw1",type:"saw",x:760,y:514,w:46,h:46,patrol:{axis:"x",range:65,speed:1.9}}],triggers:[]},{id:"T5-2",campaign:"turkey",chapter:5,stage:2,difficulty:"kolay",biome:"turkey-samsun",title:"Onur An\u0131t\u0131 Meydan\u0131",subtitle:"Tun\xE7 kaidelerin aras\u0131ndaki hareketli iskeleler ve gizli tuzak.",spawn:{x:64,y:514},door:{x:1175,y:468},platforms:[{id:"g1",x:0,y:560,w:350,h:160},{id:"m1",x:425,y:540,w:160,h:26,patrol:{axis:"x",range:55,speed:1.8}},{id:"g2",x:660,y:540,w:230,h:180},{id:"g3",x:965,y:540,w:315,h:180}],hazards:[{id:"sp1",type:"spikes",x:1045,y:516,w:48,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:985},actions:[{type:"activateHazard",targetId:"sp1"},{type:"toast",text:"Meydan merdiveninde diken!",duration:1.9}]}]},{id:"T5-3",campaign:"turkey",chapter:5,stage:3,difficulty:"orta",biome:"turkey-samsun",title:"Kazan Dairesi Pistonlar\u0131",subtitle:"Band\u0131rma Vapuru buhar pistonlar\u0131 ve ters ak\u0131m \u015Falteri!",spawn:{x:56,y:514},door:{x:1185,y:468},platforms:[{id:"g1",x:0,y:560,w:360,h:160},{id:"g2",x:435,y:540,w:330,h:180},{id:"g3",x:840,y:540,w:440,h:180}],hazards:[{id:"cr1",type:"crusher",x:560,y:250,w:66,h:92,slamCycle:{restY:250,slamY:448,downSpeed:760,upSpeed:215,waitTop:.7,waitBottom:.3,initialDelay:.25}},{id:"sp1",type:"spikes",x:950,y:516,w:48,h:24,dir:"up",hidden:!0}],visualZones:[{type:"teslaArc",x:780},{type:"teslaArc",x:1120}],triggers:[{when:{playerXGreater:780},actions:[{type:"setInvertControls",value:!0},{type:"toast",text:"D\xFCmen ters d\xF6nd\xFC! (Sol \u2194 Sa\u011F)",duration:2.1}]},{when:{playerXGreater:900},actions:[{type:"activateHazard",targetId:"sp1"}]},{when:{playerXGreater:1120},actions:[{type:"setInvertControls",value:!1}]}]},{id:"T5-4",campaign:"turkey",chapter:5,stage:4,difficulty:"orta",biome:"turkey-samsun",title:"Amisos Tepesi Teleferi\u011Fi",subtitle:"Buhar kazanlar\u0131ndan tepeye s\u0131\xE7ra, Karadeniz ak\u0131nt\u0131s\u0131na diren!",spawn:{x:56,y:574},door:{x:1175,y:208},risingHazard:{type:"water",startY:710,minY:295,speed:29,active:!1},platforms:[{id:"g1",x:0,y:620,w:310,h:100},{id:"s1",x:375,y:580,w:85,h:26,surface:"bouncy",bounceVy:-990},{id:"m1",x:525,y:450,w:230,h:26},{id:"s2",x:805,y:420,w:85,h:26,surface:"bouncy",bounceVy:-985},{id:"top",x:945,y:280,w:335,h:440}],hazards:[{id:"saw1",type:"saw",x:640,y:404,w:46,h:46,patrol:{axis:"x",range:55,speed:2.2}},{id:"sp1",type:"spikes",x:1030,y:256,w:44,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:210},actions:[{type:"startRisingHazard",speed:30},{type:"toast",text:"Karadeniz dalgas\u0131 y\xFCkseliyor! Amisos Tepesi\u2019ne \xE7\u0131k!",duration:2.3}]},{when:{playerXGreater:970},actions:[{type:"activateHazard",targetId:"sp1"}]}]},{id:"T5-5",campaign:"turkey",chapter:5,stage:5,difficulty:"zor",biome:"turkey-samsun",title:"K\u0131z\u0131l\u0131rmak Deltas\u0131",subtitle:"Ku\u015F cennetinde z\u0131plad\u0131k\xE7a y\xF6n tu\u015Flar\u0131n de\u011Fi\u015Fir + kaybolan iskeleler!",spawn:{x:56,y:514},door:{x:1185,y:468},physicsRules:{toggleInvertOnJump:!0},platforms:[{id:"g1",x:0,y:560,w:300,h:160},{id:"cb1",x:370,y:540,w:110,h:24,surface:"crumble",crumbleDelay:.28},{id:"g2",x:550,y:540,w:260,h:180},{id:"cb2",x:880,y:540,w:100,h:24,surface:"crumble",crumbleDelay:.26},{id:"g3",x:1045,y:540,w:235,h:180}],hazards:[{id:"saw1",type:"saw",x:675,y:494,w:46,h:46,patrol:{axis:"y",range:55,speed:2.3}},{id:"sp1",type:"spikes",x:1100,y:516,w:42,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:1050},actions:[{type:"activateHazard",targetId:"sp1"}]}]},{id:"T5-6",campaign:"turkey",chapter:5,stage:6,difficulty:"zor",biome:"turkey-samsun",title:"Bafra Pide F\u0131r\u0131n\u0131 & R\u0131ht\u0131m",subtitle:"Z\u0131play\u0131nca yer\xE7ekimi tersine d\xF6ner, duvarlardan sek ve ka\xE7an kap\u0131y\u0131 yakala!",spawn:{x:54,y:514},door:{x:1180,y:488},physicsRules:{jumpFlipsGravity:!0,bounceWalls:!0},platforms:[{id:"g1",x:0,y:560,w:340,h:160},{id:"c1",x:250,y:40,w:480,h:90},{id:"g2",x:555,y:560,w:310,h:160},{id:"c2",x:760,y:40,w:300,h:90},{id:"g3",x:965,y:560,w:315,h:160}],hazards:[{id:"sp1",type:"spikes",x:685,y:536,w:46,h:24,dir:"up"},{id:"csp1",type:"spikes",x:870,y:130,w:46,h:24,dir:"down"}],triggers:[]},{id:"T5-7",campaign:"turkey",chapter:5,stage:7,difficulty:"cok-zor",biome:"turkey-samsun",title:"19 May\u0131s Liman\u0131 B\xFCy\xFCk Finali",subtitle:"F\u0131rt\u0131nal\u0131 gecede Samsun Pidesi g\xFCc\xFCyle Band\u0131rma Vapuruna ula\u015F!",spawn:{x:52,y:514},door:{x:1170,y:448},darkness:!0,physicsRules:{voidWrap:!0},platforms:[{id:"g1",x:0,y:560,w:270,h:160},{id:"conv1",x:340,y:540,w:230,h:180,surface:"conveyor",conveyorSpeed:150},{id:"g2",x:645,y:520,w:260,h:200},{id:"g3",x:975,y:520,w:305,h:200}],hazards:[{id:"cr1",type:"crusher",x:745,y:230,w:66,h:92,slamCycle:{restY:230,slamY:428,downSpeed:820,upSpeed:235,waitTop:.6,waitBottom:.28,initialDelay:.2}},{id:"sp1",type:"spikes",x:1045,y:496,w:48,h:24,dir:"up",hidden:!0}],triggers:[{when:{playerXGreater:340},actions:[{type:"setWind",forceX:-125},{type:"toast",text:"Karadeniz f\u0131rt\u0131nas\u0131 ba\u015Flad\u0131!",duration:2}]},{when:{playerXGreater:990},actions:[{type:"setWind",forceX:0},{type:"activateHazard",targetId:"sp1"},{type:"moveDoor",toX:1210,toY:448,duration:.28},{type:"toast",text:"Son liman kap\u0131s\u0131 hamlesi!",duration:2}]}]}];var Bn=[...Ah,...Rh,...Ch,...Ph,...Ih],Hh=[...Lh,...Dh,...kh,...Nh,...Oh],Vh=[...Uh,...Fh,...Bh,...zh,...Gh],Pf=[...Bn,...Hh,...Vh],If={classic:Bn,ottoman:Hh,turkey:Vh},Qt=Object.fromEntries(Pf.map(n=>[n.id,n]));function yn(n="classic"){return If[n]||Bn}function bi(n){let e=n>>>0;return function(){e|=0,e=e+1831565813|0;let i=Math.imul(e^e>>>15,1|e);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}function Zt(n,e){let t=document.createElement("canvas");return t.width=n,t.height=e,t}function Lf(){let n=Zt(160,160),e=n.getContext("2d"),t=bi(101);e.fillStyle="#3c3024",e.fillRect(0,0,160,160);for(let i=0;i<18;i+=1){let r=t()*160,s=8+t()*20;e.fillStyle=i%2===0?"rgba(54, 42, 31, 0.55)":"rgba(73, 58, 43, 0.45)",e.fillRect(0,r,160,s)}for(let i=0;i<42;i+=1){let r=t()*160,s=t()*160,a=8+t()*22,o=6+t()*12;e.fillStyle=t()>.4?"#4f463c":"#312820",e.beginPath(),e.roundRect(r,s,a,o,3),e.fill(),e.strokeStyle="rgba(20, 16, 12, 0.4)",e.lineWidth=1,e.stroke()}for(let i=0;i<16;i+=1){let r=t()*160,s=t()*160,a=4+t()*10;e.fillStyle="rgba(48, 108, 62, 0.35)",e.beginPath(),e.arc(r,s,a,0,Math.PI*2),e.fill()}return n}function Df(){let n=Zt(160,160),e=n.getContext("2d"),t=bi(202);e.fillStyle="#9c6838",e.fillRect(0,0,160,160);let i=32;for(let r=0;r<5;r+=1){let s=r*i,a=r%2*40;for(let o=-1;o<3;o+=1){let l=o*80+a,c=(t()-.5)*16;e.fillStyle=`rgb(${160+c}, ${106+c*.7}, ${58+c*.4})`,e.fillRect(l+1,s+1,78,i-2),e.fillStyle="rgba(255, 224, 168, 0.14)",e.fillRect(l+2,s+2,76,3),e.fillStyle="rgba(48, 25, 10, 0.22)",e.fillRect(l+2,s+i-4,76,2)}}for(let r=0;r<160;r+=1){let s=t()*160,a=t()*160;e.fillStyle=t()>.5?"rgba(245, 198, 130, 0.2)":"rgba(72, 38, 16, 0.2)",e.fillRect(s,a,2,1.5)}return n}function kf(){let n=Zt(160,160),e=n.getContext("2d"),t=bi(303),i=e.createLinearGradient(0,0,160,160);i.addColorStop(0,"#1e4e6e"),i.addColorStop(.5,"#256187"),i.addColorStop(1,"#19405b"),e.fillStyle=i,e.fillRect(0,0,160,160);for(let r=0;r<20;r+=1){let s=t()*160,a=t()*160,o=18+t()*34,l=14+t()*28;e.fillStyle=t()>.5?"rgba(130, 218, 255, 0.16)":"rgba(12, 38, 60, 0.24)",e.beginPath(),e.moveTo(s,a),e.lineTo(s+o,a+t()*8),e.lineTo(s+o-t()*12,a+l),e.lineTo(s-t()*10,a+l*.8),e.closePath(),e.fill()}e.strokeStyle="rgba(210, 245, 255, 0.26)",e.lineWidth=1.1;for(let r=0;r<14;r+=1){let s=t()*160,a=t()*160;e.beginPath(),e.moveTo(s,a);for(let o=0;o<3;o+=1)s+=(t()-.5)*32,a+=(t()-.5)*32,e.lineTo(s,a);e.stroke()}return n}function Nf(){let n=Zt(160,160),e=n.getContext("2d"),t=bi(404);e.fillStyle="#241a1a",e.fillRect(0,0,160,160),e.strokeStyle="rgba(255, 92, 22, 0.45)",e.lineWidth=2.4;for(let i=0;i<9;i+=1){let r=t()*160,s=t()*160;e.beginPath(),e.moveTo(r,s);for(let a=0;a<4;a+=1)r+=(t()-.5)*44,s+=(t()-.5)*44,e.lineTo(r,s);e.stroke()}for(let i=0;i<34;i+=1){let r=t()*160,s=t()*160,a=16+t()*26,o=14+t()*22,l=Math.floor(28+t()*22);e.fillStyle=`rgb(${l+8}, ${l}, ${l+2})`,e.beginPath(),e.moveTo(r,s),e.lineTo(r+a,s+3),e.lineTo(r+a-4,s+o),e.lineTo(r+2,s+o-2),e.closePath(),e.fill(),e.strokeStyle="rgba(10, 6, 6, 0.65)",e.lineWidth=1.2,e.stroke()}return n}function Of(){let n=Zt(160,160),e=n.getContext("2d"),t=bi(505);e.fillStyle="#2b3240",e.fillRect(0,0,160,160);for(let i=0;i<2;i+=1)for(let r=0;r<2;r+=1){let s=r*80,a=i*80;e.fillStyle=(r+i)%2===0?"#313949":"#2a313f",e.fillRect(s+1,a+1,78,78);for(let l=0;l<14;l+=1)e.fillStyle=t()>.5?"rgba(255,255,255,0.03)":"rgba(0,0,0,0.06)",e.fillRect(s+4,a+t()*76,70,1);e.fillStyle="#4f5a70";let o=[[s+7,a+7],[s+73,a+7],[s+7,a+73],[s+73,a+73]];for(let[l,c]of o)e.beginPath(),e.arc(l,c,2.3,0,Math.PI*2),e.fill()}for(let i=0;i<24;i+=1)e.fillStyle="rgba(145, 76, 36, 0.16)",e.beginPath(),e.arc(t()*160,t()*160,2+t()*6,0,Math.PI*2),e.fill();return n}function Uf(){let n=Zt(160,160),e=n.getContext("2d");e.fillStyle="#0e2833",e.fillRect(0,0,160,160);for(let t=0;t<4;t+=1){let i=t*40,r=t%2*40;for(let s=-1;s<3;s+=1){let a=s*80+r;e.fillStyle=(t+s)%2===0?"#143642":"#102e39",e.fillRect(a+1,i+1,78,38),e.strokeStyle="rgba(45, 212, 191, 0.25)",e.lineWidth=1,e.strokeRect(a+5,i+5,70,30);let o=a+40,l=i+20;e.fillStyle="rgba(251, 191, 36, 0.24)",e.beginPath(),e.moveTo(o,l-8),e.lineTo(o+8,l),e.lineTo(o,l+8),e.lineTo(o-8,l),e.closePath(),e.fill()}}return n}function Ff(){let n=Zt(160,160),e=n.getContext("2d");e.fillStyle="#0b1e36",e.fillRect(0,0,160,160);for(let t=0;t<2;t+=1)for(let i=0;i<2;i+=1){let r=i*80,s=t*80;e.fillStyle=(i+t)%2===0?"#122b49":"#0e243e",e.fillRect(r+1,s+1,78,78),e.fillStyle="rgba(56, 189, 248, 0.22)",e.fillRect(r+4,s+38,72,2),e.fillStyle="#d97706";for(let[a,o]of[[r+8,s+8],[r+72,s+8],[r+8,s+72],[r+72,s+72]])e.beginPath(),e.arc(a,o,2,0,Math.PI*2),e.fill()}return n}function Bf(){let n=Zt(160,160),e=n.getContext("2d"),t=bi(707);e.fillStyle="#382714",e.fillRect(0,0,160,160);for(let i=0;i<5;i+=1){let r=i*32,s=i%2*40;for(let a=-1;a<3;a+=1){let o=a*80+s,l=(t()-.5)*14;e.fillStyle=`rgb(${76+l}, ${54+l*.7}, ${28+l*.5})`,e.fillRect(o+1,r+1,78,30),e.fillStyle="rgba(251, 191, 36, 0.14)",e.fillRect(o+3,r+2,74,2)}}return n}function zf(){let n=Zt(160,160),e=n.getContext("2d"),t=bi(808);e.fillStyle="#180c30",e.fillRect(0,0,160,160),e.strokeStyle="rgba(250, 204, 21, 0.2)",e.lineWidth=1.4;for(let i of[24,48,72])e.beginPath(),e.arc(80,80,i,0,Math.PI*2),e.stroke();for(let i=0;i<24;i+=1)e.fillStyle=i%3===0?"rgba(192, 132, 252, 0.35)":"rgba(255, 255, 255, 0.22)",e.fillRect(t()*158,t()*158,2,2);return n}function Gf(){let n=Zt(160,160),e=n.getContext("2d");e.fillStyle="#250e15",e.fillRect(0,0,160,160);for(let t=0;t<2;t+=1)for(let i=0;i<2;i+=1){let r=i*80,s=t*80;e.fillStyle=(i+t)%2===0?"#31131c":"#280f16",e.fillRect(r+1,s+1,78,78),e.fillStyle="rgba(251, 113, 133, 0.2)",e.fillRect(r+8,s+8,64,2),e.fillStyle="#fbbf24",e.fillRect(r+7,s+71,4,4),e.fillRect(r+69,s+71,4,4)}return n}function Hf(){let n=Zt(160,160),e=n.getContext("2d"),t=bi(901);e.fillStyle="#24302a",e.fillRect(0,0,160,160);for(let i=0;i<4;i+=1){let r=i*40,s=i%2*32;for(let a=-1;a<4;a+=1){let o=a*64+s,l=(t()-.5)*14;e.fillStyle=`rgb(${56+l}, ${72+l}, ${64+l})`,e.fillRect(o+1,r+1,62,38),e.fillStyle="rgba(239, 68, 68, 0.16)",e.fillRect(o+6,r+4,50,2)}}return n}function Vf(){let n=Zt(160,160),e=n.getContext("2d"),t=bi(902);e.fillStyle="#403018",e.fillRect(0,0,160,160);for(let i=0;i<5;i+=1){let r=i*32,s=i%2*40;for(let a=-1;a<3;a+=1){let o=a*80+s,l=(t()-.5)*16;e.fillStyle=`rgb(${102+l}, ${78+l*.8}, ${42+l*.5})`,e.fillRect(o+1,r+1,78,30),e.fillStyle="rgba(251, 191, 36, 0.18)",e.fillRect(o+4,r+3,70,2)}}return n}function Wf(){let n=Zt(160,160),e=n.getContext("2d"),t=bi(903);e.fillStyle="#182b44",e.fillRect(0,0,160,160);for(let i=0;i<2;i+=1)for(let r=0;r<2;r+=1){let s=r*80,a=i*80;e.fillStyle=(r+i)%2===0?"#1e3a5c":"#172e4a",e.fillRect(s+1,a+1,78,78),e.fillStyle="rgba(224, 242, 254, 0.22)",e.fillRect(s+4,a+4,72,3);for(let o=0;o<5;o+=1)e.fillStyle="rgba(186, 230, 253, 0.25)",e.fillRect(s+12+t()*54,a+16+t()*50,3,3)}return n}function Xf(){let n=Zt(160,160),e=n.getContext("2d"),t=bi(904);e.fillStyle="#362314",e.fillRect(0,0,160,160);for(let i=0;i<4;i+=1){let r=i*40;for(let s=0;s<4;s+=1){let a=s*40,o=(t()-.5)*14;e.fillStyle=`rgb(${88+o}, ${60+o*.7}, ${34+o*.5})`,e.fillRect(a+1,r+1,38,38),e.strokeStyle="rgba(250, 204, 21, 0.16)",e.lineWidth=1,e.strokeRect(a+7,r+7,26,26)}}return n}function Yf(){let n=Zt(160,160),e=n.getContext("2d");e.fillStyle="#122f3c",e.fillRect(0,0,160,160);for(let t=0;t<2;t+=1)for(let i=0;i<2;i+=1){let r=i*80,s=t*80;e.fillStyle=(i+t)%2===0?"#183e4e":"#133240",e.fillRect(r+1,s+1,78,78),e.fillStyle="rgba(52, 211, 153, 0.2)",e.fillRect(r+4,s+39,72,2),e.fillStyle="#eab308",e.fillRect(r+8,s+8,3,3),e.fillRect(r+69,s+69,3,3)}return n}function Wh(n){let e={rainforest:Lf(),desert:Df(),glacier:kf(),volcano:Nf(),foundry:Of(),"ottoman-palace":Uf(),"ottoman-bosphorus":Ff(),"ottoman-galata":Bf(),"ottoman-observatory":zf(),"ottoman-shipyard":Gf(),"turkey-amasya":Hf(),"turkey-yozgat":Vf(),"turkey-erzurum":Wf(),"turkey-corum":Xf(),"turkey-samsun":Yf()},t={};for(let[i,r]of Object.entries(e))t[i]=n.createPattern(r,"repeat");return t}var zs=class{constructor(){this.time=0,this.lightningAlpha=0,this.nextLightning=2.6,this.particlesByBiome={rainforest:this.initRainforestParticles(),desert:this.initDesertParticles(),glacier:this.initGlacierParticles(),volcano:this.initVolcanoParticles(),foundry:this.initFoundryParticles(),"ottoman-palace":this.initOttomanPalaceParticles(),"ottoman-bosphorus":this.initOttomanBosphorusParticles(),"ottoman-galata":this.initOttomanGalataParticles(),"ottoman-observatory":this.initOttomanObservatoryParticles(),"ottoman-shipyard":this.initFoundryParticles(),"turkey-amasya":this.initOttomanPalaceParticles(),"turkey-yozgat":this.initOttomanGalataParticles(),"turkey-erzurum":this.initGlacierParticles(),"turkey-corum":this.initDesertParticles(),"turkey-samsun":this.initOttomanBosphorusParticles()}}initRainforestParticles(){let e=Array.from({length:95},(i,r)=>({x:r*97%1280,y:r*53%720,len:14+r%5*4,speed:580+r%6*55})),t=Array.from({length:28},(i,r)=>({x:r*131%1280,y:120+r*73%500,r:1.5+r%3*.8,phase:r*.9}));return{rain:e,spores:t}}initDesertParticles(){let e=Array.from({length:78},(i,r)=>({x:r*89%1280,y:r*61%720,r:1+r%3*.75,speed:135+r%7*30,drift:-10+r%5*6})),t=Array.from({length:10},(i,r)=>({x:r*157%1280,y:140+r*83%420,len:70+r%4*35,speed:260+r%5*45}));return{dust:e,streaks:t}}initGlacierParticles(){let e=Array.from({length:95},(r,s)=>({x:s*79%1280,y:s*47%720,r:1.4+s%4*.7,speedY:45+s%5*18,phase:s*.6})),t=Array.from({length:42},(r,s)=>({x:(s*149+31)%1280,y:28+s*67%210,r:.9+s%3*.45,phase:s*1.1})),i=Array.from({length:18},(r,s)=>({x:s*173%1280,y:150+s*97%380,phase:s*1.7}));return{snow:e,stars:t,diamondDust:i}}initVolcanoParticles(){let e=Array.from({length:75},(i,r)=>({x:r*103%1280,y:r*67%720,r:1.4+r%3*.9,speedY:48+r%6*20,phase:r*.8})),t=Array.from({length:28},(i,r)=>({x:r*139%1280,y:r*79%720,r:1.8+r%3*.8,speedY:22+r%4*8,phase:r*1.3}));return{embers:e,ash:t}}initFoundryParticles(){let e=Array.from({length:75},(r,s)=>({x:s*109%1280,y:s*59%720,len:16+s%4*4,speed:680+s%5*50})),t=Array.from({length:28},(r,s)=>({x:140+s*137%1e3,y:s*41%720,speedY:105+s%4*30,vx:(s%5-2)*26})),i=Array.from({length:16},(r,s)=>({x:(s%2===0?210:890)+s*17%30,y:520-s%8*38,r:12+s%5*5,speedY:42+s%4*10,phase:s*.7}));return{rain:e,sparks:t,steam:i}}initOttomanPalaceParticles(){return{motes:Array.from({length:40},(e,t)=>({x:t*97%1280,y:80+t*71%560,r:1.4+t%3*.8,speedY:18+t%4*7,phase:t*.85}))}}initOttomanBosphorusParticles(){return{motes:Array.from({length:48},(e,t)=>({x:t*89%1280,y:120+t*59%420,speedX:28+t%5*14,phase:t*.7}))}}initOttomanGalataParticles(){return{streaks:Array.from({length:18},(e,t)=>({x:t*113%1280,y:70+t*67%440,len:42+t%4*24,speed:190+t%5*35}))}}initOttomanObservatoryParticles(){return{stars:Array.from({length:75},(e,t)=>({x:(t*137+19)%1280,y:(t*83+11)%580,r:.9+t%3*.65,phase:t*1.15}))}}update(e,t,i=0){if(this.time+=e,t==="foundry"||t==="ottoman-shipyard"?(this.nextLightning-=e,this.nextLightning<=0&&(this.lightningAlpha=.92,this.nextLightning=3.2+(Math.sin(this.time*7.3)+1)*1.9),this.lightningAlpha>0&&(this.lightningAlpha=Math.max(0,this.lightningAlpha-e*2.7))):this.lightningAlpha=0,t==="rainforest"){let{rain:r,spores:s}=this.particlesByBiome.rainforest;for(let a of r)a.x-=a.speed*.16*e,a.y+=a.speed*e,a.y>720&&(a.y=-20,a.x=(a.x+1280+120)%1280);for(let a of s)a.phase+=e*1.6,a.y+=Math.sin(a.phase)*14*e,a.x+=Math.cos(a.phase*.7)*10*e}else if(t==="desert"){let{dust:r,streaks:s}=this.particlesByBiome.desert;for(let a of r)a.x+=(a.speed+i*.4)*e,a.y+=a.drift*e,a.x>1290&&(a.x=-10),a.y<0&&(a.y=720),a.y>720&&(a.y=0);for(let a of s)a.x+=a.speed*e,a.x>1360&&(a.x=-a.len-40)}else if(t==="glacier"){let{snow:r}=this.particlesByBiome.glacier,s=i*1.55;for(let a of r)a.phase+=e*2.1,a.x+=(Math.sin(a.phase)*26+s)*e,a.y+=a.speedY*e,a.y>726&&(a.y=-6),a.x>1288&&(a.x-=1296),a.x<-8&&(a.x+=1296)}else if(t==="volcano"){let{embers:r,ash:s}=this.particlesByBiome.volcano;for(let a of r)a.phase+=e*2.5,a.y-=a.speedY*e,a.x+=Math.sin(a.phase)*20*e,a.y<-10&&(a.y=728);for(let a of s)a.phase+=e*1.4,a.y+=a.speedY*e,a.x+=Math.sin(a.phase)*16*e,a.y>730&&(a.y=-10)}else if(t==="foundry"||t==="ottoman-shipyard"){let{rain:r,sparks:s,steam:a}=this.particlesByBiome.foundry;for(let o of r)o.x-=o.speed*.22*e,o.y+=o.speed*e,o.y>720&&(o.y=-20,o.x=(o.x+1280+150)%1280);for(let o of s)o.y+=o.speedY*e,o.x+=o.vx*e,o.y>720&&(o.y=80,o.x=(o.x+260)%1280);for(let o of a)o.phase+=e*1.8,o.y-=o.speedY*e,o.x+=Math.sin(o.phase)*14*e,o.y<140&&(o.y=540)}else if(t==="ottoman-palace")for(let r of this.particlesByBiome["ottoman-palace"].motes)r.phase+=e*1.9,r.y-=r.speedY*e,r.x+=Math.sin(r.phase)*14*e,r.y<60&&(r.y=620);else if(t==="ottoman-bosphorus")for(let r of this.particlesByBiome["ottoman-bosphorus"].motes)r.phase+=e*2.2,r.x+=(r.speedX+i*.25)*e,r.x>1290&&(r.x=-10);else if(t==="ottoman-galata"||t==="turkey-yozgat"){let r=i<-10?-1:1;for(let s of this.particlesByBiome[t].streaks)s.x+=(s.speed*r+i*.8)*e,s.x>1370&&(s.x=-s.len-20),s.x<-s.len-40&&(s.x=1320)}else if(t==="turkey-amasya")for(let r of this.particlesByBiome["turkey-amasya"].motes)r.phase+=e*1.6,r.y-=r.speedY*e,r.x+=Math.sin(r.phase)*18*e,r.y<60&&(r.y=620);else if(t==="turkey-erzurum"){let{snow:r}=this.particlesByBiome["turkey-erzurum"];for(let s of r)s.phase+=e*2.1,s.y+=s.speedY*e,s.x+=(Math.sin(s.phase)*16+i*.45)*e,s.y>720&&(s.y=-6),s.x<0&&(s.x+=1280),s.x>1280&&(s.x-=1280)}else if(t==="turkey-corum")for(let r of this.particlesByBiome["turkey-corum"].dust)r.x+=r.speed*.35*e,r.y+=Math.sin(this.time*2+r.x*.02)*10*e,r.x>1290&&(r.x=-10);else if(t==="turkey-samsun")for(let r of this.particlesByBiome["turkey-samsun"].motes)r.phase+=e*2.4,r.x+=(r.speedX+i*.35)*e,r.x>1290&&(r.x=-10)}draw(e,t,i=300,r=0,s=1){let a=(i-1280/2)*.025;t==="rainforest"?this.drawRainforest(e,a):t==="desert"?this.drawDesert(e,a):t==="glacier"?this.drawGlacier(e,a,r):t==="volcano"?this.drawVolcano(e,a):t==="ottoman-palace"?this.drawOttomanPalace(e,a):t==="ottoman-bosphorus"?this.drawOttomanBosphorus(e,a):t==="ottoman-galata"?this.drawOttomanGalata(e,a,r):t==="ottoman-observatory"?this.drawOttomanObservatory(e,a):t==="ottoman-shipyard"?this.drawOttomanShipyard(e,a):t==="turkey-amasya"?this.drawTurkeyAmasya(e,a,s):t==="turkey-yozgat"?this.drawTurkeyYozgat(e,a,r,s):t==="turkey-erzurum"?this.drawTurkeyErzurum(e,a,s):t==="turkey-corum"?this.drawTurkeyCorum(e,a,s):t==="turkey-samsun"?this.drawTurkeySamsun(e,a,s):this.drawFoundry(e,a)}drawRainforest(e,t){let i=e.createLinearGradient(0,0,0,720);i.addColorStop(0,"#071b14"),i.addColorStop(.45,"#103527"),i.addColorStop(1,"#1a4733"),e.fillStyle=i,e.fillRect(0,0,1280,720),e.save();for(let d=0;d<4;d+=1){let h=160+d*280-t*.4,p=e.createLinearGradient(h,0,h+150,720);p.addColorStop(0,"rgba(174, 240, 180, 0.12)"),p.addColorStop(.65,"rgba(110, 200, 130, 0.05)"),p.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=p,e.beginPath(),e.moveTo(h,0),e.lineTo(h+95,0),e.lineTo(h+270,720),e.lineTo(h+90,720),e.closePath(),e.fill()}e.restore(),e.fillStyle="#0c281d",e.beginPath(),e.moveTo(0,720);for(let d=0;d<=1280;d+=80){let h=300+Math.sin(d*.005+1.1)*55+Math.cos(d*.013)*22;e.lineTo(d,h)}e.lineTo(1280,720),e.closePath(),e.fill();let r=505-t*.5;e.fillStyle="#0d2b20";for(let d=0;d<4;d+=1){let h=150-d*28,p=26;e.fillRect(r+(150-h)/2,340-d*p,h,p+2)}e.fillRect(r+54,214,42,26),e.fillStyle="rgba(110, 231, 183, 0.28)",e.fillRect(r+69,224,12,16);let s=870-t*.7;e.save();for(let d=0;d<3;d+=1){let h=s+d*11,p=10-d*1.5,f=Math.sin(this.time*5+d*1.8)*.04,y=e.createLinearGradient(h,260,h,610);y.addColorStop(0,"rgba(185, 240, 232, 0.04)"),y.addColorStop(.18,`rgba(185, 245, 238, ${.22+f})`),y.addColorStop(.8,`rgba(140, 220, 210, ${.14+f})`),y.addColorStop(1,"rgba(120, 210, 200, 0)"),e.fillStyle=y,e.fillRect(h,260,p,350)}let a=e.createRadialGradient(s+15,560,8,s+15,560,68);a.addColorStop(0,"rgba(200, 248, 240, 0.24)"),a.addColorStop(1,"rgba(200, 248, 240, 0)"),e.fillStyle=a,e.beginPath(),e.arc(s+15,560,68,0,Math.PI*2),e.fill(),e.restore(),e.strokeStyle="rgba(12, 32, 24, 0.7)",e.lineWidth=2;for(let d=0;d<3;d+=1){let h=(this.time*(28+d*7)+d*360)%1440-80,p=110+d*36+Math.sin(this.time*2+d)*10,f=Math.sin(this.time*6+d*2)*5;e.beginPath(),e.moveTo(h-10,p+f),e.quadraticCurveTo(h-4,p-5,h,p),e.quadraticCurveTo(h+4,p-5,h+10,p+f),e.stroke()}e.fillStyle="#092017";let o=[110,390,680,1020,1210];for(let d=0;d<o.length;d+=1){let h=o[d]-t,p=38+d%3*18;e.fillRect(h,0,p,720),e.beginPath(),e.moveTo(h-24,720),e.quadraticCurveTo(h,630,h+p/2,570),e.quadraticCurveTo(h+p,630,h+p+24,720),e.closePath(),e.fill(),e.beginPath(),e.arc(h+p/2,26,92+d%2*24,0,Math.PI*2),e.arc(h-38,42,54,0,Math.PI*2),e.arc(h+p+38,44,52,0,Math.PI*2),e.fill()}e.strokeStyle="rgba(22, 74, 44, 0.78)",e.lineWidth=3;for(let d=0;d<8;d+=1){let h=80+d*165-t*1.1,p=Math.sin(this.time*1.3+d)*14,f=130+d%3*55;e.beginPath(),e.moveTo(h,0),e.quadraticCurveTo(h+p*.5,f*.5,h+p,f),e.stroke(),e.fillStyle="rgba(34, 108, 62, 0.68)";for(let y=.25;y<=.9;y+=.25){let m=h+p*y*y,g=f*y;e.beginPath(),e.ellipse(m+6,g,6,2.8,.45,0,Math.PI*2),e.ellipse(m-6,g+8,6,2.8,-.45,0,Math.PI*2),e.fill()}}let l=e.createLinearGradient(0,480,0,720);l.addColorStop(0,"rgba(20, 68, 48, 0)"),l.addColorStop(1,"rgba(165, 225, 195, 0.14)"),e.fillStyle=l,e.fillRect(0,480,1280,240),e.save(),e.fillStyle="#071a12";for(let d of[-1,1]){let h=d<0?0:1280;for(let p=0;p<5;p+=1){let f=d<0?-.35+p*.22:Math.PI+.35-p*.22;e.beginPath(),e.ellipse(h-d*(16+p*14),696,54,14,f,0,Math.PI*2),e.fill()}}e.fillStyle="rgba(167, 243, 208, 0.45)";for(let d=0;d<4;d+=1){let h=180+d*290-t*1.1,p=155+(this.time*130+d*95)%240;e.beginPath(),e.arc(h,p,2,0,Math.PI*2),e.fill()}e.restore();let{rain:c,spores:u}=this.particlesByBiome.rainforest;e.strokeStyle="rgba(195, 240, 225, 0.24)",e.lineWidth=1.1,e.beginPath();for(let d of c)e.moveTo(d.x,d.y),e.lineTo(d.x-d.len*.16,d.y+d.len);e.stroke();for(let d of u){let h=.3+Math.abs(Math.sin(d.phase))*.35;e.fillStyle=`rgba(145, 255, 175, ${h})`,e.beginPath(),e.arc(d.x,d.y,d.r,0,Math.PI*2),e.fill()}}drawDesert(e,t){let i=e.createLinearGradient(0,0,0,720);i.addColorStop(0,"#2c170d"),i.addColorStop(.38,"#7a3d18"),i.addColorStop(.76,"#c7722c"),i.addColorStop(1,"#e09d4b"),e.fillStyle=i,e.fillRect(0,0,1280,720);let r=940-t*.3,s=165,a=e.createRadialGradient(r,s,18,r,s,190);a.addColorStop(0,"rgba(255, 245, 200, 0.92)"),a.addColorStop(.28,"rgba(255, 195, 95, 0.45)"),a.addColorStop(1,"rgba(255, 140, 40, 0)"),e.fillStyle=a,e.beginPath(),e.arc(r,s,190,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(65, 28, 10, 0.55)",e.lineWidth=1.8;for(let p=0;p<3;p+=1){let f=680+p*115+Math.cos(this.time*.45+p*2.1)*75-t*.3,y=125+p*22+Math.sin(this.time*.65+p)*14,m=Math.sin(this.time*3+p)*3.5;e.beginPath(),e.moveTo(f-11,y+m),e.quadraticCurveTo(f-5,y-4,f,y),e.quadraticCurveTo(f+5,y-4,f+11,y+m),e.stroke()}let o=(p,f,y,m)=>{e.fillStyle="#6c3615",e.beginPath(),e.moveTo(p-y,f),e.lineTo(p,f-m),e.lineTo(p+y,f),e.closePath(),e.fill(),e.fillStyle="#532910",e.beginPath(),e.moveTo(p,f-m),e.lineTo(p+y,f),e.lineTo(p+y*.18,f),e.closePath(),e.fill()};o(385-t*.5,480,175,225),o(610-t*.45,490,115,145);let l=505-t*.55;e.fillStyle="#5a2d12",e.beginPath(),e.roundRect(l-38,442,76,38,6),e.arc(l-24,434,15,0,Math.PI*2),e.fill(),e.fillStyle="#5f3014";let c=760-t*.6;e.fillRect(c,355,280,14);for(let p=0;p<4;p+=1){let f=c+p*70;e.fillRect(f,368,16,120)}e.fillStyle="#7e421b",e.beginPath(),e.moveTo(0,720);for(let p=0;p<=1280;p+=60){let f=415+Math.sin(p*.0045-t*.01)*42;e.lineTo(p,f)}e.lineTo(1280,720),e.closePath(),e.fill();let u=[150,740,1110];for(let p=0;p<u.length;p+=1){let f=u[p]-t*1.1,y=290+p%2*50;if(e.fillStyle="#47210d",e.fillRect(f,y,36,430),e.fillStyle="#5a2b12",e.fillRect(f-5,y-8,46,12),p!==1){let m=Math.sin(this.time*4.5+p)*11;e.fillStyle="rgba(180, 52, 24, 0.72)",e.beginPath(),e.moveTo(f+34,y+14),e.quadraticCurveTo(f+58,y+20+m*.5,f+78+m,y+26),e.lineTo(f+68+m*.7,y+52),e.quadraticCurveTo(f+52,y+44,f+34,y+48),e.closePath(),e.fill()}}let{dust:d,streaks:h}=this.particlesByBiome.desert;e.strokeStyle="rgba(255, 224, 155, 0.14)",e.lineWidth=1.5,e.beginPath();for(let p of h)e.moveTo(p.x,p.y),e.lineTo(p.x+p.len,p.y-4);e.stroke(),e.fillStyle="rgba(255, 224, 160, 0.36)";for(let p of d)e.beginPath(),e.arc(p.x,p.y,p.r,0,Math.PI*2),e.fill()}drawGlacier(e,t,i=0){let r=e.createLinearGradient(0,0,0,720);r.addColorStop(0,"#040c18"),r.addColorStop(.5,"#0b2239"),r.addColorStop(1,"#163c5e"),e.fillStyle=r,e.fillRect(0,0,1280,720);let{snow:s,stars:a,diamondDust:o}=this.particlesByBiome.glacier;for(let f of a){let y=.28+Math.abs(Math.sin(this.time*1.4+f.phase))*.55;e.fillStyle=`rgba(224, 242, 254, ${y})`,e.beginPath(),e.arc(f.x,f.y,f.r,0,Math.PI*2),e.fill()}let l=210-t*.25,c=115,u=e.createRadialGradient(l,c,10,l,c,85);u.addColorStop(0,"rgba(186, 230, 253, 0.35)"),u.addColorStop(1,"rgba(186, 230, 253, 0)"),e.fillStyle=u,e.beginPath(),e.arc(l,c,85,0,Math.PI*2),e.fill(),e.fillStyle="#e0f2fe",e.beginPath(),e.arc(l,c,22,0,Math.PI*2),e.fill(),e.fillStyle="#061324",e.beginPath(),e.arc(l+8,c-4,19,0,Math.PI*2),e.fill(),e.save();for(let f=0;f<3;f+=1){let y=e.createLinearGradient(0,35+f*48,0,240+f*52);y.addColorStop(0,"rgba(34, 211, 238, 0)"),y.addColorStop(.5,f===0?"rgba(52, 211, 153, 0.22)":f===1?"rgba(56, 189, 248, 0.18)":"rgba(167, 139, 250, 0.14)"),y.addColorStop(1,"rgba(56, 189, 248, 0)"),e.fillStyle=y,e.beginPath(),e.moveTo(0,180);for(let m=0;m<=1280;m+=64){let g=90+f*40+Math.sin(m*.008+this.time*.9+f)*32;e.lineTo(m,g)}e.lineTo(1280,285),e.lineTo(0,285),e.closePath(),e.fill()}e.restore(),e.fillStyle="#0f2d47",e.beginPath(),e.moveTo(0,720);let d=[[0,420],[140,260],[300,390],[480,220],[690,410],[880,240],[1060,380],[1220,270],[1280,360]];for(let[f,y]of d)e.lineTo(f-t*.6,y);e.lineTo(1280,720),e.closePath(),e.fill(),e.strokeStyle="rgba(186, 230, 253, 0.38)",e.lineWidth=2,e.beginPath();for(let f=0;f<d.length;f+=1){let[y,m]=d[f];f===0?e.moveTo(y-t*.6,m):e.lineTo(y-t*.6,m)}e.stroke(),e.fillStyle="#0a2136";for(let f=90;f<1280;f+=195){let y=f-t*.75,m=475+f*13%30;e.beginPath(),e.moveTo(y,m-62),e.lineTo(y-18,m),e.lineTo(y+18,m),e.closePath(),e.fill()}e.fillStyle="rgba(20, 58, 90, 0.72)";let h=[180,580,990];for(let f of h){let y=f-t;e.beginPath(),e.moveTo(y-45,720),e.lineTo(y,340),e.lineTo(y+48,720),e.closePath(),e.fill()}for(let f of o){let y=Math.max(0,Math.sin(this.time*4.2+f.phase));y>.65&&(e.fillStyle=`rgba(240, 249, 255, ${(y-.65)*2.2})`,e.fillRect(f.x-3,f.y-.8,6,1.6),e.fillRect(f.x-.8,f.y-3,1.6,6))}if(Math.abs(i)>20){let f=i>0?1:-1;e.strokeStyle="rgba(186, 230, 253, 0.25)",e.lineWidth=2;for(let y=0;y<6;y+=1){let m=340+y*40,g=(this.time*m*f+y*220)%1500,_=g<-110?g+1280+220:g,w=160+y*72+Math.sin(this.time*5+y)*10;e.beginPath(),e.moveTo(_,w),e.lineTo(_+95*f,w+Math.sin(this.time*4+y)*5),e.stroke()}}e.fillStyle="rgba(235, 248, 255, 0.74)";for(let f of s)e.beginPath(),e.arc(f.x,f.y,f.r,0,Math.PI*2),e.fill();let p=e.createLinearGradient(0,0,0,75);p.addColorStop(0,"rgba(186, 230, 253, 0.12)"),p.addColorStop(1,"rgba(186, 230, 253, 0)"),e.fillStyle=p,e.fillRect(0,0,1280,75)}drawVolcano(e,t){let i=e.createLinearGradient(0,0,0,720);i.addColorStop(0,"#140504"),i.addColorStop(.55,"#3b0e08"),i.addColorStop(1,"#781d0a"),e.fillStyle=i,e.fillRect(0,0,1280,720);let r=e.createLinearGradient(0,500,0,720);r.addColorStop(0,"rgba(255, 90, 15, 0)"),r.addColorStop(1,"rgba(255, 100, 20, 0.34)"),e.fillStyle=r,e.fillRect(0,500,1280,220);let s=435-t*.5,a=e.createRadialGradient(s,240,10,s,200,145);a.addColorStop(0,"rgba(255, 140, 35, 0.45)"),a.addColorStop(1,"rgba(255, 60, 10, 0)"),e.fillStyle=a,e.beginPath(),e.arc(s,220,145,0,Math.PI*2),e.fill();for(let d=0;d<6;d+=1){let h=(this.time*.16+d/6)%1,p=s+Math.sin(h*4+d)*28+h*35,f=235-h*220,y=24+h*46;e.fillStyle=`rgba(38, 16, 14, ${(1-h)*.48})`,e.beginPath(),e.arc(p,f,y,0,Math.PI*2),e.fill()}e.fillStyle="#210907",e.beginPath(),e.moveTo(0,720),e.lineTo(180-t*.5,360),e.lineTo(350-t*.5,240),e.lineTo(440-t*.5,265),e.lineTo(520-t*.5,240),e.lineTo(740-t*.5,420),e.lineTo(980-t*.5,290),e.lineTo(1280,410),e.lineTo(1280,720),e.closePath(),e.fill();let o=.25+Math.sin(this.time*2.2)*.12;e.strokeStyle=`rgba(255, 105, 24, ${o})`,e.lineWidth=2,e.beginPath(),e.moveTo(260-t*.5,360),e.lineTo(290-t*.5,410),e.lineTo(275-t*.5,470),e.moveTo(860-t*.5,370),e.lineTo(890-t*.5,430),e.lineTo(915-t*.5,490),e.stroke();let l=[415,975];for(let d of l){let h=d-t*.5,p=.45+Math.sin(this.time*4+d)*.12,f=e.createLinearGradient(h,260,h,720);f.addColorStop(0,`rgba(255, 195, 50, ${p})`),f.addColorStop(1,"rgba(235, 55, 12, 0.22)"),e.fillStyle=f,e.fillRect(h,265,16,400)}e.fillStyle="#170706";for(let d=0;d<4;d+=1){let h=90+d*330-t*1.1;e.beginPath(),e.moveTo(h-6,0),e.lineTo(h+32,0),e.lineTo(h+18,155+d%2*42),e.lineTo(h+4,130+d%2*35),e.closePath(),e.fill()}let{embers:c,ash:u}=this.particlesByBiome.volcano;for(let d of c){let h=.55+Math.sin(d.phase*2)*.35;e.fillStyle=`rgba(255, ${120+Math.floor(h*90)}, 25, ${h})`,e.beginPath(),e.arc(d.x,d.y,d.r,0,Math.PI*2),e.fill()}e.fillStyle="rgba(120, 82, 74, 0.42)";for(let d of u)e.beginPath(),e.arc(d.x,d.y,d.r,0,Math.PI*2),e.fill();for(let d=0;d<6;d+=1){let h=140+d*210-t*.8,p=.4+Math.abs(Math.sin(this.time*2.8+d*1.4))*.45,f=e.createRadialGradient(h,708,4,h,708,46);f.addColorStop(0,`rgba(255, 190, 50, ${p*.45})`),f.addColorStop(1,"rgba(239, 68, 68, 0)"),e.fillStyle=f,e.beginPath(),e.arc(h,708,46,0,Math.PI*2),e.fill()}}drawFoundry(e,t){let i=e.createLinearGradient(0,0,0,720);i.addColorStop(0,"#070a12"),i.addColorStop(.55,"#121826"),i.addColorStop(1,"#1d2436"),e.fillStyle=i,e.fillRect(0,0,1280,720),this.lightningAlpha>.01&&(e.fillStyle=`rgba(186, 210, 255, ${this.lightningAlpha*.32})`,e.fillRect(0,0,1280,720));for(let u=0;u<4;u+=1){let d=120+u*300-t*.5,h=90;e.fillStyle=this.lightningAlpha>.1?`rgba(195, 222, 255, ${.22+this.lightningAlpha*.42})`:"rgba(38, 52, 78, 0.36)",e.beginPath(),e.roundRect(d,h,120,320,[60,60,0,0]),e.fill(),this.lightningAlpha>.3&&(u===1||u===2)&&(e.save(),e.strokeStyle=`rgba(225, 240, 255, ${this.lightningAlpha})`,e.lineWidth=2.6,e.beginPath(),e.moveTo(d+68,h+18),e.lineTo(d+42,h+105),e.lineTo(d+76,h+165),e.lineTo(d+48,h+270),e.stroke(),e.restore()),e.strokeStyle="#0c101b",e.lineWidth=4,e.strokeRect(d,h+70,120,250)}let r=[210,890];for(let u of r){let d=u-t*.6,h=e.createRadialGradient(d,515,10,d,515,115);h.addColorStop(0,"rgba(249, 115, 22, 0.38)"),h.addColorStop(1,"rgba(249, 115, 22, 0)"),e.fillStyle=h,e.beginPath(),e.arc(d,515,115,0,Math.PI*2),e.fill()}let s=[{x:290,y:310,r:95,speed:.25},{x:425,y:365,r:58,speed:-.41},{x:840,y:270,r:120,speed:-.18},{x:1120,y:390,r:78,speed:.32}];for(let u of s){e.save(),e.translate(u.x-t*.7,u.y),e.rotate(this.time*u.speed),e.fillStyle="rgba(20, 26, 40, 0.85)",e.beginPath(),e.arc(0,0,u.r,0,Math.PI*2),e.fill();for(let d=0;d<12;d+=1)e.rotate(Math.PI*2/12),e.fillRect(-10,-u.r-12,20,16);e.fillStyle="#0f1420",e.beginPath(),e.arc(0,0,u.r*.42,0,Math.PI*2),e.fill(),e.restore()}e.fillStyle="#0c101a",e.fillRect(0,28,1280,16);for(let u=0;u<1280;u+=180)e.fillRect(u-t,0,14,110);let a=[245,710,1060];for(let u=0;u<a.length;u+=1){let d=a[u]-t*.9,h=Math.sin(this.time*1.1+u)*9;if(e.strokeStyle="rgba(51, 65, 85, 0.7)",e.lineWidth=3,e.beginPath(),e.moveTo(d,44),e.quadraticCurveTo(d+h*.5,130,d+h,215),e.stroke(),u===1&&(e.strokeStyle="rgba(100, 116, 139, 0.75)",e.lineWidth=3,e.beginPath(),e.arc(d+h,224,9,0,Math.PI*1.4),e.stroke()),Math.sin(this.time*4.5+u*2)>0){let f=e.createRadialGradient(d,46,2,d,46,26);f.addColorStop(0,"rgba(245, 158, 11, 0.72)"),f.addColorStop(1,"rgba(245, 158, 11, 0)"),e.fillStyle=f,e.beginPath(),e.arc(d,46,26,0,Math.PI*2),e.fill()}}let{rain:o,sparks:l,steam:c}=this.particlesByBiome.foundry;for(let u of c){let d=Math.max(0,(u.y-140)/400);e.fillStyle=`rgba(203, 213, 225, ${d*.08})`,e.beginPath(),e.arc(u.x-t*.6,u.y,u.r,0,Math.PI*2),e.fill()}e.strokeStyle="rgba(175, 205, 245, 0.2)",e.lineWidth=1.2,e.beginPath();for(let u of o)e.moveTo(u.x,u.y),e.lineTo(u.x-u.len*.22,u.y+u.len);e.stroke(),e.fillStyle="rgba(255, 168, 64, 0.75)";for(let u of l)e.fillRect(u.x,u.y,2.5,2.5)}drawOttomanPalace(e,t){let i=e.createLinearGradient(0,0,0,720);i.addColorStop(0,"#04141c"),i.addColorStop(.55,"#092a36"),i.addColorStop(1,"#123e4d"),e.fillStyle=i,e.fillRect(0,0,1280,720),e.save();let r=980-t*.25,s=128,a=e.createRadialGradient(r,s,10,r,s,130);a.addColorStop(0,"rgba(45, 212, 191, 0.28)"),a.addColorStop(1,"rgba(45, 212, 191, 0)"),e.fillStyle=a,e.beginPath(),e.arc(r,s,130,0,Math.PI*2),e.fill(),e.fillStyle="rgba(253, 230, 138, 0.85)",e.beginPath(),e.arc(r,s,34,0,Math.PI*2),e.fill(),e.fillStyle="#07222d",e.beginPath(),e.arc(r+12,s-5,28,0,Math.PI*2),e.fill(),e.restore();let o=[{x:180,y:470,r:90},{x:520,y:445,r:120},{x:890,y:465,r:95}];for(let l of o){let c=l.x-t*.55;e.fillStyle="rgba(8, 30, 40, 0.9)",e.beginPath(),e.arc(c,l.y,l.r,Math.PI,0),e.lineTo(c+l.r,720),e.lineTo(c-l.r,720),e.closePath(),e.fill(),e.strokeStyle="rgba(45, 212, 191, 0.45)",e.lineWidth=2,e.beginPath(),e.arc(c,l.y,l.r,Math.PI,0),e.stroke(),e.fillStyle="#fbbf24",e.fillRect(c-2,l.y-l.r-24,4,24),e.beginPath(),e.arc(c,l.y-l.r-28,5,0,Math.PI*2),e.fill()}for(let l of[350,710,1140]){let c=l-t*.65;e.fillStyle="#071b24",e.fillRect(c-10,210,20,510),e.strokeStyle="rgba(251, 191, 36, 0.5)",e.lineWidth=2,e.strokeRect(c-15,290,30,8),e.fillStyle="rgba(45, 212, 191, 0.35)",e.fillRect(c-2,155,4,55)}for(let l of this.particlesByBiome["ottoman-palace"].motes){let c=.25+(Math.sin(this.time*2.4+l.phase)+1)*.28;e.fillStyle=l.phase%2>1?`rgba(251, 191, 36, ${c})`:`rgba(45, 212, 191, ${c})`,e.beginPath(),e.arc(l.x,l.y,l.r,0,Math.PI*2),e.fill()}}drawOttomanBosphorus(e,t){let i=e.createLinearGradient(0,0,0,720);i.addColorStop(0,"#040d1d"),i.addColorStop(.55,"#0b2242"),i.addColorStop(1,"#123663"),e.fillStyle=i,e.fillRect(0,0,1280,720),e.save(),e.strokeStyle="rgba(56, 189, 248, 0.35)",e.lineWidth=3;let r=260-t*.45,s=920-t*.45;e.fillStyle="rgba(9, 24, 46, 0.9)",e.fillRect(r-12,150,24,380),e.fillRect(s-12,150,24,380),e.beginPath(),e.moveTo(0,310),e.quadraticCurveTo(r*.5,380,r,165),e.quadraticCurveTo((r+s)*.5,355,s,165),e.quadraticCurveTo(s+190,370,1280,310),e.stroke();let a=1090-t*.6;e.fillStyle="#09182e",e.fillRect(a-28,300,56,260),e.fillStyle="#38bdf8",e.beginPath(),e.moveTo(a-32,300),e.lineTo(a,245),e.lineTo(a+32,300),e.closePath(),e.fill();let o=e.createRadialGradient(a,275,4,a,275,95);o.addColorStop(0,"rgba(56, 189, 248, 0.45)"),o.addColorStop(1,"rgba(56, 189, 248, 0)"),e.fillStyle=o,e.beginPath(),e.arc(a,275,95,0,Math.PI*2),e.fill(),e.restore(),e.strokeStyle="rgba(56, 189, 248, 0.24)",e.lineWidth=2;for(let l of this.particlesByBiome["ottoman-bosphorus"].motes)e.beginPath(),e.moveTo(l.x,l.y),e.lineTo(l.x+16,l.y),e.stroke()}drawOttomanGalata(e,t,i){let r=e.createLinearGradient(0,0,0,720);r.addColorStop(0,"#130c05"),r.addColorStop(.55,"#2b1b0a"),r.addColorStop(1,"#472d10"),e.fillStyle=r,e.fillRect(0,0,1280,720);let s=770-t*.45;e.fillStyle="rgba(30, 19, 8, 0.88)",e.fillRect(s-42,165,84,555),e.fillStyle="#d97706",e.beginPath(),e.moveTo(s-50,165),e.lineTo(s,80),e.lineTo(s+50,165),e.closePath(),e.fill(),e.strokeStyle="rgba(251, 191, 36, 0.65)",e.lineWidth=3,e.strokeRect(s-48,195,96,14);for(let[a,o,l]of[[240,230,58],[1075,250,68]]){let c=a-t*.6;e.save(),e.translate(c,o),e.rotate(this.time*(i<0?-1.4:1.1)),e.strokeStyle="rgba(251, 191, 36, 0.36)",e.lineWidth=4;for(let u=0;u<4;u+=1)e.rotate(Math.PI/2),e.beginPath(),e.moveTo(0,0),e.lineTo(l,0),e.stroke();e.restore()}e.strokeStyle="rgba(253, 230, 138, 0.25)",e.lineWidth=1.6,e.beginPath();for(let a of this.particlesByBiome["ottoman-galata"].streaks)e.moveTo(a.x,a.y),e.lineTo(a.x+a.len,a.y);e.stroke()}drawOttomanObservatory(e,t){let i=e.createLinearGradient(0,0,0,720);i.addColorStop(0,"#090418"),i.addColorStop(.55,"#190b38"),i.addColorStop(1,"#2d1259"),e.fillStyle=i,e.fillRect(0,0,1280,720);for(let r of this.particlesByBiome["ottoman-observatory"].stars){let s=.25+(Math.sin(this.time*2.8+r.phase)+1)*.35;e.fillStyle=`rgba(233, 213, 255, ${s})`,e.beginPath(),e.arc(r.x,r.y,r.r,0,Math.PI*2),e.fill()}e.save(),e.translate(1280*.54-t*.5,290),e.strokeStyle="rgba(250, 204, 21, 0.28)",e.lineWidth=3,e.save(),e.rotate(this.time*.18),e.beginPath(),e.arc(0,0,165,0,Math.PI*2),e.stroke(),e.restore(),e.save(),e.rotate(-this.time*.26),e.strokeStyle="rgba(192, 132, 252, 0.32)",e.beginPath(),e.ellipse(0,0,140,65,Math.PI/6,0,Math.PI*2),e.stroke(),e.beginPath(),e.ellipse(0,0,140,65,-Math.PI/6,0,Math.PI*2),e.stroke(),e.restore(),e.restore()}drawOttomanShipyard(e,t){let i=e.createLinearGradient(0,0,0,720);i.addColorStop(0,"#120408"),i.addColorStop(.55,"#290a14"),i.addColorStop(1,"#3d101e"),e.fillStyle=i,e.fillRect(0,0,1280,720),this.lightningAlpha>.01&&(e.fillStyle=`rgba(251, 113, 133, ${this.lightningAlpha*.25})`,e.fillRect(0,0,1280,720));for(let a=0;a<4;a+=1){let o=120+a*300-t*.5;e.fillStyle="rgba(35, 12, 20, 0.85)",e.beginPath(),e.roundRect(o,85,115,340,[58,58,0,0]),e.fill(),e.strokeStyle="rgba(251, 113, 133, 0.28)",e.lineWidth=2,e.stroke()}let{rain:r,sparks:s}=this.particlesByBiome.foundry;e.strokeStyle="rgba(251, 191, 36, 0.22)",e.lineWidth=1.2,e.beginPath();for(let a of r)e.moveTo(a.x,a.y),e.lineTo(a.x-a.len*.22,a.y+a.len);e.stroke(),e.fillStyle="rgba(251, 113, 133, 0.82)";for(let a of s)e.fillRect(a.x,a.y,2.5,2.5)}drawTurkeyStageSky(e,t,i=1,r=0){let s=Math.max(1,Math.min(7,i||1)),o=[["#2d162c","#7c2d48","#d97757"],["#0c2a42","#1d4f6e","#5fa8b8"],["#0f3b5c","#256b8e","#74b9d6"],t,["#2b1224","#832b3b","#e07a38"],["#150b2b","#3a1c5e","#7e3b6e"],["#040814","#0b162c","#182b4c"]][s-1]||t,l=e.createLinearGradient(0,0,0,720);if(l.addColorStop(0,o[0]),l.addColorStop(.55,o[1]),l.addColorStop(1,o[2]),e.fillStyle=l,e.fillRect(0,0,1280,720),s>=6)for(let y=0;y<48;y+=1){let m=(y*173+29)%1280,g=18+y*89%240,_=.25+(Math.sin(this.time*2.4+y)+1)*.35;e.fillStyle=`rgba(241, 245, 249, ${_})`,e.fillRect(m,g,y%4===0?2.4:1.5,y%4===0?2.4:1.5)}let c=180+(s-1)*145-r*.35,u=Math.sin((s-.5)/7*Math.PI),d=s===7?105:275-u*175,h=s===7?62:95,p=s===7?"rgba(226, 232, 240, 0.92)":s>=5?"rgba(251, 146, 60, 0.92)":"rgba(254, 240, 138, 0.92)",f=e.createRadialGradient(c,d,8,c,d,h);f.addColorStop(0,p),f.addColorStop(.45,s===7?"rgba(148, 163, 184, 0.28)":"rgba(251, 191, 36, 0.24)"),f.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=f,e.beginPath(),e.arc(c,d,h,0,Math.PI*2),e.fill(),e.fillStyle=p,e.beginPath(),e.arc(c,d,s===7?24:30,0,Math.PI*2),e.fill()}drawTurkeyAmasya(e,t,i){this.drawTurkeyStageSky(e,["#112620","#1d4537","#356a52"],i,t);let r=420-t*.45;e.fillStyle="#182420",e.beginPath(),e.moveTo(r-310,560),e.lineTo(r-120,210),e.lineTo(r+60,165),e.lineTo(r+220,240),e.lineTo(r+420,560),e.closePath(),e.fill(),e.fillStyle="#2c3531",e.fillRect(r-30,128,130,44),e.fillRect(r-42,108,28,64),e.fillRect(r+88,112,28,60),e.fillStyle="#dc2626",e.fillRect(r+34,86,26,16);for(let a of[r-10,r+52,r+114])e.fillStyle="rgba(251, 191, 36, 0.32)",e.beginPath(),e.roundRect(a,248,34,52,[16,16,2,2]),e.fill(),e.fillStyle="#111815",e.beginPath(),e.roundRect(a+7,262,20,38,[10,10,0,0]),e.fill();for(let a=0;a<6;a+=1){let o=90+a*190-t*.85;e.fillStyle="#2d231c",e.fillRect(o,455,86,75),e.fillStyle="#7c2d12",e.beginPath(),e.moveTo(o-6,455),e.lineTo(o+43,424),e.lineTo(o+92,455),e.fill(),e.fillStyle="rgba(254, 240, 138, 0.48)",e.fillRect(o+16,474,14,18),e.fillRect(o+54,474,14,18)}let s=e.createLinearGradient(0,530,0,720);s.addColorStop(0,"rgba(16, 185, 129, 0.42)"),s.addColorStop(1,"rgba(6, 78, 59, 0.85)"),e.fillStyle=s,e.fillRect(0,530,1280,190),e.fillStyle="rgba(254, 240, 138, 0.45)";for(let a of this.particlesByBiome["turkey-amasya"].motes)e.beginPath(),e.arc(a.x,a.y,a.r,0,Math.PI*2),e.fill()}drawTurkeyYozgat(e,t,i,r){this.drawTurkeyStageSky(e,["#231709","#4f3312","#8a5820"],r,t),e.fillStyle="#241c12",e.beginPath(),e.moveTo(0,520),e.quadraticCurveTo(320-t*.4,410,680-t*.4,470),e.quadraticCurveTo(980-t*.4,405,1280,495),e.lineTo(1280,720),e.lineTo(0,720),e.closePath(),e.fill();for(let a=0;a<9;a+=1){let o=65+a*145-t*.65;Math.abs(o-1280*.5)<70||(e.fillStyle="#14331d",e.beginPath(),e.moveTo(o,390),e.lineTo(o-24,490),e.lineTo(o+24,490),e.closePath(),e.fill())}let s=1280*.52-t*.55;e.fillStyle="#a37b48",e.fillRect(s-28,175,56,330),e.fillStyle="#475569",e.beginPath(),e.moveTo(s-34,175),e.lineTo(s,118),e.lineTo(s+34,175),e.closePath(),e.fill(),e.fillStyle="#fef3c7",e.beginPath(),e.arc(s,222,16,0,Math.PI*2),e.fill(),e.strokeStyle="#1e293b",e.lineWidth=2,e.beginPath(),e.moveTo(s,222),e.lineTo(s+Math.cos(this.time*.8)*10,222+Math.sin(this.time*.8)*10),e.stroke(),e.strokeStyle="rgba(253, 230, 138, 0.22)",e.lineWidth=1.5,e.beginPath();for(let a of this.particlesByBiome["turkey-yozgat"].streaks)e.moveTo(a.x,a.y),e.lineTo(a.x+a.len,a.y);e.stroke()}drawTurkeyErzurum(e,t,i){this.drawTurkeyStageSky(e,["#0a192e","#17365e","#326396"],i,t);for(let[s,a,o]of[[240,150,420],[660,125,480],[1060,165,420]]){let l=s-t*.45;e.fillStyle="#1e2e44",e.beginPath(),e.moveTo(l-o/2,560),e.lineTo(l,a),e.lineTo(l+o/2,560),e.closePath(),e.fill(),e.fillStyle="rgba(241, 245, 249, 0.65)",e.beginPath(),e.moveTo(l,a),e.lineTo(l-o*.16,a+95),e.lineTo(l-o*.04,a+78),e.lineTo(l+o*.08,a+100),e.lineTo(l+o*.16,a+88),e.closePath(),e.fill()}let r=1280*.52-t*.6;e.fillStyle="#5c2d1a",e.fillRect(r-65,360,130,155);for(let s of[-52,34])e.fillStyle="#7c361c",e.fillRect(r+s,210,22,165),e.fillStyle="#0284c7",e.beginPath(),e.moveTo(r+s-3,210),e.lineTo(r+s+11,164),e.lineTo(r+s+25,210),e.closePath(),e.fill();e.fillStyle="rgba(248, 250, 252, 0.78)";for(let s of this.particlesByBiome["turkey-erzurum"].snow)e.beginPath(),e.arc(s.x,s.y,s.r,0,Math.PI*2),e.fill()}drawTurkeyCorum(e,t,i){this.drawTurkeyStageSky(e,["#24150a","#4a2a14","#804d24"],i,t);let r=1280*.52-t*.45,s=235;e.save(),e.translate(r,s),e.rotate(this.time*.22),e.strokeStyle="rgba(250, 204, 21, 0.28)",e.lineWidth=4,e.beginPath(),e.arc(0,0,135,0,Math.PI*2),e.stroke();for(let o=0;o<12;o+=1)e.rotate(Math.PI/6),e.beginPath(),e.moveTo(118,0),e.lineTo(148,0),e.stroke();e.restore();let a=1280*.52-t*.65;e.fillStyle="#3b2414",e.fillRect(a-95,315,42,220),e.fillRect(a+53,315,42,220),e.beginPath(),e.moveTo(a-105,315),e.lineTo(a,255),e.lineTo(a+105,315),e.lineTo(a+105,338),e.lineTo(a-105,338),e.closePath(),e.fill(),e.fillStyle="rgba(253, 224, 71, 0.42)";for(let o of this.particlesByBiome["turkey-corum"].dust)e.beginPath(),e.arc(o.x,o.y,o.r,0,Math.PI*2),e.fill()}drawTurkeySamsun(e,t,i){this.drawTurkeyStageSky(e,["#071a24","#0f364a","#1b5866"],i,t);let r=390-t*.55,s=Math.sin(this.time*1.9)*3.5;e.fillStyle="#e2e8f0",e.beginPath(),e.moveTo(r-120,448+s),e.lineTo(r+125,448+s),e.lineTo(r+102,488+s),e.lineTo(r-104,488+s),e.closePath(),e.fill(),e.fillStyle="#cbd5e1",e.fillRect(r-56,420+s,110,28),e.fillStyle="#d97706",e.fillRect(r-8,376+s,16,44),e.fillStyle="rgba(226, 232, 240, 0.25)",e.beginPath(),e.arc(r-20-Math.sin(this.time*2)*8,355+s,14,0,Math.PI*2),e.arc(r-38-Math.sin(this.time*2)*14,338+s,18,0,Math.PI*2),e.fill();let a=950-t*.65;e.fillStyle="#334155",e.fillRect(a-24,350,48,145),e.fillStyle="#fbbf24",e.beginPath(),e.arc(a,330,14,0,Math.PI*2),e.fill();let o=e.createLinearGradient(0,485,0,720);o.addColorStop(0,"rgba(16, 185, 129, 0.35)"),o.addColorStop(1,"rgba(6, 44, 58, 0.92)"),e.fillStyle=o,e.fillRect(0,485,1280,235),e.fillStyle="rgba(167, 243, 208, 0.45)";for(let l of this.particlesByBiome["turkey-samsun"].motes)e.beginPath(),e.arc(l.x,l.y,l.r,0,Math.PI*2),e.fill()}};var Gs=class{constructor(e){this.canvas=e,this.ctx=e.getContext("2d"),this.textures=Wh(this.ctx),this.background=new zs,this.use3DBackdrop=!1,this.particles=[],this.scarves=[Array.from({length:6},()=>({x:64,y:514})),Array.from({length:6},()=>({x:92,y:514}))],this.lastPlayerId=null,this.breathTimer=0,this.sawSparkTimer=0,this.lightCanvas=document.createElement("canvas"),this.lightCanvas.width=1280,this.lightCanvas.height=720,this.lightCtx=this.lightCanvas.getContext("2d")}resetForLevel(e){this.particles.length=0;for(let t=0;t<e.players.length;t+=1){let i=e.players[t],r=i.x+i.w/2,s=i.y+14,a=this.scarves[t]||this.scarves[0];for(let o of a)o.x=r,o.y=s}this.lastPlayerId=e.id}spawnParticles(e,t,i,r={}){let{color:s="#cbd5e1",speedMin:a=40,speedMax:o=160,angleMin:l=0,angleMax:c=Math.PI*2,gravity:u=420,sizeMin:d=2,sizeMax:h=4.5,lifeMin:p=.25,lifeMax:f=.6}=r;for(let y=0;y<i;y+=1){let m=l+Math.random()*(c-l),g=a+Math.random()*(o-a),_=p+Math.random()*(f-p);this.particles.push({x:e,y:t,vx:Math.cos(m)*g,vy:Math.sin(m)*g,gravity:u,size:d+Math.random()*(h-d),life:_,maxLife:_,color:s})}}processEvents(e,t){let i=t==="rainforest"?"#86efac":t==="desert"||t==="ottoman-galata"?"#fbbf24":t==="glacier"||t==="ottoman-bosphorus"?"#e0f2fe":t==="volcano"?"#fb923c":t==="ottoman-palace"?"#2dd4bf":t==="ottoman-observatory"?"#c084fc":t==="ottoman-shipyard"?"#fb7185":"#fbbf24";for(let r of e)if(r.type==="footstep")this.spawnParticles(r.x,r.y,t==="glacier"||t==="foundry"?4:3,{color:t==="foundry"?"#f59e0b":i,speedMin:t==="foundry"?35:18,speedMax:t==="foundry"?85:55,angleMin:-Math.PI,angleMax:0,gravity:t==="volcano"?-40:180,sizeMin:1.5,sizeMax:3,lifeMin:.16,lifeMax:.32});else if(r.type==="land")this.spawnParticles(r.x,r.y,9,{color:i,speedMin:40,speedMax:130,angleMin:-Math.PI,angleMax:0,gravity:t==="volcano"?80:260,sizeMin:2,sizeMax:4.2,lifeMin:.22,lifeMax:.45});else if(r.type==="jump"||r.type==="bounce")this.spawnParticles(r.x,r.y,r.type==="bounce"?14:6,{color:r.type==="bounce"?"#38bdf8":i,speedMin:45,speedMax:150,angleMin:-Math.PI,angleMax:0,gravity:240,lifeMin:.2,lifeMax:.45});else if(r.type==="crumble")for(let s=0;s<14;s+=1)this.spawnParticles(r.x+Math.random()*r.w,r.y+Math.random()*14,1,{color:t==="desert"?"#c28344":"#64748b",speedMin:30,speedMax:110,gravity:650,sizeMin:3,sizeMax:6,lifeMin:.35,lifeMax:.7});else if(r.type==="mirage")for(let s=0;s<22;s+=1)this.spawnParticles(r.x+Math.random()*r.w,r.y+Math.random()*18,1,{color:"#fcd34d",speedMin:25,speedMax:100,gravity:140,sizeMin:2,sizeMax:5,lifeMin:.35,lifeMax:.65});else r.type==="shatter"?this.spawnParticles(r.x,r.y,16,{color:"#e0f2fe",speedMin:70,speedMax:210,angleMin:-Math.PI,angleMax:0,gravity:520,sizeMin:2,sizeMax:5,lifeMin:.3,lifeMax:.6}):r.type==="slam"?this.spawnParticles(r.x,r.y,14,{color:"#cbd5e1",speedMin:60,speedMax:180,angleMin:-Math.PI,angleMax:0,gravity:400,lifeMin:.25,lifeMax:.5}):r.type==="polarity"?this.spawnParticles(1280/2,720/2,18,{color:"#c084fc",speedMin:120,speedMax:320,gravity:0,lifeMin:.25,lifeMax:.5}):r.type==="voidWrap"?this.spawnParticles(r.x,r.y,20,{color:"#38bdf8",speedMin:90,speedMax:240,gravity:0,sizeMin:2.5,sizeMax:5.5,lifeMin:.28,lifeMax:.55}):r.type==="death"?(this.spawnParticles(r.x,r.y,28,{color:"#ef4444",speedMin:80,speedMax:310,gravity:540,sizeMin:2.5,sizeMax:6,lifeMin:.35,lifeMax:.75}),this.spawnParticles(r.x,r.y,14,{color:"#f8fafc",speedMin:50,speedMax:190,gravity:300,sizeMin:2,sizeMax:4,lifeMin:.3,lifeMax:.55})):r.type==="clear"&&this.spawnParticles(r.x,r.y,32,{color:"#fde047",speedMin:70,speedMax:250,gravity:160,sizeMin:2.5,sizeMax:5.5,lifeMin:.4,lifeMax:.85})}update(e,t){if(this.background.update(e,t.biome,t.windForceX),t.status==="playing"&&t.biome==="glacier"&&(this.breathTimer-=e,this.breathTimer<=0)){this.breathTimer=.85;let i=t.player,r=i.x+i.w/2+i.facing*9,s=t.gravityScale>=0?i.y+11:i.y+i.h-11;this.spawnParticles(r,s,3,{color:"rgba(224, 242, 254, 0.6)",speedMin:14,speedMax:34,angleMin:i.facing>0?-.45:Math.PI-.45,angleMax:i.facing>0?.3:Math.PI+.3,gravity:-28,sizeMin:2.2,sizeMax:4.5,lifeMin:.35,lifeMax:.6})}if(t.status==="playing"&&(t.biome==="foundry"||t.biome==="ottoman-shipyard")&&(this.sawSparkTimer-=e,this.sawSparkTimer<=0)){this.sawSparkTimer=.12;for(let i of t.hazards)i.type==="saw"&&i.visible&&i.active&&Math.abs(i.vx)+Math.abs(i.vy)+(i.patrol?1:0)>0&&this.spawnParticles(i.x+i.w/2,i.y+i.h-4,2,{color:"#fbbf24",speedMin:60,speedMax:150,angleMin:-Math.PI,angleMax:0,gravity:480,sizeMin:1.5,sizeMax:3,lifeMin:.16,lifeMax:.3})}for(let i=this.particles.length-1;i>=0;i-=1){let r=this.particles[i];if(r.life-=e,r.life<=0){this.particles.splice(i,1);continue}r.vy+=r.gravity*e,r.x+=r.vx*e,r.y+=r.vy*e}for(let i=0;i<t.players.length;i+=1){let r=t.players[i],s=this.scarves[i];if(!r.alive||!s)continue;let a=r.x+r.w/2-r.facing*4,o=t.gravityScale>=0?r.y+13:r.y+r.h-13;s[0].x=a,s[0].y=o;for(let l=1;l<s.length;l+=1){let c=s[l-1],u=s[l];u.x+=(-r.facing*65+t.windForceX*.45)*e,u.y+=(Math.sin(this.background.time*9+l*.9+i)*28+20*t.gravityScale)*e;let d=u.x-c.x,h=u.y-c.y,p=Math.hypot(d,h)||1,f=5.5;p>f&&(u.x=c.x+d/p*f,u.y=c.y+h/p*f)}}}render(e){let t=this.ctx;if(t.clearRect(0,0,1280,720),t.save(),e.shakeTime>0&&e.shakeIntensity>0){let i=e.shakeIntensity*(e.shakeTime/.25),r=(Math.random()-.5)*i*2,s=(Math.random()-.5)*i*2;t.translate(r,s)}if(this.use3DBackdrop||this.background.draw(t,e.biome,e.player.x,e.windForceX,e.stage||1),t.save(),e.physicsRules?.mirrorCameraX&&(t.translate(1280,0),t.scale(-1,1)),this.drawVisualZones(t,e),this.drawPlatforms(t,e),this.drawDoor(t,e),this.drawHazards(t,e),e.status!=="dying")for(let i=0;i<e.players.length;i+=1){let r=e.players[i];r.alive&&this.drawPlayer(t,e,r,this.scarves[i]||this.scarves[0])}this.drawRisingHazard(t,e),Sh(t,e,this.background.time),this.drawParticles(t),e.darkness&&this.drawDarknessPass(t,e),t.restore(),this.drawStatusRim(t,e),this.drawToast(t,e),t.restore()}drawPlatforms(e,t){let i=this.textures[t.biome],r=this.background.time;for(let s of t.platforms){if(!s.visible)continue;let a=s.crumbling&&!s.falling?Math.sin(s.shakeTimer)*2.4:0,o=s.x+a,l=s.y,c=s.w,u=s.h,d=!1,h=!1;if(!s.falling&&s.surface!=="bouncy"&&s.surface!=="conveyor")for(let f of t.platforms)f===s||!f.visible||f.falling||f.surface==="bouncy"||f.surface==="conveyor"||Math.abs(f.y-s.y)<1&&Math.abs(f.h-s.h)<1&&(Math.abs(f.x+f.w-s.x)<=1.5&&(d=!0),Math.abs(s.x+s.w-f.x)<=1.5&&(h=!0));e.save(),s.surface==="fake"&&(e.globalAlpha=.94+Math.sin(r*7+o*.05)*.04),e.fillStyle=i||"#475569",e.beginPath(),e.roundRect(o,l,c,u,[d?0:4,h?0:4,h?0:4,d?0:4]),e.fill();let p=e.createLinearGradient(o,l,o,l+Math.min(u,90));if(p.addColorStop(0,"rgba(255, 255, 255, 0.08)"),p.addColorStop(.2,"rgba(0, 0, 0, 0)"),p.addColorStop(1,"rgba(0, 0, 0, 0.42)"),e.fillStyle=p,e.fillRect(o,l,c,u),s.surface==="ice"){let f=e.createLinearGradient(o,l,o,l+12);f.addColorStop(0,"#e0f2fe"),f.addColorStop(.55,"#7dd3fc"),f.addColorStop(1,"rgba(56, 189, 248, 0.25)"),e.fillStyle=f,e.fillRect(o,l,c,Math.min(12,u)),e.strokeStyle="rgba(255, 255, 255, 0.6)",e.lineWidth=1.4;for(let y=o+14;y<o+c-20;y+=44)e.beginPath(),e.moveTo(y,l+4),e.lineTo(y+18,l+4),e.stroke();if(l>40&&l+u<700){e.fillStyle="rgba(186, 230, 253, 0.72)";for(let y=o+14;y<o+c-14;y+=26){let m=7+y*13%9;e.beginPath(),e.moveTo(y-4,l+u),e.lineTo(y,l+u+m),e.lineTo(y+4,l+u),e.closePath(),e.fill()}}}else if(t.biome==="rainforest")if(s.surface==="crumble"){e.fillStyle="#5c381f",e.fillRect(o,l,c,u),e.fillStyle="#7c4d2b";for(let f=o+3;f<o+c-8;f+=18)e.fillRect(f,l+2,14,u-4);e.strokeStyle="#a16207",e.lineWidth=2,e.strokeRect(o+1,l+2,c-2,4)}else{if(e.fillStyle="#2d6a3e",e.fillRect(o,l,c,Math.min(10,u)),e.fillStyle="#4ade80",e.fillRect(o,l,c,3),l>40){e.strokeStyle="#4ade80",e.lineWidth=1.4;for(let f=o+10;f<o+c-10;f+=16){let y=Math.sin(r*2.5+f*.08)*2.5;e.beginPath(),e.moveTo(f,l),e.lineTo(f+y,l-5-f*3%4),e.stroke()}if(c>=140){let f=o+36;e.fillStyle="#cbd5e1",e.fillRect(f-1,l-5,2.5,5),e.fillStyle="#34d399",e.beginPath(),e.arc(f+.2,l-5,4.5,Math.PI,0),e.fill()}}e.fillStyle="#245832";for(let f=o+8;f<o+c-12;f+=22){let y=4+f*7%7;e.beginPath(),e.arc(f,l+9,y*.65,0,Math.PI),e.fill()}if(l>40&&l+u<700){e.strokeStyle="rgba(74, 124, 89, 0.55)",e.lineWidth=1.6;for(let f=o+18;f<o+c-18;f+=32){let y=10+f*7%14;e.beginPath(),e.moveTo(f,l+u),e.quadraticCurveTo(f+4,l+u+y*.5,f-2,l+u+y),e.stroke()}}}else if(t.biome==="desert"){if(e.fillStyle="#e5a95c",e.fillRect(o,l,c,Math.min(9,u)),e.fillStyle="rgba(255, 236, 190, 0.52)",e.fillRect(o,l,c,2.5),u>=26){e.fillStyle="rgba(72, 34, 12, 0.24)";for(let f=o+16;f<o+c-22;f+=42)e.fillRect(f,l+14,10,4),e.fillRect(f+13,l+13,4,6)}if(s.surface==="fake"){e.fillStyle=`rgba(253, 224, 71, ${.22+Math.sin(r*6+o)*.12})`;for(let f=o+14;f<o+c-14;f+=28){let y=l+u+6+Math.sin(r*4+f)*3;e.fillRect(f,y,3,3)}}}else if(t.biome==="glacier"){if(e.fillStyle="#bae6fd",e.fillRect(o,l,c,Math.min(9,u)),l>40&&l+u<700){e.fillStyle="rgba(186, 230, 253, 0.7)";for(let f=o+14;f<o+c-14;f+=26){let y=7+f*13%9;e.beginPath(),e.moveTo(f-4,l+u),e.lineTo(f,l+u+y),e.lineTo(f+4,l+u),e.closePath(),e.fill()}}}else if(t.biome==="volcano"){e.fillStyle="#4b3636",e.fillRect(o,l,c,Math.min(8,u));let f=.45+Math.sin(r*3.5+o*.02)*.2;if(e.fillStyle=`rgba(249, 115, 22, ${f})`,e.fillRect(o,l+Math.min(8,u),c,2.5),u>=24){e.strokeStyle=`rgba(255, 118, 28, ${f*.7})`,e.lineWidth=1.5,e.beginPath();for(let y=o+24;y<o+c-24;y+=68)e.moveTo(y,l+10),e.lineTo(y-6,l+Math.min(u-4,24));e.stroke()}}else if(t.biome==="foundry"){e.fillStyle="#4b5563",e.fillRect(o,l,c,Math.min(9,u)),e.fillStyle="#9ca3af",e.fillRect(o,l,c,2),e.fillStyle="#cbd5e1";for(let f=o+10;f<o+c-10;f+=26)e.fillRect(f,l+4,2.5,2.5);l>40&&l+u<700&&(e.strokeStyle="rgba(71, 85, 105, 0.75)",e.lineWidth=2,e.strokeRect(o+4,l+u,c-8,8))}else if(t.biome&&t.biome.startsWith("ottoman-")){let f={"ottoman-palace":["#14b8a6","#fde047"],"ottoman-bosphorus":["#0284c7","#7dd3fc"],"ottoman-galata":["#d97706","#fde68a"],"ottoman-observatory":["#7e22ce","#e9d5ff"],"ottoman-shipyard":["#be123c","#fbbf24"]},[y,m]=f[t.biome]||["#14b8a6","#fde047"];e.fillStyle=y,e.fillRect(o,l,c,Math.min(8,u)),e.fillStyle=m,e.fillRect(o,l,c,2);for(let g=o+16;g<o+c-16;g+=48)e.fillStyle="rgba(255, 255, 255, 0.28)",e.fillRect(g-3,l+4,6,2)}else if(t.biome&&t.biome.startsWith("turkey-")){let f={"turkey-amasya":["#dc2626","#86efac"],"turkey-yozgat":["#d97706","#fef08a"],"turkey-erzurum":["#0284c7","#e0f2fe"],"turkey-corum":["#b45309","#facc15"],"turkey-samsun":["#059669","#a7f3d0"]},[y,m]=f[t.biome]||["#dc2626","#fef08a"];e.fillStyle=y,e.fillRect(o,l,c,Math.min(8,u)),e.fillStyle=m,e.fillRect(o,l,c,2.5)}if(s.surface==="crumble"&&t.biome!=="rainforest"){e.strokeStyle=s.crumbling?"rgba(255, 195, 110, 0.85)":"rgba(15, 10, 8, 0.65)",e.lineWidth=s.crumbling?2:1.4,e.beginPath();for(let f=o+18;f<o+c-14;f+=34)e.moveTo(f,l+2),e.lineTo(f-6,l+Math.min(u*.5,13)),e.lineTo(f+5,l+Math.min(u-2,22));e.stroke()}else if(s.surface==="conveyor"){e.fillStyle="#1e293b",e.fillRect(o+2,l+2,c-4,13);let f=s.conveyorSpeed>=0?1:-1,y=r*Math.abs(s.conveyorSpeed)*.55%24*f;e.strokeStyle=s.conveyorSpeed>=0?"#38bdf8":"#f59e0b",e.lineWidth=2;for(let m=o-24;m<o+c+24;m+=24){let g=m+y;g<o+6||g>o+c-6||(e.beginPath(),e.moveTo(g-4*f,l+5),e.lineTo(g+3*f,l+8.5),e.lineTo(g-4*f,l+12),e.stroke())}}else if(s.surface==="bouncy"){let f=s.bounceAnim*5,y=t.biome==="desert",m=t.biome==="glacier";e.fillStyle=y?"#f59e0b":"#0ea5e9",e.fillRect(o+4,l+f,c-8,7),e.fillStyle=y?"#fef08a":"#e0f2fe",e.fillRect(o+8,l+f,c-16,3);let g=e.createLinearGradient(o,l-22,o,l+4);if(g.addColorStop(0,y?"rgba(251, 191, 36, 0)":"rgba(56, 189, 248, 0)"),g.addColorStop(1,y?"rgba(251, 191, 36, 0.52)":"rgba(56, 189, 248, 0.52)"),e.fillStyle=g,e.fillRect(o+4,l-22,c-8,22),m){e.fillStyle="rgba(224, 242, 254, 0.45)";let _=l-8-r*48%16;e.beginPath(),e.arc(o+c*.35,_,3,0,Math.PI*2),e.arc(o+c*.65,_-4,3.5,0,Math.PI*2),e.fill()}}e.strokeStyle="rgba(0, 0, 0, 0.45)",e.lineWidth=1.5,e.beginPath(),e.moveTo(o+.5,l+.5),e.lineTo(o+c-.5,l+.5),h||(e.moveTo(o+c-.5,l+.5),e.lineTo(o+c-.5,l+u-.5)),e.moveTo(o+.5,l+u-.5),e.lineTo(o+c-.5,l+u-.5),d||(e.moveTo(o+.5,l+.5),e.lineTo(o+.5,l+u-.5)),e.stroke(),e.restore()}}drawVisualZones(e,t){let i=t.visualZones||[];if(i.length===0)return;let r=this.background.time;for(let s of i)if(s.type==="thermal"){let a=s.dir!=="down",o=e.createLinearGradient(s.x-28,0,s.x+28,0);o.addColorStop(0,"rgba(249, 115, 22, 0)"),o.addColorStop(.5,a?"rgba(249, 115, 22, 0.19)":"rgba(56, 189, 248, 0.16)"),o.addColorStop(1,"rgba(249, 115, 22, 0)"),e.fillStyle=o,e.fillRect(s.x-28,100,56,460),e.strokeStyle=a?"rgba(251, 146, 60, 0.52)":"rgba(125, 211, 252, 0.48)",e.lineWidth=2;let l=a?-1:1;for(let c=0;c<6;c+=1){let u=(r*140+c*75)%420,d=a?530-u:120+u;e.beginPath(),e.moveTo(s.x-10,d-5*l),e.lineTo(s.x,d+5*l),e.lineTo(s.x+10,d-5*l),e.stroke()}}else if(s.type==="teslaArc"){e.fillStyle="#475569",e.fillRect(s.x-10,0,20,22),e.fillRect(s.x-10,698,20,22),e.fillStyle="#b45309",e.fillRect(s.x-6,22,12,10),e.fillRect(s.x-6,688,12,10);let a=e.createLinearGradient(s.x-22,0,s.x+22,0);a.addColorStop(0,"rgba(168, 85, 247, 0)"),a.addColorStop(.5,"rgba(168, 85, 247, 0.2)"),a.addColorStop(1,"rgba(168, 85, 247, 0)"),e.fillStyle=a,e.fillRect(s.x-22,30,44,660),e.save(),e.strokeStyle="#e9d5ff",e.shadowColor="#a855f7",e.shadowBlur=10,e.lineWidth=2,e.beginPath(),e.moveTo(s.x,32);for(let o=60;o<688;o+=36){let l=Math.sin(r*38+o*.21+s.x)*9;e.lineTo(s.x+l,o)}e.lineTo(s.x,688),e.stroke(),e.restore()}}drawDoor(e,t){let i=t.door;if(!i.active)return;let r=i.x+i.w/2,s=i.y+i.h/2,a=.78+Math.sin(i.pulse)*.22,o=this.background.time,l=t.biome&&t.biome.startsWith("ottoman-"),c=t.biome&&t.biome.startsWith("turkey-"),u=t.biome==="rainforest"?{frame:"#45594b",inner:"#10b981",glow:"rgba(16, 185, 129, 0.42)"}:t.biome==="desert"?{frame:"#b47a38",inner:"#fbbf24",glow:"rgba(251, 191, 36, 0.48)"}:t.biome==="glacier"?{frame:"#6489a6",inner:"#38bdf8",glow:"rgba(56, 189, 248, 0.48)"}:t.biome==="volcano"?{frame:"#3b2829",inner:"#f97316",glow:"rgba(249, 115, 22, 0.48)"}:t.biome==="ottoman-palace"?{frame:"#164e63",inner:"#2dd4bf",glow:"rgba(45, 212, 191, 0.5)"}:t.biome==="ottoman-bosphorus"?{frame:"#0f294a",inner:"#38bdf8",glow:"rgba(56, 189, 248, 0.5)"}:t.biome==="ottoman-galata"?{frame:"#78350f",inner:"#fbbf24",glow:"rgba(251, 191, 36, 0.52)"}:t.biome==="ottoman-observatory"?{frame:"#3b0764",inner:"#c084fc",glow:"rgba(192, 132, 252, 0.52)"}:t.biome==="ottoman-shipyard"?{frame:"#4c0519",inner:"#fb7185",glow:"rgba(251, 113, 133, 0.52)"}:t.biome==="turkey-amasya"?{frame:"#7f1d1d",inner:"#34d399",glow:"rgba(239, 68, 68, 0.48)"}:t.biome==="turkey-yozgat"?{frame:"#78350f",inner:"#fbbf24",glow:"rgba(245, 158, 11, 0.48)"}:t.biome==="turkey-erzurum"?{frame:"#1e3a8a",inner:"#38bdf8",glow:"rgba(56, 189, 248, 0.5)"}:t.biome==="turkey-corum"?{frame:"#713f12",inner:"#facc15",glow:"rgba(234, 179, 8, 0.5)"}:t.biome==="turkey-samsun"?{frame:"#064e3b",inner:"#34d399",glow:"rgba(16, 185, 129, 0.5)"}:{frame:"#475569",inner:"#34d399",glow:"rgba(52, 211, 153, 0.44)"},d=e.createRadialGradient(r,s,6,r,s,74);if(d.addColorStop(0,u.glow),d.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=d,e.beginPath(),e.arc(r,s,74,0,Math.PI*2),e.fill(),e.save(),t.biome==="rainforest")e.fillStyle="#36473b",e.fillRect(i.x-6,i.y-6,i.w+12,10),e.fillStyle=u.frame,e.beginPath(),e.roundRect(i.x,i.y,i.w,i.h,[10,10,2,2]),e.fill(),e.fillStyle="#34d399",e.fillRect(r-6,i.y-4,12,5);else if(t.biome==="desert")e.fillStyle=u.frame,e.beginPath(),e.moveTo(i.x-5,i.y+i.h),e.lineTo(i.x+2,i.y),e.lineTo(i.x+i.w-2,i.y),e.lineTo(i.x+i.w+5,i.y+i.h),e.closePath(),e.fill(),e.fillStyle="#fde047",e.beginPath(),e.arc(r,i.y-4,7,0,Math.PI*2),e.fill(),e.fillRect(r-18,i.y-6,36,3);else if(t.biome==="glacier"){e.fillStyle=u.frame,e.beginPath(),e.moveTo(i.x-4,i.y+i.h),e.lineTo(i.x+2,i.y+8),e.lineTo(i.x+12,i.y-12),e.lineTo(r,i.y+4),e.lineTo(i.x+i.w-12,i.y-12),e.lineTo(i.x+i.w-2,i.y+8),e.lineTo(i.x+i.w+4,i.y+i.h),e.closePath(),e.fill(),e.fillStyle="#bae6fd";let p=Math.sin(o*3.5)*3;e.beginPath(),e.arc(r,i.y-11+p,3.5,0,Math.PI*2),e.fill()}else t.biome==="volcano"?(e.fillStyle=u.frame,e.beginPath(),e.moveTo(i.x-5,i.y+i.h),e.lineTo(i.x,i.y+6),e.lineTo(i.x+8,i.y-10),e.lineTo(r,i.y+2),e.lineTo(i.x+i.w-8,i.y-10),e.lineTo(i.x+i.w,i.y+6),e.lineTo(i.x+i.w+5,i.y+i.h),e.closePath(),e.fill(),e.strokeStyle="rgba(249, 115, 22, 0.85)",e.lineWidth=2,e.stroke()):l||c?(e.fillStyle=u.frame,e.beginPath(),e.moveTo(i.x-4,i.y+i.h),e.lineTo(i.x-4,i.y+18),e.quadraticCurveTo(i.x-2,i.y+2,r,i.y-10),e.quadraticCurveTo(i.x+i.w+2,i.y+2,i.x+i.w+4,i.y+18),e.lineTo(i.x+i.w+4,i.y+i.h),e.closePath(),e.fill(),e.strokeStyle=c?"#fde68a":"#fbbf24",e.lineWidth=2,e.stroke(),e.fillStyle="#fde047",e.beginPath(),e.arc(r,i.y-14,7,0,Math.PI*2),e.fill(),e.fillStyle=u.frame,e.beginPath(),e.arc(r+2.5,i.y-15.5,5.4,0,Math.PI*2),e.fill()):(e.fillStyle=u.frame,e.beginPath(),e.roundRect(i.x-2,i.y,i.w+4,i.h,[8,8,2,2]),e.fill(),e.strokeStyle="#1e293b",e.lineWidth=2,e.stroke(),e.fillStyle=Math.sin(o*6)>-.3?"#4ade80":"#166534",e.beginPath(),e.arc(r,i.y-4,4.5,0,Math.PI*2),e.fill());e.restore();let h=e.createLinearGradient(i.x,i.y+8,i.x,i.y+i.h);h.addColorStop(0,"#ffffff"),h.addColorStop(.28,u.inner),h.addColorStop(1,"rgba(15, 23, 42, 0.92)"),e.save(),e.globalAlpha=a,e.fillStyle=h,e.beginPath(),e.roundRect(i.x+7,i.y+8,i.w-14,i.h-10,[14,14,2,2]),e.fill(),e.restore(),e.fillStyle=t.biome==="foundry"?"#f59e0b":"#1e293b",e.fillRect(i.x-4,i.y+i.h-5,i.w+8,5)}drawHazards(e,t){for(let i of t.hazards)i.visible&&(i.type==="spikes"?this.drawSpikes(e,i,t.biome):i.type==="icicle"?this.drawIcicle(e,i):i.type==="saw"?this.drawSaw(e,i):i.type==="boulder"?this.drawBoulder(e,i):i.type==="crusher"?this.drawCrusher(e,i,t.biome):i.type==="spear"?this.drawSpear(e,i):i.type==="chaser"?this.drawChaser(e,i):(i.type==="lava"||i.type==="quicksand"||i.type==="plasma")&&this.drawLiquidPool(e,i.x,i.y,i.w,i.h,i.type))}drawSpikes(e,t,i){let r=Math.max(2,Math.round(t.w/14)),s=t.w/r,a=t.popProgress,o=i==="rainforest"?"#d9c496":i==="desert"?"#f59e0b":i==="glacier"?"#e0f2fe":i==="volcano"?"#fb7185":"#e2e8f0",l=i==="rainforest"?"#715b37":i==="desert"?"#92541c":i==="glacier"?"#38bdf8":i==="volcano"?"#3f2e34":"#64748b";for(let c=0;c<r;c+=1){let u=t.x+c*s,d=t.h*a;e.beginPath(),t.dir==="down"?(e.moveTo(u+1,t.y),e.lineTo(u+s/2,t.y+d),e.lineTo(u+s-1,t.y)):(e.moveTo(u+1,t.y+t.h),e.lineTo(u+s/2,t.y+t.h-d),e.lineTo(u+s-1,t.y+t.h)),e.closePath();let h=e.createLinearGradient(u,t.y,u+s,t.y+t.h);h.addColorStop(0,o),h.addColorStop(1,l),e.fillStyle=h,e.fill(),e.strokeStyle="rgba(0,0,0,0.5)",e.lineWidth=1,e.stroke()}}drawIcicle(e,t){let i=Math.max(1,Math.round(t.w/24)),r=t.w/i;for(let s=0;s<i;s+=1){let a=t.x+s*r,o=e.createLinearGradient(a,t.y,a+r,t.y+t.h);o.addColorStop(0,"#bae6fd"),o.addColorStop(.55,"#38bdf8"),o.addColorStop(1,"#f0f9ff"),e.fillStyle=o,e.beginPath(),e.moveTo(a+2,t.y),e.lineTo(a+r*.5,t.y+t.h),e.lineTo(a+r-2,t.y),e.closePath(),e.fill(),e.strokeStyle="rgba(255, 255, 255, 0.55)",e.lineWidth=1,e.stroke()}}drawSaw(e,t){let i=t.x+t.w/2,r=t.y+t.h/2,s=Math.min(t.w,t.h)/2;e.save(),e.translate(i,r),e.rotate(t.angle),e.fillStyle="#cbd5e1";let a=12;e.beginPath();for(let o=0;o<a;o+=1){let l=o/a*Math.PI*2,c=(o+.5)/a*Math.PI*2;e.lineTo(Math.cos(l)*s,Math.sin(l)*s),e.lineTo(Math.cos(c)*(s*.72),Math.sin(c)*(s*.72))}e.closePath(),e.fill(),e.strokeStyle="#334155",e.lineWidth=1.5,e.stroke(),e.fillStyle="#64748b",e.beginPath(),e.arc(0,0,s*.58,0,Math.PI*2),e.fill(),e.fillStyle="#ef4444",e.beginPath(),e.arc(0,0,s*.22,0,Math.PI*2),e.fill(),e.restore()}drawBoulder(e,t){let i=t.x+t.w/2,r=t.y+t.h/2,s=Math.min(t.w,t.h)/2,a=e.createRadialGradient(i-s*.3,r-s*.3,s*.15,i,r,s);a.addColorStop(0,"#9ca3af"),a.addColorStop(.55,"#57534e"),a.addColorStop(1,"#292524"),e.fillStyle=a,e.beginPath(),e.arc(i,r,s,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(0,0,0,0.6)",e.lineWidth=2,e.stroke()}drawCrusher(e,t,i){e.fillStyle="#334155",e.fillRect(t.x+t.w*.35,0,t.w*.3,Math.max(0,t.y));let r=e.createLinearGradient(t.x,t.y,t.x+t.w,t.y);i==="desert"?(r.addColorStop(0,"#c08244"),r.addColorStop(1,"#78441c")):i==="volcano"?(r.addColorStop(0,"#442b2b"),r.addColorStop(1,"#1e1010")):(r.addColorStop(0,"#475569"),r.addColorStop(1,"#1e293b")),e.fillStyle=r,e.fillRect(t.x,t.y,t.w,t.h),e.fillStyle="#f59e0b",e.fillRect(t.x+2,t.y+t.h-12,t.w-4,10),e.fillStyle="#0f172a";for(let s=t.x+4;s<t.x+t.w-8;s+=14)e.fillRect(s,t.y+t.h-12,6,10);e.strokeStyle="rgba(0,0,0,0.65)",e.lineWidth=2,e.strokeRect(t.x,t.y,t.w,t.h)}drawSpear(e,t){e.save(),e.fillStyle="#b45309",e.fillRect(t.x+8,t.y+t.h*.3,t.w-16,t.h*.4),e.fillStyle="#fde047",e.beginPath(),t.dir==="right"?(e.moveTo(t.x+t.w-14,t.y),e.lineTo(t.x+t.w,t.y+t.h/2),e.lineTo(t.x+t.w-14,t.y+t.h)):(e.moveTo(t.x+14,t.y),e.lineTo(t.x,t.y+t.h/2),e.lineTo(t.x+14,t.y+t.h)),e.closePath(),e.fill(),e.restore()}drawChaser(e,t){let i=e.createLinearGradient(t.x,t.y,t.x+t.w,t.y);i.addColorStop(0,"#180c0d"),i.addColorStop(.85,"#3b1919"),i.addColorStop(1,"#f97316"),e.fillStyle=i,e.fillRect(t.x,t.y,t.w,t.h),e.fillStyle="#fb923c";for(let r=t.y+8;r<t.y+t.h-16;r+=26)e.beginPath(),e.moveTo(t.x+t.w,r),e.lineTo(t.x+t.w+14,r+11),e.lineTo(t.x+t.w,r+22),e.closePath(),e.fill()}drawLiquidPool(e,t,i,r,s,a){let o=this.background.time,l=a==="lava",c=a==="plasma",u=e.createLinearGradient(0,i,0,i+Math.min(s,120));l?(u.addColorStop(0,"#fde047"),u.addColorStop(.16,"#f97316"),u.addColorStop(.65,"#dc2626"),u.addColorStop(1,"#7f1d1d")):c?(u.addColorStop(0,"#e0f2fe"),u.addColorStop(.18,"#38bdf8"),u.addColorStop(.6,"#6366f1"),u.addColorStop(1,"#312e81")):(u.addColorStop(0,"#f59e0b"),u.addColorStop(.3,"#b45309"),u.addColorStop(1,"#78350f")),e.fillStyle=u,e.beginPath(),e.moveTo(t,i+s),e.lineTo(t,i);for(let d=t;d<=t+r;d+=18){let h=Math.sin(d*.05+o*(l||c?4.2:2.6))*(l||c?3.5:2.2);e.lineTo(d,i+h)}if(e.lineTo(t+r,i+s),e.closePath(),e.fill(),l||c){let d=e.createLinearGradient(0,i-34,0,i+6);d.addColorStop(0,c?"rgba(56, 189, 248, 0)":"rgba(249, 115, 22, 0)"),d.addColorStop(1,c?"rgba(56, 189, 248, 0.38)":"rgba(249, 115, 22, 0.35)"),e.fillStyle=d,e.fillRect(t,i-34,r,40)}}drawRisingHazard(e,t){let i=t.risingHazard;!i||!i.active&&i.y>=720||this.drawLiquidPool(e,0,i.y,1280,720-i.y+40,i.type)}drawPlayer(e,t,i=t.player,r=this.scarves[0]){let s=i.x+i.w/2,a=i.y+i.h/2,o=t.gravityScale>=0?1:-1;e.save(),e.strokeStyle=i.scarfColor||"#ef4444",e.lineWidth=5,e.lineCap="round",e.lineJoin="round",e.beginPath(),e.moveTo(r[0].x,r[0].y);for(let f=1;f<r.length;f+=1)e.lineTo(r[f].x,r[f].y);e.stroke(),e.restore(),e.save(),e.translate(s,a),e.scale(i.facing*i.squashX,o*i.squashY);let l=i.grounded&&Math.abs(i.vx)>22,c=l?Math.sin(i.runPhase)*.55:i.grounded?0:.4,u=l?Math.abs(Math.cos(i.runPhase))*-1.8:0;e.translate(0,u);let d=i.character||"explorer",h={explorer:{backArm:i.id===2?"#1e6e8f":"#9a6b3b",torso:i.id===2?"#0284c7":"#c2813e",belt:i.id===2?"#0c4a6e":"#7c4d21",frontArm:i.id===2?"#38bdf8":"#d9964f",pantsBack:"#334155",pantsFront:"#475569"},yeniceri:{backArm:"#991b1b",torso:"#dc2626",belt:"#fbbf24",frontArm:"#ef4444",pantsBack:"#0f172a",pantsFront:"#1e293b"},sipahi:{backArm:"#1e40af",torso:"#0284c7",belt:"#f59e0b",frontArm:"#38bdf8",pantsBack:"#1e293b",pantsFront:"#334155"},hezarfen:{backArm:"#92400e",torso:"#d97706",belt:"#fde68a",frontArm:"#f59e0b",pantsBack:"#292524",pantsFront:"#44403c"},akinci:{backArm:"#4c1d95",torso:"#18181b",belt:"#f43f5e",frontArm:"#7c3aed",pantsBack:"#09090b",pantsFront:"#27272a"},"amasya-sehzade":{backArm:"#991b1b",torso:"#dc2626",belt:"#22c55e",frontArm:"#ef4444",pantsBack:"#1f2937",pantsFront:"#374151"},"yozgat-yigit":{backArm:"#92400e",torso:"#d97706",belt:"#fef08a",frontArm:"#f59e0b",pantsBack:"#292524",pantsFront:"#44403c"},"erzurum-dadas":{backArm:"#1e3a8a",torso:"#0284c7",belt:"#e2e8f0",frontArm:"#38bdf8",pantsBack:"#0f172a",pantsFront:"#1e293b"},"corum-hitit":{backArm:"#713f12",torso:"#ca8a04",belt:"#fef08a",frontArm:"#eab308",pantsBack:"#2c1e12",pantsFront:"#422c19"},"samsun-kaptan":{backArm:"#064e3b",torso:"#0f766e",belt:"#fbbf24",frontArm:"#10b981",pantsBack:"#0f172a",pantsFront:"#1e293b"}},p=h[d]||h.explorer;if(d==="hezarfen"){let f=i.grounded?.35:.85+Math.sin(this.background.time*12)*.12;e.save(),e.translate(-5,-4),e.rotate(-f),e.fillStyle="rgba(251, 191, 36, 0.85)",e.beginPath(),e.moveTo(0,0),e.lineTo(-18,-10),e.lineTo(-14,4),e.closePath(),e.fill(),e.strokeStyle="#38bdf8",e.lineWidth=1.4,e.stroke(),e.restore()}if(e.save(),e.translate(-2,7),e.rotate(-c),e.fillStyle=p.pantsBack,e.roundRect(-3.5,0,7,15,2),e.fill(),e.fillStyle="#1e1b18",e.fillRect(-3.5,12,9,4),e.restore(),e.save(),e.translate(-2,-6),e.rotate(c*.9),e.fillStyle=p.backArm,e.roundRect(-2.5,0,5.5,13,2),e.fill(),e.restore(),e.fillStyle=p.torso,e.beginPath(),e.roundRect(-7,-9,14,18,4),e.fill(),e.fillStyle=p.belt,e.fillRect(-7,2,14,4),e.save(),e.translate(2,7),e.rotate(c),e.fillStyle=p.pantsFront,e.roundRect(-3.5,0,7,15,2),e.fill(),e.fillStyle="#292524",e.fillRect(-3.5,12,9,4),e.restore(),e.save(),e.translate(2,-6),e.rotate(-c*.9),e.fillStyle=p.frontArm,e.roundRect(-2.5,0,5.5,13,2),e.fill(),e.restore(),e.fillStyle="#f3cbb0",e.beginPath(),e.arc(1,-15,6.8,0,Math.PI*2),e.fill(),d==="explorer"||d.startsWith("amasya")||d.startsWith("yozgat")||d.startsWith("erzurum")||d.startsWith("corum")||d.startsWith("samsun")?(e.fillStyle="#0f172a",e.fillRect(4,-17,2.3,2.6)):d==="akinci"?(e.fillStyle="#fb7185",e.fillRect(1.5,-17,6.5,2.6)):d==="sipahi"?(e.fillStyle="#38bdf8",e.fillRect(1.5,-17,6.5,2.8)):d==="hezarfen"?(e.fillStyle="#fde047",e.fillRect(2,-17.5,6,3.2)):(e.fillStyle="#2dd4bf",e.fillRect(2,-17,6,2.6)),d==="yeniceri"?(e.fillStyle="#f8fafc",e.beginPath(),e.roundRect(-8,-28,16,12,[4,4,1,1]),e.fill(),e.fillStyle="#fbbf24",e.fillRect(-8,-19,17,3),e.fillStyle="#2dd4bf",e.fillRect(-10,-29,5,14),e.fillRect(-2,-32,3,5)):d==="sipahi"?(e.fillStyle="#64748b",e.beginPath(),e.moveTo(-8,-17),e.lineTo(1,-30),e.lineTo(9,-17),e.closePath(),e.fill(),e.fillStyle="#fbbf24",e.fillRect(-8,-19,17,2.5)):d==="hezarfen"?(e.fillStyle="#78350f",e.beginPath(),e.arc(.5,-17.5,7.6,Math.PI,0),e.fill(),e.fillStyle="#fbbf24",e.fillRect(-8,-18,17,2.5)):d==="akinci"?(e.fillStyle="#18181b",e.beginPath(),e.arc(.5,-18,8.2,Math.PI*.92,Math.PI*.08),e.fill(),e.fillStyle="#f43f5e",e.fillRect(-8,-19.5,17,3)):d==="amasya-sehzade"?(e.fillStyle="#b91c1c",e.beginPath(),e.roundRect(-7,-27,15,10,[5,5,1,1]),e.fill(),e.fillStyle="#f8fafc",e.fillRect(-8,-19.5,17,2.8),e.fillStyle="#22c55e",e.beginPath(),e.arc(1,-28,3,0,Math.PI*2),e.fill()):d==="yozgat-yigit"?(e.fillStyle="#78350f",e.beginPath(),e.roundRect(-8,-26,17,9,3),e.fill(),e.fillStyle="#fbbf24",e.fillRect(-8,-19,17,2.5)):d==="erzurum-dadas"?(e.fillStyle="#334155",e.beginPath(),e.roundRect(-8,-27,17,10,3),e.fill(),e.fillStyle="#38bdf8",e.fillRect(-8,-19,17,2.5)):d==="corum-hitit"?(e.fillStyle="#a16207",e.fillRect(-7.5,-21,16,4),e.strokeStyle="#facc15",e.lineWidth=2,e.beginPath(),e.arc(1,-27,5,0,Math.PI*2),e.stroke()):d==="samsun-kaptan"?(e.fillStyle="#f8fafc",e.beginPath(),e.roundRect(-8,-25,17,7,3),e.fill(),e.fillStyle="#0f172a",e.fillRect(-7,-18.5,18,2.8),e.fillStyle="#fbbf24",e.fillRect(0,-23.5,3,3)):(e.fillStyle="#475569",e.beginPath(),e.arc(.5,-17.5,7.6,Math.PI,0),e.fill(),e.fillStyle="#334155",e.fillRect(-8,-18,18,3)),e.fillStyle=t.darkness?"#fef08a":"#facc15",e.fillRect(6,-20.5,3.5,3.5),e.restore(),t.mode==="2p"){e.save(),e.font="800 10px system-ui, -apple-system, Segoe UI, sans-serif",e.textAlign="center",e.fillStyle=i.id===2?"#38bdf8":"#fca5a5";let f=o>0?i.y-8:i.y+i.h+14;e.fillText(`O${i.id}`,s,f),e.restore()}}drawParticles(e){for(let t of this.particles){let i=Math.max(0,t.life/t.maxLife);e.save(),e.globalAlpha=i,e.fillStyle=t.color,e.beginPath(),e.arc(t.x,t.y,t.size,0,Math.PI*2),e.fill(),e.restore()}}drawDarknessPass(e,t){let i=this.lightCtx,r=this.background.lightningAlpha,s=Math.max(.18,.93-r*.78);i.clearRect(0,0,1280,720),i.fillStyle=`rgba(3, 6, 14, ${s})`,i.fillRect(0,0,1280,720),i.globalCompositeOperation="destination-out";for(let c of t.players){if(!c.alive)continue;let u=c.x+c.w/2,d=c.y+12,h=i.createRadialGradient(u,d,20,u,d,165);h.addColorStop(0,"rgba(0,0,0,1)"),h.addColorStop(.55,"rgba(0,0,0,0.65)"),h.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=h,i.beginPath(),i.arc(u,d,165,0,Math.PI*2),i.fill();let p=c.facing,f=i.createRadialGradient(u+p*20,d,8,u+p*200,d,270);f.addColorStop(0,"rgba(0,0,0,0.95)"),f.addColorStop(.55,"rgba(0,0,0,0.55)"),f.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=f,i.beginPath(),i.moveTo(u,d),i.lineTo(u+p*460,d-185),i.lineTo(u+p*460,d+195),i.closePath(),i.fill()}let a=t.door.x+t.door.w/2,o=t.door.y+t.door.h/2,l=i.createRadialGradient(a,o,16,a,o,175);l.addColorStop(0,"rgba(0,0,0,1)"),l.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=l,i.beginPath(),i.arc(a,o,175,0,Math.PI*2),i.fill();for(let c of t.hazards){if(!c.visible||!c.active)continue;let u=c.x+c.w/2,d=c.y+c.h/2,h=i.createRadialGradient(u,d,10,u,d,110);h.addColorStop(0,"rgba(0,0,0,0.85)"),h.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=h,i.beginPath(),i.arc(u,d,110,0,Math.PI*2),i.fill()}i.globalCompositeOperation="source-over",e.drawImage(this.lightCanvas,0,0)}drawStatusRim(e,t){!t.invertControls&&t.gravityScale>=0||(e.save(),e.lineWidth=6,t.invertControls&&(e.strokeStyle="rgba(168, 85, 247, 0.55)",e.strokeRect(3,3,1274,714)),t.gravityScale<0&&(e.strokeStyle="rgba(249, 115, 22, 0.5)",e.strokeRect(6,6,1268,708)),e.restore())}drawToast(e,t){if(!t.toast)return;let i=Math.min(1,t.toast.timer*2.5);e.save(),e.globalAlpha=i,e.font="600 17px system-ui, -apple-system, Segoe UI, sans-serif";let r=t.toast.text,a=e.measureText(r).width+36,o=38,l=(1280-a)/2,c=74;e.fillStyle="rgba(10, 15, 26, 0.86)",e.beginPath(),e.roundRect(l,c,a,o,10),e.fill(),e.strokeStyle="rgba(255, 255, 255, 0.22)",e.lineWidth=1.5,e.stroke(),e.fillStyle="#f8fafc",e.textAlign="center",e.textBaseline="middle",e.fillText(r,1280/2,c+o/2),e.restore()}};var qf={"1-1":[105,560],"1-2":[155,505],"1-3":[125,445],"1-4":[205,430],"1-5":[255,495],"1-6":[315,548],"1-7":[365,465],"2-1":[355,292],"2-2":[270,304],"2-3":[175,282],"2-4":[125,218],"2-5":[205,175],"2-6":[295,198],"2-7":[382,182],"3-1":[530,285],"3-2":[595,305],"3-3":[540,392],"3-4":[625,462],"3-5":[715,422],"3-6":[695,338],"3-7":[750,282],"4-1":[888,240],"4-2":[942,175],"4-3":[1025,168],"4-4":[990,244],"4-5":[1065,290],"4-6":[1135,222],"4-7":[1122,298],"5-1":[1102,435],"5-2":[1015,442],"5-3":[925,462],"5-4":[890,535],"5-5":[965,578],"5-6":[1060,548],"5-7":[1155,558]},Kf={"O1-1":[105,560],"O1-2":[155,505],"O1-3":[125,445],"O1-4":[205,430],"O1-5":[255,495],"O1-6":[315,548],"O1-7":[365,465],"O2-1":[355,292],"O2-2":[270,304],"O2-3":[175,282],"O2-4":[125,218],"O2-5":[205,175],"O2-6":[295,198],"O2-7":[382,182],"O3-1":[530,285],"O3-2":[595,305],"O3-3":[540,392],"O3-4":[625,462],"O3-5":[715,422],"O3-6":[695,338],"O3-7":[750,282],"O4-1":[888,240],"O4-2":[942,175],"O4-3":[1025,168],"O4-4":[990,244],"O4-5":[1065,290],"O4-6":[1135,222],"O4-7":[1122,298],"O5-1":[1102,435],"O5-2":[1015,442],"O5-3":[925,462],"O5-4":[890,535],"O5-5":[965,578],"O5-6":[1060,548],"O5-7":[1155,558]},Zf=[{chapter:1,name:"YA\u011EMUR ORMANI",cx:235,cy:508,rx:185,ry:108,topColor:"#1f5b3a",edgeColor:"#113422",labelPos:[235,622]},{chapter:2,name:"KUMUL TAPINA\u011EI",cx:255,cy:238,rx:188,ry:104,topColor:"#b97732",edgeColor:"#693c14",labelPos:[255,364]},{chapter:3,name:"BUZUL GE\xC7\u0130D\u0130",cx:640,cy:368,rx:175,ry:138,topColor:"#266894",edgeColor:"#123854",labelPos:[640,524]},{chapter:4,name:"VOLKAN\u0130K KALDERA",cx:1015,cy:238,rx:178,ry:104,topColor:"#5c261d",edgeColor:"#2a0f0b",labelPos:[1015,364]},{chapter:5,name:"FIRTINALI D\xD6K\xDCMHANE",cx:1025,cy:508,rx:190,ry:108,topColor:"#374151",edgeColor:"#1a202c",labelPos:[1025,622]}],$f=[{chapter:1,name:"NEO-TOPKAPI SARAYI",cx:235,cy:508,rx:185,ry:108,topColor:"#134e4a",edgeColor:"#082c2a",labelPos:[235,622]},{chapter:2,name:"S\u0130BER BO\u011EAZ KULES\u0130",cx:255,cy:238,rx:188,ry:104,topColor:"#0c4a6e",edgeColor:"#06263a",labelPos:[255,364]},{chapter:3,name:"GALATA G\xD6K-K\xD6PR\xDCS\xDC",cx:640,cy:368,rx:175,ry:138,topColor:"#854d0e",edgeColor:"#422006",labelPos:[640,524]},{chapter:4,name:"YILDIZ G\xD6ZLEMEV\u0130",cx:1015,cy:238,rx:178,ry:104,topColor:"#4c1d95",edgeColor:"#250b4d",labelPos:[1015,364]},{chapter:5,name:"ZIRHLI TERSANE-\u0130 \xC2M\u0130RE",cx:1025,cy:508,rx:190,ry:108,topColor:"#7f1d1d",edgeColor:"#3f0b0b",labelPos:[1025,622]}],Jf={"T1-1":[105,560],"T1-2":[155,505],"T1-3":[125,445],"T1-4":[205,430],"T1-5":[255,495],"T1-6":[315,548],"T1-7":[365,465],"T2-1":[355,292],"T2-2":[270,304],"T2-3":[175,282],"T2-4":[125,218],"T2-5":[205,175],"T2-6":[295,198],"T2-7":[382,182],"T3-1":[530,285],"T3-2":[595,305],"T3-3":[540,392],"T3-4":[625,462],"T3-5":[715,422],"T3-6":[695,338],"T3-7":[750,282],"T4-1":[888,240],"T4-2":[942,175],"T4-3":[1025,168],"T4-4":[990,244],"T4-5":[1065,290],"T4-6":[1135,222],"T4-7":[1122,298],"T5-1":[1102,435],"T5-2":[1015,442],"T5-3":[925,462],"T5-4":[890,535],"T5-5":[965,578],"T5-6":[1060,548],"T5-7":[1155,558]},jf=[{chapter:1,name:"1 \xB7 AMASYA (\u015EEHZADELER)",cx:235,cy:508,rx:185,ry:108,topColor:"#1f4e3d",edgeColor:"#102b22",labelPos:[235,622]},{chapter:2,name:"2 \xB7 YOZGAT (SAAT KULES\u0130)",cx:255,cy:238,rx:188,ry:104,topColor:"#8c5a1f",edgeColor:"#4a2c0c",labelPos:[255,364]},{chapter:3,name:"3 \xB7 ERZURUM (PALAND\xD6KEN)",cx:640,cy:368,rx:175,ry:138,topColor:"#1d4d7c",edgeColor:"#0e2844",labelPos:[640,524]},{chapter:4,name:"4 \xB7 \xC7ORUM (HATTU\u015EA)",cx:1015,cy:238,rx:178,ry:104,topColor:"#7c4d19",edgeColor:"#3f2409",labelPos:[1015,364]},{chapter:5,name:"5 \xB7 SAMSUN (19 MAYIS)",cx:1025,cy:508,rx:190,ry:108,topColor:"#125e4b",edgeColor:"#083228",labelPos:[1025,622]}],Hs=class{constructor(){this.time=0,this.hoveredId=null}getMapContext(e="classic"){let t=e==="ottoman",i=e==="turkey";return{isOttoman:t,isTurkey:i,levels:yn(e),chapterById:t?Fr:i?Br:er,islands:t?$f:i?jf:Zf,coords:t?Kf:i?Jf:qf}}update(e){this.time+=e}getNodeAt(e,t,i="classic"){let{levels:r,coords:s}=this.getMapContext(i),a=null,o=34;for(let l of r){let[c,u]=s[l.id],d=Math.hypot(e-c,t-u);d<=o&&(o=d,a=l.id)}return a}draw(e,t,i,r,s="classic"){let a=this.getMapContext(s),{isOttoman:o,isTurkey:l,levels:c,chapterById:u,islands:d,coords:h}=a,p=e.createRadialGradient(1280/2,720/2,120,1280/2,720/2,820);o?(p.addColorStop(0,"#191336"),p.addColorStop(.6,"#0b0c1f"),p.addColorStop(1,"#040510")):l?(p.addColorStop(0,"#291615"),p.addColorStop(.6,"#150d10"),p.addColorStop(1,"#090608")):(p.addColorStop(0,"#121d33"),p.addColorStop(.6,"#0a101d"),p.addColorStop(1,"#05080f")),e.fillStyle=p,e.fillRect(0,0,1280,720),e.save(),e.strokeStyle=o?"rgba(251, 191, 36, 0.06)":l?"rgba(248, 113, 113, 0.06)":"rgba(148, 163, 184, 0.05)",e.lineWidth=1;for(let f=0;f<=1280;f+=80)e.beginPath(),e.moveTo(f,0),e.lineTo(f,720),e.stroke();for(let f=0;f<=720;f+=80)e.beginPath(),e.moveTo(0,f),e.lineTo(1280,f),e.stroke();(o||l)&&(e.translate(1280/2,720/2),e.rotate(this.time*.04),e.strokeStyle=l?"rgba(248, 113, 113, 0.12)":"rgba(251, 191, 36, 0.1)",e.lineWidth=2,e.beginPath(),e.arc(0,0,290,0,Math.PI*2),e.arc(0,0,245,0,Math.PI*2),e.stroke()),e.restore();for(let f of d)this.drawIsland(e,f,u,o);this.drawTombstoneIsland(e,t.totalDeaths||0,o),this.drawTrails(e,c,h,u,t,r);for(let f of c)this.drawNode(e,f,h,u,t,i,r(f.id),o)}drawIsland(e,t,i,r){let{cx:s,cy:a,rx:o,ry:l,topColor:c,edgeColor:u,chapter:d,name:h,labelPos:p}=t,f=i[d];e.save();let y=e.createRadialGradient(s,a,o*.35,s,a,o*1.25);y.addColorStop(0,`${f.accent}22`),y.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=y,e.beginPath(),e.ellipse(s,a,o*1.25,l*1.25,0,0,Math.PI*2),e.fill(),e.fillStyle=u,e.beginPath(),this.traceOrganicIsland(e,s,a+16,o,l,d),e.fill(),e.fillStyle=c,e.beginPath(),this.traceOrganicIsland(e,s,a,o,l,d),e.fill(),e.strokeStyle=r?"#fbbf2466":`${f.accent}66`,e.lineWidth=2,e.stroke(),r?d===1?(e.fillStyle="rgba(251, 191, 36, 0.25)",e.beginPath(),e.arc(s-10,a-10,26,Math.PI,0),e.fill()):d===2?(e.fillStyle="rgba(56, 189, 248, 0.28)",e.fillRect(s-8,a-30,16,34),e.beginPath(),e.moveTo(s-14,a-30),e.lineTo(s,a-48),e.lineTo(s+14,a-30),e.closePath(),e.fill()):d===3?(e.save(),e.translate(s,a-12),e.rotate(this.time*.7),e.strokeStyle="rgba(251, 191, 36, 0.34)",e.lineWidth=3,e.beginPath(),e.moveTo(-24,0),e.lineTo(24,0),e.moveTo(0,-24),e.lineTo(0,24),e.stroke(),e.restore()):d===4?(e.fillStyle="rgba(250, 204, 21, 0.32)",e.beginPath(),e.arc(s,a-16,18,0,Math.PI*2),e.fill(),e.fillStyle=c,e.beginPath(),e.arc(s+7,a-19,14,0,Math.PI*2),e.fill()):d===5&&(e.save(),e.translate(s-12,a-8),e.rotate(-this.time*.45),e.strokeStyle="rgba(251, 113, 133, 0.35)",e.lineWidth=4,e.beginPath(),e.arc(0,0,20,0,Math.PI*2),e.stroke(),e.restore()):d===1?(e.fillStyle="rgba(74, 222, 128, 0.25)",e.beginPath(),e.arc(s-115,a-25,22,0,Math.PI*2),e.arc(s+95,a+35,18,0,Math.PI*2),e.fill()):d===2?(e.fillStyle="rgba(245, 158, 11, 0.35)",e.beginPath(),e.moveTo(s-28,a+5),e.lineTo(s,a-35),e.lineTo(s+28,a+5),e.closePath(),e.fill()):d===3?(e.fillStyle="rgba(186, 230, 253, 0.26)",e.beginPath(),e.moveTo(s-12,a-22),e.lineTo(s,a-58),e.lineTo(s+12,a-22),e.closePath(),e.fill()):d===4?(e.fillStyle="rgba(249, 115, 22, 0.45)",e.beginPath(),e.arc(s+10,a-25,14,0,Math.PI*2),e.fill()):d===5&&(e.save(),e.translate(s-15,a-8),e.rotate(this.time*.4),e.strokeStyle="rgba(167, 139, 250, 0.32)",e.lineWidth=4,e.beginPath(),e.arc(0,0,20,0,Math.PI*2),e.stroke(),e.restore()),e.font="800 12px system-ui, -apple-system, Segoe UI, sans-serif",e.textAlign="center",e.textBaseline="middle";let m=`B\xD6L\xDCM ${d} \xB7 ${h}`,g=e.measureText(m).width+20;e.fillStyle="rgba(7, 11, 20, 0.85)",e.beginPath(),e.roundRect(p[0]-g/2,p[1]-12,g,24,999),e.fill(),e.strokeStyle=`${f.accent}88`,e.lineWidth=1.2,e.stroke(),e.fillStyle=f.accent,e.fillText(m,p[0],p[1]),e.restore()}traceOrganicIsland(e,t,i,r,s,a){for(let l=0;l<=28;l+=1){let c=l/28*Math.PI*2,u=1+Math.sin(c*4+a*1.7)*.06+Math.cos(c*7+a)*.04,d=t+Math.cos(c)*r*u,h=i+Math.sin(c)*s*u;l===0?e.moveTo(d,h):e.lineTo(d,h)}e.closePath()}drawTombstoneIsland(e,t,i){e.save(),e.fillStyle=i?"#2b193d":"#1f2937",e.beginPath(),e.ellipse(640,168,56,26,0,0,Math.PI*2),e.fill(),e.fillStyle=i?"#3b2454":"#334155",e.beginPath(),e.ellipse(640,162,56,22,0,0,Math.PI*2),e.fill(),e.fillStyle=i?"#78716c":"#64748b",e.beginPath(),e.roundRect(622,124,36,36,[16,16,2,2]),e.fill(),e.strokeStyle=i?"#fbbf24":"#0f172a",e.lineWidth=2,e.stroke(),e.fillStyle="#cbd5e1",e.beginPath(),e.arc(640,138,7,0,Math.PI*2),e.fill(),e.fillStyle="#0f172a",e.fillRect(640-3.5,136,2,2.5),e.fillRect(640+1.5,136,2,2.5),e.fillStyle="#f8fafc",e.font="800 13px system-ui, -apple-system, Segoe UI, sans-serif",e.textAlign="center",e.fillText(`\u{1F480} ${t}`,640,175),e.restore()}drawTrails(e,t,i,r,s,a){e.save(),e.lineCap="round";for(let o=0;o<t.length-1;o+=1){let l=t[o],c=t[o+1],[u,d]=i[l.id],[h,p]=i[c.id],f=a(c.id),y=!!s.cleared[l.id],m=r[l.chapter],g=(u+h)/2+Math.sin(o*1.9)*14,_=(d+p)/2+Math.cos(o*1.3)*12;e.beginPath(),e.moveTo(u,d),e.quadraticCurveTo(g,_,h,p),y&&f?(e.setLineDash([]),e.strokeStyle=m.accent,e.lineWidth=4):f?(e.setLineDash([7,6]),e.strokeStyle=`${m.accent}aa`,e.lineWidth=3):(e.setLineDash([5,6]),e.strokeStyle="rgba(148, 163, 184, 0.22)",e.lineWidth=2.2),e.stroke()}e.restore()}drawNode(e,t,i,r,s,a,o,l){let[c,u]=i[t.id],d=!!s.cleared[t.id],h=t.id===a,p=t.id===this.hoveredId,f=t.stage===7,y=r[t.chapter],m=pn[t.difficulty]||pn.orta,g=f?30:24,_=f?36:30,w=c-g/2,S=u-_/2;if(e.save(),h||p&&o){let A=.75+Math.sin(this.time*5)*.25,E=e.createRadialGradient(c,u,4,c,u,34);E.addColorStop(0,`${y.accent}99`),E.addColorStop(1,"rgba(0,0,0,0)"),e.globalAlpha=A,e.fillStyle=E,e.beginPath(),e.arc(c,u,34,0,Math.PI*2),e.fill(),e.globalAlpha=1}if(t.id==="5-7"?(e.fillStyle=o?"#f43f5e":"#334155",e.beginPath(),e.moveTo(w+2,S+6),e.lineTo(w-6,S-10),e.lineTo(w+9,S+1),e.moveTo(w+g-2,S+6),e.lineTo(w+g+6,S-10),e.lineTo(w+g-9,S+1),e.fill()):t.id==="O5-7"&&(e.fillStyle=o?"#fbbf24":"#475569",e.beginPath(),e.arc(c,S-8,7,0,Math.PI*2),e.fill(),e.fillStyle="#090d16",e.beginPath(),e.arc(c+2.5,S-9.5,5.2,0,Math.PI*2),e.fill()),e.fillStyle=o?"#1e293b":"#0f172a",e.beginPath(),e.roundRect(w-3,S-3,g+6,_+6,l?[16,16,4,4]:[14,14,4,4]),e.fill(),e.strokeStyle=h?"#fde047":o?l?"#fbbf24":y.accent:"#334155",e.lineWidth=h?2.5:1.6,e.stroke(),o?d?e.fillStyle=y.accent:e.fillStyle="#fef08a":e.fillStyle="#090d16",e.beginPath(),e.roundRect(w,S,g,_,[11,11,2,2]),e.fill(),e.font="800 11px system-ui, -apple-system, Segoe UI, sans-serif",e.textAlign="center",e.textBaseline="top",e.fillStyle=o?"#f8fafc":"#64748b",e.fillText(t.id,c,u+_/2+5),o&&(e.fillStyle=m.color,e.beginPath(),e.arc(w+g+1,S+_,3.6,0,Math.PI*2),e.fill()),h){let A=Math.sin(this.time*6)*4,E=S-10+A;e.fillStyle="#fde047",e.beginPath(),e.moveTo(c-7,E-10),e.lineTo(c+7,E-10),e.lineTo(c,E-1),e.closePath(),e.fill()}e.restore()}};var Vs=class{constructor(){this.ctx=null,this.muted=!1,this.noiseBuffer=null,this.ambientGain=null,this.ambientSource=null,this.humOsc=null,this.humGain=null,this.currentBiome=null}unlock(){if(typeof window>"u")return;let e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx||(this.ctx=new e,this.createNoiseBuffer()),this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}))}setMuted(e){this.muted=!!e,this.ambientGain&&this.ctx&&this.ambientGain.gain.setTargetAtTime(this.muted?0:.04,this.ctx.currentTime,.08),this.humGain&&this.ctx&&this.humGain.gain.setTargetAtTime(this.muted?0:.015,this.ctx.currentTime,.08)}createNoiseBuffer(){if(!this.ctx)return;let e=this.ctx.sampleRate*2,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=t.getChannelData(0),r=0;for(let s=0;s<e;s+=1){let a=Math.random()*2-1;i[s]=(r+.04*a)/1.04,r=i[s]}this.noiseBuffer=t}startBiomeAmbience(e){if(this.currentBiome===e||(this.currentBiome=e,!this.ctx||!this.noiseBuffer))return;if(this.ambientSource){try{this.ambientSource.stop()}catch{}this.ambientSource=null}if(this.humOsc){try{this.humOsc.stop()}catch{}this.humOsc=null,this.humGain=null}let t=this.ctx.createBufferSource();t.buffer=this.noiseBuffer,t.loop=!0;let i=this.ctx.createBiquadFilter();i.type=e==="volcano"||e==="foundry"||e==="ottoman-shipyard"?"lowpass":"bandpass",i.frequency.value=e==="rainforest"?1280:e==="desert"||e==="ottoman-galata"?640:e==="glacier"||e==="ottoman-bosphorus"||e==="turkey-erzurum"?920:e==="volcano"?155:e==="ottoman-palace"||e==="ottoman-observatory"||e==="turkey-amasya"||e==="turkey-samsun"?780:e==="turkey-yozgat"||e==="turkey-corum"?620:360,i.Q.value=e==="volcano"?1.4:e==="desert"?1.8:.75;let r=this.ctx.createGain();if(r.gain.value=this.muted?0:.04,t.connect(i),i.connect(r),r.connect(this.ctx.destination),t.start(),this.ambientSource=t,this.ambientGain=r,e==="foundry"||e==="volcano"||e==="ottoman-shipyard"||e==="ottoman-observatory"){let s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type=e==="foundry"||e==="ottoman-shipyard"?"sawtooth":"sine",s.frequency.value=e==="foundry"?58:e==="ottoman-shipyard"?66:e==="ottoman-observatory"?88:44,a.gain.value=this.muted?0:.015,s.connect(a),a.connect(this.ctx.destination),s.start(),this.humOsc=s,this.humGain=a}}tone(e,t,i,r="sine",s=.14){if(this.muted||!this.ctx)return;let a=this.ctx.currentTime,o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type=r,o.frequency.setValueAtTime(e,a),o.frequency.exponentialRampToValueAtTime(Math.max(20,t),a+i),l.gain.setValueAtTime(s,a),l.gain.exponentialRampToValueAtTime(.001,a+i),o.connect(l),l.connect(this.ctx.destination),o.start(a),o.stop(a+i)}noiseBurst(e,t=800,i=.12){if(this.muted||!this.ctx||!this.noiseBuffer)return;let r=this.ctx.currentTime,s=this.ctx.createBufferSource();s.buffer=this.noiseBuffer;let a=this.ctx.createBiquadFilter();a.type="bandpass",a.frequency.value=t;let o=this.ctx.createGain();o.gain.setValueAtTime(i,r),o.gain.exponentialRampToValueAtTime(.001,r+e),s.connect(a),a.connect(o),o.connect(this.ctx.destination),s.start(r),s.stop(r+e)}playFootstep(e){e==="rainforest"||e==="turkey-amasya"?this.noiseBurst(.04,680,.045):e==="desert"||e==="ottoman-galata"||e==="turkey-yozgat"||e==="turkey-corum"?this.noiseBurst(.045,1150,.04):e==="glacier"||e==="turkey-erzurum"?(this.noiseBurst(.038,1950,.048),this.tone(1120,920,.03,"triangle",.02)):e==="volcano"?this.noiseBurst(.04,240,.055):e&&(e.startsWith("ottoman-")||e==="turkey-samsun")?(this.tone(620,410,.03,"sine",.03),this.noiseBurst(.03,1300,.035)):(this.tone(420,260,.035,"square",.03),this.noiseBurst(.028,1500,.035))}playLand(e){e==="rainforest"||e==="turkey-amasya"?this.noiseBurst(.08,360,.12):e==="desert"||e==="ottoman-galata"||e==="turkey-yozgat"||e==="turkey-corum"?this.noiseBurst(.09,760,.11):e==="glacier"||e==="turkey-erzurum"?(this.noiseBurst(.08,1600,.12),this.tone(760,480,.06,"sine",.05)):e==="volcano"?(this.tone(110,58,.09,"sine",.11),this.noiseBurst(.07,210,.1)):e&&(e.startsWith("ottoman-")||e==="turkey-samsun")?(this.tone(440,210,.065,"triangle",.085),this.noiseBurst(.055,980,.085)):(this.tone(310,140,.07,"triangle",.09),this.noiseBurst(.06,1100,.09))}processEvents(e,t="rainforest"){if(!(this.muted||!this.ctx))for(let i of e)switch(i.type){case"jump":this.tone(240,490,.11,"triangle",.1);break;case"bounce":this.tone(190,740,.19,"sine",.16);break;case"land":this.playLand(t);break;case"footstep":this.playFootstep(t);break;case"crumble":this.noiseBurst(.22,340,.16);break;case"mirage":this.noiseBurst(.25,1600,.13);break;case"trap":this.tone(520,290,.09,"sawtooth",.08);break;case"slam":this.tone(110,42,.18,"square",.16),this.noiseBurst(.16,220,.15);break;case"shatter":this.noiseBurst(.18,2200,.14);break;case"polarity":this.tone(720,310,.18,"sawtooth",.12);break;case"gravityFlip":this.tone(220,620,.2,"sine",.12);break;case"death":this.tone(260,58,.26,"sawtooth",.18),this.noiseBurst(.22,300,.18);break;case"clear":this.tone(523,523,.11,"triangle",.14),setTimeout(()=>this.tone(659,659,.12,"triangle",.14),85),setTimeout(()=>this.tone(784,1046,.24,"triangle",.16),170);break;default:break}}};var yd=0,kl=1,gd=2;var vs=1,vd=2,Tr=3,Cn=0,Jt=1,Fi=2,Xn=0,Er=1,Nl=2,Ol=3,Ul=4,_d=5;var Yn=100,xd=101,bd=102,Sd=103,Md=104,wd=200,Td=201,Ed=202,Ad=203,Fl=204,Bl=205,Rd=206,Cd=207,Pd=208,Id=209,Ld=210,Dd=211,kd=212,Nd=213,Od=214,pa=0,ma=1,ya=2,gr=3,ga=4,va=5,_a=6,xa=7,zl=0,Ud=1,Fd=2,Bi=0,Gl=1,Hl=2,Vl=3,Wl=4,Xl=5,Yl=6,ql=7;var Kl=300,qn=301,Ar=302,Wa=303,Xa=304,ba=1e3,Di=1001,Sa=1002,Pt=1003,Bd=1004;var _s=1005;var $t=1006,Ya=1007;var ln=1008;var ii=1009,Zl=1010,$l=1011,Rr=1012,qa=1013,Ai=1014,Ri=1015,Ci=1016,Ka=1017,Za=1018,Kn=1020,Jl=35902,jl=35899,Ql=1021,ec=1022,Pi=1023,rn=1026,cn=1027,tc=1028,$a=1029,Pn=1030,Ja=1031;var ja=1033,xs=33776,bs=33777,Ss=33778,Ms=33779,Qa=35840,eo=35841,to=35842,io=35843,no=36196,ro=37492,so=37496,ao=37488,oo=37489,ws=37490,lo=37491,co=37808,ho=37809,uo=37810,fo=37811,po=37812,mo=37813,yo=37814,go=37815,vo=37816,_o=37817,xo=37818,bo=37819,So=37820,Mo=37821,wo=36492,To=36494,Eo=36495,Ao=36283,Ro=36284,Ts=36285,Co=36286;var Yr=2300,Ma=2301,ua=2302,Tl=2303,El=2400,Al=2401,Rl=2402;var zd=3200;var Po=0,Gd=1,hn="",ai="srgb",qr="srgb-linear",Kr="linear",et="srgb";var fa=7680;var Hd=519,Vd=512,Wd=513,Xd=514,ic=515,Yd=516,qd=517,nc=518,rc=519,Kd=35044;var sc="300 es",pi=2e3,vr=2001;function Qf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ep(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Zr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Zd(){let n=Zr("canvas");return n.style.display="block",n}var Xh={},_r=null;function ac(...n){let e="THREE."+n.shift();_r?_r("log",e,...n):console.log(e,...n)}function $d(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Le(...n){n=$d(n);let e="THREE."+n.shift();if(_r)_r("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function De(...n){n=$d(n);let e="THREE."+n.shift();if(_r)_r("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Xr(...n){let e=n.join(" ");e in Xh||(Xh[e]=!0,Le(...n))}function Jd(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var jd={[pa]:pa,[ya]:_a,[ga]:ga,[gr]:va,[ma]:ma,[_a]:ya,[xa]:xa,[va]:gr},ki=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var nl=Math.PI/180,wa=180/Math.PI;function Es(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function $e(n,e,t){return Math.max(e,Math.min(t,n))}function tp(n,e){return(n%e+e)%e}function rl(n,e,t){return(1-t)*n+t*e}function Qd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function oc(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ip(n,e){if(e.constructor===Float32Array)return n;let t=oc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function np(n,e){if(e.constructor===Float32Array)return n;let t=oc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var He=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ni=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],h=s[a+0],p=s[a+1],f=s[a+2],y=s[a+3];if(d!==y||l!==h||c!==p||u!==f){let m=l*h+c*p+u*f+d*y;m<0&&(h=-h,p=-p,f=-f,y=-y,m=-m);let g=1-o;if(m<.9995){let _=Math.acos(m),w=Math.sin(_);g=Math.sin(g*_)/w,o=Math.sin(o*_)/w,l=l*g+h*o,c=c*g+p*o,u=u*g+f*o,d=d*g+y*o}else{l=l*g+h*o,c=c*g+p*o,u=u*g+f*o,d=d*g+y*o;let _=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=_,c*=_,u*=_,d*=_}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){let o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],h=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+u*d+l*p-c*h,e[t+1]=l*f+u*h+c*d-o*p,e[t+2]=c*f+u*p+o*h-l*d,e[t+3]=u*f-o*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),h=l(i/2),p=l(r/2),f=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*p*f,this._y=c*p*d-h*u*f,this._z=c*u*f+h*p*d,this._w=c*u*d-h*p*f;break;case"YXZ":this._x=h*u*d+c*p*f,this._y=c*p*d-h*u*f,this._z=c*u*f-h*p*d,this._w=c*u*d+h*p*f;break;case"ZXY":this._x=h*u*d-c*p*f,this._y=c*p*d+h*u*f,this._z=c*u*f+h*p*d,this._w=c*u*d-h*p*f;break;case"ZYX":this._x=h*u*d-c*p*f,this._y=c*p*d+h*u*f,this._z=c*u*f-h*p*d,this._w=c*u*d+h*p*f;break;case"YZX":this._x=h*u*d+c*p*f,this._y=c*p*d+h*u*f,this._z=c*u*f-h*p*d,this._w=c*u*d-h*p*f;break;case"XZY":this._x=h*u*d-c*p*f,this._y=c*p*d-h*u*f,this._z=c*u*f+h*p*d,this._w=c*u*d+h*p*f;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+o+d;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+l*c+a*d-o*u,this.y=i+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return sl.copy(this).projectOnVector(e),this.sub(sl)}reflect(e){return this.sub(sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},sl=new U,Yh=new Ni,ke=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],f=i[8],y=r[0],m=r[3],g=r[6],_=r[1],w=r[4],S=r[7],A=r[2],E=r[5],v=r[8];return s[0]=a*y+o*_+l*A,s[3]=a*m+o*w+l*E,s[6]=a*g+o*S+l*v,s[1]=c*y+u*_+d*A,s[4]=c*m+u*w+d*E,s[7]=c*g+u*S+d*v,s[2]=h*y+p*_+f*A,s[5]=h*m+p*w+f*E,s[8]=h*g+p*S+f*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,p=c*s-a*l,f=t*d+i*h+r*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/f;return e[0]=d*y,e[1]=(r*c-u*i)*y,e[2]=(o*i-r*a)*y,e[3]=h*y,e[4]=(u*t-r*l)*y,e[5]=(r*s-o*t)*y,e[6]=p*y,e[7]=(i*l-c*t)*y,e[8]=(a*t-i*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Xr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(al.makeScale(e,t)),this}rotate(e){return Xr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(al.makeRotation(-e)),this}translate(e,t){return Xr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(al.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},al=new ke,qh=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kh=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rp(){let n={enabled:!0,workingColorSpace:qr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===et&&(r.r=nn(r.r),r.g=nn(r.g),r.b=nn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(r.r=yr(r.r),r.g=yr(r.g),r.b=yr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===hn?Kr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[qr]:{primaries:e,whitePoint:i,transfer:Kr,toXYZ:qh,fromXYZ:Kh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:e,whitePoint:i,transfer:et,toXYZ:qh,fromXYZ:Kh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),n}var Ze=rp();function nn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function yr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var nr,Ta=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{nr===void 0&&(nr=Zr("canvas")),nr.width=e.width,nr.height=e.height;let r=nr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=nr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Zr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=nn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(nn(t[i]/255)*255):t[i]=nn(t[i]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},sp=0,xr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=Es(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ol(r[a].image)):s.push(ol(r[a]))}else s=ol(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function ol(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ta.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}var ap=0,ll=new U,ei=class n extends ki{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Di,r=Di,s=$t,a=ln,o=Pi,l=ii,c=n.DEFAULT_ANISOTROPY,u=hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=Es(),this.name="",this.source=new xr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ll).x}get height(){return this.source.getSize(ll).y}get depth(){return this.source.getSize(ll).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ba:e.x=e.x-Math.floor(e.x);break;case Di:e.x=e.x<0?0:1;break;case Sa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ba:e.y=e.y-Math.floor(e.y);break;case Di:e.y=e.y<0?0:1;break;case Sa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=Kl;ei.DEFAULT_ANISOTROPY=1;var dt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],f=l[9],y=l[2],m=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(f-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(f+m)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,S=(p+1)/2,A=(g+1)/2,E=(u+h)/4,v=(d+y)/4,M=(f+m)/4;return w>S&&w>A?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=E/i,s=v/i):S>A?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=E/r,s=M/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=v/s,r=M/s),this.set(i,r,s,t),this}let _=Math.sqrt((m-f)*(m-f)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(m-f)/_,this.y=(d-y)/_,this.z=(h-u)/_,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ea=class extends ki{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t),this.textures=[];let r=i.count;for(let s=0;s<r;s++)this.textures[s]=new ei({width:e,height:t,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:$t,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new xr(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},oi=class extends Ea{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},$r=class extends ei{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Aa=class extends ei{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var lt=class n{static{this.prototype.isMatrix4=!0}constructor(e,t,i,r,s,a,o,l,c,u,d,h,p,f,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,d,h,p,f,y,m)}set(e,t,i,r,s,a,o,l,c,u,d,h,p,f,y,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=h,g[3]=p,g[7]=f,g[11]=y,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,r=1/rr.setFromMatrixColumn(e,0).length(),s=1/rr.setFromMatrixColumn(e,1).length(),a=1/rr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let h=a*u,p=a*d,f=o*u,y=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+f*c,t[5]=h-y*c,t[9]=-o*l,t[2]=y-h*c,t[6]=f+p*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*u,p=l*d,f=c*u,y=c*d;t[0]=h+y*o,t[4]=f*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=p*o-f,t[6]=y+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*u,p=l*d,f=c*u,y=c*d;t[0]=h-y*o,t[4]=-a*d,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*u,t[9]=y-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*u,p=a*d,f=o*u,y=o*d;t[0]=l*u,t[4]=f*c-p,t[8]=h*c+y,t[1]=l*d,t[5]=y*c+h,t[9]=p*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,p=a*c,f=o*l,y=o*c;t[0]=l*u,t[4]=y-h*d,t[8]=f*d+p,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*d+f,t[10]=h-y*d}else if(e.order==="XZY"){let h=a*l,p=a*c,f=o*l,y=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+y,t[5]=a*u,t[9]=p*d-f,t[2]=f*d-p,t[6]=o*u,t[10]=y*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(op,e,lp)}lookAt(e,t,i){let r=this.elements;return ri.subVectors(e,t),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),gn.crossVectors(i,ri),gn.lengthSq()===0&&(Math.abs(i.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),gn.crossVectors(i,ri)),gn.normalize(),Ws.crossVectors(ri,gn),r[0]=gn.x,r[4]=Ws.x,r[8]=ri.x,r[1]=gn.y,r[5]=Ws.y,r[9]=ri.y,r[2]=gn.z,r[6]=Ws.z,r[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],f=i[2],y=i[6],m=i[10],g=i[14],_=i[3],w=i[7],S=i[11],A=i[15],E=r[0],v=r[4],M=r[8],L=r[12],C=r[1],k=r[5],N=r[9],V=r[13],P=r[2],H=r[6],q=r[10],G=r[14],ne=r[3],Y=r[7],ee=r[11],te=r[15];return s[0]=a*E+o*C+l*P+c*ne,s[4]=a*v+o*k+l*H+c*Y,s[8]=a*M+o*N+l*q+c*ee,s[12]=a*L+o*V+l*G+c*te,s[1]=u*E+d*C+h*P+p*ne,s[5]=u*v+d*k+h*H+p*Y,s[9]=u*M+d*N+h*q+p*ee,s[13]=u*L+d*V+h*G+p*te,s[2]=f*E+y*C+m*P+g*ne,s[6]=f*v+y*k+m*H+g*Y,s[10]=f*M+y*N+m*q+g*ee,s[14]=f*L+y*V+m*G+g*te,s[3]=_*E+w*C+S*P+A*ne,s[7]=_*v+w*k+S*H+A*Y,s[11]=_*M+w*N+S*q+A*ee,s[15]=_*L+w*V+S*G+A*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],f=e[3],y=e[7],m=e[11],g=e[15],_=l*p-c*h,w=o*p-c*d,S=o*h-l*d,A=a*p-c*u,E=a*h-l*u,v=a*d-o*u;return t*(y*_-m*w+g*S)-i*(f*_-m*A+g*E)+r*(f*w-y*A+g*v)-s*(f*S-y*E+m*v)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(s*u-o*l)+r*(s*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],f=e[12],y=e[13],m=e[14],g=e[15],_=t*o-i*a,w=t*l-r*a,S=t*c-s*a,A=i*l-r*o,E=i*c-s*o,v=r*c-s*l,M=u*y-d*f,L=u*m-h*f,C=u*g-p*f,k=d*m-h*y,N=d*g-p*y,V=h*g-p*m,P=_*V-w*N+S*k+A*C-E*L+v*M;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/P;return e[0]=(o*V-l*N+c*k)*H,e[1]=(r*N-i*V-s*k)*H,e[2]=(y*v-m*E+g*A)*H,e[3]=(h*E-d*v-p*A)*H,e[4]=(l*C-a*V-c*L)*H,e[5]=(t*V-r*C+s*L)*H,e[6]=(m*S-f*v-g*w)*H,e[7]=(u*v-h*S+p*w)*H,e[8]=(a*N-o*C+c*M)*H,e[9]=(i*C-t*N-s*M)*H,e[10]=(f*E-y*S+g*_)*H,e[11]=(d*S-u*E-p*_)*H,e[12]=(o*L-a*k-l*M)*H,e[13]=(t*k-i*L+r*M)*H,e[14]=(y*w-f*A-m*_)*H,e[15]=(u*A-d*w+h*_)*H,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,h=s*c,p=s*u,f=s*d,y=a*u,m=a*d,g=o*d,_=l*c,w=l*u,S=l*d,A=i.x,E=i.y,v=i.z;return r[0]=(1-(y+g))*A,r[1]=(p+S)*A,r[2]=(f-w)*A,r[3]=0,r[4]=(p-S)*E,r[5]=(1-(h+g))*E,r[6]=(m+_)*E,r[7]=0,r[8]=(f+w)*v,r[9]=(m-_)*v,r[10]=(1-(h+y))*v,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=rr.set(r[0],r[1],r[2]).length(),o=rr.set(r[4],r[5],r[6]).length(),l=rr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Si.copy(this);let c=1/a,u=1/o,d=1/l;return Si.elements[0]*=c,Si.elements[1]*=c,Si.elements[2]*=c,Si.elements[4]*=u,Si.elements[5]*=u,Si.elements[6]*=u,Si.elements[8]*=d,Si.elements[9]*=d,Si.elements[10]*=d,t.setFromRotationMatrix(Si),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=pi,l=!1){let c=this.elements,u=2*s/(t-e),d=2*s/(i-r),h=(t+e)/(t-e),p=(i+r)/(i-r),f,y;if(l)f=s/(a-s),y=a*s/(a-s);else if(o===pi)f=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===vr)f=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=pi,l=!1){let c=this.elements,u=2/(t-e),d=2/(i-r),h=-(t+e)/(t-e),p=-(i+r)/(i-r),f,y;if(l)f=1/(a-s),y=a/(a-s);else if(o===pi)f=-2/(a-s),y=-(a+s)/(a-s);else if(o===vr)f=-1/(a-s),y=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=f,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},rr=new U,Si=new lt,op=new U(0,0,0),lp=new U(1,1,1),gn=new U,Ws=new U,ri=new U,Zh=new lt,$h=new Ni,sn=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Zh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $h.setFromEuler(this),this.setFromQuaternion($h,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sn.DEFAULT_ORDER="XYZ";var Jr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},cp=0,Jh=new U,sr=new Ni,$i=new lt,Xs=new U,Gr=new U,hp=new U,dp=new Ni,jh=new U(1,0,0),Qh=new U(0,1,0),ed=new U(0,0,1),td={type:"added"},up={type:"removed"},ar={type:"childadded",child:null},cl={type:"childremoved",child:null},Ht=class n extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new U,t=new sn,i=new Ni,r=new U(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new ke}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.multiply(sr),this}rotateOnWorldAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.premultiply(sr),this}rotateX(e){return this.rotateOnAxis(jh,e)}rotateY(e){return this.rotateOnAxis(Qh,e)}rotateZ(e){return this.rotateOnAxis(ed,e)}translateOnAxis(e,t){return Jh.copy(e).applyQuaternion(this.quaternion),this.position.add(Jh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jh,e)}translateY(e){return this.translateOnAxis(Qh,e)}translateZ(e){return this.translateOnAxis(ed,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Xs.copy(e):Xs.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(Gr,Xs,this.up):$i.lookAt(Xs,Gr,this.up),this.quaternion.setFromRotationMatrix($i),r&&($i.extractRotation(r.matrixWorld),sr.setFromRotationMatrix($i),this.quaternion.premultiply(sr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(De("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(td),ar.child=e,this.dispatchEvent(ar),ar.child=null):De("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(up),cl.child=e,this.dispatchEvent(cl),cl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(td),ar.child=e,this.dispatchEvent(ar),ar.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,e,hp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,dp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),f.length>0&&(i.nodes=f)}return i.object=r,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ht.DEFAULT_UP=new U(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var tn=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},fp={type:"move"},br=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),g=this._getHandJoint(c,y);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,f=.005;c.inputState.pinching&&h>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fp)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new tn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vn={h:0,s:0,l:0},Ys={h:0,s:0,l:0};function hl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Fe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ze.workingColorSpace){if(e=tp(e,1),t=$e(t,0,1),i=$e(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=hl(a,s,e+1/3),this.g=hl(a,s,e),this.b=hl(a,s,e-1/3)}return Ze.colorSpaceToWorking(this,r),this}setStyle(e,t=ai){function i(s){s!==void 0&&parseFloat(s)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ai){let i=eu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nn(e.r),this.g=nn(e.g),this.b=nn(e.b),this}copyLinearToSRGB(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return Ze.workingToColorSpace(zt.copy(this),e),Math.round($e(zt.r*255,0,255))*65536+Math.round($e(zt.g*255,0,255))*256+Math.round($e(zt.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(zt.copy(this),t);let i=zt.r,r=zt.g,s=zt.b,a=Math.max(i,r,s),o=Math.min(i,r,s),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=ai){Ze.workingToColorSpace(zt.copy(this),e);let t=zt.r,i=zt.g,r=zt.b;return e!==ai?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(vn),this.setHSL(vn.h+e,vn.s+t,vn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(vn),e.getHSL(Ys);let i=rl(vn.h,Ys.h,t),r=rl(vn.s,Ys.s,t),s=rl(vn.l,Ys.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zt=new Fe;Fe.NAMES=eu;var jr=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Fe(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Qr=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Mi=new U,Ji=new U,dl=new U,ji=new U,or=new U,lr=new U,id=new U,ul=new U,fl=new U,pl=new U,ml=new dt,yl=new dt,gl=new dt,Sn=class n{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Mi.subVectors(e,t),r.cross(Mi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Mi.subVectors(r,t),Ji.subVectors(i,t),dl.subVectors(e,t);let a=Mi.dot(Mi),o=Mi.dot(Ji),l=Mi.dot(dl),c=Ji.dot(Ji),u=Ji.dot(dl),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;let h=1/d,p=(c*l-o*u)*h,f=(a*u-o*l)*h;return s.set(1-p-f,f,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ji.x),l.addScaledVector(a,ji.y),l.addScaledVector(o,ji.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return ml.setScalar(0),yl.setScalar(0),gl.setScalar(0),ml.fromBufferAttribute(e,t),yl.fromBufferAttribute(e,i),gl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ml,s.x),a.addScaledVector(yl,s.y),a.addScaledVector(gl,s.z),a}static isFrontFacing(e,t,i,r){return Mi.subVectors(i,t),Ji.subVectors(e,t),Mi.cross(Ji).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),Mi.cross(Ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,a,o;or.subVectors(r,i),lr.subVectors(s,i),ul.subVectors(e,i);let l=or.dot(ul),c=lr.dot(ul);if(l<=0&&c<=0)return t.copy(i);fl.subVectors(e,r);let u=or.dot(fl),d=lr.dot(fl);if(u>=0&&d<=u)return t.copy(r);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),t.copy(i).addScaledVector(or,a);pl.subVectors(e,s);let p=or.dot(pl),f=lr.dot(pl);if(f>=0&&p<=f)return t.copy(s);let y=p*c-l*f;if(y<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(i).addScaledVector(lr,o);let m=u*f-p*d;if(m<=0&&d-u>=0&&p-f>=0)return id.subVectors(s,r),o=(d-u)/(d-u+(p-f)),t.copy(r).addScaledVector(id,o);let g=1/(m+y+h);return a=y*g,o=h*g,t.copy(i).addScaledVector(or,a).addScaledVector(lr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Mn=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,wi):wi.fromBufferAttribute(s,a),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qs.copy(i.boundingBox)),qs.applyMatrix4(e.matrixWorld),this.union(qs)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hr),Ks.subVectors(this.max,Hr),cr.subVectors(e.a,Hr),hr.subVectors(e.b,Hr),dr.subVectors(e.c,Hr),_n.subVectors(hr,cr),xn.subVectors(dr,hr),zn.subVectors(cr,dr);let t=[0,-_n.z,_n.y,0,-xn.z,xn.y,0,-zn.z,zn.y,_n.z,0,-_n.x,xn.z,0,-xn.x,zn.z,0,-zn.x,-_n.y,_n.x,0,-xn.y,xn.x,0,-zn.y,zn.x,0];return!vl(t,cr,hr,dr,Ks)||(t=[1,0,0,0,1,0,0,0,1],!vl(t,cr,hr,dr,Ks))?!1:(Zs.crossVectors(_n,xn),t=[Zs.x,Zs.y,Zs.z],vl(t,cr,hr,dr,Ks))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Qi=[new U,new U,new U,new U,new U,new U,new U,new U],wi=new U,qs=new Mn,cr=new U,hr=new U,dr=new U,_n=new U,xn=new U,zn=new U,Hr=new U,Ks=new U,Zs=new U,Gn=new U;function vl(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Gn.fromArray(n,s);let o=r.x*Math.abs(Gn.x)+r.y*Math.abs(Gn.y)+r.z*Math.abs(Gn.z),l=e.dot(Gn),c=t.dot(Gn),u=i.dot(Gn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var vt=new U,$s=new He,pp=0,mi=class extends ki{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Kd,this.updateRanges=[],this.gpuType=Ri,this.version=0,this._normalizationScale=e!==void 0?oc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)$s.fromBufferAttribute(this,t),$s.applyMatrix3(e),this.setXY(t,$s.x,$s.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):ip(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):np(e,this.array)}};var es=class extends mi{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ts=class extends mi{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var st=class extends mi{constructor(e,t,i){super(new Float32Array(e),t,i)}},mp=new Mn,Vr=new U,_l=new U,Wn=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):mp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vr.subVectors(e,this.center);let t=Vr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Vr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_l.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vr.copy(e.center).add(_l)),this.expandByPoint(Vr.copy(e.center).sub(_l))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},yp=0,fi=new lt,xl=new Ht,ur=new U,si=new Mn,Wr=new Mn,Ct=new U,Vt=class n extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qf(e)?ts:es)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,t,i){return fi.makeTranslation(e,t,i),this.applyMatrix4(fi),this}scale(e,t,i){return fi.makeScale(e,t,i),this.applyMatrix4(fi),this}lookAt(e){return xl.lookAt(e),xl.updateMatrix(),this.applyMatrix4(xl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new st(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];si.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let i=this.boundingSphere.center;if(si.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Wr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(si.min,Wr.min),si.expandByPoint(Ct),Ct.addVectors(si.max,Wr.max),si.expandByPoint(Ct)):(si.expandByPoint(Wr.min),si.expandByPoint(Wr.max))}si.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ct));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ct.fromBufferAttribute(o,c),l&&(ur.fromBufferAttribute(e,c),Ct.add(ur)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new mi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let L=0;L<i.count;L++)o[L]=new U,l[L]=new U;let u=new U,d=new U,h=new U,p=new He,f=new He,y=new He,m=new U,g=new U;function _(L,C,k){c[L]=c[C]=c[k]=1,u.fromBufferAttribute(i,L),d.fromBufferAttribute(i,C),h.fromBufferAttribute(i,k),p.fromBufferAttribute(s,L),f.fromBufferAttribute(s,C),y.fromBufferAttribute(s,k),d.sub(u),h.sub(u),f.sub(p),y.sub(p);let N=1/(f.x*y.y-y.x*f.y);isFinite(N)&&(m.copy(d).multiplyScalar(y.y).addScaledVector(h,-f.y).multiplyScalar(N),g.copy(h).multiplyScalar(f.x).addScaledVector(d,-y.x).multiplyScalar(N),o[L].add(m),o[C].add(m),o[k].add(m),l[L].add(g),l[C].add(g),l[k].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let L=0,C=w.length;L<C;++L){let k=w[L],N=k.start,V=k.count;for(let P=N,H=N+V;P<H;P+=3)_(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let S=new U,A=new U,E=new U,v=new U;function M(L){E.fromBufferAttribute(r,L),v.copy(E);let C=o[L];S.copy(C),S.sub(E.multiplyScalar(E.dot(C))).normalize(),A.crossVectors(v,C);let N=A.dot(l[L])<0?-1:1;a.setXYZW(L,S.x,S.y,S.z,N)}for(let L=0,C=i.count;L<C;++L)c[L]&&M(L);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new mi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let r=new U,s=new U,a=new U,o=new U,l=new U,c=new U,u=new U,d=new U;if(e)for(let h=0,p=e.count;h<p;h+=3){let f=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,f),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,f),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(f,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),p=0,f=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*u;for(let g=0;g<u;g++)h[f++]=c[p++]}return new mi(h,u,d)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let o in r){let l=r[o],c=e(l,i);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var bl=new U,gp=new U,vp=new ke,Ti=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=bl.subVectors(i,t).cross(gp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(bl),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||vp.getNormalMatrix(e),r=this.coplanarPoint(bl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},_p=0,an=class extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=Es(),this.name="",this.type="Material",this.blending=Er,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fl,this.blendDst=Bl,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fa,this.stencilZFail=fa,this.stencilZPass=fa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Ti().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new He().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new He().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var en=new U,Sl=new U,Js=new U,js=new U,is=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,en)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=en.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(en.copy(this.origin).addScaledVector(this.direction,t),en.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Sl.copy(e).add(t).multiplyScalar(.5),Js.copy(t).sub(e).normalize(),js.copy(this.origin).sub(Sl);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Js),o=js.dot(this.direction),l=-js.dot(Js),c=js.lengthSq(),u=Math.abs(1-a*a),d,h,p,f;if(u>0)if(d=a*l-o,h=a*o-l,f=s*u,d>=0)if(h>=-f)if(h<=f){let y=1/u;d*=y,h*=y,p=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-f?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=f?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Sl).addScaledVector(Js,h),p}intersectSphere(e,t){if(e.radius<0)return null;en.subVectors(e.center,this.origin);let i=en.dot(this.direction),r=en.dot(en)-i*i,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,en)!==null}intersectTriangle(e,t,i,r,s){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=e.x-a.x,h=e.y-a.y,p=e.z-a.z,f=t.x-a.x,y=t.y-a.y,m=t.z-a.z,g=i.x-a.x,_=i.y-a.y,w=i.z-a.z,S=Math.abs(l),A=Math.abs(c),E=Math.abs(u),v,M,L,C,k,N,V,P,H,q,G,ne;if(S>=A&&S>=E?(L=l,N=d,H=f,ne=g,l>=0?(v=c,M=u,C=h,k=p,V=y,P=m,q=_,G=w):(v=u,M=c,C=p,k=h,V=m,P=y,q=w,G=_)):A>=E?(L=c,N=h,H=y,ne=_,c>=0?(v=u,M=l,C=p,k=d,V=m,P=f,q=w,G=g):(v=l,M=u,C=d,k=p,V=f,P=m,q=g,G=w)):(L=u,N=p,H=m,ne=w,u>=0?(v=l,M=c,C=d,k=h,V=f,P=y,q=g,G=_):(v=c,M=l,C=h,k=d,V=y,P=f,q=_,G=g)),L===0)return null;let Y=v/L,ee=M/L,te=1/L,Te=C-Y*N,Oe=k-ee*N,$=V-Y*H,ye=P-ee*H,be=q-Y*ne,Ce=G-ee*ne,ge=be*ye-Ce*$,Be=Te*Ce-Oe*be,yt=$*Oe-ye*Te;if(r){if(ge<0||Be<0||yt<0)return null}else if((ge<0||Be<0||yt<0)&&(ge>0||Be>0||yt>0))return null;let Ie=ge+Be+yt;if(Ie===0)return null;let tt=te*(ge*N+Be*H+yt*ne);return(Ie>0?tt<0:tt>0)?null:this.at(tt/Ie,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ei=class extends an{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},nd=new lt,Hn=new is,Qs=new Wn,rd=new U,ea=new U,ta=new U,ia=new U,Ml=new U,na=new U,sd=new U,ra=new U,we=class extends Ht{constructor(e=new Vt,t=new Ei){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){na.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=o[l],d=s[l];u!==0&&(Ml.fromBufferAttribute(d,e),a?na.addScaledVector(Ml,u):na.addScaledVector(Ml.sub(t),u))}t.add(na)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qs.copy(i.boundingSphere),Qs.applyMatrix4(s),Hn.copy(e.ray).recast(e.near),!(Qs.containsPoint(Hn.origin)===!1&&(Hn.intersectSphere(Qs,rd)===null||Hn.origin.distanceToSquared(rd)>(e.far-e.near)**2))&&(nd.copy(s).invert(),Hn.copy(e.ray).applyMatrix4(nd),!(i.boundingBox!==null&&Hn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Hn)))}_computeIntersections(e,t,i){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,y=h.length;f<y;f++){let m=h[f],g=a[m.materialIndex],_=Math.max(m.start,p.start),w=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=_,A=w;S<A;S+=3){let E=o.getX(S),v=o.getX(S+1),M=o.getX(S+2);r=sa(this,g,e,i,c,u,d,E,v,M),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let f=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=f,g=y;m<g;m+=3){let _=o.getX(m),w=o.getX(m+1),S=o.getX(m+2);r=sa(this,a,e,i,c,u,d,_,w,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let f=0,y=h.length;f<y;f++){let m=h[f],g=a[m.materialIndex],_=Math.max(m.start,p.start),w=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=_,A=w;S<A;S+=3){let E=S,v=S+1,M=S+2;r=sa(this,g,e,i,c,u,d,E,v,M),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let f=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=f,g=y;m<g;m+=3){let _=m,w=m+1,S=m+2;r=sa(this,a,e,i,c,u,d,_,w,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function xp(n,e,t,i,r,s,a,o){let l;if(e.side===Jt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Cn,o),l===null)return null;ra.copy(o),ra.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(ra);return c<t.near||c>t.far?null:{distance:c,point:ra.clone(),object:n}}function sa(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,ea),n.getVertexPosition(l,ta),n.getVertexPosition(c,ia);let u=xp(n,e,t,i,ea,ta,ia,sd);if(u){let d=new U;Sn.getBarycoord(sd,ea,ta,ia,d),r&&(u.uv=Sn.getInterpolatedAttribute(r,o,l,c,d,new He)),s&&(u.uv1=Sn.getInterpolatedAttribute(s,o,l,c,d,new He)),a&&(u.normal=Sn.getInterpolatedAttribute(a,o,l,c,d,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new U,materialIndex:0};Sn.getNormal(ea,ta,ia,h.normal),u.face=h,u.barycoord=d}return u}var Ra=class extends ei{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Pt,u=Pt,d,h){super(null,a,o,l,c,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vn=new Wn,bp=new He(.5,.5),aa=new U,wn=class{constructor(e=new Ti,t=new Ti,i=new Ti,r=new Ti,s=new Ti,a=new Ti){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=pi,i=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],h=s[6],p=s[7],f=s[8],y=s[9],m=s[10],g=s[11],_=s[12],w=s[13],S=s[14],A=s[15];if(r[0].setComponents(c-a,p-u,g-f,A-_).normalize(),r[1].setComponents(c+a,p+u,g+f,A+_).normalize(),r[2].setComponents(c+o,p+d,g+y,A+w).normalize(),r[3].setComponents(c-o,p-d,g-y,A-w).normalize(),i)r[4].setComponents(l,h,m,S).normalize(),r[5].setComponents(c-l,p-h,g-m,A-S).normalize();else if(r[4].setComponents(c-l,p-h,g-m,A-S).normalize(),t===pi)r[5].setComponents(c+l,p+h,g+m,A+S).normalize();else if(t===vr)r[5].setComponents(l,h,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vn)}intersectsSprite(e){Vn.center.set(0,0,0);let t=bp.distanceTo(e.center);return Vn.radius=.7071067811865476+t,Vn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vn)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(aa.x=r.normal.x>0?e.max.x:e.min.x,aa.y=r.normal.y>0?e.max.y:e.min.y,aa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(aa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ad=new lt,Ca=class n{constructor(){this.coordinateSystem=pi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let r=0;r<t.length;r++){let s=t[r];ad.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new wn),i[r].setFromProjectionMatrix(ad,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new wn),t[r].copy(i[r]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Sr=class extends an{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},od=new lt,Cl=new is,oa=new Wn,la=new U,ns=class extends Ht{constructor(e=new Vt,t=new Sr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),oa.copy(i.boundingSphere),oa.applyMatrix4(r),oa.radius+=s,e.ray.intersectsSphere(oa)===!1)return;od.copy(r).invert(),Cl.copy(e.ray).applyMatrix4(od);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let f=h,y=p;f<y;f++){let m=c.getX(f);la.fromBufferAttribute(d,m),ld(la,m,l,r,e,t,this)}}else{let h=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let f=h,y=p;f<y;f++)la.fromBufferAttribute(d,f),ld(la,f,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function ld(n,e,t,i,r,s,a){let o=Cl.distanceSqToPoint(n);if(o<t){let l=new U;Cl.closestPointToPoint(n,l),l.applyMatrix4(i);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var rs=class extends ei{constructor(e=[],t=qn,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var on=class extends ei{constructor(e,t,i=Ai,r,s,a,o=Pt,l=Pt,c,u=rn,d=1){if(u!==rn&&u!==cn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ss=class extends on{constructor(e,t=Ai,i=qn,r,s,a=Pt,o=Pt,l,c=rn){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},as=class extends ei{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},It=class n extends Vt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,p=0;f("z","y","x",-1,-1,i,t,e,a,s,0),f("z","y","x",1,-1,i,t,-e,a,s,1),f("x","z","y",1,1,e,i,t,r,a,2),f("x","z","y",1,-1,e,i,-t,r,a,3),f("x","y","z",1,-1,e,t,i,r,s,4),f("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(u,3)),this.setAttribute("uv",new st(d,2));function f(y,m,g,_,w,S,A,E,v,M,L){let C=S/v,k=A/M,N=S/2,V=A/2,P=E/2,H=v+1,q=M+1,G=0,ne=0,Y=new U;for(let ee=0;ee<q;ee++){let te=ee*k-V;for(let Te=0;Te<H;Te++){let Oe=Te*C-N;Y[y]=Oe*_,Y[m]=te*w,Y[g]=P,c.push(Y.x,Y.y,Y.z),Y[y]=0,Y[m]=0,Y[g]=E>0?1:-1,u.push(Y.x,Y.y,Y.z),d.push(Te/v),d.push(1-ee/M),G+=1}}for(let ee=0;ee<M;ee++)for(let te=0;te<v;te++){let Te=h+te+H*ee,Oe=h+te+H*(ee+1),$=h+(te+1)+H*(ee+1),ye=h+(te+1)+H*ee;l.push(Te,Oe,ye),l.push(Oe,$,ye),ne+=6}o.addGroup(p,ne,L),p+=ne,h+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var os=class n extends Vt{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new U,u=new He;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){let p=i+d/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(o,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ti=class n extends Vt{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let u=[],d=[],h=[],p=[],f=0,y=[],m=i/2,g=0;_(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new st(d,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(p,2));function _(){let S=new U,A=new U,E=0,v=(t-e)/i;for(let M=0;M<=s;M++){let L=[],C=M/s,k=C*(t-e)+e;for(let N=0;N<=r;N++){let V=N/r,P=V*l+o,H=Math.sin(P),q=Math.cos(P);A.x=k*H,A.y=-C*i+m,A.z=k*q,d.push(A.x,A.y,A.z),S.set(H,v,q).normalize(),h.push(S.x,S.y,S.z),p.push(V,1-C),L.push(f++)}y.push(L)}for(let M=0;M<r;M++)for(let L=0;L<s;L++){let C=y[L][M],k=y[L+1][M],N=y[L+1][M+1],V=y[L][M+1];(e>0||L!==0)&&(u.push(C,k,V),E+=3),(t>0||L!==s-1)&&(u.push(k,N,V),E+=3)}c.addGroup(g,E,0),g+=E}function w(S){let A=f,E=new He,v=new U,M=0,L=S===!0?e:t,C=S===!0?1:-1;for(let N=1;N<=r;N++)d.push(0,m*C,0),h.push(0,C,0),p.push(.5,.5),f++;let k=f;for(let N=0;N<=r;N++){let P=N/r*l+o,H=Math.cos(P),q=Math.sin(P);v.x=L*q,v.y=m*C,v.z=L*H,d.push(v.x,v.y,v.z),h.push(0,C,0),E.x=H*.5+.5,E.y=q*.5*C+.5,p.push(E.x,E.y),f++}for(let N=0;N<r;N++){let V=A+N,P=k+N;S===!0?u.push(P,P+1,V):u.push(P+1,P,V),M+=3}c.addGroup(g,M,S===!0?1:2),g+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Nt=class n extends ti{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ls=class n extends Vt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],a=[];o(r),c(i),u(),this.setAttribute("position",new st(s,3)),this.setAttribute("normal",new st(s.slice(),3)),this.setAttribute("uv",new st(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let w=new U,S=new U,A=new U;for(let E=0;E<t.length;E+=3)p(t[E+0],w),p(t[E+1],S),p(t[E+2],A),l(w,S,A,_)}function l(_,w,S,A){let E=A+1,v=[];for(let M=0;M<=E;M++){v[M]=[];let L=_.clone().lerp(S,M/E),C=w.clone().lerp(S,M/E),k=E-M;for(let N=0;N<=k;N++)N===0&&M===E?v[M][N]=L:v[M][N]=L.clone().lerp(C,N/k)}for(let M=0;M<E;M++)for(let L=0;L<2*(E-M)-1;L++){let C=Math.floor(L/2);L%2===0?(h(v[M][C+1]),h(v[M+1][C]),h(v[M][C])):(h(v[M][C+1]),h(v[M+1][C+1]),h(v[M+1][C]))}}function c(_){let w=new U;for(let S=0;S<s.length;S+=3)w.x=s[S+0],w.y=s[S+1],w.z=s[S+2],w.normalize().multiplyScalar(_),s[S+0]=w.x,s[S+1]=w.y,s[S+2]=w.z}function u(){let _=new U;for(let w=0;w<s.length;w+=3){_.x=s[w+0],_.y=s[w+1],_.z=s[w+2];let S=m(_)/2/Math.PI+.5,A=g(_)/Math.PI+.5;a.push(S,1-A)}f(),d()}function d(){for(let _=0;_<a.length;_+=6){let w=a[_+0],S=a[_+2],A=a[_+4],E=Math.max(w,S,A),v=Math.min(w,S,A);E>.9&&v<.1&&(w<.2&&(a[_+0]+=1),S<.2&&(a[_+2]+=1),A<.2&&(a[_+4]+=1))}}function h(_){s.push(_.x,_.y,_.z)}function p(_,w){let S=_*3;w.x=e[S+0],w.y=e[S+1],w.z=e[S+2]}function f(){let _=new U,w=new U,S=new U,A=new U,E=new He,v=new He,M=new He;for(let L=0,C=0;L<s.length;L+=9,C+=6){_.set(s[L+0],s[L+1],s[L+2]),w.set(s[L+3],s[L+4],s[L+5]),S.set(s[L+6],s[L+7],s[L+8]),E.set(a[C+0],a[C+1]),v.set(a[C+2],a[C+3]),M.set(a[C+4],a[C+5]),A.copy(_).add(w).add(S).divideScalar(3);let k=m(A);y(E,C+0,_,k),y(v,C+2,w,k),y(M,C+4,S,k)}}function y(_,w,S,A){A<0&&_.x===1&&(a[w]=_.x-1),S.x===0&&S.z===0&&(a[w]=A/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},cs=class n extends ls{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var hs=class n extends ls{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Oi=class n extends Vt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,h=t/l,p=[],f=[],y=[],m=[];for(let g=0;g<u;g++){let _=g*h-a;for(let w=0;w<c;w++){let S=w*d-s;f.push(S,-_,0),y.push(0,0,1),m.push(w/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<o;_++){let w=_+c*g,S=_+c*(g+1),A=_+1+c*(g+1),E=_+1+c*g;p.push(w,S,E),p.push(S,A,E)}this.setIndex(p),this.setAttribute("position",new st(f,3)),this.setAttribute("normal",new st(y,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Tn=class n extends Vt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,u=[],d=new U,h=new U,p=[],f=[],y=[],m=[];for(let g=0;g<=i;g++){let _=[],w=g/i,S=a+w*o,A=e*Math.cos(S),E=Math.sqrt(e*e-A*A),v=0;g===0&&a===0?v=.5/t:g===i&&l===Math.PI&&(v=-.5/t);for(let M=0;M<=t;M++){let L=M/t,C=r+L*s;d.x=-E*Math.cos(C),d.y=A,d.z=E*Math.sin(C),f.push(d.x,d.y,d.z),h.copy(d).normalize(),y.push(h.x,h.y,h.z),m.push(L+v,1-w),_.push(c++)}u.push(_)}for(let g=0;g<i;g++)for(let _=0;_<t;_++){let w=u[g][_+1],S=u[g][_],A=u[g+1][_],E=u[g+1][_+1];(g!==0||a>0)&&p.push(w,S,E),(g!==i-1||l<Math.PI)&&p.push(S,A,E)}this.setIndex(p),this.setAttribute("position",new st(f,3)),this.setAttribute("normal",new st(y,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var yi=class n extends Vt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);let l=[],c=[],u=[],d=[],h=new U,p=new U,f=new U;for(let y=0;y<=i;y++){let m=a+y/i*o;for(let g=0;g<=r;g++){let _=g/r*s;p.x=(e+t*Math.cos(m))*Math.cos(_),p.y=(e+t*Math.cos(m))*Math.sin(_),p.z=t*Math.sin(m),c.push(p.x,p.y,p.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(p,h).normalize(),u.push(f.x,f.y,f.z),d.push(g/r),d.push(y/i)}}for(let y=1;y<=i;y++)for(let m=1;m<=r;m++){let g=(r+1)*y+m-1,_=(r+1)*(y-1)+m-1,w=(r+1)*(y-1)+m,S=(r+1)*y+m;l.push(g,_,S),l.push(_,w,S)}this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(u,3)),this.setAttribute("uv",new st(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Zn(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];if(cd(r))r.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(cd(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Wt(n){let e={};for(let t=0;t<n.length;t++){let i=Zn(n[t]);for(let r in i)e[r]=i[r]}return e}function cd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Sp(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function lc(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}var tu={clone:Zn,merge:Wt},Mp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ui=class extends an{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mp,this.fragmentShader=wp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zn(e.uniforms),this.uniformsGroups=Sp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Fe().setHex(r.value);break;case"v2":this.uniforms[i].value=new He().fromArray(r.value);break;case"v3":this.uniforms[i].value=new U().fromArray(r.value);break;case"v4":this.uniforms[i].value=new dt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new ke().fromArray(r.value);break;case"m4":this.uniforms[i].value=new lt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Pa=class extends Ui{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},We=class extends an{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ia=class extends an{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},La=class extends an{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function fr(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function ca(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var En=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];i:{e:{let a;t:{n:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break i}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Da=class extends En{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:El,endingEnd:El}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Al:s=e,o=2*t-i;break;case Rl:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Al:a=e,l=2*i-t;break;case Rl:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,f=(i-t)/(r-t),y=f*f,m=y*f,g=-h*m+2*h*y-h*f,_=(1+h)*m+(-1.5-2*h)*y+(-.5+h)*f+1,w=(-1-p)*m+(1.5+p)*y+.5*f,S=p*m-p*y;for(let A=0;A!==o;++A)s[A]=g*a[u+A]+_*a[c+A]+w*a[l+A]+S*a[d+A];return s}},ka=class extends En{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(r-t),d=1-u;for(let h=0;h!==o;++h)s[h]=a[c+h]*d+a[l+h]*u;return s}},Na=class extends En{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Oa=class extends En{interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let f=(i-t)/(r-t),y=1-f;for(let m=0;m!==o;++m)s[m]=a[c+m]*y+a[l+m]*f;return s}let h=o*2,p=e-1;for(let f=0;f!==o;++f){let y=a[c+f],m=a[l+f],g=p*h+f*2,_=d[g],w=d[g+1],S=e*h+f*2,A=u[S],E=u[S+1],v=Ep(i,t,_,A,r);s[f]=iu(v,y,w,E,m)}return s}};function iu(n,e,t,i,r){let s=1-n;return s*s*s*e+3*s*s*n*t+3*s*n*n*i+n*n*n*r}function Tp(n,e,t,i,r){let s=1-n;return 3*s*s*(t-e)+6*s*n*(i-t)+3*n*n*(r-i)}function Ep(n,e,t,i,r){let s=(n-e)/(r-e);for(let a=0;a<8;a++){let o=iu(s,e,t,i,r)-n;if(Math.abs(o)<1e-10)break;let l=Tp(s,e,t,i,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var li=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fr(t,this.TimeBufferType),this.values=fr(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:fr(e.times,Array),values:fr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),ca(e.settings)&&(i.settings={inTangents:fr(e.settings.inTangents,Array),outTangents:fr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Na(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Da(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Oa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Yr:t=this.InterpolantFactoryMethodDiscrete;break;case Ma:t=this.InterpolantFactoryMethodLinear;break;case ua:t=this.InterpolantFactoryMethodSmooth;break;case Tl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Le("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yr;case this.InterpolantFactoryMethodLinear:return Ma;case this.InterpolantFactoryMethodSmooth:return ua;case this.InterpolantFactoryMethodBezier:return Tl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e;ca(this.settings)&&(hd(this.settings.inTangents,e),hd(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;ca(this.settings)&&(dd(this.settings.inTangents,e),dd(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(De("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(De("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){De("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){De("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&ep(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){De("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===ua,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(r)l=!0;else{let d=o*i,h=d-i,p=d+i;for(let f=0;f!==i;++f){let y=t[d+f];if(y!==t[h+f]||y!==t[p+f]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*i,h=a*i;for(let p=0;p!==i;++p)t[h+p]=t[d+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,ca(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function hd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function dd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}li.prototype.ValueTypeName="";li.prototype.TimeBufferType=Float32Array;li.prototype.ValueBufferType=Float32Array;li.prototype.DefaultInterpolation=Ma;var An=class extends li{constructor(e,t,i){super(e,t,i)}};An.prototype.ValueTypeName="bool";An.prototype.ValueBufferType=Array;An.prototype.DefaultInterpolation=Yr;An.prototype.InterpolantFactoryMethodLinear=void 0;An.prototype.InterpolantFactoryMethodSmooth=void 0;var Ua=class extends li{constructor(e,t,i,r){super(e,t,i,r)}};Ua.prototype.ValueTypeName="color";var Fa=class extends li{constructor(e,t,i,r){super(e,t,i,r)}};Fa.prototype.ValueTypeName="number";var Ba=class extends En{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t),c=e*o;for(let u=c+o;c!==u;c+=4)Ni.slerpFlat(s,0,a,c-o,a,c,l);return s}},ds=class extends li{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Ba(this.times,this.values,this.getValueSize(),e)}};ds.prototype.ValueTypeName="quaternion";ds.prototype.InterpolantFactoryMethodSmooth=void 0;var Rn=class extends li{constructor(e,t,i){super(e,t,i)}};Rn.prototype.ValueTypeName="string";Rn.prototype.ValueBufferType=Array;Rn.prototype.DefaultInterpolation=Yr;Rn.prototype.InterpolantFactoryMethodLinear=void 0;Rn.prototype.InterpolantFactoryMethodSmooth=void 0;var za=class extends li{constructor(e,t,i,r){super(e,t,i,r)}};za.prototype.ValueTypeName="vector";var Ga=class{constructor(e,t,i){let r=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let p=c[d],f=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},nu=new Ga,Ha=class{constructor(e){this.manager=e!==void 0?e:nu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Ha.DEFAULT_MATERIAL_NAME="__DEFAULT";var Mr=class extends Ht{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var wl=new lt,ud=new U,fd=new U,us=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=ii,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wn,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ud.setFromMatrixPosition(e.matrixWorld),t.position.copy(ud),fd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){wl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(wl,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===vr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(wl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ha=new U,da=new Ni,Li=new U,fs=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ha,da,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ha,da,Li.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ha,da,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ha,da,Li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},bn=new U,pd=new He,md=new He,Gt=class extends fs{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=wa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(nl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wa*2*Math.atan(Math.tan(nl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bn.x,bn.y).multiplyScalar(-e/bn.z),bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bn.x,bn.y).multiplyScalar(-e/bn.z)}getViewSize(e,t){return this.getViewBounds(e,pd,md),t.subVectors(md,pd)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(nl*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Pl=class extends us{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0}},ps=class extends Mr{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Pl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ms=class extends fs{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Il=class extends us{constructor(){super(new ms(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ys=class extends Mr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new Il}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},gs=class extends Mr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var pr=-90,mr=1,wr=class extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Gt(pr,mr,e,t);r.layers=this.layers,this.add(r);let s=new Gt(pr,mr,e,t);s.layers=this.layers,this.add(s);let a=new Gt(pr,mr,e,t);a.layers=this.layers,this.add(a);let o=new Gt(pr,mr,e,t);o.layers=this.layers,this.add(o);let l=new Gt(pr,mr,e,t);l.layers=this.layers,this.add(l);let c=new Gt(pr,mr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===pi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=y,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},Va=class extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var cc="\\[\\]\\.:\\/",Ap=new RegExp("["+cc+"]","g"),hc="[^"+cc+"]",Rp="[^"+cc.replace("\\.","")+"]",Cp=/((?:WC+[\/:])*)/.source.replace("WC",hc),Pp=/(WCOD+)?/.source.replace("WCOD",Rp),Ip=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hc),Lp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hc),Dp=new RegExp("^"+Cp+Pp+Ip+Lp+"$"),kp=["material","materials","bones","map"],Ll=class{constructor(e,t,i){let r=i||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},ot=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ap,"")}static parseTrackName(e){let t=Dp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);kp.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Le("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){De("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){De("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){De("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){De("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){De("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){De("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){De("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[r];if(a===void 0){let c=t.nodeName;De("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){De("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){De("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ot.Composite=Ll;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var u_=new Float32Array(1);var Dl=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};function dc(n,e,t,i){let r=Np(i);switch(t){case Ql:return n*e;case tc:return n*e/r.components*r.byteLength;case $a:return n*e/r.components*r.byteLength;case Pn:return n*e*2/r.components*r.byteLength;case Ja:return n*e*2/r.components*r.byteLength;case ec:return n*e*3/r.components*r.byteLength;case Pi:return n*e*4/r.components*r.byteLength;case ja:return n*e*4/r.components*r.byteLength;case xs:case bs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ss:case Ms:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case eo:case io:return Math.max(n,16)*Math.max(e,8)/4;case Qa:case to:return Math.max(n,8)*Math.max(e,8)/2;case no:case ro:case ao:case oo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case so:case ws:case lo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ho:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case uo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case fo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case po:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case mo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case yo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case go:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case vo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case _o:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case xo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case bo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case So:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Mo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case wo:case To:case Eo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ao:case Ro:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ts:case Co:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Np(n){switch(n){case ii:case Zl:return{byteLength:1,components:1};case Rr:case $l:case Ci:return{byteLength:2,components:1};case Ka:case Za:return{byteLength:2,components:4};case Ai:case qa:case Ri:return{byteLength:4,components:1};case Jl:case jl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Tu(){let n=null,e=!1,t=null,i=null;function r(s,a){i=n.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Up(n){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((p,f)=>p.start-f.start);let h=0;for(let p=1;p<d.length;p++){let f=d[h],y=d[p];y.start<=f.start+f.count+1?f.count=Math.max(f.count,y.start+y.count-f.start):(++h,d[h]=y)}d.length=h+1;for(let p=0,f=d.length;p<f;p++){let y=d[p];n.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Fp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,qp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$p=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Jp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,am=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,om=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,cm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,um=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fm="gl_FragColor = linearToOutputTexel( gl_FragColor );",pm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ym=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,gm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_m=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Tm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Em=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Am=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Cm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Pm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Im=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,km=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Nm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Om=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Um=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Fm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bm=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,zm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ym=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Km=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$m=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jm=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,e0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,i0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,n0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,a0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,o0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,l0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,c0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,d0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,u0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,f0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,y0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,g0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,x0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,b0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,S0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,M0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,w0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,T0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,E0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,A0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,C0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,I0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,L0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,D0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,N0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,O0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,U0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,F0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z0=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,W0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,X0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Y0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,K0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,J0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,j0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ey=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ty=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,iy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ny=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ry=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ay=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ly=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,uy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,py=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,my=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:Fp,alphahash_pars_fragment:Bp,alphamap_fragment:zp,alphamap_pars_fragment:Gp,alphatest_fragment:Hp,alphatest_pars_fragment:Vp,aomap_fragment:Wp,aomap_pars_fragment:Xp,batching_pars_vertex:Yp,batching_vertex:qp,begin_vertex:Kp,beginnormal_vertex:Zp,bsdfs:$p,iridescence_fragment:Jp,bumpmap_pars_fragment:jp,clipping_planes_fragment:Qp,clipping_planes_pars_fragment:em,clipping_planes_pars_vertex:tm,clipping_planes_vertex:im,color_fragment:nm,color_pars_fragment:rm,color_pars_vertex:sm,color_vertex:am,common:om,defaultnormal_vertex:lm,displacementmap_pars_vertex:cm,displacementmap_vertex:hm,emissivemap_fragment:dm,emissivemap_pars_fragment:um,colorspace_fragment:fm,colorspace_pars_fragment:pm,envmap_fragment:mm,envmap_common_pars_fragment:ym,envmap_pars_fragment:gm,envmap_pars_vertex:vm,envmap_physical_pars_fragment:Cm,envmap_vertex:_m,fog_vertex:xm,fog_pars_vertex:bm,fog_fragment:Sm,fog_pars_fragment:Mm,gradientmap_pars_fragment:wm,lightmap_pars_fragment:Tm,lights_lambert_fragment:Em,lights_lambert_pars_fragment:Am,lights_pars_begin:Rm,lights_toon_fragment:Pm,lights_toon_pars_fragment:Im,lights_phong_fragment:Lm,lights_phong_pars_fragment:Dm,lights_physical_fragment:km,lights_physical_pars_fragment:Nm,lights_fragment_begin:Om,lights_fragment_maps:Um,lights_fragment_end:Fm,lightprobes_pars_fragment:Bm,logdepthbuf_fragment:zm,logdepthbuf_pars_fragment:Gm,logdepthbuf_pars_vertex:Hm,logdepthbuf_vertex:Vm,map_fragment:Wm,map_pars_fragment:Xm,map_particle_fragment:Ym,map_particle_pars_fragment:qm,metalnessmap_fragment:Km,metalnessmap_pars_fragment:Zm,morphinstance_vertex:$m,morphcolor_vertex:Jm,morphnormal_vertex:jm,morphtarget_pars_vertex:Qm,morphtarget_vertex:e0,normal_fragment_begin:t0,normal_fragment_maps:i0,normal_pars_fragment:n0,normal_pars_vertex:r0,normal_vertex:s0,normalmap_pars_fragment:a0,clearcoat_normal_fragment_begin:o0,clearcoat_normal_fragment_maps:l0,clearcoat_pars_fragment:c0,iridescence_pars_fragment:h0,opaque_fragment:d0,packing:u0,premultiplied_alpha_fragment:f0,project_vertex:p0,dithering_fragment:m0,dithering_pars_fragment:y0,roughnessmap_fragment:g0,roughnessmap_pars_fragment:v0,shadowmap_pars_fragment:_0,shadowmap_pars_vertex:x0,shadowmap_vertex:b0,shadowmask_pars_fragment:S0,skinbase_vertex:M0,skinning_pars_vertex:w0,skinning_vertex:T0,skinnormal_vertex:E0,specularmap_fragment:A0,specularmap_pars_fragment:R0,tonemapping_fragment:C0,tonemapping_pars_fragment:P0,transmission_fragment:I0,transmission_pars_fragment:L0,uv_pars_fragment:D0,uv_pars_vertex:k0,uv_vertex:N0,worldpos_vertex:O0,background_vert:U0,background_frag:F0,backgroundCube_vert:B0,backgroundCube_frag:z0,cube_vert:G0,cube_frag:H0,depth_vert:V0,depth_frag:W0,distance_vert:X0,distance_frag:Y0,equirect_vert:q0,equirect_frag:K0,linedashed_vert:Z0,linedashed_frag:$0,meshbasic_vert:J0,meshbasic_frag:j0,meshlambert_vert:Q0,meshlambert_frag:ey,meshmatcap_vert:ty,meshmatcap_frag:iy,meshnormal_vert:ny,meshnormal_frag:ry,meshphong_vert:sy,meshphong_frag:ay,meshphysical_vert:oy,meshphysical_frag:ly,meshtoon_vert:cy,meshtoon_frag:hy,points_vert:dy,points_frag:uy,shadow_vert:fy,shadow_frag:py,sprite_vert:my,sprite_frag:yy},me={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Gi={basic:{uniforms:Wt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Wt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Fe(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Wt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Wt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Wt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Wt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Wt([me.points,me.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Wt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Wt([me.common,me.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Wt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Wt([me.sprite,me.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:Wt([me.common,me.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:Wt([me.lights,me.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Gi.physical={uniforms:Wt([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var Io={r:0,b:0,g:0},gy=new lt,Eu=new ke;Eu.set(-1,0,0,0,1,0,0,0,1);function vy(n,e,t,i,r,s){let a=new Fe(0),o=r===!0?0:1,l,c,u=null,d=0,h=null;function p(_){let w=_.isScene===!0?_.background:null;if(w&&w.isTexture){let S=_.backgroundBlurriness>0;w=e.get(w,S)}return w}function f(_){let w=!1,S=p(_);S===null?m(a,o):S&&S.isColor&&(m(S,1),w=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(_,w){let S=p(w);S&&S.isCubeTexture?(c===void 0&&(c=new we(new It(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:Zn(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,E,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(gy.makeRotationFromEuler(w.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Eu),c.material.toneMapped=Ze.getTransfer(S.colorSpace)!==et,(u!==S||d!==S.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,h=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new we(new Oi(2,2),new Ui({name:"BackgroundMaterial",uniforms:Zn(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(S.colorSpace)!==et,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,h=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,w){_.getRGB(Io,lc(n)),t.buffers.color.setClear(Io.r,Io.g,Io.b,w,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,w=1){a.set(_),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,m(a,o)},render:f,addToRenderList:y,dispose:g}}function _y(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null),s=r,a=!1;function o(k,N,V,P,H){let q=!1,G=d(k,P,V,N);s!==G&&(s=G,c(s.object)),q=p(k,P,V,H),q&&f(k,P,V,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,S(k,N,V,P),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return n.createVertexArray()}function c(k){return n.bindVertexArray(k)}function u(k){return n.deleteVertexArray(k)}function d(k,N,V,P){let H=P.wireframe===!0,q=i[N.id];q===void 0&&(q={},i[N.id]=q);let G=k.isInstancedMesh===!0?k.id:0,ne=q[G];ne===void 0&&(ne={},q[G]=ne);let Y=ne[V.id];Y===void 0&&(Y={},ne[V.id]=Y);let ee=Y[H];return ee===void 0&&(ee=h(l()),Y[H]=ee),ee}function h(k){let N=[],V=[],P=[];for(let H=0;H<t;H++)N[H]=0,V[H]=0,P[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:V,attributeDivisors:P,object:k,attributes:{},index:null}}function p(k,N,V,P){let H=s.attributes,q=N.attributes,G=0,ne=V.getAttributes();for(let Y in ne)if(ne[Y].location>=0){let te=H[Y],Te=q[Y];if(Te===void 0&&(Y==="instanceMatrix"&&k.instanceMatrix&&(Te=k.instanceMatrix),Y==="instanceColor"&&k.instanceColor&&(Te=k.instanceColor)),te===void 0||te.attribute!==Te||Te&&te.data!==Te.data)return!0;G++}return s.attributesNum!==G||s.index!==P}function f(k,N,V,P){let H={},q=N.attributes,G=0,ne=V.getAttributes();for(let Y in ne)if(ne[Y].location>=0){let te=q[Y];te===void 0&&(Y==="instanceMatrix"&&k.instanceMatrix&&(te=k.instanceMatrix),Y==="instanceColor"&&k.instanceColor&&(te=k.instanceColor));let Te={};Te.attribute=te,te&&te.data&&(Te.data=te.data),H[Y]=Te,G++}s.attributes=H,s.attributesNum=G,s.index=P}function y(){let k=s.newAttributes;for(let N=0,V=k.length;N<V;N++)k[N]=0}function m(k){g(k,0)}function g(k,N){let V=s.newAttributes,P=s.enabledAttributes,H=s.attributeDivisors;V[k]=1,P[k]===0&&(n.enableVertexAttribArray(k),P[k]=1),H[k]!==N&&(n.vertexAttribDivisor(k,N),H[k]=N)}function _(){let k=s.newAttributes,N=s.enabledAttributes;for(let V=0,P=N.length;V<P;V++)N[V]!==k[V]&&(n.disableVertexAttribArray(V),N[V]=0)}function w(k,N,V,P,H,q,G){G===!0?n.vertexAttribIPointer(k,N,V,H,q):n.vertexAttribPointer(k,N,V,P,H,q)}function S(k,N,V,P){y();let H=P.attributes,q=V.getAttributes(),G=N.defaultAttributeValues;for(let ne in q){let Y=q[ne];if(Y.location>=0){let ee=H[ne];if(ee===void 0&&(ne==="instanceMatrix"&&k.instanceMatrix&&(ee=k.instanceMatrix),ne==="instanceColor"&&k.instanceColor&&(ee=k.instanceColor)),ee!==void 0){let te=ee.normalized,Te=ee.itemSize,Oe=e.get(ee);if(Oe===void 0)continue;let $=Oe.buffer,ye=Oe.type,be=Oe.bytesPerElement,Ce=ye===n.INT||ye===n.UNSIGNED_INT||ee.gpuType===qa;if(ee.isInterleavedBufferAttribute){let ge=ee.data,Be=ge.isInterleavedBuffer===!0?ge.stride:ge.itemSize,yt=ee.offset;if(ge.isInstancedInterleavedBuffer||ge.isInstancedBufferAttribute){for(let Ie=0;Ie<Y.locationSize;Ie++)g(Y.location+Ie,ge.meshPerAttribute);k.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Ie=0;Ie<Y.locationSize;Ie++)m(Y.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,$);for(let Ie=0;Ie<Y.locationSize;Ie++)w(Y.location+Ie,Te/Y.locationSize,ye,te,Be*be,(yt+Te/Y.locationSize*Ie)*be,Ce)}else{if(ee.isInstancedBufferAttribute){for(let ge=0;ge<Y.locationSize;ge++)g(Y.location+ge,ee.meshPerAttribute);k.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ge=0;ge<Y.locationSize;ge++)m(Y.location+ge);n.bindBuffer(n.ARRAY_BUFFER,$);for(let ge=0;ge<Y.locationSize;ge++)w(Y.location+ge,Te/Y.locationSize,ye,te,Te*be,Te/Y.locationSize*ge*be,Ce)}}else if(G!==void 0){let te=G[ne];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(Y.location,te);break;case 3:n.vertexAttrib3fv(Y.location,te);break;case 4:n.vertexAttrib4fv(Y.location,te);break;default:n.vertexAttrib1fv(Y.location,te)}}}}_()}function A(){L();for(let k in i){let N=i[k];for(let V in N){let P=N[V];for(let H in P){let q=P[H];for(let G in q)u(q[G].object),delete q[G];delete P[H]}}delete i[k]}}function E(k){if(i[k.id]===void 0)return;let N=i[k.id];for(let V in N){let P=N[V];for(let H in P){let q=P[H];for(let G in q)u(q[G].object),delete q[G];delete P[H]}}delete i[k.id]}function v(k){for(let N in i){let V=i[N];for(let P in V){let H=V[P];if(H[k.id]===void 0)continue;let q=H[k.id];for(let G in q)u(q[G].object),delete q[G];delete H[k.id]}}}function M(k){for(let N in i){let V=i[N],P=k.isInstancedMesh===!0?k.id:0,H=V[P];if(H!==void 0){for(let q in H){let G=H[q];for(let ne in G)u(G[ne].object),delete G[ne];delete H[q]}delete V[P],Object.keys(V).length===0&&delete i[N]}}}function L(){C(),a=!0,s!==r&&(s=r,c(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:C,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:M,releaseStatesOfProgram:v,initAttributes:y,enableAttribute:m,disableUnusedAttributes:_}}function xy(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];t.update(h,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function by(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(v){return!(v!==Pi&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(v){let M=v===Ci&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==ii&&v!==Ri&&!M&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Le("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Le("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:f,maxTextureSize:y,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:_,maxVaryings:w,maxFragmentUniforms:S,maxSamples:A,samples:E}}function Sy(n){let e=this,t=null,i=0,r=!1,s=!1,a=new Ti,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){let f=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,g=n.get(d);if(!r||f===null||f.length===0||s&&!m)s?u(null):c();else{let _=s?0:i,w=_*4,S=g.clippingState||null;l.value=S,S=u(f,h,w,p);for(let A=0;A!==w;++A)S[A]=t[A];g.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,f){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,f!==!0||m===null){let g=p+y*4,_=h.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<g)&&(m=new Float32Array(g));for(let w=0,S=p;w!==y;++w,S+=4)a.copy(d[w]).applyMatrix4(_,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var Cs=class extends oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new rs(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new It(5,5,5),s=new Ui({name:"CubemapFromEquirect",uniforms:Zn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:Xn});s.uniforms.tEquirect.value=t;let a=new we(r,s),o=t.minFilter;return t.minFilter===ln&&(t.minFilter=$t),new wr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}},ru=256,My=3,wy=20,Au=256,Ru=16,Ty=3,Ey=new U,Ay=new Fe,Do=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new wr(1,10,null),this._boxMesh=new we(new It(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){let{size:a=256,position:o=Ey}=s,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,h=l.autoClearColor,p=l.autoClearDepth,f=l.autoClearStencil,y=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(e.background=l.getClearColor(Ay));let m=new wr(i,r,u);return m.position.copy(o),m.update(l,e),l.autoClear=d,l.autoClearColor=h,l.autoClearDepth=p,l.autoClearStencil=f,e.background=y,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ou(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=au(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(ru,Qd(e))}_fromTexture(e,t){e.mapping===qn||e.mapping===Ar?this._setSize(e.image.length===0?ru:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=su(e,!1,!1),i=Math.log2(e)-My;for(let r=0;r<=i;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=su(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===qn||e.mapping===Ar?(this._cubemapMaterial===null&&(this._cubemapMaterial=ou()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=au()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Ry(),this._integrationMaterial=Cy());let t=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/Ru);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-Ty)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(Au*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Py());let i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}};function su(n,e,t){return new Cs(n,{minFilter:ln,generateMipmaps:e,type:Ci,colorSpace:qr,depthBuffer:t})}function Ps(n,e,t){return new Ui({name:n,uniforms:e,vertexShader:Ve.cube_vert,fragmentShader:t,side:Jt,blending:Xn,depthTest:!1,depthWrite:!1})}function Ry(){return Ps("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Au}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Cy(){return Ps("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ru}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Py(){return Ps("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${wy}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function au(){return Ps("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function ou(){return Ps("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Iy(n){let e=new WeakMap,t=new WeakMap,i=null;function r(h,p=!1){return h==null?null:p?a(h):s(h)}function s(h){if(h&&h.isTexture){let p=h.mapping;if(p===Wa||p===Xa)if(e.has(h)){let f=e.get(h).texture;return o(f,h.mapping)}else{let f=h.image;if(f&&f.height>0){let y=new Cs(f.height);return y.fromEquirectangularTexture(n,h),e.set(h,y),h.addEventListener("dispose",c),o(y.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let p=h.mapping,f=p===Wa||p===Xa,y=p===qn||p===Ar;if(f||y){let m=t.get(h),g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return i===null&&(i=new Do(n)),m=f?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let _=h.image;return f&&_&&_.height>0||y&&_&&l(_)?(i===null&&(i=new Do(n)),m=f?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,p){return p===Wa?h.mapping=qn:p===Xa&&(h.mapping=Ar),h}function l(h){let p=0,f=6;for(let y=0;y<f;y++)h[y]!==void 0&&p++;return p===f}function c(h){let p=h.target;p.removeEventListener("dispose",c);let f=e.get(p);f!==void 0&&(e.delete(p),f.dispose())}function u(h){let p=h.target;p.removeEventListener("dispose",u);let f=t.get(p);f!==void 0&&(t.delete(p),f.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function Ly(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Xr("WebGLRenderer: "+i+" extension not supported."),r}}}function Dy(n,e,t,i){let r={},s=new WeakMap,a=new FinalizationRegistry(f=>delete r[f]);function o(f){l(f.target)}function l(f){f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete r[f.id],a.unregister(f);let y=s.get(f);y&&(e.remove(y),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function c(f,y){return r[y.id]!==void 0||(y.addEventListener("dispose",o),r[y.id]=new WeakRef(y),a.register(y,y.id,y),t.memory.geometries++),y}function u(f){let y=f.attributes;for(let m in y)e.update(y[m],n.ARRAY_BUFFER)}function d(f){let y=f.index,m=f.attributes.position,g=0;if(m===void 0)return;let _=y!==null?y.array.length:m.array.length/3-1,w=m.count>=65535?ts:es,S=new w(Math.ceil(_/3)*6,1),A=S.array;if(y!==null){let v=y.array;g=y.version;for(let M=0,L=0;M<_;M+=3){let C=v[M+0],k=v[M+1],N=v[M+2];A[L++]=C,A[L++]=k,A[L++]=k,A[L++]=N,A[L++]=N,A[L++]=C}}else{g=m.version;for(let v=0,M=0;v<_;v+=3){let L=v+0,C=v+1,k=v+2;A[M++]=L,A[M++]=C,A[M++]=C,A[M++]=k,A[M++]=k,A[M++]=L}}S.version=g;let E=s.get(f);E&&e.remove(E),s.set(f,S)}function h(f){let y=s.get(f);if(y){let m=f.index;m!==null&&y.version<m.version&&d(f)}else d(f);return s.get(f)}function p(){for(let f in r){let y=r[f].deref();y!==void 0&&l(y)}}return{get:c,update:u,getWireframeAttribute:h,dispose:p}}function ky(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,h){n.drawElements(i,h,s,d*a),t.update(h,i,1)}function c(d,h,p){p!==0&&(n.drawElementsInstanced(i,h,s,d*a,p),t.update(h,i,p))}function u(d,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,p);let y=0;for(let m=0;m<p;m++)y+=h[m];t.update(y,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Ny(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:De("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Oy(n,e,t){let i=new WeakMap,r=new dt;function s(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==d){let L=function(){v.dispose(),i.delete(o),o.removeEventListener("dispose",L)};h!==void 0&&h.texture.dispose();let p=o.morphAttributes.position!==void 0,f=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],w=0;p===!0&&(w=1),f===!0&&(w=2),y===!0&&(w=3);let S=o.attributes.position.count*w,A=1;S>e.maxTextureSize&&(A=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let E=new Float32Array(S*A*4*d),v=new $r(E,S,A,d);v.type=Ri,v.needsUpdate=!0;let M=w*4;for(let C=0;C<d;C++){let k=m[C],N=g[C],V=_[C],P=S*A*4*C;for(let H=0;H<k.count;H++){let q=H*M;p===!0&&(r.fromBufferAttribute(k,H),E[P+q+0]=r.x,E[P+q+1]=r.y,E[P+q+2]=r.z,E[P+q+3]=0),f===!0&&(r.fromBufferAttribute(N,H),E[P+q+4]=r.x,E[P+q+5]=r.y,E[P+q+6]=r.z,E[P+q+7]=0),y===!0&&(r.fromBufferAttribute(V,H),E[P+q+8]=r.x,E[P+q+9]=r.y,E[P+q+10]=r.z,E[P+q+11]=V.itemSize===4?r.w:1)}}h={count:d,texture:v,size:new He(S,A)},i.set(o,h),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];let f=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",f),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function Uy(n,e,t,i,r){let s=new WeakMap;function a(c){let u=r.render.frame,d=c.geometry,h=e.get(c,d);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return h}function o(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var Fy={[Gl]:"LINEAR_TONE_MAPPING",[Hl]:"REINHARD_TONE_MAPPING",[Vl]:"CINEON_TONE_MAPPING",[Wl]:"ACES_FILMIC_TONE_MAPPING",[Yl]:"AGX_TONE_MAPPING",[ql]:"NEUTRAL_TONE_MAPPING",[Xl]:"CUSTOM_TONE_MAPPING"};function By(n,e,t,i,r,s){let a=new oi(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new Vt;u.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new st([0,2,0,0,2,0],2));let d=new Pa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new we(u,d),p=new ms(-1,1,1,-1,0,1),f=null,y=null,m=!1,g,_=null,w=[],S=!1;this.setSize=function(A,E){a.setSize(A,E),o!==null&&o.setSize(A,E),l!==null&&l.setSize(A,E);for(let v=0;v<w.length;v++){let M=w[v];M.setSize&&M.setSize(A,E)}},this.setEffects=function(A){w=A,S=w.length>0&&w[0].isRenderPass===!0;let E=a.width,v=a.height;w.length>0&&o===null&&(o=new oi(E,v,{type:Ci,depthBuffer:!1,stencilBuffer:!1}),l=new oi(E,v,{type:Ci,depthBuffer:!1,stencilBuffer:!1}));let M=r===!0&&w.some(L=>L.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new on(E,v),s===!0&&(c.format=cn,c.type=Kn)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let L=0;L<w.length;L++){let C=w[L];C.setSize&&C.setSize(E,v),M&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(A,E){if(m||A.toneMapping===Bi&&w.length===0)return!1;if(_=E,E!==null){let v=E.width,M=E.height;(a.width!==v||a.height!==M)&&this.setSize(v,M)}return S===!1&&A.setRenderTarget(a),g=A.toneMapping,A.toneMapping=Bi,!0},this.hasRenderPass=function(){return S},this.end=function(A,E){A.toneMapping=g,m=!0;let v=a,M=o;for(let L=0;L<w.length;L++){let C=w[L];C.enabled!==!1&&(C.render(A,M,v,E),C.needsSwap!==!1&&(v=M,M=M===o?l:o))}if(f!==A.outputColorSpace||y!==A.toneMapping){f=A.outputColorSpace,y=A.toneMapping,d.defines={},Ze.getTransfer(f)===et&&(d.defines.SRGB_TRANSFER="");let L=Fy[y];L&&(d.defines[L]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=v.texture,A.setRenderTarget(_),A.render(h,p),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}var Cu=new ei,Pu=new on(1,1),Iu=new ss(1),Lu=new $r,Du=new Aa,ku=new rs,lu=[],cu=[],hu=new Float32Array(16),du=new Float32Array(9),uu=new Float32Array(4);function Pr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=lu[r];if(s===void 0&&(s=new Float32Array(r),lu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function No(n,e){let t=cu[e];t===void 0&&(t=new Int32Array(e),cu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function zy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Gy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2fv(this.addr,e),wt(t,e)}}function Hy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;n.uniform3fv(this.addr,e),wt(t,e)}}function Vy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4fv(this.addr,e),wt(t,e)}}function Wy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(Mt(t,i))return;uu.set(i),n.uniformMatrix2fv(this.addr,!1,uu),wt(t,i)}}function Xy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(Mt(t,i))return;du.set(i),n.uniformMatrix3fv(this.addr,!1,du),wt(t,i)}}function Yy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(Mt(t,i))return;hu.set(i),n.uniformMatrix4fv(this.addr,!1,hu),wt(t,i)}}function qy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ky(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2iv(this.addr,e),wt(t,e)}}function Zy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3iv(this.addr,e),wt(t,e)}}function $y(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4iv(this.addr,e),wt(t,e)}}function Jy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function jy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2uiv(this.addr,e),wt(t,e)}}function Qy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3uiv(this.addr,e),wt(t,e)}}function eg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4uiv(this.addr,e),wt(t,e)}}function Oo(n){return n.version===0&&(n.compareFunction=rc,n.needsUpdate=!0),n}function tg(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?s=Oo(Pu):s=Cu,t.setTexture2D(e||s,r)}function ig(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Du,r)}function ng(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_CUBE_SHADOW?s=Oo(Iu):s=ku,t.setTextureCube(e||s,r)}function rg(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Lu,r)}function sg(n){switch(n){case 5126:return zy;case 35664:return Gy;case 35665:return Hy;case 35666:return Vy;case 35674:return Wy;case 35675:return Xy;case 35676:return Yy;case 5124:case 35670:return qy;case 35667:case 35671:return Ky;case 35668:case 35672:return Zy;case 35669:case 35673:return $y;case 5125:return Jy;case 36294:return jy;case 36295:return Qy;case 36296:return eg;case 35678:case 36198:case 36298:case 36306:case 35682:return tg;case 35679:case 36299:case 36307:return ig;case 35680:case 36300:case 36308:case 36293:return ng;case 36289:case 36303:case 36311:case 36292:return rg}}function ag(n,e){n.uniform1fv(this.addr,e)}function og(n,e){let t=Pr(e,this.size,2);n.uniform2fv(this.addr,t)}function lg(n,e){let t=Pr(e,this.size,3);n.uniform3fv(this.addr,t)}function cg(n,e){let t=Pr(e,this.size,4);n.uniform4fv(this.addr,t)}function hg(n,e){let t=Pr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function dg(n,e){let t=Pr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ug(n,e){let t=Pr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function fg(n,e){n.uniform1iv(this.addr,e)}function pg(n,e){n.uniform2iv(this.addr,e)}function mg(n,e){n.uniform3iv(this.addr,e)}function yg(n,e){n.uniform4iv(this.addr,e)}function gg(n,e){n.uniform1uiv(this.addr,e)}function vg(n,e){n.uniform2uiv(this.addr,e)}function _g(n,e){n.uniform3uiv(this.addr,e)}function xg(n,e){n.uniform4uiv(this.addr,e)}function bg(n,e,t){let i=this.cache,r=e.length,s=No(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Oo(Pu):a=Cu;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Sg(n,e,t){let i=this.cache,r=e.length,s=No(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Du,s[a])}function Mg(n,e,t){let i=this.cache,r=e.length,s=No(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=Oo(Iu):a=ku;for(let o=0;o!==r;++o)t.setTextureCube(e[o]||a,s[o])}function wg(n,e,t){let i=this.cache,r=e.length,s=No(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Lu,s[a])}function Tg(n){switch(n){case 5126:return ag;case 35664:return og;case 35665:return lg;case 35666:return cg;case 35674:return hg;case 35675:return dg;case 35676:return ug;case 5124:case 35670:return fg;case 35667:case 35671:return pg;case 35668:case 35672:return mg;case 35669:case 35673:return yg;case 5125:return gg;case 36294:return vg;case 36295:return _g;case 36296:return xg;case 35678:case 36198:case 36298:case 36306:case 35682:return bg;case 35679:case 36299:case 36307:return Sg;case 35680:case 36300:case 36308:case 36293:return Mg;case 36289:case 36303:case 36311:case 36292:return wg}}var pc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=sg(t.type)}},mc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tg(t.type)}},yc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],i)}}},uc=/(\w+)(\])?(\[|\.)?/g;function fu(n,e){n.seq.push(e),n.map[e.id]=e}function Eg(n,e,t){let i=n.name,r=i.length;for(uc.lastIndex=0;;){let s=uc.exec(i),a=uc.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){fu(t,c===void 0?new pc(o,n,e):new mc(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new yc(o),fu(t,d)),t=d}}}var Cr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Eg(o,l,this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&i.push(a)}return i}};function pu(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Ag=37297,Rg=0;function Cg(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var mu=new ke;function Pg(n){Ze._getMatrix(mu,Ze.workingColorSpace,n);let e=`mat3( ${mu.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case Kr:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function yu(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Cg(n.getShaderSource(e),o)}else return s}function Ig(n,e){let t=Pg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Lg={[Gl]:"Linear",[Hl]:"Reinhard",[Vl]:"Cineon",[Wl]:"ACESFilmic",[Yl]:"AgX",[ql]:"Neutral",[Xl]:"Custom"};function Dg(n,e){let t=Lg[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Lo=new U;function kg(){Ze.getLuminanceCoefficients(Lo);let n=Lo.x.toFixed(4),e=Lo.y.toFixed(4),t=Lo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ng(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rs).join(`
`)}function Og(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Ug(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),a=s.name,o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Rs(n){return n!==""}function gu(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function vu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Fg=/^[ \t]*#include +<([\w\d./]+)>/gm;function gc(n){return n.replace(Fg,Bg)}function Bg(n,e){let t=Ve[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return gc(t)}var zg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _u(n){return n.replace(zg,Gg)}function Gg(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Hg={[vs]:"SHADOWMAP_TYPE_PCF",[Tr]:"SHADOWMAP_TYPE_VSM"};function Vg(n){return Hg[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Wg={[Ar]:"ENVMAP_MODE_REFRACTION"};function Xg(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Wg[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Yg={[zl]:"ENVMAP_BLENDING_MULTIPLY",[Ud]:"ENVMAP_BLENDING_MIX",[Fd]:"ENVMAP_BLENDING_ADD"};function qg(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Yg[n.combine]||"ENVMAP_BLENDING_NONE"}function Kg(n,e,t,i){let r=n.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Vg(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Xg(t),d=qg(t),h=Ng(t),p=Og(s),f=r.createProgram(),y,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Rs).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Rs).join(`
`),m.length>0&&(m+=`
`)):(y=[xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),m=[xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bi?"#define TONE_MAPPING":"",t.toneMapping!==Bi?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Bi?Dg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Ig("linearToOutputTexel",t.outputColorSpace),kg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rs).join(`
`)),a=gc(a),a=gu(a,t),a=vu(a,t),o=gc(o),o=gu(o,t),o=vu(o,t),a=_u(a),o=_u(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,y=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",t.glslVersion===sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=g+y+a,w=g+m+o,S=pu(r,r.VERTEX_SHADER,_),A=pu(r,r.FRAGMENT_SHADER,w);r.attachShader(f,S),r.attachShader(f,A),t.index0AttributeName!==void 0?r.bindAttribLocation(f,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(f,0,"position"),r.linkProgram(f);function E(C){if(n.debug.checkShaderErrors){let k=r.getProgramInfoLog(f)||"",N=r.getShaderInfoLog(S)||"",V=r.getShaderInfoLog(A)||"",P=k.trim(),H=N.trim(),q=V.trim(),G=!0,ne=!0;if(r.getProgramParameter(f,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,f,S,A);else{let Y=yu(r,S,"vertex"),ee=yu(r,A,"fragment");De("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(f,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+P+`
`+Y+`
`+ee)}else P!==""?Le("WebGLProgram: Program Info Log:",P):(H===""||q==="")&&(ne=!1);ne&&(C.diagnostics={runnable:G,programLog:P,vertexShader:{log:H,prefix:y},fragmentShader:{log:q,prefix:m}})}r.deleteShader(S),r.deleteShader(A),v=new Cr(r,f),M=Ug(r,f)}let v;this.getUniforms=function(){return v===void 0&&E(this),v};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(f,Ag)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Rg++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=S,this.fragmentShader=A,this}var Zg=0,vc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new _c(e),t.set(e,i)),i}},_c=class{constructor(e){this.id=Zg++,this.code=e,this.usedTimes=0}};function $g(n){return n===Pn||n===ws||n===Ts}function Jg(n,e,t,i,r,s){let a=new Jr,o=new vc,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function f(v,M,L,C,k,N){let V=C.fog,P=k.geometry,H=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,G=e.get(v.envMap||H,q),ne=h[v.type],Y=i.precision;v.precision!==null&&(Y=i.getMaxPrecision(v.precision),Y!==v.precision&&Le("WebGLProgram.getParameters:",v.precision,"not supported, using",Y,"instead."));let ee=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,te=ee!==void 0?ee.length:0,Te=0;P.morphAttributes.position!==void 0&&(Te=1),P.morphAttributes.normal!==void 0&&(Te=2),P.morphAttributes.color!==void 0&&(Te=3);let Oe,$,ye,be;if(ne){let pe=Gi[ne];Oe=pe.vertexShader,$=pe.fragmentShader}else{Oe=v.vertexShader,$=v.fragmentShader;let pe=o.getVertexShaderStage(v),it=o.getFragmentShaderStage(v);o.update(v,pe,it),ye=pe.id,be=it.id}let Ce=n.getRenderTarget(),ge=n.state.buffers.depth.getReversed(),Be=k.isInstancedMesh===!0,yt=k.isBatchedMesh===!0,Ie=!!v.map,tt=!!v.matcap,nt=!!G,Ye=nt&&G.isPMREMTexture===!0,Lt=!!v.aoMap,bt=!!v.lightMap,jt=!!v.bumpMap&&v.wireframe===!1,ut=!!v.normalMap,Ii=!!v.displacementMap,Et=!!v.emissiveMap,ci=!!v.metalnessMap,hi=!!v.roughnessMap,di=v.anisotropy>0,D=v.clearcoat>0,ui=v.diffuseRoughness>0,ct=v.dispersion>0,ht=v.retroreflectivity>0,fe=v.iridescence>0,St=v.sheen>0,Pe=v.transmission>0,Ne=di&&!!v.anisotropyMap,T=D&&!!v.clearcoatMap,x=D&&!!v.clearcoatNormalMap,F=D&&!!v.clearcoatRoughnessMap,ie=ui&&!!v.diffuseRoughnessMap,j=fe&&!!v.iridescenceMap,ae=fe&&!!v.iridescenceThicknessMap,de=St&&!!v.sheenColorMap,K=St&&!!v.sheenRoughnessMap,Z=!!v.specularMap,le=!!v.specularColorMap,R=!!v.specularIntensityMap,J=Pe&&!!v.transmissionMap,W=Pe&&!!v.thicknessMap,ce=!!v.gradientMap,se=!!v.alphaMap,oe=v.alphaTest>0,Ae=!!v.alphaHash,Ge=!!v.extensions,re=Bi;v.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(re=n.toneMapping);let Re=Ye?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,ze={shaderID:ne,shaderType:v.type,shaderName:v.name,vertexShader:Oe,fragmentShader:$,defines:v.defines,customVertexShaderID:ye,customFragmentShaderID:be,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:Y,batching:yt,batchingColor:yt&&k._colorsTexture!==null,instancing:Be,instancingColor:Be&&k.instanceColor!==null,instancingMorph:Be&&k.morphTexture!==null,outputColorSpace:Ce===null?n.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ie,matcap:tt,envMap:nt,envMapMode:nt&&G.mapping,envMapPMREM:Ye,envMapMaxLod:Ye?Re.length-1:null,envMapSize:Ye?Re[0].width:null,aoMap:Lt,lightMap:bt,bumpMap:jt,normalMap:ut,displacementMap:Ii,emissiveMap:Et,normalMapObjectSpace:ut&&v.normalMapType===Gd,normalMapTangentSpace:ut&&v.normalMapType===Po,packedNormalMap:ut&&v.normalMapType===Po&&$g(v.normalMap.format),metalnessMap:ci,roughnessMap:hi,anisotropy:di,anisotropyMap:Ne,clearcoat:D,clearcoatMap:T,clearcoatNormalMap:x,clearcoatRoughnessMap:F,diffuseRoughness:ui,diffuseRoughnessMap:ie,dispersion:ct,retroreflection:ht,iridescence:fe,iridescenceMap:j,iridescenceThicknessMap:ae,sheen:St,sheenColorMap:de,sheenRoughnessMap:K,specularMap:Z,specularColorMap:le,specularIntensityMap:R,transmission:Pe,transmissionMap:J,thicknessMap:W,gradientMap:ce,opaque:v.transparent===!1&&v.blending===Er&&v.alphaToCoverage===!1,alphaMap:se,alphaTest:oe,alphaHash:Ae,combine:v.combine,mapUv:Ie&&p(v.map.channel),aoMapUv:Lt&&p(v.aoMap.channel),lightMapUv:bt&&p(v.lightMap.channel),bumpMapUv:jt&&p(v.bumpMap.channel),normalMapUv:ut&&p(v.normalMap.channel),displacementMapUv:Ii&&p(v.displacementMap.channel),emissiveMapUv:Et&&p(v.emissiveMap.channel),metalnessMapUv:ci&&p(v.metalnessMap.channel),roughnessMapUv:hi&&p(v.roughnessMap.channel),anisotropyMapUv:Ne&&p(v.anisotropyMap.channel),clearcoatMapUv:T&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:x&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:F&&p(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ie&&p(v.diffuseRoughnessMap.channel),iridescenceMapUv:j&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:de&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:K&&p(v.sheenRoughnessMap.channel),specularMapUv:Z&&p(v.specularMap.channel),specularColorMapUv:le&&p(v.specularColorMap.channel),specularIntensityMapUv:R&&p(v.specularIntensityMap.channel),transmissionMapUv:J&&p(v.transmissionMap.channel),thicknessMapUv:W&&p(v.thicknessMap.channel),alphaMapUv:se&&p(v.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(ut||di),vertexNormals:!!P.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!P.attributes.uv&&(Ie||se),fog:!!V,useFog:v.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||P.attributes.normal===void 0&&ut===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ge,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:Te,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:N.filter(pe=>pe.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:re,decodeVideoTexture:Ie&&v.map.isVideoTexture===!0&&Ze.getTransfer(v.map.colorSpace)===et,decodeVideoTextureEmissive:Et&&v.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(v.emissiveMap.colorSpace)===et,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Fi,flipSided:v.side===Jt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ge&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&v.extensions.multiDraw===!0||yt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ze.vertexUv1s=l.has(1),ze.vertexUv2s=l.has(2),ze.vertexUv3s=l.has(3),l.clear(),ze}function y(v){let M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(let L in v.defines)M.push(L),M.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(m(M,v),g(M,v),M.push(n.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function m(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapPMREM),v.push(M.envMapMaxLod),v.push(M.envMapSize),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.diffuseRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.numSunLights),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numSunLightShadows),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.numLightProbeGrids),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function g(v,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function _(v){let M=h[v.type],L;if(M){let C=Gi[M];L=tu.clone(C.uniforms)}else L=v.uniforms;return L}function w(v,M){let L=u.get(M);return L!==void 0?++L.usedTimes:(L=new Kg(n,M,v,r),c.push(L),u.set(M,L)),L}function S(v){if(--v.usedTimes===0){let M=c.indexOf(v);c[M]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function A(v){o.remove(v)}function E(){o.dispose()}return{getParameters:f,getProgramCacheKey:y,getUniforms:_,acquireProgram:w,releaseProgram:S,releaseShaderCache:A,programs:c,dispose:E}}function jg(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Qg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function bu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Su(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,f,y,m,g){let _=n[e];return _===void 0?(_={id:h.id,object:h,geometry:p,material:f,materialVariant:a(h),groupOrder:y,renderOrder:h.renderOrder,z:m,group:g},n[e]=_):(_.id=h.id,_.object=h,_.geometry=p,_.material=f,_.materialVariant=a(h),_.groupOrder=y,_.renderOrder=h.renderOrder,_.z=m,_.group=g),e++,_}function l(h,p,f,y,m,g,_){_.reversedDepth===!0&&(m=-m);let w=o(h,p,f,y,m,g);f.transmission>0?i.push(w):f.transparent===!0?r.push(w):t.push(w)}function c(h,p,f,y,m,g){let _=o(h,p,f,y,m,g);f.transmission>0?i.unshift(_):f.transparent===!0?r.unshift(_):t.unshift(_)}function u(h,p){t.length>1&&t.sort(h||Qg),i.length>1&&i.sort(p||bu),r.length>1&&r.sort(p||bu)}function d(){for(let h=e,p=n.length;h<p;h++){let f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function e1(){let n=new WeakMap;function e(i,r){let s=n.get(i),a;return s===void 0?(a=new Su,n.set(i,[a])):r>=s.length?(a=new Su,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function t1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new Fe};break;case"SpotLight":t={position:new U,direction:new U,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function i1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var n1=0;function r1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function s1(n){let e=new t1,t=i1(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);let r=new U,s=new lt,a=new lt;function o(c){let u=0,d=0,h=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let p=0,f=0,y=0,m=0,g=0,_=0,w=0,S=0,A=0,E=0,v=0,M=0,L=0,C=0;c.sort(r1);for(let N=0,V=c.length;N<V;N++){let P=c[N],H=P.color,q=P.intensity,G=P.distance,ne=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Pn?ne=P.shadow.map.texture:ne=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=H.r*q,d+=H.g*q,h+=H.b*q;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(P.sh.coefficients[Y],q);C++}else if(P.isSunLight){let Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ee=P.shadow,te=t.get(P);te.shadowIntensity=ee.intensity,te.shadowBias=ee.bias,te.shadowNormalBias=ee.normalBias,te.shadowRadius=ee.radius,te.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),i.sunShadow[f]=te,i.sunShadowMap[f]=ne;let Te=ee.getViewportCount();for(let Oe=0;Oe<Te;Oe++)i.sunShadowMatrix[y+Oe]=ee.getMatrix(Oe),i.sunShadowCascade[y+Oe]=ee._cascadeData[Oe];y+=Te,f++}i.sun[p]=Y,p++}else if(P.isDirectionalLight){let Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ee=P.shadow,te=t.get(P);te.shadowIntensity=ee.intensity,te.shadowBias=ee.bias,te.shadowNormalBias=ee.normalBias,te.shadowRadius=ee.radius,te.shadowMapSize=ee.mapSize,i.directionalShadow[m]=te,i.directionalShadowMap[m]=ne,i.directionalShadowMatrix[m]=P.shadow.matrix,A++}i.directional[m]=Y,m++}else if(P.isSpotLight){let Y=e.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(H).multiplyScalar(q),Y.distance=G,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,i.spot[_]=Y;let ee=P.shadow;if(P.map&&(i.spotLightMap[M]=P.map,M++,ee.updateMatrices(P),P.castShadow&&L++),i.spotLightMatrix[_]=ee.matrix,P.castShadow){let te=t.get(P);te.shadowIntensity=ee.intensity,te.shadowBias=ee.bias,te.shadowNormalBias=ee.normalBias,te.shadowRadius=ee.radius,te.shadowMapSize=ee.mapSize,i.spotShadow[_]=te,i.spotShadowMap[_]=ne,v++}_++}else if(P.isRectAreaLight){let Y=e.get(P);Y.color.copy(H).multiplyScalar(q),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),i.rectArea[w]=Y,w++}else if(P.isPointLight){let Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){let ee=P.shadow,te=t.get(P);te.shadowIntensity=ee.intensity,te.shadowBias=ee.bias,te.shadowNormalBias=ee.normalBias,te.shadowRadius=ee.radius,te.shadowMapSize=ee.mapSize,te.shadowCameraNear=ee.camera.near,te.shadowCameraFar=ee.camera.far,i.pointShadow[g]=te,i.pointShadowMap[g]=ne,i.pointShadowMatrix[g]=P.shadow.matrix,E++}i.point[g]=Y,g++}else if(P.isHemisphereLight){let Y=e.get(P);Y.skyColor.copy(P.color).multiplyScalar(q),Y.groundColor.copy(P.groundColor).multiplyScalar(q),i.hemi[S]=Y,S++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let k=i.hash;(k.sunLength!==p||k.directionalLength!==m||k.pointLength!==g||k.spotLength!==_||k.rectAreaLength!==w||k.hemiLength!==S||k.numSunShadows!==f||k.numDirectionalShadows!==A||k.numPointShadows!==E||k.numSpotShadows!==v||k.numSpotMaps!==M||k.numLightProbes!==C)&&(i.sun.length=p,i.directional.length=m,i.spot.length=_,i.rectArea.length=w,i.point.length=g,i.hemi.length=S,i.sunShadow.length=f,i.sunShadowMap.length=f,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=v,i.spotShadowMap.length=v,i.spotLightMatrix.length=v+M-L,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=C,k.sunLength=p,k.directionalLength=m,k.pointLength=g,k.spotLength=_,k.rectAreaLength=w,k.hemiLength=S,k.numSunShadows=f,k.numDirectionalShadows=A,k.numPointShadows=E,k.numSpotShadows=v,k.numSpotMaps=M,k.numLightProbes=C,i.version=n1++)}function l(c,u){let d=0,h=0,p=0,f=0,y=0,m=0,g=u.matrixWorldInverse;for(let _=0,w=c.length;_<w;_++){let S=c[_];if(S.isSunLight){let A=i.sun[d];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(g),d++}else if(S.isDirectionalLight){let A=i.directional[h];A.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(g),h++}else if(S.isSpotLight){let A=i.spot[f];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(g),A.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(g),f++}else if(S.isRectAreaLight){let A=i.rectArea[y];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(g),a.identity(),s.copy(S.matrixWorld),s.premultiply(g),a.extractRotation(s),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),y++}else if(S.isPointLight){let A=i.point[p];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(g),p++}else if(S.isHemisphereLight){let A=i.hemi[m];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:i}}function Mu(n){let e=new s1(n),t=[],i=[],r=[];function s(d){u.camera=d,t.length=0,i.length=0,r.length=0}function a(d){d.isLightProbeGrid?r.push(d):t.push(d)}function o(d){i.push(d)}function l(){e.setup(t),r.sort((d,h)=>d.priority-h.priority||d.id-h.id)}function c(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function a1(n){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new Mu(n),e.set(r,[o])):s>=a.length?(o=new Mu(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var o1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,l1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,c1=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],h1=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],wu=new lt,As=new U,fc=new U;function d1(n,e,t){let i=new wn,r=new He,s=new He,a=new dt,o=new Ia,l=new La,c={},u=t.maxTextureSize,d={[Cn]:Jt,[Jt]:Cn,[Fi]:Fi},h=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:o1,fragmentShader:l1}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let f=new Vt;f.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new we(f,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vs;let g=this.type;this.render=function(E,v,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===vd&&(Le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=vs);let L=n.getRenderTarget(),C=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Xn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let V=g!==this.type;V&&v.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(H=>H.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,H=E.length;P<H;P++){let q=E[P],G=q.shadow;if(G===void 0){Le("WebGLShadowMap:",q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);let ne=G.getFrameExtents();r.multiply(ne),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ne.x),r.x=s.x*ne.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ne.y),r.y=s.y*ne.y,G.mapSize.y=s.y));let Y=n.state.buffers.depth.getReversed();if(G.camera._reversedDepth=Y,G.map===null||V===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Tr){if(q.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new oi(r.x,r.y,{format:Pn,type:Ci,minFilter:$t,magFilter:$t,generateMipmaps:!1}),G.map.texture.name=q.name+".shadowMap",G.map.depthTexture=new on(r.x,r.y,Ri),G.map.depthTexture.name=q.name+".shadowMapDepth",G.map.depthTexture.format=rn,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Pt,G.map.depthTexture.magFilter=Pt}else q.isPointLight?(G.map=new Cs(r.x),G.map.depthTexture=new ss(r.x,Ai)):(G.map=new oi(r.x,r.y),G.map.depthTexture=new on(r.x,r.y,Ai)),G.map.depthTexture.name=q.name+".shadowMap",G.map.depthTexture.format=rn,this.type===vs?(G.map.depthTexture.compareFunction=Y?nc:ic,G.map.depthTexture.minFilter=$t,G.map.depthTexture.magFilter=$t):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Pt,G.map.depthTexture.magFilter=Pt);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==r.x||G.map.height!==r.y)&&G.map.setSize(r.x,r.y);let ee=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();q.isPointLight!==!0&&G.updateMatrices(q,M);let te=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:M.layers;for(let Te=0;Te<ee;Te++){let Oe=G.getCamera(Te);if(q.isPointLight){let $=G.camera,ye=G.matrix,be=q.distance||$.far;be!==$.far&&($.far=be,$.updateProjectionMatrix()),As.setFromMatrixPosition(q.matrixWorld),$.position.copy(As),fc.copy($.position),fc.add(c1[Te]),$.up.copy(h1[Te]),$.lookAt(fc),$.updateMatrixWorld(),ye.makeTranslation(-As.x,-As.y,-As.z),wu.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),G._frustum.setFromProjectionMatrix(wu,$.coordinateSystem,$.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,Te),n.clear();else{Te===0&&(n.setRenderTarget(G.map),n.clear());let $=G.getViewport(Te);a.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),N.viewport(a)}i=G.getFrustum(Te),S(v,M,Oe,q,te,this.type)}G.isPointLightShadow!==!0&&this.type===Tr&&_(G,M),G.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(L,C,k)};function _(E,v){let M=e.update(y);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null?E.mapPass=new oi(r.x,r.y,{format:Pn,type:Ci}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(v,null,M,h,y,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value.set(E.map.width,E.map.height),p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(v,null,M,p,y,null)}function w(E,v,M,L){let C=null,k=M.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(k!==void 0)C=k;else if(C=M.isPointLight===!0?l:o,n.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let N=C.uuid,V=v.uuid,P=c[N];P===void 0&&(P={},c[N]=P);let H=P[V];H===void 0&&(H=C.clone(),P[V]=H,v.addEventListener("dispose",A)),C=H}if(C.visible=v.visible,C.wireframe=v.wireframe,L===Tr?C.side=v.shadowSide!==null?v.shadowSide:v.side:C.side=v.shadowSide!==null?v.shadowSide:d[v.side],C.alphaMap=v.alphaMap,C.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,C.map=v.map,C.clipShadows=v.clipShadows,C.clippingPlanes=v.clippingPlanes,C.clipIntersection=v.clipIntersection,C.displacementMap=v.displacementMap,C.displacementScale=v.displacementScale,C.displacementBias=v.displacementBias,C.wireframeLinewidth=v.wireframeLinewidth,C.linewidth=v.linewidth,M.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let N=n.properties.get(C);N.light=M}return C}function S(E,v,M,L,C,k){if(E.visible===!1)return;if(E.layers.test(C)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&k===Tr)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,E.matrixWorld);let P=e.update(E),H=E.material;if(Array.isArray(H)){let q=P.groups;for(let G=0,ne=q.length;G<ne;G++){let Y=q[G],ee=H[Y.materialIndex];if(ee&&ee.visible){let te=w(E,ee,L,k);E.onBeforeShadow(n,E,v,M,P,te,Y),n.renderBufferDirect(M,null,P,te,E,Y),E.onAfterShadow(n,E,v,M,P,te,Y)}}}else if(H.visible){let q=w(E,H,L,k);E.onBeforeShadow(n,E,v,M,P,q,null),n.renderBufferDirect(M,null,P,q,E,null),E.onAfterShadow(n,E,v,M,P,q,null)}}let V=E.children;for(let P=0,H=V.length;P<H;P++)S(V[P],v,M,L,C,k)}function A(E){E.target.removeEventListener("dispose",A);for(let M in c){let L=c[M],C=E.target.uuid;C in L&&(L[C].dispose(),delete L[C])}}}function u1(n,e){function t(){let R=!1,J=new dt,W=null,ce=new dt(0,0,0,0);return{setMask:function(se){W!==se&&!R&&(n.colorMask(se,se,se,se),W=se)},setLocked:function(se){R=se},setClear:function(se,oe,Ae,Ge,re){re===!0&&(se*=Ge,oe*=Ge,Ae*=Ge),J.set(se,oe,Ae,Ge),ce.equals(J)===!1&&(n.clearColor(se,oe,Ae,Ge),ce.copy(J))},reset:function(){R=!1,W=null,ce.set(-1,0,0,0)}}}function i(){let R=!1,J=!1,W=null,ce=null,se=null;return{setReversed:function(oe){if(J!==oe){let Ae=e.get("EXT_clip_control");oe?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),J=oe;let Ge=se;se=null,this.setClear(Ge)}},getReversed:function(){return J},setTest:function(oe){oe?ge(n.DEPTH_TEST):Be(n.DEPTH_TEST)},setMask:function(oe){W!==oe&&!R&&(n.depthMask(oe),W=oe)},setFunc:function(oe){if(J&&(oe=jd[oe]),ce!==oe){switch(oe){case pa:n.depthFunc(n.NEVER);break;case ma:n.depthFunc(n.ALWAYS);break;case ya:n.depthFunc(n.LESS);break;case gr:n.depthFunc(n.LEQUAL);break;case ga:n.depthFunc(n.EQUAL);break;case va:n.depthFunc(n.GEQUAL);break;case _a:n.depthFunc(n.GREATER);break;case xa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=oe}},setLocked:function(oe){R=oe},setClear:function(oe){se!==oe&&(se=oe,J&&(oe=1-oe),n.clearDepth(oe))},reset:function(){R=!1,W=null,ce=null,se=null,J=!1}}}function r(){let R=!1,J=null,W=null,ce=null,se=null,oe=null,Ae=null,Ge=null,re=null;return{setTest:function(Re){R||(Re?ge(n.STENCIL_TEST):Be(n.STENCIL_TEST))},setMask:function(Re){J!==Re&&!R&&(n.stencilMask(Re),J=Re)},setFunc:function(Re,ze,pe){(W!==Re||ce!==ze||se!==pe)&&(n.stencilFunc(Re,ze,pe),W=Re,ce=ze,se=pe)},setOp:function(Re,ze,pe){(oe!==Re||Ae!==ze||Ge!==pe)&&(n.stencilOp(Re,ze,pe),oe=Re,Ae=ze,Ge=pe)},setLocked:function(Re){R=Re},setClear:function(Re){re!==Re&&(n.clearStencil(Re),re=Re)},reset:function(){R=!1,J=null,W=null,ce=null,se=null,oe=null,Ae=null,Ge=null,re=null}}}let s=new t,a=new i,o=new r,l={},c=new WeakMap,u={},d={},h={},p=new WeakMap,f=[],y=null,m=!1,g=null,_=null,w=null,S=null,A=null,E=null,v=null,M=new Fe(0,0,0),L=0,C=!1,k=null,N=null,V=null,P=null,H=null,q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,ne=0,Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(Y)[1]),G=ne>=1):Y.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),G=ne>=2);let ee=null,te={},Te=n.getParameter(n.SCISSOR_BOX),Oe=n.getParameter(n.VIEWPORT),$=new dt().fromArray(Te),ye=new dt().fromArray(Oe);function be(R,J,W,ce){let se=new Uint8Array(4),oe=n.createTexture();n.bindTexture(R,oe),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ae=0;Ae<W;Ae++)R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY?n.texImage3D(J,0,n.RGBA,1,1,ce,0,n.RGBA,n.UNSIGNED_BYTE,se):n.texImage2D(J+Ae,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,se);return oe}let Ce={};Ce[n.TEXTURE_2D]=be(n.TEXTURE_2D,n.TEXTURE_2D,1),Ce[n.TEXTURE_CUBE_MAP]=be(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ce[n.TEXTURE_2D_ARRAY]=be(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ce[n.TEXTURE_3D]=be(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ge(n.DEPTH_TEST),a.setFunc(gr),jt(!1),ut(kl),ge(n.CULL_FACE),Lt(Xn);function ge(R){u[R]!==!0&&(n.enable(R),u[R]=!0)}function Be(R){u[R]!==!1&&(n.disable(R),u[R]=!1)}function yt(R,J){return h[R]!==J?(n.bindFramebuffer(R,J),h[R]=J,R===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=J),R===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=J),!0):!1}function Ie(R,J){let W=f,ce=!1;if(R){W=p.get(J),W===void 0&&(W=[],p.set(J,W));let se=R.textures;if(W.length!==se.length||W[0]!==n.COLOR_ATTACHMENT0){for(let oe=0,Ae=se.length;oe<Ae;oe++)W[oe]=n.COLOR_ATTACHMENT0+oe;W.length=se.length,ce=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,ce=!0);ce&&n.drawBuffers(W)}function tt(R){return y!==R?(n.useProgram(R),y=R,!0):!1}let nt={[Yn]:n.FUNC_ADD,[xd]:n.FUNC_SUBTRACT,[bd]:n.FUNC_REVERSE_SUBTRACT};nt[Sd]=n.MIN,nt[Md]=n.MAX;let Ye={[wd]:n.ZERO,[Td]:n.ONE,[Ed]:n.SRC_COLOR,[Fl]:n.SRC_ALPHA,[Ld]:n.SRC_ALPHA_SATURATE,[Pd]:n.DST_COLOR,[Rd]:n.DST_ALPHA,[Ad]:n.ONE_MINUS_SRC_COLOR,[Bl]:n.ONE_MINUS_SRC_ALPHA,[Id]:n.ONE_MINUS_DST_COLOR,[Cd]:n.ONE_MINUS_DST_ALPHA,[Dd]:n.CONSTANT_COLOR,[kd]:n.ONE_MINUS_CONSTANT_COLOR,[Nd]:n.CONSTANT_ALPHA,[Od]:n.ONE_MINUS_CONSTANT_ALPHA};function Lt(R,J,W,ce,se,oe,Ae,Ge,re,Re){if(R===Xn){m===!0&&(Be(n.BLEND),m=!1);return}if(m===!1&&(ge(n.BLEND),m=!0),R!==_d){if(R!==g||Re!==C){if((_!==Yn||A!==Yn)&&(n.blendEquation(n.FUNC_ADD),_=Yn,A=Yn),Re)switch(R){case Er:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nl:n.blendFunc(n.ONE,n.ONE);break;case Ol:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ul:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:De("WebGLState: Invalid blending: ",R);break}else switch(R){case Er:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ol:De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ul:De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:De("WebGLState: Invalid blending: ",R);break}w=null,S=null,E=null,v=null,M.set(0,0,0),L=0,g=R,C=Re}return}se=se||J,oe=oe||W,Ae=Ae||ce,(J!==_||se!==A)&&(n.blendEquationSeparate(nt[J],nt[se]),_=J,A=se),(W!==w||ce!==S||oe!==E||Ae!==v)&&(n.blendFuncSeparate(Ye[W],Ye[ce],Ye[oe],Ye[Ae]),w=W,S=ce,E=oe,v=Ae),(Ge.equals(M)===!1||re!==L)&&(n.blendColor(Ge.r,Ge.g,Ge.b,re),M.copy(Ge),L=re),g=R,C=!1}function bt(R,J){R.side===Fi?Be(n.CULL_FACE):ge(n.CULL_FACE);let W=R.side===Jt;J&&(W=!W),jt(W),R.blending===Er&&R.transparent===!1?Lt(Xn):Lt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),s.setMask(R.colorWrite);let ce=R.stencilWrite;o.setTest(ce),ce&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Et(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ge(n.SAMPLE_ALPHA_TO_COVERAGE):Be(n.SAMPLE_ALPHA_TO_COVERAGE)}function jt(R){k!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),k=R)}function ut(R){R!==yd?(ge(n.CULL_FACE),R!==N&&(R===kl?n.cullFace(n.BACK):R===gd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Be(n.CULL_FACE),N=R}function Ii(R){R!==V&&(G&&n.lineWidth(R),V=R)}function Et(R,J,W){R?(ge(n.POLYGON_OFFSET_FILL),(P!==J||H!==W)&&(P=J,H=W,a.getReversed()&&(J=-J,W=-W),n.polygonOffset(J,W))):Be(n.POLYGON_OFFSET_FILL)}function ci(R){R?ge(n.SCISSOR_TEST):Be(n.SCISSOR_TEST)}function hi(R){R===void 0&&(R=n.TEXTURE0+q-1),ee!==R&&(n.activeTexture(R),ee=R)}function di(R,J,W){W===void 0&&(ee===null?W=n.TEXTURE0+q-1:W=ee);let ce=te[W];ce===void 0&&(ce={type:void 0,texture:void 0},te[W]=ce),(ce.type!==R||ce.texture!==J)&&(ee!==W&&(n.activeTexture(W),ee=W),n.bindTexture(R,J||Ce[R]),ce.type=R,ce.texture=J)}function D(){let R=te[ee];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function ui(){try{n.compressedTexImage2D(...arguments)}catch(R){De("WebGLState:",R)}}function ct(){try{n.compressedTexImage3D(...arguments)}catch(R){De("WebGLState:",R)}}function ht(){try{n.texSubImage2D(...arguments)}catch(R){De("WebGLState:",R)}}function fe(){try{n.texSubImage3D(...arguments)}catch(R){De("WebGLState:",R)}}function St(){try{n.compressedTexSubImage2D(...arguments)}catch(R){De("WebGLState:",R)}}function Pe(){try{n.compressedTexSubImage3D(...arguments)}catch(R){De("WebGLState:",R)}}function Ne(){try{n.texStorage2D(...arguments)}catch(R){De("WebGLState:",R)}}function T(){try{n.texStorage3D(...arguments)}catch(R){De("WebGLState:",R)}}function x(){try{n.texImage2D(...arguments)}catch(R){De("WebGLState:",R)}}function F(){try{n.texImage3D(...arguments)}catch(R){De("WebGLState:",R)}}function ie(R){return d[R]!==void 0?d[R]:n.getParameter(R)}function j(R,J){d[R]!==J&&(n.pixelStorei(R,J),d[R]=J)}function ae(R){$.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),$.copy(R))}function de(R){ye.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),ye.copy(R))}function K(R,J){let W=c.get(J);W===void 0&&(W=new WeakMap,c.set(J,W));let ce=W.get(R);ce===void 0&&(ce=n.getUniformBlockIndex(J,R.name),n.uniformBlockBinding(J,ce,ce),W.set(R,ce))}function Z(R,J,W){let se=c.get(J).get(R);l[se]!==W&&(n.bindBufferBase(n.UNIFORM_BUFFER,se,W),l[se]=W)}function le(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},ee=null,te={},h={},l={},p=new WeakMap,f=[],y=null,m=!1,g=null,_=null,w=null,S=null,A=null,E=null,v=null,M=new Fe(0,0,0),L=0,C=!1,k=null,N=null,V=null,P=null,H=null,$.set(0,0,n.canvas.width,n.canvas.height),ye.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ge,disable:Be,bindFramebuffer:yt,drawBuffers:Ie,useProgram:tt,setBlending:Lt,setMaterial:bt,setFlipSided:jt,setCullFace:ut,setLineWidth:Ii,setPolygonOffset:Et,setScissorTest:ci,activeTexture:hi,bindTexture:di,unbindTexture:D,compressedTexImage2D:ui,compressedTexImage3D:ct,texImage2D:x,texImage3D:F,pixelStorei:j,getParameter:ie,updateUBOMapping:K,uniformBlockBinding:Z,texStorage2D:Ne,texStorage3D:T,texSubImage2D:ht,texSubImage3D:fe,compressedTexSubImage2D:St,compressedTexSubImage3D:Pe,scissor:ae,viewport:de,reset:le}}function f1(n,e,t,i,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new He,u=new WeakMap,d=new Set,h,p=new WeakMap,f=new Set,y=new FinalizationRegistry(T=>f.delete(T)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return m?new OffscreenCanvas(T,x):Zr("canvas")}function _(T,x,F){let ie=1,j=Ne(T);if((j.width>F||j.height>F)&&(ie=F/Math.max(j.width,j.height)),ie<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let ae=Math.floor(ie*j.width),de=Math.floor(ie*j.height);h===void 0&&(h=g(ae,de));let K=x?g(ae,de):h;return K.width=ae,K.height=de,K.getContext("2d").drawImage(T,0,0,ae,de),Le("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ae+"x"+de+")."),K}else return"data"in T&&Le("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function w(T){return T.generateMipmaps}function S(T){n.generateMipmap(T)}function A(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(T,x,F,ie,j,ae=!1){if(T!==null){if(n[T]!==void 0)return n[T];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let de;ie&&(de=e.get("EXT_texture_norm16"),de||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=x;if(x===n.RED&&(F===n.FLOAT&&(K=n.R32F),F===n.HALF_FLOAT&&(K=n.R16F),F===n.UNSIGNED_BYTE&&(K=n.R8),F===n.UNSIGNED_SHORT&&de&&(K=de.R16_EXT),F===n.SHORT&&de&&(K=de.R16_SNORM_EXT)),x===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(K=n.R8UI),F===n.UNSIGNED_SHORT&&(K=n.R16UI),F===n.UNSIGNED_INT&&(K=n.R32UI),F===n.BYTE&&(K=n.R8I),F===n.SHORT&&(K=n.R16I),F===n.INT&&(K=n.R32I)),x===n.RG&&(F===n.FLOAT&&(K=n.RG32F),F===n.HALF_FLOAT&&(K=n.RG16F),F===n.UNSIGNED_BYTE&&(K=n.RG8),F===n.UNSIGNED_SHORT&&de&&(K=de.RG16_EXT),F===n.SHORT&&de&&(K=de.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(K=n.RG8UI),F===n.UNSIGNED_SHORT&&(K=n.RG16UI),F===n.UNSIGNED_INT&&(K=n.RG32UI),F===n.BYTE&&(K=n.RG8I),F===n.SHORT&&(K=n.RG16I),F===n.INT&&(K=n.RG32I)),x===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(K=n.RGB8UI),F===n.UNSIGNED_SHORT&&(K=n.RGB16UI),F===n.UNSIGNED_INT&&(K=n.RGB32UI),F===n.BYTE&&(K=n.RGB8I),F===n.SHORT&&(K=n.RGB16I),F===n.INT&&(K=n.RGB32I)),x===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),F===n.UNSIGNED_INT&&(K=n.RGBA32UI),F===n.BYTE&&(K=n.RGBA8I),F===n.SHORT&&(K=n.RGBA16I),F===n.INT&&(K=n.RGBA32I)),x===n.RGB&&(F===n.UNSIGNED_SHORT&&de&&(K=de.RGB16_EXT),F===n.SHORT&&de&&(K=de.RGB16_SNORM_EXT),F===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),x===n.RGBA){let Z=ae?Kr:Ze.getTransfer(j);F===n.FLOAT&&(K=n.RGBA32F),F===n.HALF_FLOAT&&(K=n.RGBA16F),F===n.UNSIGNED_BYTE&&(K=Z===et?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT&&de&&(K=de.RGBA16_EXT),F===n.SHORT&&de&&(K=de.RGBA16_SNORM_EXT),F===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function v(T,x){let F;return T?x===null||x===Ai||x===Kn?F=n.DEPTH24_STENCIL8:x===Ri?F=n.DEPTH32F_STENCIL8:x===Rr&&(F=n.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ai||x===Kn?F=n.DEPTH_COMPONENT24:x===Ri?F=n.DEPTH_COMPONENT32F:x===Rr&&(F=n.DEPTH_COMPONENT16),F}function M(T,x){return w(T)===!0||T.isFramebufferTexture&&T.minFilter!==Pt&&T.minFilter!==$t?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function L(T){let x=new WeakRef(T);i.get(T).__ref=x,f.add(x),y.register(T,x,x)}function C(T){let x=i.get(T).__ref;x!==void 0&&(f.delete(x),y.unregister(x))}function k(T){V(T.target)}function N(T){P(T.target)}function V(T){T.removeEventListener("dispose",k),C(T),q(T),T.isVideoTexture&&u.delete(T),T.isHTMLTexture&&d.delete(T)}function P(T){T.removeEventListener("dispose",N),C(T),ne(T)}function H(){for(let T of f){let x=T.deref();x!==void 0&&(x.isRenderTarget===!0?P(x):V(x))}f.clear(),d.clear()}function q(T){let x=i.get(T);if(x.__webglInit===void 0)return;let F=T.source,ie=p.get(F);if(ie){let j=ie[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&G(T),Object.keys(ie).length===0&&p.delete(F)}i.remove(T)}function G(T){let x=i.get(T);n.deleteTexture(x.__webglTexture);let F=T.source,ie=p.get(F);delete ie[x.__cacheKey],a.memory.textures--}function ne(T){let x=i.get(T);x.__depthDisposeCallback&&x.__depthDisposeCallback();let F=T.depthTexture;if(F&&F.renderTarget===T&&V(F),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let ae=0;ae<x.__webglFramebuffer[j].length;ae++)n.deleteFramebuffer(x.__webglFramebuffer[j][ae]);else n.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)n.deleteFramebuffer(x.__webglFramebuffer[j]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let ie=T.textures;for(let j=0,ae=ie.length;j<ae;j++){let de=i.get(ie[j]);de.__webglTexture&&(n.deleteTexture(de.__webglTexture),a.memory.textures--),i.remove(ie[j])}i.remove(T)}let Y=0;function ee(){Y=0}function te(){return Y}function Te(T){Y=T}function Oe(){let T=Y;return T>=r.maxTextures&&Le("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+r.maxTextures),Y+=1,T}function $(T){let x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.mipmapsAutoUpdate),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function ye(T,x){let F=i.get(T);if(T.isVideoTexture&&St(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&F.__version!==T.version){let ie=T.image;if(ie===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{bt(F,T,x);return}}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+x)}function be(T,x){let F=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){bt(F,T,x);return}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+x)}function Ce(T,x){let F=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){bt(F,T,x);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+x)}function ge(T,x){let F=i.get(T);if(T.version>0&&F.__version!==T.version){jt(F,T,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+x)}let Be={[ba]:n.REPEAT,[Di]:n.CLAMP_TO_EDGE,[Sa]:n.MIRRORED_REPEAT},yt={[Pt]:n.NEAREST,[Bd]:n.NEAREST_MIPMAP_NEAREST,[_s]:n.NEAREST_MIPMAP_LINEAR,[$t]:n.LINEAR,[Ya]:n.LINEAR_MIPMAP_NEAREST,[ln]:n.LINEAR_MIPMAP_LINEAR},Ie={[Vd]:n.NEVER,[rc]:n.ALWAYS,[Wd]:n.LESS,[ic]:n.LEQUAL,[Xd]:n.EQUAL,[nc]:n.GEQUAL,[Yd]:n.GREATER,[qd]:n.NOTEQUAL};function tt(T,x){if(x.type===Ri&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===$t||x.magFilter===Ya||x.magFilter===_s||x.magFilter===ln||x.minFilter===$t||x.minFilter===Ya||x.minFilter===_s||x.minFilter===ln)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,Be[x.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,Be[x.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,Be[x.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,yt[x.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,yt[x.minFilter]),x.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Ie[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Pt||x.minFilter!==_s&&x.minFilter!==ln||x.type===Ri&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function nt(T,x){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",k),L(x));let ie=x.source,j=p.get(ie);j===void 0&&(j={},p.set(ie,j));let ae=$(x);if(ae!==T.__cacheKey){j[ae]===void 0&&(j[ae]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),j[ae].usedTimes++;let de=j[T.__cacheKey];de!==void 0&&(j[T.__cacheKey].usedTimes--,de.usedTimes===0&&G(x)),T.__cacheKey=ae,T.__webglTexture=j[ae].texture}return F}function Ye(T,x,F){return Math.floor(Math.floor(T/F)/x)}function Lt(T,x,F,ie){let ae=T.updateRanges;if(ae.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,F,ie,x.data);else{ae.sort((R,J)=>R.start-J.start);let de=0;for(let R=1;R<ae.length;R++){let J=ae[de],W=ae[R],ce=J.start+J.count,se=Ye(W.start,x.width,4),oe=Ye(J.start,x.width,4);W.start<=ce+1&&se===oe&&Ye(W.start+W.count-1,x.width,4)===se?J.count=Math.max(J.count,W.start+W.count-J.start):(++de,ae[de]=W)}ae.length=de+1;let K=t.getParameter(n.UNPACK_ROW_LENGTH),Z=t.getParameter(n.UNPACK_SKIP_PIXELS),le=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let R=0,J=ae.length;R<J;R++){let W=ae[R],ce=Math.floor(W.start/4),se=Math.ceil(W.count/4),oe=ce%x.width,Ae=Math.floor(ce/x.width),Ge=se,re=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ae),t.texSubImage2D(n.TEXTURE_2D,0,oe,Ae,Ge,re,F,ie,x.data)}T.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,K),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(n.UNPACK_SKIP_ROWS,le)}}function bt(T,x,F){let ie=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ie=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ie=n.TEXTURE_3D);let j=nt(T,x),ae=x.source;t.bindTexture(ie,T.__webglTexture,n.TEXTURE0+F);let de=i.get(ae);if(ae.version!==de.__version||j===!0){if(t.activeTexture(n.TEXTURE0+F),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let re=Ze.getPrimaries(Ze.workingColorSpace),Re=x.colorSpace===hn?null:Ze.getPrimaries(x.colorSpace),ze=x.colorSpace===hn||re===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let Z=_(x.image,!1,r.maxTextureSize);Z=Pe(x,Z);let le=s.convert(x.format,x.colorSpace),R=s.convert(x.type),J=E(x.internalFormat,le,R,x.normalized,x.colorSpace,x.isVideoTexture);tt(ie,x);let W,ce=x.mipmaps,se=x.isVideoTexture!==!0,oe=de.__version===void 0||j===!0,Ae=ae.dataReady,Ge=M(x,Z);if(x.isDepthTexture)J=v(x.format===cn,x.type),oe&&(se?t.texStorage2D(n.TEXTURE_2D,1,J,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,J,Z.width,Z.height,0,le,R,null));else if(x.isDataTexture)if(ce.length>0){se&&oe&&t.texStorage2D(n.TEXTURE_2D,Ge,J,ce[0].width,ce[0].height);for(let re=0,Re=ce.length;re<Re;re++)W=ce[re],se?Ae&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,W.width,W.height,le,R,W.data):t.texImage2D(n.TEXTURE_2D,re,J,W.width,W.height,0,le,R,W.data);x.generateMipmaps=!1}else se?(oe&&t.texStorage2D(n.TEXTURE_2D,Ge,J,Z.width,Z.height),Ae&&Lt(x,Z,le,R)):t.texImage2D(n.TEXTURE_2D,0,J,Z.width,Z.height,0,le,R,Z.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){se&&oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ge,J,ce[0].width,ce[0].height,Z.depth);for(let re=0,Re=ce.length;re<Re;re++)if(W=ce[re],x.format!==Pi)if(le!==null)if(se){if(Ae)if(x.layerUpdates.size>0){let ze=dc(W.width,W.height,x.format,x.type);for(let pe of x.layerUpdates){let it=W.data.subarray(pe*ze/W.data.BYTES_PER_ELEMENT,(pe+1)*ze/W.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,pe,W.width,W.height,1,le,it)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,W.width,W.height,Z.depth,le,W.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,J,W.width,W.height,Z.depth,0,W.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?Ae&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,W.width,W.height,Z.depth,le,R,W.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,J,W.width,W.height,Z.depth,0,le,R,W.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{se&&oe&&t.texStorage2D(n.TEXTURE_2D,Ge,J,ce[0].width,ce[0].height);for(let re=0,Re=ce.length;re<Re;re++)W=ce[re],x.format!==Pi?le!==null?se?Ae&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,W.width,W.height,le,W.data):t.compressedTexImage2D(n.TEXTURE_2D,re,J,W.width,W.height,0,W.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?Ae&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,W.width,W.height,le,R,W.data):t.texImage2D(n.TEXTURE_2D,re,J,W.width,W.height,0,le,R,W.data)}else if(x.isDataArrayTexture)if(se){if(oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ge,J,Z.width,Z.height,Z.depth),Ae)if(x.layerUpdates.size>0){let re=dc(Z.width,Z.height,x.format,x.type);for(let Re of x.layerUpdates){let ze=Z.data.subarray(Re*re/Z.data.BYTES_PER_ELEMENT,(Re+1)*re/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Re,Z.width,Z.height,1,le,R,ze)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,le,R,Z.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,J,Z.width,Z.height,Z.depth,0,le,R,Z.data);else if(x.isData3DTexture)se?(oe&&t.texStorage3D(n.TEXTURE_3D,Ge,J,Z.width,Z.height,Z.depth),Ae&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,le,R,Z.data)):t.texImage3D(n.TEXTURE_3D,0,J,Z.width,Z.height,Z.depth,0,le,R,Z.data);else if(x.isFramebufferTexture){if(oe)if(se)t.texStorage2D(n.TEXTURE_2D,Ge,J,Z.width,Z.height);else{let re=Z.width,Re=Z.height;for(let ze=0;ze<Ge;ze++)t.texImage2D(n.TEXTURE_2D,ze,J,re,Re,0,le,R,null),re>>=1,Re>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){let re=n.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),Z.parentNode!==re){re.appendChild(Z),d.add(x),re.onpaint=Re=>{let ze=Re.changedElements;for(let pe of d)ze.includes(pe.image)&&(pe.needsUpdate=!0)},re.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Z);else{let ze=n.RGBA,pe=n.RGBA,it=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ze,pe,it,Z)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ce.length>0){if(se&&oe){let re=Ne(ce[0]);t.texStorage2D(n.TEXTURE_2D,Ge,J,re.width,re.height)}for(let re=0,Re=ce.length;re<Re;re++)W=ce[re],se?Ae&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,le,R,W):t.texImage2D(n.TEXTURE_2D,re,J,le,R,W);x.generateMipmaps=!1}else if(se){if(oe){let re=Ne(Z);t.texStorage2D(n.TEXTURE_2D,Ge,J,re.width,re.height)}Ae&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le,R,Z)}else t.texImage2D(n.TEXTURE_2D,0,J,le,R,Z);w(x)&&x.mipmapsAutoUpdate===!0&&S(ie),de.__version=ae.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function jt(T,x,F){if(x.image.length!==6)return;let ie=nt(T,x),j=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+F);let ae=i.get(j);if(j.version!==ae.__version||ie===!0){t.activeTexture(n.TEXTURE0+F);let de=Ze.getPrimaries(Ze.workingColorSpace),K=x.colorSpace===hn?null:Ze.getPrimaries(x.colorSpace),Z=x.colorSpace===hn||de===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let le=x.isCompressedTexture||x.image[0].isCompressedTexture,R=x.image[0]&&x.image[0].isDataTexture,J=[];for(let pe=0;pe<6;pe++)!le&&!R?J[pe]=_(x.image[pe],!0,r.maxCubemapSize):J[pe]=R?x.image[pe].image:x.image[pe],J[pe]=Pe(x,J[pe]);let W=J[0],ce=s.convert(x.format,x.colorSpace),se=s.convert(x.type),oe=E(x.internalFormat,ce,se,x.normalized,x.colorSpace),Ae=x.isVideoTexture!==!0,Ge=ae.__version===void 0||ie===!0,re=j.dataReady,Re=M(x,W);tt(n.TEXTURE_CUBE_MAP,x);let ze;if(x.isDepthTexture){if(oe=v(x.format===cn,x.type),Ge)if(Ae)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,oe,W.width,W.height);else for(let pe=0;pe<6;pe++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,oe,W.width,W.height,0,ce,se,null)}else if(le){Ae&&Ge&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,oe,W.width,W.height);for(let pe=0;pe<6;pe++){ze=J[pe].mipmaps;for(let it=0;it<ze.length;it++){let At=ze[it];x.format!==Pi?ce!==null?Ae?re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,it,0,0,At.width,At.height,ce,At.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,it,oe,At.width,At.height,0,At.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,it,0,0,At.width,At.height,ce,se,At.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,it,oe,At.width,At.height,0,ce,se,At.data)}}}else{if(ze=x.mipmaps,Ae&&Ge){ze.length>0&&Re++;let pe=Ne(J[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,oe,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(R){Ae?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,J[pe].width,J[pe].height,ce,se,J[pe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,oe,J[pe].width,J[pe].height,0,ce,se,J[pe].data);for(let it=0;it<ze.length;it++){let un=ze[it].image[pe].image;Ae?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,it+1,0,0,un.width,un.height,ce,se,un.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,it+1,oe,un.width,un.height,0,ce,se,un.data)}}else{Ae?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ce,se,J[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,oe,ce,se,J[pe]);for(let it=0;it<ze.length;it++){let At=ze[it];Ae?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,it+1,0,0,ce,se,At.image[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,it+1,oe,ce,se,At.image[pe])}}}w(x)&&x.mipmapsAutoUpdate===!0&&S(n.TEXTURE_CUBE_MAP),ae.__version=j.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ut(T,x,F,ie,j,ae){let de=s.convert(F.format,F.colorSpace),K=s.convert(F.type),Z=E(F.internalFormat,de,K,F.normalized,F.colorSpace),le=i.get(x),R=i.get(F);if(R.__renderTarget=x,!le.__hasExternalTextures){let J=Math.max(1,x.width>>ae),W=Math.max(1,x.height>>ae);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,ae,Z,J,W,x.depth,0,de,K,null):t.texImage2D(j,ae,Z,J,W,0,de,K,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),fe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,j,R.__webglTexture,0,ht(x)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ie,j,R.__webglTexture,ae),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ii(T,x,F){if(n.bindRenderbuffer(n.RENDERBUFFER,T),x.depthBuffer){let ie=x.depthTexture,j=ie&&ie.isDepthTexture?ie.type:null,ae=v(x.stencilBuffer,j),de=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;fe(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ht(x),ae,x.width,x.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,ht(x),ae,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ae,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,T)}else{let ie=x.textures;for(let j=0;j<ie.length;j++){let ae=ie[j],de=s.convert(ae.format,ae.colorSpace),K=s.convert(ae.type),Z=E(ae.internalFormat,de,K,ae.normalized,ae.colorSpace);fe(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ht(x),Z,x.width,x.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,ht(x),Z,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Z,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Et(T,x,F){let ie=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=i.get(x.depthTexture);j.__renderTarget=x;let ae=ie?x.depthTexture.image[0]:x.depthTexture.image;(!j.__webglTexture||ae.width!==x.width||ae.height!==x.height)&&(ae.width=x.width,ae.height=x.height,x.depthTexture.needsUpdate=!0),ie?ge(x.depthTexture,0):ye(x.depthTexture,0);let de=j.__webglTexture,K=ht(x),Z=ie?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,le=x.depthTexture.format===cn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===rn)fe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,Z,de,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,le,Z,de,0);else if(x.depthTexture.format===cn)fe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,Z,de,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,le,Z,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ci(T){let x=i.get(T),F=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){let ie=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),ie){let j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,ie.removeEventListener("dispose",j)};ie.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=ie}if(T.depthTexture&&!x.__autoAllocateDepthBuffer)if(F)for(let ie=0;ie<6;ie++)Et(x.__webglFramebuffer[ie],T,ie);else T.texture.mipmaps.length>0?Et(x.__webglFramebuffer[0],T,0):Et(x.__webglFramebuffer,T,0);else if(F){x.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[ie]),x.__webglDepthbuffer[ie]===void 0)x.__webglDepthbuffer[ie]=n.createRenderbuffer(),Ii(x.__webglDepthbuffer[ie],T,!1);else{let j=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=x.__webglDepthbuffer[ie];n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,ae)}}else if(T.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Ii(x.__webglDepthbuffer,T,!1);else{let j=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,ae)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function hi(T,x,F){let ie=i.get(T);x!==void 0&&ut(ie.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&ci(T)}function di(T){let x=T.texture,F=i.get(T),ie=i.get(x);T.addEventListener("dispose",N),L(T);let j=T.textures,ae=T.isWebGLCubeRenderTarget===!0,de=j.length>1;if(de||(ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture()),ie.__version=x.version,a.memory.textures++),ae){F.__webglFramebuffer=[];for(let K=0;K<6;K++)if(x.mipmaps.length>0){F.__webglFramebuffer[K]=[];for(let Z=0;Z<x.mipmaps.length;Z++)F.__webglFramebuffer[K][Z]=n.createFramebuffer()}else F.__webglFramebuffer[K]=n.createFramebuffer()}else{if(x.mipmaps.length>0){F.__webglFramebuffer=[];for(let K=0;K<x.mipmaps.length;K++)F.__webglFramebuffer[K]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(de)for(let K=0,Z=j.length;K<Z;K++){let le=i.get(j[K]);le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&fe(T)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let K=0;K<j.length;K++){let Z=j[K];F.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[K]);let le=s.convert(Z.format,Z.colorSpace),R=s.convert(Z.type),J=E(Z.internalFormat,le,R,Z.normalized,Z.colorSpace,T.isXRRenderTarget===!0),W=ht(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,W,J,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,F.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Ii(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ae){t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),tt(n.TEXTURE_CUBE_MAP,x);for(let K=0;K<6;K++)if(x.mipmaps.length>0)for(let Z=0;Z<x.mipmaps.length;Z++)ut(F.__webglFramebuffer[K][Z],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Z);else ut(F.__webglFramebuffer[K],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);w(x)?S(n.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}else if(de){for(let K=0,Z=j.length;K<Z;K++){let le=j[K],R=i.get(le),J=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(J=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(J,R.__webglTexture),tt(J,le),ut(F.__webglFramebuffer,T,le,n.COLOR_ATTACHMENT0+K,J,0),w(le)&&S(J)}t.unbindTexture()}else{let K=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(K=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(K,ie.__webglTexture),tt(K,x),x.mipmaps.length>0)for(let Z=0;Z<x.mipmaps.length;Z++)ut(F.__webglFramebuffer[Z],T,x,n.COLOR_ATTACHMENT0,K,Z);else ut(F.__webglFramebuffer,T,x,n.COLOR_ATTACHMENT0,K,0);w(x)?S(K):x.mipmaps.length>0&&n.texParameteri(K,n.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}T.depthBuffer&&ci(T)}function D(T){let x=T.textures;for(let F=0,ie=x.length;F<ie;F++){let j=x[F];if(w(j)&&j.mipmapsAutoUpdate===!0){let ae=A(T),de=i.get(j).__webglTexture;t.bindTexture(ae,de),S(ae),t.unbindTexture()}}}let ui=[];function ct(T){if(T.samples>0){if(fe(T)===!1){let x=T.textures,F=T.width,ie=T.height,j=n.COLOR_BUFFER_BIT,ae=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(T),K=x.length>1;if(K)for(let le=0;le<x.length;le++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let le=0;le<x.length;le++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[le]);let R=i.get(x[le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,R,0)}n.blitFramebuffer(0,0,F,ie,0,0,F,ie,j,n.NEAREST),l===!0&&(ui.length=0,ui.push(n.COLOR_ATTACHMENT0+le),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&ui.push(ae),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ui))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let le=0;le<x.length;le++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,de.__webglColorRenderbuffer[le]);let R=i.get(x[le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,R,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let x=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function ht(T){return Math.min(r.maxSamples,T.samples)}function fe(T){let x=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function St(T){let x=a.render.frame;u.get(T)!==x&&(u.set(T,x),T.update())}function Pe(T,x){let F=T.colorSpace,ie=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==qr&&F!==hn&&(Ze.getTransfer(F)===et?(ie!==Pi||j!==ii)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):De("WebGLTextures: Unsupported texture color space:",F)),x}function Ne(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=Oe,this.resetTextureUnits=ee,this.getTextureUnits=te,this.setTextureUnits=Te,this.setTexture2D=ye,this.setTexture2DArray=be,this.setTexture3D=Ce,this.setTextureCube=ge,this.rebindTextures=hi,this.setupRenderTarget=di,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=ci,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=fe,this.dispose=H}function p1(n,e){function t(i,r=hn){let s,a=Ze.getTransfer(r);if(i===ii)return n.UNSIGNED_BYTE;if(i===Ka)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Za)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Jl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===jl)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Zl)return n.BYTE;if(i===$l)return n.SHORT;if(i===Rr)return n.UNSIGNED_SHORT;if(i===qa)return n.INT;if(i===Ai)return n.UNSIGNED_INT;if(i===Ri)return n.FLOAT;if(i===Ci)return n.HALF_FLOAT;if(i===Ql)return n.ALPHA;if(i===ec)return n.RGB;if(i===Pi)return n.RGBA;if(i===rn)return n.DEPTH_COMPONENT;if(i===cn)return n.DEPTH_STENCIL;if(i===tc)return n.RED;if(i===$a)return n.RED_INTEGER;if(i===Pn)return n.RG;if(i===Ja)return n.RG_INTEGER;if(i===ja)return n.RGBA_INTEGER;if(i===xs||i===bs||i===Ss||i===Ms)if(a===et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===xs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ms)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===xs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===bs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ss)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ms)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Qa||i===eo||i===to||i===io)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Qa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===eo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===to)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===io)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===no||i===ro||i===so||i===ao||i===oo||i===ws||i===lo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===no||i===ro)return a===et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===so)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===ao)return s.COMPRESSED_R11_EAC;if(i===oo)return s.COMPRESSED_SIGNED_R11_EAC;if(i===ws)return s.COMPRESSED_RG11_EAC;if(i===lo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===co||i===ho||i===uo||i===fo||i===po||i===mo||i===yo||i===go||i===vo||i===_o||i===xo||i===bo||i===So||i===Mo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===co)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ho)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===uo)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fo)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===po)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===mo)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yo)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===go)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vo)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_o)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xo)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bo)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===So)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Mo)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wo||i===To||i===Eo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===wo)return a===et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===To)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Eo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ao||i===Ro||i===Ts||i===Co)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ao)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ro)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ts)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Co)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Kn?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var m1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,y1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,xc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new as(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Ui({vertexShader:m1,fragmentShader:y1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new we(new Oi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bc=class extends ki{constructor(e,t){super();let i=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,f=null,y=typeof XRWebGLBinding<"u",m=new xc,g={},_=t.getContextAttributes(),w=null,S=null,A=[],E=[],v=new He,M=null,L=null,C=new Gt;C.viewport=new dt;let k=new Gt;k.viewport=new dt;let N=[C,k],V=new Va,P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ye=A[$];return ye===void 0&&(ye=new br,A[$]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function($){let ye=A[$];return ye===void 0&&(ye=new br,A[$]=ye),ye.getGripSpace()},this.getHand=function($){let ye=A[$];return ye===void 0&&(ye=new br,A[$]=ye),ye.getHandSpace()};function q($){let ye=E.indexOf($.inputSource);if(ye===-1)return;let be=A[ye];be!==void 0&&(be.update($.inputSource,$.frame,c||a),be.dispatchEvent({type:$.type,data:$.inputSource}))}function G(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",ne);for(let $=0;$<A.length;$++){let ye=E[$];ye!==null&&(E[$]=null,A[$].disconnect(ye))}P=null,H=null,m.reset();for(let $ in g)delete g[$];if(e.setRenderTarget(w),p=null,h=null,d=null,r=null,S=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(v.width,v.height,!1),L!==null){let $=L.camera;$.fov=L.fov,$.zoom=L.zoom,$.updateProjectionMatrix(),L=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",G),r.addEventListener("inputsourceschange",ne),_.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(v),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Ce=null,ge=null;_.depth&&(ge=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=_.stencil?cn:rn,Ce=_.stencil?Kn:Ai);let Be={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Be),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new oi(h.textureWidth,h.textureHeight,{format:Pi,type:ii,depthTexture:new on(h.textureWidth,h.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let be={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,be),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new oi(p.framebufferWidth,p.framebufferHeight,{format:Pi,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Oe.setContext(r),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne($){for(let ye=0;ye<$.removed.length;ye++){let be=$.removed[ye],Ce=E.indexOf(be);Ce>=0&&(E[Ce]=null,A[Ce].disconnect(be))}for(let ye=0;ye<$.added.length;ye++){let be=$.added[ye],Ce=E.indexOf(be);if(Ce===-1){for(let Be=0;Be<A.length;Be++)if(Be>=E.length){E.push(be),Ce=Be;break}else if(E[Be]===null){E[Be]=be,Ce=Be;break}if(Ce===-1)break}let ge=A[Ce];ge&&ge.connect(be)}}function Y($,ye){ye===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ye.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let ye=$.near,be=$.far;m.texture!==null&&(m.depthNear>0&&(ye=m.depthNear),m.depthFar>0&&(be=m.depthFar)),V.near=k.near=C.near=ye,V.far=k.far=C.far=be,(P!==V.near||H!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),P=V.near,H=V.far),V.layers.mask=$.layers.mask|6,C.layers.mask=V.layers.mask&-5,k.layers.mask=V.layers.mask&-3;let Ce=$.parent,ge=V.cameras;Y(V,Ce);for(let Be=0;Be<ge.length;Be++)Y(ge[Be],Ce);V.projectionMatrix.copy(C.projectionMatrix),V.projectionMatrixInverse.copy(C.projectionMatrixInverse),L===null&&$.isPerspectiveCamera&&(L={camera:$,fov:$.fov,zoom:$.zoom}),ee($,V,Ce)};function ee($,ye,be){be===null?$.matrix.copy(ye.matrixWorld):($.matrix.copy(be.matrixWorld),$.matrix.invert(),$.matrix.multiply(ye.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ye.projectionMatrix),$.projectionMatrixInverse.copy(ye.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=wa*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function($){return g[$]};let te=null;function Te($,ye){if(u=ye.getViewerPose(c||a),f=ye,u!==null){let be=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Ce=!1;be.length!==V.cameras.length&&(V.cameras.length=0,Ce=!0);for(let Ie=0;Ie<be.length;Ie++){let tt=be[Ie],nt=null;if(p!==null)nt=p.getViewport(tt);else{let Lt=d.getViewSubImage(h,tt);nt=Lt.viewport,Ie===0&&(e.setRenderTargetTextures(S,Lt.colorTexture,Lt.depthStencilTexture),e.setRenderTarget(S))}let Ye=N[Ie];Ye===void 0&&(Ye=new Gt,Ye.layers.enable(Ie),Ye.viewport=new dt,N[Ie]=Ye),Ye.matrix.fromArray(tt.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(tt.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(nt.x,nt.y,nt.width,nt.height),Ie===0&&(V.matrix.copy(Ye.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ce===!0&&V.cameras.push(Ye)}let ge=r.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){d=i.getBinding();let Ie=d.getDepthInformation(be[0]);Ie&&Ie.isValid&&Ie.texture&&m.init(Ie,r.renderState)}if(ge&&ge.includes("camera-access")&&y){e.state.unbindTexture(),d=i.getBinding();for(let Ie=0;Ie<be.length;Ie++){let tt=be[Ie].camera;if(tt){let nt=g[tt];nt||(nt=new as,g[tt]=nt);let Ye=d.getCameraImage(tt);nt.sourceTexture=Ye}}}}for(let be=0;be<A.length;be++){let Ce=E[be],ge=A[be];Ce!==null&&ge!==void 0&&ge.update(Ce,ye,c||a)}te&&te($,ye),ye.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ye}),f=null}let Oe=new Tu;Oe.setAnimationLoop(Te),this.setAnimationLoop=function($){te=$},this.dispose=function(){}}},g1=new lt,Nu=new ke;Nu.set(-1,0,0,0,1,0,0,0,1);function v1(n,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,lc(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function r(m,g,_,w,S){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),d(m,g)):g.isMeshPhongMaterial?(s(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),h(m,g),g.isMeshPhysicalMaterial&&p(m,g,S)):g.isMeshMatcapMaterial?(s(m,g),f(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),y(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,_,w):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Jt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Jt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let _=e.get(g),w=_.envMap,S=_.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(g1.makeRotationFromEuler(S)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Nu),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,_,w){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*_,m.scale.value=w*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function p(m,g,_){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Jt&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function f(m,g){g.matcap&&(m.matcap.value=g.matcap)}function y(m,g){let _=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function _1(n,e,t,i){let r={},s={};function a(_,w){let S=w.program;i.uniformBlockBinding(_,S,r[_.id])}function o(_,w){let S=r[_.id];S===void 0&&(f(_),S=l(_),r[_.id]=S,_.addEventListener("dispose",m));let A=w.program;i.updateUBOMapping(_,A);let E=e.render.frame;s[_.id]!==E&&(c(_),s[_.id]=E)}function l(_){let w=n.createBuffer(),S=_.__size,A=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,S,A),n.bindBuffer(n.UNIFORM_BUFFER,null),w}function c(_){let w=r[_.id],S=_.uniforms,A=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let E=0,v=S.length;E<v;E++){let M=S[E];if(Array.isArray(M))for(let L=0,C=M.length;L<C;L++)u(M[L],E,L,A);else u(M,E,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(_,w,S,A){if(h(_,w,S,A)===!0){let E=_.__offset,v=_.value;if(Array.isArray(v)){let M=0;for(let L=0;L<v.length;L++){let C=v[L],k=y(C,!0);d(C,_.__data,M),M+=k.storage/Float32Array.BYTES_PER_ELEMENT}}else d(v,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,E,_.__data)}}function d(_,w,S){typeof _=="number"||typeof _=="boolean"?w[S]=_:_.isMatrix3?(w[S]=_.elements[0],w[S+1]=_.elements[1],w[S+2]=_.elements[2],w[S+3]=0,w[S+4]=_.elements[3],w[S+5]=_.elements[4],w[S+6]=_.elements[5],w[S+7]=0,w[S+8]=_.elements[6],w[S+9]=_.elements[7],w[S+10]=_.elements[8],w[S+11]=0):ArrayBuffer.isView(_)?w.set(_.subarray(0,w.length-S),S):_.toArray(w,S)}function h(_,w,S,A){let E=_.value,v=w+"_"+S;if(Array.isArray(E)){A[v]===void 0&&(A[v]=[]);let M=A[v],L=!1;for(let C=0;C<E.length;C++)p(E[C],M,C)===!0&&(L=!0);return L}return p(E,A,v)}function p(_,w,S){if(w[S]===void 0)return typeof _=="number"||typeof _=="boolean"?w[S]=_:ArrayBuffer.isView(_)?w[S]=_.slice():w[S]=_.clone(),!0;{let A=w[S];if(typeof _=="number"||typeof _=="boolean"){if(A!==_)return w[S]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(A.equals(_)===!1)return A.copy(_),!0}}return!1}function f(_){let w=_.uniforms,S=0,A=16;for(let v=0,M=w.length;v<M;v++){let L=Array.isArray(w[v])?w[v]:[w[v]];for(let C=0,k=L.length;C<k;C++){let N=L[C],V=Array.isArray(N.value)?N.value:[N.value],P=Array.isArray(w[v])||Array.isArray(N.value),H=S;for(let G=0,ne=V.length;G<ne;G++){let Y=V[G],ee=y(Y,P),te=S%A,Te=te%ee.boundary,Oe=te+Te;S+=Te,Oe!==0&&A-Oe<ee.storage&&(S+=A-Oe),G===0&&(H=S),S+=ee.storage}let q=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new q((S-H)/Float32Array.BYTES_PER_ELEMENT),N.__offset=H}}let E=S%A;return E>0&&(S+=A-E),_.__size=S,_.__cache={},this}function y(_,w){let S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=16,S.storage=48):_.isMatrix4?(S.boundary=16,S.storage=64):_.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(S.boundary=16,S.storage=_.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",_),w===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function m(_){let w=_.target;w.removeEventListener("dispose",m),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function g(){for(let _ in r)n.deleteBuffer(r[_]);r={},s={}}return{bind:a,update:o,dispose:g}}var x1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),zi=null;function b1(){return zi===null&&(zi=new Ra(x1,16,16,Pn,Ci),zi.name="DFG_LUT",zi.minFilter=$t,zi.magFilter=$t,zi.wrapS=Di,zi.wrapT=Di,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}var ko=class{constructor(e={}){let{canvas:t=Zd(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=ii}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;let y=p,m=new Set([ja,Ja,$a]),g=new Set([ii,Ai,Rr,Kn,Ka,Za]),_=new Uint32Array(4),w=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},A=null,E=null,v=[],M=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,k=!1,N=null,V=null,P=null,H=null;this._outputColorSpace=ai;let q=0,G=0,ne=null,Y=-1,ee=null,te=new dt,Te=new dt,Oe=null,$=new Fe(0),ye=0,be=t.width,Ce=t.height,ge=1,Be=null,yt=null,Ie=new dt(0,0,be,Ce),tt=new dt(0,0,be,Ce),nt=!1,Ye=new wn,Lt=new Ca,bt=!1,jt=!1,ut=new lt,Ii=new U,Et=new dt,ci={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},hi=!1;function di(){return ne===null?ge:1}let D=i;function ui(b,I){return t.getContext(b,I)}let ct,ht,fe,St,Pe,Ne,T,x,F,ie,j,ae,de,K,Z,le,R,J,W,ce,se,oe,Ae;try{let b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",ze,!1),t.addEventListener("webglcontextcreationerror",pe,!1),D===null){let I="webgl2";if(D=ui(I,b),D===null)throw ui(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ge()}catch(b){throw t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),De("WebGLRenderer: "+b.message),b}function Ge(){ct=new Ly(D),ct.init(),se=new p1(D,ct),ht=new by(D,ct,e,se),fe=new u1(D,ct),ht.reversedDepthBuffer&&h&&fe.buffers.depth.setReversed(!0),V=D.createFramebuffer(),P=D.createFramebuffer(),H=D.createFramebuffer(),St=new Ny(D),Pe=new jg,Ne=new f1(D,ct,fe,Pe,ht,se,St),T=new Iy(C),x=new Up(D),oe=new _y(D,x),F=new Dy(D,x,St,oe),ie=new Uy(D,F,x,oe,St),J=new Oy(D,ht,Ne),Z=new Sy(Pe),j=new Jg(C,T,ct,ht,oe,Z),ae=new v1(C,Pe),de=new e1,K=new a1(ct),R=new vy(C,T,fe,ie,f,l),le=new d1(C,ie,ht),Ae=new _1(D,St,ht,fe),W=new xy(D,ct,St),ce=new ky(D,ct,St),St.programs=j.programs,C.capabilities=ht,C.extensions=ct,C.properties=Pe,C.renderLists=de,C.shadowMap=le,C.state=fe,C.info=St}y!==ii&&(L=new By(y,t.width,t.height,o,r,s));let re=new bc(C,D);this.xr=re,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let b=ct.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=ct.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(b){b!==void 0&&(ge=b,this.setSize(be,Ce,!1))},this.getSize=function(b){return b.set(be,Ce)},this.setSize=function(b,I,z=!0){if(re.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}be=b,Ce=I,t.width=Math.floor(b*ge),t.height=Math.floor(I*ge),z===!0&&(t.style.width=b+"px",t.style.height=I+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set(be*ge,Ce*ge).floor()},this.setDrawingBufferSize=function(b,I,z){be=b,Ce=I,ge=z,t.width=Math.floor(b*z),t.height=Math.floor(I*z),this.setViewport(0,0,b,I)},this.setEffects=function(b){if(y===ii){De("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let I=0;I<b.length;I++)if(b[I].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(te)},this.getViewport=function(b){return b.copy(Ie)},this.setViewport=function(b,I,z,O){b.isVector4?Ie.set(b.x,b.y,b.z,b.w):Ie.set(b,I,z,O),fe.viewport(te.copy(Ie).multiplyScalar(di()).round())},this.getScissor=function(b){return b.copy(tt)},this.setScissor=function(b,I,z,O){b.isVector4?tt.set(b.x,b.y,b.z,b.w):tt.set(b,I,z,O),fe.scissor(Te.copy(tt).multiplyScalar(di()).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(b){fe.setScissorTest(nt=b)},this.setOpaqueSort=function(b){Be=b},this.setTransparentSort=function(b){yt=b},this.getClearColor=function(b){return b.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(b=!0,I=!0,z=!0){let O=0;if(b){let B=!1;if(ne!==null){let ue=ne.texture.format;B=m.has(ue)}if(B){let ue=ne.texture.type,xe=g.has(ue),he=R.getClearColor(),ve=R.getClearAlpha(),Ee=he.r,Ue=he.g,qe=he.b;xe?(_[0]=Ee,_[1]=Ue,_[2]=qe,_[3]=ve,D.clearBufferuiv(D.COLOR,0,_)):(w[0]=Ee,w[1]=Ue,w[2]=qe,w[3]=ve,D.clearBufferiv(D.COLOR,0,w))}else O|=D.COLOR_BUFFER_BIT}I&&(O|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),z&&(O|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&D.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),N=b},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),R.dispose(),de.dispose(),K.dispose(),Ne.dispose(),Pe.dispose(),T.dispose(),ie.dispose(),F.dispose(),oe.dispose(),Ae.dispose(),j.dispose(),re.dispose(),re.removeEventListener("sessionstart",Gc),re.removeEventListener("sessionend",Hc),Nn.stop()};function Re(b){b.preventDefault(),ac("WebGLRenderer: Context Lost."),k=!0}function ze(){ac("WebGLRenderer: Context Restored."),k=!1;let b=St.autoReset,I=le.enabled,z=le.autoUpdate,O=le.needsUpdate,B=le.type;Ge(),St.autoReset=b,le.enabled=I,le.autoUpdate=z,le.needsUpdate=O,le.type=B}function pe(b){De("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function it(b){let I=b.target;I.removeEventListener("dispose",it),At(I)}function At(b){un(b),Pe.remove(b)}function un(b){let I=Pe.get(b).programs;I!==void 0&&(I.forEach(function(z){j.releaseProgram(z)}),b.isShaderMaterial&&j.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,z,O,B,ue){I===null&&(I=ci);let xe=B.isMesh&&B.matrixWorld.determinantAffine()<0,he=mf(b,I,z,O,B);fe.setMaterial(O,xe);let ve=z.index,Ee=1;if(O.wireframe===!0){if(ve=F.getWireframeAttribute(z),ve===void 0)return;Ee=2}let Ue=z.drawRange,qe=z.attributes.position,Se=Ue.start*Ee,Ke=(Ue.start+Ue.count)*Ee;ue!==null&&(Se=Math.max(Se,ue.start*Ee),Ke=Math.min(Ke,(ue.start+ue.count)*Ee)),ve!==null?(Se=Math.max(Se,0),Ke=Math.min(Ke,ve.count)):qe!=null&&(Se=Math.max(Se,0),Ke=Math.min(Ke,qe.count));let gt=Ke-Se;if(gt<0||gt===1/0)return;oe.setup(B,O,he,z,ve);let at,rt=W;if(ve!==null&&(at=x.get(ve),rt=ce,rt.setIndex(at)),B.isMesh)O.wireframe===!0?(fe.setLineWidth(O.wireframeLinewidth*di()),rt.setMode(D.LINES)):rt.setMode(D.TRIANGLES);else if(B.isLine){let Ot=O.linewidth;Ot===void 0&&(Ot=1),fe.setLineWidth(Ot*di()),B.isLineSegments?rt.setMode(D.LINES):B.isLineLoop?rt.setMode(D.LINE_LOOP):rt.setMode(D.LINE_STRIP)}else B.isPoints?rt.setMode(D.POINTS):B.isSprite&&rt.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(ct.get("WEBGL_multi_draw"))rt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Ot=B._multiDrawStarts,Me=B._multiDrawCounts,Kt=B._multiDrawCount,Qe=ve?x.get(ve).bytesPerElement:1,On=Pe.get(O).currentProgram.getUniforms();for(let Ut=0;Ut<Kt;Ut++)On.setValue(D,"_gl_DrawID",Ut),rt.render(Ot[Ut]/Qe,Me[Ut])}else if(B.isInstancedMesh)rt.renderInstances(Se,gt,B.count);else if(z.isInstancedBufferGeometry){let Ot=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Me=Math.min(z.instanceCount,Ot);rt.renderInstances(Se,gt,Me)}else rt.render(Se,gt)};function zc(b,I,z,O){N!==null&&b.isNodeMaterial&&N.setObject(O,b),bt===!0&&Z.setState(b,z,!1),b.transparent===!0&&b.side===Fi&&b.forceSinglePass===!1?(b.side=Jt,b.needsUpdate=!0,Ur(b,I,O),b.side=Cn,b.needsUpdate=!0,Ur(b,I,O),b.side=Fi):Ur(b,I,O)}this.compile=function(b,I,z=null){z===null&&(z=b),N!==null&&N.renderStart(b,I,z),E=K.get(z),E.init(I),M.push(E),z.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(E.pushLight(B),B.castShadow&&E.pushShadow(B))}),b!==z&&b.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(E.pushLight(B),B.castShadow&&E.pushShadow(B))}),E.setupLights(),N!==null&&N.updateLights(E.state.lightsArray),jt=this.localClippingEnabled,bt=Z.init(this.clippingPlanes,jt),bt===!0&&Z.setGlobalState(this.clippingPlanes,I),N!==null&&le.render(E.state.shadowsArray,z,I);let O=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let ue=B.material;if(ue)if(Array.isArray(ue))for(let xe=0;xe<ue.length;xe++){let he=ue[xe];zc(he,z,I,B),O.add(he)}else zc(ue,z,I,B),O.add(ue)}),E=M.pop(),N!==null&&N.renderEnd(),O},this.compileAsync=function(b,I,z=null){let O=this.compile(b,I,z);return new Promise(B=>{function ue(){if(O.forEach(function(xe){let ve=Pe.get(xe).currentProgram;(ve===void 0||ve.isReady())&&O.delete(xe)}),O.size===0){B(b);return}setTimeout(ue,10)}ct.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Ko=null;function ff(b){Ko&&Ko(b)}function Gc(){Nn.stop()}function Hc(){Nn.start()}let Nn=new Tu;Nn.setAnimationLoop(ff),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(b){Ko=b,re.setAnimationLoop(b),b===null?Nn.stop():Nn.start()},re.addEventListener("sessionstart",Gc),re.addEventListener("sessionend",Hc),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;N!==null&&N.renderStart(b,I);let z=re.enabled===!0&&re.isPresenting===!0,O=L!==null&&(ne===null||z)&&L.begin(C,ne);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(I),I=re.getCamera()),b.isScene===!0&&b.onBeforeRender(C,b,I,ne),E=K.get(b,M.length),E.init(I),E.state.textureUnits=Ne.getTextureUnits(),M.push(E),ut.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?Lt.setFromArrayCamera(I):Ye.setFromProjectionMatrix(ut,pi,I.reversedDepth),jt=this.localClippingEnabled,bt=Z.init(this.clippingPlanes,jt),A=de.get(b,v.length),A.init(),v.push(A),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){let xe=C.xr.getDepthSensingMesh();xe!==null&&Zo(xe,I,-1/0,C.sortObjects)}Zo(b,I,0,C.sortObjects),A.finish(),N!==null&&N.updateLights(E.state.lightsArray),C.sortObjects===!0&&A.sort(Be,yt),hi=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,hi&&R.addToRenderList(A,b),this.info.autoReset===!0&&this.info.reset(),bt===!0&&Z.beginShadows();let B=E.state.shadowsArray;if(le.render(B,b,I),bt===!0&&Z.endShadows(),(O&&L.hasRenderPass())===!1){let xe=A.opaque,he=A.transmissive;if(E.setupLights(),I.isArrayCamera){let ve=I.cameras;if(he.length>0)for(let Ee=0,Ue=ve.length;Ee<Ue;Ee++){let qe=ve[Ee];Wc(xe,he,b,qe)}hi&&R.render(b);for(let Ee=0,Ue=ve.length;Ee<Ue;Ee++){let qe=ve[Ee];Vc(A,b,qe,qe.viewport)}}else he.length>0&&Wc(xe,he,b,I),hi&&R.render(b),Vc(A,b,I)}ne!==null&&G===0&&(Ne.updateMultisampleRenderTarget(ne),Ne.updateRenderTargetMipmap(ne)),O&&L.end(C),b.isScene===!0&&b.onAfterRender(C,b,I),oe.resetDefaultState(),Y=-1,ee=null,M.pop(),M.length>0?(E=M[M.length-1],Ne.setTextureUnits(E.state.textureUnits),bt===!0&&Z.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,v.pop(),v.length>0?A=v[v.length-1]:A=null,N!==null&&N.renderEnd()};function Zo(b,I,z,O){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){let xe=I.isArrayCamera?Lt:Ye;if(!b.frustumCulled||b.intersectsFrustum(xe)){O&&Et.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ut);let he=ie.update(b),ve=b.material;ve.visible&&A.push(b,he,ve,z,Et.z,null,I)}}else if(b.isMesh||b.isLine||b.isPoints){let xe=I.isArrayCamera?Lt:Ye;if(!b.frustumCulled||b.intersectsFrustum(xe)){let he=ie.update(b),ve=b.material;if(O&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Et.copy(b.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Et.copy(he.boundingSphere.center)),Et.applyMatrix4(b.matrixWorld).applyMatrix4(ut)),Array.isArray(ve)){let Ee=he.groups;for(let Ue=0,qe=Ee.length;Ue<qe;Ue++){let Se=Ee[Ue],Ke=ve[Se.materialIndex];Ke&&Ke.visible&&A.push(b,he,Ke,z,Et.z,Se,I)}}else ve.visible&&A.push(b,he,ve,z,Et.z,null,I)}}}let ue=b.children;for(let xe=0,he=ue.length;xe<he;xe++)Zo(ue[xe],I,z,O)}function Vc(b,I,z,O){let{opaque:B,transmissive:ue,transparent:xe}=b;E.setupLightsView(z),bt===!0&&Z.setGlobalState(C.clippingPlanes,z),O&&fe.viewport(te.copy(O)),B.length>0&&Os(B,I,z),ue.length>0&&Os(ue,I,z),xe.length>0&&Os(xe,I,z),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Wc(b,I,z,O){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[O.id]===void 0){let Se=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[O.id]=new oi(1,1,{generateMipmaps:!0,type:Se?Ci:ii,minFilter:ln,samples:Math.max(4,ht.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}let ue=E.state.transmissionRenderTarget[O.id],xe=O.viewport||te;ue.setSize(xe.z*C.transmissionResolutionScale,xe.w*C.transmissionResolutionScale);let he=C.getRenderTarget(),ve=C.getActiveCubeFace(),Ee=C.getActiveMipmapLevel();C.setRenderTarget(ue),C.getClearColor($),ye=C.getClearAlpha(),ye<1&&C.setClearColor(16777215,.5),C.clear(),hi&&R.render(z);let Ue=C.toneMapping;C.toneMapping=Bi;let qe=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),E.setupLightsView(O),bt===!0&&Z.setGlobalState(C.clippingPlanes,O),Os(b,z,O),Ne.updateMultisampleRenderTarget(ue),Ne.updateRenderTargetMipmap(ue),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let Ke=0,gt=I.length;Ke<gt;Ke++){let at=I[Ke],{object:rt,geometry:Ot,material:Me,group:Kt}=at;if(Me.side===Fi&&rt.layers.test(O.layers)){let Qe=Me.side;Me.side=Jt,Me.needsUpdate=!0,Xc(rt,z,O,Ot,Me,Kt),Me.side=Qe,Me.needsUpdate=!0,Se=!0}}Se===!0&&(Ne.updateMultisampleRenderTarget(ue),Ne.updateRenderTargetMipmap(ue))}C.setRenderTarget(he,ve,Ee),C.setClearColor($,ye),qe!==void 0&&(O.viewport=qe),C.toneMapping=Ue}function Os(b,I,z){let O=I.isScene===!0?I.overrideMaterial:null;for(let B=0,ue=b.length;B<ue;B++){let xe=b[B],{object:he,geometry:ve,group:Ee}=xe,Ue=xe.material;Ue.allowOverride===!0&&O!==null&&(Ue=O),he.layers.test(z.layers)&&Xc(he,I,z,ve,Ue,Ee)}}function Xc(b,I,z,O,B,ue){N!==null&&B.isNodeMaterial&&N.setObject(b,B),b.onBeforeRender(C,I,z,O,B,ue),b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(C,I,z,O,b,ue),B.transparent===!0&&B.side===Fi&&B.forceSinglePass===!1?(B.side=Jt,B.needsUpdate=!0,C.renderBufferDirect(z,I,O,B,b,ue),B.side=Cn,B.needsUpdate=!0,C.renderBufferDirect(z,I,O,B,b,ue),B.side=Fi):C.renderBufferDirect(z,I,O,B,b,ue),b.onAfterRender(C,I,z,O,B,ue)}function Yc(b){let I=0;for(let z of b)z.texture!==null&&I++;return I}function Ur(b,I,z){I.isScene!==!0&&(I=ci);let O=Pe.get(b),B=E.state.lights,ue=E.state.shadowsArray,xe=B.state.version,he=j.getParameters(b,B.state,ue,I,z,E.state.lightProbeGridArray),ve=j.getProgramCacheKey(he),Ee=O.programs;O.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?I.environment:null,O.fog=I.fog;let Ue=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;O.envMap=T.get(b.envMap||O.environment,Ue),O.envMapRotation=O.environment!==null&&b.envMap===null?I.environmentRotation:b.envMapRotation,Ee===void 0&&(b.addEventListener("dispose",it),Ee=new Map,O.programs=Ee,O.programVariants=new Map);let qe=Ee.get(ve);if(qe!==void 0){if(O.currentProgram===qe&&O.lightsStateVersion===xe)return Kc(b,he),qe}else he.uniforms=j.getUniforms(b),N!==null&&b.isNodeMaterial&&N.build(b,z,he),b.onBeforeCompile(he,C),qe=j.acquireProgram(he,ve),Ee.set(ve,qe),O.uniforms=he.uniforms;let Se=O.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Se.clippingPlanes=Z.uniform),Kc(b,he),O.needsLights=gf(b),O.lightsStateVersion=xe,O.needsLights&&(Se.ambientLightColor.value=B.state.ambient,Se.lightProbe.value=B.state.probe,Se.sunLights.value=B.state.sun,Se.sunLightShadows.value=B.state.sunShadow,Se.directionalLights.value=B.state.directional,Se.directionalLightShadows.value=B.state.directionalShadow,Se.spotLights.value=B.state.spot,Se.spotLightShadows.value=B.state.spotShadow,Se.rectAreaLights.value=B.state.rectArea,Se.ltc_1.value=B.state.rectAreaLTC1,Se.ltc_2.value=B.state.rectAreaLTC2,Se.pointLights.value=B.state.point,Se.pointLightShadows.value=B.state.pointShadow,Se.hemisphereLights.value=B.state.hemi,Se.sunShadowMatrix.value=B.state.sunShadowMatrix,Se.sunShadowCascade.value=B.state.sunShadowCascade,Se.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Se.spotLightMatrix.value=B.state.spotLightMatrix,Se.spotLightMap.value=B.state.spotLightMap,Se.pointShadowMatrix.value=B.state.pointShadowMatrix),O.numLightProbeGrids=Yc(E.state.lightProbeGridArray),O.currentProgram=qe,O.uniformsList=null,qe}function pf(b,I,z,O,B){let ue=Pe.get(b),xe=ue.currentProgram.id+","+O+","+B,he=ue.programVariants.get(xe);return he===void 0?(he=Ur(b,I,z),ue.programVariants.set(xe,he)):(ue.currentProgram=he,ue.uniformsList=null,ue.outputColorSpace=O,ue.toneMapping=B),he}function qc(b){if(b.uniformsList===null){let I=b.currentProgram.getUniforms();b.uniformsList=Cr.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function Kc(b,I){let z=Pe.get(b);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.batchingColor=I.batchingColor,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function mf(b,I,z,O,B){I.isScene!==!0&&(I=ci),Ne.resetTextureUnits();let ue=I.fog,xe=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?I.environment:null,he=ne===null?C.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ze.workingColorSpace,ve=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Ee=T.get(O.envMap||xe,ve),Ue=O.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,qe=!!z.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Se=!!z.morphAttributes.position,Ke=!!z.morphAttributes.normal,gt=!!z.morphAttributes.color,at=Bi;O.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(at=C.toneMapping);let rt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ot=rt!==void 0?rt.length:0,Me=Pe.get(O),Kt=E.state.lights;if(bt===!0&&(jt===!0||b!==ee)){let ft=b===ee&&O.id===Y;Z.setState(O,b,ft)}let Qe=!1,On=!1;O.version===Me.__version?Me.needsLights&&Me.lightsStateVersion!==Kt.state.version||B.isBatchedMesh&&Me.batching===!1||!B.isBatchedMesh&&Me.batching===!0||B.isBatchedMesh&&Me.batchingColor===!0&&B._colorsTexture===null||B.isBatchedMesh&&Me.batchingColor===!1&&B._colorsTexture!==null||B.isInstancedMesh&&Me.instancing===!1||!B.isInstancedMesh&&Me.instancing===!0||B.isSkinnedMesh&&Me.skinning===!1||!B.isSkinnedMesh&&Me.skinning===!0||B.isInstancedMesh&&Me.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Me.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Me.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Me.instancingMorph===!1&&B.morphTexture!==null||Me.envMap!==Ee||O.fog===!0&&Me.fog!==ue||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Z.numPlanes||Me.numIntersection!==Z.numIntersection)||Me.vertexAlphas!==Ue||Me.vertexTangents!==qe||Me.morphTargets!==Se||Me.morphNormals!==Ke||Me.morphColors!==gt||Me.morphTargetsCount!==Ot||Me.numLightProbeGrids!==Yc(E.state.lightProbeGridArray)?Qe=!0:(Me.outputColorSpace!==he||Me.toneMapping!==at)&&(On=!0):(Qe=!0,Me.__version=O.version);let Ut=Me.currentProgram;(Qe===!0||On===!0)&&(Ut=On===!0?pf(O,I,B,he,at):Ur(O,I,B),N&&O.isNodeMaterial&&N.onUpdateProgram(O,Ut,Me));let Us=!1,fn=!1,Un=!1,Je=Ut.getUniforms(),Dt=Me.uniforms;if(fe.useProgram(Ut.program)&&(Us=!0,fn=!0,Un=!0),O.id!==Y&&(Y=O.id,fn=!0),Us||ee!==b){fe.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Je.setValue(D,"projectionMatrix",b.projectionMatrix),Je.setValue(D,"viewMatrix",b.matrixWorldInverse);let Rt=Je.map.cameraPosition;Rt!==void 0&&Rt.setValue(D,Ii.setFromMatrixPosition(b.matrixWorld)),ht.logarithmicDepthBuffer&&Je.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Je.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),ee!==b&&(ee=b,fn=!0,Un=!0)}if(Me.needsLights&&(Kt.state.sunShadowMap.length>0&&Je.setValue(D,"sunShadowMap",Kt.state.sunShadowMap,Ne),Kt.state.directionalShadowMap.length>0&&Je.setValue(D,"directionalShadowMap",Kt.state.directionalShadowMap,Ne),Kt.state.spotShadowMap.length>0&&Je.setValue(D,"spotShadowMap",Kt.state.spotShadowMap,Ne),Kt.state.pointShadowMap.length>0&&Je.setValue(D,"pointShadowMap",Kt.state.pointShadowMap,Ne)),B.isSkinnedMesh){Je.setOptional(D,B,"bindMatrix"),Je.setOptional(D,B,"bindMatrixInverse");let ft=B.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),Je.setValue(D,"boneTexture",ft.boneTexture,Ne))}B.isBatchedMesh&&(Je.setOptional(D,B,"batchingTexture"),Je.setValue(D,"batchingTexture",B._matricesTexture,Ne),Je.setOptional(D,B,"batchingIdTexture"),Je.setValue(D,"batchingIdTexture",B._indirectTexture,Ne),Je.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&Je.setValue(D,"batchingColorTexture",B._colorsTexture,Ne));let _i=z.morphAttributes;if((_i.position!==void 0||_i.normal!==void 0||_i.color!==void 0)&&J.update(B,z,Ut),(fn||Me.receiveShadow!==B.receiveShadow)&&(Me.receiveShadow=B.receiveShadow,Je.setValue(D,"receiveShadow",B.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&I.environment!==null&&(Dt.envMapIntensity.value=I.environmentIntensity),Dt.dfgLUT!==void 0&&(Dt.dfgLUT.value=b1()),fn){if(Je.setValue(D,"toneMappingExposure",C.toneMappingExposure),Me.needsLights&&yf(Dt,Un),ue&&O.fog===!0&&ae.refreshFogUniforms(Dt,ue),ae.refreshMaterialUniforms(Dt,O,ge,Ce,E.state.transmissionRenderTarget[b.id]),Me.needsLights&&Me.numLightProbeGrids>0){let ft=S,Rt=0;for(let Wi of E.state.lightProbeGridArray)Wi.texture!==null&&(ft.textures[Rt]=Wi.texture,ft.min[Rt]=Wi.boundingBox.min,ft.max[Rt]=Wi.boundingBox.max,ft.resolution[Rt]=Wi.resolution,Rt++);for(let Wi in ft)ft[Wi].length=Rt;Dt.probesSH.value=ft.textures,Dt.probesMin.value=ft.min,Dt.probesMax.value=ft.max,Dt.probesResolution.value=ft.resolution}Cr.upload(D,qc(Me),Dt,Ne)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Cr.upload(D,qc(Me),Dt,Ne),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Je.setValue(D,"center",B.center),Je.setValue(D,"modelViewMatrix",B.modelViewMatrix),Je.setValue(D,"normalMatrix",B.normalMatrix),Je.setValue(D,"modelMatrix",B.matrixWorld),O.uniformsGroups!==void 0){let ft=O.uniformsGroups;for(let Rt=0,Wi=ft.length;Rt<Wi;Rt++){let $c=ft[Rt];Ae.update($c,Ut),Ae.bind($c,Ut)}}return Ut}function yf(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.sunLights.needsUpdate=I,b.sunLightShadows.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function gf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(b,I,z){let O=Pe.get(b);O.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),Pe.get(b.texture).__webglTexture=I,Pe.get(b.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:z,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,I){let z=Pe.get(b);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(b,I=0,z=0){ne=b,q=I,G=z;let O=null,B=!1,ue=!1;if(b){let he=Pe.get(b);if(he.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(D.FRAMEBUFFER,he.__webglFramebuffer),te.copy(b.viewport),Te.copy(b.scissor),Oe=b.scissorTest,fe.viewport(te),fe.scissor(Te),fe.setScissorTest(Oe),Y=-1;return}else if(he.__webglFramebuffer===void 0)Ne.setupRenderTarget(b);else if(he.__hasExternalTextures)Ne.rebindTextures(b,Pe.get(b.texture).__webglTexture,Pe.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Ue=b.depthTexture;if(he.__boundDepthTexture!==Ue){if(Ue!==null&&Pe.has(Ue)&&(b.width!==Ue.image.width||b.height!==Ue.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ne.setupDepthRenderbuffer(b)}}let ve=b.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(ue=!0);let Ee=Pe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ee[I])?O=Ee[I][z]:O=Ee[I],B=!0):b.samples>0&&Ne.useMultisampledRTT(b)===!1?O=Pe.get(b).__webglMultisampledFramebuffer:Array.isArray(Ee)?O=Ee[z]:O=Ee,te.copy(b.viewport),Te.copy(b.scissor),Oe=b.scissorTest}else te.copy(Ie).multiplyScalar(ge).floor(),Te.copy(tt).multiplyScalar(ge).floor(),Oe=nt;if(z!==0&&(O=V),fe.bindFramebuffer(D.FRAMEBUFFER,O)&&fe.drawBuffers(b,O),fe.viewport(te),fe.scissor(Te),fe.setScissorTest(Oe),B){let he=Pe.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+I,he.__webglTexture,z)}else if(ue){let he=I;for(let ve=0;ve<b.textures.length;ve++){let Ee=Pe.get(b.textures[ve]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+ve,Ee.__webglTexture,z,he)}}else if(b!==null&&z!==0){let he=Pe.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,he.__webglTexture,z)}Y=-1};function Zc(b){let I=Pe.get(b);return(I.__readFormat!==b.format||I.__readType!==b.type)&&(I.__readFormat=b.format,I.__readType=b.type,I.__formatReadable=ht.textureFormatReadable(b.format),I.__typeReadable=ht.textureTypeReadable(b.type)),I}this.readRenderTargetPixels=function(b,I,z,O,B,ue,xe,he=0){if(!(b&&b.isWebGLRenderTarget)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Pe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xe!==void 0&&(ve=ve[xe],Array.isArray(ve)&&(ve=ve[0])),ve){fe.bindFramebuffer(D.FRAMEBUFFER,ve);try{let Ee=b.textures[he],Ue=Ee.format,qe=Ee.type;b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+he);let Se=Zc(Ee);if(Se.__formatReadable===!1){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Se.__typeReadable===!1){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-O&&z>=0&&z<=b.height-B&&D.readPixels(I,z,O,B,se.convert(Ue),se.convert(qe),ue)}finally{let Ee=ne!==null?Pe.get(ne).__webglFramebuffer:null;fe.bindFramebuffer(D.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(b,I,z,O,B,ue,xe,he=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Pe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xe!==void 0&&(ve=ve[xe],Array.isArray(ve)&&(ve=ve[0])),ve)if(I>=0&&I<=b.width-O&&z>=0&&z<=b.height-B){fe.bindFramebuffer(D.FRAMEBUFFER,ve);let Ee=b.textures[he],Ue=Ee.format,qe=Ee.type;b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+he);let Se=Zc(Ee);if(Se.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Se.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ke=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ke),D.bufferData(D.PIXEL_PACK_BUFFER,ue.byteLength,D.STREAM_READ),D.readPixels(I,z,O,B,se.convert(Ue),se.convert(qe),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let gt=ne!==null?Pe.get(ne).__webglFramebuffer:null;fe.bindFramebuffer(D.FRAMEBUFFER,gt);let at=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Jd(D,at,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ke),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ue),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(Ke),D.deleteSync(at),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,I=null,z=0){let O=Math.pow(2,-z),B=Math.floor(b.image.width*O),ue=Math.floor(b.image.height*O),xe=I!==null?I.x:0,he=I!==null?I.y:0;Ne.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,z,0,0,xe,he,B,ue),fe.unbindTexture()},this.copyTextureToTexture=function(b,I,z=null,O=null,B=0,ue=0){let xe,he,ve,Ee,Ue,qe,Se,Ke,gt,at=b.isCompressedTexture?b.mipmaps[ue]:b.image;if(z!==null)xe=z.max.x-z.min.x,he=z.max.y-z.min.y,ve=z.isBox3?z.max.z-z.min.z:1,Ee=z.min.x,Ue=z.min.y,qe=z.isBox3?z.min.z:0;else{let Je=Math.pow(2,-B);xe=Math.floor(at.width*Je),he=Math.floor(at.height*Je),b.isDataArrayTexture?ve=at.depth:b.isData3DTexture?ve=Math.floor(at.depth*Je):ve=1,Ee=0,Ue=0,qe=0}O!==null?(Se=O.x,Ke=O.y,gt=O.z):(Se=0,Ke=0,gt=0);let rt=se.convert(I.format),Ot=se.convert(I.type),Me;I.isData3DTexture?(Ne.setTexture3D(I,0),Me=D.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Ne.setTexture2DArray(I,0),Me=D.TEXTURE_2D_ARRAY):(Ne.setTexture2D(I,0),Me=D.TEXTURE_2D),fe.activeTexture(D.TEXTURE0),fe.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,I.flipY),fe.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),fe.pixelStorei(D.UNPACK_ALIGNMENT,I.unpackAlignment);let Kt=fe.getParameter(D.UNPACK_ROW_LENGTH),Qe=fe.getParameter(D.UNPACK_IMAGE_HEIGHT),On=fe.getParameter(D.UNPACK_SKIP_PIXELS),Ut=fe.getParameter(D.UNPACK_SKIP_ROWS),Us=fe.getParameter(D.UNPACK_SKIP_IMAGES);fe.pixelStorei(D.UNPACK_ROW_LENGTH,at.width),fe.pixelStorei(D.UNPACK_IMAGE_HEIGHT,at.height),fe.pixelStorei(D.UNPACK_SKIP_PIXELS,Ee),fe.pixelStorei(D.UNPACK_SKIP_ROWS,Ue),fe.pixelStorei(D.UNPACK_SKIP_IMAGES,qe);let fn=b.isDataArrayTexture||b.isData3DTexture,Un=I.isDataArrayTexture||I.isData3DTexture;if(b.isDepthTexture){let Je=Pe.get(b),Dt=Pe.get(I),_i=Pe.get(Je.__renderTarget),ft=Pe.get(Dt.__renderTarget);fe.bindFramebuffer(D.READ_FRAMEBUFFER,_i.__webglFramebuffer),fe.bindFramebuffer(D.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let Rt=0;Rt<ve;Rt++)fn&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Pe.get(b).__webglTexture,B,qe+Rt),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Pe.get(I).__webglTexture,ue,gt+Rt)),D.blitFramebuffer(Ee,Ue,Ee+xe,Ue+he,Se,Ke,Se+xe,Ke+he,D.DEPTH_BUFFER_BIT,D.NEAREST);fe.bindFramebuffer(D.READ_FRAMEBUFFER,null),fe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(B!==0||b.isRenderTargetTexture||Pe.has(b)){let Je=Pe.get(b),Dt=Pe.get(I);fe.bindFramebuffer(D.READ_FRAMEBUFFER,P),fe.bindFramebuffer(D.DRAW_FRAMEBUFFER,H);for(let _i=0;_i<ve;_i++)fn?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Je.__webglTexture,B,qe+_i):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Je.__webglTexture,B),Un?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Dt.__webglTexture,ue,gt+_i):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Dt.__webglTexture,ue),B!==0?D.blitFramebuffer(Ee,Ue,Ee+xe,Ue+he,Se,Ke,Se+xe,Ke+he,D.COLOR_BUFFER_BIT,D.NEAREST):Un?D.copyTexSubImage3D(Me,ue,Se,Ke,gt+_i,Ee,Ue,xe,he):D.copyTexSubImage2D(Me,ue,Se,Ke,Ee,Ue,xe,he);fe.bindFramebuffer(D.READ_FRAMEBUFFER,null),fe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Un?b.isDataTexture||b.isData3DTexture?D.texSubImage3D(Me,ue,Se,Ke,gt,xe,he,ve,rt,Ot,at.data):I.isCompressedArrayTexture?D.compressedTexSubImage3D(Me,ue,Se,Ke,gt,xe,he,ve,rt,at.data):D.texSubImage3D(Me,ue,Se,Ke,gt,xe,he,ve,rt,Ot,at):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ue,Se,Ke,xe,he,rt,Ot,at.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ue,Se,Ke,at.width,at.height,rt,at.data):D.texSubImage2D(D.TEXTURE_2D,ue,Se,Ke,xe,he,rt,Ot,at);fe.pixelStorei(D.UNPACK_ROW_LENGTH,Kt),fe.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Qe),fe.pixelStorei(D.UNPACK_SKIP_PIXELS,On),fe.pixelStorei(D.UNPACK_SKIP_ROWS,Ut),fe.pixelStorei(D.UNPACK_SKIP_IMAGES,Us),ue===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&D.generateMipmap(Me),fe.unbindTexture()},this.initRenderTarget=function(b){Pe.get(b).__webglFramebuffer===void 0&&Ne.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ne.setTextureCube(b,0):b.isData3DTexture?Ne.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ne.setTexture2DArray(b,0):Ne.setTexture2D(b,0),fe.unbindTexture()},this.resetState=function(){q=0,G=0,ne=null,fe.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}};var Ou={rainforest:{bg:466197,fog:731678,ambient:3902042,key:8843180,fill:1096065},desert:{bg:2758152,fog:4531214,ambient:14251782,key:16638023,fill:16096779},glacier:{bg:530988,fog:928324,ambient:6333946,key:14742270,fill:3718648},volcano:{bg:1902341,fog:3674122,ambient:10033947,key:16486972,fill:15680580},foundry:{bg:658968,fog:1251882,ambient:4674921,key:16096779,fill:9133302},"ottoman-palace":{bg:333858,fog:534582,ambient:889992,key:16639626,fill:3003583},"ottoman-bosphorus":{bg:331812,fog:729668,ambient:1920728,key:8246268,fill:3718648},"ottoman-galata":{bg:1642501,fog:3153418,ambient:11817737,key:16498468,fill:16096779},"ottoman-observatory":{bg:722206,fog:1509944,ambient:7153881,key:16638023,fill:12616956},"ottoman-shipyard":{bg:1574153,fog:3017492,ambient:10424889,key:16498468,fill:16478597},"turkey-amasya":{bg:1057308,fog:1784367,ambient:3462041,key:16707722,fill:15680580},"turkey-yozgat":{bg:2299915,fog:4336916,ambient:14251782,key:16639626,fill:16096779},"turkey-erzurum":{bg:727340,fog:1520212,ambient:6333946,key:14742270,fill:3718648},"turkey-corum":{bg:2168076,fog:4007444,ambient:11817737,key:16436245,fill:16096779},"turkey-samsun":{bg:465444,fog:995909,ambient:1096065,key:14742270,fill:3462041}},Uu=[{sunY:2,sunX:-14,sunColor:16622767,bgBlend:3874094,blendAmt:.25,keyInt:1.15},{sunY:6.5,sunX:-9,sunColor:16707722,bgBlend:3718648,blendAmt:.14,keyInt:1.35},{sunY:11.5,sunX:-2,sunColor:16777215,bgBlend:8246268,blendAmt:.18,keyInt:1.55},{sunY:8.5,sunX:7,sunColor:16638023,bgBlend:16096779,blendAmt:.14,keyInt:1.35},{sunY:2.8,sunX:13,sunColor:16486972,bgBlend:8138002,blendAmt:.28,keyInt:1.25},{sunY:-.5,sunX:15,sunColor:12616956,bgBlend:3215426,blendAmt:.34,keyInt:1},{sunY:9.2,sunX:11,sunColor:14870768,bgBlend:132631,blendAmt:.55,keyInt:.85}],Uo=class{constructor(e){if(this.canvas=e,this.enabled=!1,this.currentBiome=null,this.currentStage=0,this.time=0,this.animated=[],this.particles=null,this.particleMode="float",!!e)try{this.renderer=new ko({canvas:e,alpha:!0,antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(1280,720,!1),this.renderer.setPixelRatio(1),this.scene=new Qr,this.camera=new Gt(46,1280/720,.1,180),this.camera.position.set(0,2.5,24),this.ambientLight=new gs(16777215,.9),this.keyLight=new ys(16777215,1.4),this.keyLight.position.set(12,18,14),this.fillLight=new ps(3718648,2.2,65),this.fillLight.position.set(-10,4,8),this.scene.add(this.ambientLight,this.keyLight,this.fillLight),this.worldGroup=new tn,this.scene.add(this.worldGroup),this.enabled=!0}catch{this.enabled=!1}}clearWorld(){for(this.animated.length=0,this.particles&&(this.particles.geometry.dispose(),this.particles.material.dispose(),this.worldGroup.remove(this.particles),this.particles=null);this.worldGroup.children.length>0;){let e=this.worldGroup.children[0];this.worldGroup.remove(e),e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose())}}addParticles(e,t,i=.22,r="float"){let s=new Float32Array(e*3);for(let l=0;l<e;l+=1)s[l*3]=(Math.random()-.5)*44,s[l*3+1]=Math.random()*20-6,s[l*3+2]=-Math.random()*24+4;let a=new Vt;a.setAttribute("position",new mi(s,3));let o=new Sr({color:t,size:i,transparent:!0,opacity:.78});this.particles=new ns(a,o),this.particleMode=r,this.worldGroup.add(this.particles)}setBiome(e,t=1){let i=Math.max(1,Math.min(7,t||1));if(!this.enabled||this.currentBiome===e&&this.currentStage===i)return;this.currentBiome=e,this.currentStage=i,this.clearWorld();let r=Ou[e]||Ou.rainforest,s=Uu[(i-1)%Uu.length],a=new Fe(r.bg).lerp(new Fe(s.bgBlend),s.blendAmt),o=new Fe(r.fog).lerp(new Fe(s.bgBlend),s.blendAmt*.85);this.scene.background=a,this.scene.fog=new jr(o.getHex(),.023),this.ambientLight.color.setHex(r.ambient),this.keyLight.color.setHex(r.key).lerp(new Fe(s.sunColor),.35),this.keyLight.intensity=s.keyInt,this.keyLight.position.set(s.sunX,Math.max(4,s.sunY+4),14),this.fillLight.color.setHex(r.fill);let l=new Ei({color:s.sunColor}),c=new we(new Tn(i===7?1.55:1.9,18,18),l);c.position.set(s.sunX*1.4,s.sunY+3,-44),this.worldGroup.add(c);let u=new We({color:o.getHex(),roughness:.85,metalness:.15}),d=new we(new Oi(80,50),u);if(d.rotation.x=-Math.PI/2,d.position.set(0,-6.5,-14),this.worldGroup.add(d),e==="rainforest"){let h=new We({color:2826262,roughness:.9}),p=new We({color:1467700,roughness:.75});for(let f=-3;f<=3;f+=1){let y=new we(new ti(.45,.7,16,7),h);y.position.set(f*5.2,1,-12-Math.abs(f)*2.5),this.worldGroup.add(y);let m=new we(new cs(2.8,0),p);m.position.set(f*5.2,8.2,-12-Math.abs(f)*2.5),this.worldGroup.add(m)}this.addParticles(140,8843180,.2,"fall")}else if(e==="desert"){let h=new We({color:11827e3,roughness:.78}),p=new We({color:16638023,emissive:13273604,emissiveIntensity:.35});for(let[f,y,m]of[[-8,-16,6.5],[7,-22,8.5],[15,-13,4.5]]){let g=new we(new Nt(m,m*1.1,4),h);g.position.set(f,-6.5+m*.55,y),g.rotation.y=Math.PI/4,this.worldGroup.add(g);let _=new we(new Nt(m*.18,m*.2,4),p);_.position.set(f,-6.5+m*1,y),_.rotation.y=Math.PI/4,this.worldGroup.add(_)}this.addParticles(160,16569165,.22,"wind")}else if(e==="glacier"){let h=new We({color:8246268,roughness:.2,metalness:.2,transparent:!0,opacity:.85});for(let p=-3;p<=3;p+=1){let f=7+Math.abs(p)*3%5,y=new we(new Nt(1.8,f,5),h);y.position.set(p*4.8,-6.5+f*.5,-13-Math.abs(p)%2*5),this.worldGroup.add(y)}this.addParticles(170,14742270,.22,"fall")}else if(e==="volcano"){let h=new We({color:2825500,roughness:.9}),p=new Ei({color:16347926,transparent:!0,opacity:.55}),f=new we(new Oi(75,45),p);f.rotation.x=-Math.PI/2,f.position.set(0,-6.35,-14),this.worldGroup.add(f);for(let[y,m,g]of[[-9,-15,7],[0,-21,10],[10,-14,6.5]]){let _=new we(new ti(g*.28,g*.72,g,6),h);_.position.set(y,-6.5+g*.5,m),this.worldGroup.add(_)}this.addParticles(150,16486972,.24,"rise")}else if(e==="foundry"){let h=new We({color:3359061,metalness:.8,roughness:.35}),p=new We({color:16096779,emissive:14251782,emissiveIntensity:.45});for(let[f,y,m,g,_]of[[-7,2,-12,3.6,.5],[7.5,-.5,-14,4.4,-.4],[0,5.5,-18,5.2,.3]]){let w=new we(new yi(g,.48,8,18),h);w.position.set(f,y,m),w.userData={rotZ:_},this.worldGroup.add(w),this.animated.push(w);let S=new we(new Tn(.65,12,12),p);S.position.set(f,y,m),this.worldGroup.add(S)}this.addParticles(150,16498468,.2,"fall")}else if(e==="ottoman-palace"){let h=new We({color:998215,roughness:.35,metalness:.3}),p=new We({color:16498468,emissive:11817737,emissiveIntensity:.4,metalness:.85,roughness:.2}),f=new Ei({color:3003583});for(let[y,m,g]of[[-6.5,-13,3.2],[0,-17,4.4],[7.2,-13,3.2]]){let _=new we(new Tn(g,18,12,0,Math.PI*2,0,Math.PI/2),h);_.position.set(y,-2.5,m),this.worldGroup.add(_);let w=new we(new yi(g,.08,6,28),f);w.rotation.x=Math.PI/2,w.position.set(y,-2.5,m),this.worldGroup.add(w);let S=new we(new ti(.08,.14,1.8,8),p);S.position.set(y,-2.5+g+.8,m),this.worldGroup.add(S)}for(let y of[-11,11.5]){let m=new we(new ti(.38,.52,13,10),h);m.position.set(y,.5,-14),this.worldGroup.add(m);let g=new we(new yi(.55,.09,6,16),p);g.rotation.x=Math.PI/2,g.position.set(y,3.6,-14),this.worldGroup.add(g)}this.addParticles(135,3003583,.22,"rise")}else if(e==="ottoman-bosphorus"){let h=new We({color:1981023,metalness:.7,roughness:.3}),p=new Ei({color:3718648});for(let g of[-8.5,4.5]){let _=new we(new It(1.1,13,1.1),h);_.position.set(g,0,-14),this.worldGroup.add(_)}let f=new we(new It(36,.45,2.2),h);f.position.set(-1,-3.5,-14),this.worldGroup.add(f);let y=new we(new ti(1,1.2,7.5,8),h);y.position.set(11.5,-2.5,-11),this.worldGroup.add(y);let m=new we(new Nt(1.3,2.2,8),p);m.position.set(11.5,2.2,-11),m.userData={rotY:1.2},this.worldGroup.add(m),this.animated.push(m),this.addParticles(150,8246268,.2,"wind")}else if(e==="ottoman-galata"){let h=new We({color:7884840,roughness:.8}),p=new We({color:16096779,metalness:.65,roughness:.3}),f=new we(new ti(1.8,2,14,14),h);f.position.set(5.5,.5,-15),this.worldGroup.add(f);let y=new we(new Nt(2.1,4.2,14),p);y.position.set(5.5,9.6,-15),this.worldGroup.add(y);for(let[m,g]of[[-9,3],[11.5,4.2]]){let _=new we(new yi(2.4,.14,6,4),p);_.position.set(m,g,-13),_.userData={rotZ:1.35},this.worldGroup.add(_),this.animated.push(_)}this.addParticles(145,16639626,.22,"wind")}else if(e==="ottoman-observatory"){let h=new We({color:16436245,metalness:.85,roughness:.2}),p=new Ei({color:12616956});for(let[y,m,g]of[[5.6,.3,.6],[4.3,-.5,.4],[3.1,.7,-.5]]){let _=new we(new yi(y,.14,8,42),h);_.position.set(0,2.2,-16),_.userData={rotX:m,rotY:g},this.worldGroup.add(_),this.animated.push(_)}let f=new we(new hs(1.3,0),p);f.position.set(0,2.2,-16),f.userData={rotY:.9,rotZ:.5},this.worldGroup.add(f),this.animated.push(f),this.addParticles(220,15324671,.2,"float")}else if(e==="ottoman-shipyard"){let h=new We({color:4132893,metalness:.75,roughness:.35}),p=new Ei({color:16478597});for(let y=-2;y<=2;y+=1){let m=new we(new yi(5.8,.38,6,18,Math.PI),h);m.position.set(y*4.5,-2.5,-13-Math.abs(y)*1.8),this.worldGroup.add(m)}let f=new we(new Tn(1.6,14,14),p);f.position.set(0,1.5,-16),f.userData={pulse:!0},this.worldGroup.add(f),this.animated.push(f),this.addParticles(160,16478597,.24,"rise")}else if(e==="turkey-amasya"){let h=new We({color:4149062,roughness:.92}),p=new We({color:7893356,roughness:.8}),f=new We({color:16707722,emissive:11817737,emissiveIntensity:.45}),y=new We({color:366185,roughness:.25,metalness:.55}),m=new we(new Nt(16,17,6),h);m.position.set(-4,-.5,-24),this.worldGroup.add(m);let g=new we(new Nt(11,13,6),h);g.position.set(9,-1.5,-27),this.worldGroup.add(g);let _=new we(new It(5.5,2.8,3.2),p);_.position.set(-4,7.2,-19),this.worldGroup.add(_);for(let S of[-6.4,-1.6]){let A=new we(new ti(.95,1.05,4.2,8),p);A.position.set(S,7.9,-18.8),this.worldGroup.add(A)}for(let S of[-7,-4,-1.2]){let A=new we(new It(1.15,2.1,.8),f);A.position.set(S,2.4,-15.5),this.worldGroup.add(A)}let w=new we(new Oi(70,8),y);w.rotation.x=-Math.PI/2,w.position.set(0,-5.8,-11),this.worldGroup.add(w),this.addParticles(120,16707722,.2,"float")}else if(e==="turkey-yozgat"){let h=new We({color:14069882,roughness:.78}),p=new We({color:16707722,emissive:16096779,emissiveIntensity:.65}),f=new We({color:1467700,roughness:.82}),y=new we(new It(3.2,11.5,3.2),h);y.position.set(0,.2,-18),this.worldGroup.add(y);let m=new we(new Nt(2.3,3.4,4),new We({color:4674921}));m.position.set(0,7.6,-18),m.rotation.y=Math.PI/4,this.worldGroup.add(m);let g=new we(new os(.95,18),p);g.position.set(0,4.3,-16.35),this.worldGroup.add(g);for(let _=-4;_<=4;_+=1){if(Math.abs(_)<1.2)continue;let w=new we(new Nt(1.6+_%2*.4,5.2,7),f);w.position.set(_*4.2,-2.5,-14-Math.abs(_)*2.2),this.worldGroup.add(w)}this.addParticles(140,16639626,.22,"wind")}else if(e==="turkey-erzurum"){let h=new We({color:4674921,roughness:.85}),p=new We({color:16317180,roughness:.55}),f=new We({color:10105874,roughness:.75}),y=new We({color:959977,emissive:165063,emissiveIntensity:.4});for(let[g,_,w]of[[-11,16,-28],[10,18,-30],[0,14,-34]]){let S=new we(new Nt(9.5,_,5),h);S.position.set(g,-6.5+_/2,w),this.worldGroup.add(S);let A=new we(new Nt(3.8,_*.36,5),p);A.position.set(g,-6.5+_*.82,w),this.worldGroup.add(A)}for(let g of[-2.8,2.8]){let _=new we(new ti(.75,.95,11,10),f);_.position.set(g,.5,-17),this.worldGroup.add(_);let w=new we(new Nt(.95,2.2,10),y);w.position.set(g,7.1,-17),this.worldGroup.add(w)}let m=new we(new It(5.2,5.5,2.2),f);m.position.set(0,-3.5,-17.5),this.worldGroup.add(m),this.addParticles(210,16317180,.24,"fall")}else if(e==="turkey-corum"){let h=new We({color:9594947,roughness:.85}),p=new We({color:16436245,emissive:11817737,emissiveIntensity:.45,metalness:.85,roughness:.2});for(let g of[-3.6,3.6]){let _=new we(new It(2,9,2.5),h);_.position.set(g,-1,-16),this.worldGroup.add(_)}let f=new we(new It(10.2,1.8,2.6),h);f.position.set(0,4.2,-16),this.worldGroup.add(f);let y=new we(new yi(4.4,.28,10,32),p);y.position.set(0,3.5,-24),y.userData={rotZ:.32},this.worldGroup.add(y),this.animated.push(y);let m=new we(new yi(2.4,.18,8,24),p);m.position.set(0,3.5,-24),m.userData={rotZ:-.45},this.worldGroup.add(m),this.animated.push(m),this.addParticles(130,16638023,.22,"float")}else if(e==="turkey-samsun"){let h=new We({color:413243,roughness:.3,metalness:.5}),p=new We({color:16317180,roughness:.5}),f=new We({color:16096779,roughness:.5}),y=new we(new Oi(80,38),h);y.rotation.x=-Math.PI/2,y.position.set(0,-5.6,-15),this.worldGroup.add(y);let m=new we(new It(11.5,2.2,3.2),p);m.position.set(-2.5,-4.1,-18),this.worldGroup.add(m);let g=new we(new It(5.6,1.5,2.2),p);g.position.set(-2.5,-2.3,-18),this.worldGroup.add(g);let _=new we(new ti(.42,.48,3,10),f);_.position.set(-2,-.4,-18),_.rotation.z=-.1,this.worldGroup.add(_);let w=new we(new It(2.6,5.2,2.6),new We({color:6583435}));w.position.set(9.5,-3.2,-20),this.worldGroup.add(w);let S=new we(new Nt(.95,2.8,8),new We({color:16498468,metalness:.7}));S.position.set(9.5,.8,-20),this.worldGroup.add(S),this.addParticles(150,11006928,.22,"rise")}}update(e,t){if(!this.enabled)return;this.setBiome(t.biome,t.stage||1);let i=Bs(t),r=e*i;this.time+=r;let s=t.physicsRules?.mirrorCameraX?-1:1,a=((t.player?.x??400)-1280/2)*.0042*s,o=2.4-((t.player?.y??450)-720/2)*.0022;this.camera.position.x+=(a-this.camera.position.x)*Math.min(1,e*5),this.camera.position.y+=(o-this.camera.position.y)*Math.min(1,e*5);let l=(t.gravityScale<0?.06:0)+(t.windForceX||0)*18e-5;this.camera.rotation.z+=(l*s-this.camera.rotation.z)*Math.min(1,e*4),this.camera.lookAt(a*.35,.8,-14);for(let c of this.animated)if(c.userData.rotX&&(c.rotation.x+=c.userData.rotX*r),c.userData.rotY&&(c.rotation.y+=c.userData.rotY*r),c.userData.rotZ&&(c.rotation.z+=c.userData.rotZ*r),c.userData.pulse){let u=1+Math.sin(this.time*4)*.14;c.scale.set(u,u,u)}if(this.particles){let c=this.particles.geometry.attributes.position,u=c.array;for(let d=0;d<c.count;d+=1){let h=d*3;this.particleMode==="fall"?(u[h+1]-=5.5*r,u[h+1]<-6&&(u[h+1]=14)):this.particleMode==="rise"?(u[h+1]+=3.8*r,u[h+1]>14&&(u[h+1]=-6)):this.particleMode==="wind"?(u[h]+=7.5*r,u[h]>22&&(u[h]=-22)):u[h+1]+=Math.sin(this.time*1.8+d)*.5*r}c.needsUpdate=!0}this.renderer.render(this.scene,this.camera)}};var Yu="anadolu_kacisi_save_v3",M1="anadolu_kacisi_save_v2",Tc=document.getElementById("threeCanvas"),Ir=document.getElementById("gameCanvas"),Go=new Uo(Tc),ni=new Gs(Ir),Ls=new Hs,qt=new Vs,w1=document.getElementById("gameHud"),Fo=document.getElementById("hudChapterPill"),Fu=document.getElementById("hudDifficultyBadge"),T1=document.getElementById("hudStageTitle"),E1=document.getElementById("hudStageSub"),A1=document.getElementById("hudAlerts"),Sc=document.getElementById("hudMechanicPill"),R1=document.getElementById("hudScore2p"),C1=document.getElementById("hudScore2pText"),P1=document.getElementById("hudDeaths"),I1=document.getElementById("hudTimer"),L1=document.getElementById("mapChrome"),D1=document.getElementById("mapHeaderTitle"),qu=document.getElementById("btnMapCampaignToggle"),Ku=document.getElementById("btnMapModeToggle"),k1=document.getElementById("btnResetSave"),N1=document.getElementById("btnBackMenu"),Bu=document.getElementById("mapSelectedDiff"),O1=document.getElementById("mapSelectedTitle"),U1=document.getElementById("mapSelectedMeta"),F1=document.getElementById("btnMapPlay"),B1=document.getElementById("menuOverlay"),z1=document.getElementById("menuSubtitle"),G1=document.getElementById("menuDesc"),Zu=document.getElementById("btnCampaignClassic"),$u=document.getElementById("btnCampaignOttoman"),Ho=document.getElementById("btnCampaignTurkey"),Ju=document.getElementById("characterPicker"),zu=document.getElementById("charPickerTitle"),Is=Ju?.querySelector(".char-grid"),Ec=document.getElementById("btnCharTarget1"),Ac=document.getElementById("btnCharTarget2"),H1=document.getElementById("pauseOverlay"),V1=document.getElementById("clearOverlay"),W1=document.getElementById("victoryOverlay"),ju=document.getElementById("btnMode1P"),Qu=document.getElementById("btnMode2P"),ef=document.getElementById("btnOpenMap"),zo=document.getElementById("btnChaosMenu"),Rc=document.getElementById("btnChaosHud"),Cc=document.getElementById("btn3dHud"),X1=document.getElementById("btnRestart"),Y1=document.getElementById("btnMapHud"),Vo=document.getElementById("btnMute"),q1=document.getElementById("btnPause"),K1=document.getElementById("btnFullscreen"),Z1=document.getElementById("pauseStageName"),$1=document.getElementById("btnResume"),J1=document.getElementById("btnPauseRestart"),j1=document.getElementById("btnPauseMap"),Q1=document.getElementById("btnPauseMenu"),ev=document.getElementById("clearBadge"),tv=document.getElementById("clearTitle"),Mc=document.getElementById("clearWinnerText"),iv=document.getElementById("clearTime"),nv=document.getElementById("clearDeaths"),Dc=document.getElementById("btnNextStage"),rv=document.getElementById("btnClearMap"),sv=document.getElementById("victoryTime"),av=document.getElementById("victoryDeaths"),ov=document.getElementById("victoryRank"),lv=document.getElementById("btnVictoryMap"),cv=document.getElementById("btnVictoryMenu"),Gu=document.getElementById("touchControls"),$n=document.querySelector(".touch-left"),Pc=document.getElementById("touchLeft"),Ic=document.getElementById("touchRight"),tf=document.getElementById("touchJump"),nf=document.getElementById("touchAbility");function jn(n){return{unlocked:[n],cleared:{},totalDeaths:0,lastStageId:n}}function hv(){return{campaign:"classic",mode:"1p",muted:!1,chaosMode:!1,enable3D:!0,p1Character:"yeniceri",p2Character:"sipahi",p1TurkeyChar:"amasya-sehzade",p2TurkeyChar:"samsun-kaptan",campaigns:{classic:jn("1-1"),ottoman:jn("O1-1"),turkey:jn("T1-1")}}}function Bo(n,e){let t=jn(e);if(!n||typeof n!="object")return t;let i={unlocked:Array.isArray(n.unlocked)?n.unlocked:[e],cleared:n.cleared&&typeof n.cleared=="object"?n.cleared:{},totalDeaths:Number.isFinite(n.totalDeaths)?n.totalDeaths:0,lastStageId:typeof n.lastStageId=="string"?n.lastStageId:e};return i.unlocked.includes(e)||i.unlocked.unshift(e),i}function dv(){let n=hv();try{let e=localStorage.getItem(Yu);if(e){let i=JSON.parse(e);return{...n,campaign:["classic","ottoman","turkey"].includes(i.campaign)?i.campaign:"classic",mode:i.mode==="2p"?"2p":"1p",muted:!!i.muted,chaosMode:!!i.chaosMode,enable3D:i.enable3D!==void 0?!!i.enable3D:!0,p1Character:Yi[i.p1Character]?i.p1Character:"yeniceri",p2Character:Yi[i.p2Character]?i.p2Character:"sipahi",p1TurkeyChar:qi[i.p1TurkeyChar]?i.p1TurkeyChar:"amasya-sehzade",p2TurkeyChar:qi[i.p2TurkeyChar]?i.p2TurkeyChar:"samsun-kaptan",campaigns:{classic:Bo(i.campaigns?.classic,"1-1"),ottoman:Bo(i.campaigns?.ottoman,"O1-1"),turkey:Bo(i.campaigns?.turkey,"T1-1")}}}let t=localStorage.getItem(M1);if(t){let i=JSON.parse(t);return{...n,mode:i.mode==="2p"?"2p":"1p",muted:!!i.muted,campaigns:{classic:Bo(i,"1-1"),ottoman:jn("O1-1"),turkey:jn("T1-1")}}}return n}catch{return n}}function vi(){try{localStorage.setItem(Yu,JSON.stringify(Xe))}catch{}}var Xe=dv();qt.setMuted(Xe.muted);Vo.textContent=Xe.muted?"\u{1F507}":"\u{1F50A}";function pt(){return["classic","ottoman","turkey"].includes(Xe.campaign)?Xe.campaign:"classic"}function gi(n=pt()){return Xe.campaigns[n]||Xe.campaigns.classic}function rf(n=pt()){return n==="ottoman"?Fr:n==="turkey"?Br:er}function Hi(n,e=pt()){let t=gi(e);return t.unlocked.includes(n)||!!t.cleared[n]}function uv(n,e=pt()){let t=gi(e);n&&!t.unlocked.includes(n)&&t.unlocked.push(n)}function sf(n,e=pt()){let t=yn(e),i=t.findIndex(r=>r.id===n);return i>=0&&i<t.length-1?t[i+1].id:null}function Nr(n,e={}){let t=n.campaign||"classic";if(t==="classic")return{...e,mode:Yt,chaosMode:!!Xe.chaosMode,p1Character:"explorer",p2Character:"explorer",p1Scarf:"#ef4444",p2Scarf:"#38bdf8"};if(t==="turkey"){let s=qi[Xe.p1TurkeyChar]||qi["amasya-sehzade"],a=qi[Xe.p2TurkeyChar]||qi["samsun-kaptan"];return{...e,mode:Yt,chaosMode:!!Xe.chaosMode,p1Character:s.id,p2Character:a.id,p1Scarf:s.scarfColor,p2Scarf:a.scarfColor}}let i=Yi[Xe.p1Character]||Yi.yeniceri,r=Yi[Xe.p2Character]||Yi.sipahi;return{...e,mode:Yt,chaosMode:!!Xe.chaosMode,p1Character:i.id,p2Character:r.id,p1Scarf:i.scarfColor,p2Scarf:r.scarfColor}}var je="menu",kn=pt(),Qn=1,Yt=Xe.mode==="2p"?"2p":"1p",Ds=0,ks=0,Dn=0,Hu=gi(),_t=Hi(Hu.lastStageId)?Hu.lastStageId:Xi[kn].firstStageId,af=(Qt[_t]||Bn[0]).biome,Xt=_t,_e=Fn(Qt[_t]||Bn[0],Nr(Qt[_t]||Bn[0]));function kc(n){kn=["classic","ottoman","turkey"].includes(n)?n:"classic",typeof document<"u"&&document.body&&(document.body.dataset.mode=kn)}var Tt=new Set,dn=!1,In=!1,Lr=!1,Dr=!1,mt={left:!1,right:!1,jump:!1,ability:!1},Ln={left:new Set,right:new Set,jump:new Set,ability:new Set},Jn=new Map,fv=typeof window<"u"&&new URLSearchParams(window.location.search).get("touch")==="1",Lc=fv||"ontouchstart"in window||navigator.maxTouchPoints>0||(window.matchMedia?.("(pointer: coarse)").matches??!1);function kr(){return Yt==="2p"?Tt.has("KeyW"):Tt.has("Space")||Tt.has("ArrowUp")||Tt.has("KeyW")}function Ns(){return Tt.has("ArrowUp")}function Nc(){Pc?.classList.toggle("is-pressed",mt.left),Ic?.classList.toggle("is-pressed",mt.right),tf?.classList.toggle("is-pressed",mt.jump),nf?.classList.toggle("is-pressed",mt.ability)}function Oc(){Tt.clear(),dn=!1,In=!1,Lr=!1,Dr=!1,mt.left=!1,mt.right=!1,mt.jump=!1,mt.ability=!1,Ln.left.clear(),Ln.right.clear(),Ln.jump.clear(),Ln.ability.clear(),Jn.clear(),Nc()}function of(n){let e=Math.floor(n/60),t=n%60,i=String(e).padStart(2,"0"),r=t.toFixed(1).padStart(4,"0");return`${i}:${r}`}function Wo(){let n=pt(),e=n==="ottoman"||n==="turkey";if(Ju.classList.toggle("hidden",!e),!e||!Is)return;let t=n==="turkey",i=t?el:Qo,r=t?qi:Yi,s=t?"p1TurkeyChar":"p1Character",a=t?"p2TurkeyChar":"p2Character",o=r[Xe[s]]||i[0],l=r[Xe[a]]||i[t?4:1];zu&&(zu.textContent=t?"ANADOLU \u015EEH\u0130R KARAKTER SE\xC7\u0130M\u0130":"OSMANLI S\u0130BER KARAKTER SE\xC7\u0130M\u0130"),Ec.textContent=`O1: ${o.name.split(" ")[1]||o.name}`,Ac.textContent=`O2: ${l.name.split(" ")[1]||l.name}`,Ec.classList.toggle("active",Qn===1),Ac.classList.toggle("active",Qn===2);let c=Qn===1?Xe[s]:Xe[a];Is.classList.toggle("five-cols",t),Is.innerHTML=i.map(u=>`
      <button class="char-card ${u.id===c?"active":""}" data-char="${u.id}" type="button">
        <span class="char-icon">${u.icon}</span>
        <strong>${u.name}</strong>
        <small>${u.tag.split("&")[0].trim()}</small>
      </button>`).join("")}function Uc(){let n=pt(),e=gi(n),t=Xi[n],i=Object.keys(e.cleared).length>0,r=Hi(e.lastStageId,n)?e.lastStageId:t.firstStageId;Zu.classList.toggle("active",n==="classic"),$u.classList.toggle("active",n==="ottoman"),Ho&&Ho.classList.toggle("active",n==="turkey"),z1.textContent=n==="ottoman"?"MOD 2 \xB7 F\xDCT\xDCR\u0130ST\u0130K OSMANLI \xB7 5 S\u0130BER HAR\u0130TA \xB7 35 A\u015EAMA":n==="turkey"?"MOD 3 \xB7 ANADOLU \u015EEH\u0130RLER\u0130 \xB7 5 \u015EEH\u0130R HAR\u0130TASI \xB7 35 A\u015EAMA":"MOD 1 \xB7 GER\xC7EK\xC7\u0130 KA\xC7I\u015E \xB7 5 DO\u011EAL B\u0130YOM \xB7 35 A\u015EAMA",G1.textContent=n==="ottoman"?"Neo-Topkap\u0131\u2019dan Z\u0131rhl\u0131 Tersane\u2019ye uzanan 35 siber-Osmanl\u0131 a\u015Famas\u0131! Karakterini se\xE7 ve sefere \xE7\u0131k.":n==="turkey"?"Amasya, Yozgat, Erzurum, \xC7orum ve Samsun temal\u0131 35 ger\xE7ek\xE7i a\u015Fama! Me\u015Fhur \xFCr\xFCnleri topla ve tuzaklar\u0131 a\u015F.":"Ya\u011Fmur ormanlar\u0131ndan f\u0131rt\u0131nal\u0131 d\xF6k\xFCmhaneye s\u0131ral\u0131 ilerleyi\u015Fle 35 a\u015Famadaki tuzaklar\u0131 a\u015F!",ju.querySelector("span").textContent=i?`Devam Et (${r})`:"Tek Ki\u015Filik Ka\xE7\u0131\u015F",Qu.querySelector("span").textContent="Ayn\u0131 Klavyede Yar\u0131\u015F (WASD vs Oklar)",ef.textContent=n==="ottoman"?"Mod 2 Osmanl\u0131 Haritas\u0131 (35 A\u015Fama)":n==="turkey"?"Mod 3 Anadolu Haritas\u0131 (35 A\u015Fama)":"Mod 1 D\xFCnya Haritas\u0131 (35 A\u015Fama)",Wo()}function Or(){let n=pt(),e=gi(n),t=yn(n),i=rf(n);(!Hi(Xt,n)||!t.some(l=>l.id===Xt))&&(Xt=Hi(e.lastStageId,n)&&t.some(l=>l.id===e.lastStageId)?e.lastStageId:Xi[n].firstStageId),D1.textContent=n==="ottoman"?"MOD 2 \xB7 OSMANLI (35)":n==="turkey"?"MOD 3 \xB7 ANADOLU (35)":"MOD 1 \xB7 KLAS\u0130K (35)",qu.textContent=n==="classic"?"Mod 2: Osmanl\u0131":n==="ottoman"?"Mod 3: Anadolu":"Mod 1: Klasik",Ku.textContent=Yt==="2p"?"Mod: 2 Oyuncu":"Mod: 1 Oyuncu";let r=Qt[Xt]||t[0],s=i[r.chapter],a=pn[r.difficulty]||pn.orta,o=e.cleared[r.id];Bu.textContent=a.label,Bu.style.color=a.color,O1.textContent=`${r.id} \xB7 ${r.title}`,U1.textContent=o?`B\xF6l\xFCm ${s.id}: ${s.title} \xB7 En \u0130yi: ${o.bestTime.toFixed(1)}s`:`B\xF6l\xFCm ${s.id}: ${s.title} \xB7 ${r.subtitle}`}function Fc(){let n=Go.enabled&&Xe.enable3D&&je!=="map";ni.use3DBackdrop=n,Tc&&Tc.classList.toggle("hidden",!n)}function Xo(){if(!Gu)return;let n=typeof window<"u"&&window.innerWidth<=640,e=(Lc||n)&&je==="playing";Gu.classList.toggle("hidden",!e)}function Yo(){let n=!!Xe.chaosMode,e=Go.enabled&&!!Xe.enable3D;zo&&(zo.textContent=n?"\u{1F300} Kaos Fizi\u011Fi: A\xC7IK":"\u{1F300} Kaos Fizi\u011Fi: Kapal\u0131",zo.classList.toggle("active-toggle",n)),Rc&&Rc.classList.toggle("active-toggle",n),Cc&&Cc.classList.toggle("active-toggle",e)}function xt(n){let e=je;je=n,e==="playing"&&je!=="playing"&&Oc(),B1.classList.toggle("hidden",je!=="menu"),L1.classList.toggle("hidden",je!=="map"),H1.classList.toggle("hidden",je!=="paused"),V1.classList.toggle("hidden",je!=="clear"),W1.classList.toggle("hidden",je!=="victory"),w1.classList.toggle("hidden",je==="menu"||je==="map"),Fc(),Xo(),Yo(),je==="menu"?Uc():je==="map"&&Or()}function pv(){let e=rf(_e.campaign||"classic")[_e.chapter]||er[_e.chapter],t=pn[_e.difficulty]||pn.orta;Fo.textContent=`B\xD6L\xDCM ${e.id} \xB7 ${e.title.toLocaleUpperCase("tr-TR")}`,Fo.style.borderColor=e.accent,Fo.style.color=e.accent,Fo.style.background=`${e.accent}22`,Fu.textContent=t.label,Fu.style.color=t.color,T1.textContent=`${_e.id} \xB7 ${_e.title}`,E1.textContent=_e.subtitle,Z1.textContent=`${_e.id} \xB7 ${_e.title}`,R1.classList.toggle("hidden",Yt!=="2p"),C1.textContent=`O1: ${Ds} \xB7 O2: ${ks}`}function lf(){P1.textContent=String(Dn),I1.textContent=of(_e.elapsed);let n=[];if(_e.invertControls&&n.push('<span class="alert-pill invert">\u26A1 KONTROLLER TERS</span>'),_e.gravityScale<0&&n.push('<span class="alert-pill gravity">\u2B06 TERS YER\xC7EK\u0130M\u0130</span>'),(_e.player.groundSurface==="ice"||_e.biome==="glacier")&&_e.platforms.some(i=>i.surface==="ice")&&n.push('<span class="alert-pill ice">\u2744 KAYGAN ZEM\u0130N</span>'),Math.abs(_e.windForceX)>20){let i=_e.windForceX>0?"SA\u011EA \u27A1":"\u2B05 SOLA";n.push(`<span class="alert-pill wind">\u{1F4A8} R\xDCZGAR: ${i}</span>`)}_e.darkness&&n.push('<span class="alert-pill dark">\u{1F526} FENER AKT\u0130F</span>');let e=_e.physicsRules;e?.voidWrap&&n.push('<span class="alert-pill invert">\u{1F300} BO\u015ELUK PORTALI</span>'),e?.jumpFlipsGravity&&n.push('<span class="alert-pill gravity">\u2B06\u2B07 ZIPLAMA=TAVAN</span>'),e?.toggleInvertOnJump&&n.push('<span class="alert-pill invert">\u{1F504} ZIPLAMA=TERS</span>'),e?.mirrorCameraX&&n.push('<span class="alert-pill wind">\u{1FA9E} AYNA D\xDCNYA</span>'),e?.bounceWalls&&n.push('<span class="alert-pill ice">\u{1F3C0} ELAST\u0130K DUVAR</span>'),A1.innerHTML=n.join("");let t=bh(_e);t?(Sc.textContent=`${t.icon} ${t.label}: ${t.valueText}`,Sc.className=`mechanic-pill tone-${t.tone||"info"}`):Sc.className="mechanic-pill hidden"}function mv(){document.activeElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()}function Vi(n,e=!1){mv(),dn=!1,In=!1,Lr=!1,Dr=!1;let t=pt(),i=yn(t),r=Xi[t].firstStageId,s=Hi(n,t)&&i.some(l=>l.id===n)?n:r,a=Qt[s]||i[0];kn=t,af=a.biome,kc(kn),_t=a.id,Xt=a.id;let o=gi(t);o.lastStageId=a.id,e||(Dn=0),vi(),_e=Fn(a,Nr(a,{deaths:Dn})),_e.players[0]&&(_e.players[0].prevJumpHeld=kr()||mt.jump),_e.players[1]&&(_e.players[1].prevJumpHeld=Ns()),ni.resetForLevel(_e),qt.startBiomeAmbience(a.biome),pv(),lf(),xt("playing")}function yv(){let n=_e.id,e=_e.campaign||pt(),t=gi(e),i=yn(e),r=_e.elapsed,s=t.cleared[n];t.cleared[n]={bestTime:s?Math.min(s.bestTime,r):r,deaths:s?Math.min(s.deaths,Dn):Dn},Yt==="2p"&&(_e.winnerId===1?Ds+=1:_e.winnerId===2&&(ks+=1));let a=sf(n,e);a&&(uv(a,e),Xt=a,t.lastStageId=a),vi();let o=Object.keys(t.cleared).length;if(!a&&o>=i.length){let l=Object.values(t.cleared).reduce((d,h)=>d+h.bestTime,0),c=t.totalDeaths,u=c<=20?"S":c<=55?"A":c<=110?"B":"C";sv.textContent=of(l),av.textContent=String(c),ov.textContent=u,xt("victory");return}ev.textContent=Yt==="2p"?"2 K\u0130\u015E\u0130L\u0130K A\u015EAMA GE\xC7\u0130LD\u0130":"A\u015EAMA GE\xC7\u0130LD\u0130",tv.textContent=`${_e.id} \xB7 ${_e.title} Tamamland\u0131!`,Yt==="2p"&&_e.winnerId?(Mc.textContent=`\u{1F3C6} OYUNCU ${_e.winnerId} KAZANDI! (Skor: O1 ${Ds} - ${ks} O2)`,Mc.classList.remove("hidden")):Mc.classList.add("hidden"),iv.textContent=`${r.toFixed(1)}s`,nv.textContent=String(Dn),Dc.textContent=a?`Sonraki A\u015Fama: ${a} (Bo\u015Fluk)`:"Haritaya D\xF6n",xt("clear")}function Vu(n){let e=pt(),t=yn(e).filter(a=>Hi(a.id,e));if(t.length===0)return;let i=t.findIndex(a=>a.id===Xt),r=i>=0?i:0,s=Math.max(0,Math.min(t.length-1,r+n));Xt=t[s].id,Or()}function qo(n){Xe.campaign=["classic","ottoman","turkey"].includes(n)?n:"classic";let e=pt();kn=e,kc(kn);let t=gi(e);Xt=Hi(t.lastStageId,e)?t.lastStageId:Xi[e].firstStageId,_t=Xt;let i=Qt[_t];i&&(af=i.biome,_e=Fn(i,Nr(i)),ni.resetForLevel(_e)),vi(),Uc(),je==="map"&&Or()}Zu.addEventListener("click",n=>{n.currentTarget.blur(),qo("classic")});$u.addEventListener("click",n=>{n.currentTarget.blur(),qo("ottoman")});Ho&&Ho.addEventListener("click",n=>{n.currentTarget.blur(),qo("turkey")});Ec.addEventListener("click",n=>{n.currentTarget.blur(),Qn=1,Wo()});Ac.addEventListener("click",n=>{n.currentTarget.blur(),Qn=2,Wo()});Is&&Is.addEventListener("click",n=>{let e=n.target.closest(".char-card");if(!e)return;e.blur();let t=e.dataset.char,i=pt();if(i==="turkey"){if(!qi[t])return;Qn===1?Xe.p1TurkeyChar=t:Xe.p2TurkeyChar=t}else if(i==="ottoman"){if(!Yi[t])return;Qn===1?Xe.p1Character=t:Xe.p2Character=t}else return;vi(),Wo(),Qt[_t]&&(_e=Fn(Qt[_t],Nr(Qt[_t])),ni.resetForLevel(_e))});ju.addEventListener("click",n=>{n.currentTarget.blur(),qt.unlock(),Yt="1p",Xe.mode="1p",vi();let e=gi();Vi(e.lastStageId||Xi[pt()].firstStageId)});Qu.addEventListener("click",n=>{n.currentTarget.blur(),qt.unlock(),Yt="2p",Xe.mode="2p",Ds=0,ks=0,vi();let e=gi();Vi(e.lastStageId||Xi[pt()].firstStageId)});ef.addEventListener("click",n=>{n.currentTarget.blur(),qt.unlock(),xt("map")});qu.addEventListener("click",n=>{n.currentTarget.blur();let e=pt();qo(e==="classic"?"ottoman":e==="ottoman"?"turkey":"classic")});Ku.addEventListener("click",n=>{n.currentTarget.blur(),Yt=Yt==="1p"?"2p":"1p",Xe.mode=Yt,vi(),Or()});F1.addEventListener("click",n=>{n.currentTarget.blur(),qt.unlock(),Vi(Xt)});N1.addEventListener("click",n=>{n.currentTarget.blur(),xt("menu")});k1.addEventListener("click",n=>{n.currentTarget.blur();let e=pt(),t=Xi[e].firstStageId;Xe.campaigns[e]=jn(t),Xt=t,_t=t,Ds=0,ks=0,vi(),Or()});X1.addEventListener("click",n=>{n.currentTarget.blur(),qt.unlock(),Vi(_t,!0)});function Bc(){Xe.chaosMode=!Xe.chaosMode,vi(),Yo(),je==="playing"||je==="paused"?Vi(_t,!0):Qt[_t]&&(_e=Fn(Qt[_t],Nr(Qt[_t])),ni.resetForLevel(_e))}function cf(){Xe.enable3D=!Xe.enable3D,vi(),Fc(),Yo()}zo.addEventListener("click",n=>{n.currentTarget.blur(),Bc()});Rc.addEventListener("click",n=>{n.currentTarget.blur(),qt.unlock(),Bc()});Cc.addEventListener("click",n=>{n.currentTarget.blur(),cf()});Y1.addEventListener("click",n=>{n.currentTarget.blur(),xt("map")});Vo.addEventListener("click",n=>{n.currentTarget.blur(),qt.unlock(),Xe.muted=!Xe.muted,qt.setMuted(Xe.muted),Vo.textContent=Xe.muted?"\u{1F507}":"\u{1F50A}",vi()});q1.addEventListener("click",n=>{n.currentTarget.blur(),je==="playing"?xt("paused"):je==="paused"&&xt("playing")});K1?.addEventListener("click",async n=>{n.currentTarget.blur();try{document.fullscreenElement?await document.exitFullscreen():(await document.documentElement.requestFullscreen(),window.screen?.orientation?.lock&&window.screen.orientation.lock("landscape").catch(()=>{}))}catch{}});$1.addEventListener("click",n=>{n.currentTarget.blur(),xt("playing")});J1.addEventListener("click",()=>Vi(_t,!0));j1.addEventListener("click",()=>xt("map"));Q1.addEventListener("click",()=>xt("menu"));Dc.addEventListener("click",()=>{qt.unlock();let n=sf(_t,_e.campaign||pt());n?Vi(n):xt("map")});rv.addEventListener("click",()=>xt("map"));lv.addEventListener("click",()=>xt("map"));cv.addEventListener("click",()=>xt("menu"));function hf(n,e){let t=Ir.getBoundingClientRect();return{x:(n-t.left)/t.width*1280,y:(e-t.top)/t.height*720}}Ir.addEventListener("mousemove",n=>{if(je!=="map"){Ir.style.cursor="default";return}let e=pt(),{x:t,y:i}=hf(n.clientX,n.clientY),r=Ls.getNodeAt(t,i,e);Ls.hoveredId=r,Ir.style.cursor=r&&Hi(r,e)?"pointer":"default"});Ir.addEventListener("click",n=>{if(je!=="map")return;qt.unlock();let e=pt(),{x:t,y:i}=hf(n.clientX,n.clientY),r=Ls.getNodeAt(t,i,e);!r||!Hi(r,e)||(Xt===r?Vi(r):(Xt=r,Or()))});window.addEventListener("keydown",n=>{if(qt.unlock(),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Space"].includes(n.code)&&n.preventDefault(),je==="map"){n.code==="ArrowRight"||n.code==="ArrowUp"||n.code==="KeyD"||n.code==="KeyW"?Vu(1):n.code==="ArrowLeft"||n.code==="ArrowDown"||n.code==="KeyA"||n.code==="KeyS"?Vu(-1):n.code==="Space"||n.code==="Enter"?Vi(Xt):n.code==="Escape"&&xt("menu");return}n.repeat||(Yt==="2p"?(n.code==="KeyW"&&(dn=!0),n.code==="ArrowUp"&&(Lr=!0)):(n.code==="Space"||n.code==="ArrowUp"||n.code==="KeyW"||n.key===" ")&&(dn=!0)),n.code&&Tt.add(n.code),n.code==="KeyR"&&(je==="playing"||je==="paused")&&Vi(_t,!0),n.code==="KeyM"&&(je==="playing"||je==="paused"||je==="clear")&&xt("map"),n.code==="KeyV"&&Vo.click(),n.code==="KeyC"&&Bc(),n.code==="Digit3"&&cf(),n.code==="Escape"&&(je==="playing"?xt("paused"):je==="paused"&&xt("playing")),(n.code==="Space"||n.code==="Enter")&&je==="clear"&&Dc.click()});window.addEventListener("keyup",n=>{["ArrowLeft","ArrowRight","ArrowUp","Space"].includes(n.code)&&n.preventDefault();let e=kr(),t=Ns();n.code&&Tt.delete(n.code),e&&!kr()&&(In=!0),t&&!Ns()&&(Dr=!0)});window.addEventListener("blur",Oc);document.addEventListener("visibilitychange",()=>{document.hidden&&Oc()});function wc(){let n=!1,e=!1;for(let t of Jn.values())t==="left"?n=!0:t==="right"&&(e=!0);mt.left=n,mt.right=e,Nc()}function Wu(n){if(!Pc||!Ic)return null;let e=Pc.getBoundingClientRect(),t=Ic.getBoundingClientRect(),i=(e.right+t.left)/2;return n<=i?"left":"right"}if($n){$n.addEventListener("pointerdown",e=>{e.preventDefault(),qt.unlock();try{$n.setPointerCapture(e.pointerId)}catch{}Jn.set(e.pointerId,Wu(e.clientX)),wc()}),$n.addEventListener("pointermove",e=>{Jn.has(e.pointerId)&&(Jn.set(e.pointerId,Wu(e.clientX)),wc())});let n=e=>{Jn.has(e.pointerId)&&(Jn.delete(e.pointerId),wc())};$n.addEventListener("pointerup",n),$n.addEventListener("pointercancel",n),$n.addEventListener("lostpointercapture",n)}function df(n,e){if(!n)return;let t=()=>{let r=Ln[e].size>0;e==="jump"&&(r&&!mt.jump&&(dn=!0),!r&&mt.jump&&(In=!0)),mt[e]=r,Nc()};n.addEventListener("pointerdown",r=>{r.preventDefault(),qt.unlock();try{n.setPointerCapture(r.pointerId)}catch{}Ln[e].add(r.pointerId),t()});let i=r=>{Ln[e].has(r.pointerId)&&(Ln[e].delete(r.pointerId),t())};n.addEventListener("pointerup",i),n.addEventListener("pointercancel",i),n.addEventListener("lostpointercapture",i)}df(tf,"jump");df(nf,"ability");window.addEventListener("touchstart",()=>{Lc||(Lc=!0,Xo())},{passive:!0});window.addEventListener("resize",Xo);Xo();var Xu=performance.now();function uf(n){let e=Math.min(.05,(n-Xu)/1e3);if(Xu=n,je==="playing"){let t=Tt.has("KeyE")||Tt.has("ShiftLeft")||Tt.has("ShiftRight")||mt.ability,i;if(Yt==="2p"?i={p1:{left:Tt.has("KeyA")||mt.left,right:Tt.has("KeyD")||mt.right,jump:kr()||mt.jump,jumpPressed:dn,jumpReleased:In,ability:t},p2:{left:Tt.has("ArrowLeft"),right:Tt.has("ArrowRight"),jump:Ns(),jumpPressed:Lr,jumpReleased:Dr,ability:t}}:i={left:Tt.has("ArrowLeft")||Tt.has("KeyA")||mt.left,right:Tt.has("ArrowRight")||Tt.has("KeyD")||mt.right,jump:kr()||mt.jump,jumpPressed:dn,jumpReleased:In,ability:t},dn=!1,In=!1,Lr=!1,Dr=!1,Eh(_e,i,e),_e.events.length>0){let r=_e.campaign||pt(),s=gi(r);for(let a of _e.events)a.type==="death"&&(Dn+=1,s.totalDeaths+=1,vi());ni.processEvents(_e.events,_e.biome),qt.processEvents(_e.events,_e.biome),_e.events.length=0}if(_e.status==="dying"&&_e.respawnTimer<=0){dn=!1,In=!1,Lr=!1,Dr=!1;let r=Qt[_t];_e=Fn(r,Nr(r,{deaths:Dn})),_e.players[0]&&(_e.players[0].prevJumpHeld=kr()||mt.jump),_e.players[1]&&(_e.players[1].prevJumpHeld=Ns()),ni.resetForLevel(_e)}else _e.status==="cleared"&&yv();ni.update(e,_e),ni.use3DBackdrop&&Go.update(e,_e),ni.render(_e),lf()}else if(je==="map"){let t=pt();Ls.update(e),Ls.draw(ni.ctx,gi(t),Xt,i=>Hi(i,t),t)}else ni.update(e,_e),ni.use3DBackdrop&&Go.update(e,_e),ni.render(_e);requestAnimationFrame(uf)}kc(kn);Fc();Yo();Uc();xt("menu");requestAnimationFrame(uf);})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
