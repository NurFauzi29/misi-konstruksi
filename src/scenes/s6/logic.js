// GENERATED oleh scripts/convert-mockup.mjs dari mockup/6. Scene Evaluasi.dc.html — jangan diedit manual.
/* eslint-disable */
import { DCLogic } from '../../dc/runtime.jsx';
import { __mkLoad, __mkSave, __mkNav, __dcGo } from '../../dc/mk.js';

const PROFS = ['MANDOR','SURVEYOR','ESTIMATOR','LOGISTIK','PENGAWAS','PELAKSANA','ASISTEN','ADMIN TEKNIK'];

const BANK = [
  {id:'q1', kind:'mcq', prof:'MANDOR',
   text:'Apakah tugas dan peran utama seorang Mandor dalam operasional harian di lokasi konstruksi perumahan?',
   opts:['Menandatangani kontrak legal pembiayaan proyek dengan pemilik lahan.','Mengarahkan, membagi tugas, dan mengawasi pekerjaan harian para tukang di lapangan.','Mengukur beda tinggi permukaan tanah menggunakan alat Total Station.','Menyusun Rencana Anggaran Biaya (RAB) dan mengkalkulasi kebutuhan semen.','Menerbitkan surat teguran resmi kepada kontraktor utama jika terjadi keretakan struktur.'],
   ans:1, why:'Mandor memimpin operasional harian para tukang di lapangan.'},
  {id:'q2', kind:'mcq', prof:'SURVEYOR',
   text:'Tugas krusial apakah yang dilakukan seorang Surveyor sebelum penggalian fondasi bangunan rumah dimulai?',
   opts:['Menentukan titik koordinat batas lahan dan elevasi bangunan (setting out).','Menghitung total gaji dan upah harian para tukang kayu.','Membeli material besi beton dari distributor luar.','Menyimpan nota pembelian dan surat jalan pengiriman barang di gudang.','Membuat draf tagihan progres fisik (termyn) kepada pemilik proyek.'],
   ans:0, why:'Setting out menentukan posisi dan elevasi bangunan sebelum galian dimulai.'},
  {id:'q3', kind:'mcq', prof:'ESTIMATOR',
   text:'Dokumen acuan utama apakah yang dihitung seorang Estimator untuk menghasilkan Rencana Anggaran Biaya (RAB)?',
   opts:['Surat jalan pengiriman material dan daftar absensi pekerja.','Gambar kerja (engineering drawing) dan Rencana Kerja dan Syarat-syarat (RKS).','Buku kas umum dan nota pembelian alat pelindung diri (APD).','Laporan cuaca mingguan dan sertifikat tanah pemilik perumahan.','Surat Izin Mendirikan Bangunan (IMB) dan struktur organisasi kelurahan.'],
   ans:1, why:'Volume dan biaya dihitung dari gambar kerja beserta RKS.'},
  {id:'q4', kind:'mcq', prof:'LOGISTIK',
   text:'Prosedur awal apa yang harus dijalankan petugas Logistik saat truk pengangkut semen tiba di gudang proyek?',
   opts:['Langsung menginstruksikan tukang untuk mengaduk semen dengan pasir.','Memeriksa kesesuaian jumlah, jenis, dan kondisi fisik material berdasarkan surat jalan.','Membayar tunai seluruh harga material kepada pengemudi truk tanpa kuitansi.','Menguji kuat tekan beton di laboratorium uji bahan.','Mengubah spesifikasi bahan yang dipesan sesuai keinginan pribadi.'],
   ans:1, why:'Penerimaan material selalu diawali pemeriksaan terhadap surat jalan.'},
  {id:'q5', kind:'mcq', prof:'PENGAWAS',
   text:'Jika inspeksi menemukan kolom beton keropos dan membahayakan struktur, tindakan berwenang apa yang harus diambil Pengawas Lapangan?',
   opts:['Membiarkan pengerjaan tetap berjalan agar tidak terlambat dari jadwal.','Menerbitkan surat instruksi perbaikan atau penghentian pekerjaan sementara (stop work order).','Mengambil alih pengerjaan adonan beton secara langsung menggantikan tukang.','Menambah anggaran biaya proyek tanpa mengonfirmasi pemilik perumahan.','Memutus kontrak kerja seluruh tim arsitek perencana.'],
   ans:1, why:'Pengawas berwenang menerbitkan instruksi perbaikan atau stop work order.'},
  {id:'q6', kind:'mcq', prof:'PELAKSANA',
   text:'Instrumen manajemen waktu manakah yang digunakan Pelaksana Lapangan untuk mengontrol kemajuan fisik pekerjaan mingguan?',
   opts:['Waterpass dan rambu ukur.','Kurva S (S-Curve) dan Jadwal Pelaksanaan (Master Schedule).','Kalkulator finansial dan kuitansi pembayaran.','Lembar berita acara serah terima kunci rumah.','Draf gambar purna laksana (As-Built Drawing).'],
   ans:1, why:'Kurva S dan master schedule dipakai mengendalikan progres pekerjaan.'},
  {id:'q7', kind:'mcq', prof:'ASISTEN',
   text:'Keterampilan teknis manakah yang penting dikuasai seorang Asisten Teknik untuk membantu Pelaksana di lapangan?',
   opts:['Membaca gambar detail CAD dan mendokumentasikan volume pencatatan fisik harian.','Menegosiasikan harga beli tanah kavling kepada warga sekitar.','Memperbaiki mesin traktor dan kendaraan operasional proyek yang rusak.','Menyusun undang-undang ketenagakerjaan dan jaminan sosial pekerja.','Menghitung margin keuntungan bersih penjualan unit perumahan.'],
   ans:0, why:'Asisten Teknik mendukung pekerjaan teknis: membaca gambar dan mencatat volume harian.'},
  {id:'q8', kind:'mcq', prof:'ADMIN TEKNIK',
   text:'Dokumen teknis penting apakah yang dikelola dan diarsip Admin Teknik pada tahap penutupan proyek perumahan?',
   opts:['Laporan slip gaji tukang minggu pertama.','Gambar terpasang akhir (As-Built Drawing) dan Berita Acara Serah Terima (BAST).','Brosur promosi penjualan rumah di media sosial.','Daftar inventaris alat makan di kantin proyek.','Surat permohonan sumbangan warga sekitar.'],
   ans:1, why:'Penutupan proyek membutuhkan As-Built Drawing dan BAST yang lengkap.'},

  {id:'q9', kind:'tf', prof:'MANDOR', ans:true,
   text:'"Mandor berfungsi sebagai penghubung komunikasi teknis antara instruksi Pelaksana Lapangan dengan pelaksanaan kerja para tukang."',
   why:'Mandor menerjemahkan gambar kerja/instruksi pelaksana ke pekerjaan harian tukang.'},
  {id:'q10', kind:'tf', prof:'SURVEYOR', ans:false,
   text:'"Peralatan utama Surveyor untuk mengukur sudut horizontal, sudut vertikal, dan jarak presisi adalah kalkulator bisnis dan mistar plastik."',
   why:'Alat utamanya adalah Total Station, theodolite, atau waterpass.'},
  {id:'q11', kind:'tf', prof:'ESTIMATOR', ans:true,
   text:'"Kesalahan perhitungan volume material oleh Estimator dapat berdampak langsung pada pembengkakan anggaran atau kerugian proyek."',
   why:'Akurasi Estimator menentukan efisiensi RAB.'},
  {id:'q12', kind:'tf', prof:'LOGISTIK', ans:false,
   text:'"Staf Logistik berwenang mengubah spesifikasi mutu besi beton yang tertulis di RKS secara sepihak tanpa persetujuan tim perencanaan."',
   why:'Logistik menyediakan material sesuai spesifikasi RKS, bukan mengubahnya.'},
  {id:'q13', kind:'tf', prof:'PENGAWAS', ans:true,
   text:'"Pengawas Lapangan bertugas mewakili kepentingan pemilik proyek untuk memverifikasi mutu dan kualitas hasil pekerjaan kontraktor."',
   why:'Pengawas adalah perpanjangan tangan pemilik proyek dalam pengendalian mutu.'},
  {id:'q14', kind:'tf', prof:'PELAKSANA', ans:true,
   text:'"Tanggung jawab utama Pelaksana Lapangan adalah mengatur jadwal pelaksanaan harian, metode kerja, dan pengorganisasian tim kontraktor."',
   why:'Pelaksana adalah manajer operasional proyek di pihak kontraktor.'},
  {id:'q15', kind:'tf', prof:'ASISTEN', ans:false,
   text:'"Tugas harian Asisten Teknik adalah langsung mengaduk semen dan memasang batu bata bersama para tukang."',
   why:'Asisten Teknik mendukung pekerjaan teknis, bukan bekerja sebagai tukang.'},
  {id:'q16', kind:'tf', prof:'ADMIN TEKNIK', ans:true,
   text:'"Admin Teknik bertanggung jawab menyusun Berita Acara Kemajuan Pekerjaan (termyn) sebagai berkas verifikasi pencairan dana proyek."',
   why:'Admin Teknik mengelola kelengkapan administrasi teknis dan dokumen pembayaran progres.'},

  {id:'q17', kind:'short', aOpts:["Logistik","Estimator","Surveyor"], bOpts:["Menolak dan mengembalikan ke pemasok","Tetap dipakai untuk lantai kerja","Disimpan di gudang terbuka"], prof:'LOGISTIK',
   head:'Truk pengangkut semen tiba saat hujan deras. Saat muatan dibuka, sebagian semen terkena air dan mulai mengeras (rusak).',
   text:'Profesi mana yang bertanggung jawab memeriksa dan apa tindakannya terhadap material tersebut?',
   profKeys:['logistik'], actKeys:['tolak','menolak','kembalikan','mengembalikan','retur','nota penolakan','ganti'],
   bLabel:'TINDAKAN TERHADAP MATERIAL', bPlaceholder:'contoh: menolak dan mengembalikan ke pemasok',
   key:'Logistik; menolak semen yang rusak dan mengembalikannya ke pemasok.',
   why:'Logistik memeriksa material saat diterima dan menolak material yang tidak sesuai/rusak.'},
  {id:'q18', kind:'short', aOpts:["Pengawas","Admin Teknik","Logistik"], bOpts:["Surat instruksi perbaikan","Nota pembelian material","Jadwal pengiriman material"], prof:'PENGAWAS',
   head:'Saat inspeksi lantai 2, kolom utama ditemukan retak dan dimensinya tidak sesuai gambar rencana.',
   text:'Profesi apa yang berwenang menolak pekerjaan cacat itu dan menerbitkan surat instruksi perbaikan?',
   profKeys:['pengawas','supervising','konsultan pengawas'], actKeys:['instruksi perbaikan','teguran','stop work','hentikan','penghentian','perbaikan'],
   bLabel:'SURAT / TINDAKAN YANG DITERBITKAN', bPlaceholder:'contoh: surat instruksi perbaikan',
   key:'Pengawas Lapangan; menerbitkan surat instruksi perbaikan teknis.',
   why:'Pengawas berwenang menolak pekerjaan cacat dan menerbitkan instruksi perbaikan/stop work order.'},
  {id:'q19', kind:'short', aOpts:["Surveyor","Mandor","Asisten"], bOpts:["Total station","Mesin molen","Alat pemadat tanah"], prof:'SURVEYOR',
   head:'Sebelum galian tanah dan pembuatan bouwplank, titik koordinat batas tapak dan elevasi kedalaman harus presisi agar tidak melanggar batas lahan tetangga.',
   text:'Sebutkan profesi yang menentukan titik koordinat tersebut beserta satu nama alat presisinya!',
   profKeys:['surveyor'], actKeys:['total station','theodolite','teodolit','waterpass','gps'],
   bLabel:'NAMA ALAT PRESISI', bPlaceholder:'contoh: total station',
   key:'Surveyor; Total Station (atau theodolite/waterpass/GPS rover).',
   why:'Surveyor melakukan setting out dengan alat ukur presisi seperti Total Station.'},
  {id:'q20', kind:'short', aOpts:["Admin Teknik","Pelaksana","Pengawas"], bOpts:["Berita acara kemajuan pekerjaan","Gambar potongan struktur","Daftar hadir pekerja"], prof:'ADMIN TEKNIK',
   head:'Struktur lantai 1 rampung 100%. Kontraktor mengajukan pembayaran termin (kemajuan fisik 30%) kepada owner.',
   text:'Profesi mana yang mengumpulkan Berita Acara Kemajuan Pekerjaan, merapikan berkas penagihan, dan mengarsipkannya?',
   profKeys:['admin','administrator'], actKeys:['berita acara','termyn','termin','arsip','penagihan','pencairan'],
   bLabel:'DOKUMEN YANG DIKELOLA', bPlaceholder:'contoh: berita acara kemajuan pekerjaan',
   key:'Admin Teknik; menyusun dan mengarsipkan Berita Acara Kemajuan Pekerjaan.',
   why:'Admin Teknik mengelola berkas administrasi teknis termasuk dokumen penagihan termin.'}
];

