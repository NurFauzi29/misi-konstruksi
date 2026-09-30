// GENERATED oleh scripts/convert-mockup.mjs dari mockup/1. Misi Konstruksi.dc.html — jangan diedit manual.
import { Fragment } from 'react';
import { arr, cssToObj, interp, str } from '../../dc/runtime.jsx';

export default function View({ $v }) {
  return (
    <>
    <div style={{"width":"100%","height":"100vh","display":"flex","alignItems":"center","justifyContent":"center","background":"#0c1116"}}>
      <div style={{"position":"relative","width":"min(100vw,177.78vh)","height":"min(56.25vw,100vh)","fontSize":"min(1vw,1.7778vh)","overflow":"hidden","background":"#7a5a2e","boxShadow":"0 0 4em rgba(0,0,0,.6)"}}>
        {$v.sceneHome ? (
          <>
            <div style={{"position":"absolute","inset":"0"}}>
              <img src="assets/p-bg.webp" alt="Lokasi proyek konstruksi" style={{"position":"absolute","inset":"0","width":"100%","height":"100%","objectFit":"cover","objectPosition":"center"}} />
              <div style={{"position":"absolute","left":"8.5%","top":"17.5%","width":"58%","animation":"mkTitle .7s cubic-bezier(.2,1.3,.4,1) both","transformOrigin":"left center"}}>
                {"\n  "}
                <div style={{"fontFamily":"Impact,'Arial Black','Haettenschweiler',sans-serif","fontSize":"8.3em","lineHeight":".92","letterSpacing":".01em","fontStyle":"italic","color":"#ffd11a","background":"linear-gradient(#fff3a8 6%,#ffc400 55%,#f39200 100%)","WebkitBackgroundClip":"text","backgroundClip":"text","WebkitTextFillColor":"transparent","filter":"drop-shadow(.06em .07em 0 #1a1208) drop-shadow(-.03em -.03em 0 #1a1208) drop-shadow(.03em -.03em 0 #1a1208) drop-shadow(-.03em .03em 0 #1a1208) drop-shadow(.12em .16em .05em rgba(0,0,0,.55))"}}>
                  {"MISI"}
                  <br />
                  {"KONSTRUKSI:"}
                </div>
                {"\n  "}
                <div style={{"marginTop":".1em","fontFamily":"Impact,'Arial Black','Haettenschweiler',sans-serif","fontSize":"4.75em","whiteSpace":"nowrap","lineHeight":"1","fontStyle":"italic","letterSpacing":".005em","background":"linear-gradient(#ffd98a 8%,#ff9d00 60%,#e06a00 100%)","WebkitBackgroundClip":"text","backgroundClip":"text","WebkitTextFillColor":"transparent","filter":"drop-shadow(.05em .06em 0 #1a1208) drop-shadow(-.03em -.03em 0 #1a1208) drop-shadow(.03em -.03em 0 #1a1208) drop-shadow(-.03em .03em 0 #1a1208) drop-shadow(.1em .14em .04em rgba(0,0,0,.5))"}}>
                  {"MENJELAJAH PROFESI TKP"}
                </div>
              </div>
              <div style={{"position":"absolute","right":"2.4%","top":"4.2%","display":"flex","alignItems":"center"}}>
                {"\n  "}
                <button type="button" onClick={$v.toggleMusic} title="Nyalakan / matikan musik" style={{"position":"relative","width":"4.9em","height":"4.9em","flex":"none","padding":"0","display":"flex","alignItems":"center","justifyContent":"center","border":".26em solid #fff","borderRadius":"50%","background":"linear-gradient(#4aa3f0,#1f6fc4 60%,#15539a)","cursor":"pointer","boxShadow":"0 .3em .5em rgba(0,0,0,.45),inset 0 -.3em .5em rgba(0,0,0,.22)","transition":"transform .15s ease,filter .15s ease"}} className="s1p0 s1p1">
                  {"\n    "}
                  <svg viewBox="0 0 24 24" aria-hidden="true" style={cssToObj("width:2.5em;height:2.5em;opacity:" + str($v.soundIconOpacity))}>
                    <path d="M4 9.5h3.2L12 5.4v13.2L7.2 14.5H4z" fill="#fff" />
                    <path d="M15.2 9.2a4 4 0 0 1 0 5.6" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" fill="none" opacity={$v.waveOpacity} />
                    <path d="M17.8 6.9a7.4 7.4 0 0 1 0 10.2" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" fill="none" opacity={$v.waveOpacity} />
                    <path d="M15.5 8.5l6 7M21.5 8.5l-6 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none" opacity={$v.muteOpacity} />
                  </svg>
                  {"\n  "}
                </button>
              </div>
              <div style={{"position":"absolute","left":"22%","top":"67.4%","height":"21.6%","display":"flex","gap":"1.1em","alignItems":"stretch"}}>
                {"\n\n  "}
                <button type="button" onClick={$v.onMulai} title="Mulai" style={{"flex":"0 0 auto","height":"100%","position":"relative","display":"flex","alignItems":"center","justifyContent":"center","padding":"0","border":"0","background":"transparent","cursor":"pointer","transition":"transform .16s ease,filter .16s ease"}} className="s1p2 s1p3">
                  {"\n    "}
                  <img src="assets/p-btn-mulai2.webp" alt="Mulai" style={{"height":"100%","width":"auto","display":"block","objectFit":"contain","filter":"drop-shadow(0 .45em .7em rgba(0,0,0,.45))"}} />
                  {"\n  "}
                </button>
                {"\n\n  "}
                <button type="button" onClick={$v.onInfo} title="Info Game" style={{"flex":"0 0 auto","height":"100%","position":"relative","display":"flex","alignItems":"center","justifyContent":"center","padding":"0","border":"0","background":"transparent","cursor":"pointer","transition":"transform .16s ease,filter .16s ease"}} className="s1p2 s1p3">
                  {"\n    "}
                  <img src="assets/p-btn-info2.webp" alt="Info Game" style={{"height":"100%","width":"auto","display":"block","objectFit":"contain","filter":"drop-shadow(0 .45em .7em rgba(0,0,0,.45))"}} />
                  {"\n  "}
                </button>
                {"\n\n  "}
                <button type="button" onClick={$v.onPengembang} title="Pengembang" style={{"flex":"0 0 auto","height":"100%","position":"relative","display":"flex","alignItems":"center","justifyContent":"center","padding":"0","border":"0","background":"transparent","cursor":"pointer","transition":"transform .16s ease,filter .16s ease"}} className="s1p2 s1p3">
                  {"\n    "}
                  <img src="assets/p-btn-peng2.webp" alt="Pengembang" style={{"height":"100%","width":"auto","display":"block","objectFit":"contain","filter":"drop-shadow(0 .45em .7em rgba(0,0,0,.45))"}} />
                  {"\n  "}
                </button>
                {"\n\n  "}
                <button type="button" onClick={$v.onReferensi} title="Referensi" style={{"flex":"0 0 auto","height":"100%","position":"relative","display":"flex","alignItems":"center","justifyContent":"center","padding":"0","border":"0","background":"transparent","cursor":"pointer","transition":"transform .16s ease,filter .16s ease"}} className="s1p2 s1p3">
                  {"\n    "}
                  <img src="assets/p-btn-ref2.webp" alt="Referensi" style={{"height":"100%","width":"auto","display":"block","objectFit":"contain","filter":"drop-shadow(0 .45em .7em rgba(0,0,0,.45))"}} />
                  {"\n  "}
                </button>
              </div>
              {$v.overlaySrc ? (
                <>
                  {"\n  "}
                  <div onClick={$v.closeOverlay} style={{"position":"absolute","inset":"0","display":"flex","alignItems":"center","justifyContent":"center","background":"rgba(8,12,18,.72)","backdropFilter":"blur(2px)","animation":"mkFade .18s ease both","cursor":"zoom-out"}}>
                    {"\n    "}
                    <div style={{"position":"relative","width":"92%","animation":"mkPop .32s cubic-bezier(.2,1.3,.4,1) both","cursor":"default"}}>
                      {"\n      "}
                      <div style={cssToObj("display:block;width:100%;aspect-ratio:16/9;border-radius:1.2em;box-shadow:0 1.5em 3em rgba(0,0,0,.6);background-image:" + str($v.overlayCss) + ";background-size:100% 100%;background-repeat:no-repeat")} />
                      {"\n      "}
                      <button type="button" onClick={$v.closeOverlay} title="Tutup" style={{"position":"absolute","top":"-1.1em","right":"-1.1em","width":"4.4em","height":"4.4em","padding":"0","border":".3em solid #fff","borderRadius":"50%","background":"linear-gradient(#f0524b,#c9201a)","color":"#fff","fontFamily":"'Arial Black',sans-serif","fontSize":"1.5em","lineHeight":"1","cursor":"pointer","boxShadow":"0 .35em .6em rgba(0,0,0,.5),inset 0 -.3em .5em rgba(0,0,0,.25)","transition":"transform .15s ease"}} className="s1p4 s1p1">
                        {"✕"}
                      </button>
                      {"\n    "}
                    </div>
                    {"\n  "}
                  </div>
                </>
              ) : null}
            </div>
          </>
        ) : null}
        {$v.scenePanduan ? (
          <>
            <div style={{"position":"absolute","inset":"0"}}>
              {$v.pMap ? (
                <>
                  {"\n  "}
                  <div style={{"position":"absolute","inset":"0","animation":"spFade .25s ease both"}}>
                    {"\n    "}
                    <img src={$v.mapSrc} alt="Peta misi — panduan terbuka" style={{"position":"absolute","inset":"0","width":"100%","height":"100%","objectFit":"cover"}} />
                    {"\n    "}
                    {arr($v.mapNodes).map((n, $i1) => (
                      <Fragment key={$i1}>
                        <button type="button" onClick={n?.onClick} title={n?.title} style={cssToObj("position:absolute;left:" + str(n?.left) + ";top:" + str(n?.top) + ";width:12%;height:25%;padding:0;border:0;border-radius:1.4em;background:transparent;cursor:pointer;transition:transform .16s ease")} className="s1p5 s1p6" />
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
                    <div style={{"position":"absolute","right":"2%","top":"2.4%","display":"flex","alignItems":"center","gap":".6em","zIndex":"30"}}>
                      {"\n      "}
                      <button type="button" onClick={$v.toggleMusic} title="Nyalakan / matikan musik" style={{"position":"relative","width":"3.4em","height":"3.4em","display":"flex","alignItems":"center","justifyContent":"center","padding":"0","border":".22em solid #fff","borderRadius":"50%","background":"linear-gradient(#5aa9f2,#2170cd 62%,#175aa8)","cursor":"pointer","boxShadow":"0 .28em .45em rgba(0,0,0,.4),inset 0 -.28em .45em rgba(0,0,0,.22)","transition":"transform .15s ease"}} className="s1p7 s1p8">
                        <svg viewBox="0 0 24 24" aria-hidden="true" style={{"width":"58%","height":"58%"}}>
                          <path d="M4 9.5h3.2L12 5.4v13.2L7.2 14.5H4z" fill="#fff" />
                          <path d="M15.2 9.2a4 4 0 0 1 0 5.6" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" fill="none" opacity={$v.waveOpacity} />
                          <path d="M17.8 6.9a7.4 7.4 0 0 1 0 10.2" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" fill="none" opacity={$v.waveOpacity} />
                          <path d="M15.2 8.4l6.4 7.2M21.6 8.4l-6.4 7.2" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" fill="none" opacity={$v.muteOpacity} />
                        </svg>
                      </button>
                      {"\n      "}
                      <button type="button" onClick={$v.onHome} title="Kembali ke Home" style={{"position":"relative","width":"3.4em","height":"3.4em","display":"flex","alignItems":"center","justifyContent":"center","padding":"0","border":".22em solid #fff","borderRadius":"50%","background":"linear-gradient(#ffb23e,#f57c00 62%,#cf5a00)","cursor":"pointer","boxShadow":"0 .28em .45em rgba(0,0,0,.4),inset 0 -.28em .45em rgba(0,0,0,.22)","transition":"transform .15s ease"}} className="s1p7 s1p8">
                        {"\n        "}
                        <svg viewBox="0 0 24 24" aria-hidden="true" style={{"width":"58%","height":"58%"}}>
                          <path d="M12 3.2 2.8 11h2.6v9.2h5.2v-5.6h2.8v5.6h5.2V11h2.6z" fill="#fff" />
                        </svg>
                        {"\n      "}
                      </button>
                      {"\n    "}
                    </div>
                    {"\n  "}
                  </div>
                </>
              ) : null}
              {$v.pDoc ? (
                <>
                  {"\n  "}
                  <div style={{"position":"absolute","inset":"0","animation":"spFade .25s ease both"}}>
                    {"\n    "}
                    <img src="assets/s2/p-panduan-gim.webp" alt="Panduan game: nama ikon dan fungsinya" style={{"position":"absolute","inset":"0","width":"100%","height":"100%","objectFit":"cover"}} />
                    {"\n    "}
                    <div style={{"position":"absolute","right":"2%","top":"2.4%","display":"flex","alignItems":"center","gap":".6em","zIndex":"30"}}>
                      {"\n      "}
                      <button type="button" onClick={$v.toggleMusic} title="Nyalakan / matikan musik" style={{"position":"relative","width":"3.4em","height":"3.4em","display":"flex","alignItems":"center","justifyContent":"center","padding":"0","border":".22em solid #fff","borderRadius":"50%","background":"linear-gradient(#5aa9f2,#2170cd 62%,#175aa8)","cursor":"pointer","boxShadow":"0 .28em .45em rgba(0,0,0,.4),inset 0 -.28em .45em rgba(0,0,0,.22)","transition":"transform .15s ease"}} className="s1p7 s1p8">
                        {"\n        "}
                        <svg viewBox="0 0 24 24" aria-hidden="true" style={{"width":"58%","height":"58%"}}>
                          <path d="M4 9.5h3.2L12 5.4v13.2L7.2 14.5H4z" fill="#fff" />
                          <path d="M15.2 9.2a4 4 0 0 1 0 5.6" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" fill="none" opacity={$v.waveOpacity} />
                          <path d="M17.8 6.9a7.4 7.4 0 0 1 0 10.2" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" fill="none" opacity={$v.waveOpacity} />
                          <path d="M15.2 8.4l6.4 7.2M21.6 8.4l-6.4 7.2" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" fill="none" opacity={$v.muteOpacity} />
                        </svg>
                        {"\n      "}
                      </button>
                      {"\n      "}
                      <button type="button" onClick={$v.pBack} title="Kembali ke peta" style={{"position":"relative","width":"3.4em","height":"3.4em","display":"flex","alignItems":"center","justifyContent":"center","padding":"0","border":".22em solid #fff","borderRadius":"50%","background":"linear-gradient(#7cd08a,#2e9c3a 62%,#1d6a26)","cursor":"pointer","boxShadow":"0 .28em .45em rgba(0,0,0,.4),inset 0 -.28em .45em rgba(0,0,0,.22)","transition":"transform .15s ease"}} className="s1p7 s1p8">
                        {"\n        "}
                        <svg viewBox="0 0 24 24" aria-hidden="true" style={{"width":"58%","height":"58%"}}>
                          <path d="M3.4 6.2 9 4.2v13.6l-5.6 2z" fill="#fff" />
                          <path d="M9 4.2l6 2v13.6l-6-2z" fill="#e8f5ea" />
                          <path d="M15 6.2l5.6-2v13.6l-5.6 2z" fill="#fff" />
                        </svg>
                        {"\n      "}
                      </button>
                      {"\n      "}
                      <button type="button" onClick={$v.onHome} title="Kembali ke Home" style={{"position":"relative","width":"3.4em","height":"3.4em","display":"flex","alignItems":"center","justifyContent":"center","padding":"0","border":".22em solid #fff","borderRadius":"50%","background":"linear-gradient(#ffb23e,#f57c00 62%,#cf5a00)","cursor":"pointer","boxShadow":"0 .28em .45em rgba(0,0,0,.4),inset 0 -.28em .45em rgba(0,0,0,.22)","transition":"transform .15s ease"}} className="s1p7 s1p8">
                        {"\n        "}
                        <svg viewBox="0 0 24 24" aria-hidden="true" style={{"width":"58%","height":"58%"}}>
                          <path d="M12 3.2 2.8 11h2.6v9.2h5.2v-5.6h2.8v5.6h5.2V11h2.6z" fill="#fff" />
                        </svg>
                        {"\n      "}
                      </button>
                      {"\n    "}
                    </div>
                    {"\n    "}
                    <button type="button" onClick={$v.pNext} title="Selanjutnya — mulai misi profesi" style={{"position":"absolute","left":"73.2%","top":"87.6%","width":"23%","height":"9.4%","padding":"0","border":"0","borderRadius":"1.2em","background":"transparent","cursor":"pointer","transition":"transform .16s ease"}} className="s1p9 s1p6" />
                    {"\n  "}
                  </div>
                </>
              ) : null}
            </div>
          </>
        ) : null}
        {$v.toast ? (
          <>
            {"\n  "}
            <div style={{"position":"absolute","left":"50%","bottom":"4%","transform":"translateX(-50%)","padding":".7em 1.6em","borderRadius":"2em","background":"rgba(12,17,22,.88)","border":".15em solid rgba(255,255,255,.35)","color":"#fff","fontFamily":"'Trebuchet MS',sans-serif","fontSize":"1.9em","whiteSpace":"nowrap","animation":"mkToast 2.2s ease forwards"}}>
              {interp($v.toast)}
            </div>
          </>
        ) : null}
      </div>
    </div>
    </>
  );
}
