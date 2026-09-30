// GENERATED oleh scripts/convert-mockup.mjs dari mockup/6. Scene Evaluasi.dc.html — jangan diedit manual.
import { Fragment } from 'react';
import { arr, cssToObj, interp, str } from '../../dc/runtime.jsx';

export default function View({ $v }) {
  return (
    <>
    <div style={{"width":"100%","height":"100vh","display":"flex","alignItems":"center","justifyContent":"center","background":"#0c1116","fontFamily":"'Trebuchet MS',sans-serif"}}>
      <div style={{"position":"relative","width":"min(100vw,177.78vh)","height":"min(56.25vw,100vh)","fontSize":"min(1vw,1.7778vh)","overflow":"hidden","background":"#0f1a26","boxShadow":"0 0 4em rgba(0,0,0,.6)"}}>
        {$v.isIntro ? (
          <>
            {"\n  "}
            <div style={{"position":"absolute","inset":"0","backgroundImage":"url(assets/s6/bg-evaluasi.webp)","backgroundSize":"100% 100%","animation":"evFade .3s ease both"}}>
              {"\n    "}
              <div style={{"position":"absolute","inset":"7% 15% 11% 14%","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center","gap":".8em","textAlign":"center"}}>
                {"\n      \n      \n      "}
                <div style={{"flex":"none","display":"inline-flex","alignItems":"center","justifyContent":"center","padding":".34em 1.2em","borderRadius":".6em","background":"#123a6b","color":"#ffd11a","fontSize":"2.35em","fontWeight":"800","letterSpacing":".08em","whiteSpace":"nowrap","lineHeight":"1.1"}}>
                  {"EVALUASI AKHIR"}
                </div>
                <div style={{"fontSize":"3em","fontWeight":"800","color":"#123a6b","lineHeight":"1.08","letterSpacing":".01em"}}>
                  {"UJI PEMAHAMANMU"}
                  <br />
                  {"8 PROFESI TEKNIK KONSTRUKSI DAN PERUMAHAN"}
                </div>
                <div style={{"maxWidth":"88%","fontSize":"1.45em","lineHeight":"1.5","color":"#2b3f57","textWrap":"pretty"}}>
                  {"Soal terdiri atas pilihan ganda, benar/salah, dan studi kasus jawaban singkat. Jawab semua soal lebih dulu — nilai muncul setelah evaluasi diselesaikan."}
                </div>
                {"\n      "}
                <div style={{"display":"flex","flexWrap":"wrap","justifyContent":"center","gap":"1.6em","fontSize":"1.35em","fontWeight":"700","color":"#123a6b"}}>
                  {"\n        \n        "}
                  <div>
                    <strong style={{"fontSize":"1.35em"}}>
                      {"20"}
                    </strong>
                    {" Soal Acak"}
                  </div>
                  <div>
                    <strong style={{"fontSize":"1.35em"}}>
                      {"5"}
                    </strong>
                    {" Poin/Jawaban Benar"}
                  </div>
                  {"\n        "}
                  <div>
                    {"Lulus Jika Nilai "}
                    <strong style={{"fontSize":"1.35em"}}>
                      {"> 75"}
                    </strong>
                  </div>
                  {"\n        "}
                  <div>
                    {"🏅 Sertifikat Bagi yang Lulus"}
                  </div>
                  {"\n      "}
                </div>
                {"\n      "}
                {$v.hasRecap ? (
                  <>
                    {"\n        "}
                    <div style={{"fontSize":"1.25em","fontWeight":"700","color":"#5a4306"}}>
                      {interp($v.recapLabel)}
                    </div>
                    {"\n      "}
                  </>
                ) : null}
                {"\n      "}
                <button type="button" onClick={$v.onStart} title="Mulai evaluasi" style={{"padding":".6em 2em","borderRadius":"1em","border":".24em solid #b07708","background":"linear-gradient(#ffd75e,#f5a406)","color":"#3a2a06","fontFamily":"inherit","fontSize":"2em","fontWeight":"800","letterSpacing":".06em","cursor":"pointer","animation":"evGlow 2.4s ease-out infinite"}}>
                  {"▶ MULAI EVALUASI"}
                </button>
                {"\n    "}
              </div>
              {"\n  "}
            </div>
          </>
        ) : null}
        {$v.isQuiz ? (
          <>
            {"\n  "}
            <div style={{"position":"absolute","inset":"0","backgroundImage":"url(assets/s6/bg-evaluasi.webp)","backgroundSize":"100% 100%","animation":"evFade .25s ease both"}}>
              {"\n    "}
              <div style={{"position":"absolute","inset":"4% 13% 9% 12%","display":"flex","flexDirection":"column","gap":".7em","padding":".9em 1.1em","borderRadius":"1em","border":".18em solid rgba(18,58,107,.3)","background":"rgba(255,253,246,.93)","boxShadow":"0 .6em 1.4em rgba(0,0,0,.22)"}}>
                {"\n\n      "}
                <div style={{"flex":"none","display":"flex","alignItems":"center","gap":".8em"}}>
                  {"\n        "}
                  <div style={{"flex":"none","padding":".3em .9em","borderRadius":".6em","background":"#123a6b","color":"#ffd11a","fontSize":"1.25em","fontWeight":"800","letterSpacing":".06em","whiteSpace":"nowrap"}}>
                    {"EVALUASI AKHIR"}
                  </div>
                  {"\n        "}
                  <div style={{"flex":"none","fontSize":"1.25em","fontWeight":"800","color":"#123a6b","whiteSpace":"nowrap"}}>
                    {interp($v.qCounter)}
                  </div>
                  {"\n        "}
                  <div style={{"flex":"1","height":".9em","borderRadius":".5em","background":"#dde5ee","overflow":"hidden"}}>
                    <div style={cssToObj("height:100%;width:" + str($v.progressPct) + ";background:linear-gradient(90deg,#4caf50,#2e9c3a);transition:width .25s ease")} />
                  </div>
                  {"\n        "}
                  <div style={{"fontSize":"1.2em","fontWeight":"800","color":"#2e9c3a"}}>
                    {interp($v.answeredLabel)}
                  </div>
                  {"\n      "}
                </div>
                {"\n\n      "}
                <div style={{"flex":"none","display":"flex","flexWrap":"wrap","gap":".3em"}}>
                  {"\n        "}
                  {arr($v.dots).map((d, $i1) => (
                    <Fragment key={$i1}>
                      {"\n          "}
                      <button type="button" onClick={d?.onClick} title={d?.title} style={cssToObj("width:2.1em;height:2.1em;border-radius:.45em;border:.14em solid " + str(d?.border) + ";background:" + str(d?.bg) + ";color:" + str(d?.color) + ";font-family:inherit;font-size:1.05em;font-weight:800;cursor:pointer")}>
                        {interp(d?.no)}
                      </button>
                      {"\n        "}
                    </Fragment>
                  ))}
                  {"\n      "}
                </div>
                {"\n\n      "}
                <div style={{"flex":"1","minHeight":"0","display":"flex","flexDirection":"column","gap":".7em","padding":"1em","borderRadius":"1em","background":"#fff","border":".16em solid rgba(18,58,107,.22)","overflow":"auto"}}>
                  {"\n        "}
                  <div style={{"display":"flex","alignItems":"center","gap":".6em"}}>
                    {"\n          "}
                    <span style={{"padding":".22em .7em","borderRadius":".45em","background":"#e8f1fb","color":"#123a6b","fontSize":"1.05em","fontWeight":"800","letterSpacing":".05em"}}>
                      {interp($v.qKind)}
                    </span>
                    {"\n          "}
                    <span style={{"padding":".22em .7em","borderRadius":".45em","background":"#fff3d0","color":"#8a5b04","fontSize":"1.05em","fontWeight":"800","letterSpacing":".05em"}}>
                      {interp($v.qProf)}
                    </span>
                    {"\n        "}
                  </div>
                  {"\n        "}
                  {$v.qHasHead ? (
                    <>
                      {"\n          "}
                      <div style={{"padding":".7em .9em","borderRadius":".7em","background":"#f4f8fd","border":".14em solid rgba(18,58,107,.18)","fontSize":"1.25em","lineHeight":"1.45","color":"#20364f","textWrap":"pretty"}}>
                        {interp($v.qHead)}
                      </div>
                      {"\n        "}
                    </>
                  ) : null}
                  {"\n        "}
                  <div style={{"fontSize":"1.5em","fontWeight":"800","lineHeight":"1.35","color":"#123a6b","textWrap":"pretty"}}>
                    {interp($v.qText)}
                  </div>
                  {"\n\n        "}
                  {$v.qIsChoice ? (
                    <>
                      {"\n          "}
                      <div style={{"display":"flex","flexDirection":"column","gap":".45em"}}>
                        {"\n            "}
                        {arr($v.qOpts).map((o, $i1) => (
                          <Fragment key={$i1}>
                            {"\n              "}
                            <button type="button" onClick={o?.onClick} title={o?.title} style={cssToObj("display:flex;align-items:center;gap:.7em;padding:.6em .8em;border-radius:.75em;border:" + str(o?.border) + ";background:" + str(o?.bg) + ";color:" + str(o?.color) + ";font-family:inherit;font-size:1.25em;font-weight:700;line-height:1.35;text-align:left;cursor:pointer;transition:transform .12s ease")} className="s6p0">
                              {"\n                "}
                              <span style={cssToObj("flex:none;width:1.8em;height:1.8em;display:flex;align-items:center;justify-content:center;border-radius:.4em;background:" + str(o?.tagBg) + ";color:" + str(o?.tagColor) + ";font-weight:800")}>
                                {interp(o?.tag)}
                              </span>
                              {"\n                "}
                              <span style={{"flex":"1"}}>
                                {interp(o?.text)}
                              </span>
                              {"\n              "}
                            </button>
                            {"\n            "}
                          </Fragment>
                        ))}
                        {"\n          "}
                      </div>
                      {"\n        "}
                    </>
                  ) : null}
                  {"\n\n        "}
                  {$v.qIsShort ? (
                    <>
                      {"\n          "}
                      <div style={{"display":"flex","flexDirection":"column","gap":".5em"}}>
                        {"\n            "}
                        <div style={{"fontSize":"1.15em","color":"#31465e"}}>
                          {"Isi kedua kolom di bawah ini."}
                        </div>
                        {"\n            "}
                        <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":".7em"}}>
                          {"\n              "}
                          <div style={{"display":"flex","flexDirection":"column","gap":".25em"}}>
                            {"\n                "}
                            <div style={{"fontSize":"1.05em","fontWeight":"800","color":"#123a6b","letterSpacing":".03em"}}>
                              {"NAMA PROFESI"}
                            </div>
                            {"\n                "}
                            <input type="text" value={$v.shortA ?? ""} onChange={$v.onShortA} placeholder={$v.shortAPlaceholder} style={{"padding":".6em .8em","borderRadius":".7em","border":".16em solid rgba(18,58,107,.35)","background":"#f9fcff","color":"#20364f","fontFamily":"inherit","fontSize":"1.25em","fontWeight":"700","textTransform":"uppercase","outline":"none"}} />
                            {"\n                "}
                            <div style={{"display":"flex","flexWrap":"wrap","gap":".35em","marginTop":".15em"}}>
                              {"\n                  "}
                              {arr($v.aOpts).map((o, $i1) => (
                                <Fragment key={$i1}>
                                  {"\n                    "}
                                  <span style={{"padding":".3em .7em","borderRadius":".5em","border":".14em dashed rgba(18,58,107,.3)","background":"#f7fafd","color":"#5c6b7d","fontSize":"1.02em","fontWeight":"700","userSelect":"none"}}>
                                    {interp(o?.label)}
                                  </span>
                                  {"\n                  "}
                                </Fragment>
                              ))}
                              {"\n                "}
                            </div>
                            {"\n              "}
                          </div>
                          {"\n              "}
                          <div style={{"display":"flex","flexDirection":"column","gap":".25em"}}>
                            {"\n                "}
                            <div style={{"fontSize":"1.05em","fontWeight":"800","color":"#123a6b","letterSpacing":".03em"}}>
                              {interp($v.shortBLabel)}
                            </div>
                            {"\n                "}
                            <input type="text" value={$v.shortB ?? ""} onChange={$v.onShortB} placeholder={$v.shortBPlaceholder} style={{"padding":".6em .8em","borderRadius":".7em","border":".16em solid rgba(18,58,107,.35)","background":"#f9fcff","color":"#20364f","fontFamily":"inherit","fontSize":"1.25em","fontWeight":"700","textTransform":"uppercase","outline":"none"}} />
                            {"\n                "}
                            <div style={{"display":"flex","flexWrap":"wrap","gap":".35em","marginTop":".15em"}}>
                              {"\n                  "}
                              {arr($v.bOpts).map((o, $i1) => (
                                <Fragment key={$i1}>
                                  {"\n                    "}
                                  <span style={{"padding":".3em .7em","borderRadius":".5em","border":".14em dashed rgba(18,58,107,.3)","background":"#f7fafd","color":"#5c6b7d","fontSize":"1.02em","fontWeight":"700","userSelect":"none"}}>
                                    {interp(o?.label)}
                                  </span>
                                  {"\n                  "}
                                </Fragment>
                              ))}
                              {"\n                "}
                            </div>
                            {"\n              "}
                          </div>
                          {"\n            "}
                        </div>
                        {"\n          "}
                      </div>
                      {"\n        "}
                    </>
                  ) : null}
                  {"\n      "}
                </div>
                {"\n\n      "}
                <div style={{"flex":"none","display":"flex","alignItems":"center","gap":".7em"}}>
                  {"\n        "}
                  <button type="button" onClick={$v.onPrev} title="Soal sebelumnya" style={cssToObj("padding:.55em 1.3em;border-radius:.8em;border:.16em solid #7d8a99;background:linear-gradient(#f2f4f7,#d3dae2);color:#123a6b;font-family:inherit;font-size:1.35em;font-weight:800;letter-spacing:.03em;cursor:pointer;opacity:" + str($v.prevOpacity))}>
                    {"❮ SEBELUMNYA"}
                  </button>
                  {"\n        "}
                  <div style={{"flex":"1","fontSize":"1.2em","color":"#31465e"}}>
                    {interp($v.navHint)}
                  </div>
                  {"\n        "}
                  {$v.showNext ? (
                    <>
                      {"\n          "}
                      <button type="button" onClick={$v.onNext} title="Soal berikutnya" style={{"padding":".55em 1.4em","borderRadius":".8em","border":".2em solid #123a6b","background":"#123a6b","color":"#fff","fontFamily":"inherit","fontSize":"1.35em","fontWeight":"800","letterSpacing":".04em","cursor":"pointer"}}>
                        {"BERIKUTNYA ❯"}
                      </button>
                      {"\n        "}
                    </>
                  ) : null}
                  {"\n        "}
                  <button type="button" onClick={$v.onFinish} title="Selesaikan evaluasi dan lihat nilai" style={cssToObj("padding:.55em 1.5em;border-radius:.8em;border:.2em solid #b07708;background:linear-gradient(#ffd75e,#f5a406);color:#3a2a06;font-family:inherit;font-size:1.35em;font-weight:800;letter-spacing:.04em;cursor:pointer;opacity:" + str($v.finishOpacity))}>
                    {"SELESAI & LIHAT NILAI ❯"}
                  </button>
                  {"\n      "}
                </div>
                {"\n    "}
              </div>
              {"\n  "}
            </div>
          </>
        ) : null}
        {$v.isLulus ? (
          <>
            {"\n  "}
            <div style={{"position":"absolute","inset":"0","backgroundImage":"url(assets/s6/berhasil.webp)","backgroundSize":"100% 100%","animation":"evFade .3s ease both"}}>
              {"\n    "}
              <div style={{"position":"absolute","left":"26.5%","top":"47%","width":"44.8%","height":"33.5%","display":"flex","flexDirection":"column","justifyContent":"center","gap":".5em","padding":"0 1.4em","animation":"evPop .35s ease both"}}>
                {"\n      "}
                <div style={{"display":"flex","justifyContent":"center","gap":".6em"}}>
                  {"\n        "}
                  <div style={{"display":"flex","flexDirection":"column","alignItems":"center","padding":".35em .9em","borderRadius":".6em","background":"#2e9c3a","color":"#fff"}}>
                    <div style={{"fontSize":"1.9em","fontWeight":"800","lineHeight":"1"}}>
                      {interp($v.score)}
                    </div>
                    <div style={{"fontSize":".95em","fontWeight":"700"}}>
                      {"NILAI"}
                    </div>
                  </div>
                  {"\n        "}
                  <div style={{"display":"flex","flexDirection":"column","alignItems":"center","padding":".35em .9em","borderRadius":".6em","background":"#123a6b","color":"#ffd11a"}}>
                    <div style={{"fontSize":"1.9em","fontWeight":"800","lineHeight":"1"}}>
                      {interp($v.correctLabel)}
                    </div>
                    <div style={{"fontSize":".95em","fontWeight":"700"}}>
                      {"JAWABAN BENAR"}
                    </div>
                  </div>
                  {"\n      "}
                </div>
                {"\n      "}
                <div style={{"fontSize":"1.1em","lineHeight":"1.35","color":"#31465e","textAlign":"center","textWrap":"pretty"}}>
                  {interp($v.lulusFeedback)}
                </div>
                {"\n      "}
                <div style={{"display":"flex","flexDirection":"column","gap":".3em"}}>
                  {"\n        "}
                  <div style={{"fontSize":"1.05em","fontWeight":"800","color":"#123a6b"}}>
                    {"PROFESI YANG PALING KAMU MINATI"}
                  </div>
                  {"\n        "}
                  <div style={{"display":"flex","flexWrap":"wrap","gap":".3em"}}>
                    {"\n          "}
                    {arr($v.minatOpts).map((p, $i1) => (
                      <Fragment key={$i1}>
                        {"\n            "}
                        <button type="button" onClick={p?.onClick} title={p?.title} style={cssToObj("padding:.3em .7em;border-radius:.5em;border:.14em solid " + str(p?.border) + ";background:" + str(p?.bg) + ";color:" + str(p?.color) + ";font-family:inherit;font-size:1.02em;font-weight:800;cursor:pointer")}>
                          {interp(p?.name)}
                        </button>
                        {"\n          "}
                      </Fragment>
                    ))}
                    {"\n        "}
                  </div>
                  {"\n      "}
                </div>
                {"\n      "}
                <div style={{"display":"flex","alignItems":"center","gap":".5em"}}>
                  {"\n        "}
                  <input type="text" value={$v.nama ?? ""} onChange={$v.onNamaChange} placeholder="Tulis namamu untuk sertifikat" style={{"flex":"1","padding":".5em .7em","borderRadius":".6em","border":".16em solid rgba(18,58,107,.35)","background":"#fff","color":"#20364f","fontFamily":"inherit","fontSize":"1.2em","fontWeight":"700","textTransform":"uppercase","outline":"none"}} />
                  {"\n        "}
                  <button type="button" onClick={$v.onSertifikat} title="Buat sertifikat" style={cssToObj("padding:.5em 1.1em;border-radius:.7em;border:.2em solid #b07708;background:linear-gradient(#ffd75e,#f5a406);color:#3a2a06;font-family:inherit;font-size:1.2em;font-weight:800;letter-spacing:.03em;cursor:pointer;opacity:" + str($v.sertifikatOpacity))}>
                    {"🏅 BUAT SERTIFIKAT"}
                  </button>
                  {"\n      "}
                </div>
                {"\n      "}
                <div style={{"display":"flex","justifyContent":"center","gap":".5em"}}>
                  {"\n        "}
                  <button type="button" onClick={$v.onReview} title="Lihat pembahasan jawaban" style={{"padding":".4em 1em","borderRadius":".6em","border":".16em solid rgba(18,58,107,.35)","background":"#fff","color":"#123a6b","fontFamily":"inherit","fontSize":"1.05em","fontWeight":"800","cursor":"pointer"}}>
                    {"📋 PEMBAHASAN"}
                  </button>
                  {"\n        "}
                  <button type="button" onClick={$v.onHome} title="Kembali ke Home" style={{"padding":".4em 1em","borderRadius":".6em","border":".16em solid rgba(18,58,107,.35)","background":"#fff","color":"#123a6b","fontFamily":"inherit","fontSize":"1.05em","fontWeight":"800","cursor":"pointer"}}>
                    {"🏠 HOME"}
                  </button>
                  {"\n      "}
                </div>
                {"\n    "}
              </div>
              {"\n  "}
            </div>
          </>
        ) : null}
        {$v.isGagal ? (
          <>
            {"\n  "}
            <div style={{"position":"absolute","inset":"0","backgroundImage":"url(assets/s6/ulangi.webp)","backgroundSize":"100% 100%","animation":"evFade .3s ease both"}}>
              {"\n    "}
              <div style={{"position":"absolute","left":"22%","top":"42%","width":"55%","height":"42%","display":"flex","flexDirection":"column","gap":".6em","padding":"1em 1.2em","animation":"evPop .35s ease both"}}>
                {"\n      "}
                <div style={{"display":"flex","justifyContent":"center","gap":".7em"}}>
                  {"\n        "}
                  <div style={{"display":"flex","flexDirection":"column","alignItems":"center","padding":".4em 1em","borderRadius":".6em","background":"#d63a34","color":"#fff"}}>
                    <div style={{"fontSize":"2.1em","fontWeight":"800","lineHeight":"1"}}>
                      {interp($v.score)}
                    </div>
                    <div style={{"fontSize":"1em","fontWeight":"700"}}>
                      {"NILAI"}
                    </div>
                  </div>
                  {"\n        "}
                  <div style={{"display":"flex","flexDirection":"column","alignItems":"center","padding":".4em 1em","borderRadius":".6em","background":"#123a6b","color":"#ffd11a"}}>
                    <div style={{"fontSize":"2.1em","fontWeight":"800","lineHeight":"1"}}>
                      {interp($v.correctLabel)}
                    </div>
                    <div style={{"fontSize":"1em","fontWeight":"700"}}>
                      {"JAWABAN BENAR"}
                    </div>
                  </div>
                  {"\n      "}
                </div>
                {"\n      "}
                <div style={{"fontSize":"1.25em","lineHeight":"1.4","color":"#3a2a06","textAlign":"center","fontWeight":"700","textWrap":"pretty"}}>
                  {interp($v.gagalFeedback)}
                </div>
                {"\n      "}
                <div style={{"fontSize":"1.15em","lineHeight":"1.35","color":"#5a4306","textAlign":"center","textWrap":"pretty"}}>
                  {interp($v.gagalSaran)}
                </div>
                {"\n      "}
                <div style={{"display":"flex","justifyContent":"center","gap":".6em"}}>
                  {"\n        "}
                  <button type="button" onClick={$v.onRetry} title="Ulangi evaluasi" style={{"padding":".55em 1.5em","borderRadius":".8em","border":".22em solid #b07708","background":"linear-gradient(#ffd75e,#f5a406)","color":"#3a2a06","fontFamily":"inherit","fontSize":"1.45em","fontWeight":"800","letterSpacing":".04em","cursor":"pointer","animation":"evGlow 2.4s ease-out infinite"}}>
                    {"🔄 ULANGI EVALUASI"}
                  </button>
                  {"\n        "}
                  <button type="button" onClick={$v.onReview} title="Lihat pembahasan jawaban" style={{"padding":".55em 1.2em","borderRadius":".8em","border":".18em solid #123a6b","background":"#123a6b","color":"#fff","fontFamily":"inherit","fontSize":"1.2em","fontWeight":"800","cursor":"pointer"}}>
                    {"📋 PEMBAHASAN"}
                  </button>
                  {"\n      "}
                </div>
                {"\n    "}
              </div>
              {"\n  "}
            </div>
          </>
        ) : null}
        {$v.isReview ? (
          <>
            {"\n  "}
            <div style={{"position":"absolute","inset":"0","background":"#0f1a26","animation":"evFade .25s ease both"}}>
              {"\n    "}
              <div style={{"position":"absolute","inset":"2.4% 2.2%","display":"flex","flexDirection":"column","gap":".7em","padding":"1.1em 1.3em","borderRadius":"1.3em","border":".22em solid #123a6b","background":"#fdf6e6"}}>
                {"\n      "}
                <div style={{"flex":"none","display":"flex","alignItems":"center","gap":".8em"}}>
                  {"\n        "}
                  <div style={{"padding":".3em .9em","borderRadius":".6em","background":"#123a6b","color":"#ffd11a","fontSize":"1.25em","fontWeight":"800","letterSpacing":".06em"}}>
                    {"PEMBAHASAN"}
                  </div>
                  {"\n        "}
                  <div style={{"flex":"1","fontSize":"1.25em","fontWeight":"800","color":"#123a6b"}}>
                    {"Nilai "}
                    {interp($v.score)}
                    {" — "}
                    {interp($v.correctLabel)}
                    {" jawaban benar"}
                  </div>
                  {"\n        "}
                  <button type="button" onClick={$v.onCloseReview} title="Tutup pembahasan" style={{"padding":".45em 1.1em","borderRadius":".7em","border":".18em solid #123a6b","background":"#123a6b","color":"#fff","fontFamily":"inherit","fontSize":"1.15em","fontWeight":"800","cursor":"pointer"}}>
                    {"TUTUP"}
                  </button>
                  {"\n      "}
                </div>
                {"\n      "}
                <div style={{"flex":"1","minHeight":"0","display":"flex","flexDirection":"column","gap":".5em","overflow":"auto","paddingRight":".4em"}}>
                  {"\n        "}
                  {arr($v.reviewList).map((r, $i1) => (
                    <Fragment key={$i1}>
                      {"\n          "}
                      <div style={cssToObj("display:flex;gap:.7em;padding:.7em .9em;border-radius:.8em;background:#fff;border:.16em solid " + str(r?.border))}>
                        {"\n            "}
                        <div style={cssToObj("flex:none;width:2em;height:2em;display:flex;align-items:center;justify-content:center;border-radius:.45em;background:" + str(r?.badgeBg) + ";color:#fff;font-size:1.1em;font-weight:800")}>
                          {interp(r?.mark)}
                        </div>
                        {"\n            "}
                        <div style={{"flex":"1","display":"flex","flexDirection":"column","gap":".2em"}}>
                          {"\n              "}
                          <div style={{"fontSize":"1.15em","fontWeight":"800","color":"#123a6b","lineHeight":"1.3"}}>
                            {interp(r?.no)}
                            {". "}
                            {interp(r?.text)}
                          </div>
                          {"\n              "}
                          <div style={{"fontSize":"1.05em","color":"#31465e"}}>
                            {"Jawabanmu: "}
                            <strong>
                              {interp(r?.mine)}
                            </strong>
                          </div>
                          {"\n              "}
                          <div style={{"fontSize":"1.05em","color":"#1d6a26"}}>
                            {"Kunci: "}
                            <strong>
                              {interp(r?.key)}
                            </strong>
                          </div>
                          {"\n              "}
                          <div style={{"fontSize":"1.02em","color":"#5a6b7e","lineHeight":"1.35"}}>
                            {interp(r?.why)}
                          </div>
                          {"\n            "}
                        </div>
                        {"\n          "}
                      </div>
                      {"\n        "}
                    </Fragment>
                  ))}
                  {"\n      "}
                </div>
                {"\n    "}
              </div>
              {"\n  "}
            </div>
          </>
        ) : null}
        {$v.isSertifikat ? (
          <>
            {"\n  "}
            <div style={{"position":"absolute","inset":"0","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center","gap":".8em","padding":"2% 2% 1.5%","background":"#0f1a26","animation":"evFade .3s ease both"}}>
              {"\n    "}
              <div style={{"position":"relative","flex":"none","height":"78%","aspectRatio":"1.414","maxWidth":"92%","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center","gap":".7em","padding":"2em 2.4em","borderRadius":"1em","background":"linear-gradient(#fffdf6,#fdf2d9)","border":".5em solid #123a6b","boxShadow":"0 1.2em 2.4em rgba(0,0,0,.55)","animation":"evPop .35s ease both"}}>
                {"\n      "}
                <div style={{"position":"absolute","inset":".7em","border":".18em dashed rgba(18,58,107,.35)","borderRadius":".6em","pointerEvents":"none"}} />
                {"\n      "}
                <div style={{"flex":"none","fontSize":"1.2em","fontWeight":"800","letterSpacing":".18em","color":"#8a5b04","textAlign":"center"}}>
                  {"MISI KONSTRUKSI: MENJELAJAH PROFESI TKP"}
                </div>
                {"\n      "}
                <div style={{"flex":"none","fontSize":"3.2em","fontWeight":"800","letterSpacing":".06em","color":"#123a6b","lineHeight":"1","textAlign":"center"}}>
                  {"SERTIFIKAT KELULUSAN"}
                </div>
                {"\n      "}
                <div style={{"flex":"none","width":"22%","height":".25em","background":"#f5a406","borderRadius":".2em"}} />
                {"\n      "}
                <div style={{"flex":"none","fontSize":"1.25em","color":"#31465e","whiteSpace":"nowrap"}}>
                  {"Diberikan kepada"}
                </div>
                {"\n      "}
                <div style={{"flex":"none","maxWidth":"88%","fontSize":"2.8em","fontWeight":"800","color":"#1d6a26","letterSpacing":".02em","textAlign":"center","lineHeight":"1.15"}}>
                  {interp($v.nama)}
                </div>
                {"\n      "}
                <div style={{"flex":"none","maxWidth":"80%","fontSize":"1.25em","lineHeight":"1.5","color":"#31465e","textAlign":"center","textWrap":"pretty"}}>
                  {"karena telah menyelesaikan evaluasi akhir pembelajaran "}
                  <strong>
                    {"8 Profesi Teknik Konstruksi dan Perumahan"}
                  </strong>
                  {" dengan hasil memuaskan."}
                </div>
                {"\n      "}
                <div style={{"flex":"none","display":"flex","gap":".8em"}}>
                  {"\n        "}
                  <div style={{"display":"flex","flexDirection":"column","alignItems":"center","padding":".45em 1.2em","borderRadius":".7em","background":"#123a6b","color":"#ffd11a"}}>
                    <div style={{"fontSize":"2em","fontWeight":"800","lineHeight":"1"}}>
                      {interp($v.score)}
                    </div>
                    <div style={{"fontSize":"1em","fontWeight":"700"}}>
                      {"NILAI AKHIR"}
                    </div>
                  </div>
                  {"\n        "}
                  <div style={{"display":"flex","flexDirection":"column","alignItems":"center","padding":".45em 1.2em","borderRadius":".7em","background":"#2e9c3a","color":"#fff"}}>
                    <div style={{"fontSize":"2em","fontWeight":"800","lineHeight":"1"}}>
                      {"LULUS"}
                    </div>
                    <div style={{"fontSize":"1em","fontWeight":"700"}}>
                      {"PREDIKAT "}
                      {interp($v.predikat)}
                    </div>
                  </div>
                  {"\n        "}
                  <div style={{"display":"flex","flexDirection":"column","alignItems":"center","padding":".45em 1.2em","borderRadius":".7em","background":"#fff","border":".16em solid rgba(18,58,107,.3)","color":"#123a6b"}}>
                    <div style={{"fontSize":"1.35em","fontWeight":"800","lineHeight":"1.2"}}>
                      {interp($v.minatLabel)}
                    </div>
                    <div style={{"fontSize":"1em","fontWeight":"700"}}>
                      {"MINAT KARIER"}
                    </div>
                  </div>
                  {"\n      "}
                </div>
                {"\n      "}
                <div style={{"flex":"none","fontSize":"1.15em","color":"#5a6b7e"}}>
                  {interp($v.tanggal)}
                </div>
                {"\n    "}
              </div>
              {"\n    "}
              <div style={{"flex":"none","display":"flex","gap":".6em"}} data-print-hide="1">
                {"\n      "}
                <button type="button" onClick={$v.onPrint} title="Cetak atau simpan sertifikat" style={{"padding":".55em 1.3em","borderRadius":".8em","border":".22em solid #b07708","background":"linear-gradient(#ffd75e,#f5a406)","color":"#3a2a06","fontFamily":"inherit","fontSize":"1.3em","fontWeight":"800","letterSpacing":".04em","cursor":"pointer"}}>
                  {"🖨️ CETAK SERTIFIKAT"}
                </button>
                {"\n      "}
                <button type="button" onClick={$v.onCloseSertifikat} title="Kembali ke hasil evaluasi" style={{"padding":".55em 1.2em","borderRadius":".8em","border":".18em solid rgba(255,255,255,.5)","background":"rgba(18,58,107,.9)","color":"#fff","fontFamily":"inherit","fontSize":"1.3em","fontWeight":"800","cursor":"pointer"}}>
                  {"❮ KEMBALI"}
                </button>
                {"\n      "}
                <button type="button" onClick={$v.onHome} title="Kembali ke Home" style={{"padding":".55em 1.2em","borderRadius":".8em","border":".18em solid rgba(255,255,255,.5)","background":"rgba(18,58,107,.9)","color":"#fff","fontFamily":"inherit","fontSize":"1.3em","fontWeight":"800","cursor":"pointer"}}>
                  {"🏠 HOME"}
                </button>
                {"\n    "}
              </div>
              {"\n  "}
            </div>
          </>
        ) : null}
        {$v.showToast ? (
          <>
            {"\n  "}
            <div style={{"position":"absolute","left":"50%","bottom":"4%","transform":"translateX(-50%)","padding":".6em 1.5em","borderRadius":"2em","background":"rgba(12,17,22,.9)","border":".15em solid rgba(255,255,255,.35)","color":"#fff","fontSize":"1.3em","fontWeight":"700","zIndex":"60","pointerEvents":"none"}}>
              {interp($v.toast)}
            </div>
          </>
        ) : null}
      </div>
    </div>
    </>
  );
}
