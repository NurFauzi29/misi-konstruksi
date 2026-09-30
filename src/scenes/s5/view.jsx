// GENERATED oleh scripts/convert-mockup.mjs dari mockup/5. Profesi Pertama.dc.html — jangan diedit manual.
import { Fragment } from 'react';
import { arr, cssToObj, interp, str } from '../../dc/runtime.jsx';

export default function View({ $v }) {
  return (
    <>
    <div style={{"width":"100%","height":"calc(var(--vh, 1vh) * 100)","display":"flex","alignItems":"center","justifyContent":"center","background":"#0c1116","fontFamily":"'Trebuchet MS',sans-serif"}}>
      <div style={{"position":"relative","width":"min(calc(var(--vw, 1vw) * 100),calc(var(--vh, 1vh) * 177.78))","height":"min(calc(var(--vw, 1vw) * 56.25),calc(var(--vh, 1vh) * 100))","fontSize":"min(calc(var(--vw, 1vw) * 1),calc(var(--vh, 1vh) * 1.7778))","overflow":"hidden","background":"#0f1a26","boxShadow":"0 0 4em rgba(0,0,0,.6)"}}>
        {$v.isSplash ? (
          <>
            {"\n  "}
            <div style={{"position":"absolute","inset":"0","background":"#0c1116"}}>
              {"\n    "}
              {$v.vidLoading ? (
                <>
                  <div style={{"position":"absolute","inset":"0","display":"flex","alignItems":"center","justifyContent":"center","pointerEvents":"none"}}>
                    <svg viewBox="0 0 24 24" style={{"width":"3.2em","height":"3.2em"}}>
                      <circle cx="12" cy="12" r="9" stroke="#ffd11a" strokeWidth="2.6" fill="none" strokeDasharray="40 20">
                        <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="0.9s" repeatCount="indefinite" />
                      </circle>
                    </svg>
                  </div>
                </>
              ) : null}
              {"\n    "}
              <video ref={$v.vidRef} onPlaying={$v.onVidPlaying} onError={$v.onVidPlaying} autoPlay={true} loop={true} playsInline={true} style={cssToObj("position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:" + str($v.vidOpacity) + ";transition:opacity .35s ease")} />
              {"\n    "}
              <div style={{"position":"absolute","inset":"0","background":"linear-gradient(180deg,rgba(8,16,26,0) 62%,rgba(8,16,26,.8) 100%)","pointerEvents":"none"}} />
              {"\n    "}
              {$v.vidReady ? (
                <>
                  <button type="button" onClick={$v.onStart} title="Mulai permainan" style={{"position":"absolute","left":"35.5%","top":"60%","transform":"translateX(-50%)","display":"flex","alignItems":"center","justifyContent":"center","gap":".5em","padding":".6em 2.2em","borderRadius":"1em","border":".24em solid #b07708","background":"linear-gradient(#ffd75e,#f5a406)","color":"#3a2a06","fontFamily":"inherit","fontSize":"2.4em","fontWeight":"800","letterSpacing":".08em","cursor":"pointer","animation":"p5Glow 2.4s ease-out infinite"}} className="s5p0 s5p1">
                    {"▶ MULAI"}
                  </button>
                </>
              ) : null}
              {"\n\n    \n\n    "}
              <div style={{"position":"absolute","right":"2%","top":"3.5%","display":"flex","alignItems":"center","gap":".7em","zIndex":"40"}}>
                {"\n    "}
                <button type="button" onClick={$v.toggleSound} title="Nyalakan / matikan suara" style={{"width":"4.5em","height":"4.5em","display":"flex","alignItems":"center","justifyContent":"center","borderRadius":"50%","border":".16em solid #fff","background":"linear-gradient(#5aa9f2,#2170cd)","cursor":"pointer","boxShadow":"0 .3em .5em rgba(0,0,0,.4)"}} className="s5p2">
                  {"\n      "}
                  <svg viewBox="0 0 24 24" aria-hidden="true" style={{"width":"60%","height":"60%"}}>
                    <path d="M4 9.5h3.2L12 5.4v13.2L7.2 14.5H4z" fill="#fff" />
                    <path d="M15.2 9.2a4 4 0 0 1 0 5.6" stroke="#fff" strokeWidth="1.7" fill="none" strokeLinecap="round" opacity={$v.waveOpacity} />
                    <path d="M15.4 8.6l6 6.8M21.4 8.6l-6 6.8" stroke="#ff6a6a" strokeWidth="2" strokeLinecap="round" opacity={$v.muteOpacity} />
                  </svg>
                  {"\n    "}
                </button>
                {"\n    "}
                <button type="button" onClick={$v.onBackToMap} title="Kembali ke peta" style={{"width":"4.5em","height":"4.5em","display":"flex","alignItems":"center","justifyContent":"center","borderRadius":"50%","border":".16em solid #fff","background":"linear-gradient(#7cd08a,#2e9c3a 62%,#1d6a26)","cursor":"pointer","boxShadow":"0 .3em .5em rgba(0,0,0,.4)"}} className="s5p2">
                  {"\n      "}
                  <svg viewBox="0 0 24 24" aria-hidden="true" style={{"width":"58%","height":"58%"}}>
                    <path d="M3.4 6.2 9 4.2v13.6l-5.6 2z" fill="#fff" />
                    <path d="M9 4.2l6 2v13.6l-6-2z" fill="#e8f5ea" />
                    <path d="M15 6.2l5.6-2v13.6l-5.6 2z" fill="#fff" />
                  </svg>
                  {"\n    "}
                </button>
                {"\n    "}
                <button type="button" onClick={$v.onHome} title="Kembali ke Home" style={{"width":"4.5em","height":"4.5em","display":"flex","alignItems":"center","justifyContent":"center","borderRadius":"50%","border":".16em solid #fff","background":"linear-gradient(#ffb23e,#f57c00 62%,#cf5a00)","cursor":"pointer","boxShadow":"0 .3em .5em rgba(0,0,0,.4)"}} className="s5p2">
                  {"\n      "}
                  <svg viewBox="0 0 24 24" aria-hidden="true" style={{"width":"58%","height":"58%"}}>
                    <path d="M12 3.2 2.8 11h2.6v9.2h5.2v-5.6h2.8v5.6h5.2V11h2.6z" fill="#fff" />
                  </svg>
                  {"\n    "}
                </button>
                {"\n    "}
              </div>
              {"\n  "}
            </div>
          </>
        ) : null}
        {$v.isMap ? (
          <>
            {"\n  "}
            <div style={cssToObj("position:absolute;inset:0;background-image:" + str($v.mapBg) + ";background-size:100% 100%;animation:p5Fade .3s ease both")}>
              {"\n    "}
              {arr($v.mapNodes).map((n, $i1) => (
                <Fragment key={$i1}>
                  <button type="button" onClick={n?.onClick} title={n?.title} style={cssToObj("position:absolute;left:" + str(n?.left) + ";top:" + str(n?.top) + ";width:12%;height:25%;padding:0;border:0;border-radius:1.4em;background:transparent;cursor:pointer;transition:transform .16s ease")} className="s5p3 s5p4" />
                </Fragment>
              ))}
              {"\n    "}
              {$v.mapAllDone ? (
                <>
                  <div style={{"position":"absolute","left":"84.3%","top":"19%","width":"3.6%","aspectRatio":"1","borderRadius":"50%","background":"#2e9c3a","border":".25em solid #fff","display":"flex","alignItems":"center","justifyContent":"center","boxShadow":"0 .2em .4em rgba(0,0,0,.35)","pointerEvents":"none"}}>
                    <svg viewBox="0 0 24 24" aria-hidden="true" style={{"width":"62%","height":"62%"}}>
                      <path d="M5 12.5l4.2 4.2L19 7" stroke="#fff" strokeWidth="3.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </>
              ) : null}
              {"\n    "}
              <div style={{"position":"absolute","right":"1.8%","top":"1.6%","display":"flex","alignItems":"center","gap":".55em","zIndex":"40"}}>
                {"\n      "}
                <button type="button" onClick={$v.toggleSound} title="Nyalakan / matikan suara" style={{"width":"calc(var(--u) * 44 / 12.8)","height":"calc(var(--u) * 44 / 12.8)","display":"flex","alignItems":"center","justifyContent":"center","borderRadius":"50%","border":".2em solid #fff","background":"linear-gradient(#5aa9f2,#2170cd 62%,#12508f)","cursor":"pointer","boxShadow":"0 .3em .5em rgba(0,0,0,.35)","transition":"transform .15s ease"}} className="s5p2">
                  {"\n        "}
                  <svg viewBox="0 0 24 24" aria-hidden="true" style={{"width":"62%","height":"62%"}}>
                    <path d="M4 9.5h3.2L12 5.4v13.2L7.2 14.5H4z" fill="#fff" />
                    <path d="M15.2 9.2a4 4 0 0 1 0 5.6" stroke="#fff" strokeWidth="1.7" fill="none" strokeLinecap="round" opacity={$v.waveOpacity} />
                    <path d="M15.4 8.6l6 6.8M21.4 8.6l-6 6.8" stroke="#ff6a6a" strokeWidth="2" strokeLinecap="round" opacity={$v.muteOpacity} />
                  </svg>
                  {"\n      "}
                </button>
                {"\n      "}
                <button type="button" onClick={$v.onHome} title="Kembali ke Home" style={{"width":"calc(var(--u) * 44 / 12.8)","height":"calc(var(--u) * 44 / 12.8)","display":"flex","alignItems":"center","justifyContent":"center","borderRadius":"50%","border":".2em solid #fff","background":"linear-gradient(#ffb23e,#f57c00 62%,#cf5a00)","cursor":"pointer","boxShadow":"0 .3em .5em rgba(0,0,0,.35)","transition":"transform .15s ease"}} className="s5p2">
                  {"\n        "}
                  <svg viewBox="0 0 24 24" aria-hidden="true" style={{"width":"62%","height":"62%"}}>
                    <path d="M12 3.6 3.4 11h2.3v9.4h5.1v-5.6h2.4v5.6h5.1V11h2.3z" fill="#fff" />
                  </svg>
                  {"\n      "}
                </button>
                {"\n    "}
              </div>
              {"\n  "}
            </div>
          </>
        ) : null}
        {$v.isPilih ? (
          <>
            {"\n  "}
            <div style={{"position":"absolute","inset":"0","backgroundImage":"url(assets/s5/p-bg-pilih.webp)","backgroundSize":"100% 100%","animation":"p5Fade .3s ease both"}}>
              {"\n\n    "}
              <div style={{"position":"absolute","left":"12.2%","top":"30.4%","width":"62.4%","height":"53.6%","display":"grid","gridTemplateColumns":"repeat(4,1fr)","gridTemplateRows":"repeat(2,1fr)","gap":"1.05em .9em"}}>
                {"\n      "}
                {arr($v.cards).map((c, $i1) => (
                  <Fragment key={$i1}>
                    {"\n        "}
                    <button type="button" onClick={c?.onClick} title={c?.title} style={{"position":"relative","height":"100%","aspectRatio":"372/490","justifySelf":"center","padding":"0","border":"0","borderRadius":"1em","background":"transparent","cursor":"pointer","transition":"transform .16s ease,filter .16s ease","filter":"drop-shadow(0 .4em .6em rgba(0,0,0,.4))"}} className="s5p5 s5p6">
                      {"\n          "}
                      <span style={cssToObj("position:absolute;inset:0;border-radius:1em;background-image:" + str(c?.imgCss) + ";background-size:100% 100%")} />
                      {"\n          "}
                      <span style={cssToObj("position:absolute;inset:0;border-radius:1em;background:rgba(10,20,32,.3);opacity:" + str(c?.dim) + ";transition:opacity .3s ease")} />
                      {"\n          "}
                      <span style={cssToObj("position:absolute;left:5%;top:5%;display:flex;align-items:center;gap:.3em;padding:.25em .6em;border-radius:.5em;border:.12em solid #fff;background:" + str(c?.statusBg) + ";color:" + str(c?.statusColor) + ";font-size:.95em;font-weight:800;letter-spacing:.04em;white-space:nowrap;opacity:" + str(c?.statusOpacity))}>
                        {interp(c?.statusLabel)}
                      </span>
                      {"\n        "}
                    </button>
                    {"\n      "}
                  </Fragment>
                ))}
                {"\n    "}
              </div>
              {"\n\n    "}
              <div style={{"position":"absolute","right":"1.8%","top":"1.6%","display":"flex","alignItems":"center","gap":".55em","zIndex":"40"}}>
                {"\n      "}
                <button type="button" onClick={$v.toggleSound} title="Nyalakan / matikan suara" style={{"width":"calc(var(--u) * 40 / 12.8)","height":"calc(var(--u) * 40 / 12.8)","display":"flex","alignItems":"center","justifyContent":"center","borderRadius":"50%","border":".2em solid #fff","background":"linear-gradient(#5aa9f2,#2170cd 62%,#12508f)","cursor":"pointer","boxShadow":"0 .3em .5em rgba(0,0,0,.35)","transition":"transform .15s ease"}} className="s5p2">
                  {"\n        "}
                  <svg viewBox="0 0 24 24" aria-hidden="true" style={{"width":"62%","height":"62%"}}>
                    <path d="M4 9.5h3.2L12 5.4v13.2L7.2 14.5H4z" fill="#fff" />
                    <path d="M15.2 9.2a4 4 0 0 1 0 5.6" stroke="#fff" strokeWidth="1.7" fill="none" strokeLinecap="round" opacity={$v.waveOpacity} />
                    <path d="M15.4 8.6l6 6.8M21.4 8.6l-6 6.8" stroke="#ff6a6a" strokeWidth="2" strokeLinecap="round" opacity={$v.muteOpacity} />
                  </svg>
                  {"\n      "}
                </button>
                {"\n      "}
                <button type="button" onClick={$v.onMaps} title="Peta misi" style={{"width":"3em","height":"3em","display":"flex","alignItems":"center","justifyContent":"center","borderRadius":"50%","border":".2em solid #fff","background":"linear-gradient(#7cd08a,#2e9c3a 62%,#1d6a26)","cursor":"pointer","boxShadow":"0 .3em .5em rgba(0,0,0,.35)","transition":"transform .15s ease"}} className="s5p2">
                  {"\n        "}
                  <svg viewBox="0 0 24 24" aria-hidden="true" style={{"width":"62%","height":"62%"}}>
                    <path d="M3.4 6.2 9 4.2v13.6l-5.6 2z" fill="#fff" />
                    <path d="M9 4.2l6 2v13.6l-6-2z" fill="#e8f5ea" />
                    <path d="M15 6.2l5.6-2v13.6l-5.6 2z" fill="#fff" />
                  </svg>
                  {"\n      "}
                </button>
                {"\n      "}
                <button type="button" onClick={$v.onHome} title="Kembali ke Home" style={{"width":"3em","height":"3em","display":"flex","alignItems":"center","justifyContent":"center","borderRadius":"50%","border":".2em solid #fff","background":"linear-gradient(#ffb23e,#f57c00 62%,#cf5a00)","cursor":"pointer","boxShadow":"0 .3em .5em rgba(0,0,0,.35)","transition":"transform .15s ease"}} className="s5p2">
                  {"\n        "}
                  <svg viewBox="0 0 24 24" aria-hidden="true" style={{"width":"62%","height":"62%"}}>
                    <path d="M12 3.2 2.8 11h2.6v9.2h5.2v-5.6h2.8v5.6h5.2V11h2.6z" fill="#fff" />
                  </svg>
                  {"\n      "}
                </button>
                {"\n    "}
              </div>
              {"\n\n    "}
              <div style={{"position":"absolute","left":"12.2%","bottom":"3.4%","display":"flex","alignItems":"center","gap":".7em"}}>
                {"\n      "}
                <div style={{"display":"flex","alignItems":"center","gap":".8em","padding":".5em 1em","borderRadius":".8em","background":"rgba(253,246,230,.95)","border":".16em solid #123a6b","boxShadow":"0 .35em .7em rgba(0,0,0,.35)"}}>
                  {"\n        "}
                  <span style={{"fontSize":"1.15em","fontWeight":"800","color":"#123a6b","letterSpacing":".04em"}}>
                    {"PROFESI DICOBA"}
                  </span>
                  {"\n        "}
                  <span style={{"fontSize":"1.35em","fontWeight":"800","color":"#123a6b"}}>
                    {interp($v.doneLabel)}
                  </span>
                  {"\n        "}
                  <span style={{"fontSize":"1em","fontWeight":"700","color":"#5c6f84","whiteSpace":"nowrap"}}>
                    {interp($v.hintLabel)}
                  </span>
                  {"\n        "}
                  <span style={{"display":"flex","gap":".3em"}}>
                    {"\n          "}
                    {arr($v.segs).map((seg, $i1) => (
                      <Fragment key={$i1}>
                        {"\n            "}
                        <span style={cssToObj("width:1.8em;height:.9em;border-radius:.25em;border:.1em solid rgba(18,58,107,.35);background:" + str(seg?.bg) + ";transition:background .3s ease")} />
                        {"\n          "}
                      </Fragment>
                    ))}
                    {"\n        "}
                  </span>
                  {"\n        "}
                  <span style={{"display":"flex","alignItems":"center","gap":".45em","padding":".32em .85em","borderRadius":".6em","background":"#123a6b","color":"#ffd11a","fontSize":"1.2em","fontWeight":"800"}}>
                    <span>
                      {"★ XP"}
                    </span>
                    <span style={{"color":"#fff"}}>
                      {interp($v.xpLabel)}
                    </span>
                  </span>
                  {"\n      "}
                </div>
                {"\n      "}
                <button type="button" onClick={$v.onAskReset} title="Reset progres" style={{"flex":"none","width":"2.7em","height":"2.7em","display":"flex","alignItems":"center","justifyContent":"center","borderRadius":"50%","border":".16em solid #fff","background":"linear-gradient(#8d9aa8,#5b6a7a)","color":"#fff","fontFamily":"inherit","fontSize":"1.3em","fontWeight":"800","cursor":"pointer","boxShadow":"0 .3em .5em rgba(0,0,0,.35)"}} className="s5p2">
                  {"⚙"}
                </button>
                {"\n    "}
              </div>
              {"\n\n    "}
              {$v.limitReached ? (
                <>
                  {"\n      "}
                  <button type="button" onClick={$v.onNext} title="Lanjut ke ringkasan misi" style={{"position":"absolute","right":"2.2%","bottom":"4.4%","display":"flex","alignItems":"center","gap":".5em","padding":".6em 1.5em","borderRadius":".85em","border":".2em solid #b07708","background":"linear-gradient(#ffd75e,#f5a406)","color":"#3a2a06","fontFamily":"inherit","fontSize":"1.7em","fontWeight":"800","letterSpacing":".05em","cursor":"pointer","boxShadow":"0 .4em .7em rgba(0,0,0,.35)","animation":"p5Pop .3s ease both"}} className="s5p7 s5p8">
                    {"SELANJUTNYA ❯"}
                  </button>
                  {"\n    "}
                </>
              ) : null}
              {"\n\n    "}
              {$v.showPick ? (
                <>
                  {"\n      "}
                  <div style={{"position":"absolute","inset":"0","display":"flex","alignItems":"center","justifyContent":"center","background":"rgba(8,16,26,.6)","animation":"p5Fade .2s ease both"}}>
                    {"\n        "}
                    <div style={{"width":"46%","display":"flex","flexDirection":"column","gap":"1em","padding":"1.4em","borderRadius":"1.4em","border":".22em solid #123a6b","background":"#fdf6e6","boxShadow":"0 1em 2em rgba(0,0,0,.5)","animation":"p5Pop .28s ease both"}}>
                      {"\n          "}
                      <div style={{"display":"flex","alignItems":"center","gap":"1.1em"}}>
                        {"\n            "}
                        <div style={cssToObj("flex:none;width:11em;aspect-ratio:1;border-radius:.9em;background-image:" + str($v.pick?.imgCss) + ";background-size:contain;background-position:center;background-repeat:no-repeat;filter:drop-shadow(0 .3em .5em rgba(0,0,0,.3))")} />
                        {"\n            "}
                        <div style={{"flex":"1","display":"flex","flexDirection":"column","gap":".5em"}}>
                          {"\n              "}
                          <div style={{"fontSize":"1.9em","fontWeight":"800","color":"#123a6b","letterSpacing":".02em","lineHeight":"1.1"}}>
                            {"SIAP MENJADI "}
                            {interp($v.pick?.name)}
                            {"?"}
                          </div>
                          {"\n              "}
                          <div style={{"fontSize":"1.3em","lineHeight":"1.4","color":"#31465e","textWrap":"pretty"}}>
                            {interp($v.pick?.about)}
                          </div>
                          {"\n              "}
                          <div style={{"alignSelf":"flex-start","padding":".3em .8em","borderRadius":".5em","background":"#2e9c3a","color":"#fff","fontSize":"1.1em","fontWeight":"800","letterSpacing":".05em"}}>
                            {"🏅 BADGE: "}
                            {interp($v.pick?.badge)}
                          </div>
                          {"\n            "}
                        </div>
                        {"\n          "}
                      </div>
                      {"\n          "}
                      <div style={{"display":"flex","alignItems":"center","gap":".8em","padding":".55em .9em","borderRadius":".7em","background":"#fff","border":".14em solid rgba(18,58,107,.25)","fontSize":"1.15em","fontWeight":"700","color":"#31465e"}}>
                        {"\n            "}
                        <span style={{"color":"#123a6b","fontWeight":"800"}}>
                          {"4 TAHAP"}
                        </span>
                        {"\n            "}
                        <span>
                          {"🧰 Persiapan"}
                        </span>
                        <span>
                          {"🚚 Ke Proyek"}
                        </span>
                        <span>
                          {"📋 Jobdesk"}
                        </span>
                        <span>
                          {"⚠ Kasus"}
                        </span>
                        {"\n          "}
                      </div>
                      {"\n          "}
                      <div style={{"display":"flex","justifyContent":"flex-end","gap":".8em"}}>
                        {"\n            "}
                        <button type="button" onClick={$v.onClosePick} title="Kembali memilih profesi" style={{"padding":".55em 1.4em","borderRadius":".8em","border":".18em solid rgba(18,58,107,.35)","background":"#fff","color":"#123a6b","fontFamily":"inherit","fontSize":"1.5em","fontWeight":"800","cursor":"pointer"}} className="s5p9">
                          {"❮ KEMBALI"}
                        </button>
                        {"\n            "}
                        <button type="button" onClick={$v.onBeginMission} title="Mulai misi profesi ini" style={{"padding":".55em 1.6em","borderRadius":".8em","border":".2em solid #b07708","background":"linear-gradient(#ffd75e,#f5a406)","color":"#3a2a06","fontFamily":"inherit","fontSize":"1.5em","fontWeight":"800","letterSpacing":".05em","cursor":"pointer","boxShadow":"0 .35em .6em rgba(0,0,0,.3)"}} className="s5pa">
                          {"▶ MULAI"}
                        </button>
                        {"\n          "}
                      </div>
                      {"\n        "}
                    </div>
                    {"\n      "}
                  </div>
                  {"\n    "}
                </>
              ) : null}
              {"\n\n    "}
              {$v.showReset ? (
                <>
                  {"\n      "}
                  <div style={{"position":"absolute","inset":"0","display":"flex","alignItems":"center","justifyContent":"center","background":"rgba(8,16,26,.6)","animation":"p5Fade .2s ease both"}}>
                    {"\n        "}
                    <div style={{"width":"32%","display":"flex","flexDirection":"column","gap":"1em","padding":"1.4em","borderRadius":"1.2em","border":".22em solid #123a6b","background":"#fdf6e6","boxShadow":"0 1em 2em rgba(0,0,0,.5)","textAlign":"center","animation":"p5Pop .28s ease both"}}>
                      {"\n          "}
                      <div style={{"fontSize":"1.7em","fontWeight":"800","color":"#123a6b"}}>
                        {"Yakin ingin menghapus seluruh progres?"}
                      </div>
                      {"\n          "}
                      <div style={{"display":"flex","justifyContent":"center","gap":".8em"}}>
                        {"\n            "}
                        <button type="button" onClick={$v.onCancelReset} title="Batalkan reset" style={{"padding":".5em 1.3em","borderRadius":".8em","border":".18em solid rgba(18,58,107,.35)","background":"#fff","color":"#123a6b","fontFamily":"inherit","fontSize":"1.4em","fontWeight":"800","cursor":"pointer"}} className="s5p9">
                          {"BATAL"}
                        </button>
                        {"\n            "}
                        <button type="button" onClick={$v.onDoReset} title="Hapus progres" style={{"padding":".5em 1.3em","borderRadius":".8em","border":".18em solid #8c1f1a","background":"linear-gradient(#e75d55,#c92b23)","color":"#fff","fontFamily":"inherit","fontSize":"1.4em","fontWeight":"800","cursor":"pointer"}} className="s5pa">
                          {"YA, RESET"}
                        </button>
                        {"\n          "}
                      </div>
                      {"\n        "}
                    </div>
                    {"\n      "}
                  </div>
                  {"\n    "}
                </>
              ) : null}
              {"\n\n    "}
              {$v.showToast ? (
                <>
                  {"\n      "}
                  <div style={{"position":"absolute","left":"50%","bottom":"14%","padding":".55em 1.3em","borderRadius":".8em","background":"rgba(12,17,22,.9)","border":".14em solid rgba(255,255,255,.35)","color":"#ffd11a","fontSize":"1.4em","fontWeight":"800","whiteSpace":"nowrap","pointerEvents":"none","animation":"p5Toast 2.6s ease both"}}>
                    {interp($v.toast)}
                  </div>
                  {"\n    "}
                </>
              ) : null}
              {"\n    "}
              {$v.showSummary ? (
                <>
                  {"\n      "}
                  <div style={{"position":"absolute","inset":"0","display":"flex","alignItems":"center","justifyContent":"center","background":"rgba(8,16,26,.68)","animation":"p5Fade .2s ease both"}}>
                    {"\n        "}
                    <div style={{"width":"52%","display":"flex","flexDirection":"column","gap":"1em","padding":"1.5em","borderRadius":"1.4em","border":".22em solid #123a6b","background":"#fdf6e6","boxShadow":"0 1em 2em rgba(0,0,0,.5)","textAlign":"center","animation":"p5Pop .3s ease both"}}>
                      {"\n          "}
                      <div style={{"fontSize":"2.3em","fontWeight":"800","color":"#123a6b","letterSpacing":".02em"}}>
                        {interp($v.summaryTitle)}
                      </div>
                      {"\n          "}
                      <div style={{"fontSize":"1.4em","lineHeight":"1.4","color":"#31465e","textWrap":"pretty"}}>
                        {"Kamu sudah menjalani hari pertama di beberapa profesi. Setiap profesi punya tugas, alat, dan tantangan yang berbeda."}
                      </div>
                      {"\n          "}
                      <div style={{"display":"flex","justifyContent":"center","gap":".8em"}}>
                        {"\n            "}
                        {arr($v.summaryList).map((d, $i1) => (
                          <Fragment key={$i1}>
                            {"\n              "}
                            <div style={{"width":"11em","display":"flex","flexDirection":"column","gap":".4em","padding":".6em","borderRadius":".9em","background":"#fff","border":".16em solid rgba(18,58,107,.25)"}}>
                              {"\n                "}
                              <div style={cssToObj("width:100%;aspect-ratio:1;border-radius:.7em;background-image:" + str(d?.imgCss) + ";background-size:contain;background-position:center;background-repeat:no-repeat")} />
                              {"\n                "}
                              <div style={{"fontSize":"1.2em","fontWeight":"800","color":"#123a6b"}}>
                                {interp(d?.name)}
                              </div>
                              {"\n                "}
                              <div style={{"padding":".25em .4em","borderRadius":".5em","background":"#2e9c3a","color":"#fff","fontSize":".95em","fontWeight":"800"}}>
                                {"🏅 "}
                                {interp(d?.badge)}
                              </div>
                              {"\n              "}
                            </div>
                            {"\n            "}
                          </Fragment>
                        ))}
                        {"\n          "}
                      </div>
                      {"\n          "}
                      <div style={{"alignSelf":"center","display":"flex","alignItems":"center","gap":".5em","padding":".4em 1.1em","borderRadius":".7em","background":"#123a6b","color":"#ffd11a","fontSize":"1.5em","fontWeight":"800"}}>
                        <span>
                          {"★ TOTAL XP"}
                        </span>
                        <span style={{"color":"#fff"}}>
                          {interp($v.xpLabel)}
                        </span>
                      </div>
                      {"\n          "}
                      <div style={{"display":"flex","justifyContent":"center","gap":".8em"}}>
                        {"\n            "}
                        <button type="button" onClick={$v.onCloseSummary} title="Lihat kembali kartu profesi" style={{"padding":".5em 1.3em","borderRadius":".8em","border":".18em solid rgba(18,58,107,.35)","background":"#fff","color":"#123a6b","fontFamily":"inherit","fontSize":"1.4em","fontWeight":"800","cursor":"pointer"}} className="s5p9">
                          {"❮ KEMBALI"}
                        </button>
                        {"\n            "}
                        <button type="button" onClick={$v.onPlayAgain} title="Lanjut bermain, progres tetap tersimpan" style={{"padding":".5em 1.3em","borderRadius":".8em","border":".18em solid #123a6b","background":"#123a6b","color":"#fff","fontFamily":"inherit","fontSize":"1.4em","fontWeight":"800","cursor":"pointer"}} className="s5pa">
                          {"🔄 MAIN LAGI"}
                        </button>
                        {"\n            "}
                        <button type="button" onClick={$v.onEvaluasi} title="Lanjut ke evaluasi akhir" style={{"padding":".5em 1.3em","borderRadius":".8em","border":".2em solid #b07708","background":"linear-gradient(#ffd75e,#f5a406)","color":"#3a2a06","fontFamily":"inherit","fontSize":"1.4em","fontWeight":"800","cursor":"pointer"}} className="s5pa">
                          {"📝 LANJUT KE EVALUASI"}
                        </button>
                        {"\n          "}
                      </div>
                      {"\n        "}
                    </div>
                    {"\n      "}
                  </div>
                  {"\n    "}
                </>
              ) : null}
              {"\n  "}
            </div>
          </>
        ) : null}
        {$v.isMission ? (
          <>
            {"\n  "}
            <div style={{"position":"absolute","inset":"0","backgroundImage":"url(assets/s5/p-bg-pilih.webp)","backgroundSize":"100% 100%","animation":"p5Fade .25s ease both"}}>
              {"\n    "}
              <div style={{"position":"absolute","inset":"0","background":"rgba(8,20,38,.6)"}} />
              {"\n    "}
              <div style={{"position":"absolute","inset":"2.4% 2.2%","display":"flex","flexDirection":"column","gap":".9em","padding":"1.1em","borderRadius":"1.4em","border":".22em solid #123a6b","background":"#fdf6e6","boxShadow":"0 1em 2em rgba(0,0,0,.45)","animation":"p5Pop .28s ease both"}}>
                {"\n\n      "}
                <div style={{"flex":"none","display":"flex","alignItems":"center","gap":".9em"}}>
                  {"\n        "}
                  <div style={{"flex":"none","padding":".5em 1em","borderRadius":".8em","background":"linear-gradient(#e8c98d,#c99b52)","border":".16em solid #7c5a2a","color":"#3a2405","fontSize":"1.5em","fontWeight":"800","letterSpacing":".02em"}}>
                    {interp($v.mTitle)}
                  </div>
                  {"\n        "}
                  <div style={{"flex":"1","display":"flex","gap":".4em"}}>
                    {"\n          "}
                    {arr($v.mSteps).map((st, $i1) => (
                      <Fragment key={$i1}>
                        {"\n            "}
                        <span style={cssToObj("flex:1;padding:.4em;text-align:center;border-radius:.6em;background:" + str(st?.bg) + ";color:" + str(st?.color) + ";font-size:1.1em;font-weight:800;transition:background .3s ease")}>
                          {interp(st?.label)}
                        </span>
                        {"\n          "}
                      </Fragment>
                    ))}
                    {"\n        "}
                  </div>
                  {"\n        "}
                  <div style={{"flex":"none","display":"flex","alignItems":"center","gap":".45em","padding":".35em .85em","borderRadius":".7em","background":"#123a6b","color":"#ffd11a","fontSize":"1.25em","fontWeight":"800","whiteSpace":"nowrap"}}>
                    <span>
                      {"★ XP"}
                    </span>
                    <span style={{"color":"#fff"}}>
                      {interp($v.mXpLabel)}
                    </span>
                  </div>
                  {"\n        "}
                  <button type="button" onClick={$v.toggleSound} title="Nyalakan / matikan suara" style={{"flex":"none","width":"3.9em","height":"3.9em","display":"flex","alignItems":"center","justifyContent":"center","borderRadius":"50%","border":".16em solid #fff","background":"linear-gradient(#5aa9f2,#2170cd)","cursor":"pointer","boxShadow":"0 .25em .45em rgba(0,0,0,.3)"}} className="s5pb">
                    {"\n          "}
                    <svg viewBox="0 0 24 24" aria-hidden="true" style={{"width":"60%","height":"60%"}}>
                      <path d="M4 9.5h3.2L12 5.4v13.2L7.2 14.5H4z" fill="#fff" />
                      <path d="M15.2 9.2a4 4 0 0 1 0 5.6" stroke="#fff" strokeWidth="1.7" fill="none" strokeLinecap="round" opacity={$v.waveOpacity} />
                      <path d="M15.4 8.6l6 6.8M21.4 8.6l-6 6.8" stroke="#ff6a6a" strokeWidth="2" strokeLinecap="round" opacity={$v.muteOpacity} />
                    </svg>
                    {"\n        "}
                  </button>
                  {"\n        "}
                  <button type="button" onClick={$v.onQuitMission} title="Keluar dari misi" style={{"flex":"none","width":"2.6em","height":"2.6em","borderRadius":"50%","border":".16em solid #fff","background":"#d63a34","color":"#fff","fontFamily":"inherit","fontSize":"1.5em","fontWeight":"800","lineHeight":"1","cursor":"pointer","boxShadow":"0 .25em .45em rgba(0,0,0,.3)"}} className="s5pb">
                    {"✕"}
                  </button>
                  {"\n      "}
                </div>
                {"\n\n      "}
                <div style={{"flex":"1","minHeight":"0","display":"grid","gridTemplateColumns":"22% 1fr","gap":".9em"}}>
                  {"\n        "}
                  <div style={{"minHeight":"0","display":"flex","flexDirection":"column","gap":".6em","padding":".8em","borderRadius":"1em","background":"#fff","border":".16em solid rgba(18,58,107,.22)"}}>
                    {"\n          "}
                    <div style={cssToObj("width:100%;aspect-ratio:1;border-radius:.8em;background-image:" + str($v.mImgCss) + ";background-size:contain;background-position:center;background-repeat:no-repeat")} />
                    {"\n          "}
                    <div style={{"padding":".3em .6em","textAlign":"center","borderRadius":".5em","background":"#2e9c3a","color":"#fff","fontSize":"1em","fontWeight":"800"}}>
                      {"🏅 "}
                      {interp($v.mBadge)}
                    </div>
                    {"\n          "}
                    <div style={{"flex":"1","minHeight":"0","overflow":"auto","fontSize":"1.1em","lineHeight":"1.4","color":"#31465e","textWrap":"pretty"}}>
                      {interp($v.mIntro)}
                    </div>
                    {"\n        "}
                  </div>
                  {"\n\n        "}
                  <div style={{"minHeight":"0","display":"flex","flexDirection":"column","gap":".8em","padding":"1em","borderRadius":"1em","background":"#fff","border":".16em solid rgba(18,58,107,.22)","overflow":"auto"}}>
                    {"\n\n\n          "}
                    {$v.mIsPersiapan ? (
                      <>
                        {"\n            "}
                        <div style={{"display":"flex","flexDirection":"column","gap":".8em"}}>
                          {"\n              "}
                          <div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","gap":".8em"}}>
                            {"\n                "}
                            <div style={{"fontSize":"1.8em","fontWeight":"800","color":"#123a6b"}}>
                              {"🧰 SIAPKAN PERLENGKAPANMU"}
                            </div>
                            {"\n                "}
                            <div style={{"padding":".3em .8em","borderRadius":".5em","background":"rgba(18,58,107,.1)","color":"#123a6b","fontSize":"1.1em","fontWeight":"800"}}>
                              {interp($v.mPickedCount)}
                            </div>
                            {"\n              "}
                          </div>
                          {"\n              "}
                          <div style={{"fontSize":"1.25em","color":"#31465e"}}>
                            {"Klik perlengkapan yang kamu butuhkan hari ini. Klik lagi untuk membatalkan."}
                          </div>
                          {"\n              "}
                          <div style={{"display":"grid","gridTemplateColumns":"repeat(4,1fr)","gap":".7em"}}>
                            {"\n                "}
                            {arr($v.mTools).map((t, $i1) => (
                              <Fragment key={$i1}>
                                {"\n                  "}
                                <button type="button" onClick={t?.onClick} title={t?.label} style={cssToObj("display:flex;flex-direction:column;align-items:center;gap:.35em;padding:.7em .4em;border-radius:.9em;border:" + str(t?.border) + ";background:" + str(t?.bg) + ";font-family:inherit;cursor:pointer;transition:transform .14s ease")} className="s5pc">
                                  {"\n                    "}
                                  {t?.noImg ? (
                                    <>
                                      <span style={{"fontSize":"2.6em","lineHeight":"1"}}>
                                        {interp(t?.icon)}
                                      </span>
                                    </>
                                  ) : null}
                                  {t?.img ? (
                                    <>
                                      <img src={t?.img} alt="" style={{"height":"2.6em","width":"auto","maxWidth":"4.8em","objectFit":"contain","display":"block"}} />
                                    </>
                                  ) : null}
                                  {"\n                    "}
                                  <span style={{"fontSize":"1.1em","fontWeight":"700","color":"#26384c","textAlign":"center"}}>
                                    {interp(t?.label)}
                                  </span>
                                  {"\n                    "}
                                  <span style={cssToObj("padding:.2em .6em;border-radius:.4em;background:" + str(t?.markBg) + ";color:" + str(t?.markColor) + ";font-size:.95em;font-weight:800")}>
                                    {interp(t?.mark)}
                                  </span>
                                  {"\n                  "}
                                </button>
                                {"\n                "}
                              </Fragment>
                            ))}
                            {"\n              "}
                          </div>
                          {"\n            "}
                        </div>
                        {"\n          "}
                      </>
                    ) : null}
                    {"\n\n          "}
                    {$v.mIsBerangkat ? (
                      <>
                        {"\n            "}
                        <div style={{"height":"100%","minHeight":"0","display":"flex","flexDirection":"column","gap":".7em","animation":"p5Fade .3s ease both"}}>
                          {"\n              "}
                          <div style={{"display":"flex","alignItems":"center","gap":".8em"}}>
                            {"\n                "}
                            <div style={{"padding":".4em .9em","borderRadius":".6em","background":"#123a6b","color":"#ffd11a","fontSize":"1.4em","fontWeight":"800"}}>
                              {"🏗️ "}
                              {interp($v.mProyek)}
                            </div>
                            {"\n                "}
                            <div style={{"padding":".4em .9em","borderRadius":".6em","background":"rgba(18,58,107,.1)","color":"#123a6b","fontSize":"1.3em","fontWeight":"800"}}>
                              {"Hari pertama · "}
                              {interp($v.mJam)}
                            </div>
                            {"\n              "}
                          </div>
                          {"\n              "}
                          <div style={{"flex":"1","minHeight":"0","minWidth":"0","display":"flex","alignItems":"center","gap":"1em","width":"100%"}}>
                            {"\n                \n                "}
                            <div style={{"flex":"0 1 auto","position":"relative","padding":"1em 1.2em","borderRadius":"1em","background":"#fdf6e6","border":".18em solid #123a6b","fontSize":"1.6em","fontWeight":"700","lineHeight":"1.35","color":"#26384c","textWrap":"pretty","maxWidth":"56%","alignSelf":"flex-start","marginTop":"2.4em","marginLeft":"auto"}}>
                              {interp($v.mDialog)}
                            </div>
                            <img src="assets/s5/p-char-pm.webp" alt="Pembimbing proyek" style={{"flex":"none","width":"26%","height":"100%","objectFit":"contain","objectPosition":"bottom","filter":"drop-shadow(0 .4em .6em rgba(0,0,0,.25))"}} />
                            {"\n              "}
                          </div>
                          {"\n              "}
                          <button type="button" onClick={$v.onDialogNext} title="Lanjut" style={{"alignSelf":"flex-start","flex":"none","padding":".55em 1.5em","borderRadius":".8em","border":".2em solid #b07708","background":"linear-gradient(#ffd75e,#f5a406)","color":"#3a2a06","fontFamily":"inherit","fontSize":"1.5em","fontWeight":"800","cursor":"pointer","boxShadow":"0 .35em .6em rgba(0,0,0,.25)"}} className="s5pa">
                            {"LIHAT TUGAS ❯"}
                          </button>
                          {"\n            "}
                        </div>
                        {"\n          "}
                      </>
                    ) : null}
                    {"\n\n          "}
                    {$v.mIsQuiz ? (
                      <>
                        {"\n            "}
                        <div style={{"display":"flex","flexDirection":"column","gap":".7em"}}>
                          {"\n              "}
                          <div style={{"alignSelf":"flex-start","padding":".35em .9em","borderRadius":".6em","background":"#123a6b","color":"#ffd11a","fontSize":"1.3em","fontWeight":"800","letterSpacing":".04em"}}>
                            {interp($v.mQuizKind)}
                          </div>
                          {"\n              "}
                          <div style={{"fontSize":"1.35em","fontWeight":"700","color":"#31465e","lineHeight":"1.4","textWrap":"pretty"}}>
                            {interp($v.mQuizHead)}
                          </div>
                          {"\n              "}
                          <div style={{"fontSize":"1.7em","fontWeight":"800","color":"#123a6b","lineHeight":"1.25","textWrap":"pretty"}}>
                            {interp($v.mQuizQ)}
                          </div>
                          {"\n              "}
                          {$v.mQuizMcq ? (
                            <>
                              {"\n                "}
                              <div style={{"display":"flex","flexDirection":"column","gap":".5em"}}>
                                {"\n                  "}
                                {arr($v.mOpts).map((o, $i1) => (
                                  <Fragment key={$i1}>
                                    {"\n                    "}
                                    <button type="button" onClick={o?.onClick} title={"Pilih jawaban " + str(o?.letter)} style={cssToObj("display:flex;align-items:center;gap:.8em;padding:.6em .9em;border-radius:.8em;border:" + str(o?.border) + ";background:" + str(o?.bg) + ";color:" + str(o?.color) + ";font-family:inherit;font-size:1.3em;font-weight:700;text-align:left;cursor:pointer;transition:transform .14s ease")} className="s5pd">
                                      {"\n                      "}
                                      <span style={{"flex":"none","width":"1.6em","height":"1.6em","display":"flex","alignItems":"center","justifyContent":"center","borderRadius":".4em","background":"rgba(18,58,107,.14)","fontWeight":"800"}}>
                                        {interp(o?.letter)}
                                      </span>
                                      {"\n                      "}
                                      <span>
                                        {interp(o?.text)}
                                      </span>
                                      {"\n                    "}
                                    </button>
                                    {"\n                  "}
                                  </Fragment>
                                ))}
                                {"\n                "}
                              </div>
                              {"\n              "}
                            </>
                          ) : null}
                          {"\n\n              "}
                          {$v.mQuizNumber ? (
                            <>
                              {"\n                "}
                              <div style={{"display":"flex","alignItems":"center","gap":".7em","padding":".9em 1em","borderRadius":".9em","background":"#f4f8fd","border":".16em solid rgba(18,58,107,.2)"}}>
                                {"\n                  "}
                                <span style={{"fontSize":"2em","fontWeight":"800","color":"#123a6b"}}>
                                  {interp($v.mNumPrefix)}
                                </span>
                                {"\n                  "}
                                <input type="text" inputMode="numeric" value={$v.mNumValue ?? ""} onInput={$v.onNumInput} placeholder={$v.mNumPlaceholder} style={{"flex":"1","minWidth":"0","padding":".4em .7em","borderRadius":".6em","border":".16em solid #123a6b","background":"#fff","color":"#123a6b","fontFamily":"inherit","fontSize":"2em","fontWeight":"800"}} />
                                {"\n                "}
                              </div>
                              {"\n              "}
                            </>
                          ) : null}
                          {"\n\n              "}
                          {$v.mQuizMulti ? (
                            <>
                              {"\n                "}
                              <div style={{"display":"flex","flexDirection":"column","gap":".5em"}}>
                                {"\n                  "}
                                <div style={{"alignSelf":"flex-start","padding":".3em .8em","borderRadius":".5em","background":"rgba(18,58,107,.1)","color":"#123a6b","fontSize":"1.1em","fontWeight":"800"}}>
                                  {interp($v.mPickLabel)}
                                </div>
                                {"\n                  "}
                                <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":".5em"}}>
                                  {"\n                    "}
                                  {arr($v.mMultiItems).map((o, $i1) => (
                                    <Fragment key={$i1}>
                                      {"\n                      "}
                                      <button type="button" onClick={o?.onClick} title={o?.label} style={cssToObj("display:flex;align-items:center;gap:.7em;padding:.6em .8em;border-radius:.8em;border:" + str(o?.border) + ";background:" + str(o?.bg) + ";color:" + str(o?.color) + ";font-family:inherit;font-size:1.2em;font-weight:700;text-align:left;cursor:pointer;transition:transform .14s ease")} className="s5pe">
                                        {"\n                        "}
                                        <span style={{"flex":"none","width":"1.6em","height":"1.6em","display":"flex","alignItems":"center","justifyContent":"center","borderRadius":".4em","background":"rgba(255,255,255,.35)","border":".12em solid rgba(18,58,107,.25)","fontWeight":"800"}}>
                                          {interp(o?.mark)}
                                        </span>
                                        {"\n                        "}
                                        <span>
                                          {interp(o?.label)}
                                        </span>
                                        {"\n                      "}
                                      </button>
                                      {"\n                    "}
                                    </Fragment>
                                  ))}
                                  {"\n                  "}
                                </div>
                                {"\n                "}
                              </div>
                              {"\n              "}
                            </>
                          ) : null}
                          {"\n\n              "}
                          {$v.mQuizOrder ? (
                            <>
                              {"\n                "}
                              <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":".7em"}}>
                                {"\n                  "}
                                <div style={{"display":"flex","flexDirection":"column","gap":".45em"}}>
                                  {"\n                    "}
                                  <div style={{"fontSize":"1.1em","fontWeight":"800","color":"#123a6b","letterSpacing":".04em"}}>
                                    {"PILIHAN PEKERJAAN"}
                                  </div>
                                  {"\n                    "}
                                  {arr($v.mOrderPool).map((o, $i1) => (
                                    <Fragment key={$i1}>
                                      {"\n                      "}
                                      <button type="button" onClick={o?.onClick} title={"Tambahkan " + str(o?.label)} style={{"display":"flex","alignItems":"center","gap":".6em","padding":".55em .8em","borderRadius":".8em","border":".16em solid rgba(18,58,107,.25)","background":"#fff","color":"#26384c","fontFamily":"inherit","fontSize":"1.25em","fontWeight":"700","textAlign":"left","cursor":"pointer","transition":"transform .14s ease"}} className="s5pd">
                                        {"\n                        "}
                                        <span style={{"flex":"none","color":"#2e9c3a","fontWeight":"800"}}>
                                          {"＋"}
                                        </span>
                                        <span>
                                          {interp(o?.label)}
                                        </span>
                                        {"\n                      "}
                                      </button>
                                      {"\n                    "}
                                    </Fragment>
                                  ))}
                                  {"\n                  "}
                                </div>
                                {"\n                  "}
                                <div style={{"display":"flex","flexDirection":"column","gap":".45em","padding":".6em","borderRadius":".8em","background":"#f4f8fd","border":".16em dashed rgba(18,58,107,.3)"}}>
                                  {"\n                    "}
                                  <div style={{"fontSize":"1.1em","fontWeight":"800","color":"#123a6b","letterSpacing":".04em"}}>
                                    {"URUTAN PEKERJAANMU"}
                                  </div>
                                  {"\n                    "}
                                  {$v.mOrderEmpty ? (
                                    <>
                                      {"\n                      "}
                                      <div style={{"fontSize":"1.15em","color":"#5c6f84"}}>
                                        {"Klik pekerjaan di kiri untuk menyusun urutannya. Klik lagi untuk membatalkan."}
                                      </div>
                                      {"\n                    "}
                                    </>
                                  ) : null}
                                  {"\n                    "}
                                  {arr($v.mOrderSlots).map((o, $i1) => (
                                    <Fragment key={$i1}>
                                      {"\n                      "}
                                      <button type="button" onClick={o?.onClick} title={"Hapus " + str(o?.label) + " dari urutan"} style={{"display":"flex","alignItems":"center","gap":".6em","padding":".55em .8em","borderRadius":".8em","border":".16em solid #123a6b","background":"#123a6b","color":"#fff","fontFamily":"inherit","fontSize":"1.25em","fontWeight":"700","textAlign":"left","cursor":"pointer"}} className="s5pf">
                                        {"\n                        "}
                                        <span style={{"flex":"none","width":"1.5em","height":"1.5em","display":"flex","alignItems":"center","justifyContent":"center","borderRadius":"50%","background":"#ffd11a","color":"#3a2a06","fontWeight":"800"}}>
                                          {interp(o?.no)}
                                        </span>
                                        {"\n                        "}
                                        <span>
                                          {interp(o?.label)}
                                        </span>
                                        {"\n                      "}
                                      </button>
                                      {"\n                    "}
                                    </Fragment>
                                  ))}
                                  {"\n                  "}
                                </div>
                                {"\n                "}
                              </div>
                              {"\n              "}
                            </>
                          ) : null}
                          {"\n            "}
                        </div>
                        {"\n          "}
                      </>
                    ) : null}
                    {"\n\n          "}
                    {$v.mIsSelesai ? (
                      <>
                        {"\n            "}
                        <div style={{"display":"flex","flexDirection":"column","gap":".8em","textAlign":"center","animation":"p5Pop .3s ease both"}}>
                          {"\n              "}
                          <div style={{"fontSize":"2.2em","fontWeight":"800","color":"#123a6b"}}>
                            {"🏆 MISI SELESAI!"}
                          </div>
                          {"\n              "}
                          <div style={{"fontSize":"1.4em","color":"#31465e"}}>
                            {"Kamu berhasil menjalani Hari Pertamamu sebagai "}
                            {interp($v.mName)}
                            {"."}
                          </div>
                          {"\n              "}
                          <div style={{"display":"grid","gridTemplateColumns":"repeat(4,1fr)","gap":".6em"}}>
                            {"\n                "}
                            {arr($v.mSteps).map((st, $i1) => (
                              <Fragment key={$i1}>
                                {"\n                  "}
                                <div style={{"padding":".6em","borderRadius":".8em","background":"#e6f4e8","border":".16em solid #2e9c3a","color":"#1d6a26","fontSize":"1.2em","fontWeight":"800"}}>
                                  {interp(st?.label)}
                                  <div style={{"fontSize":".95em"}}>
                                    {"✓ Selesai"}
                                  </div>
                                </div>
                                {"\n                "}
                              </Fragment>
                            ))}
                            {"\n              "}
                          </div>
                          {"\n              "}
                          <div style={{"display":"flex","justifyContent":"center","gap":".8em"}}>
                            {"\n                "}
                            <div style={{"padding":".5em 1.1em","borderRadius":".7em","background":"#123a6b","color":"#ffd11a","fontSize":"1.5em","fontWeight":"800"}}>
                              {"★ "}
                              {interp($v.mEarned)}
                              {" XP"}
                            </div>
                            {"\n                "}
                            <div style={{"padding":".5em 1.1em","borderRadius":".7em","background":"#2e9c3a","color":"#fff","fontSize":"1.5em","fontWeight":"800"}}>
                              {"🏅 "}
                              {interp($v.mBadge)}
                            </div>
                            {"\n              "}
                          </div>
                          {"\n              "}
                          <div style={{"fontSize":"1.25em","color":"#31465e","textWrap":"pretty"}}>
                            {"Sekarang kamu sudah punya gambaran bagaimana seorang "}
                            {interp($v.mName)}
                            {" bekerja di proyek."}
                          </div>
                          {"\n              "}
                          <button type="button" onClick={$v.onToRefleksi} title="Isi refleksi" style={{"alignSelf":"center","padding":".55em 1.6em","borderRadius":".8em","border":".2em solid #b07708","background":"linear-gradient(#ffd75e,#f5a406)","color":"#3a2a06","fontFamily":"inherit","fontSize":"1.5em","fontWeight":"800","cursor":"pointer","boxShadow":"0 .35em .6em rgba(0,0,0,.25)"}} className="s5pa">
                            {"🤔 REFLEKSI"}
                          </button>
                          {"\n            "}
                        </div>
                        {"\n          "}
                      </>
                    ) : null}
                    {"\n\n          "}
                    {$v.mIsRefleksi ? (
                      <>
                        {"\n            "}
                        <div style={{"display":"flex","flexDirection":"column","gap":".7em","animation":"p5Fade .25s ease both"}}>
                          {"\n              "}
                          <div style={{"fontSize":"1.9em","fontWeight":"800","color":"#123a6b"}}>
                            {"BAGAIMANA PENGALAMANMU?"}
                          </div>
                          {"\n              "}
                          <div style={{"fontSize":"1.3em","fontWeight":"700","color":"#31465e"}}>
                            {"Seberapa menarik profesi ini menurutmu?"}
                          </div>
                          {"\n              "}
                          <div style={{"display":"grid","gridTemplateColumns":"repeat(4,1fr)","gap":".5em"}}>
                            {"\n                "}
                            {arr($v.mMoods).map((o, $i1) => (
                              <Fragment key={$i1}>
                                {"\n                  "}
                                <button type="button" onClick={o?.onClick} title={o?.text} style={cssToObj("padding:.6em .4em;border-radius:.8em;border:.16em solid rgba(18,58,107,.2);background:" + str(o?.bg) + ";color:" + str(o?.color) + ";font-family:inherit;font-size:1.15em;font-weight:800;cursor:pointer;transition:transform .14s ease")} className="s5pg">
                                  {interp(o?.text)}
                                </button>
                                {"\n                "}
                              </Fragment>
                            ))}
                            {"\n              "}
                          </div>
                          {"\n              "}
                          <div style={{"fontSize":"1.3em","fontWeight":"700","color":"#31465e"}}>
                            {interp($v.mReflectQ)}
                          </div>
                          {"\n              "}
                          <div style={{"display":"grid","gridTemplateColumns":"repeat(4,1fr)","gap":".5em"}}>
                            {"\n                "}
                            {arr($v.mReflect).map((o, $i1) => (
                              <Fragment key={$i1}>
                                {"\n                  "}
                                <button type="button" onClick={o?.onClick} title={o?.text} style={cssToObj("padding:.6em .4em;border-radius:.8em;border:.16em solid rgba(18,58,107,.2);background:" + str(o?.bg) + ";color:" + str(o?.color) + ";font-family:inherit;font-size:1.15em;font-weight:800;cursor:pointer;transition:transform .14s ease")} className="s5pg">
                                  {interp(o?.text)}
                                </button>
                                {"\n                "}
                              </Fragment>
                            ))}
                            {"\n              "}
                          </div>
                          {"\n              "}
                          <div style={{"fontSize":"1.15em","color":"#5c6f84","textWrap":"pretty"}}>
                            {"Profesi ini menarik untuk kamu eksplorasi lebih lanjut."}
                          </div>
                          {"\n            "}
                        </div>
                        {"\n          "}
                      </>
                    ) : null}
                    {"\n        "}
                  </div>
                  {"\n      "}
                </div>
                {"\n\n      "}
                <div style={{"flex":"none","display":"flex","alignItems":"center","gap":".8em","minHeight":"3.4em"}}>
                  {"\n        "}
                  {$v.mShowFb ? (
                    <>
                      {"\n          "}
                      <div style={cssToObj("flex:1;display:flex;align-items:center;gap:.8em;padding:.6em .9em;border-radius:.8em;background:" + str($v.mFb?.bg) + ";border:.16em solid rgba(18,58,107,.2);animation:p5Pop .25s ease both")}>
                        {"\n            "}
                        <span style={cssToObj("flex:none;font-size:1.35em;font-weight:800;color:" + str($v.mFb?.color) + ";white-space:nowrap")}>
                          {interp($v.mFb?.title)}
                        </span>
                        {"\n            "}
                        <span style={{"flex":"1","fontSize":"1.2em","fontWeight":"600","color":"#31465e","lineHeight":"1.35","textWrap":"pretty"}}>
                          {interp($v.mFb?.text)}
                        </span>
                        {"\n          "}
                      </div>
                      {"\n        "}
                    </>
                  ) : null}
                  {"\n        "}
                  <div style={{"flex":"1"}} />
                  {"\n        "}
                  {$v.mIsPersiapan ? (
                    <>
                      {"\n          "}
                      {$v.mFbOk ? (
                        <>
                          {"\n            "}
                          <button type="button" onClick={$v.onNextStage} title="Berangkat ke proyek" style={{"flex":"none","padding":".55em 1.5em","borderRadius":".8em","border":".2em solid #b07708","background":"linear-gradient(#ffd75e,#f5a406)","color":"#3a2a06","fontFamily":"inherit","fontSize":"1.5em","fontWeight":"800","cursor":"pointer","boxShadow":"0 .35em .6em rgba(0,0,0,.25)"}} className="s5pa">
                            {interp($v.mNextLabel)}
                          </button>
                          {"\n          "}
                        </>
                      ) : null}
                      {"\n          "}
                      {$v.mShowCheckTools ? (
                        <>
                          {"\n            "}
                          <button type="button" onClick={$v.onCheckTools} title="Periksa perlengkapan" style={cssToObj("flex:none;padding:.55em 1.5em;border-radius:.8em;border:.2em solid #123a6b;background:#123a6b;color:#fff;font-family:inherit;font-size:1.5em;font-weight:800;cursor:pointer;opacity:" + str($v.mCheckOpacity) + ";box-shadow:0 .35em .6em rgba(0,0,0,.25)")} className="s5pa">
                            {"PERIKSA PERLENGKAPAN"}
                          </button>
                          {"\n          "}
                        </>
                      ) : null}
                      {"\n        "}
                    </>
                  ) : null}
                  {"\n        "}
                  {$v.mIsQuiz ? (
                    <>
                      {"\n          "}
                      {$v.mFbOk ? (
                        <>
                          {"\n            "}
                          <button type="button" onClick={$v.onNextStage} title="Lanjut tahap berikutnya" style={{"flex":"none","padding":".55em 1.5em","borderRadius":".8em","border":".2em solid #b07708","background":"linear-gradient(#ffd75e,#f5a406)","color":"#3a2a06","fontFamily":"inherit","fontSize":"1.5em","fontWeight":"800","cursor":"pointer","boxShadow":"0 .35em .6em rgba(0,0,0,.25)"}} className="s5pa">
                            {interp($v.mNextLabel)}
                          </button>
                          {"\n          "}
                        </>
                      ) : null}
                      {"\n          "}
                      {$v.mShowRetry ? (
                        <>
                          {"\n            "}
                          <button type="button" onClick={$v.onRetry} title="Coba lagi" style={{"flex":"none","padding":".55em 1.4em","borderRadius":".8em","border":".2em solid #8a5b04","background":"#fff4e0","color":"#8a5b04","fontFamily":"inherit","fontSize":"1.5em","fontWeight":"800","cursor":"pointer"}} className="s5pa">
                            {"🔄 COBA LAGI"}
                          </button>
                          {"\n          "}
                        </>
                      ) : null}
                      {"\n          "}
                      {$v.mShowCheckQuiz ? (
                        <>
                          {"\n            "}
                          <button type="button" onClick={$v.onCheckQuiz} title="Periksa jawaban" style={cssToObj("flex:none;padding:.55em 1.5em;border-radius:.8em;border:.2em solid #123a6b;background:#123a6b;color:#fff;font-family:inherit;font-size:1.5em;font-weight:800;cursor:pointer;opacity:" + str($v.mCheckOpacity) + ";box-shadow:0 .35em .6em rgba(0,0,0,.25)")} className="s5pa">
                            {"PERIKSA"}
                          </button>
                          {"\n          "}
                        </>
                      ) : null}
                      {"\n        "}
                    </>
                  ) : null}
                  {"\n        "}
                  {$v.mIsRefleksi ? (
                    <>
                      {"\n          "}
                      <button type="button" onClick={$v.onFinishMission} title="Kirim refleksi dan kembali memilih profesi" style={cssToObj("flex:none;padding:.55em 1.5em;border-radius:.8em;border:.2em solid #1d6a26;background:linear-gradient(#7cd08a,#2e9c3a);color:#0e3a15;font-family:inherit;font-size:1.5em;font-weight:800;cursor:pointer;opacity:" + str($v.mReflectOpacity) + ";box-shadow:0 .35em .6em rgba(0,0,0,.25)")} className="s5pa">
                        {"TERIMA REFLEKSI ❯"}
                      </button>
                      {"\n        "}
                    </>
                  ) : null}
                  {"\n      "}
                </div>
                {"\n    "}
              </div>
              {"\n    "}
              {$v.showToast ? (
                <>
                  {"\n      "}
                  <div style={{"position":"absolute","left":"50%","bottom":"1.2%","padding":".5em 1.2em","borderRadius":".8em","background":"rgba(12,17,22,.9)","border":".14em solid rgba(255,255,255,.35)","color":"#ffd11a","fontSize":"1.3em","fontWeight":"800","whiteSpace":"nowrap","pointerEvents":"none","animation":"p5Toast 2.6s ease both"}}>
                    {interp($v.toast)}
                  </div>
                  {"\n    "}
                </>
              ) : null}
              {"\n  "}
            </div>
          </>
        ) : null}
      </div>
    </div>
    </>
  );
}
