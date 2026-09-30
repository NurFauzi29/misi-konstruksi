// GENERATED oleh scripts/convert-mockup.mjs dari mockup/2. Scene Eksplorasi.dc.html — jangan diedit manual.
import { Fragment } from 'react';
import { arr, cssToObj, interp, str } from '../../dc/runtime.jsx';

export default function View({ $v }) {
  return (
    <>
    <div style={{"width":"100%","height":"calc(var(--vh, 1vh) * 100)","display":"flex","alignItems":"center","justifyContent":"center","background":"#0c1116"}}>
      <div style={{"position":"relative","width":"min(calc(var(--vw, 1vw) * 100),calc(var(--vh, 1vh) * 177.78))","height":"min(calc(var(--vw, 1vw) * 56.25),calc(var(--vh, 1vh) * 100))","fontSize":"min(calc(var(--vw, 1vw) * 1),calc(var(--vh, 1vh) * 1.7778))","overflow":"hidden","background":"#7a5a2e","boxShadow":"0 0 4em rgba(0,0,0,.6)"}}>
        {$v.isMap ? (
          <>
            {"\n  "}
            <div style={{"position":"absolute","inset":"0","animation":"s2Fade .25s ease both"}}>
              {"\n    "}
              <img src={$v.mapSrc} alt="Peta misi konstruksi" style={{"position":"absolute","inset":"0","width":"100%","height":"100%","objectFit":"cover"}} />
              {"\n    "}
              {arr($v.mapNodes).map((n, $i1) => (
                <Fragment key={$i1}>
                  <button type="button" onClick={n?.onClick} title={n?.title} style={cssToObj("position:absolute;left:" + str(n?.left) + ";top:" + str(n?.top) + ";width:12%;height:25%;padding:0;border:0;border-radius:1.4em;background:transparent;cursor:pointer;transition:transform .16s ease")} className="s2p0 s2p1" />
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
              <div style={{"position":"absolute","right":"2%","top":"2.6%","display":"flex","alignItems":"center","gap":".6em","zIndex":"30"}}>
                {"\n      "}
                <button type="button" onClick={$v.toggleMusic} title="Nyalakan / matikan musik" style={{"position":"relative","width":"3.4em","height":"3.4em","display":"flex","alignItems":"center","justifyContent":"center","padding":"0","border":".22em solid #fff","borderRadius":"50%","background":"linear-gradient(#5aa9f2,#2170cd 62%,#175aa8)","cursor":"pointer","boxShadow":"0 .28em .45em rgba(0,0,0,.4),inset 0 -.28em .45em rgba(0,0,0,.22)","transition":"transform .15s ease"}} className="s2p2 s2p3">
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
                <button type="button" onClick={$v.onHome} title="Kembali ke Home" style={{"position":"relative","width":"3.4em","height":"3.4em","display":"flex","alignItems":"center","justifyContent":"center","padding":"0","border":".22em solid #fff","borderRadius":"50%","background":"linear-gradient(#ffb23e,#f57c00 62%,#cf5a00)","cursor":"pointer","boxShadow":"0 .28em .45em rgba(0,0,0,.4),inset 0 -.28em .45em rgba(0,0,0,.22)","transition":"transform .15s ease"}} className="s2p2 s2p3">
                  {"\n        "}
                  <svg viewBox="0 0 24 24" aria-hidden="true" style={{"width":"58%","height":"58%"}}>
                    <path d="M12 3.2 2.8 11h2.6v9.2h5.2v-5.6h2.8v5.6h5.2V11h2.6z" fill="#fff" />
                  </svg>
                  {"\n      "}
                </button>
                {"\n    "}
              </div>
              {"\n    "}
              <div style={{"position":"absolute","left":"50%","bottom":"3.2%","transform":"translateX(-50%)","padding":".45em 1.3em","borderRadius":"2em","background":"rgba(12,17,22,.95)","border":".12em solid rgba(255,255,255,.35)","color":"#ffd11a","zIndex":"20","fontFamily":"'Trebuchet MS',sans-serif","fontSize":"1.7em","whiteSpace":"nowrap","pointerEvents":"none"}}>
                {interp($v.progressLabel)}
              </div>
              {"\n  "}
            </div>
          </>
        ) : null}
        {$v.isShelf ? (
          <>
            {"\n  "}
            <div style={{"position":"absolute","inset":"0","animation":"s2Fade .25s ease both"}}>
              {"\n    "}
              <div role="img" aria-label="Rak profesi konstruksi" style={cssToObj("position:absolute;inset:0;background-image:" + str($v.shelfBgCss) + ";background-size:cover;background-position:center")} />
              {"\n\n    "}
              {arr($v.cards).map((card, $i1) => (
                <Fragment key={$i1}>
                  {"\n      "}
                  <button type="button" onClick={card?.open} title={card?.title} style={cssToObj("position:absolute;left:" + str(card?.left) + ";top:" + str(card?.top) + ";width:9.6%;height:21.3%;padding:0;border:.25em solid rgba(255,255,255,0);border-radius:1.1em;background:transparent;cursor:pointer;transition:transform .16s ease,border-color .16s ease,box-shadow .16s ease")} className="s2p4 s2p5">
                    {"\n        "}
                    <div role="img" aria-label={card?.title} style={cssToObj("position:absolute;inset:0;background-image:" + str(card?.bg) + ";background-size:contain;background-position:center;background-repeat:no-repeat;filter:drop-shadow(0 .3em .45em rgba(0,0,0,.45))")} />
                    {"\n        "}
                    <span style={cssToObj("position:absolute;right:.5em;bottom:.5em;width:2.6em;height:2.6em;display:none;display:" + str(card?.checkDisplay) + ";align-items:center;justify-content:center;border-radius:50%;border:.22em solid #fff;background:linear-gradient(#5fc21a,#2f8a06);box-shadow:0 .25em .4em rgba(0,0,0,.45);animation:s2Check .35s cubic-bezier(.2,1.4,.4,1) both")}>
                      {"\n          "}
                      <svg viewBox="0 0 24 24" style={{"width":"1.7em","height":"1.7em"}}>
                        <path d="M5 12.6l4.6 4.6L19 7.5" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                      {"\n        "}
                    </span>
                    {"\n      "}
                  </button>
                  {"\n    "}
                </Fragment>
              ))}
              {"\n\n    "}
              {$v.allDone ? (
                <>
                  {"\n      "}
                  <button type="button" onClick={$v.onNext} title="Lanjut ke misi berikutnya" style={{"position":"absolute","right":"2.2%","bottom":"3.4%","display":"flex","alignItems":"center","gap":".5em","padding":".5em 1.4em","border":".22em solid #b07708","borderRadius":"1em","background":"linear-gradient(#ffd75e,#f5a406)","color":"#3a2a06","fontFamily":"'Trebuchet MS',sans-serif","fontSize":"2em","fontWeight":"800","letterSpacing":".05em","cursor":"pointer","boxShadow":"0 .4em .7em rgba(0,0,0,.4)","animation":"s2Pop .4s cubic-bezier(.2,1.3,.4,1) both","transition":"transform .16s ease"}} className="s2p6 s2p1">
                    {"SELANJUTNYA ❯"}
                  </button>
                  {"\n    "}
                </>
              ) : null}
              {"\n\n    "}
              <div style={{"position":"absolute","right":"2%","top":"2.6%","display":"flex","alignItems":"center","gap":".6em","zIndex":"30"}}>
                {"\n      "}
                <button type="button" onClick={$v.toggleMusic} title="Nyalakan / matikan musik" style={{"position":"relative","width":"3.4em","height":"3.4em","display":"flex","alignItems":"center","justifyContent":"center","padding":"0","border":".22em solid #fff","borderRadius":"50%","background":"linear-gradient(#5aa9f2,#2170cd 62%,#175aa8)","cursor":"pointer","boxShadow":"0 .28em .45em rgba(0,0,0,.4),inset 0 -.28em .45em rgba(0,0,0,.22)","transition":"transform .15s ease"}} className="s2p2 s2p3">
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
                <button type="button" onClick={$v.onMaps} title="Kembali ke peta" style={{"position":"relative","width":"3.4em","height":"3.4em","display":"flex","alignItems":"center","justifyContent":"center","padding":"0","border":".22em solid #fff","borderRadius":"50%","background":"linear-gradient(#7cd08a,#2e9c3a 62%,#1d6a26)","cursor":"pointer","boxShadow":"0 .28em .45em rgba(0,0,0,.4),inset 0 -.28em .45em rgba(0,0,0,.22)","transition":"transform .15s ease"}} className="s2p2 s2p3">
                  {"\n        "}
                  <svg viewBox="0 0 24 24" aria-hidden="true" style={{"width":"58%","height":"58%"}}>
                    <path d="M3.4 6.2 9 4.2v13.6l-5.6 2z" fill="#fff" />
                    <path d="M9 4.2l6 2v13.6l-6-2z" fill="#e8f5ea" />
                    <path d="M15 6.2l5.6-2v13.6l-5.6 2z" fill="#fff" />
                  </svg>
                  {"\n      "}
                </button>
                {"\n      "}
                <button type="button" onClick={$v.onHome} title="Kembali ke Home" style={{"position":"relative","width":"3.4em","height":"3.4em","display":"flex","alignItems":"center","justifyContent":"center","padding":"0","border":".22em solid #fff","borderRadius":"50%","background":"linear-gradient(#ffb23e,#f57c00 62%,#cf5a00)","cursor":"pointer","boxShadow":"0 .28em .45em rgba(0,0,0,.4),inset 0 -.28em .45em rgba(0,0,0,.22)","transition":"transform .15s ease"}} className="s2p2 s2p3">
                  {"\n        "}
                  <svg viewBox="0 0 24 24" aria-hidden="true" style={{"width":"58%","height":"58%"}}>
                    <path d="M12 3.2 2.8 11h2.6v9.2h5.2v-5.6h2.8v5.6h5.2V11h2.6z" fill="#fff" />
                  </svg>
                  {"\n      "}
                </button>
                {"\n    "}
              </div>
              {"\n    "}
              <div style={{"position":"absolute","left":"2%","bottom":"3.4%","padding":".5em 1.2em","borderRadius":"2em","background":"rgba(12,17,22,.92)","border":".12em solid rgba(255,255,255,.3)","color":"#fff","fontFamily":"'Trebuchet MS',sans-serif","fontSize":"1.7em","pointerEvents":"none","zIndex":"20"}}>
                {interp($v.progressLabel)}
              </div>
              {"\n  "}
            </div>
          </>
        ) : null}
        {$v.detailSrc ? (
          <>
            {"\n  "}
            <div style={{"position":"absolute","inset":"0","display":"flex","alignItems":"center","justifyContent":"center","background":"#0a1220","animation":"s2Fade .22s ease both"}}>
              {"\n    "}
              <div style={{"position":"relative","height":"100%","aspectRatio":"1536/1024","maxWidth":"100%"}}>
                {"\n      "}
                <div role="img" aria-label="Penjelasan profesi" style={cssToObj("display:block;width:100%;height:100%;background-image:" + str($v.detailCss) + ";background-size:contain;background-position:center;background-repeat:no-repeat")} />
                {"\n      "}
                <button type="button" onClick={$v.onBackToShelf} title="Kembali ke rak profesi" style={{"position":"absolute","left":"1.7%","bottom":"2.8%","width":"14%","height":"7.4%","padding":"0","border":"0","borderRadius":".8em","background":"transparent","cursor":"pointer","transition":"transform .16s ease"}} className="s2p0 s2p1" />
                {"\n      "}
                <div style={{"position":"absolute","right":"2%","top":"2.6%","display":"flex","alignItems":"center","gap":".55em","zIndex":"30"}}>
                  {"\n        "}
                  <button type="button" onClick={$v.toggleMusic} title="Nyalakan / matikan musik" style={{"position":"relative","width":"3.2em","height":"3.2em","display":"flex","alignItems":"center","justifyContent":"center","padding":"0","border":".22em solid #fff","borderRadius":"50%","background":"linear-gradient(#5aa9f2,#2170cd 62%,#175aa8)","cursor":"pointer","boxShadow":"0 .28em .45em rgba(0,0,0,.4),inset 0 -.28em .45em rgba(0,0,0,.22)","transition":"transform .15s ease"}} className="s2p2 s2p3">
                    {"\n          "}
                    <svg viewBox="0 0 24 24" aria-hidden="true" style={{"width":"58%","height":"58%"}}>
                      <path d="M4 9.5h3.2L12 5.4v13.2L7.2 14.5H4z" fill="#fff" />
                      <path d="M15.2 9.2a4 4 0 0 1 0 5.6" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" fill="none" opacity={$v.waveOpacity} />
                      <path d="M17.8 6.9a7.4 7.4 0 0 1 0 10.2" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" fill="none" opacity={$v.waveOpacity} />
                      <path d="M15.2 8.4l6.4 7.2M21.6 8.4l-6.4 7.2" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" fill="none" opacity={$v.muteOpacity} />
                    </svg>
                    {"\n        "}
                  </button>
                  {"\n        "}
                  <button type="button" onClick={$v.onMaps} title="Kembali ke peta" style={{"position":"relative","width":"3.2em","height":"3.2em","display":"flex","alignItems":"center","justifyContent":"center","padding":"0","border":".22em solid #fff","borderRadius":"50%","background":"linear-gradient(#7cd08a,#2e9c3a 62%,#1d6a26)","cursor":"pointer","boxShadow":"0 .28em .45em rgba(0,0,0,.4),inset 0 -.28em .45em rgba(0,0,0,.22)","transition":"transform .15s ease"}} className="s2p2 s2p3">
                    {"\n          "}
                    <svg viewBox="0 0 24 24" aria-hidden="true" style={{"width":"58%","height":"58%"}}>
                      <path d="M3.4 6.2 9 4.2v13.6l-5.6 2z" fill="#fff" />
                      <path d="M9 4.2l6 2v13.6l-6-2z" fill="#e8f5ea" />
                      <path d="M15 6.2l5.6-2v13.6l-5.6 2z" fill="#fff" />
                    </svg>
                    {"\n        "}
                  </button>
                  {"\n        "}
                  <button type="button" onClick={$v.onHome} title="Kembali ke Home" style={{"position":"relative","width":"3.2em","height":"3.2em","display":"flex","alignItems":"center","justifyContent":"center","padding":"0","border":".22em solid #fff","borderRadius":"50%","background":"linear-gradient(#ffb23e,#f57c00 62%,#cf5a00)","cursor":"pointer","boxShadow":"0 .28em .45em rgba(0,0,0,.4),inset 0 -.28em .45em rgba(0,0,0,.22)","transition":"transform .15s ease"}} className="s2p2 s2p3">
                    {"\n          "}
                    <svg viewBox="0 0 24 24" aria-hidden="true" style={{"width":"58%","height":"58%"}}>
                      <path d="M12 3.2 2.8 11h2.6v9.2h5.2v-5.6h2.8v5.6h5.2V11h2.6z" fill="#fff" />
                    </svg>
                    {"\n        "}
                  </button>
                  {"\n      "}
                </div>
                {"\n    "}
              </div>
              {"\n  "}
            </div>
          </>
        ) : null}
        <button type="button" onClick={$v.toggleMusic} title="Nyalakan / matikan musik" style={cssToObj("position:absolute;left:" + str($v.speakerLeft) + ";top:" + str($v.speakerTop) + ";width:" + str($v.speakerWidth) + ";height:" + str($v.speakerHeight) + ";display:none;display:" + str($v.speakerDisplay) + ";align-items:center;justify-content:center;padding:0;border:0;border-radius:.9em;background:transparent;cursor:pointer;transition:transform .15s ease")} className="s2p2 s2p3">
          {"\n  "}
          <span style={{"position":"absolute","left":"50%","top":"50%","width":"122%","aspectRatio":"1","transform":"translate(-50%,-50%)","display":"flex","alignItems":"center","justifyContent":"center","borderRadius":"50%","border":".22em solid #fff","background":"linear-gradient(#5aa9f2,#2170cd 62%,#175aa8)","boxShadow":"0 .28em .45em rgba(0,0,0,.4),inset 0 -.28em .45em rgba(0,0,0,.22)"}}>
            {"\n          "}
            <svg viewBox="0 0 24 24" aria-hidden="true" style={{"width":"58%","height":"58%"}}>
              <path d="M4 9.5h3.2L12 5.4v13.2L7.2 14.5H4z" fill="#fff" />
              <path d="M15.2 9.2a4 4 0 0 1 0 5.6" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" fill="none" opacity={$v.waveOpacity} />
              <path d="M17.8 6.9a7.4 7.4 0 0 1 0 10.2" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" fill="none" opacity={$v.waveOpacity} />
              <path d="M15.2 8.4l6.4 7.2M21.6 8.4l-6.4 7.2" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" fill="none" opacity={$v.muteOpacity} />
            </svg>
            {"\n        "}
          </span>
        </button>
        {$v.toast ? (
          <>
            {"\n  "}
            <div style={{"position":"absolute","left":"50%","bottom":"4%","transform":"translateX(-50%)","padding":".7em 1.6em","borderRadius":"2em","background":"rgba(12,17,22,.88)","border":".15em solid rgba(255,255,255,.35)","color":"#fff","fontFamily":"'Trebuchet MS',sans-serif","fontSize":"1.9em","whiteSpace":"nowrap","animation":"s2Toast 2.2s ease forwards"}}>
              {interp($v.toast)}
            </div>
          </>
        ) : null}
      </div>
    </div>
    </>
  );
}
