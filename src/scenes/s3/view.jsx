// GENERATED oleh scripts/convert-mockup.mjs dari mockup/3. Tebak Profesi.dc.html — jangan diedit manual.
import { Fragment } from 'react';
import { arr, cssToObj, interp, str } from '../../dc/runtime.jsx';

export default function View({ $v }) {
  return (
    <>
    <div style={{"width":"100%","height":"100vh","display":"flex","alignItems":"center","justifyContent":"center","background":"#0c1116"}}>
      <div style={{"position":"relative","width":"min(100vw,177.78vh)","height":"min(56.25vw,100vh)","fontSize":"min(1vw,1.7778vh)","overflow":"hidden","background":"#f7f1e4","boxShadow":"0 0 4em rgba(0,0,0,.6)","touchAction":"none","userSelect":"none"}} onPointerMove={$v.onMove} onPointerUp={$v.onUp} onPointerCancel={$v.onUp}>
        {$v.isMap ? (
          <>
            {"\n  "}
            <div style={{"position":"absolute","inset":"0","animation":"tpFade .25s ease both"}}>
              {"\n    "}
              <img src={$v.mapSrc} alt="Peta misi — Tebak Profesi terbuka" style={{"position":"absolute","inset":"0","width":"100%","height":"100%","objectFit":"cover"}} />
              {"\n    "}
              {arr($v.mapNodes).map((n, $i1) => (
                <Fragment key={$i1}>
                  <button type="button" onClick={n?.onClick} title={n?.title} style={cssToObj("position:absolute;left:" + str(n?.left) + ";top:" + str(n?.top) + ";width:12%;height:25%;padding:0;border:0;border-radius:1.4em;background:transparent;cursor:pointer;transition:transform .16s ease")} className="s3p0 s3p1" />
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
              <div style={{"position":"absolute","right":"1.6%","top":"2.1%","display":"flex","gap":".7em"}}>
                {"\n      "}
                <button type="button" onClick={$v.toggleMusic} title="Nyalakan / matikan musik" style={{"width":"4.4em","height":"4.4em","flex":"none","display":"flex","alignItems":"center","justifyContent":"center","padding":"0","borderRadius":"50%","border":".22em solid #fff","background":"linear-gradient(#5aa9f2,#2170cd 62%,#175aa8)","boxShadow":"0 .28em .45em rgba(0,0,0,.4),inset 0 -.28em .45em rgba(0,0,0,.22)","cursor":"pointer","transition":"transform .15s ease"}} className="s3p2 s3p3">
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
                <button type="button" onClick={$v.onHome} title="Kembali ke Home" style={{"width":"4.4em","height":"4.4em","flex":"none","display":"flex","alignItems":"center","justifyContent":"center","padding":"0","borderRadius":"50%","border":".22em solid #fff","background":"linear-gradient(#ffb23e,#f57c00 62%,#cf5a00)","boxShadow":"0 .28em .45em rgba(0,0,0,.4),inset 0 -.28em .45em rgba(0,0,0,.22)","cursor":"pointer","transition":"transform .15s ease"}} className="s3p2 s3p3">
                  {"\n        "}
                  <svg viewBox="0 0 24 24" aria-hidden="true" style={{"width":"58%","height":"58%"}}>
                    <path d="M12 3.2 2.8 11h2.5v9.4h5.1v-5.6h3.2v5.6h5.1V11h2.5z" fill="#fff" />
                  </svg>
                  {"\n      "}
                </button>
                {"\n    "}
              </div>
              {"\n  "}
            </div>
          </>
        ) : null}
        {$v.isGame ? (
          <>
            <div style={{"position":"absolute","inset":"0","display":"flex","gap":"1.1em","padding":"1.2em","boxSizing":"border-box","background":"#f7f1e4","animation":"tpFade .25s ease both","fontFamily":"'Trebuchet MS',sans-serif"}}>
              {"\n\n  "}
              <div style={{"flex":"1 1 0","display":"flex","flexDirection":"column","gap":".55em","minWidth":"0"}}>
                {"\n    "}
                <div style={{"display":"flex","alignItems":"center","gap":"1em","padding":".7em 1.2em","borderRadius":".9em","background":"linear-gradient(#f0dcae,#e3c489)","border":".28em solid #8a5a24","boxShadow":"0 .3em .5em rgba(0,0,0,.22),inset 0 .2em 0 rgba(255,255,255,.45)"}}>
                  {"\n      "}
                  <div style={{"flex":"1 1 auto","minWidth":"0"}}>
                    {"\n        "}
                    <div style={{"fontSize":"3.1em","fontWeight":"800","letterSpacing":".02em","color":"#123a6b","lineHeight":"1"}}>
                      {"TEBAK PROFESI"}
                    </div>
                    {"\n        "}
                    <div style={{"marginTop":".35em","display":"inline-block","padding":".28em .7em","borderRadius":".4em","background":"#f4b81c","border":".14em solid #b07708","color":"#22303f","fontSize":"1.12em","fontWeight":"700","letterSpacing":".01em","whiteSpace":"nowrap"}}>
                      {"COCOKKAN JOBDESK DENGAN PROFESI YANG TEPAT!"}
                    </div>
                    {"\n      "}
                  </div>
                  {"\n    "}
                </div>
                {"\n\n    "}
                <div style={{"flex":"1 1 0","display":"flex","flexDirection":"column","gap":".42em","minHeight":"0"}}>
                  {"\n      "}
                  {arr($v.rows).map((row, $i1) => (
                    <Fragment key={$i1}>
                      {"\n        "}
                      <div style={{"flex":"1 1 0","display":"flex","alignItems":"stretch","gap":".7em","padding":".35em 1em","borderRadius":".7em","background":"#fff","border":".14em solid rgba(18,58,107,.14)","boxShadow":"0 .16em .3em rgba(0,0,0,.08)","minHeight":"0"}}>
                        {"\n          "}
                        <div style={{"flex":"1 1 auto","display":"flex","flexDirection":"column","justifyContent":"center","gap":".15em","minWidth":"0","color":"#2b3a4a","fontSize":"1.28em","lineHeight":"1.22","textWrap":"pretty"}}>
                          {"\n            "}
                          <div>
                            {"• "}
                            {interp(row?.l1)}
                          </div>
                          {"\n            "}
                          <div>
                            {"• "}
                            {interp(row?.l2)}
                          </div>
                          {"\n          "}
                        </div>
                        {"\n          "}
                        <button type="button" onClick={row?.onZone} ref={row?.zoneRef} title="Kotak jawaban" style={cssToObj("flex:none;position:relative;width:12.2em;display:flex;align-items:center;justify-content:center;gap:.4em;padding:.15em .3em;overflow:hidden;box-sizing:border-box;border-radius:.6em;cursor:pointer;transition:border-color .15s ease,background .15s ease;border:.18em dashed " + str(row?.zoneBorder) + ";background:" + str(row?.zoneBg))}>
                          {"\n            "}
                          {row?.hasCard ? (
                            <>
                              {"\n              "}
                              <div style={{"display":"flex","alignItems":"center","gap":".4em","minWidth":"0","animation":"tpDrop .2s ease both"}}>
                                {"\n                "}
                                <div style={cssToObj("flex:none;width:2.3em;height:2.3em;border-radius:.3em;border:.1em solid #fff;box-shadow:0 .12em .25em rgba(0,0,0,.25);background-size:cover;background-position:center;background-image:" + str(row?.cardBg))} />
                                {"\n                "}
                                <div style={{"display":"flex","flexDirection":"column","alignItems":"flex-start","minWidth":"0"}}>
                                  {"\n                  "}
                                  <div style={cssToObj("font-size:1em;font-weight:800;letter-spacing:.01em;white-space:nowrap;line-height:1.15;color:" + str(row?.cardColor))}>
                                    {interp(row?.cardName)}
                                  </div>
                                  {"\n                  "}
                                  {row?.statusShow ? (
                                    <>
                                      {"\n                    "}
                                      <div style={cssToObj("font-size:.78em;font-weight:800;letter-spacing:.08em;white-space:nowrap;line-height:1.15;color:" + str(row?.statusColor))}>
                                        {interp(row?.statusText)}
                                      </div>
                                      {"\n                  "}
                                    </>
                                  ) : null}
                                  {"\n                "}
                                </div>
                                {"\n              "}
                              </div>
                              {"\n            "}
                            </>
                          ) : null}
                          {"\n          "}
                        </button>
                        {"\n        "}
                      </div>
                      {"\n      "}
                    </Fragment>
                  ))}
                  {"\n    "}
                </div>
                {"\n  "}
              </div>
              {"\n\n  "}
              <div style={{"flex":"0 0 42%","display":"flex","flexDirection":"column","gap":".7em","minWidth":"0"}}>
                {"\n    "}
                <div style={{"padding":".7em 1.2em","borderRadius":".9em","background":"linear-gradient(#f0dcae,#e3c489)","border":".28em solid #8a5a24","boxShadow":"0 .3em .5em rgba(0,0,0,.22),inset 0 .2em 0 rgba(255,255,255,.45)","textAlign":"center"}}>
                  {"\n      "}
                  <div style={{"fontSize":"2.7em","fontWeight":"800","color":"#123a6b","lineHeight":"1"}}>
                    {"PILIH PROFESI"}
                  </div>
                  {"\n      "}
                  <div style={{"marginTop":".3em","display":"inline-block","padding":".26em .7em","borderRadius":".4em","background":"#f4b81c","border":".14em solid #b07708","color":"#22303f","fontSize":"1.2em","fontWeight":"700"}}>
                    {"Seret ikon profesi, lalu letakkan di kotak jobdesk yang sesuai"}
                  </div>
                  {"\n    "}
                </div>
                {"\n\n    "}
                <div style={{"flex":"1 1 auto","display":"grid","gridTemplateColumns":"repeat(4,1fr)","gridTemplateRows":"repeat(2,auto)","gap":".7em","minHeight":"0","alignContent":"center","justifyItems":"center"}}>
                  {"\n      "}
                  {arr($v.cards).map((card, $i1) => (
                    <Fragment key={$i1}>
                      {"\n        "}
                      <div onPointerDown={card?.onDown} onClick={card?.onClick} title={card?.name} style={cssToObj("position:relative;width:84%;aspect-ratio:368/487;display:flex;flex-direction:column;border-radius:1em;overflow:hidden;background:transparent;border:.2em solid " + str(card?.border) + ";filter:drop-shadow(0 .2em .3em rgba(0,0,0,.2));cursor:grab;transition:transform .14s ease,box-shadow .14s ease;opacity:" + str(card?.opacity) + ";visibility:" + str(card?.vis))} className="s3p4 s3p5">
                        {"\n          "}
                        <div style={cssToObj("width:100%;flex:1 1 auto;min-height:0;background-size:cover;background-position:center;pointer-events:none;background-image:" + str(card?.bg))} />
                        {"\n        "}
                      </div>
                      {"\n      "}
                    </Fragment>
                  ))}
                  {"\n    "}
                </div>
                {"\n\n    "}
                <div style={{"flex":"none","display":"flex","alignItems":"center","gap":".8em"}}>
                  {"\n      "}
                  <button type="button" onClick={$v.onReset} style={{"flex":"none","padding":".75em 1.4em","borderRadius":".7em","border":".18em solid #b07708","background":"linear-gradient(#fff6e2,#f0dcae)","color":"#8a5a24","fontFamily":"inherit","fontSize":"1.35em","fontWeight":"800","letterSpacing":".04em","cursor":"pointer","boxShadow":"0 .25em .4em rgba(0,0,0,.2)","transition":"transform .14s ease"}} className="s3p6 s3p7">
                    {"RESET"}
                  </button>
                  {"\n      "}
                  <button type="button" onClick={$v.onCheck} style={cssToObj("flex:1 1 auto;padding:.8em 1.4em;border-radius:.8em;border:.2em solid #7d8a99;background:linear-gradient(#f2f4f7,#c3ccd6 62%,#aab6c2);color:#123a6b;font-family:inherit;font-size:1.7em;font-weight:800;letter-spacing:.05em;cursor:pointer;box-shadow:0 .3em .5em rgba(0,0,0,.28),inset 0 .18em 0 rgba(255,255,255,.5);transition:transform .14s ease,filter .14s ease;filter:" + str($v.checkFilter))} className="s3p6 s3p7">
                    {"PERIKSA JAWABAN"}
                  </button>
                  {"\n    "}
                </div>
                {"\n  "}
              </div>
            </div>
          </>
        ) : null}
        {$v.dragImg ? (
          <>
            {"\n  "}
            <div style={cssToObj("position:fixed;z-index:60;width:7em;height:7em;background-size:cover;background-position:center;border-radius:.6em;border:.2em solid #fff;box-shadow:0 .6em 1em rgba(0,0,0,.45);pointer-events:none;transform:translate(-50%,-50%) scale(1.06);background-image:" + str($v.dragBg) + ";left:" + str($v.dragX) + ";top:" + str($v.dragY))} />
          </>
        ) : null}
        {$v.result ? (
          <>
            {"\n  "}
            <div style={{"position":"absolute","inset":"0","zIndex":"50","display":"flex","alignItems":"center","justifyContent":"center","background":"rgba(10,18,32,.72)","animation":"tpFade .2s ease both","fontFamily":"'Trebuchet MS',sans-serif"}}>
              {"\n    "}
              <div style={{"width":"38em","padding":"2em 2.2em","borderRadius":"1.2em","background":"linear-gradient(#fffdf6,#f4e7cc)","border":".35em solid #8a5a24","boxShadow":"0 1em 2em rgba(0,0,0,.45)","textAlign":"center","animation":"tpPop .32s cubic-bezier(.2,1.3,.4,1) both"}}>
                {"\n      "}
                <div style={{"fontSize":"2.5em","fontWeight":"800","color":"#123a6b","lineHeight":"1.1"}}>
                  {"HASIL PERMAINAN"}
                </div>
                {"\n      "}
                <div style={{"marginTop":"1.1em","display":"flex","gap":".8em","justifyContent":"center"}}>
                  {"\n        "}
                  <div style={{"flex":"1 1 0","padding":".7em .4em","borderRadius":".7em","background":"#e8f7e0","border":".16em solid #4f9b1b"}}>
                    {"\n          "}
                    <div style={{"fontSize":"1.1em","fontWeight":"700","color":"#3d7a12","letterSpacing":".06em"}}>
                      {"BENAR"}
                    </div>
                    {"\n          "}
                    <div style={{"fontSize":"2.6em","fontWeight":"800","color":"#3d7a12","lineHeight":"1.1"}}>
                      {interp($v.result?.right)}
                    </div>
                    {"\n        "}
                  </div>
                  {"\n        "}
                  <div style={{"flex":"1 1 0","padding":".7em .4em","borderRadius":".7em","background":"#fdeaea","border":".16em solid #c1272d"}}>
                    {"\n          "}
                    <div style={{"fontSize":"1.1em","fontWeight":"700","color":"#c1272d","letterSpacing":".06em"}}>
                      {"SALAH"}
                    </div>
                    {"\n          "}
                    <div style={{"fontSize":"2.6em","fontWeight":"800","color":"#c1272d","lineHeight":"1.1"}}>
                      {interp($v.result?.wrong)}
                    </div>
                    {"\n        "}
                  </div>
                  {"\n        "}
                  <div style={{"flex":"1 1 0","padding":".7em .4em","borderRadius":".7em","background":"#123a6b","border":".16em solid #0b2444"}}>
                    {"\n          "}
                    <div style={{"fontSize":"1.1em","fontWeight":"700","color":"#ffd11a","letterSpacing":".06em"}}>
                      {"SKOR"}
                    </div>
                    {"\n          "}
                    <div style={{"fontSize":"2.6em","fontWeight":"800","color":"#ffd11a","lineHeight":"1.1"}}>
                      {interp($v.result?.score)}
                    </div>
                    {"\n        "}
                  </div>
                  {"\n      "}
                </div>
                {"\n      "}
                <div style={{"marginTop":"1em","fontSize":"1.35em","color":"#3a4a5a"}}>
                  {interp($v.result?.note)}
                </div>
                {"\n      "}
                <div style={{"marginTop":"1.4em","display":"flex","gap":".8em","justifyContent":"center"}}>
                  {"\n        "}
                  <button type="button" onClick={$v.onRetry} style={{"padding":".7em 1.4em","borderRadius":".7em","border":".18em solid #7c5a2a","background":"linear-gradient(#fff6e2,#e9d6b0)","color":"#6b4a1c","fontFamily":"inherit","fontSize":"1.4em","fontWeight":"800","letterSpacing":".04em","cursor":"pointer","boxShadow":"0 .25em .4em rgba(0,0,0,.2)"}}>
                    {"COBA LAGI"}
                  </button>
                  {"\n        "}
                  <button type="button" onClick={$v.onNext} style={{"padding":".7em 1.6em","borderRadius":".7em","border":".2em solid #b07708","background":"linear-gradient(#ffd75e,#f5a406)","color":"#3a2a06","fontFamily":"inherit","fontSize":"1.4em","fontWeight":"800","letterSpacing":".04em","cursor":"pointer","boxShadow":"0 .3em .5em rgba(0,0,0,.28),inset 0 .16em 0 rgba(255,255,255,.5)"}}>
                    {"SELANJUTNYA →"}
                  </button>
                  {"\n      "}
                </div>
                {"\n    "}
              </div>
              {"\n  "}
            </div>
          </>
        ) : null}
        {$v.toast ? (
          <>
            {"\n  "}
            <div style={{"position":"absolute","left":"50%","bottom":"4%","zIndex":"70","transform":"translateX(-50%)","padding":".7em 1.6em","borderRadius":"2em","background":"rgba(12,17,22,.9)","border":".15em solid rgba(255,255,255,.35)","color":"#fff","fontFamily":"'Trebuchet MS',sans-serif","fontSize":"1.8em","whiteSpace":"nowrap","animation":"tpToast 2.4s ease forwards"}}>
              {interp($v.toast)}
            </div>
          </>
        ) : null}
      </div>
    </div>
    </>
  );
}
