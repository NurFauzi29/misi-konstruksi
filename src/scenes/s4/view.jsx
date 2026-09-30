// GENERATED oleh scripts/convert-mockup.mjs dari mockup/4. Pengalaman Kerja.dc.html — jangan diedit manual.
import { Fragment } from 'react';
import { arr, cssToObj, interp, str } from '../../dc/runtime.jsx';

export default function View({ $v }) {
  return (
    <>
    <div style={{"width":"100%","height":"100vh","display":"flex","alignItems":"center","justifyContent":"center","background":"#0c1116","fontFamily":"'Trebuchet MS',sans-serif"}}>
      <div style={{"position":"relative","width":"min(100vw,177.78vh)","height":"min(56.25vw,100vh)","fontSize":"min(1vw,1.7778vh)","overflow":"hidden","background":"#8a6a3a","boxShadow":"0 0 4em rgba(0,0,0,.6)"}}>
        {$v.isWorld ? (
          <>
            {"\n  "}
            <div style={cssToObj("position:absolute;inset:0;background-image:" + str($v.mapBg) + ";background-size:cover;background-position:center;animation:s4Fade .25s ease both")}>
              {"\n    "}
              {arr($v.mapNodes).map((n, $i1) => (
                <Fragment key={$i1}>
                  <button type="button" onClick={n?.onClick} title={n?.title} style={cssToObj("position:absolute;left:" + str(n?.left) + ";top:" + str(n?.top) + ";width:12%;height:25%;padding:0;border:0;border-radius:1.4em;background:transparent;cursor:pointer;transition:transform .16s ease")} className="s4p0 s4p1" />
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
              <div style={{"position":"absolute","left":"50%","bottom":"3.4%","transform":"translateX(-50%)","padding":".5em 1.4em","borderRadius":"2em","background":"rgba(12,17,22,.85)","border":".12em solid rgba(255,255,255,.35)","color":"#ffd11a","fontSize":"1.6em","fontWeight":"700","whiteSpace":"nowrap","pointerEvents":"none"}}>
                {"Klik PENGALAMAN KERJA untuk membuka peti profesi"}
              </div>
              {"\n  "}
            </div>
          </>
        ) : null}
        {$v.isMap ? (
          <>
            {"\n  "}
            <div style={{"position":"absolute","inset":"0","backgroundImage":"url(assets/s4/p-bg-peti.webp)","backgroundSize":"100% 100%","animation":"s4Fade .25s ease both"}}>
              {"\n   "}
              <div style={{"position":"absolute","inset":"0"}}>
                {"\n\n    "}
                {arr($v.chests).map((ch, $i1) => (
                  <Fragment key={$i1}>
                    {"\n      "}
                    <button type="button" onClick={ch?.onClick} onMouseEnter={ch?.onEnter} onMouseLeave={ch?.onLeave} title={ch?.title} style={cssToObj("position:absolute;left:" + str(ch?.left) + ";top:" + str(ch?.top) + ";width:" + str(ch?.width) + ";height:" + str(ch?.height) + ";padding:0;border:0;background:transparent;cursor:pointer;transform-origin:50% 72%;transition:transform .18s ease")} className="s4p2 s4p3">
                      {"\n        "}
                      <span style={cssToObj("position:absolute;inset:0;background-image:" + str(ch?.imgCss) + ";background-size:contain;background-position:center bottom;background-repeat:no-repeat;filter:drop-shadow(0 .35em .5em rgba(0,0,0,.45))")} />
                      {"\n        "}
                      <span style={cssToObj("position:absolute;inset:0;background-image:" + str(ch?.imgCss) + ";background-size:contain;background-position:center bottom;background-repeat:no-repeat;filter:brightness(.32) saturate(.5);opacity:" + str(ch?.dim) + ";transition:opacity .3s ease;pointer-events:none")} />
                      {"\n        "}
                      <span style={cssToObj("position:absolute;left:26%;top:34%;width:48%;aspect-ratio:1;border-radius:50%;animation:" + str(ch?.pulse))} />
                      {"\n        "}
                      <span style={cssToObj("position:absolute;right:7%;top:" + str(ch?.badgeTop) + ";width:2.4em;height:2.4em;display:flex;align-items:center;justify-content:center;border-radius:50%;border:.16em solid #fff;box-shadow:0 .2em .35em rgba(0,0,0,.45);font-size:1em;line-height:1;background:" + str(ch?.badgeBg))}>
                        {interp(ch?.badge)}
                      </span>
                      {"\n        "}
                      <span style={cssToObj("position:absolute;left:50%;top:-1.9em;transform:translateX(-50%);padding:.25em .7em;border-radius:.5em;background:rgba(12,17,22,.88);color:#ffd11a;font-size:1em;font-weight:800;letter-spacing:.04em;white-space:nowrap;opacity:" + str(ch?.hintOpacity) + ";transition:opacity .15s ease;pointer-events:none")}>
                        {interp(ch?.hintText)}
                      </span>
                      {"\n      "}
                    </button>
                    {"\n    "}
                  </Fragment>
                ))}
                {"\n   "}
              </div>
              {"\n\n    "}
              {$v.openingShow ? (
                <>
                  {"\n      "}
                  <img src="assets/s4/p-chest-open.webp" alt="Peti terbuka" style={cssToObj("position:absolute;left:" + str($v.openingLeft) + ";top:" + str($v.openingTop) + ";width:11.5%;pointer-events:none;filter:drop-shadow(0 .5em .6em rgba(0,0,0,.45));animation:s4Chest .45s ease both")} />
                  {"\n    "}
                </>
              ) : null}
              {"\n\n    "}
              {$v.allDone ? (
                <>
                  {"\n      "}
                  <button type="button" onClick={$v.onNextDone} title="Lihat hasil proyek" style={{"position":"absolute","right":"2.4%","bottom":"5.4%","display":"flex","alignItems":"center","gap":".5em","padding":".65em 1.5em","borderRadius":".8em","border":".2em solid #b07708","background":"linear-gradient(#ffd75e,#f5a406)","color":"#3a2a06","fontFamily":"inherit","fontSize":"1.6em","fontWeight":"800","letterSpacing":".05em","cursor":"pointer","boxShadow":"0 .4em .7em rgba(0,0,0,.35)","animation":"s4Pop .3s ease both"}} className="s4p4 s4p5">
                    {"SELANJUTNYA ❯"}
                  </button>
                  {"\n    "}
                </>
              ) : null}
              {"\n\n    "}
              <div style={{"position":"absolute","right":"2.2%","top":"15.5%","display":"flex","flexDirection":"column","alignItems":"flex-end","gap":".45em","padding":".6em .9em","borderRadius":".9em","background":"rgba(253,246,230,.95)","border":".16em solid #123a6b","boxShadow":"0 .4em .8em rgba(0,0,0,.35)"}}>
                {"\n      "}
                <div style={{"display":"flex","alignItems":"baseline","gap":".4em","whiteSpace":"nowrap"}}>
                  {"\n        "}
                  <span style={{"fontSize":"1.05em","fontWeight":"800","color":"#123a6b","letterSpacing":".04em"}}>
                    {"PROGRES MISI"}
                  </span>
                  {"\n        "}
                  <span style={{"fontSize":"1.35em","fontWeight":"800","color":"#123a6b"}}>
                    {interp($v.progressCount)}
                  </span>
                  {"\n      "}
                </div>
                {"\n      "}
                <div style={{"display":"flex","gap":".25em","flexWrap":"nowrap"}}>
                  {"\n        "}
                  {arr($v.segs).map((seg, $i1) => (
                    <Fragment key={$i1}>
                      {"\n          "}
                      <span style={cssToObj("width:1.5em;height:.9em;border-radius:.25em;border:.1em solid rgba(18,58,107,.35);background:" + str(seg?.bg) + ";transition:background .3s ease")} />
                      {"\n        "}
                    </Fragment>
                  ))}
                  {"\n      "}
                </div>
                {"\n      "}
                <div style={{"display":"flex","alignItems":"center","gap":".5em","padding":".3em .7em","borderRadius":".6em","background":"#123a6b","color":"#ffd11a","fontSize":"1.15em","fontWeight":"800"}}>
                  {"\n        "}
                  <span>
                    {"★ XP"}
                  </span>
                  <span style={{"color":"#fff"}}>
                    {interp($v.xpLabel)}
                  </span>
                  {"\n      "}
                </div>
                {"\n      \n    "}
              </div>
              {"\n  "}
            </div>
          </>
        ) : null}
        {$v.isMission ? (
          <>
            {"\n  "}
            <div style={{"position":"absolute","inset":"0","backgroundImage":"url(assets/s4/p-bg-peti.webp)","backgroundSize":"cover","backgroundPosition":"center","animation":"s4Fade .25s ease both"}}>
              {"\n    "}
              <div style={{"position":"absolute","inset":"0","background":"rgba(10,24,44,.55)"}} />
              {"\n    "}
              <div style={{"position":"absolute","inset":"2.2% 2%","display":"flex","flexDirection":"column","gap":"1em","padding":"1.1em","borderRadius":"1.4em","border":".22em solid #123a6b","background":"#fdf6e6","boxShadow":"0 1em 2em rgba(0,0,0,.45)","animation":"s4Pop .3s ease both"}}>
                {"\n\n      "}
                <div style={{"flex":"none","display":"flex","alignItems":"center","gap":"1em"}}>
                  {"\n        "}
                  <div style={{"flex":"none","padding":".55em 1em","borderRadius":".8em","background":"linear-gradient(#e8c98d,#c99b52)","border":".16em solid #7c5a2a","color":"#3a2405","lineHeight":"1.15"}}>
                    {"\n          "}
                    <div style={{"fontSize":"1.5em","fontWeight":"800","letterSpacing":".02em"}}>
                      {"MISI KONSTRUKSI"}
                    </div>
                    {"\n          "}
                    <div style={{"fontSize":"1em","fontWeight":"700","letterSpacing":".06em"}}>
                      {"MENJELAJAHI PROFESI TKP"}
                    </div>
                    {"\n        "}
                  </div>
                  {"\n        "}
                  <div style={{"flex":"1","display":"flex","alignItems":"center","gap":"1em","padding":".6em 1em","borderRadius":".9em","background":"#fff","border":".14em solid rgba(18,58,107,.25)"}}>
                    {"\n          "}
                    <div style={{"flex":"1","display":"flex","flexDirection":"column","gap":".4em"}}>
                      {"\n            "}
                      <div style={{"fontSize":"1.3em","fontWeight":"800","color":"#123a6b"}}>
                        {interp($v.progressLabel)}
                      </div>
                      {"\n            "}
                      <div style={{"display":"flex","gap":".3em"}}>
                        {"\n              "}
                        {arr($v.segs).map((seg, $i1) => (
                          <Fragment key={$i1}>
                            {"\n                "}
                            <span style={cssToObj("flex:1;height:1.1em;border-radius:.25em;border:.1em solid rgba(18,58,107,.3);background:" + str(seg?.bg) + ";transition:background .3s ease")} />
                            {"\n              "}
                          </Fragment>
                        ))}
                        {"\n            "}
                      </div>
                      {"\n          "}
                    </div>
                    {"\n          "}
                    <div style={{"flex":"none","display":"flex","alignItems":"center","gap":".6em","padding":".35em .9em","borderRadius":".7em","background":"#123a6b","color":"#ffd11a","fontSize":"1.3em","fontWeight":"800"}}>
                      {"\n            "}
                      <span>
                        {"★ XP"}
                      </span>
                      <span style={{"color":"#fff"}}>
                        {interp($v.xpLabel)}
                      </span>
                      {"\n          "}
                    </div>
                    {"\n        "}
                  </div>
                  {"\n        "}
                  <button type="button" onClick={$v.toggleMusic} title="Nyalakan / matikan musik" style={{"flex":"none","width":"2.6em","height":"2.6em","display":"flex","alignItems":"center","justifyContent":"center","borderRadius":"50%","border":".16em solid #fff","background":"linear-gradient(#5aa9f2,#2170cd)","cursor":"pointer","boxShadow":"0 .25em .45em rgba(0,0,0,.3)"}} className="s4p6">
                    {"\n          "}
                    <svg viewBox="0 0 24 24" aria-hidden="true" style={{"width":"60%","height":"60%"}}>
                      <path d="M4 9.5h3.2L12 5.4v13.2L7.2 14.5H4z" fill="#fff" />
                      <path d="M15.2 9.2a4 4 0 0 1 0 5.6" stroke="#fff" strokeWidth="1.7" fill="none" strokeLinecap="round" opacity={$v.waveOpacity} />
                      <path d="M15.4 8.6l6 6.8M21.4 8.6l-6 6.8" stroke="#ff6a6a" strokeWidth="2" strokeLinecap="round" opacity={$v.muteOpacity} />
                    </svg>
                    {"\n        "}
                  </button>
                  {"\n        "}
                  <button type="button" onClick={$v.onBackToMap} title="Tutup dan kembali ke peta" style={{"flex":"none","width":"2.6em","height":"2.6em","borderRadius":"50%","border":".16em solid #fff","background":"#d63a34","color":"#fff","fontFamily":"inherit","fontSize":"1.6em","fontWeight":"800","lineHeight":"1","cursor":"pointer","boxShadow":"0 .25em .45em rgba(0,0,0,.35)"}} className="s4p6">
                    {"✕"}
                  </button>
                  {"\n      "}
                </div>
                {"\n\n      "}
                <div style={{"flex":"1","minHeight":"0","display":"grid","gridTemplateColumns":"26% 1fr","gap":"1em"}}>
                  {"\n\n        "}
                  <div style={{"minHeight":"0","minWidth":"0","display":"flex","flexDirection":"column","gap":".7em","padding":".8em","borderRadius":"1em","background":"#fff","border":".16em solid rgba(18,58,107,.25)","overflow":"hidden"}}>
                    {"\n          "}
                    <div style={{"flex":"none","alignSelf":"flex-start","padding":".35em .9em","borderRadius":".5em","background":"#2e9c3a","color":"#fff","fontSize":"1.15em","fontWeight":"800","letterSpacing":".06em"}}>
                      {interp($v.cur?.badge)}
                    </div>
                    {"\n          "}
                    <div style={cssToObj("flex:0 1 52%;min-height:0;position:relative;height:52%;width:auto;max-width:100%;aspect-ratio:293/411;align-self:center;border-radius:.7em;overflow:hidden;border:.14em solid rgba(18,58,107,.2);background-image:" + str($v.cur?.imgCss) + ";background-size:contain;background-repeat:no-repeat;background-position:center")} />
                    {"\n          "}
                    <div style={{"flex":"none","padding":".35em","textAlign":"center","borderRadius":".5em","background":"linear-gradient(#e8c98d,#c99b52)","border":".14em solid #7c5a2a","color":"#2b1c04","fontSize":"1.7em","fontWeight":"800","letterSpacing":".02em"}}>
                      {interp($v.cur?.name)}
                    </div>
                    {"\n          "}
                    <div style={{"flex":"1","minHeight":"0","minWidth":"0","overflowY":"auto","overflowX":"hidden","display":"flex","flexDirection":"column","gap":".55em"}}>
                      {"\n            "}
                      <div style={{"fontSize":"1.15em","fontWeight":"800","color":"#123a6b","letterSpacing":".04em"}}>
                        {"TENTANG PROFESI"}
                      </div>
                      {"\n            "}
                      <div style={{"fontSize":"1.15em","lineHeight":"1.4","color":"#31465e","textWrap":"pretty"}}>
                        {interp($v.cur?.about)}
                      </div>
                      {"\n            "}
                      <div style={{"fontSize":"1.15em","fontWeight":"800","color":"#123a6b","letterSpacing":".04em"}}>
                        {"KEAHLIAN UTAMA"}
                      </div>
                      {"\n            "}
                      <div style={{"display":"flex","flexWrap":"wrap","gap":".4em"}}>
                        {"\n              "}
                        {arr($v.cur?.skills).map((sk, $i1) => (
                          <Fragment key={$i1}>
                            {"\n                "}
                            <span style={cssToObj("padding:.3em .7em;border-radius:.5em;background:" + str(sk?.bg) + ";color:#20364f;font-size:1.05em;font-weight:700")}>
                              {interp(sk?.label)}
                            </span>
                            {"\n              "}
                          </Fragment>
                        ))}
                        {"\n            "}
                      </div>
                      {"\n          "}
                    </div>
                    {"\n        "}
                  </div>
                  {"\n\n        "}
                  <div style={{"minHeight":"0","display":"flex","flexDirection":"column","gap":".7em"}}>
                    {"\n          "}
                    <div style={{"flex":"none","display":"flex","alignItems":"stretch","borderRadius":".7em","overflow":"hidden","border":".14em solid #123a6b"}}>
                      {"\n            "}
                      <div style={{"flex":"none","display":"flex","alignItems":"center","padding":".4em 1em","background":"#123a6b","color":"#fff","fontSize":"1.35em","fontWeight":"800","letterSpacing":".05em"}}>
                        {"MISI PROFESI"}
                      </div>
                      {"\n            "}
                      <div style={{"flex":"1","display":"flex","alignItems":"center","justifyContent":"center","padding":".4em 1em","background":"linear-gradient(#ffd75e,#f5a406)","color":"#3a2a06","fontSize":"1.5em","fontWeight":"800","fontStyle":"italic","textAlign":"center"}}>
                        {interp($v.cur?.title)}
                      </div>
                      {"\n          "}
                    </div>
                    {"\n\n          "}
                    <div style={{"flex":"none","display":"flex","flexDirection":"column","gap":".4em","padding":".7em .9em","borderRadius":".8em","background":"#fff","border":".14em solid rgba(18,58,107,.22)"}}>
                      {"\n            "}
                      <div style={{"alignSelf":"flex-start","padding":".25em .8em","borderRadius":".5em","background":"#e8f1fb","color":"#123a6b","fontSize":"1.1em","fontWeight":"800","letterSpacing":".05em"}}>
                        {"SITUASI"}
                      </div>
                      {"\n            "}
                      <div style={{"fontSize":"1.3em","lineHeight":"1.45","color":"#20364f","textWrap":"pretty"}}>
                        {interp($v.cur?.situasi)}
                      </div>
                      {"\n          "}
                    </div>
                    {"\n\n          "}
                    <div style={{"flex":"1","minHeight":"0","overflow":"auto","display":"flex","flexDirection":"column","gap":".6em","padding":".8em .9em","borderRadius":".8em","background":"#fff","border":".14em solid rgba(18,58,107,.22)"}}>
                      {"\n            "}
                      <div style={{"display":"flex","alignItems":"flex-start","flexWrap":"wrap","gap":".5em .7em"}}>
                        {"\n              "}
                        <span style={{"flex":"none","padding":".25em .8em","borderRadius":".5em","background":"#e8f1fb","color":"#123a6b","fontSize":"1.1em","fontWeight":"800","letterSpacing":".05em"}}>
                          {interp($v.cur?.taskKind)}
                        </span>
                        {"\n              "}
                        <span style={{"flex":"1 1 18em","minWidth":"0","fontSize":"1.25em","lineHeight":"1.35","fontWeight":"700","color":"#123a6b","textWrap":"pretty"}}>
                          {interp($v.cur?.taskLabel)}
                        </span>
                        {"\n            "}
                      </div>
                      {"\n\n            "}
                      {$v.cur?.isMcq ? (
                        <>
                          {"\n              "}
                          <div style={{"display":"flex","flexDirection":"column","gap":".5em"}}>
                            {"\n                "}
                            {arr($v.mcq).map((op, $i1) => (
                              <Fragment key={$i1}>
                                {"\n                  "}
                                <button type="button" onClick={op?.onClick} style={cssToObj("display:flex;align-items:center;gap:.9em;width:100%;padding:.55em .8em;border-radius:.7em;border:.14em solid " + str(op?.border) + ";background:" + str(op?.bg) + ";color:#20364f;font-family:inherit;font-size:1.3em;text-align:left;cursor:pointer;transition:transform .12s ease")} className="s4p7">
                                  {"\n                    "}
                                  <span style={cssToObj("flex:none;width:2em;height:2em;display:flex;align-items:center;justify-content:center;border-radius:50%;background:" + str(op?.dotBg) + ";color:#fff;font-weight:800")}>
                                    {interp(op?.letter)}
                                  </span>
                                  {"\n                    "}
                                  <span style={{"flex":"1"}}>
                                    {interp(op?.text)}
                                  </span>
                                  {"\n                  "}
                                </button>
                                {"\n                "}
                              </Fragment>
                            ))}
                            {"\n              "}
                          </div>
                          {"\n            "}
                        </>
                      ) : null}
                      {"\n\n            "}
                      {$v.cur?.isPick ? (
                        <>
                          {"\n              "}
                          <div style={{"display":"flex","flexDirection":"column","gap":".7em"}}>
                            {"\n                "}
                            <div style={{"display":"flex","flexWrap":"wrap","gap":".6em"}}>
                              {"\n                  "}
                              {arr($v.pickItems).map((it, $i1) => (
                                <Fragment key={$i1}>
                                  {"\n                    "}
                                  <div onPointerDown={it?.onDown} style={cssToObj("flex:1 1 7.5em;min-width:7.5em;display:flex;flex-direction:column;align-items:center;gap:.15em;padding:.45em .4em;border-radius:.8em;border:.16em solid " + str(it?.border) + ";background:" + str(it?.bg) + ";color:#20364f;font-weight:700;cursor:grab;opacity:" + str(it?.opacity) + ";user-select:none;touch-action:none;box-shadow:0 .2em .35em rgba(0,0,0,.15)")}>
                                    {"\n                      "}
                                    <span style={{"fontSize":"2.2em","lineHeight":"1","filter":"drop-shadow(0 .06em .06em rgba(0,0,0,.25))"}}>
                                      {interp(it?.icon)}
                                    </span>
                                    {"\n                      "}
                                    <span style={{"fontSize":"1.1em","textAlign":"center","lineHeight":"1.15"}}>
                                      {interp(it?.label)}
                                    </span>
                                    {"\n                    "}
                                  </div>
                                  {"\n                  "}
                                </Fragment>
                              ))}
                              {"\n                "}
                            </div>
                            {"\n                "}
                            <div data-drop="cor" onClick={$v.onDropClick} style={{"display":"flex","flexDirection":"column","gap":".5em","padding":".7em","borderRadius":".8em","border":".18em dashed #2e9c3a","background":"#f1fbf1"}}>
                              {"\n                  "}
                              <div style={{"padding":".3em .8em","borderRadius":".5em","background":"#2e9c3a","color":"#fff","fontSize":"1.2em","fontWeight":"800","letterSpacing":".04em"}}>
                                {"AREA SIAP COR"}
                              </div>
                              {"\n                  "}
                              <div style={{"display":"grid","gridTemplateColumns":"repeat(4,minmax(0,1fr))","gap":".5em"}}>
                                {"\n                    "}
                                {arr($v.corSlots).map((sl, $i1) => (
                                  <Fragment key={$i1}>
                                    {"\n                      "}
                                    <div onClick={sl?.onClick} style={cssToObj("min-height:3.6em;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.1em;text-align:center;padding:.3em;border-radius:.6em;border:.14em dashed rgba(46,156,58,.6);background:" + str(sl?.bg) + ";color:#1d5a26;font-weight:700;cursor:pointer")}>
                                      {"\n                        "}
                                      <span style={{"fontSize":"1.7em","lineHeight":"1"}}>
                                        {interp(sl?.icon)}
                                      </span>
                                      {"\n                        "}
                                      <span style={{"fontSize":"1.05em","lineHeight":"1.15"}}>
                                        {interp(sl?.label)}
                                      </span>
                                      {"\n                      "}
                                    </div>
                                    {"\n                    "}
                                  </Fragment>
                                ))}
                                {"\n                  "}
                              </div>
                              {"\n                "}
                            </div>
                            {"\n              "}
                          </div>
                          {"\n            "}
                        </>
                      ) : null}
                      {"\n\n            "}
                      {$v.cur?.isSpot ? (
                        <>
                          {"\n              "}
                          <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(14em,1fr))","gap":".6em"}}>
                            {"\n                "}
                            {arr($v.spots).map((sp, $i1) => (
                              <Fragment key={$i1}>
                                {"\n                  "}
                                <button type="button" onClick={sp?.onClick} style={cssToObj("display:flex;align-items:center;gap:.6em;padding:.6em .7em;border-radius:.7em;border:.14em solid " + str(sp?.border) + ";background:" + str(sp?.bg) + ";color:#20364f;font-family:inherit;font-size:1.2em;text-align:left;cursor:pointer;transition:transform .12s ease")} className="s4p4">
                                  {"\n                    "}
                                  <span style={cssToObj("flex:none;width:1.9em;height:1.9em;display:flex;align-items:center;justify-content:center;border-radius:50%;background:" + str(sp?.dotBg) + ";color:#fff;font-size:.95em;font-weight:800")}>
                                    {interp(sp?.mark)}
                                  </span>
                                  {"\n                    "}
                                  <span style={{"flex":"1"}}>
                                    {interp(sp?.label)}
                                  </span>
                                  {"\n                  "}
                                </button>
                                {"\n                "}
                              </Fragment>
                            ))}
                            {"\n              "}
                          </div>
                          {"\n            "}
                        </>
                      ) : null}
                      {"\n\n            "}
                      {$v.cur?.isOrder ? (
                        <>
                          {"\n              "}
                          <div style={{"display":"flex","flexDirection":"column","gap":".8em"}}>
                            {"\n                "}
                            <div style={{"display":"flex","flexWrap":"wrap","gap":".6em"}}>
                              {"\n                  "}
                              {arr($v.orderItems).map((it, $i1) => (
                                <Fragment key={$i1}>
                                  {"\n                    "}
                                  <div onPointerDown={it?.onDown} style={cssToObj("flex:1 1 8.5em;min-width:8.5em;display:flex;flex-direction:column;align-items:center;gap:.15em;padding:.45em .4em;border-radius:.8em;border:.16em solid " + str(it?.border) + ";background:" + str(it?.bg) + ";color:#20364f;font-weight:700;cursor:grab;opacity:" + str(it?.opacity) + ";user-select:none;touch-action:none;box-shadow:0 .2em .35em rgba(0,0,0,.15)")}>
                                    {"\n                      "}
                                    <span style={{"fontSize":"2.2em","lineHeight":"1","filter":"drop-shadow(0 .06em .06em rgba(0,0,0,.25))"}}>
                                      {interp(it?.icon)}
                                    </span>
                                    {"\n                      "}
                                    <span style={{"fontSize":"1.1em","textAlign":"center","lineHeight":"1.15"}}>
                                      {interp(it?.label)}
                                    </span>
                                    {"\n                    "}
                                  </div>
                                  {"\n                  "}
                                </Fragment>
                              ))}
                              {"\n                "}
                            </div>
                            {"\n                "}
                            <div style={{"display":"grid","gridTemplateColumns":"repeat(4,minmax(0,1fr))","gap":".6em"}}>
                              {"\n                  "}
                              {arr($v.orderSlots).map((sl, $i1) => (
                                <Fragment key={$i1}>
                                  {"\n                    "}
                                  <div data-drop={sl?.key} onClick={sl?.onClick} style={cssToObj("display:flex;flex-direction:column;gap:.4em;padding:.5em;border-radius:.7em;border:.14em dashed #7ba7d8;background:" + str(sl?.bg) + ";cursor:pointer")}>
                                    {"\n                      "}
                                    <span style={{"width":"1.9em","height":"1.9em","display":"flex","alignItems":"center","justifyContent":"center","borderRadius":"50%","background":"#123a6b","color":"#fff","fontSize":"1.1em","fontWeight":"800"}}>
                                      {interp(sl?.n)}
                                    </span>
                                    {"\n                      "}
                                    <span style={{"minHeight":"2.6em","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center","gap":".1em","textAlign":"center","color":"#20364f","fontWeight":"700"}}>
                                      {"\n                        "}
                                      <span style={{"fontSize":"1.7em","lineHeight":"1"}}>
                                        {interp(sl?.icon)}
                                      </span>
                                      {"\n                        "}
                                      <span style={{"fontSize":"1.05em","lineHeight":"1.15"}}>
                                        {interp(sl?.label)}
                                      </span>
                                      {"\n                      "}
                                    </span>
                                    {"\n                    "}
                                  </div>
                                  {"\n                  "}
                                </Fragment>
                              ))}
                              {"\n                "}
                            </div>
                            {"\n              "}
                          </div>
                          {"\n            "}
                        </>
                      ) : null}
                      {"\n\n            "}
                      {$v.cur?.isDoc ? (
                        <>
                          {"\n              "}
                          <div style={{"display":"flex","flexDirection":"column","gap":".8em"}}>
                            {"\n                "}
                            <div style={{"display":"flex","flexWrap":"wrap","gap":".6em"}}>
                              {"\n                  "}
                              {arr($v.docItems).map((it, $i1) => (
                                <Fragment key={$i1}>
                                  {"\n                    "}
                                  <div onPointerDown={it?.onDown} style={cssToObj("flex:1 1 8.5em;min-width:8.5em;display:flex;flex-direction:column;align-items:center;gap:.15em;padding:.45em .4em;border-radius:.8em;border:.16em solid " + str(it?.border) + ";background:" + str(it?.bg) + ";color:#20364f;font-weight:700;cursor:grab;opacity:" + str(it?.opacity) + ";user-select:none;touch-action:none;box-shadow:0 .2em .35em rgba(0,0,0,.15)")}>
                                    {"\n                      "}
                                    <span style={{"fontSize":"2.2em","lineHeight":"1","filter":"drop-shadow(0 .06em .06em rgba(0,0,0,.25))"}}>
                                      {interp(it?.icon)}
                                    </span>
                                    {"\n                      "}
                                    <span style={{"fontSize":"1.1em","textAlign":"center","lineHeight":"1.15"}}>
                                      {interp(it?.label)}
                                    </span>
                                    {"\n                    "}
                                  </div>
                                  {"\n                  "}
                                </Fragment>
                              ))}
                              {"\n                "}
                            </div>
                            {"\n                "}
                            <div style={{"display":"grid","gridTemplateColumns":"repeat(4,minmax(0,1fr))","gap":".6em"}}>
                              {"\n                  "}
                              {arr($v.docFolders).map((fd, $i1) => (
                                <Fragment key={$i1}>
                                  {"\n                    "}
                                  <div data-drop={fd?.key} onClick={fd?.onClick} style={{"display":"flex","flexDirection":"column","alignItems":"center","gap":".3em","padding":".3em","borderRadius":".8em","cursor":"pointer"}}>
                                    {"\n                      "}
                                    <span style={cssToObj("width:100%;height:6.4em;background-image:" + str(fd?.imgCss) + ";background-size:contain;background-position:center bottom;background-repeat:no-repeat;filter:drop-shadow(0 .25em .35em rgba(0,0,0,.2))")} />
                                    {"\n                      "}
                                    <span style={cssToObj("width:100%;display:flex;flex-direction:column;align-items:center;gap:.2em;padding:.25em .4em;border-radius:.6em;border:.16em solid " + str(fd?.border) + ";background:" + str(fd?.bg))}>
                                      {"\n                        "}
                                      <span style={cssToObj("font-size:1.15em;font-weight:800;color:" + str(fd?.ink) + ";letter-spacing:.04em")}>
                                        {interp(fd?.name)}
                                      </span>
                                      {"\n                        "}
                                      <span style={{"minHeight":"1.5em","display":"flex","alignItems":"center","justifyContent":"center","color":"#20364f","fontSize":"1.05em","fontWeight":"700","textAlign":"center"}}>
                                        {interp(fd?.label)}
                                      </span>
                                      {"\n                      "}
                                    </span>
                                    {"\n                    "}
                                  </div>
                                  {"\n                  "}
                                </Fragment>
                              ))}
                              {"\n                "}
                            </div>
                            {"\n              "}
                          </div>
                          {"\n            "}
                        </>
                      ) : null}
                      {"\n          "}
                    </div>
                    {"\n\n          "}
                    <div style={{"flex":"none","display":"flex","alignItems":"center","gap":".9em"}}>
                      {"\n            "}
                      <button type="button" onClick={$v.onBackToMap} style={{"flex":"none","display":"flex","alignItems":"center","gap":".5em","padding":".55em 1.2em","borderRadius":".8em","border":".16em solid #7d8a99","background":"linear-gradient(#f2f4f7,#d3dae2)","color":"#123a6b","fontFamily":"inherit","fontSize":"1.35em","fontWeight":"800","letterSpacing":".03em","cursor":"pointer"}} className="s4p8">
                        {"❮ KEMBALI"}
                      </button>
                      {"\n            "}
                      <button type="button" onClick={$v.onCheck} style={cssToObj("flex:1;padding:.6em 1.2em;border-radius:.8em;border:.18em solid " + str($v.checkBorder) + ";background:" + str($v.checkBg) + ";color:" + str($v.checkInk) + ";font-family:inherit;font-size:1.6em;font-weight:800;letter-spacing:.04em;cursor:" + str($v.checkCursor) + ";box-shadow:0 .3em .55em rgba(0,0,0,.25)")} className="s4p8">
                        {interp($v.checkLabel)}
                      </button>
                      {"\n            "}
                      {$v.hintOn ? (
                        <>
                          {"\n              "}
                          <div style={{"flex":"none","maxWidth":"22%","padding":".5em .8em","borderRadius":".6em","background":"#fff7d1","border":".14em solid #e0b400","color":"#5a4306","fontSize":"1.05em","lineHeight":"1.35"}}>
                            {"\n                "}
                            <div style={{"fontWeight":"800","letterSpacing":".05em","color":"#8a6a00"}}>
                              {"PETUNJUK"}
                            </div>
                            {"\n                "}
                            <div>
                              {interp($v.cur?.hint)}
                            </div>
                            {"\n              "}
                          </div>
                          {"\n            "}
                        </>
                      ) : null}
                      {"\n          "}
                    </div>
                    {"\n        "}
                  </div>
                  {"\n      "}
                </div>
                {"\n    "}
              </div>
              {"\n  "}
            </div>
          </>
        ) : null}
        {$v.isDone ? (
          <>
            {"\n  "}
            <div style={{"position":"absolute","inset":"0","backgroundImage":"url(assets/s4/p-bg-peti.webp)","backgroundSize":"cover","backgroundPosition":"center","animation":"s4Fade .25s ease both"}}>
              {"\n    "}
              <div style={{"position":"absolute","inset":"0","background":"rgba(8,22,40,.68)"}} />
              {"\n    "}
              <div style={{"position":"absolute","inset":"0","display":"flex","alignItems":"center","justifyContent":"center","padding":"2%"}}>
                {"\n    "}
                <div style={{"width":"74%","maxHeight":"100%","overflow":"auto","display":"flex","flexDirection":"column","alignItems":"center","gap":".9em","padding":"1.6em 2em","borderRadius":"1.4em","border":".22em solid #f5a406","background":"#fdf6e6","boxShadow":"0 1em 2em rgba(0,0,0,.5)","animation":"s4Pop .35s ease both"}}>
                  {"\n      "}
                  <div style={{"fontSize":"4em","lineHeight":"1","animation":"s4Star .5s ease both"}}>
                    {"🏆"}
                  </div>
                  {"\n      "}
                  <div style={{"fontSize":"3em","fontWeight":"800","color":"#123a6b","letterSpacing":".03em"}}>
                    {"PROYEK SELESAI!"}
                  </div>
                  {"\n      "}
                  <div style={{"fontSize":"1.5em","color":"#31465e","textAlign":"center"}}>
                    {"Hebat! Kamu telah menjelajahi 8 profesi dalam proyek konstruksi."}
                  </div>
                  {"\n      "}
                  <div style={{"display":"grid","gridTemplateColumns":"repeat(4,minmax(0,1fr))","gap":".5em","width":"100%"}}>
                    {"\n        "}
                    {arr($v.doneList).map((d, $i1) => (
                      <Fragment key={$i1}>
                        {"\n          "}
                        <div style={{"display":"flex","alignItems":"center","gap":".5em","padding":".45em .7em","borderRadius":".6em","background":"#eaf7ea","border":".12em solid #2e9c3a","color":"#1d5a26","fontSize":"1.2em","fontWeight":"800"}}>
                          {"\n            "}
                          <span>
                            {"☑"}
                          </span>
                          <span>
                            {interp(d?.name)}
                          </span>
                          {"\n          "}
                        </div>
                        {"\n        "}
                      </Fragment>
                    ))}
                    {"\n      "}
                  </div>
                  {"\n      "}
                  <div style={{"padding":".45em 1.4em","borderRadius":".7em","background":"#123a6b","color":"#ffd11a","fontSize":"1.9em","fontWeight":"800"}}>
                    {"★ 800 XP"}
                  </div>
                  {"\n      "}
                  <div style={{"fontSize":"1.35em","color":"#31465e","textAlign":"center","textWrap":"pretty"}}>
                    {"Setiap profesi memiliki tugas dan keterampilan yang berbeda. Profesi mana yang paling menarik untuk kamu eksplorasi lebih lanjut?"}
                  </div>
                  {"\n      "}
                  <div style={{"display":"flex","gap":".9em","flexWrap":"wrap","justifyContent":"center"}}>
                    {"\n        "}
                    <button type="button" onClick={$v.onNextMisi} style={{"padding":".6em 1.6em","borderRadius":".8em","border":".18em solid #b07708","background":"linear-gradient(#ffd75e,#f5a406)","color":"#3a2a06","fontFamily":"inherit","fontSize":"1.5em","fontWeight":"800","letterSpacing":".04em","cursor":"pointer"}} className="s4p8">
                      {"MISI SELANJUTNYA ❯"}
                    </button>
                    {"\n      "}
                  </div>
                  {"\n    "}
                </div>
                {"\n    "}
              </div>
              {"\n  "}
            </div>
          </>
        ) : null}
        {$v.fbShow ? (
          <>
            {"\n  "}
            <div style={{"position":"absolute","inset":"0","zIndex":"40","display":"flex","alignItems":"center","justifyContent":"center","background":"rgba(8,22,40,.6)","animation":"s4Fade .2s ease both"}}>
              {"\n    "}
              <div style={cssToObj("width:52%;display:flex;flex-direction:column;align-items:center;gap:.9em;padding:1.5em 1.8em;border-radius:1.2em;border:.22em solid " + str($v.fb?.accent) + ";background:#fdf6e6;box-shadow:0 1em 2em rgba(0,0,0,.45);animation:s4Pop .28s ease both")}>
                {"\n      "}
                <div style={cssToObj("font-size:2.2em;font-weight:800;color:" + str($v.fb?.accent) + ";text-align:center;letter-spacing:.02em")}>
                  {interp($v.fb?.title)}
                </div>
                {"\n      "}
                <div style={{"fontSize":"1.45em","lineHeight":"1.45","color":"#31465e","textAlign":"center","textWrap":"pretty"}}>
                  {interp($v.fb?.body)}
                </div>
                {"\n      "}
                {$v.fb?.ok ? (
                  <>
                    {"\n        "}
                    <div style={{"padding":".4em 1.2em","borderRadius":".7em","background":"#123a6b","color":"#ffd11a","fontSize":"1.6em","fontWeight":"800","animation":"s4Star .4s ease both"}}>
                      {"★ +100 XP"}
                    </div>
                    {"\n      "}
                  </>
                ) : null}
                {"\n      "}
                <button type="button" onClick={$v.fb?.onBtn} style={cssToObj("padding:.6em 1.5em;border-radius:.8em;border:.18em solid " + str($v.fb?.btnBorder) + ";background:" + str($v.fb?.btnBg) + ";color:" + str($v.fb?.btnInk) + ";font-family:inherit;font-size:1.5em;font-weight:800;letter-spacing:.04em;cursor:pointer")} className="s4p8">
                  {interp($v.fb?.btn)}
                </button>
                {"\n    "}
              </div>
              {"\n  "}
            </div>
          </>
        ) : null}
        {$v.isMap ? (
          <>
            <button type="button" onClick={$v.onBackToWorld} title="Kembali ke peta misi" style={{"position":"absolute","left":"83.4%","top":"3.4%","width":"4.4%","height":"9.4%","zIndex":"50","padding":"0","border":"0","borderRadius":".8em","background":"transparent","cursor":"pointer","transition":"transform .16s ease"}} className="s4p9 s4pa">
              {"\n  "}
              <span style={{"position":"absolute","left":"50%","top":"50%","width":"106%","aspectRatio":"1","transform":"translate(-50%,-50%)","display":"flex","alignItems":"center","justifyContent":"center","borderRadius":"50%","border":".22em solid #fff","background":"linear-gradient(#7cd08a,#2e9c3a 62%,#1d6a26)","boxShadow":"0 .3em .5em rgba(0,0,0,.4)"}}>
                {"\n    "}
                <svg viewBox="0 0 24 24" aria-hidden="true" style={{"width":"62%","height":"62%"}}>
                  <path d="M3.4 6.2 9 4.2v13.6l-5.6 2z" fill="#fff" />
                  <path d="M9 4.2l6 2v13.6l-6-2z" fill="#e8f5ea" />
                  <path d="M15 6.2l5.6-2v13.6l-5.6 2z" fill="#fff" />
                </svg>
                {"\n  "}
              </span>
            </button>
          </>
        ) : null}
        {$v.showTopBtns ? (
          <>
            <button type="button" onClick={$v.toggleMusic} title="Nyalakan / matikan musik" style={{"position":"absolute","left":"88.6%","top":"3.4%","width":"4.4%","height":"9.4%","zIndex":"50","padding":"0","border":"0","borderRadius":".8em","background":"transparent","cursor":"pointer","transition":"transform .16s ease"}} className="s4p9 s4pa">
              {"\n  "}
              <span style={{"position":"absolute","left":"50%","top":"50%","width":"106%","aspectRatio":"1","transform":"translate(-50%,-50%)","display":"flex","alignItems":"center","justifyContent":"center","borderRadius":"50%","border":".22em solid #fff","background":"linear-gradient(#5aa9f2,#2170cd 62%,#12539f)","boxShadow":"0 .3em .5em rgba(0,0,0,.4)"}}>
                {"\n    "}
                <svg viewBox="0 0 24 24" aria-hidden="true" style={{"width":"60%","height":"60%"}}>
                  <path d="M4 9.5h3.2L12 5.4v13.2L7.2 14.5H4z" fill="#fff" />
                  <path d="M15.2 9.2a4 4 0 0 1 0 5.6" stroke="#fff" strokeWidth="1.7" fill="none" strokeLinecap="round" opacity={$v.waveOpacity} />
                  <path d="M17.6 6.9a7 7 0 0 1 0 10.2" stroke="#fff" strokeWidth="1.7" fill="none" strokeLinecap="round" opacity={$v.waveOpacity} />
                  <path d="M15.4 8.6l6 6.8M21.4 8.6l-6 6.8" stroke="#ff6a6a" strokeWidth="2" strokeLinecap="round" opacity={$v.muteOpacity} />
                </svg>
                {"\n  "}
              </span>
            </button>
            <button type="button" onClick={$v.onHome} title="Kembali ke Home" style={{"position":"absolute","left":"93.8%","top":"3.4%","width":"4.4%","height":"9.4%","zIndex":"50","padding":"0","border":"0","borderRadius":".8em","background":"transparent","cursor":"pointer","transition":"transform .16s ease"}} className="s4p9 s4pa">
              {"\n  "}
              <span style={{"position":"absolute","left":"50%","top":"50%","width":"106%","aspectRatio":"1","transform":"translate(-50%,-50%)","display":"flex","alignItems":"center","justifyContent":"center","borderRadius":"50%","border":".22em solid #fff","background":"linear-gradient(#ffb23e,#f57c00 62%,#cf5a00)","boxShadow":"0 .3em .5em rgba(0,0,0,.4)"}}>
                {"\n    "}
                <svg viewBox="0 0 24 24" aria-hidden="true" style={{"width":"62%","height":"62%"}}>
                  <path d="M12 3.6 3.4 11h2.3v9.4h5.1v-5.6h2.4v5.6h5.1V11h2.3z" fill="#fff" />
                </svg>
                {"\n  "}
              </span>
            </button>
          </>
        ) : null}
        {$v.dragShow ? (
          <>
            {"\n  "}
            <div style={cssToObj("position:fixed;left:" + str($v.dragX) + ";top:" + str($v.dragY) + ";z-index:70;transform:translate(-50%,-50%);padding:.5em 1em;border-radius:.6em;background:#fff;border:.16em solid #f5a406;color:#123a6b;font-size:1.3em;font-weight:800;box-shadow:0 .4em .8em rgba(0,0,0,.35);pointer-events:none")}>
              {interp($v.dragLabel)}
            </div>
          </>
        ) : null}
        {$v.toastShow ? (
          <>
            {"\n  "}
            <div style={{"position":"absolute","left":"50%","bottom":"16%","zIndex":"60","padding":".55em 1.4em","borderRadius":"2em","background":"rgba(12,17,22,.9)","border":".12em solid rgba(255,255,255,.35)","color":"#ffd11a","fontSize":"1.5em","fontWeight":"700","whiteSpace":"nowrap","pointerEvents":"none","animation":"s4Toast 2.4s ease both"}}>
              {interp($v.toastText)}
            </div>
          </>
        ) : null}
      </div>
    </div>
    </>
  );
}