function shuf(arr, seed) {
  const a = arr.slice();
  let s = seed * 2654435761 % 4294967296;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 1103515245 + 12345) % 2147483648;
    const j = s % (i + 1);
    const t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

const norm = (t) => String(t || '').toLowerCase().replace(/[^a-z0-9\s]/g,' ').replace(/\s+/g,' ').trim();

class Component extends DCLogic {
  state = Object.assign({screen:'intro', order:[], optOrder:{}, ans:{}, idx:0, nama:'', minat:null}, (() => { const v = __mkLoad('s6'); if (v && v.screen === 'review') v.screen = 'hasil'; return v || {}; })(), {toast:'', recap:null, prevScreen:'hasil'});

  componentDidUpdate(){ const s = this.state; __mkSave('s6', { screen: s.screen, order: s.order, optOrder: s.optOrder, ans: s.ans, idx: s.idx, nama: s.nama, minat: s.minat }); }
  componentDidMount(){
    let recap = null;
    try { const raw = sessionStorage.getItem('mk_eval_recap'); if(raw) recap = JSON.parse(raw); } catch(e){}
    this.setState({recap});
  }
  componentWillUnmount(){ clearTimeout(this._t); }

  flash(t){ clearTimeout(this._t); this.setState({toast:t}); this._t = setTimeout(()=>this.setState({toast:''}), 2200); }

  shuffledOpts(qi, which, list){
    if(!Array.isArray(list) || !list.length) return [];
    const seed = (Number(qi) || 0) + (which === 'a' ? 11 : 47);
    return shuf(list, seed).map(v => ({ label: v }));
  }

  shuffle(arr){ const a = arr.slice(); for(let i=a.length-1;i>0;i--){ const j = Math.floor(Math.random()*(i+1)); [a[i],a[j]] = [a[j],a[i]]; } return a; }

  begin(){
    const order = this.shuffle(BANK.map((_,i)=>i));
    const optOrder = {};
    BANK.forEach((q,i)=>{ if(q.kind==='mcq') optOrder[i] = this.shuffle(q.opts.map((_,k)=>k)); });
    this.setState({screen:'quiz', order, optOrder, ans:{}, idx:0, nama:'', minat:null});
  }

  isFilled(qi){
    const q = BANK[qi], a = this.state.ans[qi];
    if(q.kind==='short'){ const o = a || {}; return !!(String(o.a||'').trim() && String(o.b||'').trim()); }
    return !(a===undefined || a===null || String(a).trim()==='');
  }

  isCorrect(qi){
    const q = BANK[qi], a = this.state.ans[qi];
    if(!this.isFilled(qi)) return false;
    if(q.kind==='mcq') return a === q.ans;
    if(q.kind==='tf') return a === q.ans;
    const ta = norm(a.a), tb = norm(a.b);
    const hasProf = q.profKeys.some(k=>ta.indexOf(norm(k))>=0);
    const hasAct = q.actKeys.some(k=>tb.indexOf(norm(k))>=0);
    return hasProf && hasAct;
  }

  answeredCount(){ return this.state.order.filter(qi=>this.isFilled(qi)).length; }
  correctCount(){ return this.state.order.filter(qi=>this.isCorrect(qi)).length; }

  renderVals(){ return Object.assign(__mkNav(), this._rv()); }
  _rv() {
    const s = this.state;
    const total = BANK.length;
    const correct = s.order.length ? this.correctCount() : 0;
    const score = correct * 5;
    const answered = s.order.length ? this.answeredCount() : 0;
    const qi = s.order.length ? s.order[Math.min(s.idx, s.order.length-1)] : 0;
    const q = BANK[qi] || BANK[0];
    const mine = s.ans[qi];
    const optIdx = (s.optOrder[qi] || (q.opts ? q.opts.map((_,k)=>k) : []));
    const TAG = ['A','B','C','D','E'];
    const allAnswered = answered === total;
    const recap = s.recap;
    const minatName = s.minat !== null ? PROFS[s.minat] : '';

    const mineLabel = (i)=>{
      const b = BANK[i], a = s.ans[i];
      if(!this.isFilled(i)) return 'tidak dijawab';
      if(b.kind==='mcq') return b.opts[a];
      if(b.kind==='tf') return a ? 'BENAR' : 'SALAH';
      return `${a.a} — ${a.b}`;
    };
    const keyLabel = (i)=>{
      const b = BANK[i];
      if(b.kind==='mcq') return b.opts[b.ans];
      if(b.kind==='tf') return b.ans ? 'BENAR' : 'SALAH';
      return b.key;
    };

    return {
      isIntro: s.screen==='intro',
      isQuiz: s.screen==='quiz',
      isLulus: s.screen==='hasil' && score > 75,
      isGagal: s.screen==='hasil' && score <= 75,
      isReview: s.screen==='review',
      isSertifikat: s.screen==='sertifikat',

      hasRecap: !!recap,
      recapLabel: recap ? `Progres Profesi Pertamaku: ${recap.count||0} profesi selesai · ★ ${recap.xp||0} XP` : '',

      onStart: ()=>this.begin(),
      onRetry: ()=>{ this.begin(); this.flash('Evaluasi diacak ulang — semangat!'); },
      onQuit: ()=>{ __dcGo('5. Profesi Pertama.dc.html'); },
      onHome: ()=>{ __dcGo('1. Misi Konstruksi.dc.html'); },
      onBackMateri: ()=>{ __dcGo('2. Scene Eksplorasi.dc.html'); },

      qCounter: `Soal ${Math.min(s.idx+1, total)} / ${total}`,
      progressPct: `${Math.round((answered/total)*100)}%`,
      answeredLabel: `${answered}/${total} terjawab`,
      qKind: q.kind==='mcq' ? 'PILIHAN GANDA' : (q.kind==='tf' ? 'BENAR / SALAH' : 'STUDI KASUS'),
      qProf: q.prof,
      qHasHead: !!q.head,
      qHead: q.head || '',
      qText: q.text,
      qIsChoice: q.kind==='mcq' || q.kind==='tf',
      qIsShort: q.kind==='short',
      shortA: q.kind==='short' ? ((mine||{}).a || '') : '',
      shortB: q.kind==='short' ? ((mine||{}).b || '') : '',
      shortAPlaceholder: '',
      aOpts: this.shuffledOpts(qi, 'a', q.aOpts),
      bOpts: this.shuffledOpts(qi, 'b', q.bOpts),
      shortBLabel: q.bLabel || 'TINDAKAN / ALAT',
      shortBPlaceholder: '',
      onShortA: (e)=>{ const v = e.target.value.toUpperCase(); this.setState(st=>({ans:{...st.ans, [qi]: {...(st.ans[qi]||{}), a:v}}})); },
      onShortB: (e)=>{ const v = e.target.value.toUpperCase(); this.setState(st=>({ans:{...st.ans, [qi]: {...(st.ans[qi]||{}), b:v}}})); },

      qOpts: q.kind==='mcq'
        ? optIdx.map((oi,pos)=>{
            const on = mine === oi;
            return {text:q.opts[oi], tag:TAG[pos], title:`Pilih jawaban ${TAG[pos]}`,
              bg: on ? '#123a6b' : '#f4f8fd', color: on ? '#fff' : '#26384c',
              border: on ? '.18em solid #123a6b' : '.16em solid rgba(18,58,107,.2)',
              tagBg: on ? '#ffd11a' : '#e0e8f2', tagColor: on ? '#3a2a06' : '#123a6b',
              onClick: ()=>this.setState(st=>({ans:{...st.ans, [qi]: oi}}))};
          })
        : (q.kind==='tf'
            ? [true,false].map((v,pos)=>{
                const on = mine === v;
                return {text: v ? 'BENAR' : 'SALAH', tag: v ? '✓' : '✕', title:`Pilih ${v?'BENAR':'SALAH'}`,
                  bg: on ? (v ? '#2e9c3a' : '#d63a34') : '#f4f8fd', color: on ? '#fff' : '#26384c',
                  border: on ? '.18em solid rgba(0,0,0,.25)' : '.16em solid rgba(18,58,107,.2)',
                  tagBg: on ? 'rgba(255,255,255,.25)' : '#e0e8f2', tagColor: on ? '#fff' : '#123a6b',
                  onClick: ()=>this.setState(st=>({ans:{...st.ans, [qi]: v}}))};
              })
            : []),

      dots: s.order.map((oqi,pos)=>{
        const filled = this.isFilled(oqi);
        const cur = pos === s.idx;
        return {no:`${pos+1}`, title:`Buka soal ${pos+1}`,
          bg: cur ? '#f5a406' : (filled ? '#2e9c3a' : '#fff'),
          color: (cur || filled) ? '#fff' : '#7b8a9c',
          border: cur ? '#b07708' : (filled ? '#1d6a26' : 'rgba(18,58,107,.25)'),
          onClick: ()=>this.setState({idx:pos})};
      }),

      prevOpacity: s.idx > 0 ? 1 : .4,
      showNext: s.idx < total - 1,
      navHint: allAnswered ? 'Semua soal sudah dijawab — kamu bisa menyelesaikan evaluasi.' : `Masih ada ${total - answered} soal yang belum dijawab.`,
      finishOpacity: allAnswered ? 1 : .45,
      onPrev: ()=>{ if(s.idx>0) this.setState({idx:s.idx-1}); },
      onNext: ()=>{ if(s.idx < total-1) this.setState({idx:s.idx+1}); },
      onFinish: ()=>{
        if(this.answeredCount() < total){ this.flash('Jawab semua soal dulu sebelum melihat nilai'); return; }
        this.setState({screen:'hasil'});
      },

      score: `${score}`,
      correctLabel: `${correct}/${total}`,
      lulusFeedback: score === 100
        ? 'Sempurna! Semua soal kamu jawab dengan benar — pemahamanmu tentang 8 profesi konstruksi sangat baik.'
        : `Kerja bagus! Kamu menjawab benar ${correct} dari ${total} soal dan dinyatakan LULUS evaluasi.`,
      gagalFeedback: `Nilaimu ${score} — batas lulus adalah di atas 75. Kamu sudah menjawab benar ${correct} dari ${total} soal.`,
      gagalSaran: 'Pelajari kembali tugas, alat, dan wewenang setiap profesi, lalu ulangi evaluasi. Kamu pasti bisa!',

      minatOpts: PROFS.map((n,i)=>{
        const on = s.minat === i;
        return {name:n, title:`Pilih ${n} sebagai profesi yang paling diminati`,
          bg: on ? '#2e9c3a' : '#fff', color: on ? '#fff' : '#26384c',
          border: on ? '#1d6a26' : 'rgba(18,58,107,.25)',
          onClick: ()=>this.setState({minat:i})};
      }),
      nama: s.nama,
      onNamaChange: (e)=>{ const v = e.target.value.toUpperCase(); this.setState({nama:v}); },
      sertifikatOpacity: s.nama.trim() ? 1 : .5,
      onSertifikat: ()=>{
        if(!s.nama.trim()){ this.flash('Tulis namamu dulu untuk dicetak di sertifikat'); return; }
        if(s.minat === null){ this.flash('Pilih dulu profesi yang paling kamu minati'); return; }
        this.setState({screen:'sertifikat'});
      },
      onCloseSertifikat: ()=>this.setState({screen:'hasil'}),
      onPrint: ()=>{ window.print(); },
      predikat: score === 100 ? 'ISTIMEWA' : (score >= 90 ? 'SANGAT BAIK' : 'BAIK'),
      minatLabel: minatName || '-',
      tanggal: new Date().toLocaleDateString('id-ID', {day:'numeric', month:'long', year:'numeric'}),

      onReview: ()=>this.setState({prevScreen:'hasil', screen:'review'}),
      onCloseReview: ()=>this.setState({screen:'hasil'}),
      reviewList: s.order.map((oqi,pos)=>{
        const ok = this.isCorrect(oqi);
        return {no:`${pos+1}`, text:BANK[oqi].text, mine:mineLabel(oqi), key:keyLabel(oqi), why:BANK[oqi].why,
          mark: ok ? '✓' : '✕', badgeBg: ok ? '#2e9c3a' : '#d63a34', border: ok ? 'rgba(46,156,58,.5)' : 'rgba(214,58,52,.5)'};
      }),

      showToast: !!s.toast,
      toast: s.toast
    };
  }
}

export default Component;
